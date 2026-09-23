import fs from 'node:fs';
import { img, head, pageHero, btn, ext, esc } from '../lib.mjs';

const blog = JSON.parse(fs.readFileSync(new URL('../../assets/data/blog.json', import.meta.url)));

const president = {
  path: 'blog/',
  render(r) {
    const [top, ...rest] = blog;
    const years = [...new Set(blog.map((d) => d.d.slice(0, 4)))];
    return {
      title: '社長ブログ',
      description: `飯山社長のものづくりブログ「Quality is not an act. It is a habit.」全${blog.length}本の記事アーカイブ。年別・キーワードで検索できます。`,
      body: `
${pageHero(r, { no: 'BLOG', en: "President's Blog", ja: '社長ブログ', image: 'ceo-factory', crumbs: [{ label: '社長ブログ' }], lead: '飯山社長のものづくりブログ — Quality is not an act. It is a habit.' })}

<section class="sec is-light" aria-labelledby="latest-title">
  <div class="wrap">
    ${head({ no: '01', en: 'Latest Entry', ja: '最新の記事', id: 'latest-title', lead: `2021年10月から書き続けられている、代表取締役 飯山 進 のブログ。${years[years.length - 1]}年〜${years[0]}年の全${blog.length}本をアーカイブしています（記事本文は元サイトでお読みいただけます）。` })}
    <article class="feature-post rv">
      <p class="feature-post__label">LATEST — <time datetime="${top.d}">${top.d.replace(/-/g, '.')}</time></p>
      <h3>${esc(top.t)}</h3>
      <p>${esc(top.e)}</p>
      <p>${btn(`https://nagamura.co.jp/blog/?p=${top.id}`, '続きを元記事で読む', { external: true, variant: 'btn--red' })}</p>
    </article>
    <ul class="posts" style="margin-top:40px">${rest.slice(0, 3).map((p) => `<li><a class="post" href="https://nagamura.co.jp/blog/?p=${p.id}" target="_blank" rel="noopener"><time datetime="${p.d}">${p.d.replace(/-/g, '.')}</time><span class="post__t">${esc(p.t)}</span><span class="post__e">${esc(p.e)}</span>${ext}<span class="sr-only">（元記事・新しいタブ）</span></a></li>`).join('')}</ul>
  </div>
</section>

<section class="sec is-light" style="padding-top:0" aria-labelledby="archive-title" data-blog="https://nagamura.co.jp/blog/" data-src="${r}assets/data/blog.json">
  <div class="wrap">
    ${head({ no: '02', en: 'Archive', ja: `記事アーカイブ（全${blog.length}本）`, id: 'archive-title' })}
    <div class="bfilters">
      <div class="bfilters__years" data-blog-years role="group" aria-label="年で絞り込み"></div>
      <label class="bsearch"><span class="sr-only">記事タイトル・本文の冒頭を検索</span><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="m16 16 5 5" stroke="currentColor" stroke-width="1.6"/></svg><input type="search" data-blog-search placeholder="キーワードで検索（例：品質、誤差、社員）"></label>
      <p class="bmeta" data-blog-meta aria-live="polite"></p>
    </div>
    <ul class="posts" data-blog-list>
      ${blog.slice(0, 30).map((p) => `<li><a class="post" href="https://nagamura.co.jp/blog/?p=${p.id}" target="_blank" rel="noopener"><time datetime="${p.d}">${p.d.replace(/-/g, '.')}</time><span class="post__t">${esc(p.t)}</span><span class="post__e">${esc(p.e)}</span>${ext}<span class="sr-only">（元記事・新しいタブ）</span></a></li>`).join('')}
    </ul>
    <p class="bmore"><button type="button" class="btn btn--dark" data-blog-more><span class="btn__label">もっと見る</span></button></p>
    <p style="margin-top:40px">${btn('https://nagamura.co.jp/blog/', '社長ブログ（元サイト）へ', { external: true })}</p>
  </div>
</section>
`,
    };
  },
};

export default [president];
