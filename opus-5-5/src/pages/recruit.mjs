import { img, head, pageHero, toc, btn, ext, SITE, yearsSinceFounding } from '../lib.mjs';

const BENEFITS = [
  ['労働', '各種社会保険完備', '雇用保険、労災保険、健康保険、厚生年金保険に加入しています。'],
  ['労働', '通勤交通費全額支給', '交通機関を利用して通勤する社員には、通勤にかかる費用を全額支給いたします。'],
  ['労働', '半日単位、１時間単位の有給休暇', 'より効率的に有給休暇を利用できるよう、半日・１時間単位での有給取得が可能です。'],
  ['労働', '資格手当', '当社指定の資格取得に応じて資格手当を支給いたします。社員の技術力・知識を高める自己啓発のバックアップをいたします。'],
  ['労働', '社内表彰制度', '年１回の業績表彰の他、長く勤めている社員を称える永年勤続表彰があります。'],
  ['労働', '最大75歳までの再雇用制度', '定年退職後、再雇用を希望する社員は、最大75歳まで働くことができます。（会社規定による）'],
  ['生活・健康', '出産・育児休業制度', '産前6週、産後8週の産前・産後休業に加え、子どもが2歳になるまで育児休業を延長することができます。(延長条件あり)'],
  ['生活・健康', '育児のための短時間勤務', '小学校３年生までの子どもを持つ社員は、希望に基づき1日の労働時間を2時間まで短縮することができます。'],
  ['生活・健康', '子どものための看護休暇', '小学校入学前の子どもを持つ社員は、子どもの負傷、疾病、予防接種、健康診断を受診するために看護休暇を1時間単位で取得することができます。'],
  ['生活・健康', '介護休業制度', '仕事と介護を両立できるよう通算して93日まで介護休業を取得することができます。また、介護短時間勤務を選択する事も可能です。'],
  ['生活・健康', '慶弔制度', '結婚・出産祝金・被災・傷病見舞金など、社員の冠婚葬祭時に慶弔金の支給と特別休暇を付与いたします（規程による）'],
  ['生活・健康', '退職金制度', '勤続3年以上の社員には、勤続年数に応じて退職金を支給しています。'],
  ['生活・健康', '健康診断実施（人間ドック）', '社員がいつまでも健康でいられるよう、法定項目以上の健康診断を年１回実施しています。'],
  ['生活・健康', 'リロクラブ（国内最大級の福利厚生サービス）', '全国の宿泊施設やフィットネスクラブ、飲食店等を会員優待を受けながら利用することが可能です。'],
];

const common = {
  資格: '・全学部・全学科<br>・普通運転免許をお持ちの方（取得予定の方含む）',
  給与: '◇ 大卒 208,000円<br>◇ 短大専門高専 188,800円<br>◇ 高卒 168,000円<br>※上記金額の他、残業代が別途支給されます。<br>※当社指定の資格取得者は資格手当を支給します。',
  手当: '時間外手当、交通費全額支給、資格手当',
  昇給: '年１回（４月）',
  賞与: '年２回（７月・１２月）',
  福利: '社会保険完備（健康・厚生年金・労災・雇用）、交通費全額支給、資格手当あり、産休・育休実績多数、育児短時間勤務制度、１時間単位の有休休暇制度、労働組合、健康診断（人間ドック）、各種研修、制服貸与、福利厚生倶楽部加入（リロクラブ）',
  時間: '8:25～17:00（休憩65分）',
  教育: '・新入社員研修（半年後にフォローアップ研修あり）<br>・階層別職種別研修<br>・ＩＳＯ研修<br>・メーカーによる機械操作研修',
  フロー: '<span class="req-flow"><span>エントリー</span><i></i><span>書類選考</span><i></i><span>一次面接・適性検査</span><i></i><span>最終面接</span><i></i><span>内々定</span></span><br>面接はリラックスした雰囲気の中、個別にお話を伺います。',
  エントリー: '大学・短大・専門生（2024卒業予定の方）は、マイナビよりエントリーしてください。',
  連絡先: `株式会社 長村製作所 経営企画室：採用担当<br>TEL:${SITE.tokyoTel} FAX:${SITE.tokyoFax}<br>Mail: <a href="mailto:${SITE.recruitMail}">${SITE.recruitMail}</a><br>${SITE.tokyoZip} 東京都豊島区東池袋1-21-11 オーク池袋ビル5F`,
};

