// Nagamura renewal — shared interactions
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
document.documentElement.classList.remove('no-js');

/* ---------- founding years (same rule as original site) ---------- */
function years() {
  const n = new Date();
  let a = n.getFullYear() - 1938;
  if (n.getMonth() < 4 || (n.getMonth() === 4 && n.getDate() < 5)) a--;
  return a;
}
$$('[data-years]').forEach((el) => {
  if (el === document.documentElement) return;
  el.textContent = years();
  if (el.dataset.count !== undefined) el.dataset.count = years();
});

/* ---------- header ---------- */
const hdr = $('[data-hdr]');
let lastY = scrollY;
function onScrollHeader() {
  const y = scrollY;
  hdr.classList.toggle('is-scrolled', y > 40);
  const hide = y > lastY && y > 300 && !hdr.classList.contains('is-mega');
  hdr.classList.toggle('is-hidden', hide);
  document.body.classList.toggle('hdr-visible', !hide);
  document.body.classList.toggle('is-scrolled-past', y > innerHeight * 0.6);
  lastY = y;
}
addEventListener('scroll', onScrollHeader, { passive: true });
onScrollHeader();

/* mega menu */
const megaBtns = $$('.gnav__btn');
function closeMegas(except) {
  megaBtns.forEach((b) => { if (b !== except) b.setAttribute('aria-expanded', 'false'); });
  hdr.classList.toggle('is-mega', megaBtns.some((b) => b.getAttribute('aria-expanded') === 'true'));
}
megaBtns.forEach((btn) => {
  const item = btn.parentElement;
  let t;
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(open));
    closeMegas(btn);
  });
  if (finePointer) {
    item.addEventListener('mouseenter', () => { clearTimeout(t); btn.setAttribute('aria-expanded', 'true'); closeMegas(btn); });
    item.addEventListener('mouseleave', () => { t = setTimeout(() => { btn.setAttribute('aria-expanded', 'false'); closeMegas(); }, 180); });
  }
  item.addEventListener('focusout', (e) => { if (!item.contains(e.relatedTarget)) { btn.setAttribute('aria-expanded', 'false'); closeMegas(); } });
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  const open = megaBtns.find((b) => b.getAttribute('aria-expanded') === 'true');
  if (open) { open.setAttribute('aria-expanded', 'false'); closeMegas(); open.focus(); }
  if (hdr.classList.contains('is-open')) toggleMenu(false);
});
document.addEventListener('click', (e) => { if (!e.target.closest('.gnav')) closeMegas(); });

/* mobile menu */
const menuBtn = $('[data-menu]');
const mnav = $('#mnav');
function toggleMenu(force) {
  const open = force ?? mnav.hidden;
  mnav.hidden = !open;
  hdr.classList.toggle('is-open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  $('.sr-only', menuBtn).textContent = open ? 'メニューを閉じる' : 'メニューを開く';
  $('.hdr__menu-label', menuBtn).textContent = open ? 'CLOSE' : 'MENU';
  document.documentElement.style.overflow = open ? 'hidden' : '';
  if (open) $('a', mnav)?.focus(); else menuBtn.focus();
}
menuBtn?.addEventListener('click', () => toggleMenu());
mnav?.addEventListener('click', (e) => { if (e.target.closest('a')) toggleMenu(false); });

/* ---------- split headings into phrase segments ---------- */
const seg = typeof Intl !== 'undefined' && Intl.Segmenter ? new Intl.Segmenter('ja', { granularity: 'word' }) : null;
$$('[data-split]').forEach((el) => {
  if (reduce) return;
  const label = el.textContent.replace(/\s+/g, ' ').trim();
  let i = 0;
  const walk = (node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const text = n.textContent;
        if (!text.trim()) return;
        const frag = document.createDocumentFragment();
        const parts = seg ? [...seg.segment(text)].map((s) => s.segment) : text.split(/(\s+)/);
        parts.forEach((p) => {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.append(p); return; }
          const s = document.createElement('span');
          s.className = 'ch'; s.style.setProperty('--i', i++); s.textContent = p;
          frag.append(s);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1 && n.tagName !== 'BR') walk(n);
    });
  };
  walk(el);
  el.setAttribute('aria-label', label);
  [...el.children].forEach((c) => c.setAttribute('aria-hidden', 'true'));
});

/* ---------- reveal on scroll ---------- */
// clip-path'ed targets report zero intersection in Chrome, so .rv-img is observed
// through its (unclipped) parent and the class is applied to all proxied children.
const proxied = new Map();
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add('is-in');
    (proxied.get(en.target) || []).forEach((t) => t.classList.add('is-in'));
    io.unobserve(en.target);
  });
}, { rootMargin: '0px 0px -8% 0px', threshold: 0.01 });
$$('.rv, [data-split], .tl, [data-inview], .range, .ncard').forEach((el) => io.observe(el));
$$('.rv-img').forEach((el) => {
  const p = el.parentElement;
  if (!proxied.has(p)) { proxied.set(p, []); io.observe(p); }
  proxied.get(p).push(el);
});

/* stagger children */
$$('[data-stagger]').forEach((wrap) => {
  [...wrap.children].forEach((c, i) => { c.classList.add('rv'); c.style.setProperty('--d', `${i * 0.08}s`); io.observe(c); });
});

