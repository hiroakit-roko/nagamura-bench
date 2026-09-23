/* Scroll-driven WebGL scene: a flat steel blank is laser-cut, punched, bent and welded into a box.
   Built procedurally with Three.js (no external models). Progress 0..1 is driven by GSAP ScrollTrigger. */
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/RoomEnvironment.js';

const root = document.getElementById('process');
const mount = document.getElementById('process-canvas');
if (!root || !mount) throw new Error('process root missing');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const steps = Array.from(root.querySelectorAll('.process__step'));
const dots = Array.from(root.querySelectorAll('.process__progress span'));

/* ---- Scroll binding is created first so captions work even without WebGL ---- */
const STEP_RANGES = [[0, 0.16], [0.16, 0.40], [0.40, 0.56], [0.56, 0.80], [0.80, 0.90], [0.90, 1.01]];
let activeStep = -1, target = 0;
function setStep(i) {
  if (i === activeStep) return; activeStep = i;
  steps.forEach((s, k) => s.classList.toggle('is-active', k === i));
  dots.forEach((d, k) => { d.classList.toggle('is-active', k === i); d.classList.toggle('is-done', k < i); });
}
function stepFor(p) { for (let i = 0; i < STEP_RANGES.length; i++) if (p >= STEP_RANGES[i][0] && p < STEP_RANGES[i][1]) return i; return STEP_RANGES.length - 1; }
const pin = root.querySelector('.process__pin');
if (window.gsap && window.ScrollTrigger && !reduced) {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
    trigger: root, start: 'top top', end: () => '+=' + (window.innerHeight * 3.2), pin: pin, pinSpacing: true, anticipatePin: 1, scrub: true,
    onUpdate: self => { target = self.progress; setStep(stepFor(target)); },
  });
} else { target = 0.98; setStep(5); }

let renderer = null;
const origError = console.error;
try {
  console.error = () => {}; // silence three.js context-loss noise; we handle the fallback ourselves
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance', failIfMajorPerformanceCaveat: false });
} catch (e) { renderer = null; }
console.error = origError;
if (!renderer) { root.classList.add('no-webgl'); console.warn('WebGL unavailable: showing static fallback for the process scene.'); }
if (renderer) {
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.95;
mount.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x07090d, 0.045);
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
camera.position.set(0, 3.2, 9.5);
camera.lookAt(0, 0, 0);

/* Lights: cool key, warm rim, red accent */
scene.add(new THREE.HemisphereLight(0x9fb4d0, 0x0b0e13, 0.35));
const key = new THREE.SpotLight(0xffffff, 60, 30, Math.PI / 5, 0.5, 1.6); key.position.set(4, 8, 5); scene.add(key);
const rim = new THREE.DirectionalLight(0x6fb6ff, 1.6); rim.position.set(-6, 3, -4); scene.add(rim);
const accent = new THREE.PointLight(0xe5322d, 0, 12, 2); accent.position.set(0, 1.4, 0); scene.add(accent);
const weldLight = new THREE.PointLight(0xcfe8ff, 0, 8, 2); scene.add(weldLight);

/* Floor: dark brushed plate with grid */
const floorGeo = new THREE.PlaneGeometry(40, 40);
const floorMat = new THREE.MeshStandardMaterial({ color: 0x0d1117, metalness: 0.6, roughness: 0.55 });
const floor = new THREE.Mesh(floorGeo, floorMat); floor.rotation.x = -Math.PI / 2; floor.position.y = -0.62; scene.add(floor);
const grid = new THREE.GridHelper(40, 40, 0x263041, 0x1a2130); grid.position.y = -0.61; grid.material.transparent = true; grid.material.opacity = 0.55; scene.add(grid);

/* Perforation texture: alphaMap generated on canvas (holes appear during the punch phase) */
const HOLE_TEX_SIZE = 512;
const holeCanvas = document.createElement('canvas'); holeCanvas.width = holeCanvas.height = HOLE_TEX_SIZE;
const hctx = holeCanvas.getContext('2d');
const holeTex = new THREE.CanvasTexture(holeCanvas);
holeTex.wrapS = holeTex.wrapT = THREE.ClampToEdgeWrapping;
function drawHoles(t) { // t: 0..1 punch progress
  hctx.fillStyle = '#fff'; hctx.fillRect(0, 0, HOLE_TEX_SIZE, HOLE_TEX_SIZE);
  hctx.fillStyle = '#000';
  const cols = 6, rows = 4, marginX = 70, marginY = 110, spanX = HOLE_TEX_SIZE - marginX * 2, spanY = HOLE_TEX_SIZE - marginY * 2 - 90;
  const total = cols * rows, n = Math.floor(t * total);
  for (let i = 0; i < n; i++) {
    const r = Math.floor(i / cols), c = i % cols;
    const x = marginX + (c / (cols - 1)) * spanX, y = marginY + (r / (rows - 1)) * spanY;
    const rad = i === n - 1 ? 22 * Math.min(1, (t * total - i) * 1.5) : 22;
    hctx.beginPath(); hctx.arc(x, y, rad, 0, Math.PI * 2); hctx.fill();
  }
  // vent slots along the bottom edge
  const slots = Math.floor(t * 6);
  for (let i = 0; i < slots; i++) { const sx = marginX + i * 66; hctx.beginPath(); hctx.roundRect(sx, HOLE_TEX_SIZE - 96, 50, 16, 8); hctx.fill(); }
  holeTex.needsUpdate = true;
}
drawHoles(0);

