import { img, heading, pageHero, localNav, cta, btn, youtube, arrow } from '../helpers.mjs';
import { accordion } from './faq.mjs';

const FORM = 'https://forms.office.com/Pages/ResponsePage.aspx?id=nt_7ZZ83eEWJDeFioaWGzevJqXCxde9DoNfQWi3UOvFUNEtDUkhJSFZZTzhCWEdKNFFSSTE3NjhIRS4u';
const brandCta = (tone = 'dark') => `<div class="brand-cta reveal">
  <a class="tel-card" href="tel:0282451341"><span class="tel-card__label">お電話でお問い合わせ</span><span class="tel-card__num">0282-45-1341</span><span class="tel-card__note">受付時間 8:25〜17:00（平日）</span></a>
  <a class="tel-card" href="${FORM}" target="_blank" rel="noopener" style="border-color:var(--accent);background:var(--accent-soft)"><span class="tel-card__label">資料請求・お問い合わせ</span><span class="tel-card__num" style="font-family:var(--font-ja);font-size:24px">今すぐ資料請求する ↗</span><span class="tel-card__note">SMOX 専用フォーム（Microsoft Forms）が開きます</span></a>
</div>`;

const columns = [
  ['https://nagamura.co.jp/smox/column/smokingbooth-type/', '喫煙ブースの種類と厚生労働省ガイドラインによる設置基準', '喫煙ブースの種類と、種類ごとの設置基準について解説する記事です。設置するためには厚生労働省のガイドラインに定められた要件を満たす必要があるため、設置できるものの種類と設置条件を事前に把握してください。'],
  ['https://nagamura.co.jp/smox/column/smokingbooth-precautions/', '喫煙ブース設置のための注意点と施工前に行うべき事柄', '喫煙ブースを設置する際の注意点について解説する記事です。喫煙ブースの設置は健康増進法・消防法と2つの法令により基準が設けられているので、注意点と施工前に行うべきことを知ってから設置するようにしてください。'],
  ['https://nagamura.co.jp/smox/column/definitionofsmokeseparation/', '分煙の定義とは？3つの分煙の特徴・メリット・デメリット', '分煙とはどのようなものか、定義を解説する記事です。また分煙の3つの種類について特徴・メリット・デメリットをそれぞれご紹介します。'],
];
const moreColumns = [
  ['service-area-smoking-area-established', 'サービスエリアは喫煙所を設置できるのか？'], ['driving-school-smoking-area-established', '教習所は喫煙所を設置できるのか？'], ['setting-up-a-smoking-area-at-the-factory', '工場に喫煙所を設置できるのか？'], ['michi-no-eki-smoking-area-installed', '道の駅への喫煙所設置は可能？設置によるメリット・デメリットとは'], ['setting-up-a-smoking-area-at-the-station', '駅に喫煙所を設置出来るのか？'], ['setting-up-a-smoking-area-in-a-shopping-mall', 'ショッピングモールに喫煙所は設置できる？メリットや注意点もご紹介'], ['smoker-manufacturer-how-to-choose', '【喫煙所のメーカーの選び方5つ】失敗しないポイントは？'], ['smoking-area-infection-risk', '喫煙所は感染リスクが高い？コロナ禍における対処法とは'], ['park-tobacco', '公園でタバコ吸っても大丈夫？喫煙所設置の条件とは'], ['smoke-separation-effect', '分煙による効果とは？分煙化を実施する際に知っておきたいポイント'], ['outdoor-smoking-area-established', '屋外喫煙所を設置するときの注意点｜設置基準・条件とは？'], ['indoor-smoking-area-established', '屋内喫煙所を設置する際に知っておくべきポイントをご紹介'], ['subsidies-for-passive-smoking-measures', '受動喫煙対策には助成金が出る？助成対象や申請までの流れとは'], ['secondhand-smoke-children', '副流煙（受動喫煙）は子どもにどのような悪影響をもたらすのか'], ['apartments-passive-smoking', 'マンションでの受動喫煙の問題と防止方法'], ['hospital-smoking', '病院に喫煙所の設置は可能？設置のための4つの条件'], ['workplace-smoking-rules', '職場における喫煙ルールについて紹介'],
];

