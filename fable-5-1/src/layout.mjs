import { esc } from './helpers.mjs';

export const NAV = [
  { label: '企業情報', children: [
    ['advantage.html', '長村製作所の強み', 'ADVANTAGE'],
    ['management.html', '経営方針', 'MANAGEMENT'],
    ['company.html', '会社概要', 'COMPANY'],
  ]},
  { label: '技術情報', children: [
    ['technology.html', '技術情報', 'TECHNOLOGY'],
    ['equipment.html', '設備概要', 'EQUIPMENT'],
  ]},
  { label: '製品紹介', children: [
    ['products.html', '製品紹介', 'PRODUCTS'],
    ['smox.html', 'SMOX（喫煙ブース）', 'SMOX'],
    ['kovako.html', 'KOVAKO（ファクトリーブース）', 'KOVAKO'],
    ['monobo.html', 'Monobo（テレワークブース）', 'MONOBO'],
  ]},
  { label: '社長ブログ', href: 'blog.html', en: 'BLOG' },
  { label: '採用情報', href: 'recruit.html', en: 'RECRUIT' },
  { label: 'よくある質問', href: 'faq.html', en: 'FAQ' },
];

const SITE = '株式会社長村製作所';
const TAGLINE = '栃木県栃木市の精密板金加工のプロフェッショナル';

function header(active) {
  const items = NAV.map(n => {
    if (n.children) {
      const isActive = n.children.some(c => c[0] === active + '.html');
      return `<li class="nav__item has-sub${isActive ? ' is-active' : ''}">
        <button type="button" class="nav__link" aria-expanded="false" aria-haspopup="true">${esc(n.label)}<svg class="nav__chev" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4"/></svg></button>
        <ul class="nav__sub">${n.children.map(c => `<li><a href="${c[0]}"${c[0] === active + '.html' ? ' aria-current="page"' : ''}><span class="nav__sub-en">${esc(c[2])}</span><span>${esc(c[1])}</span></a></li>`).join('')}</ul>
      </li>`;
    }
    return `<li class="nav__item${n.href === active + '.html' ? ' is-active' : ''}"><a class="nav__link" href="${n.href}"${n.href === active + '.html' ? ' aria-current="page"' : ''}>${esc(n.label)}</a></li>`;
  }).join('');

  const mobile = NAV.map((n, i) => n.children
    ? `<li class="menu__group"><p class="menu__label">${esc(n.label)}</p><ul>${n.children.map(c => `<li><a href="${c[0]}"><span class="menu__en">${esc(c[2])}</span>${esc(c[1])}</a></li>`).join('')}</ul></li>`
    : `<li class="menu__group"><a class="menu__single" href="${n.href}"><span class="menu__en">${esc(n.en)}</span>${esc(n.label)}</a></li>`).join('');

  return `<a class="skip-link" href="#main">本文へスキップ</a>
<header class="site-header" id="site-header">
  <div class="site-header__inner">
    <a class="brand" href="index.html" aria-label="${SITE} ホーム">
      <img class="brand__logo brand__logo--white" src="assets/img/brand/logo-white.png" width="409" height="104" alt="${SITE}" decoding="async">
      <img class="brand__logo brand__logo--red" src="assets/img/brand/logo-red.png" width="409" height="104" alt="" aria-hidden="true" decoding="async">
    </a>
    <nav class="nav" aria-label="グローバルナビゲーション"><ul class="nav__list">${items}</ul></nav>
    <div class="site-header__tools">
      <a class="header-tel" href="tel:0282451341"><span class="header-tel__num">0282-45-1341</span><span class="header-tel__hours">受付 8:25〜17:00（平日）</span></a>
      <a class="btn btn--accent btn--sm header-cta" href="contact.html"><span>お問合せ</span></a>
      <button type="button" class="menu-toggle" id="menu-toggle" aria-controls="menu" aria-expanded="false"><span class="menu-toggle__bar"></span><span class="menu-toggle__bar"></span><span class="menu-toggle__label">MENU</span></button>
    </div>
  </div>
</header>
<div class="menu" id="menu" aria-hidden="true">
  <div class="menu__inner">
    <ul class="menu__list">${mobile}
      <li class="menu__group"><a class="menu__single" href="contact.html"><span class="menu__en">CONTACT</span>お問い合わせ</a></li>
      <li class="menu__group"><a class="menu__single" href="news.html"><span class="menu__en">NEWS</span>新着情報</a></li>
    </ul>
    <div class="menu__foot">
      <a class="menu__tel" href="tel:0282451341">0282-45-1341</a>
      <p>受付時間 8:25〜17:00（平日）</p>
      <p>〒329-4411 栃木県栃木市大平町横堀みずほ5-1</p>
    </div>
  </div>
</div>`;
}