/* Brushed-steel roughness map (procedural) */
const brush = document.createElement('canvas'); brush.width = 1024; brush.height = 1024;
{ const b = brush.getContext('2d'); b.fillStyle = '#7a7a7a'; b.fillRect(0, 0, 1024, 1024);
  for (let i = 0; i < 2600; i++) { const y = Math.random() * 1024, l = 60 + Math.random() * 500, a = 0.05 + Math.random() * 0.25; b.strokeStyle = `rgba(${Math.random() < 0.5 ? 0 : 255},${Math.random() < 0.5 ? 0 : 255},${Math.random() < 0.5 ? 0 : 255},${a})`; b.lineWidth = 1 + Math.random() * 1.5; b.beginPath(); b.moveTo(Math.random() * 1024, y); b.lineTo(Math.random() * 1024 + l, y + (Math.random() - .5) * 2); b.stroke(); } }
const brushTex = new THREE.CanvasTexture(brush); brushTex.wrapS = brushTex.wrapT = THREE.RepeatWrapping; brushTex.repeat.set(2, 2);
/* Steel material */
const steel = new THREE.MeshPhysicalMaterial({
  color: 0x9aa3ad, metalness: 1.0, roughness: 0.42, roughnessMap: brushTex, clearcoat: 0.15, clearcoatRoughness: 0.4,
  envMapIntensity: 1.0, side: THREE.DoubleSide, alphaMap: holeTex, alphaTest: 0.5, transparent: false,
});
const steelPlain = steel.clone(); steelPlain.alphaMap = null; steelPlain.alphaTest = 0;

/* Box net: base + 4 flaps hinged at the base edges. Base 3.2 x 2.2, flaps 0.9 tall, thickness 0.05 */
const W = 3.2, D = 2.2, H = 0.95, T = 0.05;
const part = new THREE.Group(); scene.add(part);
const base = new THREE.Mesh(new THREE.BoxGeometry(W, T, D), steel); part.add(base);
const flapDefs = [
  { axis: 'x', pos: [0, 0, D / 2], size: [W, T, H], sign: -1 }, // front (hinge along x at +z)
  { axis: 'x', pos: [0, 0, -D / 2], size: [W, T, H], sign: 1 }, // back
  { axis: 'z', pos: [W / 2, 0, 0], size: [H, T, D], sign: 1 }, // right (hinge along z at +x)
  { axis: 'z', pos: [-W / 2, 0, 0], size: [H, T, D], sign: -1 }, // left
];
const flaps = flapDefs.map(f => {
  const pivot = new THREE.Group(); pivot.position.set(...f.pos); part.add(pivot);
  const geo = new THREE.BoxGeometry(...f.size);
  const mesh = new THREE.Mesh(geo, steelPlain);
  // offset so the hinge sits at the pivot
  if (f.axis === 'x') mesh.position.z = -f.sign * H / 2; else mesh.position.x = f.sign * H / 2;
  pivot.add(mesh);
  return { pivot, ...f };
});

