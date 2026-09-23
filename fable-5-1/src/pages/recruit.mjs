import { img, heading, localNav, btn, cta } from '../helpers.mjs';

const ic = d => `<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
const I = {
  shield: ic('<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>'),
  train: ic('<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M9 21l1-3M15 21l-1-3M9 7h6"/>'),
  clock: ic('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  cert: ic('<circle cx="12" cy="9" r="5"/><path d="M8.5 13.5L7 21l5-2 5 2-1.5-7.5"/>'),
  trophy: ic('<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a3 3 0 0 0 3 3M16 6h3a3 3 0 0 1-3 3M12 13v4M8 21h8M10 17h4"/>'),
  user: ic('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'),
  baby: ic('<circle cx="12" cy="7" r="3"/><path d="M6 21v-5a6 6 0 0 1 12 0v5M9 21v-4M15 21v-4"/>'),
  sun: ic('<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>'),
  heart: ic('<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>'),
  hand: ic('<path d="M7 11V6a1.5 1.5 0 0 1 3 0v5M10 10V4.5a1.5 1.5 0 0 1 3 0V10M13 10V6a1.5 1.5 0 0 1 3 0v6"/><path d="M16 12a1.5 1.5 0 0 1 3 0v3a7 7 0 0 1-7 7h-1a7 7 0 0 1-6-3.4L3 15.5a1.5 1.5 0 0 1 2.4-1.8L7 15.5"/>'),
  gift: ic('<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 13h18M12 8c-2-4-6-3-6-1s3 1 6 1c3 0 6 1 6-1s-4-3-6 1"/>'),
  coins: ic('<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>'),
  health: ic('<path d="M4 12h4l2-5 3 10 2-5h5"/>'),
  star: ic('<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/>'),
};

const benefitsWork = [
  [I.shield, '各種社会保険完備', '雇用保険、労災保険、健康保険、厚生年金保険に加入しています。'],
  [I.train, '通勤交通費全額支給', '交通機関を利用して通勤する社員には、通勤にかかる費用を全額支給いたします。'],
  [I.clock, '半日単位、１時間単位の有給休暇', 'より効率的に有給休暇を利用できるよう、半日・１時間単位での有給取得が可能です。'],
  [I.cert, '資格手当', '当社指定の資格取得に応じて資格手当を支給いたします。社員の技術力・知識を高める自己啓発のバックアップをいたします。'],
  [I.trophy, '社内表彰制度', '年１回の業績表彰の他、長く勤めている社員を称える永年勤続表彰があります。'],
  [I.user, '最大75歳までの再雇用制度', '定年退職後、再雇用を希望する社員は、最大75歳まで働くことができます。（会社規定による）'],
];
const benefitsLife = [
  [I.baby, '出産・育児休業制度', '産前6週、産後8週の産前・産後休業に加え、子どもが2歳になるまで育児休業を延長することができます。(延長条件あり)　<span class="badge badge--gold">取得率100%</span>'],
  [I.sun, '育児のための短時間勤務', '小学校３年生までの子どもを持つ社員は、希望に基づき1日の労働時間を2時間まで短縮することができます。'],
  [I.heart, '子どものための看護休暇', '小学校入学前の子どもを持つ社員は、子どもの負傷、疾病、予防接種、健康診断を受診するために看護休暇を1時間単位で取得することができます。'],
  [I.hand, '介護休業制度', '仕事と介護を両立できるよう通算して93日まで介護休業を取得することができます。また、介護短時間勤務を選択する事も可能です。'],
  [I.gift, '慶弔制度', '結婚・出産祝金・被災・傷病見舞金など、社員の冠婚葬祭時に慶弔金の支給と特別休暇を付与いたします（規程による）'],
  [I.coins, '退職金制度', '勤続3年以上の社員には、勤続年数に応じて退職金を支給しています。'],
  [I.health, '健康診断実施（人間ドック）', '社員がいつまでも健康でいられるよう、法定項目以上の健康診断を年１回実施しています。'],
  [I.star, 'リロクラブ（国内最大級の福利厚生サービス）', '全国の宿泊施設やフィットネスクラブ、飲食店等を会員優待を受けながら利用することが可能です。その他リロクラブの福利厚生'],
];
const card = ([svg, t, d]) => `<li class="icon-card"><div class="icon-card__icon">${svg}</div><h3 class="icon-card__title">${t}</h3><p class="icon-card__text">${d}</p></li>`;
const num = (label, ja, value, unit, note, dec = 0, pre = '') => `<li class="num"><span class="num__label">${label}</span><span class="num__value">${pre}<span class="js-counter" data-count="${value}" data-decimals="${dec}">${value}</span><small>${unit}</small></span><span class="num__ja">${ja}</span>${note ? `<span class="num__note">${note}</span>` : ''}</li>`;

const body = `
<header class="hero" style="min-height:88svh" aria-label="採用情報">
  <div class="hero__media">${img('recruit/hero', '', { eager: true, sizes: '100vw', attrs: 'data-parallax="8"' })}</div>
  <div class="container hero__inner">
    <nav class="crumbs" aria-label="パンくずリスト"><ol><li><a href="index.html">ホーム</a></li><li><span aria-current="page">採用情報</span></li></ol></nav>
    <p class="hero__kicker">RECRUITMENT — 長村製作所 採用情報</p>
    <h1 class="hero__title" style="font-size:clamp(34px,6vw,84px)"><span class="line"><span>“ありがとう”を道しるべに、</span></span><span class="line"><span>未来を創りつづける。</span></span></h1>
    <p class="hero__sub">長村製作所は『お客様のニーズに対して丁寧に向き合っていくこと』をポリシーとしています。対応が難しいニッチなニーズこそ、当社が得意とする分野であり、他にはできない当社の強みです。長村製作所には、一人ひとりが活躍できるフィールドが広がっています。当社の経営理念に共感し、未来のモノづくりを共に創っていく仲間を待っています。</p>
    <div class="hero__actions">${btn('#newgrad', '新卒採用', 'btn--gold')}${btn('#career', '中途採用', 'btn--line')}${btn('#benefits', '福利厚生', 'btn--line')}</div>
  </div>
