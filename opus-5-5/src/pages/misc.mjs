import { img, head, pageHero, btn, arrow, ext, SITE, telIcon } from '../lib.mjs';
import { NEWS, PRIVACY } from '../data.mjs';

const FAQ = [
  ['お見積り・ご依頼', '概算費用を知りたいのですが、どのようにすればよいですか？', (r) => `<p>まずは<a href="${r}contact/">メール</a>でご連絡下さい。<br>折り返しご連絡させていただきます。<br>お急ぎの場合はお電話でも対応しております。</p><p><a href="${SITE.telHref}">TEL：${SITE.tel}</a>（受付時間 ${SITE.hours}）</p>`],
  ['お見積り・ご依頼', '注文するのに基本的な製作数量はありますか？', () => '<p>1点からでも製作は可能です。</p>'],
  ['お見積り・ご依頼', '図面、手書きのイラスト等のデザイン画から試作品を作ることは可能ですか？', () => '<p>はい、可能です。不明な点につきましては詳細を確認しながら進めさせていただきます。</p>'],
  ['加工・技術', '加工可能な板厚を素材ごとに教えてください。', () => '<ul><li>鋼板 0.6～6.0mm</li><li>ステンレス板 0.5～6.0mm</li><li>アルミ板 0.8～6.0mm</li></ul><p>形状による異なる可能性がありますのでお問い合わせ下さい。</p>'],
  ['加工・技術', 'どのような溶接が可能でしょうか？', () => '<p>当社ではTIG溶接、MIG溶接、ガス溶接、スポット溶接、スタッド溶接を行っております。</p>'],
  ['加工・技術', '塗装やめっき加工も含めて依頼できますか？', () => '<p>はい。対応しております。<br>塗装やめっきの種類によっては対応できない場合もあります。</p>'],
  ['納期・納品', '製作の納期を教えてください。', () => '<p>製品により納期は異なりますのでお問い合わせ下さい。</p>'],
  ['納期・納品', '納品について対応していない地域はありますか？', () => '<p>全国対応しております。詳細はお問い合わせ下さい。</p>'],
];

const faq = {
  path: 'faq/',
  render(r) {
    const cats = [...new Set(FAQ.map((f) => f[0]))];
    return {
      title: 'よくある質問',
      description: '長村製作所へのよくある質問。概算費用の問い合わせ方法、1点からの製作、図面・手書きイラストからの試作、加工可能な板厚、溶接の種類、塗装・めっき、納期、納品地域（全国対応）。',
      body: `
${pageHero(r, { no: 'FAQ', en: 'FAQ', ja: 'よくある質問', image: 'adv03', crumbs: [{ label: 'よくある質問' }] })}
<section class="sec is-light" aria-labelledby="faq-title">
  <div class="wrap split">
    <div class="sticky-col">
      ${head({ no: '01', en: 'Questions', ja: 'お客様から<br>よくいただくご質問', id: 'faq-title' })}
      <nav class="faq-cat" aria-label="カテゴリ">${cats.map((c, i) => `<a class="tag" href="#faq-cat-${i}">${c}</a>`).join('')}</nav>
      <div class="info-box rv" style="margin-top:24px">
        <h3>解決しない場合はお気軽に</h3>
        <a class="bigtel" href="${SITE.telHref}">${telIcon}${SITE.tel}</a>
        <p class="note">受付時間 ${SITE.hours}</p>
        <p style="margin-top:16px">${btn(r + 'contact/', 'お問合せフォーム', { variant: 'btn--red' })}</p>
      </div>
    </div>
    <div>
      ${cats.map((c, i) => `<h3 class="lead-l" id="faq-cat-${i}" style="margin:${i ? '48px' : '0'} 0 16px;scroll-margin-top:120px">${c}</h3>
      <div class="faq">${FAQ.filter((f) => f[0] === c).map(([, q, a], j) => `<details class="rv"${i === 0 && j === 0 ? ' open' : ''}><summary><span class="faq__q" aria-hidden="true">Q</span><span>${q}</span><span class="faq__icon" aria-hidden="true"></span></summary><div class="faq__body"><span class="faq__a" aria-hidden="true">A</span><div>${a(r)}</div></div></details>`).join('')}</div>`).join('')}
    </div>
  </div>
</section>
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map(([, q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a('../').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() } })) })}</script>
`,
    };
  },
};

