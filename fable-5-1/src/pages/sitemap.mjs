import { pageHero } from '../helpers.mjs';
const body = `
${pageHero({ en: 'SITEMAP', ja: 'サイトマップ', crumbs: [{ label: 'サイトマップ' }] })}
<section class="section section--dark section--grid">
  <div class="container sitemap-grid reveal">
    <div><h2>Main</h2><ul>
      <li><a href="index.html">ホーム</a></li>
      <li><a href="advantage.html">長村製作所の強み</a><ul><li><a href="advantage.html#total-solution">トータルソリューション</a></li><li><a href="advantage.html#lead-time">短納期対応</a></li><li><a href="advantage.html#craftsmanship">職人の技・若手の活躍</a></li><li><a href="advantage.html#quality">品質と環境への取り組み</a></li></ul></li>
      <li><a href="technology.html">技術情報</a><ul><li><a href="technology.html#sheet-metal">金属板金加工</a></li><li><a href="technology.html#welding">溶接加工</a></li><li><a href="technology.html#assembly">組立・検査</a></li><li><a href="technology.html#partners">協力工場</a></li></ul></li>
      <li><a href="equipment.html">設備概要</a></li>
      <li><a href="products.html">製品紹介</a><ul><li><a href="smox.html">SMOX（喫煙ブース）</a></li><li><a href="kovako.html">KOVAKO（ファクトリーブース）</a></li><li><a href="monobo.html">Monobo（テレワークブース）</a></li></ul></li>
      <li><a href="faq.html">よくある質問</a></li>
    </ul></div>
    <div><h2>Company</h2><ul>
      <li><a href="company.html">会社概要</a><ul><li><a href="company.html#message">代表挨拶</a></li><li><a href="company.html#profile">会社基本情報</a></li><li><a href="company.html#history">会社沿革</a></li><li><a href="company.html#access">アクセス</a></li></ul></li>
      <li><a href="management.html">経営方針</a><ul><li><a href="management.html#philosophy">経営理念</a></li><li><a href="management.html#policies">5つの基本方針</a></li><li><a href="management.html#principles">5つの行動理念</a></li><li><a href="management.html#vision">ビジョン</a></li><li><a href="management.html#privacy">個人情報保護方針</a></li></ul></li>
      <li><a href="news.html">新着情報</a></li>
      <li><a href="recruit.html">採用情報</a><ul><li><a href="recruit.html#message">メッセージ</a></li><li><a href="recruit.html#jobs">募集職種</a></li><li><a href="recruit.html#numbers">数字で見る</a></li><li><a href="recruit.html#benefits">福利厚生</a></li><li><a href="recruit.html#newgrad">新卒採用</a></li><li><a href="recruit.html#career">中途採用</a></li></ul></li>
    </ul></div>
    <div><h2>Blog &amp; Contact</h2><ul>
      <li><a href="blog.html">社長ブログ</a></li>
      <li><a href="contact.html">お問い合わせ</a></li>
      <li><a href="management.html#privacy">個人情報保護方針</a></li>
      <li><a href="sitemap.html">サイトマップ</a></li>
    </ul></div>
  </div>
</section>
`;
export default { slug: 'sitemap', title: 'サイトマップ', description: '株式会社長村製作所 サイトマップ。', body };
