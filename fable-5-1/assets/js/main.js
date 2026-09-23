/* 株式会社長村製作所 — site interactions (no framework) */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Header: scrolled / hide on scroll down ---------- */
  const header = $('#site-header');
  let lastY = window.scrollY, ticking = false;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 24);
    if (!document.body.classList.contains('menu-open')) {
      if (y > lastY + 6 && y > 320) header.classList.add('is-hidden');
      else if (y < lastY - 6) header.classList.remove('is-hidden');
    }
    lastY = y; ticking = false;
  };
  window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
  onScroll();

  /* ---------- Desktop nav dropdown (keyboard/touch) ---------- */
  $$('.has-sub > .nav__link').forEach(btn => {
    const li = btn.parentElement;
    btn.addEventListener('click', () => {
      const open = li.hasAttribute('data-open');
      $$('.has-sub[data-open]').forEach(o => { o.removeAttribute('data-open'); o.querySelector('.nav__link').setAttribute('aria-expanded', 'false'); });
      if (!open) { li.setAttribute('data-open', ''); btn.setAttribute('aria-expanded', 'true'); }
    });
  });
  document.addEventListener('click', e => { if (!e.target.closest('.has-sub')) $$('.has-sub[data-open]').forEach(o => { o.removeAttribute('data-open'); o.querySelector('.nav__link').setAttribute('aria-expanded', 'false'); }); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { $$('.has-sub[data-open]').forEach(o => o.removeAttribute('data-open')); closeMenu(); } });

  /* ---------- Mobile menu ---------- */
  const toggle = $('#menu-toggle'), menu = $('#menu');
  const closeMenu = () => { if (!menu.classList.contains('is-open')) return; menu.classList.remove('is-open'); menu.setAttribute('aria-hidden', 'true'); toggle.setAttribute('aria-expanded', 'false'); document.body.classList.remove('menu-open'); document.body.style.overflow = ''; };
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    menu.setAttribute('aria-hidden', String(!open)); toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open); document.body.style.overflow = open ? 'hidden' : '';
    header.classList.remove('is-hidden');
  });
  $$('#menu a').forEach(a => a.addEventListener('click', closeMenu));

  /* ---------- Reveal on scroll ---------- */
  const revealEls = $$('.reveal, [data-stagger], .img-reveal');
  if (reduced || !('IntersectionObserver' in window)) revealEls.forEach(el => el.classList.add('is-in'));
  else {
    const io = new IntersectionObserver(entries => entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(el => io.observe(el));
  }

  /* ---------- Counters ---------- */
  const counters = $$('.js-counter');
  if (counters.length) {
    const fmt = (v, d) => d > 0 ? v.toFixed(d) : Math.round(v).toLocaleString('ja-JP');
    const run = el => {
      const target = parseFloat(el.dataset.count), d = parseInt(el.dataset.decimals || '0', 10), dur = 1600, t0 = performance.now();
      const step = now => { const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3); el.textContent = fmt(target * e, d); if (p < 1) requestAnimationFrame(step); else el.textContent = fmt(target, d); };
      requestAnimationFrame(step);
    };
    if (reduced) counters.forEach(el => el.textContent = fmt(parseFloat(el.dataset.count), parseInt(el.dataset.decimals || '0', 10)));
    else { const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } }), { threshold: 0.5 }); counters.forEach(el => io.observe(el)); }
  }

  /* ---------- Years since founding (1938-05-05), same rule as the original site ---------- */
  $$('.js-years').forEach(el => {
    const t = new Date(); let age = t.getFullYear() - 1938;
    if (t.getMonth() < 4 || (t.getMonth() === 4 && t.getDate() < 5)) age--;
    if (el.classList.contains('js-counter')) el.dataset.count = age; else el.textContent = age;
  });

  /* ---------- Accordion ---------- */
  $$('.acc__btn').forEach(btn => {
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      if (open) { panel.style.gridTemplateRows = '0fr'; panel.addEventListener('transitionend', () => { if (btn.getAttribute('aria-expanded') === 'false') panel.hidden = true; }, { once: true }); if (reduced) panel.hidden = true; }
      else { panel.hidden = false; requestAnimationFrame(() => { panel.style.gridTemplateRows = '1fr'; }); }
    });
  });

  /* ---------- Lightbox ---------- */
  const lb = $('#lightbox');
  if (lb) {
    const img = $('.lb__img', lb), cap = $('.lb__cap', lb);
    $$('[data-lightbox]').forEach(el => el.addEventListener('click', e => {
      e.preventDefault();
      img.src = el.dataset.lightbox; img.alt = el.dataset.caption || ''; cap.textContent = el.dataset.caption || '';
      lb.showModal();
    }));
    $('.lb__close', lb).addEventListener('click', () => lb.close());
    lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
  }

  /* ---------- YouTube facade ---------- */
  $$('.yt').forEach(box => {
    const btn = $('.yt__btn', box);
    btn.addEventListener('click', () => {
      const id = box.dataset.yt;
      const f = document.createElement('iframe');
      f.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
      f.title = btn.getAttribute('aria-label') || 'YouTube video';
      f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      f.allowFullscreen = true;
      box.replaceChildren(f);
    });
  });

  /* ---------- Local nav current section ---------- */
  const localLinks = $$('.local-nav a[href^="#"]');
  if (localLinks.length && 'IntersectionObserver' in window) {
    const map = new Map(localLinks.map(a => [a.getAttribute('href').slice(1), a]));
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { localLinks.forEach(a => a.classList.remove('is-current')); map.get(en.target.id)?.classList.add('is-current'); } }), { rootMargin: '-30% 0px -60% 0px' });
    map.forEach((a, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
  }

  /* ---------- Marquee: duplicate track for seamless loop ---------- */
  $$('.marquee__track').forEach(t => { t.innerHTML += t.innerHTML; });

  /* ---------- Hero video: respect reduced motion / save-data ---------- */
  const hv = $('.hero__media video');
  if (hv) {
    const saveData = navigator.connection && navigator.connection.saveData;
    if (reduced || saveData) { hv.removeAttribute('autoplay'); hv.pause(); }
    else { hv.play().catch(() => {}); }
  }

  /* ---------- Blog lists (JSON) ---------- */
  const blogRoot = $('[data-blog]');
  if (blogRoot) {
    const src = blogRoot.dataset.blog, per = parseInt(blogRoot.dataset.per || '40', 10);
    const list = $('.js-blog-list', blogRoot), more = $('.js-blog-more', blogRoot), count = $('.js-blog-count', blogRoot), search = $('.js-blog-search', blogRoot), years = $('.js-blog-years', blogRoot), featured = $('.js-blog-featured', blogRoot);
    let all = [], view = [], shown = 0, year = 'all', q = '';
    const fmtDate = d => d.replace(/-/g, '.');
    const render = (reset) => {
      if (reset) { list.innerHTML = ''; shown = 0; }
      const slice = view.slice(shown, shown + per);
      list.insertAdjacentHTML('beforeend', slice.map(p => `<a class="news-item" href="${p.u}" target="_blank" rel="noopener"><time datetime="${p.d}">${fmtDate(p.d)}</time><span class="news-item__title">${p.t}</span><span class="news-item__tag">${(p.c && p.c[0]) || '記事を読む ↗'}</span></a>`).join(''));
      shown += slice.length;
      if (more) more.hidden = shown >= view.length;
      if (count) count.textContent = `${view.length.toLocaleString()} 件中 ${shown.toLocaleString()} 件を表示`;
    };
    const apply = () => { view = all.filter(p => (year === 'all' || p.d.startsWith(year)) && (!q || p.t.toLowerCase().includes(q))); render(true); };
    fetch(src).then(r => r.json()).then(data => {
      all = data;
      if (featured) featured.innerHTML = all.slice(0, 3).map(p => `<a href="${p.u}" target="_blank" rel="noopener"><time datetime="${p.d}">${fmtDate(p.d)}</time><strong>${p.t}</strong><span class="tag">${(p.c && p.c[0]) || 'LATEST'}</span></a>`).join('');
      if (years) {
        const ys = [...new Set(all.map(p => p.d.slice(0, 4)))].sort().reverse();
        years.innerHTML = `<button type="button" class="chip-btn" aria-pressed="true" data-year="all">ALL</button>` + ys.map(y => `<button type="button" class="chip-btn" aria-pressed="false" data-year="${y}">${y}</button>`).join('');
        years.addEventListener('click', e => { const b = e.target.closest('[data-year]'); if (!b) return; year = b.dataset.year; $$('[data-year]', years).forEach(x => x.setAttribute('aria-pressed', String(x === b))); apply(); });
      }
      if (search) search.addEventListener('input', () => { q = search.value.trim().toLowerCase(); apply(); });
      if (more) more.addEventListener('click', () => render(false));
      apply();
    }).catch(() => { list.innerHTML = '<p class="note">記事一覧を読み込めませんでした。<a class="text-link" href="https://nagamura.co.jp/blog/" target="_blank" rel="noopener">元サイトのブログ</a>をご覧ください。</p>'; });
  }
  /* home: latest posts */
  const latest = $('[data-latest]');
  if (latest) fetch(latest.dataset.latest).then(r => r.json()).then(d => {
    latest.innerHTML = d.slice(0, parseInt(latest.dataset.n || '5', 10)).map(p => `<a class="news-item" href="${p.u}" target="_blank" rel="noopener"><time datetime="${p.d}">${p.d.replace(/-/g, '.')}</time><span class="news-item__title">${p.t}</span><span class="news-item__tag">BLOG ↗</span></a>`).join('');
  }).catch(() => {});

  /* ---------- Contact draft form ---------- */
  const form = $('#contact-form');
  if (form) {
    const toast = $('#toast');
    const showToast = msg => { toast.textContent = msg; toast.classList.add('is-show'); setTimeout(() => toast.classList.remove('is-show'), 3200); };
    const draft = () => {
      const f = new FormData(form);
      return ['【お問合せ種別】' + f.get('subject'), '【会社名】' + f.get('company'), '【お名前】' + f.get('name'), '【メール】' + f.get('email'), '【電話】' + f.get('tel'), '【内容】', f.get('message')].join('\n');
    };
    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      try { await navigator.clipboard.writeText(draft()); showToast('入力内容をコピーしました。公式フォームに貼り付けてください。'); } catch { showToast('公式フォームを開きます。'); }
      window.open(form.dataset.target, '_blank', 'noopener');
    });
    $('#copy-draft')?.addEventListener('click', async () => { try { await navigator.clipboard.writeText(draft()); showToast('入力内容をコピーしました。'); } catch { showToast('コピーできませんでした。'); } });
  }

  /* ---------- GSAP parallax (optional) ---------- */
  if (!reduced && window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    $$('[data-parallax]').forEach(el => {
      const amt = parseFloat(el.dataset.parallax) || 12;
      gsap.fromTo(el, { yPercent: -amt }, { yPercent: amt, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
    });
    const heroTitle = $('.hero__inner');
    if (heroTitle) gsap.to(heroTitle, { yPercent: 18, opacity: 0.2, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  }
})();
