import { SITE, esc, img, arrow, ext, telIcon, yearsSinceFounding } from './lib.mjs';

export const NAV = [
  {
    label: '企業情報', en: 'COMPANY', items: [
      { href: 'advantage/', label: '長村製作所の強み', en: 'Advantage', img: 'adv02', desc: '設計から出荷まで一貫対応' },
      { href: 'management/', label: '経営方針', en: 'Management', img: 'team', desc: '経営理念・基本方針・ビジョン' },
      { href: 'company/', label: '会社概要', en: 'Company Profile', img: 'building', desc: '代表挨拶・会社情報・沿革・アクセス' },
    ],
  },
  {
    label: '技術情報', en: 'TECHNOLOGY', items: [
      { href: 'technology/', label: '技術情報', en: 'Technology', img: 'tech07', desc: '板金加工・溶接・組立・検査' },
      { href: 'equipment/', label: '設備概要', en: 'Equipment', img: 'eq-bending01', desc: 'プレス・曲げ・切断・溶接設備一覧' },
      { href: 'products/', label: '製品紹介', en: 'Products', img: 'pr-03_01', desc: '配線盤・19インチラック・電話室 ほか' },
    ],
  },
  { href: 'blog/', label: '社長ブログ', en: 'BLOG' },
  { href: 'recruit/', label: '採用情報', en: 'RECRUIT' },
  { href: 'faq/', label: 'よくある質問', en: 'FAQ' },
];

const FONT_URL = 'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,300..900&family=JetBrains+Mono:wght@400;500&family=Shippori+Mincho+B1:wght@800&family=Zen+Kaku+Gothic+New:wght@500;700;900&display=swap';

function header(r, current) {
  const isCur = (href) => current && current.startsWith(href) ? ' aria-current="page"' : '';
  const groupCur = (g) => g.items && g.items.some((i) => current && current.startsWith(i.href));
  const nav = NAV.map((g, gi) => {
    if (!g.items) return `<li class="gnav__item"><a class="gnav__link" href="${r}${g.href}"${isCur(g.href)}><span class="gnav__en" aria-hidden="true">${g.en}</span>${g.label}</a></li>`;
    return `<li class="gnav__item has-mega${groupCur(g) ? ' is-current' : ''}">
      <button class="gnav__link gnav__btn" type="button" aria-expanded="false" aria-controls="mega-${gi}"><span class="gnav__en" aria-hidden="true">${g.en}</span>${g.label}<svg class="gnav__caret" viewBox="0 0 10 6" aria-hidden="true"><path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.4"/></svg></button>
      <div class="mega" id="mega-${gi}">
        <div class="mega__inner">
          <p class="mega__title" aria-hidden="true">${g.en}</p>
          <ul class="mega__list">${g.items.map((it) => `<li><a class="mega__card" href="${r}${it.href}"${isCur(it.href)}>
            <span class="mega__img">${img(r, it.img, '', { sizes: '240px' })}</span>
            <span class="mega__txt"><span class="mega__en">${it.en}</span><span class="mega__label">${it.label}</span><span class="mega__desc">${it.desc}</span></span>${arrow}</a></li>`).join('')}</ul>
        </div>
      </div>
    </li>`;
  }).join('');

  const mnav = NAV.map((g) => g.items
    ? `<li class="mnav__group"><p class="mnav__head"><span>${g.en}</span>${g.label}</p><ul>${g.items.map((it) => `<li><a href="${r}${it.href}"${isCur(it.href)}>${it.label}<small>${it.en}</small></a></li>`).join('')}</ul></li>`
    : `<li class="mnav__group"><a class="mnav__single" href="${r}${g.href}"${isCur(g.href)}><span>${g.en}</span>${g.label}</a></li>`).join('');

  return `<a class="skip" href="#main">本文へスキップ</a>
<header class="hdr" data-hdr>
  <div class="hdr__bar">
    <a class="hdr__logo" href="${r}" aria-label="株式会社長村製作所 ホーム">
      <img src="${r}assets/img/logo-white-409.webp" width="409" height="104" alt="長村製作所" class="hdr__logo-img">
    </a>
    <nav class="gnav" aria-label="グローバルナビゲーション"><ul class="gnav__list">${nav}</ul></nav>
    <div class="hdr__cta">
      <a class="hdr__tel" href="${SITE.telHref}">${telIcon}<span><strong>${SITE.tel}</strong><small>受付 ${SITE.hours}</small></span></a>
      <a class="hdr__contact" href="${r}contact/"${isCur('contact/')}><span>お問合せ</span>${arrow}</a>
      <button class="hdr__menu" type="button" aria-expanded="false" aria-controls="mnav" data-menu><span class="hdr__menu-lines" aria-hidden="true"><i></i><i></i></span><span class="hdr__menu-label">MENU</span><span class="sr-only">メニューを開く</span></button>
    </div>
  </div>
  <div class="mnav" id="mnav" hidden>
    <div class="mnav__inner">
      <ul class="mnav__list">${mnav}<li class="mnav__group"><a class="mnav__single" href="${r}news/"><span>NEWS</span>新着情報</a></li><li class="mnav__group"><a class="mnav__single" href="${r}contact/"><span>CONTACT</span>お問合せ</a></li></ul>
      <div class="mnav__foot">
        <a class="mnav__tel" href="${SITE.telHref}">${telIcon}${SITE.tel}</a>
        <p>受付時間 ${SITE.hours}</p>
      </div>
    </div>
  </div>
</header>`;
}

