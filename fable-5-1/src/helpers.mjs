import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const here = path.dirname(fileURLToPath(import.meta.url));
export const IMAGES = JSON.parse(readFileSync(path.join(here, 'data', 'images.json'), 'utf8'));

export const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Responsive <img> from the generated asset manifest. */
export function img(name, alt, o = {}) {
  const m = IMAGES[name];
  if (!m) throw new Error('unknown image ' + name);
  const cls = o.class ? ` class="${o.class}"` : '';
  const loading = o.eager ? ' fetchpriority="high"' : ' loading="lazy"';
  const extra = o.attrs ? ' ' + o.attrs : '';
  if (m.copied) return `<img src="assets/img/${name}" alt="${esc(alt)}"${cls}${extra}${o.eager ? '' : ' loading="lazy"'} decoding="async">`;
  if (m.sizes) {
    const srcset = m.sizes.map(([w]) => `assets/img/${name}-${w}.webp ${w}w`).join(', ');
    const [w, h] = m.sizes[0];
    return `<img src="assets/img/${name}-${w}.webp" srcset="${srcset}" sizes="${o.sizes || '100vw'}" width="${w}" height="${h}" alt="${esc(alt)}"${cls}${extra}${loading} decoding="async">`;
  }
  return `<img src="assets/img/${name}.webp" width="${m.w}" height="${m.h}" alt="${esc(alt)}"${cls}${extra}${loading} decoding="async">`;
}
/** Largest URL for lightbox / og. */
export function imgUrl(name) {
  const m = IMAGES[name];
  if (m.copied) return `assets/img/${name}`;
  if (m.sizes) return `assets/img/${name}-${m.sizes[0][0]}.webp`;
  return `assets/img/${name}.webp`;
}
export function imgDims(name) { const m = IMAGES[name]; return m.sizes ? { w: m.sizes[0][0], h: m.sizes[0][1] } : { w: m.w, h: m.h }; }

/** Section heading block */
export function heading({ num, en, ja, lead, tone = 'dark', align = 'left', tag = 'h2' }) {
  return `<div class="sec-head sec-head--${tone} sec-head--${align}">
    <p class="eyebrow"><span class="eyebrow__num">${num ? esc(num) : ''}</span><span class="eyebrow__en">${esc(en)}</span></p>
    <${tag} class="sec-title">${ja}</${tag}>
    ${lead ? `<p class="sec-lead">${lead}</p>` : ''}
  </div>`;
}

/** Page hero for lower pages */
export function pageHero({ en, ja, lead, image, crumbs = [], tone = 'dark' }) {
  const bg = image ? img(image, '', { class: 'page-hero__img', eager: true, sizes: '100vw' }) : '';
  const bc = [{ label: 'ホーム', href: 'index.html' }, ...crumbs];
  return `<header class="page-hero page-hero--${tone}">
    ${bg ? `<div class="page-hero__media">${bg}</div>` : ''}
    <div class="page-hero__inner container">
      <nav class="crumbs" aria-label="パンくずリスト"><ol>${bc.map((c, i) => `<li>${c.href && i < bc.length - 1 ? `<a href="${c.href}">${esc(c.label)}</a>` : `<span aria-current="page">${esc(c.label)}</span>`}</li>`).join('')}</ol></nav>
      <p class="page-hero__en" aria-hidden="true">${esc(en)}</p>
      <h1 class="page-hero__title">${ja}</h1>
      ${lead ? `<p class="page-hero__lead">${lead}</p>` : ''}
    </div>
  </header>`;
}

export function localNav(items) {
  return `<nav class="local-nav" aria-label="ページ内ナビゲーション"><div class="container"><ul>${items.map(([href, label]) => `<li><a href="${href}">${esc(label)}</a></li>`).join('')}</ul></div></nav>`;
}

export function cta({ tone = 'dark' } = {}) {
  return `<section class="cta cta--${tone}" aria-labelledby="cta-title">
    <div class="container cta__inner">
      <div class="cta__text">
        <p class="eyebrow"><span class="eyebrow__en">CONTACT</span></p>
        <h2 id="cta-title" class="cta__title">図面一枚、手描きのスケッチからでも。<br>まずはご相談ください。</h2>
        <p class="cta__lead">試作1点から量産まで、短納期のご相談も歓迎します。他社で断られた案件もお気軽にどうぞ。</p>
      </div>
      <div class="cta__actions">
        <a class="tel-card" href="tel:0282451341"><span class="tel-card__label">お電話でのお問合せ</span><span class="tel-card__num">0282-45-1341</span><span class="tel-card__note">受付時間 8:25〜17:00（平日）</span></a>
        <a class="btn btn--gold btn--lg" href="contact.html"><span>お問合せフォーム</span><svg class="btn__arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
    </div>
  </section>`;
}

export const arrow = '<svg class="btn__arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
export const btn = (href, label, cls = 'btn--line', attrs = '') => `<a class="btn ${cls}" href="${href}" ${attrs}><span>${label}</span>${arrow}</a>`;

/** YouTube click-to-load facade using a local thumbnail */
export function youtube(id, title, thumb) {
  return `<div class="yt" data-yt="${id}"><button type="button" class="yt__btn" aria-label="動画を再生：${esc(title)}">${img(thumb, title, { class: 'yt__thumb', sizes: '(min-width: 900px) 700px, 100vw' })}<span class="yt__play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span><span class="yt__label">YouTube で再生</span></button></div>`;
}
