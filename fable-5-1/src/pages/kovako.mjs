import { img, heading, localNav, btn, youtube } from '../helpers.mjs';
import { accordion } from './faq.mjs';

const FORM = 'https://forms.office.com/r/8JExqbY24a';
const brandCta = () => `<div class="brand-cta reveal">
  <a class="tel-card" href="tel:0282451341"><span class="tel-card__label">お電話でのお問い合わせ</span><span class="tel-card__num">0282-45-1341</span><span class="tel-card__note">受付時間 平日 8:15 ～ 17:00</span></a>
  <a class="tel-card" href="${FORM}" target="_blank" rel="noopener" style="border-color:var(--accent);background:var(--accent-soft)"><span class="tel-card__label">資料請求</span><span class="tel-card__num" style="font-family:var(--font-ja);font-size:24px">資料請求はこちら ↗</span><span class="tel-card__note">KOVAKO 専用フォーム（Microsoft Forms）が開きます</span></a>
</div>`;

const features = [
  ['feat-1', '設置が簡単', '<p>KOVAKOは、すでに基礎工事がされている工場や倉庫のなかに設置するため、手間なく短い期間で工事が完了します。仕様によって多少の変動はありますが、最短1日の工事で設置が可能。新しく部屋を作る場合よりも、大きく工事費を抑えることができます。必ず、現地調査を行ったうえで設置を行うため、工事当日もスムーズかつスピーディであることが特長。</p><p>スペースを傷つけることなく設置するため、賃貸の工場や倉庫に設置を考えている場合でも、安心してご依頼いただけます。また、ご要望にあわせて屋外への設置も可能な限り柔軟に対応いたします。撤去をする際も簡単に解体できるため、手間なくスピーディにファクトリーブースを設置したいという方は、お気軽にご相談ください。</p>'],
  ['feat-2', '高耐久。長期利用も安心', '<p>KOVAKOは、電話ボックスと同じ型材を用いて作られているため、非常に高い耐久性をもったファクトリーブースです。長村製作所では、1938年から公衆電話ボックスやサーバーラックなど、屋内外に設置できる高耐久の製品を作り続けてきました。長年で培った技術を生かして、現在は耐久性の高いファクトリーブースKOVAKOの製作を行っています。</p><p>そんなKOVAKOは、強化ガラスを使用して作られているため、通常の休憩室よりも耐久性が高く安全です。また、世界標準の品質マネジメント規格であるISO9001と、環境マネジメントのISO14001を取得しているため、品質面でもご安心いただけます。</p>'],
  ['feat-3', 'オーダーメイドだから自由な形・サイズで設置できる', '<p>ファクトリーブースは、基本的にパーテーションの組み合わせにより、自由なレイアウトで小部屋を作れます。しかし、KOVAKOではあらかじめ設置する場所にあわせて、完全オーダーメイドで好きなサイズで設計することが可能です。ご用意できるサイズとして、最小900x900mmのものから、3m四方以上の小部屋まで自由に設計できます。</p><p>工場や倉庫のスペースにあわせて、ご希望のサイズに調整することが可能なので、ぜひお気軽にご相談ください。また、事前に現地調査にて設置スペースのサイズを確認してから設計を行うため、「受注後に設置スペースに入らなかった！」という失敗もありません。安心してお任せください。</p>'],
  ['feat-4', '照明や人感センサー、冷暖房も設置できる', '<p>工場や倉庫内に、ファクトリーブースを設置するのであれば、従業員が快適に過ごせるような環境にしたいものですよね。KOVAKOでは、ご要望にあわせて冷暖房や人感センサーの設置が可能です。</p><p>作業場が広い工場や倉庫では、冷暖房の風がいきわたりにくく、熱中症になったり体調不良を引き起こす可能性があります。そこで、室温が快適に保たれたファクトリーブースの休憩室があれば、熱中症対策や寒さ対策ができます。また、人感センサーと組み合わせることにより、人のいる時間にのみ換気を行うといったことも可能です。無駄な電気代をカットしつつ、快適な環境を効率的に作れる点が大きな特長です。</p>'],
  ['feat-5', '換気能力に優れている', '<p>ファクトリーブースは密閉された空間であるため、換気がきちんとできるか心配ですよね。その点、KOVAKOは抜群の換気性能を誇っており、最初から換気扇が付属した状態で提供いたします。入室した際に換気扇がオンになる仕組みのため、ニオイもこもりにくく、常にクリーンな空気のなかで快適に過ごすことが可能です。</p><p>近年では、新型コロナウィルスの流行により、感染症対策の強化が工場や倉庫にも求められています。KOVAKOは、三密対策として1人用の少人数向けサイズの用意も可能であり、高い換気性能をもつため従業員の安心・安全を保証します。また、換気ダクトを外につないで外気を取り込むこともできるため、溶接ヒューム対策や防塵にも役立つでしょう。</p>'],
  ['feat-6', '割賦支払いで初期費用を抑えられる', '<p>ファクトリーブースの導入には、高額な初期費用が必要になることが多いため、導入を断念された方も多いのではないでしょうか。その点KOVAKOでは、一括支払いのほかに、割賦支払いのプランもご用意しているので、初期費用を抑えての導入ができます！</p><p>ファクトリーブースの導入にかかる初期費用を抑えたいとお考えの方は、割賦支払いのご利用もご検討ください。<br><span class="note">※割賦支払いには利息が発生いたします。</span></p><div class="table-wrap mt-3"><table class="table" style="min-width:0"><caption class="sr-only">お支払い例</caption><thead><tr><th colspan="2">お支払い例</th></tr></thead><tbody><tr><td>サイズ</td><td>2700×900</td></tr><tr><td>本体価格</td><td>200万円（設置工事費込み）</td></tr><tr><td>金利</td><td>年利5～7％</td></tr><tr><td>支払回数</td><td>60回</td></tr><tr><td>月額</td><td>約39,000円</td></tr></tbody></table></div>'],
];

