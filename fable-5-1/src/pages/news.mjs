import { heading, pageHero, cta } from '../helpers.mjs';
const body = `
${pageHero({ en: 'NEWS', ja: '新着情報', image: 'hero/factory', crumbs: [{ label: '新着情報' }] })}
<section class="section section--dark section--grid">
  <div class="container">
    <div class="news-list reveal mb-5"><a class="news-item" href="#post-5"><time datetime="2019-07-19">2019.07.19</time><span class="news-item__title">ホームページをリニューアルいたしました。</span><span class="news-item__tag">INFO</span></a></div>
    <article class="article reveal" id="post-5">
      <p class="article__meta">2019.07.19 — INFORMATION</p>
      <h2>ホームページをリニューアルいたしました。</h2>
      <p>株式会社長村製作所のホームページをご覧いただきまして、誠にありがとうございます。</p>
      <p>この度、当社ホームページをリニューアルいたしました。お客様がより使いやすいホームページを目指し、スマートフォンやタブレット端末でもご覧いただけるようになりました。</p>
      <p>今後も、内容の充実を図るとともに、情報をわかりやすく発信して参りますので、何卒よろしくお願い申し上げます。</p>
    </article>
    <div class="divider"></div>
    <div class="reveal">${heading({ en: 'MORE UPDATES', ja: '最新の情報はブログでも', lead: '日々の更新は社長ブログ・ITブログ、製品ブランドのお知らせ（Monobo）でご覧いただけます。' })}
      <div class="flex"><a class="btn btn--line btn--sm" href="blog.html"><span>社長ブログ</span></a><a class="btn btn--line btn--sm" href="blog-cio.html"><span>ITブログ</span></a><a class="btn btn--line btn--sm" href="monobo.html#news"><span>Monobo お知らせ</span></a></div></div>
  </div>
</section>
${cta()}
`;
export default { slug: 'news', title: '新着情報', description: '株式会社長村製作所の新着情報。', body };
