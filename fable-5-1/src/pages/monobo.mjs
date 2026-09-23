import { img, heading, localNav, btn } from '../helpers.mjs';
import { accordion } from './faq.mjs';

const FORM = 'https://forms.office.com/r/Xh66SVNSiH';
const SIM = 'https://nagamura.co.jp/monobo/#simulation';
const brandCta = () => `<div class="brand-cta reveal">
  <a class="tel-card" href="${FORM}" target="_blank" rel="noopener" style="border-color:var(--accent);background:var(--accent-soft)"><span class="tel-card__label">MAIL — 資料請求・見積もり</span><span class="tel-card__num" style="font-family:var(--font-ja);font-size:24px">資料請求・お見積もりはこちら ↗</span><span class="tel-card__note">Monobo 専用フォーム（Microsoft Forms）が開きます</span></a>
  <a class="tel-card" href="tel:0282451341"><span class="tel-card__label">お電話でのお問い合わせ</span><span class="tel-card__num">0282-45-1341</span><span class="tel-card__note">受付時間 平日8:25〜17:00</span></a>
</div>`;

const lineup = [
  { im: 'lineup-1', n: 'Monobo（1人用）', d: '電話やオンライン会議に最適な、1人用の集中型コンパクトブース。', spec: [['サイズ（※突起部含まず）', '幅 1268mm×奥行868mm×高さ1780mm'], ['重量', '約150kg'], ['電源', 'コンセント2口'], ['照明', 'LED'], ['センサー', 'センサー付き自動スイッチ'], ['換気', '換気扇 × 1個'], ['出入口', 'ストッパー付き中折れ扉×1枚'], ['備付テーブル', 'W744mm×D375mm×H703mm'], ['吸音材', '壁面へ貼り付け'], ['必要天井高', '2100mm〜'], ['価格', 'オープン価格']] },
  { im: 'lineup-2', n: 'Monobo（2人用）', d: '短時間の打ち合わせや面談に適した2人用の対面型ブース。', spec: [['サイズ（※突起部含まず）', '幅2470mm × 奥行870mm × 高さ2095mm'], ['重量', '約250kg'], ['電源', 'コンセント2口 × 1箇所（計：2口）、USB × 1'], ['照明', 'LED'], ['センサー', '熱線センサ付き自動スイッチ'], ['換気', '換気扇 × 1個'], ['出入口', '中折れ扉 × 2枚'], ['備付テーブル', '幅740mm × 奥行350mm × 高さ703mm ×2つ'], ['吸音材', '壁面へ貼り付け'], ['必要天井高', '2400mm〜']] },
  { im: 'lineup-4', n: 'Monobo（4人用）', d: 'Web会議や機密性の高いミーティングに対応。対面型ブース。', spec: [['サイズ（※突起部含まず）', '幅 2318mm×奥行1368mm×高さ1920mm'], ['重量', '約350kg'], ['電源', 'コンセント2口×4箇所（計：8口）'], ['照明', 'LED'], ['センサー', 'センサー付き自動スイッチ'], ['換気', '換気扇 × 2個'], ['出入口', 'ストッパー付き中折れ扉×2枚'], ['備付テーブル', 'W1223mm×D670mm×H703mm'], ['吸音材', '壁面へ貼り付け'], ['必要天井高', '2200mm〜'], ['価格', 'オープン価格']] },
];

