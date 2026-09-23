import { heading, pageHero, cta, btn } from '../helpers.mjs';

const body = `
${pageHero({ en: 'IT BLOG', ja: 'ITブログ', lead: '長村製作所の DX・IT 活用・Web マーケティングの取り組みを紹介するブログ。カテゴリ：DX／マーケティング／読書案内／その他、PR', image: 'recruit/job-design', crumbs: [{ label: 'ITブログ' }] })}
<section class="section section--dark section--grid" data-blog="assets/data/blog-cio.json" data-per="20">
  <div class="container">
    <div class="reveal">${heading({ en: 'LATEST', ja: '最新の記事' })}</div>
    <div class="blog-featured js-blog-featured" data-stagger><p class="note">読み込み中…</p></div>
    <div class="reveal">${heading({ en: 'ALL POSTS', ja: '記事一覧' })}</div>
    <div class="blog-tools reveal"><span class="blog-count js-blog-count" aria-live="polite"></span></div>
    <div class="news-list js-blog-list" aria-live="polite"></div>
    <div class="blog-more"><button type="button" class="btn btn--line js-blog-more" hidden><span>さらに表示</span></button></div>
    <p class="note mt-4 text-center">元サイト：<a class="text-link" href="https://nagamura.co.jp/blog_cio/" target="_blank" rel="noopener">https://nagamura.co.jp/blog_cio/</a></p>
  </div>
</section>
${cta()}
`;

export default { slug: 'blog-cio', title: 'ITブログ', description: '長村製作所 ITブログ：Google Document AI + Claude AI + kintone による注文書処理の自動化、Microsoft環境でのペーパレスFAX、Webマーケティング事例としてのSMOX、DXとは何か。', body };
