// "FROM FLAT TO FORM" — a procedurally modelled steel sheet that is punched,
// bent, welded, painted, inspected and shipped as the visitor scrolls.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, BoxGeometry, CylinderGeometry, PlaneGeometry,
  MeshPhysicalMaterial, MeshBasicMaterial, PointsMaterial, BufferGeometry, BufferAttribute, Points, Color,
  Vector3, PMREMGenerator, CanvasTexture, RepeatWrapping, SRGBColorSpace, ACESFilmicToneMapping,
  DirectionalLight, PointLight, AdditiveBlending, LineSegments, LineDashedMaterial, EdgesGeometry, LineBasicMaterial,
  MathUtils, DoubleSide, Float32BufferAttribute,
} from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const S = 1.6;        // panel size
const T = 0.035;      // sheet thickness
const RED = new Color('#a30c13');
const STEEL = new Color('#a9aeb6');

const clamp01 = (x) => Math.min(1, Math.max(0, x));
const seg = (p, a, b) => clamp01((p - a) / (b - a));
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const smooth = (t) => t * t * (3 - 2 * t);

// timeline (fraction of the pinned process section)
const PH = {
  design: [0.0, 0.12],
  punch: [0.12, 0.27],
  bend: [0.27, 0.47],
  weld: [0.47, 0.62],
  paint: [0.62, 0.76],
  inspect: [0.76, 0.88],
  ship: [0.88, 1.0],
};
const PHASE_KEYS = Object.keys(PH);

function brushedTexture() {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 512;
  const g = c.getContext('2d');
  g.fillStyle = '#8a8a8a'; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 2600; i++) {
    const y = Math.random() * 512, l = 60 + Math.random() * 400, x = Math.random() * 512;
    const v = 110 + Math.random() * 90;
    g.strokeStyle = `rgba(${v},${v},${v},${0.08 + Math.random() * 0.25})`;
    g.lineWidth = Math.random() * 1.4;
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + l, y + (Math.random() - 0.5) * 2); g.stroke();
  }
  const t = new CanvasTexture(c);
  t.wrapS = t.wrapT = RepeatWrapping;
  return t;
}

function sparkSprite() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)');
  gr.addColorStop(0.25, 'rgba(255,214,140,.9)');
  gr.addColorStop(0.6, 'rgba(255,120,30,.25)');
  gr.addColorStop(1, 'rgba(255,80,0,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  return t;
}

/**
 * Sheet-metal material with shader hooks:
 *  - uPunch: progressive turret-punch perforation (discard in local UV space)
 *  - uPaintY: powder-coat wipe (world Y threshold)
 */