const cases = [
  ['https://nagamura.co.jp/monobo/cases/138/', '1人用', '新聞社 事務所内＠江東区'],
  ['https://nagamura.co.jp/monobo/cases/%e6%90%ba%e5%b8%af%e3%82%b7%e3%83%a7%e3%83%83%e3%83%97%ef%bc%a0%e6%9f%8f%e5%b8%82/', '1人用', '携帯電話販売店＠柏市'],
  ['https://nagamura.co.jp/monobo/cases/ntt%e3%82%b0%e3%83%ab%e3%83%bc%e3%83%97%ef%bc%a0%e5%8d%83%e4%bb%a3%e7%94%b0%e5%8c%ba/', '1人用', 'NTTグループ＠千代田区'],
  ['https://nagamura.co.jp/monobo/cases/%e6%90%ba%e5%b8%af%e9%9b%bb%e8%a9%b1%e8%b2%a9%e5%a3%b2%e4%bb%a3%e7%90%86%e5%ba%97%ef%bc%a0%e5%8d%83%e4%bb%a3%e7%94%b0%e5%8c%ba/', '1人用', '携帯電話販売代理店＠千代田区'],
  ['https://nagamura.co.jp/monobo/cases/%e7%b7%8f%e5%90%88%e7%97%85%e9%99%a2%ef%bc%a0%e6%89%80%e6%b2%a2%e5%b8%82/', '4人用', '医療法人啓仁会 所沢ロイヤル病院様＠所沢市'],
  ['https://nagamura.co.jp/monobo/cases/%e6%8a%80%e8%a1%93%e7%a0%94%e7%a9%b6%e9%96%8b%e7%99%ba%e3%82%bb%e3%83%b3%e3%82%bf%ef%bc%a0%e6%ad%a6%e8%94%b5%e9%87%8e%e5%b8%82/', '4人用', '技術研究開発センタ＠武蔵野市'],
  ['https://nagamura.co.jp/monobo/cases/%e7%9c%8c%e5%ba%81%e3%82%b7%e3%82%a7%e3%82%a2%e3%82%aa%e3%83%95%e3%82%a3%e3%82%b9%ef%bc%a0%e5%89%8d%e6%a9%8b%e5%b8%82/', '', '県庁シェアオフィス＠前橋市'],
];
const news = [
  ['https://nagamura.co.jp/monobo/info/277/', '新着情報', '【メディア掲載情報】『Monobo フェルーチェ』が日刊工業新聞に掲載されました'],
  ['https://nagamura.co.jp/monobo/info/256/', '新着情報', '【展示会出展決定！！】5月15日(金)ものづくり企業フォーラム2026'],
  ['https://nagamura.co.jp/monobo/info/42/', '新着情報', 'より便利に、より分かりやすく。ホームページ一新‼️'],
  ['https://nagamura.co.jp/monobo/press-release/44/', 'プレスリリース', '10月21日(火)ものづくり企業展示・商談会2025出展決定！'],
  ['https://nagamura.co.jp/monobo/press-release/204/', 'プレスリリース', 'Monoboがテレビ番組に出演‼️'],
];
const FAQ = [
  ['納品・設置までの期間はどれくらいかかりますか？', '<p>正式なご発注後、製品の製作が必要な場合は約1.5〜2ヶ月で納品・設置が可能です。在庫がある場合は、最短2週間程度で対応可能です。※時期・仕様により変動する場合がございます。</p>'],
  ['消防申請は必要ですか？', '<p>はい、原則として消防申請が必要となります。建物に設置された消火設備の状況により、「住宅用下方放出型自動消火装置」の設置が求められる場合があります。当社では、消防署との申請・確認作業もサポートしておりますのでご安心ください。</p><p class="note">消防予第211号に基づく規定です。</p>'],
  ['設置方法について教えてください。', '<p>基本的にはパーツごとに搬入し、現地で組み立てを行います。搬入経路や設置スペースによっては、完成品での納品対応も可能です。</p>'],
  ['レンタルのプランはありますか？', '<p>はい、ご用意しております。</p><p>リース：5年プラン<br>レンタル：1年プラン〜 詳細はお問い合わせください。</p>'],
  ['防音性はありますか？', '<p>はい、Web会議や集中作業に適した遮音設計です。ただし完全防音ではなく、消防法の基準により、92db以上の警報音がボックス内で65db以上聞こえるよう設計されています。</p>'],
  ['製品を見学できますか？', '<p>はい、ショールームにて見学・体験利用が可能です。ご希望の方は、以下までお気軽にご連絡ください。<br>TEL：<a class="text-link" href="tel:0282451341">0282-45-1341</a></p>'],
];
const icon = d => `<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;

const body = `
<header class="brand-hero" aria-label="Monobo">
  <div class="brand-hero__media">${img('brands/monobo/fv', '', { eager: true, sizes: '100vw' })}</div>
  <div class="container">
    <nav class="crumbs" aria-label="パンくずリスト"><ol><li><a href="index.html">ホーム</a></li><li><a href="products.html">製品紹介</a></li><li><span aria-current="page">Monobo</span></li></ol></nav>
    <span style="display:inline-block;background:#fff;padding:12px 18px;border-radius:8px;margin-bottom:22px"><img src="assets/img/brands/monobo/logo-mark.webp" alt="Monobo - 省スペース対応テレワークブース" width="1124" height="187" style="height:40px;width:auto;display:block"></span>
    <h1 class="brand-hero__title">低天井OK!<br>場所を選ばずフィットする個室ブース</h1>
    <p class="brand-hero__lead">長村製作所の「Monobo（モノボ）」は、公衆電話ボックス製造で培った技術とメーカーのノウハウを活かして開発された、省スペース向けのテレワークブース。オフィスの執務室はもちろん、廊下の一角やデッドスペースになっている場所にも無理なく設置可能。</p>
    <ul class="brand-hero__points"><li>設置可能な最低天井高 2100mm</li><li>見学・利用 予約可能</li><li>最短2時間で設置可能</li></ul>
    <div class="brand-hero__actions">${btn(FORM, '資料請求・お見積もりはこちら', 'btn--accent btn--lg', 'target="_blank" rel="noopener"')}${btn(SIM, '料金シミュレーション（公式サイト）', 'btn--line btn--lg', 'target="_blank" rel="noopener"')}</div>
  </div>
