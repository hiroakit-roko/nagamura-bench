import { img, heading, pageHero, localNav, cta, btn, youtube } from '../helpers.mjs';

const body = `
${pageHero({ en: 'TECHNOLOGY', ja: '技術情報', lead: '金属板金加工、各種溶接、組立・検査、協力工場との表面処理まで。長村製作所の技術をご紹介します。', image: 'hero/laser', crumbs: [{ label: '技術情報' }] })}
${localNav([['#sheet-metal', '金属板金加工'], ['#welding', '溶接加工'], ['#robot', 'ロボット溶接'], ['#assembly', '組立・検査'], ['#partners', '協力工場']])}

<section class="section section--dark section--grid" id="sheet-metal" aria-labelledby="sm-title">
  <div class="container">
    <div class="reveal">${heading({ num: '01', en: 'SHEET METAL', ja: '金属板金加工は長村製作所の得意分野です！<br>多種多様なお客様からのご依頼にお応えします', lead: '複合機、NCタレパン加工機、NCベンダー機等を保有しており、特にレーザー加工においては、豊富な技術とノウハウを有しています。金属板金加工のことなら、長村製作所にお任せください！' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="sm-title">')}</div>
    <ul class="grid-3" data-stagger>
      ${[['tech-01', '複合機'], ['tech-02', 'NCタレパン加工機'], ['tech-03', 'NCベンダー']].map(([im, t]) => `<li><figure class="fig">${img('photo/' + im, t)}<figcaption>${t}</figcaption></figure></li>`).join('')}
    </ul>
    <div class="mt-6 reveal">
      <p class="eyebrow"><span class="eyebrow__en">MATERIALS &amp; RANGE — 素材・加工範囲</span></p>
      <ul class="numbers numbers--3">
        <li class="num"><span class="num__label">Steel</span><span class="num__value">0.6<small>〜6.0mm</small></span><span class="num__ja">鉄</span><span class="num__note">板厚：0.6mm ～ 6.0mm ※4×8サイズ迄</span></li>
        <li class="num"><span class="num__label">Stainless</span><span class="num__value">0.5<small>〜6.0mm</small></span><span class="num__ja">ステンレス</span><span class="num__note">板厚：0.5mm ～ 6.0mm ※4×8サイズ迄</span></li>
        <li class="num"><span class="num__label">Aluminum</span><span class="num__value">0.8<small>〜6.0mm</small></span><span class="num__ja">アルミ</span><span class="num__note">板厚：0.8mm ～ 6.0mm ※4×8サイズ迄</span></li>
      </ul>
    </div>
  </div>
</section>

<section class="section section--light" id="welding" aria-labelledby="wd-title">
  <div class="container">
    <div class="reveal">${heading({ num: '02', en: 'WELDING', ja: '溶接ロボットラインによる自動化・省力化設備で<br>溶接加工の安定供給を実現しています', tone: 'light', lead: '長村製作所では、鉄、ステンレス、アルミなど、素材と用途に合わせて溶接方法の調整等を行い、強度のある美しい製品を製作します。弊社の強み・特徴でもある大型製品の溶接は、強度を十分に保つことを考慮しながら、美しく仕上げます。' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="wd-title">')}</div>
    <ul class="grid-3" data-stagger>
      ${[['tech-04', 'スポット溶接'], ['tech-05', 'アルゴン溶接'], ['tech-06', 'アーク溶接']].map(([im, t]) => `<li><figure class="fig">${img('photo/' + im, t)}<figcaption>${t}</figcaption></figure></li>`).join('')}
    </ul>
  </div>
</section>

<section class="section section--dark" id="robot" aria-labelledby="rb-title">
  <div class="container split split--wide-img">
    <div class="split__body reveal">
      ${heading({ num: '03', en: 'ROBOT WELDING', ja: 'ロボット溶接について' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="rb-title">')}
      <p>長村製作所ではロボット溶接機を導入しており、品質の安定化だけではなく、手作業では難しいスピードとコストメリットの維持に努めています。</p>
      <figure class="fig mt-4" style="max-width:400px">${img('photo/tech-07', '6軸関節形アーク溶接ロボット')}<figcaption>6軸関節形アーク溶接ロボット（YA-IMMR61）4台</figcaption></figure>
    </div>
    <div class="reveal">${youtube('xfs6-VBcCpQ', 'ロボット溶接の様子', 'photo/eq-weld-1')}<p class="note mt-2">動画：ロボット溶接ライン（YouTube）</p></div>
  </div>
</section>

<section class="section section--light section--grid" id="assembly" aria-labelledby="as-title">
  <div class="container">
    <div class="reveal">${heading({ num: '04', en: 'ASSEMBLY & INSPECTION', ja: '匠の技が光る、<br>長村製作所の誇る技術の1つです', tone: 'light' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="as-title">')}</div>
    <div class="split mb-5">
      <div class="split__body reveal">
        <h3>多種多様な組立作業</h3>
        <p>長村製作所では、箱物板金製品の組立作業も全て社内で行っています。大型の箱物を得意とし、組立について匠の技が光ります。加工や溶接だけではない、長村製作所の特徴の1つです。</p>
      </div>
      <div class="grid-2" data-stagger>
        <figure class="fig">${img('photo/tech-08', '組立する作業風景01')}<figcaption>組立作業</figcaption></figure>
        <figure class="fig">${img('photo/tech-09', '組立する作業風景02')}<figcaption>組立作業</figcaption></figure>
      </div>
    </div>
    <div class="split split--rev">
      <div class="split__body reveal">
        <h3>女性の活躍が光る組立・検査</h3>
        <p>長村製作所では、女性ならではの組立作業や、きめ細かい徹底したチェックを行っています。厳しい目で組立や品質のチェックを行ったのち、自信をもってお客様に製品をお届けいたします。</p>
      </div>
      <div class="grid-2" data-stagger>
        <figure class="fig">${img('photo/tech-11', '女性の作業風景01')}<figcaption>組立・検査</figcaption></figure>
        <figure class="fig">${img('photo/tech-10', '女性の作業風景02')}<figcaption>組立・検査</figcaption></figure>
      </div>
    </div>
  </div>
</section>

<section class="section section--dark section--grid" id="partners" aria-labelledby="pt-title">
  <div class="container split">
    <div class="split__body reveal">
      ${heading({ num: '05', en: 'PARTNER FACTORIES', ja: '協力工場との横のつながりを<br>大切にしています' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="pt-title">')}
      <h3>表面処理もお任せください!</h3>
      <p>長村製作所は協力工場にて塗装を行っています。弊社は横のつながりを強化することにより、作業依頼を提供しあうことで技術の共有等を行っています。</p>
      <p class="mt-4">${btn('equipment.html', '設備概要を見る', 'btn--line')}</p>
    </div>
    <figure class="fig img-reveal">${img('photo/tech-12', '塗装後のラック')}<figcaption>塗装後のラック</figcaption></figure>
  </div>
</section>
${cta()}
`;

export default { slug: 'technology', title: '技術情報', description: '長村製作所の技術情報：金属板金加工（複合機・NCタレパン・NCベンダー、鉄0.6〜6.0mm／ステンレス0.5〜6.0mm／アルミ0.8〜6.0mm）、各種溶接・ロボット溶接、組立・検査、協力工場での表面処理。', body };
