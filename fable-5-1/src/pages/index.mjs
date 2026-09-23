import { img, heading, btn, arrow, cta, imgUrl } from '../helpers.mjs';

const processSteps = [
  { en: 'DESIGN', title: '設計・開発', text: 'お客様のご要望をもとに、CADで設計図面を作成。図面はもちろん、手描きのイラストやデザイン画からの試作にも対応します。' },
  { en: 'LASER CUT', title: 'レーザー・板金加工', text: '複合機・NCタレパン加工機を保有。鉄 0.6〜6.0mm、ステンレス 0.5〜6.0mm、アルミ 0.8〜6.0mm（4×8サイズ迄）の板材を精密に切り抜きます。' },
  { en: 'PUNCH', title: '抜き・穴あけ', text: 'CNCターレットパンチプレス（30t／20t、サイクルローダー付）で、通気孔やスロットを高速・高精度に打ち抜きます。' },
  { en: 'BEND', title: '曲げ加工', text: '300t 油圧式をはじめ NCバックゲージ付プレスブレーキ 8台。一枚の板が、寸法どおりの箱物へと立ち上がります。' },
  { en: 'WELD', title: '溶接', text: '6軸関節形アーク溶接ロボット 4台による自動化ラインに加え、スポット・アルゴン・アーク溶接を素材と用途で使い分け、強度と美しさを両立します。' },
  { en: 'ASSEMBLE & INSPECT', title: '組立・検査・出荷', text: '箱物板金製品の組立も全て社内で。きめ細かい徹底したチェックを経て、自信をもってお届けします。塗装・梱包・出荷まで一貫対応。' },
];