</header>
${localNav([['#news', 'お知らせ'], ['#about', 'Monoboとは'], ['#cases', '導入事例'], ['#lineup', 'ラインナップ'], ['#features', '特長'], ['#simulation', '料金シミュレーション'], ['#flow', '導入の流れ'], ['#buyback', '買取サービス'], ['#faq', 'よくある質問']])}

<section class="section section--tight section--dark-2" id="news" aria-labelledby="nw-title">
  <div class="container">
    <div class="reveal">${heading({ en: 'NEWS', ja: 'お知らせ' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="nw-title" style="font-size:28px">')}</div>
    <div class="news-list reveal">${news.map(([u, c, t]) => `<a class="news-item" href="${u}" target="_blank" rel="noopener"><time>${c}</time><span class="news-item__title">${t}</span><span class="news-item__tag">READ ↗</span></a>`).join('')}</div>
    <p class="mt-3"><a class="link-arrow" href="https://nagamura.co.jp/monobo/news/" target="_blank" rel="noopener">お知らせ一覧をみる（公式サイト） <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></p>
  </div>
</section>

<section class="section section--light section--grid" id="issues" aria-labelledby="is-title">
  <div class="container">
    <div class="reveal">${heading({ num: '01', en: 'ISSUES', ja: '新しい働き方が広がる中、<br>こんなご不便は感じていませんか？', tone: 'light' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="is-title">')}</div>
    <ul class="grid-4" data-stagger>${[['issue-1', 'WEB会議用の場所が足りない'], ['issue-2', '天井高の問題で設置ができない'], ['issue-3', 'オフィスが手狭でレイアウト変更が難しい'], ['issue-4', '集中できる場所がほしい']].map(([im, t]) => `<li class="icon-card" style="align-items:center;text-align:center"><div style="width:120px">${img('brands/monobo/' + im, '')}</div><p class="icon-card__title">${t}</p></li>`).join('')}</ul>
  </div>
</section>

<section class="section section--dark section--grid" id="about" aria-labelledby="ab-title">
  <div class="container split">
    <div class="split__body reveal">
      ${heading({ num: '02', en: 'WHAT IS MONOBO', ja: 'Monobo とは' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="ab-title">')}
      <p>長村製作所の「Monobo（モノボ）」は、公衆電話ボックス製造で培った技術とメーカーのノウハウを活かして開発された、省スペース向けのテレワークブース。オフィスの執務室はもちろん、廊下の一角やデッドスペースになっている場所にも無理なく設置可能。</p>
      <p class="mt-3"><strong class="strong">購入プラン</strong>：一括またはレンタルからお選びいただけます。</p>
    </div>
    <div class="split__img img-reveal">${img('brands/monobo/cta', 'Monobo 設置イメージ', { sizes: '(min-width: 900px) 50vw, 100vw' })}</div>
  </div>
</section>

<section class="section section--light" id="cases" aria-labelledby="cs-title">
  <div class="container">
    <div class="reveal">${heading({ num: '03', en: 'CASE STUDY', ja: 'お客様のご要望に合わせた<br>最適なブースをご提案', tone: 'light', lead: '設置環境のお悩みや用途・設置スペースに合わせたご要望に対応いたします。サイズや内装、機能面など、様々な「こうしたい」をカタチにした実際の事例をご紹介いたします。' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="cs-title">')}</div>
    <div class="grid-3 mb-4" data-stagger>
      ${[['case-main', '1人用', '電話やオンライン会議に最適', 'https://nagamura.co.jp/monobo/cases/dammy-1/'], ['case-2p', '2人用', '短時間打ち合わせ・面談に最適(対面)', 'https://nagamura.co.jp/monobo/cases/dammy-2/'], ['lineup-4', '4人用', 'Web会議や集中した会議用(対面)', 'https://nagamura.co.jp/monobo/cases/dammy-4/']].map(([im, s, t, u]) => `<a class="fig" href="${u}" target="_blank" rel="noopener" style="color:var(--text)"><div style="aspect-ratio:4/3;overflow:hidden;background:#fff;display:grid;place-items:center">${img('brands/monobo/' + im, t, { class: '', sizes: '(min-width: 800px) 33vw, 100vw' })}</div><figcaption><span class="badge badge--accent" style="margin-right:6px">${s}</span>${t}</figcaption></a>`).join('')}
    </div>
    <div class="news-list reveal">${cases.map(([u, s, t]) => `<a class="news-item" href="${u}" target="_blank" rel="noopener"><time>${s || 'CASE'}</time><span class="news-item__title">${t}</span><span class="news-item__tag">READ ↗</span></a>`).join('')}</div>
    <p class="mt-4">${btn('https://nagamura.co.jp/monobo/cases/', '導入事例一覧をみる（公式サイト）', 'btn--dark', 'target="_blank" rel="noopener"')}</p>
  </div>
</section>

<section class="section section--dark section--grid" id="lineup" aria-labelledby="lu-title">
  <div class="container">
    <div class="reveal">${heading({ num: '04', en: 'LINEUP', ja: '製品紹介' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="lu-title">')}</div>
    <ul class="spec-cards" data-stagger>${lineup.map(l => `<li class="spec-card"><div class="spec-card__img">${img('brands/monobo/' + l.im, l.n)}</div><div class="spec-card__body"><h3 class="spec-card__name">${l.n}</h3><p class="spec-card__desc">${l.d}</p><dl>${l.spec.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl></div></li>`).join('')}</ul>
    <div class="callout mt-4 reveal">本体内部音圧：完全遮音ではなく、消防法基準に則り、92db以上のアラームの基準音圧がボックス内では65db以上で聞こえる仕様になっています。<br>FeLuce（フェルーチェ）は日本製鉄株式会社の登録商標です。</div>
  </div>
</section>

<section class="section section--light" id="features" aria-labelledby="ft-title">
  <div class="container">
    <div class="reveal">${heading({ num: '05', en: 'FEATURES', ja: 'Monobo の特長', tone: 'light' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="ft-title">')}</div>
    ${[['feat-1', '搬入・設置・移設もスムーズに', '分解・組立が簡単で、軽量な設計。エレベーターや間口の狭い場所でも、搬入がスムーズに行えます。また設置場所によっては完成品での納品可能です。'], ['feat-2', '開閉スペースを取らない省スペース設計', '通常の開き戸と比べて、中折れ扉開放時の出しろ寸法は２６０ｍｍと狭小スペースや人通りの多い場所でもスムーズに開閉が可能。'], ['feat-3', '必要な機能だけを備えた、導入しやすい価格設計', '必要な機能に絞り、価格を抑えた設計。換気・照明・コンセントなど基本設備を備え、中小企業や拠点導入に適したコストバランスです。'], ['feat-4', '利用目的に合わせて選べる複数サイズ展開', '1人用のWeb会議から4人の打ち合わせまで、用途に応じて選べる2サイズを展開。コンパクトでも必要な空間を確保し、幅広いシーンで活躍。「このサイズで十分」と感じられる設計で、無駄なコストを抑えます。']].map(([im, t, d], i) => `<div class="feature"><div class="feature__img img-reveal">${img('brands/monobo/' + im, t, { sizes: '(min-width: 860px) 50vw, 100vw' })}</div><div class="feature__body reveal"><p class="feature__num">FEATURES 0${i + 1}</p><h3 class="feature__title">${t}</h3><p>${d}</p></div></div>`).join('')}
    <div class="grid-2 mt-6" data-stagger>
      <div><p class="eyebrow" style="color:var(--text-2)"><span class="eyebrow__en">STANDARD — 標準設備</span></p><ul class="grid-3" style="gap:10px">${['換気扇・ダウンライト', 'USB・コンセント', '熱線センサー付き自動スイッチ', '吸音材', '備付テーブル'].map((t, i) => `<li class="icon-card" style="padding:14px;gap:8px;align-items:center;text-align:center"><div style="width:72px">${img(`brands/monobo/equip-std-${i + 1}`, '')}</div><p class="small strong" style="color:var(--text)">0${i + 1} ${t}</p></li>`).join('')}</ul></div>
      <div><p class="eyebrow" style="color:var(--text-2)"><span class="eyebrow__en">OPTIONAL — オプション</span></p><ul class="grid-3" style="gap:10px">${['住宅用下方放出型自動消火装置', 'LANケーブル', 'デザインの変更', '目隠しフィルム', 'モニター取付'].map((t, i) => `<li class="icon-card" style="padding:14px;gap:8px;align-items:center;text-align:center"><div style="width:72px">${img(`brands/monobo/equip-opt-${i + 1}`, '')}</div><p class="small strong" style="color:var(--text)">0${i + 1} ${t}</p></li>`).join('')}</ul></div>
    </div>
    <div class="callout mt-5 reveal"><strong class="strong">設計・施工関係のみなさまへ</strong><br>「図面や資料がほしい！」「仕様変更はできる？」「納期がタイトだけど大丈夫？」など、現場のリアルな声に、できる限り柔軟にお応えします。是非、ご相談ください。</div>
  </div>
</section>

<section class="section section--dark-2" id="contact-top" aria-label="お問い合わせ"><div class="container">
  <div class="reveal">${heading({ en: 'CONTACT', ja: 'まずはお問い合わせください', lead: 'ご検討中の段階でも、どうぞお気軽にご相談ください。ショールームでは、実際にMonoboをご体感いただけます。' })}</div>${brandCta()}</div></section>

<section class="section section--dark section--grid" id="simulation" aria-labelledby="si-title">
  <div class="container split">
    <div class="split__body reveal">
      ${heading({ num: '06', en: 'PRICE SIMULATION', ja: '料金シミュレーション' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="si-title">')}
      <p>設置エリア（都道府県）、製品サイズと設置台数、消防申請代行の可否を選ぶだけで、本体代金・設置工事費・運送費・諸経費・消防申請代行の概算金額（税込）を算出できます。</p>
      <p class="note">北海道・沖縄・離島につきましては、都度お見積もりにて対応いたします。設置ビルにより申請有無が異なります。まずは営業担当にご相談ください。上記価格は概算金額となります。正式な御見積書に関しては『まずは問合せる』よりご連絡ください。</p>
      <p>レンタル及びリース・ご購入（買取）のご相談、製品体験などお気軽にお問い合わせください。</p>
      <div class="flex mt-4">${btn(SIM, '料金シミュレーションを使う（公式サイト）', 'btn--accent', 'target="_blank" rel="noopener"')}${btn(FORM, 'まずは問い合わせる', 'btn--line', 'target="_blank" rel="noopener"')}</div>
    </div>
    <div class="icon-card reveal" style="gap:18px">
      <p class="eyebrow"><span class="eyebrow__en">3 STEPS</span></p>
      <ol class="stack" style="counter-reset:s">${['設置エリアを選択', '製品サイズと設置台数を選択（1人用／2人用／4人用）', '消防申請代行の可否（あり／なし）'].map((t, i) => `<li class="flex" style="gap:14px"><span class="acc__q" style="font-size:18px">0${i + 1}</span><span>${t}</span></li>`).join('')}</ol>
      <dl class="def" style="margin-top:8px">${['本体代金', '設置工事費', '運送費', '諸経費', '消防申請代行', '合計'].map(k => `<div style="grid-template-columns:140px 1fr;padding:10px 0"><dt>${k}</dt><dd class="mono" style="color:var(--steel)">— 円</dd></div>`).join('')}</dl>
      <p class="note">お支払い金額（税込）0円〜（運送費・諸経費を除く）</p>
    </div>
  </div>
</section>

<section class="section section--light" id="flow" aria-labelledby="fl-title">
  <div class="container">
    <div class="reveal">${heading({ num: '07', en: 'FLOW', ja: '導入の流れ', tone: 'light', lead: '最短2週間で導入可能' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="fl-title">')}</div>
    <ol class="flow flow--4" data-stagger>${['お問い合わせ', '現地調査（無料）', 'お見積もり・仕様のご提案', 'ご契約・設置'].map((t, i) => `<li class="flow__step"><div class="flow__img" style="border:0;width:96px;height:96px;background:#fff;padding:12px">${img(`brands/monobo/flow-${i + 1}`, '')}</div><p class="flow__num">STEP 0${i + 1}</p><h3 class="flow__title">${t}</h3></li>`).join('')}</ol>
  </div>
</section>

<section class="section section--dark section--grid" id="buyback" aria-labelledby="bb-title">
  <div class="container split">
    <div class="split__body reveal">
      ${heading({ num: '08', en: 'BUYBACK SERVICE', ja: 'ご購入後も安心<br>Monobo 買取サービスのご案内' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="bb-title">')}
      <h3>ご購入後の「どうしよう」も解決！</h3>
      <p>「使用期間が終わったらどうする？」「入れ替えを検討しているけど、処分が面倒…」そんなお悩みに、Monobo買取サービスがしっかりお応えします。製品の状態に応じて、再整備・リユース・再資源化など、環境にも配慮した方法で回収。</p>
      <div class="table-wrap mt-4"><table class="table" style="min-width:0"><caption class="sr-only">買取価格例（1人用）</caption><thead><tr><th>買取価格例</th><th>1年未満</th><th>1〜2年未満</th><th>2〜3年未満</th><th>3〜4年未満</th></tr></thead><tbody><tr><td>1人用</td><td class="num">¥324,000</td><td class="num">¥239,200</td><td class="num">¥154,400</td><td class="num">¥69,600</td></tr></tbody></table></div>
      <p class="note mt-2">買取価格表に記載されている価格はあくまで参考価格です。傷や汚れ、使用感など、商品の状態によって減額される場合があります。振込手数料に関しては買取価格から差し引かせていただきます。</p>
    </div>
    <div class="split__img img-reveal">${img('brands/monobo/purchase', 'ご購入後の「どうしよう」も解決！')}</div>
  </div>
</section>

<section class="section section--light" id="faq" aria-labelledby="fq-title">
  <div class="container" style="max-width:920px">
    <div class="reveal">${heading({ num: '09', en: 'FAQ', ja: 'よくある質問', tone: 'light' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="fq-title">')}</div>
    <div class="reveal">${accordion(FAQ, 'monobo-faq')}</div>
  </div>
</section>

<section class="section section--dark-2" aria-label="お問い合わせ"><div class="container">
  <div class="reveal">${heading({ en: 'CONTACT', ja: 'ご不明点がございましたら<br>お気軽にお問い合わせください', lead: 'ささいなことでもお気軽にお問い合わせください。' })}</div>${brandCta()}
  <p class="note mt-4">本社工場：〒329-4411 栃木県栃木市大平町横堀みずほ5-1 Tel. 0282-45-1341 Fax. 0282-45-1508　／　東京本部：〒170-0013 東京都豊島区東池袋1-21-11 オーク池袋ビル5F Tel. 03-5985-4472 Fax. 03-5985-4473　／　<a class="text-link" href="https://nagamura.co.jp/monobo/privacy-policy/" target="_blank" rel="noopener">基本情報保護方針（Monobo 公式サイト）</a></p>
</div></section>
`;

export default { slug: 'monobo', title: 'Monobo（テレワークブース）', description: 'Monobo（モノボ）は公衆電話ボックス製造の技術を活かした省スペース対応テレワークブース。低天井OK（最低天井高2100mm）、最短2時間で設置、1人用・2人用・4人用。レンタル・リース・買取サービスも。', body };