function footer(r) {
  const col = (title, links) => `<div class="ftr__col"><p class="ftr__h">${title}</p><ul>${links.map(([h, l, x]) => `<li><a href="${x ? h : r + h}"${x ? ' target="_blank" rel="noopener"' : ''}>${l}${x ? ext + '<span class="sr-only">（外部サイト）</span>' : ''}</a></li>`).join('')}</ul></div>`;
  return `<section class="cta" aria-labelledby="cta-title">
  <div class="cta__bg" aria-hidden="true">${img(r, 'floor-duo', '', { sizes: '100vw' })}</div>
  <div class="wrap cta__inner">
    <p class="cta__en" aria-hidden="true">LET'S MAKE IT <em>TOGETHER.</em></p>
    <h2 class="cta__title" id="cta-title">図面1枚、手描きのスケッチ1枚から。<br>まずはお気軽にご相談ください。</h2>
    <p class="cta__lead">試作から単品・量産まで、1点からでも製作可能です。<br class="pc">他社で断られてしまった案件も、ぜひ一度お問い合わせください。</p>
    <div class="cta__grid">
      <a class="cta__card cta__card--tel" href="${SITE.telHref}">
        <span class="cta__label">お電話でのお問合せ（本社工場）</span>
        <span class="cta__num">${telIcon}${SITE.tel}</span>
        <span class="cta__note">受付時間 ${SITE.hours} ／ FAX ${SITE.fax}</span>
      </a>
      <a class="cta__card cta__card--form" href="${r}contact/">
        <span class="cta__label">WEBからのお問合せ</span>
        <span class="cta__num">お問合せフォーム ${arrow}</span>
        <span class="cta__note">お見積り・技術相談・製品のお問合せ</span>
      </a>
    </div>
  </div>
</section>
<footer class="ftr">
  <div class="wrap">
    <div class="ftr__top">
      <div class="ftr__brand">
        <a href="${r}" class="ftr__logo" aria-label="株式会社長村製作所 ホーム"><img src="${r}assets/img/logo-white-409.webp" width="409" height="104" alt="長村製作所" loading="lazy"></a>
        <p class="ftr__catch">精密板金加工のプロフェッショナル<br><span>Precision sheet metal fabrication since 1938.</span></p>
        <dl class="ftr__addr">
          <div><dt>本社工場</dt><dd>${SITE.zip} ${SITE.addr}<br>TEL：${SITE.telDisp}　FAX：${SITE.fax}</dd></div>
          <div><dt>東京本部</dt><dd>${SITE.tokyoZip} ${SITE.tokyoAddr}<br>TEL：${SITE.tokyoTel}　FAX：${SITE.tokyoFax}</dd></div>
        </dl>
      </div>
      <div class="ftr__nav">
        ${col('企業情報', [['', 'ホーム'], ['advantage/', '長村製作所の強み'], ['management/', '経営方針'], ['company/', '会社概要'], ['company/#greeting', '代表挨拶'], ['company/#profile', '会社基本情報'], ['company/#history', '会社沿革'], ['company/#access', 'アクセス']])}
        ${col('技術情報', [['technology/', '技術情報'], ['equipment/', '設備概要'], ['products/', '製品紹介'], ['faq/', 'よくある質問']])}
        ${col('インフォメーション', [['news/', '新着情報'], ['blog/', '社長ブログ'], ['recruit/', '採用情報'], ['contact/', 'お問合せ'], ['privacy/', '個人情報保護方針'], ['sitemap/', 'サイトマップ']])}
        ${col('自社ブランド', [['https://nagamura.co.jp/smox/', 'SMOX 喫煙ブース', 1], ['https://nagamura.co.jp/kovako/', 'KOVAKO ファクトリーブース', 1], ['https://nagamura.co.jp/monobo/', 'Monobo テレワークブース', 1]])}
      </div>
    </div>
    <div class="ftr__bottom">
      <p class="ftr__big" aria-hidden="true">NAGAMURA</p>
      <div class="ftr__meta">
        <p><small>Copyright © Nagamura Manufacturing Co. All Rights Reserved.</small></p>
        <a href="#top" class="ftr__top-btn" data-totop>PAGE TOP <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20V5m-6 6 6-6 6 6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></a>
      </div>
    </div>
  </div>
</footer>
<a class="fab-tel" href="${SITE.telHref}" aria-label="電話をかける ${SITE.tel}">${telIcon}<span>電話</span></a>
<a class="fab-contact" href="${r}contact/"><span>お問合せ</span></a>
<dialog class="lightbox" data-lightbox-dialog aria-label="画像の拡大表示">
  <figure><img alt=""><figcaption></figcaption></figure>
  <button type="button" class="lightbox__close" data-lightbox-close aria-label="閉じる"><span aria-hidden="true">×</span></button>
  <button type="button" class="lightbox__nav lightbox__prev" data-lightbox-prev aria-label="前の画像">‹</button>
  <button type="button" class="lightbox__nav lightbox__next" data-lightbox-next aria-label="次の画像">›</button>
</dialog>`;
}

