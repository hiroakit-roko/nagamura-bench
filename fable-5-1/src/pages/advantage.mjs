import { img, imgUrl, heading, pageHero, localNav, cta, btn } from '../helpers.mjs';

const lightbox = `<dialog class="lb" id="lightbox" aria-label="画像の拡大表示"><div class="lb__inner"><img class="lb__img" src="" alt=""><p class="lb__cap"></p></div><button type="button" class="lb__close" aria-label="閉じる"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button></dialog>`;

const body = `
${pageHero({ en: 'ADVANTAGE', ja: '長村製作所の強み', lead: '最新鋭の設備とその設備を使いこなす経験。高い技術力でお客様のニーズにお応えします。', image: 'hero/factory', crumbs: [{ label: '長村製作所の強み' }] })}
${localNav([['#total-solution', 'トータルソリューション'], ['#lead-time', '短納期対応'], ['#craftsmanship', '職人の技・若手の活躍'], ['#quality', '品質と環境への取り組み']])}

<section class="section section--dark section--grid">
  <div class="container">
    <p class="lead reveal">精密板金加工を得意とする長村製作所では、試作から、単品・量産にも柔軟に対応できる金属板金加工設備の体制を整えています。お客様のご要望に応えるため、今まで培われたノウハウがございます。綿密なお打ち合わせのもと、金属板金加工の設計・開発・製造から、塗装・検査・出荷まで一貫して対応可能です。</p>
  </div>
</section>

<section class="section section--dark-2" id="total-solution" aria-labelledby="ts-title">
  <div class="container">
    <div class="reveal">${heading({ num: '01', en: 'TOTAL SOLUTION', ja: 'トータルソリューション', lead: '設計から出荷まで一貫対応' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="ts-title">')}</div>
    <ol class="flow" data-stagger>
      ${[['flow-1', '設計・開発', 'DESIGN'], ['flow-2', '製 造', 'MANUFACTURING'], ['flow-3', '塗 装', 'PAINTING'], ['flow-4', '検 査', 'INSPECTION'], ['flow-5', '出 荷', 'SHIPPING']].map(([im, t, en], i) => `<li class="flow__step"><div class="flow__img">${img('photo/' + im, t)}</div><p class="flow__num">STEP 0${i + 1} — ${en}</p><h3 class="flow__title">${t}</h3></li>`).join('')}
    </ol>
    <div class="split mt-6">
      <div class="split__body reveal">
        <h3>短納期・低コストという課題を克服する、一貫生産体制。</h3>
        <p>お客様から多種多様なご依頼、その中で要求が高くなる部分は、やはり短納期・低コスト。その課題を克服するのが長村製作所の一貫生産体制です。</p>
        <p>長村製作所では、多種多様なご依頼に設計から、製造、検査、梱包・出荷にまで、社内にて一貫で対応できることが、長村製作所の特徴・強みです。ご相談・ご要望でもお受けいたします。短納期など納期に関しても、お気軽にご相談ください。</p>
        <p class="eyebrow mt-4"><span class="eyebrow__en">MATERIALS — 対応素材</span></p>
        <ul class="chips" aria-label="対応素材">
          <li class="chip"><i></i>鉄<small>SPCC / SECC etc.</small></li>
          <li class="chip"><i></i>ステンレス<small>SUS</small></li>
          <li class="chip"><i></i>アルミ<small>AL</small></li>
        </ul>
      </div>
      <div class="split__img split__img--frame img-reveal">${img('hero/welding', '溶接作業', { sizes: '(min-width: 900px) 50vw, 100vw' })}</div>
    </div>
  </div>
</section>

<section class="section section--light" id="lead-time" aria-labelledby="lt-title">
  <div class="container split split--rev">
    <div class="split__body reveal">
      ${heading({ num: '02', en: 'QUICK DELIVERY', ja: '短納期対応で多くの評価を<br>頂いています', tone: 'light' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="lt-title">')}
      <p>製造業では、「短納期対応」が非常に重要になっています。弊社も、夕方頃にお問い合わせを頂き「明日までに納品をお願いしたい」といったケースもしばしばあります。</p>
      <p>長村製作所では、常に最新の設備の導入を行ったり、多種多様な仕事のなかで迅速な短納期への対応を培っています。</p>
      <p>また独自の管理システムにより、工程を把握できる体制になっています。この独自システムも長村製作所の短納期対応の基盤となっています。他社で断られてしまった場合でも、ぜひまずはお気軽にお問い合わせください！</p>
      <p class="mt-4">${btn('contact.html', 'まずは相談する', 'btn--accent')}</p>
    </div>
    <div class="split__img img-reveal">${img('photo/adv-factory', '工場設備風景', { sizes: '(min-width: 900px) 50vw, 100vw' })}</div>
  </div>
</section>

<section class="section section--dark section--grid" id="craftsmanship" aria-labelledby="cr-title">
  <div class="container">
    <div class="split">
      <div class="split__body reveal">
        ${heading({ num: '03', en: 'CRAFTSMANSHIP & YOUTH', ja: '職人の技・若手の活躍' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="cr-title">')}
        <p>長村製作所では、職人の育成に力をいれています。長年培ってきた技術やノウハウを留めず、常に若手社員への技術継承に努めています。</p>
        <p>工場では特に受け身の姿勢の人は必要ありません。例えば、数百名働いているような大手企業の工場であれば、受け身の姿勢の人であっても必要とされます。しかし中小製造業では、生産品目が多種多様であり、作業者が1つの工程・作業だけではなく、複数工程を受け持つことがある等、多様な業務をこなすことが若手社員でも求められることが多々あります。長村製作所では、ベテラン社員が培ってきた技術・ノウハウを若手社員の技術継承に力を入れています。</p>
      </div>
      <div class="grid-2" data-stagger>
        <figure class="fig">${img('photo/adv-meeting-1', '打合せ風景01')}<figcaption>打合せ風景</figcaption></figure>
        <figure class="fig">${img('photo/adv-meeting-2', '打合せ風景02')}<figcaption>設計・打合せ</figcaption></figure>
      </div>
    </div>
  </div>
</section>

<section class="section section--light" id="quality" aria-labelledby="q-title">
  <div class="container">
    <div class="reveal">${heading({ num: '04', en: 'QUALITY & ENVIRONMENT', ja: '品質と環境への取り組み', tone: 'light', lead: '長村製作所は、お客様の安心をお届けするため、品質マネジメントシステムの国際規格である「ISO：9001」および、環境マネジメントシステムの国際規格である「ISO：14001」を認証取得しています。当社では以下のISO規格に基づいた品質の保証や環境への配慮を継続して国際規格に順応できるよう、日々努めてまいります。' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="q-title">')}</div>
    <div class="flex mb-4 reveal"><span class="badge badge--accent">ISO 9001 — 1998年07月取得</span><span class="badge badge--accent">ISO 14001 — 2001年02月取得</span><span class="badge">屋外用公衆電話室・盤架類の設計、開発、販売</span></div>
    <ul class="docs" data-stagger>
      ${[['doc/iso-policy', '品質・環境方針'], ['doc/iso-9001', 'ISO9001 登録証'], ['doc/iso-14001', 'ISO14001 登録証']].map(([im, t]) => `<li class="doc"><button type="button" class="doc__img zoomable" data-lightbox="${imgUrl(im)}" data-caption="${t}" aria-label="${t}を拡大表示">${img(im, t, { sizes: '(min-width: 640px) 33vw, 50vw' })}</button><p class="doc__cap">${t}</p></li>`).join('')}
    </ul>
    <p class="note mt-3 text-center">画像をクリックすると拡大表示します。</p>
  </div>
</section>
${lightbox}
${cta()}
`;

export default { slug: 'advantage', title: '長村製作所の強み', description: '長村製作所の強み：設計から出荷まで一貫対応のトータルソリューション、短納期対応、職人の技と若手の活躍、ISO9001／ISO14001に基づく品質と環境への取り組み。', body };
