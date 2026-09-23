import { img, imgUrl, head, pageHero, toc, btn } from '../lib.mjs';

const RANGE = [
  ['鉄', 'IRON', 0.6, 6.0],
  ['ステンレス', 'STAINLESS', 0.5, 6.0],
  ['アルミ', 'ALUMINUM', 0.8, 6.0],
];

export default {
  path: 'technology/',
  render(r) {
    const card = (im, cap) => `<figure class="pcard2 rv">${`<div class="figure">${img(r, im, cap, { sizes: '(min-width:900px) 30vw, 100vw', lb: cap })}</div>`}<h4>${cap}</h4></figure>`;
    return {
      title: '技術情報',
      description: '長村製作所の技術情報。複合機・NCタレパン・NCベンダーによる金属板金加工（鉄0.6〜6.0mm／ステンレス0.5〜6.0mm／アルミ0.8〜6.0mm）、ロボット溶接を含む各種溶接加工、組立・検査、協力工場との連携。',
      body: `
${pageHero(r, { no: 'TECHNOLOGY / 01', en: 'Technology', ja: '技術情報', image: 'tech03', crumbs: [{ label: '技術情報' }], lead: '金属板金加工・溶接加工・組立・検査。そして協力工場との連携による表面処理まで。' })}
${toc([['sheetmetal', '金属板金加工'], ['welding', '溶接加工'], ['assembly', '組立・検査'], ['partner', '協力工場']])}

<section class="sec" id="sheetmetal" aria-labelledby="sm-title">
  <div class="wrap">
    ${head({ no: '01', en: 'Sheet Metal Fabrication', ja: '金属板金加工は長村製作所の得意分野です！', lead: '多種多様なお客様からのご依頼にお応えします', id: 'sm-title' })}
    <div class="split" style="margin-bottom:56px">
      <p class="lead-l rv">加工内容</p>
      <p class="rv prose">複合機、NCタレパン加工機、NCベンダー機等を保有しており、特にレーザー加工においては、豊富な技術とノウハウを有しています。金属板金加工のことなら、長村製作所にお任せください！</p>
    </div>
    <div class="cards3" data-lb-group>
      ${card('tech01', '複合機')}${card('tech02', 'NCタレパン加工機')}${card('tech03', 'NCベンダー')}
    </div>
    <div class="split" style="margin-top:clamp(64px,8vw,120px)">
      <div>
        <p class="sh__meta"><span class="sh__no">SPEC</span><span class="sh__line"></span><span>Material & Thickness</span></p>
        <h3 class="sh__ja" style="font-size:clamp(1.4rem,2.4vw,2rem);margin-top:14px">素材・加工範囲</h3>
        <p class="range__note" style="margin-top:14px">※いずれも4×8サイズ迄。形状により異なる可能性がありますのでお問い合わせ下さい。</p>
      </div>
      <div class="range" role="list">
        ${RANGE.map(([ja, en, a, b]) => `<div class="range__row" role="listitem"><p class="range__name">${ja}<small>${en}</small></p><div class="range__bar" aria-label="${ja} 板厚：${a.toFixed(1)}mm ～ ${b.toFixed(1)}mm ※4×8サイズ迄"><span class="range__fill" style="--from:${a};--to:${b}"></span><span class="range__val" aria-hidden="true">${a.toFixed(1)} – ${b.toFixed(1)} mm</span></div></div>`).join('')}
        <div class="range__axis" aria-hidden="true"><span></span><div><span>0</span><span>1.0</span><span>2.0</span><span>3.0</span><span>4.0</span><span>5.0</span><span>6.0mm</span></div></div>
      </div>
    </div>
  </div>
</section>

<section class="sec is-light" id="welding" aria-labelledby="we-title">
  <div class="wrap">
    ${head({ no: '02', en: 'Welding', ja: '溶接ロボットラインによる<br>自動化・省力化設備で<br>溶接加工の安定供給を実現しています', id: 'we-title' })}
    <div class="split" style="margin-bottom:56px">
      <p class="lead-l rv">各種溶接内容</p>
      <p class="rv prose">長村製作所では、鉄、ステンレス、アルミなど、素材と用途に合わせて溶接方法の調整等を行い、強度のある美しい製品を製作します。弊社の強み・特徴でもある大型製品の溶接は、強度を十分に保つことを考慮しながら、美しく仕上げます。</p>
    </div>
    <div class="cards3" data-lb-group>
      ${card('tech04', 'スポット溶接')}${card('tech05', 'アルゴン溶接')}${card('tech06', 'アーク溶接')}
    </div>
    <div class="split" style="margin-top:clamp(64px,8vw,120px);align-items:center">
      <div>
        <p class="sh__meta"><span class="sh__no">ROBOT</span><span class="sh__line"></span><span>Robotic Welding</span></p>
        <h3 class="sh__ja" style="font-size:clamp(1.4rem,2.4vw,2rem);margin:14px 0 18px">ロボット溶接について</h3>
        <p class="rv">長村製作所ではロボット溶接機を導入しており、品質の安定化だけではなく、手作業では難しいスピードとコストメリットの維持に努めています。</p>
        <figure class="pcard2 rv" style="margin-top:28px;max-width:320px"><div class="figure" style="aspect-ratio:1">${img(r, 'tech07', '6軸関節形アーク溶接ロボット', { sizes: '320px', lb: '6軸関節形アーク溶接ロボット' })}</div><h4>6軸関節形アーク溶接ロボット</h4></figure>
      </div>
      <div class="yt rv">
        <img src="${imgUrl(r, 'job-welding', 1440)}" alt="" loading="lazy">
        <button type="button" data-yt="xfs6-VBcCpQ" data-title="長村製作所 ロボット溶接の動画"><span class="play" aria-hidden="true"></span>ロボット溶接の動画を再生（YouTube）</button>
      </div>
    </div>
  </div>
</section>

<section class="sec" id="assembly" aria-labelledby="as-title">
  <div class="wrap">
    ${head({ no: '03', en: 'Assembly & Inspection', ja: '匠の技が光る、<br>長村製作所の誇る技術の1つです', id: 'as-title' })}
    <div class="tech">
      <article class="tech__row">
        <div class="tech__media"><div class="rv-img">${img(r, 'tech08', '箱物板金製品の組立作業', { sizes: '(min-width:900px) 50vw, 100vw' })}</div><div class="sub rv-img" style="--d:.2s" data-parallax=".2">${img(r, 'tech09', 'エアツールを用いた組立', { sizes: '22vw' })}</div></div>
        <div><p class="tech__en">ASSEMBLY</p><h3 class="tech__ttl">多種多様な組立作業</h3><p class="tech__tx">長村製作所では、箱物板金製品の組立作業も全て社内で行っています。大型の箱物を得意とし、組立について匠の技が光ります。加工や溶接だけではない、長村製作所の特徴の1つです。</p></div>
      </article>
      <article class="tech__row">
        <div class="tech__media"><div class="rv-img">${img(r, 'tech11', '女性スタッフによる組立作業', { sizes: '(min-width:900px) 50vw, 100vw' })}</div><div class="sub rv-img" style="--d:.2s" data-parallax=".2">${img(r, 'tech10', '女性スタッフによる検査・梱包', { sizes: '22vw' })}</div></div>
        <div><p class="tech__en">INSPECTION</p><h3 class="tech__ttl">女性の活躍が光る組立・検査</h3><p class="tech__tx">長村製作所では、女性ならではの組立作業や、きめ細かい徹底したチェックを行っています。厳しい目で組立や品質のチェックを行ったのち、自信をもってお客様に製品をお届けいたします。</p></div>
      </article>
    </div>
  </div>
</section>

<section class="sec sec--ink2" id="partner" aria-labelledby="pa-title">
  <div class="wrap split" style="align-items:center">
    <div>
      ${head({ no: '04', en: 'Partner Factories', ja: '協力工場との<br>横のつながりを大切にしています', id: 'pa-title' })}
      <h3 class="lead-l rv">表面処理もお任せください!</h3>
      <p class="rv" style="margin-top:1em">長村製作所は協力工場にて塗装を行っています。弊社は横のつながりを強化することにより、作業依頼を提供しあうことで技術の共有等を行っています。</p>
      <p class="rv" style="margin-top:32px">${btn(r + 'equipment/', '設備概要を見る')}</p>
    </div>
    <figure class="figure rv-img" style="aspect-ratio:3/2">${img(r, 'tech12', '塗装を終えた19インチラック', { sizes: '(min-width:960px) 55vw, 100vw' })}</figure>
  </div>
</section>
`,
    };
  },
};