function footer() {
  return `<footer class="site-footer">
  <div class="container site-footer__inner">
    <div class="site-footer__brand">
      <img src="assets/img/brand/logo-white.png" width="409" height="104" alt="${SITE}" class="site-footer__logo" loading="lazy" decoding="async">
      <p class="site-footer__tag">HIGH TECHNOLOGY &amp; HIGH QUALITY<br>精密板金加工の一貫体制</p>
      <address class="site-footer__addr">
        <p>〒329-4411　栃木県栃木市大平町横堀みずほ5-1</p>
        <p>TEL：<a href="tel:0282451341">0282(45)1341</a>　FAX：0282(45)1508</p>
        <p class="site-footer__hours">受付時間 8:25〜17:00（平日）</p>
      </address>
    </div>
    <nav class="site-footer__nav" aria-label="フッターナビゲーション">
      <ul>
        <li><a href="index.html">ホーム</a></li>
        <li><a href="advantage.html">長村製作所の強み</a></li>
        <li><a href="technology.html">技術情報</a></li>
        <li><a href="equipment.html">設備概要</a></li>
        <li><a href="products.html">製品紹介</a></li>
        <li><a href="faq.html">よくある質問</a></li>
      </ul>
      <ul>
        <li><a href="company.html">会社概要</a>
          <ul>
            <li><a href="company.html#message">代表挨拶</a></li>
            <li><a href="company.html#profile">会社基本情報</a></li>
            <li><a href="company.html#history">会社沿革</a></li>
            <li><a href="company.html#access">アクセス</a></li>
          </ul>
        </li>
        <li><a href="management.html">経営方針</a></li>
        <li><a href="news.html">新着情報</a></li>
        <li><a href="recruit.html">採用情報</a></li>
      </ul>
      <ul>
        <li><a href="contact.html">お問い合わせ</a></li>
        <li><a href="blog.html">社長ブログ</a></li>
        <li><a href="sitemap.html">サイトマップ</a></li>
        <li><a href="management.html#privacy">個人情報保護方針</a></li>
      </ul>
      <ul class="site-footer__brands">
        <li><a href="smox.html"><span class="site-footer__brand-en">SMOX</span>喫煙ブース</a></li>
        <li><a href="kovako.html"><span class="site-footer__brand-en">KOVAKO</span>ファクトリーブース</a></li>
        <li><a href="monobo.html"><span class="site-footer__brand-en">Monobo</span>テレワークブース</a></li>
      </ul>
    </nav>
  </div>
  <div class="site-footer__bottom">
    <div class="container site-footer__bottom-inner">
      <small>Copyright &copy; Nagamura Manufacturing Co. All Rights Reserved.</small>
      <a class="to-top" href="#top" aria-label="ページの先頭へ"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg></a>
    </div>
  </div>
</footer>
<div class="mobile-bar" aria-label="お問い合わせ（モバイル）">
  <a href="tel:0282451341" class="mobile-bar__tel"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.6 3.6a1 1 0 0 1-.25 1z"/></svg><span>0282-45-1341</span></a>
  <a href="contact.html" class="mobile-bar__contact"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v12H3zM3 6l9 7 9-7"/></svg><span>お問い合わせ</span></a>
</div>`;
}

export function layout(page) {
  const title = page.slug === 'index' ? `${SITE} | ${TAGLINE}` : `${page.title} | ${SITE}`;
  const desc = page.description || '長村製作所は栃木県栃木市にある精密板金加工を得意とするプロフェッショナル集団です。試作から出荷まで一貫して対応可能です。屋外用公衆電話室や各種配線盤の筐体・ラックの製作をおこなってきました。単品・量産にも柔軟に対応できる体制を整えています。';
  const importmap = page.three ? `<script type="importmap">{"imports":{"three":"./assets/vendor/three/three.module.min.js","three/addons/":"./assets/vendor/three/"}}</script>` : '';
  const extraHead = page.head || '';
  const scripts = [
    `<script src="assets/vendor/gsap/gsap.min.js" defer></script>`,
    `<script src="assets/vendor/gsap/ScrollTrigger.min.js" defer></script>`,
    `<script src="assets/js/main.js" defer></script>`,
    ...(page.scripts || []),
  ].join('\n');
  return `<!DOCTYPE html>
<html lang="ja" data-page="${page.slug}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="theme-color" content="#0b0e13">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:site_name" content="${SITE}">
<meta property="og:type" content="website">
<meta property="og:locale" content="ja_JP">
<meta property="og:image" content="assets/img/og.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="format-detection" content="telephone=no">
<link rel="icon" href="assets/img/brand/favicon-64.png" type="image/png">
<link rel="apple-touch-icon" href="assets/img/brand/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Noto+Sans+JP:wght@400;500;700;900&family=JetBrains+Mono:wght@400;500&display=swap">
<link rel="stylesheet" href="assets/css/main.css">
${importmap}
${extraHead}
</head>
<body>
<div id="top"></div>
${header(page.slug)}
<main id="main" class="site-main">
${page.body}
</main>
${footer()}
${scripts}
</body>
</html>
`;
}