function makeMaterial(shared, pattern) {
  const m = new MeshPhysicalMaterial({
    color: STEEL.clone(), metalness: 1, roughness: 0.32, roughnessMap: shared.brushed,
    anisotropy: 0.6, clearcoat: 0, clearcoatRoughness: 0.25, side: DoubleSide,
  });
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uPunch = shared.uPunch;
    sh.uniforms.uPaintY = shared.uPaintY;
    sh.uniforms.uPaint = shared.uPaint;
    sh.uniforms.uHeat = shared.uHeat;
    sh.uniforms.uPattern = { value: pattern };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vLocalN; varying vec2 vUv2; varying vec3 vWPos;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvLocalN = normal; vUv2 = uv; vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec3 vLocalN; varying vec2 vUv2; varying vec3 vWPos;
        uniform float uPunch; uniform float uPaintY; uniform vec3 uPaint; uniform float uPattern; uniform float uHeat;
        float holeMask(vec2 uv, float pattern, float prog){
          if (pattern < 0.5) return 0.0;
          vec2 p = uv;
          if (pattern < 1.5) {           // round vent grid
            float n = 11.0;
            vec2 g = p * n; vec2 id = floor(g); vec2 f = fract(g) - 0.5;
            if (id.x < 1.0 || id.y < 1.0 || id.x > n - 2.0 || id.y > n - 2.0) return 0.0;
            float idx = (id.y * n + (mod(id.y, 2.0) > 0.5 ? n - 1.0 - id.x : id.x)) / (n * n);
            float r = 0.26;
            return (length(f) < r && idx < prog) ? 1.0 : 0.0;
          } else if (pattern < 2.5) {    // louver slots
            float rows = 9.0;
            float gy = p.y * rows; float id = floor(gy); float fy = fract(gy) - 0.5;
            if (id < 1.0 || id > rows - 2.0) return 0.0;
            float x = p.x;
            float slotOn = step(0.22, x) * step(x, 0.78);
            float idx = id / rows;
            return (abs(fy) < 0.14 && slotOn > 0.5 && idx < prog) ? 1.0 : 0.0;
          } else {                       // cable knockout + small holes on lid
            vec2 c = p - 0.5;
            float big = step(length(c), 0.17) * step(0.02, prog);
            vec2 g = p * 6.0; vec2 id = floor(g); vec2 f = fract(g) - 0.5;
            float ring = (id.x == 0.0 || id.y == 0.0 || id.x == 5.0 || id.y == 5.0) ? 0.0 : 1.0;
            float corner = (length(p - vec2(0.12)) < 0.035 || length(p - vec2(0.88,0.12)) < 0.035 || length(p - vec2(0.12,0.88)) < 0.035 || length(p - vec2(0.88)) < 0.035) ? 1.0 : 0.0;
            return max(big * step(0.5, prog), corner * step(0.8, prog));
          }
        }`)
      .replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
        if (abs(vLocalN.y) > 0.5 && holeMask(vUv2, uPattern, uPunch) > 0.5) discard;`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        float painted = smoothstep(uPaintY + 0.04, uPaintY - 0.04, vWPos.y);
        diffuseColor.rgb = mix(diffuseColor.rgb, uPaint, painted);`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, 0.36, painted);`)
      .replace('#include <metalnessmap_fragment>', `#include <metalnessmap_fragment>
        metalnessFactor = mix(metalnessFactor, 0.12, painted);`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        totalEmissiveRadiance += vec3(1.0, 0.45, 0.12) * uHeat * (1.0 - painted);`);
  };
  m.customProgramCacheKey = () => 'sheet-' + pattern;
  return m;
}

export function init() {
  const canvas = document.getElementById('gl');
  const section = document.querySelector('[data-process]');
  const hero = document.querySelector('.hero');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isSmall = () => innerWidth < 900;

  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch (e) {
    document.documentElement.classList.add('no-gl');
    return;
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio, isSmall() ? 1.5 : 1.75));
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.92;
  renderer.outputColorSpace = SRGBColorSpace;

  const scene = new Scene();
  const pmrem = new PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.75;

  const camera = new PerspectiveCamera(32, 1, 0.1, 100);

  const key = new DirectionalLight('#ffffff', 1.4); key.position.set(4, 8, 5); scene.add(key);
  const rim = new PointLight('#ff2a2a', 18, 12, 2); rim.position.set(-3.5, 1.5, -2.5); scene.add(rim);
  const weldLight = new PointLight('#ffae4a', 0, 4, 2); scene.add(weldLight);

  // shared uniforms
  const shared = {
    brushed: brushedTexture(),
    uPunch: { value: 0 }, uPaintY: { value: -5 }, uPaint: { value: RED.clone() }, uHeat: { value: 0 },
  };
  shared.brushed.repeat.set(1, 1);

  const model = new Group();
  scene.add(model);
  const geo = new BoxGeometry(S, T, S);
  const panel = (pattern) => new Mesh(geo, makeMaterial(shared, pattern));

  // base
  const base = panel(0); model.add(base);
  // side flaps: [pivot, axis, sign, pattern]
  const flaps = [];
  const addFlap = (px, pz, axis, sign, pattern, offX, offZ) => {
    const pivot = new Group(); pivot.position.set(px, 0, pz); model.add(pivot);
    const m = panel(pattern); m.position.set(offX, 0, offZ); pivot.add(m);
    flaps.push({ pivot, axis, sign, mesh: m });
    return pivot;
  };
  addFlap(0, S / 2, 'x', -1, 2, 0, S / 2);    // front — louvers
  const back = addFlap(0, -S / 2, 'x', 1, 1, 0, -S / 2); // back — vent grid
  addFlap(S / 2, 0, 'z', 1, 1, S / 2, 0);     // right — vent grid
  addFlap(-S / 2, 0, 'z', -1, 2, -S / 2, 0);  // left — louvers
  // lid hinged on back flap
  const lidPivot = new Group(); lidPivot.position.set(0, 0, -S); back.add(lidPivot);
  const lid = panel(3); lid.position.set(0, 0, -S / 2); lidPivot.add(lid);

  // bend lines (design phase)
  const bendPts = [];
  const hs = S / 2;
  [[-hs, hs, hs, hs], [-hs, -hs, hs, -hs], [hs, -hs, hs, hs], [-hs, -hs, -hs, hs], [-hs, -S - hs, hs, -S - hs]].forEach(([x1, z1, x2, z2]) => bendPts.push(x1, T / 2 + 0.002, z1, x2, T / 2 + 0.002, z2));
  const bendGeo = new BufferGeometry(); bendGeo.setAttribute('position', new Float32BufferAttribute(bendPts, 3));
  const bendMat = new LineDashedMaterial({ color: '#ff3b3f', dashSize: 0.06, gapSize: 0.05, transparent: true, opacity: 0 });
  const bendLines = new LineSegments(bendGeo, bendMat); bendLines.computeLineDistances(); model.add(bendLines);

  // blueprint outline of the flat pattern
  const outline = new Group(); model.add(outline);
  const edgeMat = new LineBasicMaterial({ color: '#9fb4c8', transparent: true, opacity: 0 });
  [[0, 0], [0, S], [0, -S], [S, 0], [-S, 0], [0, -2 * S]].forEach(([x, z]) => {
    const e = new LineSegments(new EdgesGeometry(new PlaneGeometry(S, S).rotateX(-Math.PI / 2)), edgeMat);
    e.position.set(x, T / 2 + 0.004, z); outline.add(e);
  });

  // weld beads on vertical seams
  const beadMat = makeMaterial(shared, 0);
  const beads = [];
  [[hs, hs], [-hs, hs], [hs, -hs], [-hs, -hs]].forEach(([x, z]) => {
    const b = new Mesh(new CylinderGeometry(0.022, 0.022, S, 8, 1).translate(0, S / 2, 0), beadMat);
    b.position.set(x, T / 2, z); b.scale.y = 0.0001; b.visible = false; model.add(b); beads.push(b);
  });

  // sparks
  const N = isSmall() ? 260 : 520;
  const sPos = new Float32Array(N * 3), sVel = new Float32Array(N * 3), sLife = new Float32Array(N);
  const sGeo = new BufferGeometry(); sGeo.setAttribute('position', new BufferAttribute(sPos, 3));
  const sMat = new PointsMaterial({ size: 0.05, map: sparkSprite(), transparent: true, depthWrite: false, blending: AdditiveBlending, color: '#ffd9a0' });
  const sparks = new Points(sGeo, sMat); sparks.frustumCulled = false; model.add(sparks);
  let sHead = 0;
  const emit = (p, n) => {
    for (let k = 0; k < n; k++) {
      const i = sHead; sHead = (sHead + 1) % N;
      sPos[i * 3] = p.x; sPos[i * 3 + 1] = p.y; sPos[i * 3 + 2] = p.z;
      const a = Math.random() * Math.PI * 2, sp = 0.8 + Math.random() * 2.2;
      sVel[i * 3] = Math.cos(a) * sp * 0.7 + (p.x > 0 ? 0.6 : -0.6); sVel[i * 3 + 1] = Math.random() * 2.2 + 0.4; sVel[i * 3 + 2] = Math.sin(a) * sp * 0.7 + (p.z > 0 ? 0.6 : -0.6);
      sLife[i] = 0.5 + Math.random() * 0.6;
    }
  };
  for (let i = 0; i < N; i++) { sPos[i * 3 + 1] = -99; sLife[i] = 0; }

  // inspection laser
  const laser = new Mesh(new PlaneGeometry(S * 1.7, S * 1.7).rotateX(-Math.PI / 2), new MeshBasicMaterial({ color: '#ff2a2a', transparent: true, opacity: 0, blending: AdditiveBlending, depthWrite: false, side: DoubleSide }));
  model.add(laser);
  const laserEdge = new LineSegments(new EdgesGeometry(new PlaneGeometry(S * 1.7, S * 1.7).rotateX(-Math.PI / 2)), new LineBasicMaterial({ color: '#ff5a5a', transparent: true, opacity: 0 }));
  laser.add(laserEdge);

  // floor grid (blueprint table)
  const gridMat = new LineBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.06 });
  const gpts = [];
  for (let i = -10; i <= 10; i++) { gpts.push(i * 0.4, 0, -4, i * 0.4, 0, 4, -4, 0, i * 0.4, 4, 0, i * 0.4); }
  const gridGeo = new BufferGeometry(); gridGeo.setAttribute('position', new Float32BufferAttribute(gpts, 3));
  const grid = new LineSegments(gridGeo, gridMat); grid.position.y = -0.02; model.add(grid);

  // DOM hooks
  const steps = [...document.querySelectorAll('.pstep')];
  const rail = [...document.querySelectorAll('.process__rail li')];
  const countEl = document.querySelector('[data-step-count]');
  const hudEl = document.querySelector('[data-hud]');

  // camera keyframes
  const camA = new Vector3(0.4, 7.2, 7.6), lookA = new Vector3(0, 0, -0.6);   // hero: sheet on the table
  const camB = new Vector3(0.8, 5.6, 6.4), lookB = new Vector3(0, 0.1, -0.5);  // punching close-up
  const camC = new Vector3(4.6, 4.2, 5.4), lookC = new Vector3(0, 0.55, 0);    // bending
  const camD = new Vector3(4.3, 4.3, 4.3), lookD = new Vector3(0, 0.8, 0);     // isometric (logo-like)
  const camE = new Vector3(5.6, 4.6, 6.4), lookE = new Vector3(0, 1.4, 0);
  const tmpV = new Vector3(), tmpL = new Vector3();

  let W = 0, H = 0;
  function resize() {
    W = innerWidth; H = innerHeight;
    renderer.setSize(W, H, false);
    camera.aspect = W / H;
    // shift the subject to the right on wide screens, up on narrow screens
    camera.fov = W < 900 ? 44 : 32;
    camera.updateProjectionMatrix();
  }
  resize();
  addEventListener('resize', resize);

  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  addEventListener('pointermove', (e) => { mouse.tx = e.clientX / innerWidth - 0.5; mouse.ty = e.clientY / innerHeight - 0.5; }, { passive: true });

  function progress() {
    const r = section.getBoundingClientRect();
    const total = r.height - innerHeight;
    return { p: clamp01(-r.top / total), before: r.top > 0, after: r.bottom < innerHeight * 0.4, heroK: clamp01(r.top / innerHeight) };
  }

  let lastActive = -1;
  const tmp = new Vector3();
  function apply(p, t, dt) {
    const d = seg(p, ...PH.design), pu = seg(p, ...PH.punch), be = seg(p, ...PH.bend), we = seg(p, ...PH.weld);
    const pa = seg(p, ...PH.paint), ins = seg(p, ...PH.inspect), sh = seg(p, ...PH.ship);

    // design: blueprint outline & bend lines
    edgeMat.opacity = 0.55 * (1 - smooth(pu)) * (0.35 + 0.65 * smooth(d)) + (p <= 0 ? 0.25 : 0);
    bendMat.opacity = 0.9 * smooth(d) * (1 - smooth(seg(be, 0, 0.3)));
    gridMat.opacity = 0.07 * (1 - smooth(be));

    // punching
    shared.uPunch.value = ease(pu);

    // bending: flaps one after another, lid last
    const order = [0, 1, 2, 3];
    flaps.forEach((f, i) => {
      const k = ease(seg(be, order[i] * 0.16, order[i] * 0.16 + 0.34));
      f.pivot.rotation[f.axis] = f.sign * (Math.PI / 2) * k;
    });
    lidPivot.rotation.x = (Math.PI / 2) * ease(seg(be, 0.7, 1));

    // model position: flat net centred → cube centred
    const fold = ease(seg(be, 0, 0.6));
    model.position.set(0, -S / 2 * smooth(seg(be, 0.3, 1)), 0.8 * (1 - fold));

    // welding
    const weldOn = we > 0 && we < 1;
    beads.forEach((b, i) => {
      const k = seg(we, i * 0.22, i * 0.22 + 0.3);
      b.visible = k > 0; b.scale.y = Math.max(0.0001, k);
      if (weldOn && k > 0 && k < 1) {
        tmp.set(b.position.x, T / 2 + S * k, b.position.z);
        emit(tmp, reduce ? 0 : Math.ceil(dt * 380));
        weldLight.position.copy(tmp).applyMatrix4(model.matrixWorld);
      }
    });
    const flick = 0.6 + 0.4 * Math.sin(t * 60) * Math.sin(t * 23);
    weldLight.intensity = weldOn ? 7 * flick : 0;
    shared.uHeat.value = weldOn ? 0.18 * flick : Math.max(0, shared.uHeat.value - dt * 0.6);

    // painting wipe (bottom → top in world space)
    const baseY = model.position.y;
    shared.uPaintY.value = pa <= 0 ? baseY - 1 : baseY - 0.1 + (S + 0.3) * ease(pa);

    // inspection laser
    laser.visible = ins > 0 && ins < 1;
    laser.position.y = T / 2 + S + 0.15 - (S + 0.3) * ease(ins);
    laser.material.opacity = 0.16 * Math.sin(Math.PI * ins);
    laserEdge.material.opacity = 0.9 * Math.sin(Math.PI * ins);

    // shipping: lift and turn
    model.rotation.y = -0.25 * (1 - smooth(seg(p, 0.27, 0.5))) + (Math.PI / 2) * ease(sh) + mouse.x * 0.25;
    model.rotation.x = mouse.y * 0.12;
    model.position.y += 0.9 * ease(sh);

    // camera path
    const kA = ease(seg(p, 0, 0.2)), kB = ease(seg(p, 0.24, 0.45)), kC = ease(seg(p, 0.5, 0.62)), kD = ease(sh);
    tmpV.copy(camA).lerp(camB, kA).lerp(camC, kB).lerp(camD, kC).lerp(camE, kD);
    tmpL.copy(lookA).lerp(lookB, kA).lerp(lookC, kB).lerp(lookD, kC).lerp(lookE, kD);
    if (isSmall()) tmpV.multiplyScalar(1.12 + 0.25 * (1 - kA));
    // frame the subject: right side on wide screens, upper area on narrow ones (more so in the hero)
    if (W >= 900) camera.setViewOffset(W, H, -W * (0.25 - 0.09 * kA), -H * 0.04 * (1 - kA), W, H);
    else camera.setViewOffset(W, H, 0, H * (0.2 - 0.06 * kA), W, H);
    camera.position.copy(tmpV);
    camera.lookAt(tmpL);

    // DOM
    let active = PHASE_KEYS.findIndex((k) => p >= PH[k][0] && p < PH[k][1]);
    if (p >= 1) active = PHASE_KEYS.length - 1;
    if (p <= 0) active = -1;
    if (active !== lastActive) {
      steps.forEach((s, i) => s.classList.toggle('is-active', i === active));
      rail.forEach((li, i) => { li.classList.toggle('is-active', i === active); li.classList.toggle('is-done', i < active); });
      if (countEl) countEl.textContent = active < 0 ? '00' : String(active + 1).padStart(2, '0');
      lastActive = active;
    }
    rail.forEach((li, i) => li.style.setProperty('--p', seg(p, ...PH[PHASE_KEYS[i]]).toFixed(3)));
    if (hudEl) hudEl.innerHTML = `PROGRESS <b>${String(Math.round(p * 100)).padStart(3, '0')}%</b><br>PUNCH <b>${Math.round(pu * 100)}%</b><br>BEND <b>${Math.round(be * 90)}°</b><br>WELD <b>${Math.round(we * 4)}/4</b><br>COAT <b>${Math.round(pa * 100)}%</b>`;
  }

  function updateSparks(dt) {
    for (let i = 0; i < N; i++) {
      if (sLife[i] <= 0) continue;
      sLife[i] -= dt;
      sVel[i * 3 + 1] -= 6.5 * dt;
      sPos[i * 3] += sVel[i * 3] * dt; sPos[i * 3 + 1] += sVel[i * 3 + 1] * dt; sPos[i * 3 + 2] += sVel[i * 3 + 2] * dt;
      if (sPos[i * 3 + 1] < 0) { sPos[i * 3 + 1] = 0; sVel[i * 3 + 1] *= -0.35; sVel[i * 3] *= 0.6; sVel[i * 3 + 2] *= 0.6; }
      if (sLife[i] <= 0) sPos[i * 3 + 1] = -99;
    }
    sGeo.attributes.position.needsUpdate = true;
  }

  let visible = true, raf = 0, last = performance.now(), smoothP = 0;
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible && !raf) loop(); }, { rootMargin: '100px' })
    .observe(document.querySelector('.hero-wrap') || section);

  function loop(now = performance.now()) {
    raf = 0;
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    const pr = progress();
    smoothP += (pr.p - smoothP) * (reduce ? 1 : Math.min(1, dt * 7));
    mouse.x += (mouse.tx - mouse.x) * Math.min(1, dt * 3);
    mouse.y += (mouse.ty - mouse.y) * Math.min(1, dt * 3);
    if (reduce) { mouse.x = mouse.y = 0; }
    canvas.classList.toggle('is-off', pr.after);
    // idle float in hero
    const bob = reduce ? 0 : Math.sin(now / 1400) * 0.05 * (1 - seg(smoothP, 0, 0.2));
    apply(smoothP, now / 1000, dt);
    model.position.y += bob;
    updateSparks(dt);
    renderer.render(scene, camera);
    if (visible) raf = requestAnimationFrame(loop);
  }
  loop();
  document.documentElement.classList.add('has-gl');
}