/* Cut path: glowing outline of the net (Line with dash animation) */
const outlinePts = [];
{
  const x0 = -W / 2 - H, x1 = W / 2 + H, z0 = -D / 2 - H, z1 = D / 2 + H, y = 0.03;
  const p = (x, z) => new THREE.Vector3(x, y, z);
  // cross-shaped net outline
  outlinePts.push(p(-W / 2, z0), p(W / 2, z0), p(W / 2, -D / 2), p(x1, -D / 2), p(x1, D / 2), p(W / 2, D / 2), p(W / 2, z1), p(-W / 2, z1), p(-W / 2, D / 2), p(x0, D / 2), p(x0, -D / 2), p(-W / 2, -D / 2), p(-W / 2, z0));
}
const outlineGeo = new THREE.BufferGeometry().setFromPoints(outlinePts);
const outlineMat = new THREE.LineDashedMaterial({ color: 0xffb54a, dashSize: 100, gapSize: 100, transparent: true, opacity: 1 });
const outline = new THREE.Line(outlineGeo, outlineMat); outline.computeLineDistances(); part.add(outline);
const outlineLen = (() => { let l = 0; for (let i = 1; i < outlinePts.length; i++) l += outlinePts[i].distanceTo(outlinePts[i - 1]); return l; })();
// blueprint wire (design phase)
const wireMat = new THREE.LineBasicMaterial({ color: 0x6fb6ff, transparent: true, opacity: 0.9 });
const wire = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(W + 2 * H, T, D + 2 * H)), wireMat); part.add(wire);
const foldLines = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(-W / 2, 0.03, -D / 2), new THREE.Vector3(W / 2, 0.03, -D / 2),
  new THREE.Vector3(-W / 2, 0.03, D / 2), new THREE.Vector3(W / 2, 0.03, D / 2),
  new THREE.Vector3(-W / 2, 0.03, -D / 2), new THREE.Vector3(-W / 2, 0.03, D / 2),
  new THREE.Vector3(W / 2, 0.03, -D / 2), new THREE.Vector3(W / 2, 0.03, D / 2),
]), new THREE.LineDashedMaterial({ color: 0x6fb6ff, dashSize: 0.12, gapSize: 0.08, transparent: true, opacity: 0.8 }));
foldLines.computeLineDistances(); part.add(foldLines);

/* Laser head */
const laser = new THREE.Group(); scene.add(laser);
const head = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 0.5, 24), new THREE.MeshStandardMaterial({ color: 0x2a3140, metalness: 0.9, roughness: 0.35 })); head.position.y = 0.55; laser.add(head);
const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.03, 0.42, 8), new THREE.MeshBasicMaterial({ color: 0xffd28a, transparent: true, opacity: 0.9 })); beam.position.y = 0.21; laser.add(beam);
const glow = new THREE.PointLight(0xffb54a, 0, 5, 2); glow.position.y = 0.1; laser.add(glow);

/* Sparks: Points particle system */
const SPARKS = 420;
const sPos = new Float32Array(SPARKS * 3), sVel = new Float32Array(SPARKS * 3), sLife = new Float32Array(SPARKS);
const sparkGeo = new THREE.BufferGeometry(); sparkGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
const sparkMat = new THREE.PointsMaterial({ color: 0xffc46b, size: 0.055, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true });
const sparks = new THREE.Points(sparkGeo, sparkMat); scene.add(sparks);
for (let i = 0; i < SPARKS; i++) sLife[i] = 0;
const emit = (origin, n, color) => {
  sparkMat.color.set(color);
  let c = 0;
  for (let i = 0; i < SPARKS && c < n; i++) if (sLife[i] <= 0) {
    sPos[i * 3] = origin.x; sPos[i * 3 + 1] = origin.y; sPos[i * 3 + 2] = origin.z;
    const a = Math.random() * Math.PI * 2, s = 0.6 + Math.random() * 2.2, up = 0.8 + Math.random() * 2.4;
    sVel[i * 3] = Math.cos(a) * s; sVel[i * 3 + 1] = up; sVel[i * 3 + 2] = Math.sin(a) * s;
    sLife[i] = 0.5 + Math.random() * 0.7; c++;
  }
};
function stepSparks(dt) {
  for (let i = 0; i < SPARKS; i++) {
    if (sLife[i] > 0) {
      sLife[i] -= dt; sVel[i * 3 + 1] -= 9.8 * dt;
      sPos[i * 3] += sVel[i * 3] * dt; sPos[i * 3 + 1] += sVel[i * 3 + 1] * dt; sPos[i * 3 + 2] += sVel[i * 3 + 2] * dt;
      if (sPos[i * 3 + 1] < -0.6) { sPos[i * 3 + 1] = -0.6; sVel[i * 3 + 1] *= -0.3; }
    } else { sPos[i * 3 + 1] = -100; }
  }
  sparkGeo.attributes.position.needsUpdate = true;
}

/* Timeline helpers */
const clamp01 = v => Math.max(0, Math.min(1, v));
const seg = (p, a, b) => clamp01((p - a) / (b - a));
const easeInOut = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
const easeOut = t => 1 - Math.pow(1 - t, 3);
const pointOnOutline = d => { // distance along outline -> point
  let acc = 0;
  for (let i = 1; i < outlinePts.length; i++) { const l = outlinePts[i].distanceTo(outlinePts[i - 1]); if (acc + l >= d) return outlinePts[i - 1].clone().lerp(outlinePts[i], (d - acc) / l); acc += l; }
  return outlinePts[outlinePts.length - 1].clone();
};

