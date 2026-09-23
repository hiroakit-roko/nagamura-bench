import { heading, pageHero, cta, btn } from '../helpers.mjs';

const FAQ = [
  ['概算費用を知りたいのですが、どのようにすればよいですか？', '<p>まずは<a class="text-link" href="contact.html">メールでご連絡下さい</a>。折り返しご連絡させていただきます。</p><p>お急ぎの場合はお電話でも対応しております。</p>'],
  ['注文するのに基本的な製作数量はありますか？', '<p>1点からでも製作は可能です。</p>'],
  ['図面、手書きのイラスト等のデザイン画から試作品を作ることは可能ですか？', '<p>はい、可能です。不明な点につきましては詳細を確認しながら進めさせていただきます。</p>'],
  ['加工可能な板厚を素材ごとに教えてください。', '<p>鋼板 0.6～6.0mm<br>ステンレス板 0.5～6.0mm<br>アルミ板 0.8～6.0mm</p><p>形状による異なる可能性がありますのでお問い合わせ下さい。</p>'],
  ['どのような溶接が可能でしょうか？', '<p>当社ではTIG溶接、MIG溶接、ガス溶接、スポット溶接、スタッド溶接を行っております。</p>'],
  ['塗装やめっき加工も含めて依頼できますか？', '<p>はい。対応しております。</p><p>塗装やめっきの種類によっては対応できない場合もあります。</p>'],
  ['製作の納期を教えてください。', '<p>製品により納期は異なりますのでお問い合わせ下さい。</p>'],
  ['納品について対応していない地域はありますか？', '<p>全国対応しております。詳細はお問い合わせ下さい。</p>'],
];

export function accordion(items, prefix = 'faq', openFirst = true) {
  return `<div class="acc">${items.map(([q, a], i) => {
    const open = openFirst && i === 0;
    return `<div class="acc__item">
      <h3><button type="button" class="acc__btn" aria-expanded="${open}" aria-controls="${prefix}-${i}"><span class="acc__q" aria-hidden="true">Q</span><span>${q}</span><span class="acc__icon" aria-hidden="true"></span></button></h3>
      <div class="acc__panel" id="${prefix}-${i}"${open ? ' style="grid-template-rows:1fr"' : ' hidden'}><div class="acc__panel-inner"><div class="acc__body">${a}</div></div></div>
    </div>`;
  }).join('')}</div>`;
}

const body = `
${pageHero({ en: 'FAQ', ja: 'よくある質問', lead: '費用、数量、対応素材・板厚、溶接、塗装・めっき、納期、対応地域について。', image: 'hero/assembly', crumbs: [{ label: 'よくある質問' }] })}
<section class="section section--dark section--grid">
  <div class="container" style="max-width:920px">
    <div class="reveal">${accordion(FAQ)}</div>
    <div class="callout mt-5 reveal">ここに無いご質問は、お気軽にお問合せください。試作1点、図面・手描きのスケッチからのご相談、短納期のご相談も歓迎します。
      <div class="flex mt-3">${btn('contact.html', 'お問合せフォーム', 'btn--accent btn--sm')}<a class="link-arrow" href="tel:0282451341">0282-45-1341（受付 8:25〜17:00 平日）</a></div>
    </div>
  </div>
</section>
${cta()}
`;

export default { slug: 'faq', title: 'よくある質問', description: '長村製作所のよくある質問：概算費用、製作数量（1点から可）、図面・イラストからの試作、加工可能な板厚、対応溶接（TIG・MIG・ガス・スポット・スタッド）、塗装・めっき、納期、対応地域（全国）。', body };