const FAQ = [
  ['価格を教えてください', '<p>長村製作所では、設置や保守を含めてサポートさせていただいております。施工する場所によっては基礎工事が必要となりますので、価格はそちらも含めてお問い合わせフォームより個別にお見積もりいたします。</p>'],
  ['換気ファンと照明は常時オンのままですか？', '<p>SMOXは人感センサーを採用しており、人が中にいるときだけ照明と換気ファンが動くようになっております。また、人が外に出てから何秒で換気をオフにするかについてはタイマーにより時間設定ができます。連続運転も可能です。</p>'],
  ['故障した場合はどうすればいいですか？', '<p>ご購入から1年間は、お客様の過失による故障などのケースを除いて、無償で修理対応させていただきます。1年を過ぎている場合でも、有償で修理や部品交換など対応させていただきますので、ご安心ください。</p>'],
];

const body = `
<header class="brand-hero" aria-label="SMOX">
  <div class="brand-hero__media">${img('brands/smox/fea-1', '', { eager: true, sizes: '100vw' })}</div>
  <div class="container">
    <nav class="crumbs" aria-label="パンくずリスト"><ol><li><a href="index.html">ホーム</a></li><li><a href="products.html">製品紹介</a></li><li><span aria-current="page">SMOX</span></li></ol></nav>
    <span style="display:inline-block;background:#fff;padding:12px 18px;border-radius:8px;margin-bottom:22px"><img src="assets/img/brands/smox/logo.svg" width="107" height="24" alt="SMOX" style="height:34px;width:auto;display:block"></span>
    <h1 class="brand-hero__title">喫煙ブース・喫煙ボックスなら<br>屋内外対応の SMOX</h1>
    <p class="brand-hero__lead">『SMOX』は屋外にも設置可能な喫煙ボックスです。長村製作所が長らく作り続けてきた電話ボックスの型材をもとにして制作しているため、とても頑丈で風速36m/secの耐久性を有しています。</p>
    <ul class="brand-hero__points"><li>厚生労働省の技術的基準をクリア</li><li>屋内にも屋外にも対応した強固な設計</li><li>創業<span class="js-years">88</span>年の確かな技術</li></ul>
    <div class="brand-hero__actions">${btn(FORM, '今すぐ資料請求する', 'btn--accent btn--lg', 'target="_blank" rel="noopener"')}${btn('tel:0282451341', '0282-45-1341', 'btn--line btn--lg')}</div>
  </div>
</header>
${localNav([['#features', '特長'], ['#story', '開発ストーリー'], ['#conditions', '設置条件・助成金'], ['#lineup', 'ラインナップ'], ['#case', '導入実績'], ['#flow', '導入までの流れ'], ['#faq', 'よくある質問'], ['#column', 'お役立ち情報']])}

<section class="section section--dark section--grid" id="features" aria-labelledby="f-title">
  <div class="container">
    <div class="reveal">${heading({ num: '01', en: 'FEATURES', ja: 'SMOX の特長' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="f-title">')}</div>
    <div class="feature">
      <div class="feature__img img-reveal">${img('brands/smox/fea-1', '屋内にも屋外にも対応した強固な設計・安心のアフターメンテナンス')}</div>
      <div class="feature__body reveal"><p class="feature__num">FEATURE 01</p><h3 class="feature__title">屋内・屋外対応の強固な設計・安心のアフターメンテナンス</h3>
        <p>『SMOX』は屋外にも設置可能な喫煙ボックスです。長村製作所が長らく作り続けてきた電話ボックスの型材をもとにして制作しているため、とても頑丈で風速36m/secの耐久性を有しています。</p>
        <p>屋外に喫煙ボックスを設置するためには地域の条例などの基準をクリアしなければなりませんが、太平洋側の一部沿岸地域を除くほとんどの地域に安心して設置していただける強度を持っています。</p>
        <p>設置から保守まで、すべて弊社と協力会社が対応するため、わかりやすくワンストップでご対応させていただくことができます。設置後1年間の無料修理保証つき（お客様の過失による故障ではない場合）。</p></div>
    </div>
    <div class="feature">
      <div class="feature__img img-reveal">${img('brands/smox/fea-2', '溶接作業')}</div>
      <div class="feature__body reveal"><p class="feature__num">FEATURE 02</p><h3 class="feature__title">創業<span class="js-years">88</span>年の確かな技術</h3>
        <p>SMOXを制作している長村製作所は、1938年に創業された歴史のある会社です。公衆電話ボックス、サーバーラックなどの高い信頼性が要求される製品の製造を通じて社会インフラの維持に貢献してまいりました。</p>
        <p>世界標準の品質マネジメント規格であるISO9001、環境マネジメント規格であるISO14001を取得しています。</p>
        <p>長村製作所ではSDGsの取組みにも力をいれており、喫煙ボックスの設置を推進することでタバコのポイ捨てや副流煙被害を軽減したり、廃材の再利用方法を模索するなど、積極的に持続可能な社会の実現に向けての取組みを行っております。</p></div>
    </div>
    <div class="feature">
      <div class="feature__img">${youtube('yHSOGVdjLnE', 'SMOX 排気実験の様子', 'brands/smox/dev-thumb')}</div>
      <div class="feature__body reveal"><p class="feature__num">FEATURE 03</p><h3 class="feature__title">15秒で中の空気全部入れ替え！<br>排気実験の様子をご紹介 — コロナ禍に適応した喫煙ボックス</h3>
        <p>SMOXの換気性能はバツグンで、中の空気は上部の排気口から15秒ほどで入れ替わってしまいます！</p>
        <p>こちらの動画は、白い煙を炊いてからどれくらいで煙が消えているかを実験したものです。実際には人が入室するとすぐに換気扇がオンになるため、このように煙が溜まるということはありません。臭いも残りにくく、常にクリーンな空気が保たれる仕組みになっています。</p>
        <p>昨今ではコロナウィルスの流行により、三密というキーワードが話題となりましたが、SMOXは密を作らない1人用の少人数向けサイズもラインナップされており、換気性能も良いことからウィルス感染防止の観点からも期待されています。</p>
        <ul class="chips mt-3"><li class="chip"><i></i>Point.01 煙が流出しない</li><li class="chip"><i></i>Point.02 高い換気機能</li></ul></div>
    </div>
  </div>
</section>

<section class="section section--light" id="story" aria-labelledby="s-title">
  <div class="container split split--rev">
    <div class="split__body reveal">
      ${heading({ num: '02', en: 'DEVELOPMENT STORY', ja: 'SMOX の開発ストーリー', tone: 'light' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="s-title">')}
      <p>SMOXは<span class="js-years">88</span>年の歴史を持つ長村製作所によって製作されています。「これからは屋内での喫煙は時代にそぐわない。屋外に設置できる喫煙ボックスが必要だ。」という社長の考えによって製作が開始されました。</p>
      <p>しかし、屋外に設置するためには台風や地震などの災害にも耐えれるような強靭さと、様々な場所に設置するための軽便性を両立しなければなりません。そこで、長村製作所が長らく開発を続けてきた電話ボックスの技術を応用することで、頑丈でどこでも組み立てができる喫煙ボックス、SMOXが誕生しました。</p>
      <p>長村製作所はSDGs（国連で採択された17の目標）でも掲げられている、「すべての人に健康と福祉を」「住み続けられる町づくりを」といった目標を共有して、達成のために日々努力しています。</p>
    </div>
    <div class="reveal">${youtube('3RTlb3yrHM0', 'SMOX 開発ストーリー', 'brands/smox/clear')}</div>
  </div>
</section>

<section class="section section--dark section--grid" id="conditions" aria-labelledby="c-title">
  <div class="container">
    <div class="reveal">${heading({ num: '03', en: 'CONDITIONS', ja: '喫煙ブースを設置するには', lead: '2018年7月、多数の者が利用する施設等に対し一定の場所以外での喫煙が禁止になり、施設等の類型に応じて、利用者に対し喫煙の禁止をするとともに管理権限者が講ずべき措置の改正が行われました。管理権限者には受動喫煙を防止するための責務があります。屋内にも屋外にも設置可能な要件は以下の通りです。' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="c-title">')}</div>
    <div class="grid-2" data-stagger>
      <div class="icon-card" style="gap:16px">
        <div class="feature__img" style="max-height:260px;overflow:hidden">${img('brands/smox/cond-1', '屋外イメージ')}</div>
        <h3 class="icon-card__title" style="font-size:22px">屋外</h3>
        <p class="icon-card__text">屋外には、幼稚園や小学校などの一部の建物を除いて以下の基準を満たした場合に、喫煙ブースを設置することができます。</p>
        <ul class="check-list"><li>禁煙場所と区画されていること</li><li>喫煙所としての標識が設置されていること</li><li>受動喫煙を生じさせることがないように配慮されていること</li></ul>
        <p class="small strong">設置可能な場所</p>
        <ul class="chips">${['大学', '病院', 'コンビニ', '工場', '市役所'].map((t, i) => `<li class="chip"><img src="assets/img/brands/smox/booth_ico_${i + 1}.svg" width="22" height="22" alt="" loading="lazy">${t}</li>`).join('')}</ul>
        <p class="note">上記の場所以外でもほとんどの場所に設置可能です。</p>
      </div>
      <div class="icon-card" style="gap:16px">
        <div class="feature__img" style="max-height:260px;overflow:hidden">${img('brands/smox/cond-2', '屋内イメージ')}</div>
        <h3 class="icon-card__title" style="font-size:22px">屋内</h3>
        <p class="icon-card__text">屋内は原則禁煙となりましたが、飲食店などの施設では以下の基準を満たした場合に喫煙ブースを設置することができます。</p>
        <ul class="check-list"><li>出入口において喫煙室の外側から内側に流入する空気の気流が0.2ｍ／秒以上であること</li><li>たばこの煙（加熱式たばこの蒸気を含む。）が喫煙室の中から施設の屋内に流出しないよう、壁・天井等によって区画すること</li><li>たばこの煙が施設の屋外に排気されていること</li></ul>
      </div>
    </div>
    <div class="split mt-6">
      <div class="split__img img-reveal">${img('brands/smox/clear', 'SMOX は上記の条件をクリアしています')}</div>
      <div class="split__body reveal">
        <h3>SMOXは上記の条件をクリアしています。</h3>
        <h3 style="font-size:22px">『SMOX』導入には助成金がご活用いただけます。</h3>
        <p><strong class="strong">受動喫煙防止対策助成金</strong><br>厚生労働省・都道府県労働局は、中小企業事業主が受動喫煙防止のために職場に喫煙室を設置・改修する際に、費用の一部を助成します。</p>
        <p><a class="text-link" href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000049868.html" target="_blank" rel="noopener">厚生労働省 受動喫煙防止対策助成金に関するページ ↗</a></p>
        <p class="note">助成金の申請についてはお客様に行って頂きます。</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--dark-2" aria-label="お問い合わせ"><div class="container">${brandCta()}</div></section>

<section class="section section--light" id="lineup" aria-labelledby="l-title">
  <div class="container">
    <div class="reveal">${heading({ num: '04', en: 'LINEUP', ja: '選べる3サイズのラインナップ', tone: 'light' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="l-title">')}</div>
    <ul class="spec-cards" data-stagger>
      ${[
        ['lineup-1', 'S', '900x900タイプ', 'Sサイズ（900x900）', '幅 1025mm×1025mm<br>高さ 2556mm', '約250kg'],
        ['lineup-2', 'M', '1800x1800タイプ', 'Mサイズ（1,800x1,800）', '幅 1865mm×1865mm<br>高さ 2720mm', '約500kg'],
        ['lineup-3', 'L', '2700x1800タイプ', 'Lサイズ（2,700x1,800）', '幅 2765mm×1865mm<br>高さ 2720mm', '約600kg'],
      ].map(([im, s, t, n, size, w]) => `<li class="spec-card"><div class="spec-card__img">${img('brands/smox/' + im, t + 'イメージ')}</div><div class="spec-card__body"><p class="spec-card__size">SIZE ${s}</p><h3 class="spec-card__name">${n}</h3>
        <dl><div><dt>サイズ</dt><dd>${size}</dd></div><div><dt>重量</dt><dd>${w}</dd></div><div><dt>電源</dt><dd>AC100V 50/60Hz</dd></div><div><dt>ガラス面</dt><dd>5m/m板厚強化ガラス</dd></div><div><dt>枠材</dt><dd>アルミニウム合金押出異型材</dd></div><div><dt>照明設備</dt><dd>LEDダウンライト</dd></div><div><dt>センサー</dt><dd>熱線センサ付自動スイッチ</dd></div><div><dt>換気設備</dt><dd>ダクト用換気扇</dd></div></dl></div></li>`).join('')}
    </ul>
    <div class="split mt-5" style="align-items:start">
      <div class="callout reveal">上記以外のサイズをご希望の方は個別にお問い合わせください。</div>
      <div class="flex reveal" style="gap:20px;align-items:flex-start"><div style="width:110px;flex:none">${img('brands/smox/option', 'カッティングシートイメージ')}</div><div><p class="strong">オプション</p><p class="note">ご希望の場合はカッティングシートを付属できます</p></div></div>
    </div>
  </div>
</section>

<section class="section section--dark section--grid" id="case" aria-labelledby="ca-title">
  <div class="container split split--wide-img">
    <div class="split__img img-reveal" style="max-width:320px">${img('brands/smox/case-1', 'ドコモショップ足利山辺店 設置イメージ')}</div>
    <div class="split__body reveal">
      ${heading({ num: '05', en: 'CASE', ja: '導入実績' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="ca-title">')}
      <h3>ドコモショップ足利山辺店</h3>
      <blockquote class="quote" style="font-size:16px;font-weight:500">「換気能力が高いためか、全くタバコの匂いがBOXに残らないためほとんど掃除をしなくても使えています。また、換気扇からでる煙や匂いに関しても排気ダクトが外に繋がっているため、タバコを吸わない従業員も助かっています。」</blockquote>
    </div>
  </div>
</section>

<section class="section section--light" id="flow" aria-labelledby="fl-title">
  <div class="container">
    <div class="reveal">${heading({ num: '06', en: 'FLOW', ja: '導入までの流れ', tone: 'light' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="fl-title">')}</div>
    <ol class="flow" data-stagger>${['お問い合わせ・資料請求', '現地調査（無料）', '工事費なども含めた正式なお見積もり', '基礎工事（必要な場合）', '設置'].map((t, i) => `<li class="flow__step"><p class="flow__num">STEP 0${i + 1}</p><h3 class="flow__title">${t}</h3></li>`).join('')}</ol>
  </div>
</section>

<section class="section section--dark-2" aria-label="お問い合わせ"><div class="container">${brandCta()}</div></section>

<section class="section section--dark section--grid" id="faq" aria-labelledby="fq-title">
  <div class="container" style="max-width:920px">
    <div class="reveal">${heading({ num: '07', en: 'FAQ', ja: 'よくある質問' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="fq-title">')}</div>
    <div class="reveal">${accordion(FAQ, 'smox-faq')}</div>
  </div>
</section>

<section class="section section--light" id="column" aria-labelledby="co-title">
  <div class="container">
    <div class="reveal">${heading({ num: '08', en: 'COLUMN', ja: 'お役立ち情報', tone: 'light', lead: '喫煙ブース・分煙に関するコラム。記事は SMOX 公式サイトで公開しています。' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="co-title">')}</div>
    <ul class="blog-featured" data-stagger>${columns.map(([u, t, d]) => `<li><a href="${u}" target="_blank" rel="noopener" style="background:var(--paper-2);border-color:var(--paper-line);color:var(--text)"><span class="tag" style="color:var(--accent);border-color:rgba(229,50,45,.4)">喫煙ブース</span><strong>${t}</strong><span class="small" style="color:var(--text-2)">${d}</span><span class="link-arrow" style="margin-top:auto">コラムを読む ↗</span></a></li>`).join('')}</ul>
    <div class="news-list reveal">${moreColumns.map(([slug, t]) => `<a class="news-item" href="https://nagamura.co.jp/smox/column/${slug}/" target="_blank" rel="noopener"><time>COLUMN</time><span class="news-item__title">${t}</span><span class="news-item__tag">READ ↗</span></a>`).join('')}</div>
    <p class="mt-4">${btn('https://nagamura.co.jp/smox/column/', 'コラム一覧ページへ', 'btn--dark', 'target="_blank" rel="noopener"')}</p>
  </div>
</section>

<section class="section section--dark-2" aria-label="お問い合わせ"><div class="container">${brandCta()}</div></section>
`;

export default { slug: 'smox', title: 'SMOX（喫煙ブース・喫煙ボックス）', description: '喫煙ブース・喫煙ボックスなら屋内外対応のSMOX。厚生労働省の技術的基準をクリア、電話ボックスの型材による風速36m/secの耐久性、15秒で空気を入れ替える換気性能。S/M/Lの3サイズ。', body };
