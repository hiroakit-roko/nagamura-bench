import fs from 'node:fs';
import { img, imgUrl, head, btn, arrow, ext, yearsSinceFounding } from '../lib.mjs';
import { EQ_TOTAL_UNITS, EQ_TOTAL_KINDS, PRODUCTS, NEWS, CIO_POSTS } from '../data.mjs';

const blog = JSON.parse(fs.readFileSync(new URL('../../assets/data/blog.json', import.meta.url)));

const STEPS = [
  ['DESIGN', '設計・開発', '図面はもちろん、手書きのイラスト等のデザイン画からの試作も可能。CADで設計図面を作成し、綿密なお打ち合わせのもと形にしていきます。'],
  ['PUNCH & CUT', '抜き・切断', '複合機・CNCターレットパンチプレスで一枚の板を抜き、切り出す。特にレーザー加工においては豊富な技術とノウハウを有しています。'],
  ['BEND', '曲げ', 'NCバックゲージ付プレスブレーキ（25t〜300t）で、平らな板を立体へ。大型の箱物を得意とする長村製作所の要となる工程です。'],
  ['WELD', '溶接', '6軸関節形アーク溶接ロボットと職人の手仕事。TIG・MIG・ガス・スポット・スタッド溶接で、強度のある美しい製品に仕上げます。'],
  ['COAT', '塗装', '協力工場との横のつながりを活かし、塗装・表面処理までお任せいただけます。'],
  ['INSPECT', '検査', '組立から品質検査まで社内で。きめ細かい徹底したチェックを行ったのち、自信をもってお届けします。'],
  ['SHIP', '出荷', '梱包・出荷まで社内で一貫対応。納品は全国対応。短納期のご相談もお気軽にどうぞ。'],
];