const body = `
<!-- ===== HERO ===== -->
<section class="hero" aria-label="メインビジュアル">
  <div class="hero__media">
    <video playsinline muted loop autoplay preload="metadata" poster="assets/video/poster.jpg" aria-hidden="true" tabindex="-1">
      <source src="assets/video/hero.webm" type="video/webm">
      <source src="assets/video/hero.mp4" type="video/mp4">
    </video>
  </div>
  <div class="hero__scan" aria-hidden="true"></div>
  <p class="hero__side" aria-hidden="true">NAGAMURA MFG. CO. — TOCHIGI, JAPAN — SINCE 1938</p>
  <div class="container hero__inner">
    <p class="hero__kicker">HIGH TECHNOLOGY &amp; HIGH QUALITY</p>
    <h1 class="hero__title">
      <span class="line"><span>創業<span class="years js-years">88</span><span class="unit">年</span></span></span>
      <span class="line"><span>精密板金加工の</span></span>
      <span class="line"><span>一貫体制<span class="thin"><span class="ph">設計・製造から</span><span class="ph">塗装・検査・出荷まで、</span><span class="ph">社内で完結。</span></span></span></span>
    </h1>
    <p class="hero__sub">長村製作所は栃木県栃木市にある精密板金加工を得意とするプロフェッショナル集団です。試作から出荷まで一貫して対応可能。屋外用公衆電話室や各種配線盤の筐体・ラックの製作を通じ、単品・量産にも柔軟に対応できる体制を整えています。</p>
    <div class="hero__actions">
      ${btn('technology.html', '技術情報を見る', 'btn--accent')}
      ${btn('contact.html', 'お問合せ・お見積り', 'btn--line')}
    </div>
    <div class="hero__bottom">
      <ul class="hero__stats" aria-label="長村製作所の基本データ">
        <li class="hero__stat"><b>1938</b><span>FOUNDED</span></li>
        <li class="hero__stat"><b>ISO<small>9001 / 14001</small></b><span>CERTIFIED</span></li>
        <li class="hero__stat"><b>0.5<small>〜6.0mm</small></b><span>SHEET THICKNESS</span></li>
        <li class="hero__stat"><b>3<small>素材</small></b><span>鉄 / ステンレス / アルミ</span></li>
      </ul>
      <p class="hero__scroll" aria-hidden="true">SCROLL <i></i></p>
    </div>
  </div>
</section>

<div class="marquee" aria-hidden="true">
  <div class="marquee__track">
    ${['精密板金加工', '光配線盤', '19インチラック', '屋外公衆電話室', '喫煙ブース SMOX', 'ファクトリーブース KOVAKO', 'テレワークブース Monobo', 'ISO 9001', 'ISO 14001', '樋門ハウス', 'シールドキャビネット'].map(t => `<span class="marquee__item"><i></i>${t}</span>`).join('')}
  </div>
</div>

<!-- ===== ADVANTAGE ===== -->
<section class="section section--dark section--grid" id="advantage" aria-labelledby="adv-title">
  <div class="container">
    <div class="reveal">${heading({ num: '01', en: 'ADVANTAGE', ja: '最新鋭の設備と、<br>その設備を使いこなす経験。', lead: '高い技術力でお客様のニーズにお応えします。精密板金加工を得意とする長村製作所では、試作から、単品・量産にも柔軟に対応できる金属板金加工設備の体制を整えています。お客様のご要望に応えるため、今まで培われたノウハウがございます。綿密なお打ち合わせのもと、金属板金加工の設計・開発・製造から、塗装・検査・出荷まで一貫して対応可能です。', tag: 'h2' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="adv-title">')}</div>
    <ul class="adv-grid" data-stagger>
      ${[
        ['advantage.html#total-solution', 'photo/home-total', 'トータルソリューション', '設計・開発 → 製造 → 塗装 → 検査 → 出荷。多種多様なご依頼に社内一貫で対応し、短納期・低コストの課題を克服します。'],
        ['advantage.html#craftsmanship', 'photo/home-craft', '職人の技・若手の活躍', '長年培ってきた技術やノウハウを留めず、ベテラン社員から若手社員へ。複数工程を受け持てる多能工を育てています。'],
        ['advantage.html#quality', 'photo/home-quality', '品質と環境への取り組み', '品質マネジメント ISO9001、環境マネジメント ISO14001 を認証取得。国際規格に基づいた品質保証と環境配慮を継続しています。'],
      ].map(([href, im, t, d], i) => `<li><a class="adv-card" href="${href}">
        <div class="adv-card__img">${img(im, t)}</div>
        <div class="adv-card__body"><p class="adv-card__num">ADVANTAGE 0${i + 1}</p><h3 class="adv-card__title">${t}</h3><p class="adv-card__text">${d}</p><span class="adv-card__more">READ MORE <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div>
      </a></li>`).join('')}
    </ul>
  </div>
</section>

<!-- ===== PROCESS (WebGL) ===== -->
<section class="process" id="process" aria-labelledby="process-title">
  <div class="process__pin">
    <div class="process__canvas" id="process-canvas" aria-hidden="true"></div>
    <div class="process__fallback" aria-hidden="true">${img('hero/laser', '', { sizes: '100vw' })}</div>
    <div class="container process__ui">
      <div class="process__head">
        <p class="eyebrow"><span class="eyebrow__num">02</span><span class="eyebrow__en">PROCESS</span></p>
        <h2 class="sec-title" id="process-title" style="font-size:clamp(22px,2.6vw,34px)">一枚の板が、製品になるまで。<span class="small" style="display:block;font-weight:500;margin-top:6px;font-size:13px;color:var(--steel)">設計から出荷まで、社内一貫の6工程</span></h2>
      </div>
      <div class="process__steps" aria-live="polite">
        ${processSteps.map((s, i) => `<div class="process__step${i === 0 ? ' is-active' : ''}" data-step="${i}">
          <p class="process__step-num" aria-hidden="true">0${i + 1}</p>
          <p class="process__step-en">${s.en}</p>
          <h3 class="process__step-title">${s.title}</h3>
          <p class="process__step-text">${s.text}</p>
        </div>`).join('')}
      </div>
      <div></div>
    </div>
    <div class="process__progress" aria-hidden="true">${processSteps.map(() => '<span></span>').join('')}</div>
    <p class="process__hint" aria-hidden="true">SCROLL TO FORM</p>
  </div>
  <noscript><p class="container note" style="padding:24px 0">※ この工程アニメーションの表示には JavaScript が必要です。</p></noscript>
</section>

<!-- ===== TECHNOLOGY ===== -->
<section class="section section--light section--grid" id="technology" aria-labelledby="tech-title">
  <div class="container">
    <div class="reveal">${heading({ num: '03', en: 'TECHNOLOGY', ja: '金属板金加工、溶接、組立・検査。<br>すべてを自社で。', tone: 'light' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="tech-title">')}</div>
    <ul class="tech-grid" data-stagger>
      ${[
        ['technology.html#sheet-metal', 'photo/home-sheet', '金属板金加工', 'SHEET METAL', '複合機、NCタレパン加工機、NCベンダー機等を保有しており、特にレーザー加工においては、豊富な技術とノウハウを有しています。金属板金加工のことなら、長村製作所にお任せください！'],
        ['technology.html#welding', 'photo/home-weld', '各種溶接加工', 'WELDING', '長村製作所では、鉄、ステンレス、アルミなど、素材と用途に合わせて溶接方法の調整等を行い、強度のある美しい製品を製作します。弊社の強み・特徴でもある大型製品の溶接は、強度を十分に保つことを考慮しながら、美しく仕上げます。'],
        ['technology.html#assembly', 'photo/home-assembly', '組立・検査', 'ASSEMBLY & INSPECTION', '長村製作所では、箱物板金製品の組立作業も全て社内で行っています。品質検査については、弊社の女性スタッフが、女性ならではのきめ細かい徹底したチェックを行っています。厳しい目で品質のチェックを行ったのち、自信をもってお客様に製品をお届けいたします。'],
      ].map(([href, im, t, en, d]) => `<li><article class="tech-card">
        <div class="tech-card__img">${img(im, t)}</div>
        <div class="tech-card__body"><h3 class="tech-card__title">${t}<small>${en}</small></h3><p class="tech-card__text">${d}</p><p class="tech-card__more"><a class="link-arrow" href="${href}">詳細はこちら <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></p></div>
      </article></li>`).join('')}
    </ul>
    <div class="flex mt-5 reveal" style="justify-content:center;gap:16px">
      ${btn('equipment.html', '設備概要を見る', 'btn--dark')}
      ${btn('faq.html', 'よくある質問', 'btn--dark')}
    </div>
  </div>
</section>

<!-- ===== NUMBERS ===== -->
<section class="section section--dark-2" id="numbers" aria-labelledby="num-title">
  <div class="container">
    <div class="reveal">${heading({ num: '04', en: 'IN NUMBERS', ja: '数字で見る長村製作所' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="num-title">')}</div>
    <ul class="numbers" data-stagger>
      <li class="num"><span class="num__label">Founded</span><span class="num__value"><span class="js-counter js-years" data-count="88">88</span><small>年の歩み</small></span><span class="num__ja">1938年（昭和13年）創業</span><span class="num__note">創業100年に向けて、通信インフラと空間創造の2事業を軸に。</span></li>
      <li class="num"><span class="num__label">Employees</span><span class="num__value"><span class="js-counter" data-count="58">58</span><small>名</small></span><span class="num__ja">社員数（2026年1月時点）</span><span class="num__note">ベテランから若手への技術継承を進めています。</span></li>
      <li class="num"><span class="num__label">Phone booth makers in Japan</span><span class="num__value">国内<span class="js-counter" data-count="2">2</span><small>社のみ</small></span><span class="num__ja">公衆電話BOXを製造する会社数</span><span class="num__note">NTTグループの厳しい品質管理基準に対応し、東日本エリアの電話BOXを支えています。</span></li>
      <li class="num"><span class="num__label">Welding robots</span><span class="num__value"><span class="js-counter" data-count="4">4</span><small>台</small></span><span class="num__ja">6軸関節形アーク溶接ロボット</span><span class="num__note">CO2半自動溶接機 19台、アルゴンアーク溶接機 5台と併用し安定供給を実現。</span></li>
    </ul>
  </div>
</section>

<!-- ===== PRODUCTS ===== -->
<section class="section section--light" id="products" aria-labelledby="prod-title">
  <div class="container">
    <div class="reveal">${heading({ num: '05', en: 'PRODUCTS', ja: '通信インフラを支える製品から、<br>快適な空間をつくる製品まで。', tone: 'light', lead: '各種光配線盤等、19インチラック、屋外用公衆電話室、喫煙BOX、樋門ハウス等の公共製品、大型精密板金製品の設計・製造・販売を行っています。' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="prod-title">')}</div>
    <ul class="prod-strip" data-stagger>
      ${[
        ['products.html#panels', 'products/panel-2', '各種配線盤類', 'WIRING PANELS'],
        ['products.html#racks', 'products/rack-2', '19インチラック', '19-INCH RACKS'],
        ['products.html#phone-booth', 'products/booth-2', '屋外公衆電話室', 'PHONE BOOTH'],
        ['products.html#public', 'products/public-6', '公共製品', 'PUBLIC PRODUCTS'],
        ['products.html#others', 'products/other-1', 'その他', 'OTHERS'],
      ].map(([href, im, t, en]) => `<li><a class="prod-tile" href="${href}"><div class="prod-tile__img">${img(im, t)}</div><span class="prod-tile__en">${en}</span><span class="prod-tile__name">${t}</span></a></li>`).join('')}
    </ul>
    <div class="mt-6 reveal">
      <p class="eyebrow" style="color:var(--text-2)"><span class="eyebrow__en">ORIGINAL BRANDS</span></p>
      <h3 class="sec-title" style="font-size:clamp(22px,2.6vw,32px);color:var(--text)">電話ボックスの技術から生まれた、3つの空間ブランド</h3>
    </div>
    <ul class="brand-grid mt-4" data-stagger>
      ${[
        ['smox.html', 'brands/smox/fea-1', '喫煙ブース・喫煙ボックス', 'SMOX', '厚生労働省の技術的基準をクリア。屋内にも屋外にも対応した強固な設計、15秒で空気を入れ替える換気性能。'],
        ['kovako.html', 'brands/kovako/booth', 'ファクトリーブース', 'KOVAKO', '従業員を守る安心・安全のファクトリーブース。防災防塵に最適、最短1日で工事完了、完全オーダーメイド制。'],
        ['monobo.html', 'brands/monobo/case-main', 'テレワークブース', 'Monobo', '低天井OK、場所を選ばずフィットする個室ブース。設置可能な最低天井高 2100mm、最短2時間で設置可能。'],
      ].map(([href, im, cat, name, d]) => `<li><a class="brand-tile" href="${href}"><div class="brand-tile__img">${img(im, name, { sizes: '(min-width: 900px) 33vw, 100vw' })}</div><div class="brand-tile__body"><p class="brand-tile__cat">${cat}</p><p class="brand-tile__name">${name}</p><p class="brand-tile__desc">${d}</p><span class="brand-tile__more">VIEW BRAND <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div></a></li>`).join('')}
    </ul>
  </div>
</section>

<!-- ===== NEWS & BLOG ===== -->
<section class="section section--dark section--grid" id="news" aria-labelledby="news-title">
  <div class="container">
    <div class="home-news">
      <div class="reveal">
        ${heading({ num: '06', en: 'NEWS', ja: '新着情報' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="news-title">')}
        <div class="news-list">
          <a class="news-item" href="news.html"><time datetime="2019-07-19">2019.07.19</time><span class="news-item__title">ホームページをリニューアルいたしました。</span><span class="news-item__tag">INFO</span></a>
        </div>
        <p class="mt-4">${btn('news.html', 'もっと見る', 'btn--line btn--sm')}</p>
      </div>
      <div class="reveal">
        ${heading({ num: '', en: 'PRESIDENT BLOG', ja: '飯山社長のものづくりブログ', lead: 'ほぼ毎日更新。ものづくりの現場から、経営者の視点で綴る 895 本超のエッセイ。' })}
        <div class="news-list" data-latest="assets/data/blog.json" data-n="5"><p class="note">最新記事を読み込み中…</p></div>
        <p class="mt-4">${btn('blog.html', '社長ブログ 記事一覧', 'btn--line btn--sm')}</p>
      </div>
    </div>
  </div>
</section>

<!-- ===== COMPANY ===== -->
<section class="section section--light" id="company" aria-labelledby="company-title">
  <div class="container home-company">
    <div class="home-company__img img-reveal">${img('photo/building', '株式会社長村製作所 本社工場 外観', { sizes: '(min-width: 900px) 50vw, 100vw' })}</div>
    <div class="reveal">
      ${heading({ num: '07', en: 'COMPANY PROFILE', ja: '会社概要', tone: 'light' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="company-title">')}
      <dl class="info-list">
        <div><dt>商号</dt><dd>株式会社 長村製作所</dd></div>
        <div><dt>本社工場</dt><dd>〒329-4411 栃木県栃木市大平町横堀みずほ5-1<br>TEL：0282(45)1341　FAX：0282(45)1508</dd></div>
        <div><dt>東京本部</dt><dd>〒170-0013 東京都豊島区東池袋1‐21‐11 オーク池袋ビル5F</dd></div>
        <div><dt>設立</dt><dd>1938年5月5日</dd></div>
        <div><dt>代表者</dt><dd>代表取締役 飯山 進</dd></div>
        <div><dt>認証</dt><dd>ISO9001（1998年07月取得）／ISO14001（2001年02月取得）</dd></div>
      </dl>
      <div class="flex mt-4">${btn('company.html', '会社概要・沿革・アクセス', 'btn--dark')}${btn('management.html', '経営方針', 'btn--dark')}</div>
    </div>
  </div>
</section>

<!-- ===== RECRUIT ===== -->
<section class="recruit-banner" id="recruit-cta" aria-labelledby="recruit-title">
  <div class="recruit-banner__img">${img('recruit/about-1', '長村製作所の社員たち', { sizes: '100vw', attrs: 'data-parallax="8"' })}</div>
  <div class="container recruit-banner__inner reveal">
    <p class="eyebrow"><span class="eyebrow__num">08</span><span class="eyebrow__en">RECRUITMENT</span></p>
    <h2 class="recruit-banner__title" id="recruit-title">“ありがとう”を道しるべに、<br>未来を創りつづける。</h2>
    <p class="recruit-banner__lead">当社の経営理念に共感し、未来のモノづくりを共に創っていく仲間を待っています。新卒採用・キャリア採用の情報はこちらから。</p>
    <div class="recruit-banner__stats" aria-label="働く環境の数字">
      <div><b>127<small>日</small></b><span>年間休日数</span></div>
      <div><b>76.7<small>%</small></b><span>有給休暇平均取得率</span></div>
      <div><b>5.08<small>時間</small></b><span>月平均残業時間</span></div>
      <div><b>100<small>%</small></b><span>育児休業取得率・復職率</span></div>
    </div>
    <p class="mt-4">${btn('recruit.html', '採用情報を見る', 'btn--gold btn--lg')}</p>
  </div>
</section>

${cta()}
`;

export default {
  slug: 'index',
  title: 'ホーム',
  three: true,
  scripts: ['<script type="module" src="assets/js/process3d.js"></script>'],
  body,
};
