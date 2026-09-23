// Shared helpers for the static page generator.
import fs from 'node:fs';

export const manifest = JSON.parse(fs.readFileSync(new URL('../assets/manifest.json', import.meta.url)));

export const SITE = {
  name: '株式会社長村製作所',
  nameEn: 'Nagamura Manufacturing Co.',
  founded: '1938-05-05',
  tel: '0282-45-1341',
  telHref: 'tel:0282451341',
  telDisp: '0282(45)1341',
  fax: '0282(45)1508',
  hours: '8:25〜17:00（平日）',
  zip: '〒329-4411',
  addr: '栃木県栃木市大平町横堀みずほ5-1',
  tokyoZip: '〒170-0013',
  tokyoAddr: '東京都豊島区東池袋1-21-11 オーク池袋ビル5F',
  tokyoTel: '03-5985-4472',
  tokyoFax: '03-5985-4473',
  recruitMail: 'recruit@nagamura.co.jp',
  form: 'https://forms.office.com/pages/responsepage.aspx?id=nt_7ZZ83eEWJDeFioaWGzevJqXCxde9DoNfQWi3UOvFUMUtYUlg0MTVaQUEySFc1TVdSWFRaV05EMS4u',
  smoxForm: 'https://forms.office.com/Pages/ResponsePage.aspx?id=nt_7ZZ83eEWJDeFioaWGzevJqXCxde9DoNfQWi3UOvFUNEtDUkhJSFZZTzhCWEdKNFFSSTE3NjhIRS4u',
  kovakoForm: 'https://forms.office.com/r/8JExqbY24a',
  monoboForm: 'https://forms.office.com/r/Xh66SVNSiH',
  origin: 'https://nagamura.co.jp',
};

/** Years since founding (same rule as the original site: counts up on May 5). */
export function yearsSinceFounding(now = new Date()) {
  let age = now.getFullYear() - 1938;
  const m = now.getMonth(), d = now.getDate();
  if (m < 4 || (m === 4 && d < 5)) age--;
  return age;
}

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Responsive <img>. `r` is the relative prefix to site root ("./", "../").
 * opts: { sizes, cls, loading, fetchpriority, style, lb (lightbox caption) }
 */
export function img(r, name, alt, opts = {}) {
  const m = manifest[name];
  if (!m) throw new Error('image not in manifest: ' + name);
  const srcset = m.widths.map((w) => `${r}assets/img/${name}-${w}.webp ${w}w`).join(', ');
  const src = `${r}assets/img/${name}-${m.widths.length > 1 ? m.widths[Math.min(1, m.widths.length - 1)] : m.widths[0]}.webp`;
  const h = Math.round((m.h * m.w) / m.w);
  const attrs = [
    `src="${src}"`,
    `srcset="${srcset}"`,
    `sizes="${opts.sizes || '100vw'}"`,
    `width="${m.w}" height="${h}"`,
    `alt="${esc(alt)}"`,
    `loading="${opts.loading || 'lazy'}"`,
    `decoding="async"`,
  ];
  if (opts.fetchpriority) attrs.push(`fetchpriority="${opts.fetchpriority}"`);
  if (opts.cls) attrs.push(`class="${opts.cls}"`);
  if (opts.style) attrs.push(`style="${opts.style}"`);
  const tag = `<img ${attrs.join(' ')}>`;
  if (opts.lb !== undefined) {
    const big = `${r}assets/img/${name}-${m.widths[m.widths.length - 1]}.webp`;
    return `<a class="lb" href="${big}" data-lightbox data-caption="${esc(opts.lb || alt)}" aria-label="${esc((opts.lb || alt) + '（拡大表示）')}">${tag}<span class="lb__zoom" aria-hidden="true"></span></a>`;
  }
  return tag;
}

/** Largest file URL for an image (for CSS backgrounds / posters). */
export const imgUrl = (r, name, prefer) => {
  const m = manifest[name];
  const w = prefer ? m.widths.filter((x) => x <= prefer).pop() || m.widths[0] : m.widths[m.widths.length - 1];
  return `${r}assets/img/${name}-${w}.webp`;
};

/** Section heading block. */
export function head({ no, en, ja, lead, align = '', tag = 'h2', id }) {
  return `<div class="sh ${align}" ${id ? `id="${id}"` : ''}>
  <p class="sh__meta"><span class="sh__no">${no}</span><span class="sh__line" aria-hidden="true"></span><span class="sh__en">${en}</span></p>
  <${tag} class="sh__ja rv" data-split>${ja}</${tag}>
  ${lead ? `<p class="sh__lead rv">${lead}</p>` : ''}
</div>`;
}

export const arrow = `<svg class="ic-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`;
export const ext = `<svg class="ic-ext" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`;
export const telIcon = `<svg class="ic-tel" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 3.5 9 3l2 4.6-2.1 1.6a12 12 0 0 0 5.9 5.9l1.6-2.1L21 15l-.5 2.4a2.4 2.4 0 0 1-2.5 1.9C10.3 18.8 5.2 13.7 4.7 6a2.4 2.4 0 0 1 1.9-2.5Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`;

export function btn(href, label, { variant = '', external = false, icon = true } = {}) {
  const ex = external ? ' target="_blank" rel="noopener"' : '';
  return `<a class="btn ${variant}" href="${href}"${ex}><span class="btn__label">${label}</span>${icon ? (external ? ext : arrow) : ''}${external ? '<span class="sr-only">（外部サイト・新しいタブで開きます）</span>' : ''}</a>`;
}

/** Page hero for sub pages. */
export function pageHero(r, { en, ja, lead, image, crumbs = [], no = '' }) {
  return `<section class="phero" aria-labelledby="page-title">
  <div class="phero__bg" aria-hidden="true">${image ? img(r, image, '', { loading: 'eager', fetchpriority: 'high', cls: 'phero__img', sizes: '100vw' }) : ''}</div>
  <div class="phero__grid" aria-hidden="true"></div>
  <div class="wrap phero__inner">
    <nav class="crumbs" aria-label="パンくずリスト"><ol><li><a href="${r}">ホーム</a></li>${crumbs.map((c) => `<li>${c.href ? `<a href="${c.href}">${c.label}</a>` : `<span aria-current="page">${c.label}</span>`}</li>`).join('')}</ol></nav>
    <p class="phero__no" aria-hidden="true">${no}</p>
    <p class="phero__en" aria-hidden="true" style="--len:${en.length}">${en}</p>
    <h1 class="phero__ja" id="page-title">${ja}</h1>
    ${lead ? `<p class="phero__lead">${lead}</p>` : ''}
  </div>
  <div class="phero__dim" aria-hidden="true"><span></span></div>
</section>`;
}

/** In-page table of contents (sticky chips). */
export function toc(items) {
  return `<nav class="toc" aria-label="ページ内目次"><div class="wrap"><ul>${items.map(([id, label], i) => `<li><a href="#${id}"><span class="toc__no">${String(i + 1).padStart(2, '0')}</span>${label}</a></li>`).join('')}</ul></div></nav>`;
}