function reqTable(kind) {
  const rows = kind === 'manufacture'
    ? [['募集職種', '■製造スタッフ<br>5G通信機器関連製品、電話BOX、喫煙BOXの製造（金属板の切断、穴開け、曲げ、研磨、溶接など）'], ['応募資格', common.資格], ['基本給', common.給与], ['諸手当', common.手当], ['昇給', common.昇給], ['賞与', common.賞与], ['休日休暇', '■完全週休２日制（土曜・日曜・祝日GW・夏季休暇・年末年始休暇）<br>■年間休日127日（2023年度）<br>夏季休暇・年末年始休暇・結婚休暇・子女結婚休暇・配偶者出産休暇、忌引休暇・罹災休暇・ボランティア休暇 など'], ['福利厚生・社内制度', common.福利], ['勤務地', '【本社・工場】栃木県栃木市'], ['勤務時間', common.時間], ['教育制度', common.教育], ['採用フロー', common.フロー], ['エントリー方法', common.エントリー], ['連絡先', common.連絡先]]
    : [['募集職種', '■設計・開発スタッフ<br>CADを利用した5G通信機器関連製品、電話BOX、喫煙BOXの設計、開発。'], ['応募資格', common.資格], ['基本給', common.給与.replace(/◇ /g, '◇')], ['諸手当', common.手当], ['昇給', common.昇給], ['賞与', common.賞与], ['休日休暇', '■完全週休２日制（土曜・日曜・祝日GW・夏季休暇・年末年始休暇）<br>■年間休日127日（2023年度実績）<br>夏季休暇・年末年始休暇・結婚休暇・子女結婚休暇・配偶者出産休暇、忌引休暇・罹災休暇・ボランティア休暇 など'], ['福利厚生・社内制度', common.福利], ['勤務地', '【本社】栃木県栃木市<br>※会社の事業拡大に伴い、東京本部（池袋）にて勤務いただく可能性があります。その場合は、事前にご本人と相談の上、決定いたします。'], ['勤務時間', common.時間], ['教育制度', common.教育], ['採用フロー', common.フロー], ['エントリー方法', common.エントリー], ['連絡先', common.連絡先]];
  return `<dl class="dtable">${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>`;
}