export function layout({ r, path, title, description, body, bodyClass = '', scripts = '', ogType = 'website' }) {
  const fullTitle = path === '' ? `${SITE.name} | 栃木県栃木市の精密板金加工のプロフェッショナル` : `${title} | ${SITE.name}`;
  return `<!doctype html>
<html lang="ja" class="no-js" data-years="${yearsSinceFounding()}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<meta name="theme-color" content="#0b0c0e">
<meta name="color-scheme" content="dark light">
<meta property="og:type" content="${ogType}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${r}assets/img/og.jpg">
<meta property="og:locale" content="ja_JP">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${r}assets/favicon-32.png" type="image/png" sizes="32x32">
<link rel="icon" href="${r}assets/favicon.ico" sizes="any">
<link rel="apple-touch-icon" href="${r}assets/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${FONT_URL}">
<link rel="stylesheet" href="${r}assets/css/style.css">
<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'Organization', name: SITE.name, alternateName: SITE.nameEn,
    foundingDate: '1938-05-05', telephone: '+81-282-45-1341', faxNumber: '+81-282-45-1508', url: 'https://nagamura.co.jp/',
    address: { '@type': 'PostalAddress', postalCode: '329-4411', addressRegion: '栃木県', addressLocality: '栃木市', streetAddress: '大平町横堀みずほ5-1', addressCountry: 'JP' },
  })}</script>
<script type="module" src="${r}assets/js/main.js"></script>
${scripts}
</head>
<body class="${bodyClass}" id="top">
${header(r, path)}
<main id="main" tabindex="-1">
${body}
</main>
${footer(r)}
<div class="grain" aria-hidden="true"></div>
</body>
</html>`;
}
