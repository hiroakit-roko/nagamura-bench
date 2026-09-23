import { img, heading, pageHero, localNav, cta } from '../helpers.mjs';

const policies = [
  ['人を大切にする', '目配り・気配り・心配りを実践し、思いやりの心で応対します。'],
  ['チャレンジ', '私達は常にチャレンジし続け、チャレンジャーに寛容な姿勢である。'],
  ['ユニークな価値', '当たり前であることに常に疑問を持ち、新しさはあるのか問い続ける。'],
  ['つよく', '新たな事を実現するために「人・組織・会社」として強さを持ち続ける。'],
  ['おもしろく', '相手を否定せず「どうしたらできるのか」前向きに取組み愉しむ。'],
];
const principles = [
  ['製品・サービス', '顧客の立場になり製品の利用状況を常に調査・分析・検証を徹底し常に最高の「誠意・知恵・技術」で期待を超える新しい価値を提供する。'],
  ['顧客・取引先', '全ての お客様・取引先と一生お付き合いができる関係作りを目指す。'],
  ['社員', '一人ひとりが全力を尽くし最後まで結果に責任を持ちます。'],
  ['会社', '社員が進化しながら豊かな人生を実現できる高ES職場を目指します。'],
  ['地域・社会', '地域の方々と信頼を築き、明るい地域社会作りに貢献する。'],
];

const body = `
${pageHero({ en: 'MANAGEMENT', ja: '経営方針', lead: '仕事への責任と誇りを道標に。長村製作所の経営理念、基本方針、行動理念、ビジョン。', image: 'photo/team', crumbs: [{ label: '経営方針' }] })}
${localNav([['#philosophy', '経営理念'], ['#policies', '5つの基本方針'], ['#principles', '5つの行動理念'], ['#vision', 'ビジョン'], ['#privacy', '個人情報保護方針']])}

<section class="section section--dark section--grid" id="philosophy" aria-labelledby="ph-title">
  <div class="container">
    <div class="reveal">${heading({ num: '01', en: 'PHILOSOPHY', ja: '経営理念' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="ph-title">')}</div>
    <blockquote class="quote reveal">私達は仕事への責任と誇りを道標（みちしるべ）に、<br>全従業員の物心両面の豊かさを追求すると共に、<br>社会の進歩発展に貢献する。</blockquote>
    <div class="grid-2 mt-5" data-stagger>
      <figure class="fig">${img('photo/factory-wide', '長村製作所 工場内', { sizes: '(min-width: 800px) 50vw, 100vw' })}<figcaption>本社工場</figcaption></figure>
      <figure class="fig">${img('photo/team', '長村製作所の社員', { sizes: '(min-width: 800px) 50vw, 100vw' })}<figcaption>ものづくりを担う社員たち</figcaption></figure>
    </div>
  </div>
</section>

<section class="section section--light section--grid" id="policies" aria-labelledby="po-title">
  <div class="container">
    <div class="reveal">${heading({ num: '02', en: 'FIVE BASIC POLICIES', ja: '5つの基本方針', tone: 'light' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="po-title">')}</div>
    <ul class="policy-grid" data-stagger>${policies.map(([t, d]) => `<li class="policy"><h3 class="policy__title">${t}</h3><p class="policy__text">${d}</p></li>`).join('')}</ul>
  </div>
</section>

<section class="section section--dark-2" id="principles" aria-labelledby="pr-title">
  <div class="container">
    <div class="reveal">${heading({ num: '03', en: 'FIVE PRINCIPLES OF ACTION', ja: '5つの行動理念' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="pr-title">')}</div>
    <ul class="policy-grid" data-stagger>${principles.map(([t, d]) => `<li class="policy"><h3 class="policy__title">${t}</h3><p class="policy__text">${d}</p></li>`).join('')}</ul>
  </div>
</section>

<section class="section section--dark" id="vision" aria-labelledby="vi-title">
  <div class="container">
    <div class="reveal">${heading({ num: '04', en: 'VISION', ja: 'ビジョン' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="vi-title">')}</div>
    <div class="vision reveal">
      <div class="vision__bg">${img('hero/welding', '', { sizes: '100vw' })}</div>
      <p class="vision__text">小さくとも<em>キラリと光る</em><br>長村製作所</p>
    </div>
  </div>
</section>

<section class="section section--light" id="privacy" aria-labelledby="pv-title">
  <div class="container">
    <div class="reveal">${heading({ num: '05', en: 'PRIVACY POLICY', ja: '個人情報保護方針', tone: 'light', lead: '株式会社長村製作所（以下 当社といいます。）は、個人情報保護法その他関連法令等を遵守し、当社の保有するお客様を特定できる情報（以下、個人情報といいます）を適正に取り扱うことが企業の重要な社会的責務であるとの認識に立ち、以下のとおり個人情報保護に関する基本方針を定めております。' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="pv-title">')}</div>
    <div class="privacy maxw reveal">
      <ol>
        <li><h3>個人情報の取得</h3><p>当社は、適法かつ公正な手段によって個人情報を取得します。</p></li>
        <li><h3>個人情報の利用</h3><p>当社は、特定した利用目的の範囲内で、業務上必要な限りにおいて個人情報を利用します。また目的外の利用は行わず、そのために必要な措置を講じます。</p></li>
        <li><h3>個人情報の提供</h3><p>当社は、本人の同意がある場合、法令に基づく場合を除き、個人情報を第三者に提供しません。</p></li>
        <li><h3>個人情報の安全管理措置</h3><p>当社は、取り扱う個人情報の紛失、き損、改ざん及び漏洩等の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。</p></li>
        <li><h3>個人情報の開示・訂正等について</h3><p>当社はご本人から自己の個人情報についての開示の請求がある場合、速やかに開示を致します。その際、ご本人であることが確認できない場合には、開示に応じません。</p></li>
        <li><h3>個人情報保護に関する法令等の遵守</h3><p>当社は、個人情報保護に関する法令、国が定める方針及びその他規範を遵守します。</p></li>
      </ol>
    </div>
  </div>
</section>
${cta()}
`;

export default { slug: 'management', title: '経営方針', description: '株式会社長村製作所の経営理念、5つの基本方針、5つの行動理念、ビジョン「小さくともキラリと光る長村製作所」、個人情報保護方針。', body };
