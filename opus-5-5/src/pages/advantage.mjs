import { img, head, pageHero, toc, btn } from '../lib.mjs';

export default {
  path: 'advantage/',
  render(r) {
    return {
      title: '長村製作所の強み',
      description: '長村製作所の強み。設計から出荷まで一貫対応するトータルソリューション、職人の技と若手の活躍、ISO9001・ISO14001に基づく品質と環境への取り組み。',
      body: `
${pageHero(r, { no: 'COMPANY / 01', en: 'Advantage', ja: '長村製作所の強み', image: 'adv01', crumbs: [{ label: '長村製作所の強み' }], lead: '最新鋭の設備とその設備を使いこなす経験。高い技術力でお客様のニーズにお応えします。' })}
${toc([['total', 'トータルソリューション'], ['speed', '短納期対応'], ['craft', '職人の技・若手の活躍'], ['quality', '品質と環境への取り組み']])}

<section class="sec" aria-labelledby="intro-title">
  <div class="wrap split">
    <div>${head({ no: '00', en: 'Overview', ja: '最新鋭の設備と<br>その設備を使いこなす経験', id: 'intro-title' })}</div>
    <div class="prose">
      <p class="lead-l rv">高い技術力でお客様のニーズにお応えします</p>
      <p class="rv" style="margin-top:1.4em">精密板金加工を得意とする長村製作所では、試作から、単品・量産にも柔軟に対応できる金属板金加工設備の体制を整えています。お客様のご要望に応えるため、今まで培われたノウハウがございます。綿密なお打ち合わせのもと、金属板金加工の設計・開発・製造から、塗装・検査・出荷まで一貫して対応可能です。</p>
    </div>
  </div>
</section>

<section class="sec sec--ink2" id="total" aria-labelledby="total-title">
  <div class="wrap">
    ${head({ no: '01', en: 'Total Solution', ja: 'トータルソリューション', lead: '設計から出荷まで一貫対応', id: 'total-title' })}
    <ol class="flow" data-stagger>
      <li><span class="flow__img">${img(r, 'flow01', '設計・開発の様子', { sizes: '130px' })}</span><span><small>DESIGN</small><b>設計・開発</b></span></li>
      <li><span class="flow__img">${img(r, 'flow02', '製造（溶接ロボットライン）', { sizes: '130px' })}</span><span><small>MANUFACTURING</small><b>製 造</b></span></li>
      <li><span class="flow__img">${img(r, 'flow03', '塗装を終えた製品', { sizes: '130px' })}</span><span><small>COATING</small><b>塗 装</b></span></li>
      <li><span class="flow__img">${img(r, 'flow04', '検査の様子', { sizes: '130px' })}</span><span><small>INSPECTION</small><b>検 査</b></span></li>
      <li><span class="flow__img">${img(r, 'flow05', 'フォークリフトによる出荷作業', { sizes: '130px' })}</span><span><small>SHIPPING</small><b>出 荷</b></span></li>
    </ol>
    <div class="split" style="margin-top:clamp(56px,7vw,100px)">
      <div class="rv">
        <p class="lead-l">お客様から多種多様なご依頼、その中で要求が高くなる部分は、やはり短納期・低コスト。<br>その課題を克服するのが長村製作所の一貫生産体制です。</p>
      </div>
      <div class="prose rv">
        <p>長村製作所では、多種多様なご依頼に設計から、製造、検査、梱包・出荷にまで、社内にて一貫で対応できることが、長村製作所の特徴・強みです。ご相談・ご要望でもお受けいたします。短納期など納期に関しても、お気軽にご相談ください。</p>
        <p class="sh__meta" style="margin:36px 0 14px"><span class="sh__no">MATERIAL</span><span class="sh__line"></span>対応素材</p>
        <ul class="materials"><li><span>鉄<small>IRON</small></span></li><li><span>ステンレス<small>STAINLESS</small></span></li><li><span>アルミ<small>ALUMINUM</small></span></li></ul>
        <p class="note" style="margin-top:14px">※塗装は協力工場との連携により対応しています（<a href="${r}technology/#partner" style="text-decoration:underline">協力工場について</a>）。</p>
      </div>
    </div>
  </div>
</section>

<section class="sec is-light" id="speed" aria-labelledby="speed-title">
  <div class="wrap split split--rev">
    <div>
      ${head({ no: '02', en: 'Quick Delivery', ja: '短納期対応で<br>多くの評価を頂いています', id: 'speed-title' })}
      <div class="prose">
        <p class="rv">製造業では、「短納期対応」が非常に重要になっています。弊社も、夕方頃にお問い合わせを頂き「明日までに納品をお願いしたい」といったケースもしばしばあります。</p>
        <p class="rv">長村製作所では、常に最新の設備の導入を行ったり、多種多様な仕事のなかで迅速な短納期への対応を培っています。<br>また独自の管理システムにより、工程を把握できる体制になっています。<br>この独自システムも長村製作所の短納期対応の基盤となっています。他社で断られてしまった場合でも、ぜひまずはお気軽にお問い合わせください！</p>
        <p class="rv" style="margin-top:32px">${btn(r + 'contact/', 'お問合せはこちら', { variant: 'btn--red' })}</p>
      </div>
    </div>
    <figure class="figure rv-img sticky-col" style="aspect-ratio:4/3">${img(r, 'adv01', '溶接ロボットラインのある工場内', { sizes: '(min-width:960px) 40vw, 100vw' })}</figure>
  </div>
</section>

<section class="sec" id="craft" aria-labelledby="craft-title">
  <div class="wrap split">
    <div class="sticky-col">
      ${head({ no: '03', en: 'Craftsmanship', ja: '職人の技・<br>若手の活躍', id: 'craft-title' })}
      <figure class="figure rv-img" style="aspect-ratio:3/2">${img(r, 'adv02', '図面を確認するベテラン社員と若手社員', { sizes: '(min-width:960px) 36vw, 100vw' })}</figure>
    </div>
    <div class="prose">
      <p class="lead-l rv">長村製作所では、職人の育成に力をいれています。長年培ってきた技術やノウハウを留めず、常に若手社員への技術継承に努めています。</p>
      <p class="rv" style="margin-top:1.6em">工場では特に受け身の姿勢の人は必要ありません。例えば、数百名働いているような大手企業の工場であれば、受け身の姿勢の人であっても必要とされます。しかし中小製造業では、生産品目が多種多様であり、作業者が1つの工程・作業だけではなく、複数工程を受け持つことがある等、多様な業務をこなすことが若手社員でも求められることが多々あります。長村製作所では、ベテラン社員が培ってきた技術・ノウハウを若手社員の技術継承に力を入れています。</p>
      <div class="gallery" style="margin-top:40px;grid-template-columns:1fr 1fr" data-lb-group>
        <figure class="rv">${img(r, 'adv03', 'CADで設計を行う若手社員', { sizes: '(min-width:960px) 25vw, 50vw', lb: 'CADで設計を行う若手社員' })}</figure>
        <figure class="rv" style="--d:.1s">${img(r, 'team', '長村製作所の社員', { sizes: '(min-width:960px) 25vw, 50vw', lb: '長村製作所の社員' })}</figure>
      </div>
    </div>
  </div>
</section>

<section class="sec is-light" id="quality" aria-labelledby="quality-title">
  <div class="wrap split">
    <div>
      ${head({ no: '04', en: 'Quality & Environment', ja: '品質と環境への取り組み', id: 'quality-title' })}
      <p class="rv prose">長村製作所は、お客様の安心をお届けするため、品質マネジメントシステムの国際規格である「ISO：9001」および、環境マネジメントシステムの国際規格である「ISO：14001」を認証取得しています。当社では以下のISO規格に基づいた品質の保証や環境への配慮を継続して国際規格に順応できるよう、日々努めてまいります。</p>
      <dl class="dtable rv" style="margin-top:36px">
        <div><dt>ISO9001</dt><dd>1998年07月 取得</dd></div>
        <div><dt>ISO14001</dt><dd>2001年02月 取得</dd></div>
      </dl>
    </div>
    <div class="certs" data-lb-group>
      <figure class="cert rv">${img(r, 'houshin', '品質・環境方針', { sizes: '(min-width:960px) 16vw, 33vw', lb: '品質・環境方針' })}<p>品質・環境方針</p></figure>
      <figure class="cert rv" style="--d:.1s">${img(r, 'iso9001', 'ISO9001 登録証', { sizes: '(min-width:960px) 16vw, 33vw', lb: 'ISO9001' })}<p>ISO9001</p></figure>
      <figure class="cert rv" style="--d:.2s">${img(r, 'iso14001', 'ISO14001 登録証', { sizes: '(min-width:960px) 16vw, 33vw', lb: 'ISO14001' })}<p>ISO14001</p></figure>
    </div>
  </div>
</section>
`,
    };
  },
};