const news = {
  path: 'news/',
  render(r) {
    return {
      title: '新着情報',
      description: '株式会社長村製作所からのお知らせ・新着情報。',
      body: `
${pageHero(r, { no: 'NEWS', en: 'News', ja: '新着情報', image: 'floor', crumbs: [{ label: '新着情報' }] })}
<section class="sec is-light" aria-labelledby="news-title">
  <div class="wrap split">
    <div>${head({ no: '01', en: 'Information', ja: 'お知らせ', id: 'news-title' })}</div>
    <div>
      ${NEWS.map((n) => `<article class="article rv" id="n${n.date}"><time datetime="${n.date}">${n.date.replace(/-/g, '.')}</time><h2>${n.title}</h2>${n.body.map((p) => `<p>${p}</p>`).join('')}</article>`).join('')}
      <div class="info-box rv" style="margin-top:56px">
        <h3>製品ブランドのお知らせ</h3>
        <p class="note" style="margin-bottom:12px">Monobo（テレワークブース）の最新情報は、Monobo公式サイトのお知らせで発信しています。</p>
        <ul class="posts">
          ${[
            ['2026-08-24', '【メディア掲載情報】『Monobo フェルーチェ』が日刊工業新聞に掲載されました', 'https://nagamura.co.jp/monobo/info/277/'],
            ['2026-04-24', '【展示会出展決定！！】5月15日(金)ものづくり企業フォーラム2026', 'https://nagamura.co.jp/monobo/info/256/'],
            ['2025-10-02', 'より便利に、より分かりやすく。ホームページ一新‼️', 'https://nagamura.co.jp/monobo/info/42/'],
            ['2025-10-02', '10月21日(火)ものづくり企業展示・商談会2025出展決定！', 'https://nagamura.co.jp/monobo/press-release/44/'],
            ['2025-10-02', 'Monoboがテレビ番組に出演‼️', 'https://nagamura.co.jp/monobo/press-release/204/'],
          ].map(([d, t, u]) => `<li><a class="post" href="${u}" target="_blank" rel="noopener"><time datetime="${d}">${d.replace(/-/g, '.')}</time><span class="post__t">${t}</span>${ext}<span class="sr-only">（Monobo公式サイト・新しいタブ）</span></a></li>`).join('')}
        </ul>
      </div>
    </div>
  </div>
</section>
`,
    };
  },
};

const privacy = {
  path: 'privacy/',
  render(r) {
    return {
      title: '個人情報保護方針',
      description: '株式会社長村製作所の個人情報保護方針。',
      body: `
${pageHero(r, { no: 'PRIVACY', en: 'Privacy', ja: '個人情報保護方針', crumbs: [{ label: '個人情報保護方針' }] })}
<section class="sec is-light" aria-labelledby="pv-title">
  <div class="wrap split">
    <div>${head({ no: '01', en: 'Privacy Policy', ja: '個人情報保護に関する<br>基本方針', id: 'pv-title' })}</div>
    <div>
      <p>${PRIVACY.intro}</p>
      <ol class="olist olist--plain" style="margin-top:32px">${PRIVACY.items.map(([h, t]) => `<li><b>${h}</b><p>${t}</p></li>`).join('')}</ol>
      <p style="margin-top:40px">${btn(r + 'management/', '経営方針を見る')}</p>
    </div>
  </div>
</section>
`,
    };
  },
};

const sitemap = {
  path: 'sitemap/',
  render(r) {
    const L = (h, l, sub = []) => `<li><a href="${r}${h}">${l}${arrow}</a>${sub.length ? `<ul>${sub.map(([sh, sl]) => `<li><a href="${r}${sh}">${sl}${arrow}</a></li>`).join('')}</ul>` : ''}</li>`;
    const X = (h, l) => `<li><a href="${h}" target="_blank" rel="noopener">${l}${ext}<span class="sr-only">（外部サイト）</span></a></li>`;
    return {
      title: 'サイトマップ',
      description: '株式会社長村製作所 Webサイトのサイトマップ。',
      body: `
${pageHero(r, { no: 'SITEMAP', en: 'Sitemap', ja: 'サイトマップ', crumbs: [{ label: 'サイトマップ' }] })}
<section class="sec" aria-label="サイトマップ">
  <div class="wrap smap">
    <div><h2>COMPANY</h2><ul>${L('', 'ホーム')}${L('advantage/', '長村製作所の強み', [['advantage/#total', 'トータルソリューション'], ['advantage/#speed', '短納期対応'], ['advantage/#craft', '職人の技・若手の活躍'], ['advantage/#quality', '品質と環境への取り組み']])}${L('management/', '経営方針', [['management/#philosophy', '経営理念'], ['management/#policy', '5つの基本方針'], ['management/#action', '5つの行動理念'], ['management/#vision', 'ビジョン']])}${L('company/', '会社概要', [['company/#greeting', '代表挨拶'], ['company/#profile', '会社基本情報'], ['company/#history', '会社沿革'], ['company/#access', 'アクセス']])}</ul></div>
    <div><h2>TECHNOLOGY</h2><ul>${L('technology/', '技術情報', [['technology/#sheetmetal', '金属板金加工'], ['technology/#welding', '溶接加工'], ['technology/#assembly', '組立・検査'], ['technology/#partner', '協力工場']])}${L('equipment/', '設備概要')}${L('products/', '製品紹介', [['products/#brands', '自社ブランド（SMOX / KOVAKO / Monobo）']])}${L('faq/', 'よくある質問')}</ul></div>
    <div><h2>INFORMATION</h2><ul>${L('news/', '新着情報')}${L('blog/', '社長ブログ')}${L('recruit/', '採用情報', [['recruit/#requirements', '募集要項'], ['recruit/#benefits', '福利厚生']])}${L('contact/', 'お問合せ')}${L('privacy/', '個人情報保護方針')}${L('sitemap/', 'サイトマップ')}${X('https://nagamura.co.jp/smox/', 'SMOX')}${X('https://nagamura.co.jp/kovako/', 'KOVAKO')}${X('https://nagamura.co.jp/monobo/', 'Monobo')}</ul></div>
  </div>
</section>
`,
    };
  },
};

export default [faq, news, privacy, sitemap];
