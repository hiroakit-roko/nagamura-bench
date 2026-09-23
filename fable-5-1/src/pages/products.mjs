import { img, imgUrl, heading, pageHero, localNav, cta, btn } from '../helpers.mjs';

const CATS = [
  { id: 'panels', en: 'WIRING PANELS', ja: '各種配線盤類', lead: '光ケーブル配分架、光本配線盤など、通信インフラの中核を担う配線盤・架類。', items: [['products/panel-1', '光ケーブル配分架'], ['products/panel-2', '光本配線盤'], ['products/panel-3', '光ファイバーケーブル収容架'], ['products/panel-4', 'IDM架']] },
  { id: 'racks', en: '19-INCH RACKS', ja: '19インチラック', lead: '小型ラックから 400G 対応ラック（R04）まで。設計・試作・製造・販売を一貫して対応します。', items: [['products/rack-1', '小型19インチラック'], ['products/rack-2', '小型19インチラック'], ['products/rack-3', '19インチラック(700×600×2000)'], ['products/rack-4', '19インチラック(800×600×2000)'], ['products/rack-5', '1/2 19インチラック(700×1000×2000)'], ['products/rack-r04-1', '400G対応19インチラック - R04(600×600×2000)4A-L7902'], ['products/rack-r04-2', '400G対応19インチラックS- R04(600×600×1800) 4A-L7915'], ['products/rack-r04-3', 'マウントレール取り付けガイド-R04 4C-T3415'], ['products/rack-r04-4', '400G用ラマンアダプタ-R04 4C-T1510'], ['products/rack-r04-5', 'ケーブル線止めバー<50>R04(10本セット)4C-T3330']] },
  { id: 'phone-booth', en: 'PUBLIC PHONE BOOTH', ja: '屋外公衆電話室', lead: '1954年の製作開始以来、東日本エリアの電話BOXを支えてきました。公衆電話BOXを製造する会社は国内2社のみです。', items: [['products/booth-1', '屋外公衆電話室'], ['products/booth-2', '車いす用屋外公衆電話室']] },
  { id: 'public', en: 'PUBLIC PRODUCTS', ja: '公共製品', lead: '喫煙スポットや樋門ハウスなど、屋外で長く使われる公共製品。電話ボックスで培った耐久設計が活きています。', items: [['products/public-1', '喫煙スポット(900×900)'], ['products/public-2', '喫煙スポット(1200×1800)'], ['products/public-3', '喫煙スポット(1200×1800)'], ['products/public-4', '喫煙スポット(2700×1800)'], ['products/public-5', '樋門ハウス'], ['products/public-6', '樋門ハウス']] },
  { id: 'others', en: 'OTHERS', ja: 'その他', lead: '現場の声から生まれたオリジナル製品。', items: [['products/other-1', 'コロコロ台車'], ['products/other-2', 'コロコロ台車 Ver.2']] },
];

const gallery = c => `<ul class="gallery" data-stagger>${c.items.map(([im, t]) => `<li><button type="button" class="gallery__item zoomable" data-lightbox="${imgUrl(im)}" data-caption="${t.replace(/"/g, '&quot;')}" aria-label="${t.replace(/"/g, '&quot;')} を拡大表示"><span class="gallery__img">${img(im, t, { sizes: '(min-width: 1000px) 25vw, 50vw' })}</span><span class="gallery__cap">${t.replace(/</g, '&lt;').replace(/>/g, '&gt;')}<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5M11 8v6M8 11h6"/></svg></span></button></li>`).join('')}</ul>`;

const body = `
${pageHero({ en: 'PRODUCTS', ja: '製品紹介', lead: '各種配線盤類、19インチラック、屋外公衆電話室、公共製品、そして電話ボックスの技術から生まれた3つの空間ブランド。', image: 'hero/assembly', crumbs: [{ label: '製品紹介' }] })}
${localNav([...CATS.map(c => ['#' + c.id, c.ja]), ['#brands', 'SMOX / KOVAKO / Monobo']])}

${CATS.map((c, i) => `<section class="section ${i % 2 ? 'section--dark section--grid' : 'section--light'}" id="${c.id}" aria-labelledby="${c.id}-title">
  <div class="container">
    <div class="reveal">${heading({ num: String(i + 1).padStart(2, '0'), en: c.en, ja: c.ja, lead: c.lead, tone: i % 2 ? 'dark' : 'light' }).replace('<h2 class="sec-title">', `<h2 class="sec-title" id="${c.id}-title">`)}</div>
    ${gallery(c)}
  </div>
</section>`).join('')}

<section class="section section--dark-2" id="brands" aria-labelledby="br-title">
  <div class="container">
    <div class="reveal">${heading({ num: '06', en: 'ORIGINAL BRANDS', ja: '電話ボックスの技術から生まれた、<br>3つの空間ブランド', lead: '屋外に耐える頑丈さと、どこでも組み立てられる軽便性。長村製作所が長らく開発を続けてきた電話ボックスの型材・技術を応用した、空間創造事業の製品群です。' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="br-title">')}</div>
    <ul class="brand-grid" data-stagger>
      ${[
        ['smox.html', 'brands/smox/fea-1', '喫煙ブース・喫煙ボックス', 'SMOX', '厚生労働省の技術的基準をクリア。屋内にも屋外にも対応、選べる3サイズ。'],
        ['kovako.html', 'brands/kovako/booth', 'ファクトリーブース', 'KOVAKO', '従業員を守る安心・安全のファクトリーブース。完全オーダーメイド、最短1日で工事完了。'],
        ['monobo.html', 'brands/monobo/case-main', 'テレワークブース', 'Monobo', '低天井OK、場所を選ばずフィットする個室ブース。1人用・2人用・4人用。'],
      ].map(([href, im, cat, name, d]) => `<li><a class="brand-tile" href="${href}"><div class="brand-tile__img">${img(im, name, { sizes: '(min-width: 900px) 33vw, 100vw' })}</div><div class="brand-tile__body"><p class="brand-tile__cat">${cat}</p><p class="brand-tile__name">${name}</p><p class="brand-tile__desc">${d}</p><span class="brand-tile__more">VIEW BRAND <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div></a></li>`).join('')}
    </ul>
  </div>
</section>
<dialog class="lb" id="lightbox" aria-label="画像の拡大表示"><div class="lb__inner"><img class="lb__img" src="" alt=""><p class="lb__cap"></p></div><button type="button" class="lb__close" aria-label="閉じる"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button></dialog>
${cta()}
`;

export default { slug: 'products', title: '製品紹介', description: '長村製作所の製品紹介：光ケーブル配分架・光本配線盤などの各種配線盤類、19インチラック（400G対応 R04 含む）、屋外公衆電話室、喫煙スポット・樋門ハウスなどの公共製品、コロコロ台車、SMOX／KOVAKO／Monobo。', body };