const FAQ = [
  ['価格を教えてください', '<p>KOVAKOはオーダーメイド品のため、大きさや仕様によって価格が異なります。また、設置場所の状態などによって工事費も変動しますので、まずはお問い合わせください。</p>'],
  ['納品までどれくらいかかりますか？', '<p>受注生産の為、まずはお問い合わせください。</p>'],
  ['本体が故障や破損してしまった場合、どうしたらよいですか？', '<p>弊社までお問合せください。</p>'],
  ['換気はできますか？', '<p>はい、換気扇が付属します。溶接ヒューム等の対策で、換気ダクトを工場の外から繋いで工場の空気が入らないようにすることも可能です。</p>'],
  ['工事の期間をおしえてください', '<p>仕様によって異なりますが、最短1日で設置完了します。</p>'],
  ['増築や組み換えはできますか？', '<p>対応可能ですが、仕様等により対応できない場合もあります。まずはお問い合わせください。</p>'],
  ['屋外には設置できますか？', '<p>設置可能ですが、大きさにより対応できない場合があります。また、各自治体への申請等が必要な場合があります。</p>'],
  ['一度設置したKOVAKOを移動することはできますか？', '<p>対応可能ですが、仕様等により対応できない場合もあります。まずはお問い合わせください。</p>'],
  ['エアコンの設置はできますか？', '<p>はい、お好きなエアコンをつけていただくことができますし、こちらでKOVAKOのサイズにあったものをご用意させていただくこともできます。</p>'],
  ['照明はつけられますか？また、好きな照明を設置できますか？', '<p>標準で照明は付属しています。異なる照明をご希望の場合はお問い合わせください。</p>'],
];

const columns = [
  ['factory-heat-countermeasures', '倉庫でできる暑さ対策をご紹介！倉庫が暑くなってしまう原因とは？'], ['factory-safety-measures', '工場内で安全対策する際に注意したいポイント'], ['welding-factory-break-room', '溶接工場に休憩室を設置するメリット・デメリットとは？'], ['break-room-in-the-warehouse', '倉庫内に休憩室を設置するメリットとデメリットを徹底解説'], ['factory-equipment-improvement', '工場でできる設備の改善とは？具体例と注意したいポイント'], ['factory-break-room-comfortable', '工場の休憩室を快適にする3つの方法と気をつけたい注意点'], ['factory-expansion', '工場に増設できる個室の種類と増設する際のケース例を紹介'], ['factory-partition-merit', '工場にパーテーションを設置するメリットとデメリットを解説'], ['factory-partition', '工場を間仕切りするための方法と気をつけておきたい注意点'], ['small-room-type-in-the-factory', '工場内の小部屋とは？種類や作るケースの例などを紹介'], ['welding-fume-health', '溶接ヒュームとは？健康への影響や対策などもまとめて紹介'], ['factory-heat-stroke', '工場内が暑くなる原因とは？従業員の熱中症対策も詳しく紹介'], ['factory-booth-merit', 'ファクトリーブースとは？導入するメリット・デメリット'],
];