export default {
  path: '',
  render(r) {
    const y = yearsSinceFounding();
    const products = PRODUCTS.flatMap((g) => g.items.slice(0, g.id === 'rack' ? 4 : 2).map((it) => ({ ...g, it })));
    const latest = blog.slice(0, 4);
    return {
      title: 'ホーム',
      description: '株式会社長村製作所は、栃木県栃木市の精密板金加工のプロフェッショナル。1938年創業、設計・開発から製造、塗装、検査、出荷まで一貫体制。光配線盤・19インチラック・屋外公衆電話室などを製造しています。',
      bodyClass: 'home',
      body: `
<div class="hero-wrap">
<canvas id="gl" class="gl" aria-hidden="true"></canvas>
<section class="hero" aria-labelledby="hero-title">
  <div class="hero__media" aria-hidden="true">
    <video data-hero-video muted loop playsinline autoplay preload="metadata" poster="${imgUrl(r, 'hero-poster')}">
      <source src="${r}assets/video/factory.mp4" type="video/mp4">
    </video>
  </div>
  <div class="hero__lines" aria-hidden="true"></div>
  <p class="hero__side" aria-hidden="true">36.3476°N 139.7319°E — OHIRA, TOCHIGI</p>
  <div class="wrap hero__inner">
    <p class="hero__eyebrow fade-up" style="--d:.2s"><b>● EST. 1938</b><span>PRECISION SHEET METAL FABRICATION</span><span>TOCHIGI, JAPAN</span></p>
    <p class="hero__en" aria-hidden="true"><span><i style="--i:0">High</i> <i style="--i:1">Technology</i></span><span><i class="amp" style="--i:2">&amp;</i> <i class="outline" style="--i:3">High</i> <i style="--i:4">Quality</i></span></p>
    <div class="hero__row">
      <div>
        <h1 class="hero__ja fade-up" id="hero-title" style="--d:.9s"><span class="sr-only">HIGH TECHNOLOGY &amp; HIGH QUALITY — </span><span class="yr">創業<b data-years>${y}</b>年</span><br>精密板金加工の一貫体制</h1>
        <p class="hero__lead fade-up" style="--d:1.1s">一枚の金属板から、社会インフラを支える確かなかたちへ。<br class="pc">設計・開発から製造、塗装、検査、出荷まで。栃木県栃木市の長村製作所です。</p>
      </div>
      <p class="hero__scroll fade-up" style="--d:1.4s" aria-hidden="true"><i></i>SCROLL — FROM FLAT TO FORM</p>
    </div>
  </div>
</section>

<section class="process" data-process aria-labelledby="process-title">
  <div class="process__sticky">
    <div class="process__ui">
      <div class="process__head">
        <h2 class="process__title" id="process-title">From flat<br>to form.<small>設計から出荷まで、一貫対応。</small></h2>
        <p class="process__count" aria-hidden="true"><b data-step-count>00</b>/ 07 PROCESS</p>
      </div>
      <ol class="process__steps">
        ${STEPS.map(([en, ja, tx], i) => `<li class="pstep"><p class="pstep__no">STEP ${String(i + 1).padStart(2, '0')}</p><p class="pstep__en" aria-hidden="true">${en}</p><h3 class="pstep__ja">${ja}</h3><p class="pstep__tx">${tx}</p></li>`).join('')}
      </ol>
      <ul class="process__rail" aria-hidden="true">${STEPS.map(([en, ja], i) => `<li>${String(i + 1).padStart(2, '0')} <span>${ja}</span></li>`).join('')}</ul>
      <p class="process__hud" data-hud aria-hidden="true"></p>
    </div>
  </div>
</section>
</div>

<section class="statement" aria-labelledby="adv-title">
  <div class="wrap">
    ${head({ no: '01', en: 'Advantage — 長村製作所の強み', ja: '最新鋭の設備と、<br>その設備を使いこなす経験。', id: 'adv-title' })}
    <div class="statement__layout">
      <div class="statement__body">
        <p class="statement__big rv">高い技術力で、<em>お客様のニーズ</em>に<br class="pc">お応えします。</p>
        <p class="statement__tx rv">精密板金加工を得意とする長村製作所では、試作から、単品・量産にも柔軟に対応できる金属板金加工設備の体制を整えています。お客様のご要望に応えるため、今まで培われたノウハウがございます。綿密なお打ち合わせのもと、金属板金加工の設計・開発・製造から、塗装・検査・出荷まで一貫して対応可能です。</p>
        <div class="rv">
          <p class="sh__meta" style="margin-bottom:14px"><span class="sh__no">MATERIAL</span><span class="sh__line"></span>対応素材</p>
          <ul class="materials"><li><span>鉄<small>0.6–6.0mm</small></span></li><li><span>ステンレス<small>0.5–6.0mm</small></span></li><li><span>アルミ<small>0.8–6.0mm</small></span></li></ul>
        </div>
      </div>
      <figure class="statement__fig rv-img" data-parallax=".12">${img(r, 'bending-operator', 'プレスブレーキで曲げ加工を行う社員', { sizes: '(min-width:900px) 40vw, 100vw' })}<figcaption>BENDING — 曲げ加工</figcaption></figure>
    </div>
  </div>
</section>

<div class="marquee" aria-hidden="true">${[0, 1].map(() => `<div class="marquee__track"><span>Laser</span><span class="outline">Punching</span><span>Bending</span><span class="outline">Welding</span><span>Assembly</span><span class="outline">Inspection</span><span>Since 1938</span></div>`).join('')}</div>

<section class="sec" aria-label="長村製作所の強み 3つのポイント">
  <div class="wrap">
    <div class="acards">
      ${[
        ['01', 'TOTAL SOLUTION', 'トータルソリューション', '設計から製造、検査、梱包・出荷まで社内で一貫対応。短納期・低コストという課題を一貫生産体制で克服します。', 'adv01', 'advantage/#total'],
        ['02', 'CRAFTSMANSHIP', '職人の技・若手の活躍', '長年培ってきた技術やノウハウを留めず、ベテランから若手社員への技術継承に努めています。', 'adv02', 'advantage/#craft'],
        ['03', 'QUALITY & ENVIRONMENT', '品質と環境への取り組み', '品質マネジメントシステム「ISO：9001」、環境マネジメントシステム「ISO：14001」を認証取得しています。', 'home03', 'advantage/#quality'],
      ].map(([no, en, ja, tx, im, href]) => `<a class="acard rv" href="${r}${href}">
        <span class="acard__img">${img(r, im, '', { sizes: '(min-width: 900px) 33vw, 100vw' })}</span>
        <span class="acard__no" aria-hidden="true">${no}</span>
        <span class="acard__en">${en}</span>
        <span class="acard__ttl">${ja}</span>
        <span class="acard__tx">${tx}</span>
        <span class="acard__more">詳しく見る ${arrow}</span>
      </a>`).join('')}
    </div>
  </div>
</section>

<section class="sec sec--tight is-light" aria-labelledby="num-title">
  <div class="wrap">
    ${head({ no: '02', en: 'Numbers', ja: '数字で見る長村製作所', id: 'num-title' })}
    <div class="stats">
      <div class="stat rv"><p class="stat__label">創業</p><p class="stat__num"><span data-count="${y}" data-years>${y}</span><small>年</small></p><p class="stat__note">1938年（昭和13年）5月5日 設立</p></div>
      <div class="stat rv" style="--d:.08s"><p class="stat__label">社員数</p><p class="stat__num"><span data-count="58">58</span><small>名</small></p><p class="stat__note">2026年1月時点</p></div>
      <div class="stat rv" style="--d:.16s"><p class="stat__label">保有設備</p><p class="stat__num"><span data-count="${EQ_TOTAL_UNITS}">${EQ_TOTAL_UNITS}</span><small>台</small></p><p class="stat__note">設備概要に掲載の全${EQ_TOTAL_KINDS}項目・7カテゴリの台数合計</p></div>
      <div class="stat rv" style="--d:.24s"><p class="stat__label">対応板厚</p><p class="stat__num"><span data-count="0.5" data-dec="1">0.5</span><small>–</small><span data-count="6.0" data-dec="1">6.0</span><small>mm</small></p><p class="stat__note">鉄 0.6〜6.0 / ステンレス 0.5〜6.0 / アルミ 0.8〜6.0mm（4×8サイズ迄）</p></div>
    </div>
  </div>
</section>

<section class="sec" aria-labelledby="tech-title">
  <div class="wrap">
    ${head({ no: '03', en: 'Technology — 技術情報', ja: '一枚の板に、<br>三つの技を重ねる。', id: 'tech-title' })}
    <div class="tech">
      ${[
        ['01', 'SHEET METAL', '金属板金加工', '複合機、NCタレパン加工機、NCベンダー機等を保有しており、特にレーザー加工においては、豊富な技術とノウハウを有しています。金属板金加工のことなら、長村製作所にお任せください！', 'tech01', 'job-metal', 'technology/#sheetmetal'],
        ['02', 'WELDING', '各種溶接加工', '長村製作所では、鉄、ステンレス、アルミなど、素材と用途に合わせて溶接方法の調整等を行い、強度のある美しい製品を製作します。弊社の強み・特徴でもある大型製品の溶接は、強度を十分に保つことを考慮しながら、美しく仕上げます。', 'job-welding', 'tech07', 'technology/#welding'],
        ['03', 'ASSEMBLY & INSPECTION', '組立・検査', '長村製作所では、箱物板金製品の組立作業も全て社内で行っています。品質検査については、弊社の女性スタッフが、女性ならではのきめ細かい徹底したチェックを行っています。厳しい目で品質のチェックを行ったのち、自信をもってお客様に製品をお届けいたします。', 'job-assembly', 'tech11', 'technology/#assembly'],
      ].map(([no, en, ja, tx, a, b, href]) => `<article class="tech__row">
        <div class="tech__media">
          <div class="rv-img">${img(r, a, ja, { sizes: '(min-width: 900px) 50vw, 100vw' })}</div>
          <div class="sub rv-img" style="--d:.25s" data-parallax=".25">${img(r, b, '', { sizes: '(min-width: 900px) 22vw, 42vw' })}</div>
        </div>
        <div>
          <p class="tech__no" aria-hidden="true">${no}</p>
          <p class="tech__en">${en}</p>
          <h3 class="tech__ttl">${ja}</h3>
          <p class="tech__tx">${tx}</p>
          <p style="margin-top:28px">${btn(r + href, '詳細はこちら')}</p>
        </div>
      </article>`).join('')}
    </div>
  </div>
</section>

<section class="sec sec--tight sec--ink2" aria-labelledby="links-title">
  <div class="wrap">
    <h2 class="sr-only" id="links-title">コンテンツ一覧</h2>
    <div class="tiles" data-stagger>
      ${[
        ['equipment/', 'Equipment', '設備概要', 'eq-bending01'],
        ['products/', 'Products', '製品紹介', 'pr-03_02'],
        ['faq/', 'FAQ', 'よくある質問', 'adv03'],
        ['company/', 'Company Profile', '会社概要', 'home10'],
        ['recruit/', 'Recruitment', '採用情報', 'team-wide'],
      ].map(([href, en, ja, im], i) => `<a class="tile" href="${r}${href}"><span class="tile__img" aria-hidden="true">${img(r, im, '', { sizes: '(min-width:1100px) 20vw, 50vw' })}</span><span class="tile__no">${String(i + 1).padStart(2, '0')} / 05</span><span><span class="tile__en" style="display:block">${en}</span><span class="tile__ja">${ja}</span></span><span class="tile__foot"><span></span>${arrow}</span></a>`).join('')}
    </div>
  </div>
</section>

<section class="sec" aria-labelledby="prod-title">
  <div class="wrap">
    <div class="col-head" style="margin-bottom:0">${head({ no: '04', en: 'Products — 製品紹介', ja: '通信インフラから、<br>まちの風景まで。', id: 'prod-title' })}</div>
    <div class="prail" tabindex="0" aria-label="製品の一覧（横スクロール）">
      ${products.map(({ ja, it }) => `<a class="pcard" href="${r}products/#${PRODUCTS.find((g) => g.ja === ja).id}"><span class="pcard__img">${img(r, it[0], it[1], { sizes: '320px' })}</span><span class="pcard__cat">${ja}</span><span class="pcard__name">${it[1]}${it[2] ? ` <small class="mono">${it[2]}</small>` : ''}</span></a>`).join('')}
    </div>
    <div class="brands" style="margin-top:56px">
      ${[
        ['SMOX', '屋内外対応の喫煙ブース', '公衆電話ボックスの型材をもとに製作。風速36m/secの耐久性と、約15秒で中の空気が入れ替わる換気性能。', 'smox-install', 'https://nagamura.co.jp/smox/'],
        ['KOVAKO', 'ファクトリーブース', '工場・倉庫内に設置できる換気性能抜群の小部屋。最短1日で工事完了、完全オーダーメイド制。', 'kovako-booth', 'https://nagamura.co.jp/kovako/'],
        ['Monobo', '省スペース対応テレワークブース', '公衆電話ボックス製造で培った技術を活かした個室ブース。設置可能な最低天井高2100mm。', 'monobo-main', 'https://nagamura.co.jp/monobo/'],
      ].map(([n, c, t, im, u]) => `<a class="brand rv" href="${u}" target="_blank" rel="noopener"><span class="brand__img">${img(r, im, '', { sizes: '(min-width:900px) 33vw, 100vw' })}</span><span class="brand__body"><span class="brand__name">${n}</span><span class="brand__cat">${c}</span><span class="brand__tx">${t}</span><span class="brand__link">ブランドサイトへ ${ext}<span class="sr-only">（外部サイト・新しいタブ）</span></span></span></a>`).join('')}
    </div>
    <p style="margin-top:40px">${btn(r + 'products/', '製品紹介を見る')}</p>
  </div>
</section>

<section class="msg" aria-labelledby="msg-title">
  <div class="msg__bg" data-parallax=".6" aria-hidden="true">${img(r, 'ceo-factory', '', { sizes: '100vw' })}</div>
  <div class="wrap msg__inner">
    <p class="sh__meta"><span class="sh__no">05</span><span class="sh__line"></span><span>Message — 代表挨拶</span></p>
    <h2 class="msg__quote rv" id="msg-title" style="margin-top:24px">「長村製作所、ありがとう、<br>助かったよ。」<br>その言葉を、全社員の喜びに。</h2>
    <p class="msg__tx rv">当社は1938年（昭和13年）の創業以来、「公衆電話ボックス」「光配線盤及び19インチラック」「通信用機材・資材等」の製造を通じ、通信社会インフラ整備構築に貢献してまいりました。創業100年にむけて本業を基盤とし、常に技術を磨きお客様の多様なニーズに対応してまいります。</p>
    <p class="msg__sign rv"><small>代表取締役</small><strong>飯山 進</strong></p>
    <p class="rv" style="margin-top:32px">${btn(r + 'company/#greeting', '代表挨拶を読む')}</p>
  </div>
</section>

<section class="rband" aria-labelledby="rec-title">
  <div class="rband__grid">
    <div class="rband__img">${img(r, 'team-wide', '長村製作所の社員たち', { sizes: '(min-width:900px) 55vw, 100vw' })}</div>
    <div class="rband__body">
      <p class="rband__en" aria-hidden="true">Join<br>our team.</p>
      <h2 class="rband__ttl" id="rec-title">"ありがとう"を道しるべに、<br>未来を創りつづける。</h2>
      <p class="rband__tx">対応が難しいニッチなニーズこそ、当社が得意とする分野。長村製作所には、一人ひとりが活躍できるフィールドが広がっています。</p>
      <p>${btn(r + 'recruit/', '採用情報を見る')}</p>
    </div>
  </div>
</section>

<section class="sec" aria-labelledby="blog-title">
  <div class="wrap">
    ${head({ no: '06', en: 'News & Blog', ja: 'お知らせとブログ', id: 'blog-title' })}
    <div class="two">
      <div>
        <div class="col-head"><h3><small>PRESIDENT'S BLOG</small>社長ブログ</h3><a class="textlink" href="${r}blog/">記事一覧（${blog.length}本） ${arrow}</a></div>
        <ul class="posts">${latest.map((p) => `<li><a class="post" href="https://nagamura.co.jp/blog/?p=${p.id}" target="_blank" rel="noopener"><time datetime="${p.d}">${p.d.replace(/-/g, '.')}</time><span class="post__t">${p.t}</span><span class="post__e">${p.e}</span>${ext}<span class="sr-only">（元記事・新しいタブ）</span></a></li>`).join('')}</ul>
      </div>
      <div>
        <div class="col-head"><h3><small>NEWS</small>新着情報</h3><a class="textlink" href="${r}news/">一覧を見る ${arrow}</a></div>
        <ul class="posts">${NEWS.map((n) => `<li><a class="post" href="${r}news/#n${n.date}"><time datetime="${n.date}">${n.date.replace(/-/g, '.')}</time><span class="post__t">${n.title}</span>${arrow}</a></li>`).join('')}</ul>
        <div class="col-head" style="margin-top:48px"><h3><small>CIO BLOG</small>ITブログ</h3><a class="textlink" href="${r}blog_cio/">記事一覧 ${arrow}</a></div>
        <ul class="posts">${CIO_POSTS.slice(0, 2).map((p) => `<li><a class="post" href="${p.u}" target="_blank" rel="noopener"><time datetime="${p.d}">${p.d.replace(/-/g, '.')}</time><span class="post__t">${p.t}</span>${ext}<span class="sr-only">（元記事・新しいタブ）</span></a></li>`).join('')}</ul>
      </div>
    </div>
  </div>
</section>
`,
    };
  },
};