/* Phases: 0-0.16 design | 0.16-0.40 laser cut | 0.40-0.56 punch | 0.56-0.80 bend | 0.80-0.90 weld | 0.90-1 showcase */
let progress = 0, lastPunch = -1, lastCut = 0;
function apply(p, dt) {
  const design = seg(p, 0, 0.16), cut = seg(p, 0.16, 0.40), punch = seg(p, 0.40, 0.56), bend = seg(p, 0.56, 0.80), weld = seg(p, 0.80, 0.90), show = seg(p, 0.90, 1);
  // design: wire visible, metal fades in at end of design
  wireMat.opacity = 0.9 * (1 - seg(design, 0.6, 1)) * (1 - cut);
  foldLines.material.opacity = 0.85 * seg(design, 0.2, 1) * (1 - seg(bend, 0, 0.35));
  const metalIn = seg(design, 0.55, 1);
  part.children.forEach(c => { if (c.isMesh) c.visible = metalIn > 0; });
  flaps.forEach(f => f.pivot.visible = metalIn > 0);
  base.scale.setScalar(0.001 + 0.999 * easeOut(metalIn));
  flaps.forEach(f => f.pivot.scale.setScalar(base.scale.x));
  // laser cut: dashed outline reveals, laser head moves along path, sparks
  const cutD = cut * outlineLen;
  outlineMat.dashSize = cutD; outlineMat.gapSize = outlineLen; outlineMat.opacity = cut > 0 ? 1 - seg(bend, 0, 0.3) : 0;
  if (cut > 0 && cut < 1) {
    const pt = pointOnOutline(cutD);
    laser.visible = true; laser.position.copy(pt).add(new THREE.Vector3(0, 0.04, 0));
    glow.intensity = 6; beam.visible = true;
    if (cutD - lastCut > 0.02 && dt > 0) emit(pt, 6, 0xffc46b);
    lastCut = cutD;
  } else { laser.visible = false; glow.intensity = 0; }
  // punch: holes appear one by one
  const punchQ = Math.round(punch * 100);
  if (punchQ !== lastPunch) { drawHoles(punch); lastPunch = punchQ; if (punch > 0 && punch < 1) emit(new THREE.Vector3((Math.random() - .5) * 2.4, 0.05, (Math.random() - .5) * 1.6), 3, 0xdbe6ff); }
  // bend: flaps rotate to 90 degrees, staggered
  flaps.forEach((f, i) => {
    const t = easeInOut(seg(bend, i * 0.12, 0.64 + i * 0.12));
    const ang = t * Math.PI / 2 * f.sign;
    if (f.axis === 'x') f.pivot.rotation.x = -ang; else f.pivot.rotation.z = -ang;
  });
  // weld: light flashes at corners
  if (weld > 0 && weld < 1) {
    const corners = [[W / 2, H, D / 2], [-W / 2, H, D / 2], [-W / 2, H, -D / 2], [W / 2, H, -D / 2]];
    const k = Math.min(3, Math.floor(weld * 4)); const c = corners[k];
    weldLight.position.set(c[0], c[1] * (1 - (weld * 4 - k)) , c[2]); weldLight.intensity = 14 + Math.random() * 20;
    if (dt > 0 && Math.random() < 0.6) emit(new THREE.Vector3(c[0], c[1] - (weld * 4 - k) * H, c[2]), 5, 0xbfe0ff);
  } else weldLight.intensity = 0;
  accent.intensity = 3 * show;
  // camera: orbit slowly as we go; showcase rotates the part
  const orbit = -0.35 + p * 1.15 + show * 0.9;
  const r = 9.6 - p * 1.6, h = 3.4 - bend * 0.9 + show * 0.4;
  camera.position.set(Math.sin(orbit) * r, h, Math.cos(orbit) * r);
  camera.lookAt(0, 0.25 + bend * 0.25, 0);
  part.rotation.y = show * 0.35;
}

/* Resize */
function resize() {
  const w = mount.clientWidth, h = mount.clientHeight;
  renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
  camera.fov = w < 700 ? 40 : 32; camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize); resize();

if (reduced) progress = target;

/* Render loop (only while visible) */
let visible = true, last = performance.now();
const vio = new IntersectionObserver(es => es.forEach(en => visible = en.isIntersecting), { threshold: 0 });
vio.observe(root);
function loop(now) {
  requestAnimationFrame(loop);
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (!visible) return;
  progress += (target - progress) * (reduced ? 1 : 0.12);
  apply(progress, dt);
  stepSparks(dt);
  renderer.render(scene, camera);
}
apply(progress, 0);
requestAnimationFrame(loop);
} // renderer