const body = `
<header class="brand-hero" aria-label="KOVAKO">
  <div class="brand-hero__media">${img('brands/kovako/booth', '', { eager: true, sizes: '100vw' })}</div>
  <div class="container">
    <nav class="crumbs" aria-label="パンくずリスト"><ol><li><a href="index.html">ホーム</a></li><li><a href="products.html">製品紹介</a></li><li><span aria-current="page">KOVAKO</span></li></ol></nav>
    <span style="display:inline-block;background:#fff;padding:12px 18px;border-radius:8px;margin-bottom:22px"><img src="assets/img/brands/kovako/logo.webp" alt="ファクトリーブース KOVAKO" width="500" height="456" style="height:40px;width:auto;display:block"></span>
    <h1 class="brand-hero__title">従業員を守る安心・安全の<br>ファクトリーブース「KOVAKO」</h1>
    <p class="brand-hero__lead">簡単に設置できる換気性能抜群なファクトリーブース「KOVAKO」。働くすべての人に安心と安全をお届けします。</p>
    <ul class="brand-hero__points"><li>防災防塵に最適</li><li>最短1日で工事完了</li><li>完全オーダーメイド制</li></ul>
    <div class="brand-hero__actions">${btn(FORM, '資料請求はこちら', 'btn--accent btn--lg', 'target="_blank" rel="noopener"')}${btn('tel:0282451341', '0282-45-1341', 'btn--line btn--lg')}</div>
  </div>
</header>
${localNav([['#about', 'ファクトリーブースとは'], ['#features', '特長'], ['#story', '開発ストーリー'], ['#law', '法改正対応'], ['#conditions', '設置条件・商品規格'], ['#flow', '導入までの流れ'], ['#faq', 'よくある質問'], ['#column', 'お役立ち情報']])}

<section class="section section--dark section--grid" id="about" aria-labelledby="ab-title">
  <div class="container split">
    <div class="split__body reveal">
      ${heading({ num: '01', en: 'WHAT IS FACTORY BOOTH', ja: 'ファクトリーブースとは' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="ab-title">')}
      <p>ファクトリーブースとは、工場や倉庫内に設置できる天井付きの簡易的な小部屋のことです。パーテーションの素材により、遮音性や断熱性をもつものなど豊富な種類が展開されています。目的にあわせて、休憩室・事務室・検査室などさまざまな用途に利用でき、設置も比較的簡単な点が特徴です。</p>
      <p>一般的なファクトリーブースは、密閉された空間の空気を循環させるために、換気扇を後付けするものが多いです。しかし、KOVAKOはもともと換気性能に優れた仕様になっているので、換気扇をオプションで付ける必要はありません。室内の空気を新しいものに入れ替えるだけではなく、換気ダクトを外につなげば常に新しい空気を室内に取り入れられます。</p>
      <p>工場や倉庫での作業内容によっては、作業場に粉塵が舞っていたり、人体に有害な物質が空気中に漂っている場合もあるでしょう。現場で働く従業員の健康のためにも、安全なファクトリーブースの設置はおすすめです。</p>
    </div>
    <div>
      <div class="split__img img-reveal">${img('brands/kovako/booth', 'KOVAKO 設置イメージ', { sizes: '(min-width: 900px) 50vw, 100vw' })}</div>
      <div class="mt-3" style="background:#fff;border-radius:var(--radius-lg);padding:16px"><img src="assets/img/brands/kovako/booth-diagram.svg" alt="KOVAKO の換気の仕組み（換気ダクトで外気を取り込む）" loading="lazy" style="width:100%;height:auto"></div>
    </div>
  </div>
</section>

<section class="section section--light" id="features" aria-labelledby="fe-title">
  <div class="container">
    <div class="reveal">${heading({ num: '02', en: 'FEATURES', ja: 'ファクトリーブース「KOVAKO」の特長', tone: 'light' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="fe-title">')}</div>
    ${features.map(([im, t, html], i) => `<div class="feature"><div class="feature__img feature__img--contain img-reveal">${img('brands/kovako/' + im, t)}</div><div class="feature__body reveal"><p class="feature__num">FEATURE 0${i + 1}</p><h3 class="feature__title">${t}</h3>${html}</div></div>`).join('')}
  </div>
</section>

<section class="section section--dark-2" aria-label="お問い合わせ"><div class="container">${brandCta()}</div></section>

<section class="section section--dark section--grid" id="story" aria-labelledby="st-title">
  <div class="container split split--rev">
    <div class="split__body reveal">
      ${heading({ num: '03', en: 'DEVELOPMENT STORY', ja: 'ファクトリーブース「KOVAKO」の開発ストーリー' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="st-title">')}
      <p>KOVAKOを開発したきっかけは、当社で法改正された溶接ヒュームに関する規則に対応するため、換気性能の高いファクトリーブースを作ろうと考えたことでした。長村製作所では、現在までに公衆電話ボックスや喫煙ブースなどの製作を行ってきました。</p>
      <p>その経緯から、頑丈かつ工場内の空気を遮断して、新しい空気を取り込める換気性能の高い小部屋が作れるのではないかと思い、開発に着手。工場や倉庫内に設置しても快適に過ごせる、ファクトリーブースKOVAKOが誕生したのです。</p>
      <p>他社様のなかでも、「溶接ヒューム対策や防塵のできる、安全で快適な休憩室を工場や倉庫に作りたい」というニーズが多いことを知り、皆様にも広くご利用いただいています。</p>
    </div>
    <div class="reveal">${youtube('L2UgGfBdmT8', 'KOVAKO 開発ストーリー', 'brands/kovako/flow-4')}</div>
  </div>
</section>

<section class="section section--light" id="law" aria-labelledby="lw-title">
  <div class="container">
    <div class="reveal">${heading({ num: '04', en: 'REGULATION', ja: '法改正の対応にもKOVAKOがおすすめ', tone: 'light' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="lw-title">')}</div>
    <div class="feature"><div class="feature__img feature__img--contain img-reveal">${img('brands/kovako/recommend-1', '溶接ヒュームの法改正')}</div><div class="feature__body reveal"><h3 class="feature__title">溶接ヒュームの法改正</h3>
      <p>溶接ヒュームとは、金属をつなぎ合わるアーク溶接を行う際に発生する、人体に有害な粒子のことです。溶接時に溶かされた金属は、蒸気になったあと冷やされて粒子になります。その細かい粒子が人体に入り込むと、肺がんや神経障害などの健康被害を引き起こす可能性があるのです。</p>
      <p>そのため、厚生労働省では溶接ヒュームの作業を行うにあたり、いくつかの規則を設け、2022年に法改正を行いました。改正された内容の中には、溶接ヒュームを行う工場内には、作業場以外の場所に休憩室を設けることも含まれています。</p>
      <blockquote class="quote mt-3" style="font-size:15px;font-weight:500"><strong class="strong">【特化則第37条】休憩室の設置</strong><br>対象物を常時使用する作業に労働者を従事させるときは、作業場所以外の場所に休憩室を設ける。<br><span class="note">厚生労働省：「特定化学物質障害予防規則等」より引用</span></blockquote></div></div>
    <div class="feature"><div class="feature__img feature__img--contain img-reveal">${img('brands/kovako/recommend-2', 'KOVAKO は屋外から空気を取り込める')}</div><div class="feature__body reveal"><h3 class="feature__title">KOVAKOは屋外から空気を取り込めるから安心安全</h3>
      <p>一般的なファクトリーブースや休憩室の場合、換気扇をつけても工場内の空気を循環するだけにとどまります。しかし、KOVAKOは換気ダクトを外につなぐことで、常に新しい空気を室内に送り込むことができます。</p>
      <p>ドアからの空気を入りづらくして、換気によりきれいな空気だけを室内に送るといったことも可能なので、従業員が安心して休憩や事務作業を行えます。溶接ヒュームの作業がない場所では、上部に取り付けられた排気口だけでの換気も可能です。</p></div></div>
  </div>
</section>

<section class="section section--dark section--grid" id="conditions" aria-labelledby="cd-title">
  <div class="container">
    <div class="split" style="align-items:start">
      <div class="reveal">
        ${heading({ num: '05', en: 'CONDITIONS', ja: 'ファクトリーブース「KOVAKO」の設置条件' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="cd-title">')}
        <p class="lead">KOVAKOは、基本的に屋内での設置を想定して製作しております。ご要望があれば屋外に設置することも可能ですが、地面の条件などにより基礎工事が必要となる場合や、大きさにより対応自体が難しい場合もございます。</p>
        <p class="lead mt-2">また、一度設置したKOVAKOを別の場所に移動させたいという場合につきましても、仕様等によっては対応できないケースもあります。屋外への設置や、すでに設置したKOVAKOの移動をご希望の方は、事前にお問合せください。</p>
      </div>
      <div class="reveal">
        <p class="eyebrow"><span class="eyebrow__en">SPECIFICATIONS — 商品規格</span></p>
        <div class="split__img mb-3">${img('brands/kovako/conditions', 'KOVAKO 商品イメージ')}</div>
        <dl class="def">
          <div><dt>サイズ・重量</dt><dd>オーダーメイドであるため、現地調査後に確定いたします。</dd></div>
          <div><dt>電源</dt><dd>AC100V 50/60Hz</dd></div>
          <div><dt>ガラス面</dt><dd>5m/m板厚強化ガラス</dd></div>
          <div><dt>枠材</dt><dd>アルミニウム合金押出異型材</dd></div>
          <div><dt>照明設備</dt><dd>LEDダウンライト</dd></div>
          <div><dt>センサー</dt><dd>熱戦センサ付自動スイッチ ※手動スイッチへの変更も可能です。</dd></div>
          <div><dt>エアコン</dt><dd>ご希望により設置可能</dd></div>
        </dl>
      </div>
    </div>
  </div>
</section>

<section class="section section--light" id="flow" aria-labelledby="fl-title">
  <div class="container">
    <div class="reveal">${heading({ num: '06', en: 'FLOW', ja: '導入までの流れ', tone: 'light' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="fl-title">')}</div>
    <ol class="flow flow--4" data-stagger>
      ${[['flow-1', 'お問い合わせ', 'ご依頼の場合は、お電話にてお気軽にご相談ください。ご希望のサイズや設置スペース周辺の状況など、簡単なヒアリングをさせていただきます。そのうえで、現地調査に伺う日程等をお打ち合わせ・調整させていただきます。'], ['flow-2', '現地調査', 'お見積もりや工事を行う前に、実際の設置スペースを正確に測るため、現地調査を行います。専門家が、周辺の環境などもあわせて確認いたします。日程につきましては、お客様のご都合にあわせて調整させていただきます。'], ['flow-3', 'お見積りの提示', '現地調査の結果をもとに、工事費もふくめたお見積もりの金額をご提示いたします。金額にご納得いただければ、納期・各種契約等のお手続きを進めて、契約完了となります。※お見積もり段階では料金は発生しません'], ['flow-4', '設置工事', '工事の日程は、事前にお打ち合わせで調整いたします。仕様にもよりますが、最短1日工事が完了するため、お手間は取らせません。近隣のみなさまにご迷惑にならないよう配慮し、現場の安全と美化に努めて工事を行います。']].map(([im, t, d], i) => `<li class="flow__step"><div class="flow__img" style="width:100%;height:auto;aspect-ratio:750/460;border-radius:8px">${img('brands/kovako/' + im, t)}</div><p class="flow__num">STEP 0${i + 1}</p><h3 class="flow__title">${t}</h3><p class="flow__text">${d}</p></li>`).join('')}
    </ol>
  </div>
</section>

<section class="section section--dark-2" aria-label="お問い合わせ"><div class="container">${brandCta()}</div></section>

<section class="section section--dark section--grid" id="faq" aria-labelledby="fq-title">
  <div class="container" style="max-width:920px">
    <div class="reveal">${heading({ num: '07', en: 'FAQ', ja: 'よくあるご質問' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="fq-title">')}</div>
    <div class="reveal">${accordion(FAQ, 'kovako-faq')}</div>
  </div>
</section>

<section class="section section--light" id="column" aria-labelledby="co-title">
  <div class="container">
    <div class="reveal">${heading({ num: '08', en: 'COLUMN', ja: 'お役立ち情報', tone: 'light', lead: 'ファクトリーブース、工場の安全・暑さ対策に関するコラム。記事は KOVAKO 公式サイトで公開しています。' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="co-title">')}</div>
    <div class="news-list reveal">${columns.map(([slug, t]) => `<a class="news-item" href="https://nagamura.co.jp/kovako/column/${slug}/" target="_blank" rel="noopener"><time>COLUMN</time><span class="news-item__title">${t}</span><span class="news-item__tag">READ ↗</span></a>`).join('')}</div>
    <p class="mt-4">${btn('https://nagamura.co.jp/kovako/column/', 'お役立ち情報一覧へ', 'btn--dark', 'target="_blank" rel="noopener"')}</p>
  </div>
</section>

<section class="section section--dark-2" aria-label="お問い合わせ"><div class="container">${brandCta()}</div></section>
`;

export default { slug: 'kovako', title: 'KOVAKO（ファクトリーブース）', description: '従業員を守る安心・安全のファクトリーブース「KOVAKO」。防災防塵に最適、最短1日で工事完了、完全オーダーメイド制。溶接ヒューム法改正への対応にも。', body };