export default {
  path: 'recruit/',
  render(r) {
    const y = yearsSinceFounding();
    const ring = (v) => `<svg class="ncard__ring" viewBox="0 0 56 56" aria-hidden="true" style="--v:${v}"><circle class="bg" cx="28" cy="28" r="24"/><circle class="fg" cx="28" cy="28" r="24"/></svg>`;
    const n = (label, num, unit, note, opts = {}) => `<div class="ncard rv">${opts.ring !== undefined ? ring(opts.ring) : ''}<p class="ncard__label">${label}</p><p class="ncard__num">${opts.pre ? `<span class="pre">${opts.pre}</span>` : ''}<span data-count="${num}" ${opts.dec ? `data-dec="${opts.dec}"` : ''}${opts.years ? ' data-years' : ''}>${num}</span><small>${unit}</small></p>${opts.extra || ''}<p class="ncard__note">${note}</p></div>`;
    return {
      title: '採用情報',
      description: '長村製作所の採用情報。"ありがとう"を道しるべに、未来を創りつづける。設計・板金加工・溶接・組立の仕事、数字で見る長村製作所、福利厚生、新卒・中途の募集要項。',
      body: `
${pageHero(r, { no: 'RECRUIT', en: 'Recruit', ja: '採用情報', image: 'team-wide', crumbs: [{ label: '採用情報' }], lead: '株式会社長村製作所の採用・求人情報です。私たちと一緒に働きませんか？' })}
${toc([['message', 'メッセージ'], ['jobs', '募集職種'], ['numbers', '数字で見る'], ['benefits', '福利厚生'], ['requirements', '募集要項'], ['entry', 'エントリー・連絡先']])}

<section class="sec is-light" aria-labelledby="catch-title">
  <div class="wrap split" style="align-items:center">
    <div>
      <p class="sh__meta"><span class="sh__no">PHILOSOPHY</span><span class="sh__line"></span><span>企業理念</span></p>
      <h2 class="rhero-catch rv" id="catch-title" style="margin-top:20px">"ありがとう"を道しるべに、<br>未来を創りつづける。</h2>
      <p class="rv" style="margin-top:28px;max-width:40em">長村製作所は『お客様のニーズに対して丁寧に向き合っていくこと』をポリシーとしています。対応が難しいニッチなニーズこそ、当社が得意とする分野であり、他にはできない当社の強みです。長村製作所には、一人ひとりが活躍できるフィールドが広がっています。当社の経営理念に共感し、未来のモノづくりを共に創っていく仲間を待っています。</p>
      <p class="rv" style="margin-top:24px"><a class="textlink" href="${r}management/">経営理念・経営方針を見る</a></p>
    </div>
    <div class="gallery" style="grid-template-columns:1fr 1fr" data-lb-group>
      <figure class="rv-img" style="grid-column:1/-1;aspect-ratio:3/2;overflow:hidden">${img(r, 'adv02', '図面を囲んで打ち合わせをする社員', { sizes: '(min-width:960px) 50vw, 100vw' })}</figure>
    </div>
  </div>
</section>

<section class="sec" id="message" aria-labelledby="msg-title">
  <div class="wrap greet">
    <div class="greet__photo"><figure class="figure rv-img">${img(r, 'ceo-portrait', '代表取締役社長 飯山 進', { sizes: '(min-width:960px) 38vw, 100vw' })}</figure></div>
    <div>
      ${head({ no: '01', en: 'Message', ja: 'メッセージ', id: 'msg-title' })}
      <h3 class="lead-l rv">私たちが大切にしていること</h3>
      <p class="rv" style="margin-top:14px;color:var(--tx-2)">開発まで踏み込んでモノづくりをしていく以上は、言われたとおりにモノを作って高いか安いかという関係ではなく、お客様と一緒に考え、一緒に製品を作り上げていくことがモノづくりと考えています。製品に付加価値を吹き込み、想いを込める。そういう場と心も含めて当社の製品だと考えています。</p>
      <h3 class="lead-l rv" style="margin-top:40px">成長するために必要な３つの資質</h3>
      <p class="rv" style="margin-top:14px;color:var(--tx-2)">丁寧に向き合うのは、社員に対しても同じです。一人ひとりの個性を尊重しながら、コミュニケーションよく、能力を伸ばし高め合うことを大切にしています。当社が求めるのは、「素直さ」「向上心」を持ち、「行動力」がある人。特に若手のうちは「素直さ」が大切。自分を成長させたいという「向上心」を持ち、何事にも前向きにチャレンジする「行動力」があれば、人は必ず伸びます。当社は挑戦する人への支援は惜しみません。モノづくりが好き、人の役に立ちたい、と思う方はぜひ当社でチャレンジしてみてください。</p>
      <ul class="traits" style="background:var(--line);border-color:var(--line)">
        ${[['素直さ', 'HONESTY'], ['向上心', 'AMBITION'], ['行動力', 'ACTION']].map(([a, b]) => `<li style="background:var(--ink)"><small>${b}</small><b>${a}</b></li>`).join('')}
      </ul>
      <p class="greet__sign rv"><small>代表取締役社長</small><strong>飯山 進</strong></p>
    </div>
  </div>
</section>

<section class="sec sec--ink2" id="jobs" aria-labelledby="jobs-title">
  <div class="wrap">
    ${head({ no: '02', en: 'Jobs', ja: '募集職種', id: 'jobs-title' })}
    <div class="jobs">
      ${[
        ['Design', '設計', 'お客さまのご要望をもとに、CADソフトで設計図面を作成します。どんなに細かな要望にも応えていくのが当社の強みです。', 'job-design'],
        ['Metal processing', '板金加工', '鉄・ステンレス・アルミ等の金属板の切断、穴開け、曲げなどの加工作業を行います。様々な加工機械を使って、必要な部品を製作します。', 'job-metal'],
        ['Welding', '溶接', '様々な技術の中から素材と用途に合わせた溶接方法で、強度のある美しい製品を製作します。奥が深く、極めがいのある仕事です。', 'job-welding'],
        ['Assembly', '組立', '製作した部品を組立図面に従って、完成品に組み立てていきます。きめ細かい徹底したチェックで高い品質基準の製品に仕上げています。', 'job-assembly'],
      ].map(([en, ja, tx, im], i) => `<article class="job rv" style="--d:${i * 0.08}s"><span class="job__img">${img(r, im, '', { sizes: '(min-width:1200px) 25vw, (min-width:760px) 50vw, 100vw' })}</span><p class="job__en">${en}</p><h3 class="job__ja">${ja}</h3><p class="job__tx">${tx}</p></article>`).join('')}
    </div>
  </div>
</section>

<section class="sec num-sec" id="numbers" aria-labelledby="num-title">
  <div class="wrap">
    ${head({ no: '03', en: 'By the Numbers', ja: '数字で見る！長村製作所', id: 'num-title' })}
    <h3>会社について</h3>
    <div class="ngrid">
      ${n('創立', y, '年', '1938年(昭和13年)創業<br>創業100年目指して邁進しています', { years: true })}
      ${n('従業員数', 59, '名', '2025年8月1日時点<br>続々と仲間が増えています')}
      ${n('平均年齢', 42.8, '歳', '働き盛りの年代が活躍しています。近年は若手の採用を積極的に行なっており、ベテランから若い世代への技術継承も進めています。<br>平均勤続年数は13年！長村一筋で働き続ける社員が多数います。', { dec: 1 })}
      ${n('男女比率', 68, '%', '製造業は男性が多いイメージですが、当社では多くの女性社員が活躍しています。', { pre: '男性', extra: `<p class="ncard__num" style="font-size:1.8rem;color:var(--red-2)"><span class="pre">女性</span><span data-count="32">32</span><small>%</small></p><span class="gender" aria-hidden="true"><i style="width:68%;background:var(--steel)"></i><i style="width:32%;background:var(--red)"></i></span>` })}
      ${n('年間売上高', 10.3, '億円', '※2024年度<br>新製品の開発も積極的に行なっています。', { dec: 1 })}
      ${n('公衆電話BOXを製造する会社数', 2, '社のみ', 'NTTグループの厳しい品質管理基準に対応し、東日本エリアの電話BOXを支えています。', { pre: '国内' })}
    </div>
    <h3>休日・残業について</h3>
    <div class="ngrid">
      ${n('年間休日数', 127, '日', '完全週休2日制で、夏・冬季の長期連休もあり、有給休暇もとりやすい環境です。ON/OFFのメリハリがある職場環境を全社員で推進しています。')}
      ${n('有給休暇平均取得率', 76.7, '%', '１時間単位でも取得できるようになり、さらに有給休暇が取得しやすくなりました。', { dec: 1, ring: 0.767 })}
      ${n('月平均残業時間', 5.08, '時間', '時期によって変動がありますが、残業は少なめで、固定勤務制のため、プライベートの時間も大切にできます。', { dec: 2 })}
    </div>
    <h3>女性社員について</h3>
    <div class="ngrid">
      ${n('ワーキングマザー比率', 73.6, '%', '※19名中14名<br>産休・育休はもちろんのこと、育児短時間勤務制度や１時間単位での子看護休暇など、ママになっても働きやすい制度が整っています。女性が働きやすい職場づくりには非常に積極的です。', { dec: 1, ring: 0.736 })}
      ${n('女性の育児休業取得率・復職率', 100, '%', '※過去5年間実績 ママになっても安心して職場復帰ができます。身近に先輩ママがいるので、育児の悩みも相談できますよ♪', { ring: 1 })}
      ${n('女性の管理職に占める割合', 22.2, '%', '女性採用も積極的に行っており、管理職の登用もすすめています。', { dec: 1, ring: 0.222 })}
    </div>
  </div>
</section>

<section class="sec is-light" id="benefits" aria-labelledby="bn-title">
  <div class="wrap">
    ${head({ no: '04', en: 'Benefits', ja: '福利厚生', id: 'bn-title' })}
    ${['労働', '生活・健康'].map((c) => `<h3 class="lead-l" style="margin:32px 0 16px">${c}</h3><div class="benefits">${BENEFITS.filter((b) => b[0] === c).map(([, t, d], i) => `<div class="benefit rv"><h4><span>${String(i + 1).padStart(2, '0')}</span>${t}</h4><p>${d}</p></div>`).join('')}</div>`).join('')}
    <p style="margin-top:28px">${btn('https://www.fukuri.jp/contents/files/fukuri/img/eigyo/c1/index.html?compname=%E9%95%B7%E6%9D%91%E8%A3%BD%E4%BD%9C%E6%89%80', 'その他リロクラブの福利厚生（福利厚生のご案内）', { external: true, variant: 'btn--dark' })}</p>
  </div>
</section>

<section class="sec" id="requirements" aria-labelledby="rq-title">
  <div class="wrap">
    ${head({ no: '05', en: 'Requirements', ja: '募集要項', id: 'rq-title', lead: '新卒採用：製造スタッフ／設計・開発スタッフ ｜ 中途採用' })}
    <div class="req-tabs" role="tablist" aria-label="募集区分">
      <button type="button" role="tab" id="tab-m" aria-controls="panel-m" aria-selected="true">新卒｜製造スタッフ</button>
      <button type="button" role="tab" id="tab-d" aria-controls="panel-d" aria-selected="false" tabindex="-1">新卒｜設計・開発スタッフ</button>
      <button type="button" role="tab" id="tab-c" aria-controls="panel-c" aria-selected="false" tabindex="-1">中途採用</button>
    </div>
    <div class="req-panel" role="tabpanel" id="panel-m" aria-labelledby="tab-m" tabindex="0">${reqTable('manufacture')}</div>
    <div class="req-panel" role="tabpanel" id="panel-d" aria-labelledby="tab-d" tabindex="0" hidden>${reqTable('design')}</div>
    <div class="req-panel" role="tabpanel" id="panel-c" aria-labelledby="tab-c" tabindex="0" hidden>
      <dl class="dtable"><div><dt>募集職種</dt><dd>現在、中途求人募集は行っておりません。</dd></div><div><dt>エントリー方法</dt><dd>別途ご案内いたします。</dd></div><div><dt>連絡先</dt><dd>${common.連絡先}</dd></div></dl>
    </div>

    <details class="legacy" id="legacy">
      <summary>コーポレートサイト（/info/recruit/）掲載の募集要項（旧）</summary>
      <div class="legacy__body">
        <p class="note">旧コーポレートサイトの採用ページに掲載されていた内容です。最新の条件は上記の採用サイト掲載内容、または採用担当までお問い合わせください。</p>
        <h4>新卒募集要項</h4>
        <dl class="dtable"><div><dt>募集要項</dt><dd>総合職（営業、設計・開発）、製造スタッフ</dd></div><div><dt>待遇</dt><dd>昇給年１回、賞与年２回、社会保険完備、交通費全額支給、資格手当あり<br>退職金制度あり（勤続３年以上）、各種研修制度あり、健康診断（人間ドック）、<br>産休・育休、時短勤務制度、１時間単位の有給休暇制度、<br>制服貸与、福利厚生倶楽部（リロクラブ）加入</dd></div><div><dt>給与</dt><dd>【高卒】168,000円<br>【短大・専門卒】188,000円<br>【大卒】208,000円</dd></div><div><dt>勤務地</dt><dd>栃木県栃木市（※原則、引っ越しを伴う転勤はありません）</dd></div><div><dt>勤務時間</dt><dd>8:15～17:00（所定労働時間7時間40分）</dd></div><div><dt>休日・休暇</dt><dd>土曜･日曜･祝日GW･夏季･年末年始他・年間休日120日以上</dd></div><div><dt>連絡先</dt><dd>経営企画室 採用担当までご連絡ください。<br>TEL：${SITE.tokyoTel}<br>E-mail：<a href="mailto:${SITE.recruitMail}">${SITE.recruitMail}</a></dd></div></dl>
        <h4>キャリア募集要項</h4>
        <dl class="dtable"><div><dt>募集要項</dt><dd>製造スタッフ</dd></div><div><dt>待遇</dt><dd>新卒募集要項と同じ</dd></div><div><dt>給与</dt><dd>18～24万円（経験、能力による）</dd></div><div><dt>勤務地</dt><dd>栃木県栃木市（※原則、引っ越しを伴う転勤はありません）</dd></div><div><dt>勤務時間</dt><dd>8:15～17:00（所定労働時間7時間40分）</dd></div><div><dt>休日・休暇</dt><dd>土曜･日曜･祝日GW･夏季･年末年始他・年間休日120日以上</dd></div></dl>
      </div>
    </details>
  </div>
</section>

<section class="rband" id="entry" aria-labelledby="entry-title">
  <div class="rband__grid">
    <div class="rband__img">${img(r, 'bending-operator', 'プレスブレーキを操作する社員', { sizes: '(min-width:900px) 55vw, 100vw' })}</div>
    <div class="rband__body">
      <p class="rband__en" aria-hidden="true">Entry.</p>
      <h2 class="rband__ttl" id="entry-title">エントリー・お問い合わせ</h2>
      <p class="rband__tx">新卒採用はマイナビよりエントリーしてください。ご質問は経営企画室 採用担当までお気軽にどうぞ。</p>
      <div class="btn-row">${btn('https://job.mynavi.jp/27/pc/search/corp253705/outline.html', 'マイナビ2027でエントリー', { external: true })}${btn(`mailto:${SITE.recruitMail}`, SITE.recruitMail, { icon: false })}</div>
      <p class="rband__tx" style="font-size:.9rem">株式会社 長村製作所 経営企画室：採用担当<br>TEL：${SITE.tokyoTel}　FAX：${SITE.tokyoFax}<br>${SITE.tokyoZip} 東京都豊島区東池袋1-21-11 オーク池袋ビル5F</p>
      <p class="rband__tx" style="font-size:.8rem;opacity:.85">お知らせ：採用サイトを開設しました。</p>
    </div>
  </div>
</section>
`,
    };
  },
};