/* ---------- counters ---------- */
const cio = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    const el = en.target; cio.unobserve(el);
    const to = parseFloat(el.dataset.count), dec = parseInt(el.dataset.dec || '0', 10);
    if (reduce) { el.textContent = to.toFixed(dec); return; }
    const t0 = performance.now(), dur = 1600;
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 4);
      el.textContent = (to * e).toFixed(dec);
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}, { threshold: 0.5 });
$$('[data-count]').forEach((el) => cio.observe(el));

/* ---------- parallax & timeline progress ---------- */
const para = $$('[data-parallax]');
const tlines = $$('.timeline');
if (!reduce && (para.length || tlines.length)) {
  let ticking = false;
  const upd = () => {
    ticking = false;
    const vh = innerHeight;
    para.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const k = (r.top + r.height / 2 - vh / 2) / vh;
      el.style.transform = `translate3d(0, ${(-k * parseFloat(el.dataset.parallax) * 100).toFixed(2)}px, 0)`;
    });
    tlines.forEach((tl) => {
      const r = tl.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (vh * 0.6 - r.top) / r.height));
      tl.style.setProperty('--tp', p.toFixed(3));
    });
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true });
  upd();
}

/* ---------- toc active state ---------- */
const tocLinks = $$('.toc a');
if (tocLinks.length) {
  const map = new Map(tocLinks.map((a) => [a.getAttribute('href').slice(1), a]));
  const tio = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        tocLinks.forEach((a) => a.classList.remove('is-active'));
        const a = map.get(en.target.id);
        if (a) {
          a.classList.add('is-active');
          const ul = a.closest('ul');
          ul.scrollTo({ left: a.parentElement.offsetLeft - ul.clientWidth / 2 + a.clientWidth / 2, behavior: reduce ? 'auto' : 'smooth' });
        }
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  map.forEach((_, id) => { const s = document.getElementById(id); if (s) tio.observe(s); });
}

/* ---------- lightbox ---------- */
const dlg = $('[data-lightbox-dialog]');
let lbList = [], lbIdx = 0;
function lbShow(i) {
  lbIdx = (i + lbList.length) % lbList.length;
  const a = lbList[lbIdx];
  const im = $('img', dlg);
  im.src = a.getAttribute('href');
  im.alt = a.dataset.caption || '';
  $('figcaption', dlg).textContent = a.dataset.caption || '';
}
document.addEventListener('click', (e) => {
  const a = e.target.closest('[data-lightbox]');
  if (!a || !dlg) return;
  e.preventDefault();
  const group = a.closest('[data-lb-group]') || document;
  lbList = $$('[data-lightbox]', group);
  dlg.toggleAttribute('data-single', lbList.length < 2);
  lbShow(lbList.indexOf(a));
  dlg.showModal();
});
dlg?.addEventListener('click', (e) => {
  if (e.target.closest('[data-lightbox-close]') || e.target === dlg) dlg.close();
  if (e.target.closest('[data-lightbox-prev]')) lbShow(lbIdx - 1);
  if (e.target.closest('[data-lightbox-next]')) lbShow(lbIdx + 1);
});
dlg?.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') lbShow(lbIdx - 1);
  if (e.key === 'ArrowRight') lbShow(lbIdx + 1);
});

/* ---------- YouTube facade ---------- */
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-yt]');
  if (!b) return;
  const box = b.closest('.yt');
  const f = document.createElement('iframe');
  f.src = `https://www.youtube-nocookie.com/embed/${b.dataset.yt}?autoplay=1&rel=0`;
  f.title = b.dataset.title || 'YouTube動画';
  f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  f.allowFullscreen = true;
  box.replaceChildren(f);
  f.focus();
});

/* ---------- magnetic buttons ---------- */
if (finePointer && !reduce) {
  $$('.btn, .hdr__contact, .tile__foot .ic-arrow').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width, y = (e.clientY - r.top - r.height / 2) / r.height;
      el.style.transform = `translate(${x * 6}px, ${y * 6}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}

/* ---------- page top ---------- */
$('[data-totop]')?.addEventListener('click', (e) => {
  e.preventDefault();
  scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  $('#main')?.focus({ preventScroll: true });
});

/* ---------- tabs (recruit) ---------- */
$$('[role="tablist"]').forEach((list) => {
  const tabs = $$('[role="tab"]', list);
  const select = (t, focus) => {
    tabs.forEach((x) => {
      const on = x === t;
      x.setAttribute('aria-selected', String(on)); x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) t.focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });
});

/* ---------- page-specific modules ---------- */
if ($('#gl')) import('./hero3d.js').then((m) => m.init()).catch((err) => { console.warn(err); document.documentElement.classList.add('no-gl'); });
if ($('[data-eq]')) import('./equipment.js').then((m) => m.init());
if ($('[data-blog]')) import('./blog.js').then((m) => m.init());
if ($('[data-cform]')) import('./contact.js').then((m) => m.init());
if ($('[data-hero-video]')) {
  const v = $('[data-hero-video]');
  const saveData = navigator.connection && navigator.connection.saveData;
  if (reduce || saveData) { v.removeAttribute('autoplay'); v.pause(); }
  else {
    v.play?.().catch(() => {});
    new IntersectionObserver(([en]) => { en.isIntersecting ? v.play().catch(() => {}) : v.pause(); }).observe(v);
  }
}
