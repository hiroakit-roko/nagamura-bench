import { heading, pageHero, cta, btn } from '../helpers.mjs';

const body = `
${pageHero({ en: 'PRESIDENT BLOG', ja: '飯山社長のものづくりブログ', lead: '代表取締役 飯山 進が、ものづくりの現場・経営・日々の気づきをほぼ毎日綴るブログ。全記事のタイトル一覧を掲載しています（記事本文は元サイトで公開）。', image: 'recruit/president', crumbs: [{ label: '社長ブログ' }] })}
<section class="section section--dark section--grid" data-blog="assets/data/blog.json" data-per="50">
  <div class="container">
    <div class="reveal">${heading({ en: 'LATEST', ja: '最新の記事' })}</div>
    <div class="blog-featured js-blog-featured" data-stagger><p class="note">読み込み中…</p></div>
    <div class="reveal">${heading({ en: 'ARCHIVE', ja: '記事一覧', lead: '年で絞り込み、タイトルで検索できます。タイトルをクリックすると元サイトの記事が開きます。' })}</div>
    <div class="blog-tools reveal">
      <label class="sr-only" for="blog-search">記事タイトルを検索</label>
      <input type="search" id="blog-search" class="js-blog-search" placeholder="タイトルで検索（例：溶接、AI、栃木）">
      <div class="flex js-blog-years" role="group" aria-label="年で絞り込み"></div>
      <span class="blog-count js-blog-count" aria-live="polite"></span>
    </div>
    <div class="news-list js-blog-list" aria-live="polite"></div>
    <div class="blog-more"><button type="button" class="btn btn--line js-blog-more"><span>さらに表示</span></button></div>
    <p class="note mt-4 text-center">元サイト：<a class="text-link" href="https://nagamura.co.jp/blog/" target="_blank" rel="noopener">https://nagamura.co.jp/blog/</a></p>
  </div>
</section>
${cta()}
`;

export default { slug: 'blog', title: '社長ブログ', description: '飯山社長のものづくりブログ 全記事一覧。長村製作所 代表取締役 飯山 進がものづくりと経営について綴るブログ。', body };
