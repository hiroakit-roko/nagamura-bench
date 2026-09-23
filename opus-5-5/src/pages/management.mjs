import { img, head, pageHero, toc, btn } from '../lib.mjs';
import { PRIVACY } from '../data.mjs';

export default {
  path: 'management/',
  render(r) {
    return {
      title: '経営方針',
      description: '長村製作所の経営方針。経営理念、5つの基本方針、5つの行動理念、ビジョン「小さくともキラリと光る長村製作所」、個人情報保護方針。',
      body: `
${pageHero(r, { no: 'COMPANY / 02', en: 'Management', ja: '経営方針', image: 'team', crumbs: [{ label: '経営方針' }] })}
${toc([['philosophy', '経営理念'], ['policy', '5つの基本方針'], ['action', '5つの行動理念'], ['vision', 'ビジョン'], ['privacy', '個人情報保護方針']])}

<section class="sec" id="philosophy" aria-labelledby="ph-title">
  <div class="wrap">
    ${head({ no: '01', en: 'Philosophy', ja: '経営理念', align: 'center', id: 'ph-title' })}
    <div class="creed rv">
      <p class="creed__tx">私達は仕事への<em>責任と誇り</em>を<ruby>道標<rt>みちしるべ</rt></ruby>に、<br>全従業員の<em>物心両面の豊かさ</em>を追求すると共に、<br>社会の進歩発展に貢献する。</p>
    </div>
    <div class="gallery" style="margin-top:56px;grid-template-columns:1fr 1fr" data-lb-group>
      <figure class="rv-img" style="aspect-ratio:3/2;overflow:hidden">${img(r, 'floor', '長村製作所の工場内', { sizes: '50vw', lb: '長村製作所の工場内' })}</figure>
      <figure class="rv-img" style="--d:.15s;aspect-ratio:3/2;overflow:hidden">${img(r, 'team', '長村製作所の社員', { sizes: '50vw', lb: '長村製作所の社員' })}</figure>
    </div>
  </div>
</section>

<section class="sec is-light" id="policy" aria-labelledby="po-title">
  <div class="wrap">
    ${head({ no: '02', en: 'Basic Policy', ja: '5つの基本方針', id: 'po-title' })}
    <ol class="policy" data-stagger>
      <li><h3>人を大切にする</h3><p>目配り・気配り・心配りを実践し、思いやりの心で応対します。</p></li>
      <li><h3>チャレンジ</h3><p>私達は常にチャレンジし続け、チャレンジャーに寛容な姿勢である。</p></li>
      <li><h3>ユニークな価値</h3><p>当たり前であることに常に疑問を持ち、新しさはあるのか問い続ける。</p></li>
      <li><h3>つよく</h3><p>新たな事を実現するために「人・組織・会社」として強さを持ち続ける。</p></li>
      <li><h3>おもしろく</h3><p>相手を否定せず「どうしたらできるのか」前向きに取組み愉しむ。</p></li>
    </ol>
  </div>
</section>

<section class="sec" id="action" aria-labelledby="ac-title">
  <div class="wrap">
    ${head({ no: '03', en: 'Code of Conduct', ja: '5つの行動理念', id: 'ac-title' })}
    <ol class="policy" data-stagger>
      <li><h3>製品・サービス</h3><p>顧客の立場になり製品の利用状況を常に調査・分析・検証を徹底し常に最高の「誠意・知恵・技術」で期待を超える新しい価値を提供する。</p></li>
      <li><h3>顧客・取引先</h3><p>全ての お客様・取引先と一生お付き合いができる関係作りを目指す。</p></li>
      <li><h3>社員</h3><p>一人ひとりが全力を尽くし最後まで結果に責任を持ちます。</p></li>
      <li><h3>会社</h3><p>社員が進化しながら豊かな人生を実現できる高ES職場を目指します。</p></li>
      <li><h3>地域・社会</h3><p>地域の方々と信頼を築き、明るい地域社会作りに貢献する。</p></li>
    </ol>
  </div>
</section>

<section class="vision" id="vision" aria-labelledby="vi-title">
  <div class="vision__bg" data-parallax=".3" aria-hidden="true">${img(r, 'floor', '', { sizes: '100vw' })}</div>
  <div class="vision__inner">
    <p class="sh__meta"><span class="sh__no">04</span><span class="sh__line"></span><span>Vision</span></p>
    <h2 class="sr-only" id="vi-title">ビジョン</h2>
    <p class="vision__tx rv">小さくとも<br class="sp"><span class="kira">キラリ<span class="kira-star" aria-hidden="true"></span></span>と光る<br>長村製作所</p>
  </div>
</section>

<section class="sec is-light" id="privacy" aria-labelledby="pr-title">
  <div class="wrap split">
    <div>${head({ no: '05', en: 'Privacy Policy', ja: '個人情報保護方針', id: 'pr-title' })}</div>
    <div>
      <p class="rv">${PRIVACY.intro}</p>
      <ol class="olist olist--plain" style="margin-top:32px">
        ${PRIVACY.items.map(([h, t]) => `<li><b>${h}</b><p>${t}</p></li>`).join('')}
      </ol>
    </div>
  </div>
</section>
`,
    };
  },
};