</header>
${localNav([['#message', 'メッセージ'], ['#jobs', '募集職種'], ['#numbers', '数字で見る'], ['#benefits', '福利厚生'], ['#newgrad', '新卒採用'], ['#career', '中途採用'], ['advantage.html', '企業理念']])}

<section class="section section--dark section--grid" id="message" aria-labelledby="ms-title">
  <div class="container split split--wide-img">
    <div class="split__img split__img--frame img-reveal" style="max-width:440px">${img('recruit/president', '代表取締役社長 飯山 進', { sizes: '(min-width: 900px) 40vw, 100vw' })}</div>
    <div class="split__body reveal">
      ${heading({ num: '01', en: 'MESSAGE', ja: 'メッセージ' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="ms-title">')}
      <h3>私たちが大切にしていること</h3>
      <p>開発まで踏み込んでモノづくりをしていく以上は、言われたとおりにモノを作って高いか安いかという関係ではなく、お客様と一緒に考え、一緒に製品を作り上げていくことがモノづくりと考えています。製品に付加価値を吹き込み、想いを込める。そういう場と心も含めて当社の製品だと考えています。</p>
      <h3 class="mt-4">成長するために必要な３つの資質</h3>
      <p>丁寧に向き合うのは、社員に対しても同じです。一人ひとりの個性を尊重しながら、コミュニケーションよく、能力を伸ばし高め合うことを大切にしています。当社が求めるのは、「素直さ」「向上心」を持ち、「行動力」がある人。特に若手のうちは「素直さ」が大切。自分を成長させたいという「向上心」を持ち、何事にも前向きにチャレンジする「行動力」があれば、人は必ず伸びます。当社は挑戦する人への支援は惜しみません。モノづくりが好き、人の役に立ちたい、と思う方はぜひ当社でチャレンジしてみてください。</p>
      <ul class="chips mt-3"><li class="chip"><i></i>素直さ</li><li class="chip"><i></i>向上心</li><li class="chip"><i></i>行動力</li></ul>
      <p class="mt-4"><span class="small">代表取締役社長</span><br><strong style="font-size:22px">飯山 進</strong></p>
    </div>
  </div>
</section>

<section class="section section--light" id="jobs" aria-labelledby="jb-title">
  <div class="container">
    <div class="reveal">${heading({ num: '02', en: 'POSITIONS', ja: '募集職種', tone: 'light' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="jb-title">')}</div>
    <ul class="job-grid" data-stagger>
      ${[['job-design', 'DESIGN', '設計', 'お客さまのご要望をもとに、CADソフトで設計図面を作成します。どんなに細かな要望にも応えていくのが当社の強みです。'], ['job-metal', 'METAL PROCESSING', '板金加工', '鉄・ステンレス・アルミ等の金属板の切断、穴開け、曲げなどの加工作業を行います。様々な加工機械を使って、必要な部品を製作します。'], ['job-welding', 'WELDING', '溶接', '様々な技術の中から素材と用途に合わせた溶接方法で、強度のある美しい製品を製作します。奥が深く、極めがいのある仕事です。'], ['job-assembly', 'ASSEMBLY', '組立', '製作した部品を組立図面に従って、完成品に組み立てていきます。きめ細かい徹底したチェックで高い品質基準の製品に仕上げています。']].map(([im, en, t, d]) => `<li class="job-card">${img('recruit/' + im, t + 'の仕事', { sizes: '(min-width: 900px) 25vw, 50vw' })}<div class="job-card__body"><p class="job-card__en">${en}</p><h3 class="job-card__title">${t}</h3><p class="job-card__text">${d}</p></div></li>`).join('')}
    </ul>
  </div>
</section>

<section class="section section--dark section--grid" id="numbers" aria-labelledby="nm-title">
  <div class="container">
    <div class="reveal">${heading({ num: '03', en: 'IN NUMBERS', ja: '数字で見る! 長村製作所のコンテンツ' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="nm-title">')}</div>
    <h3 class="eyebrow reveal" style="font-size:13px"><span class="eyebrow__en">会社について</span></h3>
    <ul class="numbers numbers--3 mb-5" data-stagger>
      <li class="num"><span class="num__label">Founded</span><span class="num__value"><span class="js-counter js-years" data-count="88">88</span><small>年</small></span><span class="num__ja">創立</span><span class="num__note">1938年(昭和13年)創業<br>創業100年目指して邁進しています</span></li>
      ${num('Employees', '従業員数', 59, '名', '2025年8月1日時点<br>続々と仲間が増えています')}
      ${num('Average age', '平均年齢', 42.8, '歳', '働き盛りの年代が活躍しています。近年は若手の採用を積極的に行なっており、ベテランから若い世代への技術継承も進めています。<br>平均勤続年数は13年！長村一筋で働き続ける社員が多数います。', 1)}
      <li class="num"><span class="num__label">Gender ratio</span><span class="num__value">男性<span class="js-counter" data-count="68">68</span><small>%</small>　女性<span class="js-counter" data-count="32">32</span><small>%</small></span><span class="num__ja">男女比率</span><span class="num__note">製造業は男性が多いイメージですが、当社では多くの女性社員が活躍しています。</span></li>
      ${num('Annual sales', '年間売上高', 10.3, '億円', '※2024年度<br>新製品の開発も積極的に行なっています。', 1)}
      <li class="num"><span class="num__label">Phone booth makers</span><span class="num__value">国内<span class="js-counter" data-count="2">2</span><small>社のみ</small></span><span class="num__ja">公衆電話BOXを製造する会社数</span><span class="num__note">NTTグループの厳しい品質管理基準に対応し、東日本エリアの電話BOXを支えています。</span></li>
    </ul>
    <h3 class="eyebrow reveal" style="font-size:13px"><span class="eyebrow__en">休日・残業について</span></h3>
    <ul class="numbers numbers--3 mb-5" data-stagger>
      ${num('Annual holidays', '年間休日数', 127, '日', '完全週休2日制で、夏・冬季の長期連休もあり、有給休暇もとりやすい環境です。ON/OFFのメリハリがある職場環境を全社員で推進しています。')}
      ${num('Paid leave usage', '有給休暇平均取得率', 76.7, '%', '１時間単位でも取得できるようになり、さらに有給休暇が取得しやすくなりました。', 1)}
      ${num('Overtime / month', '月平均残業時間', 5.08, '時間', '時期によって変動がありますが、残業は少なめで、固定勤務制のため、プライベートの時間も大切にできます。', 2)}
    </ul>
    <h3 class="eyebrow reveal" style="font-size:13px"><span class="eyebrow__en">女性社員について</span></h3>
    <ul class="numbers numbers--3" data-stagger>
      ${num('Working mothers', 'ワーキングマザー比率', 73.6, '%', '※19名中14名<br>産休・育休はもちろんのこと、育児短時間勤務制度や１時間単位での子看護休暇など、ママになっても働きやすい制度が整っています。女性が働きやすい職場づくりには非常に積極的です。', 1)}
      ${num('Maternity leave & return', '女性の育児休業取得率・復職率', 100, '%', '※過去5年間実績　ママになっても安心して職場復帰ができます。身近に先輩ママがいるので、育児の悩みも相談できますよ♪')}
      ${num('Women in management', '女性の管理職に占める割合', 22.2, '%', '女性採用も積極的に行っており、管理職の登用もすすめています。', 1)}
    </ul>
  </div>
</section>

<section class="section section--light section--grid" id="benefits" aria-labelledby="bf-title">
  <div class="container">
    <div class="reveal">${heading({ num: '04', en: 'BENEFITS', ja: '福利厚生', tone: 'light' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="bf-title">')}</div>
    <h3 class="eyebrow reveal" style="font-size:13px;color:var(--text-2)"><span class="eyebrow__en">労働</span></h3>
    <ul class="icon-cards mb-5" data-stagger>${benefitsWork.map(card).join('')}</ul>
    <h3 class="eyebrow reveal" style="font-size:13px;color:var(--text-2)"><span class="eyebrow__en">生活・健康</span></h3>
    <ul class="icon-cards" data-stagger>${benefitsLife.map(card).join('')}</ul>
  </div>
</section>

<section class="section section--dark section--grid" id="newgrad" aria-labelledby="ng-title">
  <div class="container grid-2" style="align-items:start">
    <div class="reveal">
      ${heading({ num: '05', en: 'NEW GRADUATE', ja: '新卒採用' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="ng-title">')}
      <p class="eyebrow"><span class="eyebrow__en">WHAT NEW?</span></p>
      <div class="news-list"><a class="news-item" href="https://nagamura.co.jp/recruit/info-newgrads/%e6%8e%a1%e7%94%a8%e3%82%b5%e3%82%a4%e3%83%88%e3%82%92%e9%96%8b%e8%a8%ad/" target="_blank" rel="noopener"><time>お知らせ(新卒)</time><span class="news-item__title">採用サイトを開設</span><span class="news-item__tag">READ ↗</span></a></div>
      <p class="mt-4">新卒採用のエントリーはマイナビ2027からお願いします。</p>
      <div class="flex mt-3">${btn('https://job.mynavi.jp/27/pc/search/corp253705/outline.html', 'マイナビ2027 で見る', 'btn--gold', 'target="_blank" rel="noopener"')}${btn('https://nagamura.co.jp/recruit/newgrad/', '新卒採用ページ（採用サイト）', 'btn--line', 'target="_blank" rel="noopener"')}</div>
    </div>
    <div class="reveal" id="career">
      ${heading({ num: '06', en: 'CAREER', ja: '中途採用' })}
      <div class="callout"><p class="strong" style="font-size:17px">現在、中途求人募集は行っておりません。</p><p class="mt-2"><strong class="strong">エントリー方法</strong><br>別途ご案内いたします。</p></div>
      <div class="contact-card mt-3">
        <p class="contact-card__label">RECRUIT CONTACT — 連絡先</p>
        <p class="strong">株式会社 長村製作所 経営企画室：採用担当</p>
        <p>TEL：<a class="text-link" href="tel:0359854472">03-5985-4472</a>　FAX：03-5985-4473</p>
        <p>Mail：<a class="text-link" href="mailto:recruit@nagamura.co.jp">recruit@nagamura.co.jp</a></p>
        <p>〒170-0013 東京都豊島区東池袋1-21-11 オーク池袋ビル5F</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--light" aria-label="社員の写真">
  <div class="container grid-2" data-stagger>
    <figure class="fig">${img('recruit/about-1', '長村製作所の社員たち', { sizes: '(min-width: 800px) 50vw, 100vw' })}<figcaption>ものづくりを担う仲間たち</figcaption></figure>
    <figure class="fig">${img('recruit/about-2', '作業中の社員', { sizes: '(min-width: 800px) 50vw, 100vw' })}<figcaption>現場の様子</figcaption></figure>
  </div>
</section>
${cta()}
`;

export default { slug: 'recruit', title: '採用情報', description: '株式会社長村製作所の採用情報：メッセージ、募集職種（設計・板金加工・溶接・組立）、数字で見る長村製作所（年間休日127日、有給取得率76.7%、月平均残業5.08時間）、福利厚生、新卒採用（マイナビ2027）、中途採用。', body };
