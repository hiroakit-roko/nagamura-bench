import { img, head, pageHero, toc, btn, SITE, ext } from '../lib.mjs';
import { HISTORY } from '../data.mjs';

const MAP_HQ = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12854.174070630084!2d139.73194409445244!3d36.34761170043221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601f4630c9233781%3A0x901e4f286e888f5d!2zKOagqinplbfmnZHoo73kvZzmiYA!5e0!3m2!1sja!2sjp!4v1561686766265!5m2!1sja!2sjp';
const MAP_TOKYO = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.8264736808715!2d139.71344241457857!3d35.73048593487779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d66199776a1%3A0x5c738595ae41ed30!2z44CSMTcwLTAwMTMg5p2x5Lqs6YO96LGK5bO25Yy65p2x5rGg6KKL77yR5LiB55uu77yS77yR4oiS77yR77yRIOOCquODvOOCr-axoOiii-ODk-ODq-ODh-OCo-ODs-OCsCA1Zg!5e0!3m2!1sja!2sjp!4v1653540948877!5m2!1sja!2sjp';

export default {
  path: 'company/',
  render(r) {
    const row = (dt, dd) => `<div><dt>${dt}</dt><dd>${dd}</dd></div>`;
    const ul = (a) => `<ul>${a.map((x) => `<li>${x}</li>`).join('')}</ul>`;
    return {
      title: '会社概要',
      description: '株式会社長村製作所の会社概要。代表挨拶、会社基本情報（1938年5月5日設立・資本金1,000万円）、会社沿革、本社工場（栃木県栃木市）・東京本部（東京都豊島区）へのアクセス。',
      body: `
${pageHero(r, { no: 'COMPANY / 03', en: 'Company', ja: '会社概要', image: 'home10', crumbs: [{ label: '会社概要' }] })}
${toc([['greeting', '代表挨拶'], ['profile', '会社基本情報'], ['history', '会社沿革'], ['access', 'アクセス']])}

<section class="sec is-light" id="greeting" aria-labelledby="gr-title">
  <div class="wrap greet">
    <div class="greet__photo">
      <figure class="figure rv-img">${img(r, 'ceo-portrait', '代表取締役 飯山 進', { sizes: '(min-width:960px) 38vw, 100vw' })}</figure>
    </div>
    <div>
      ${head({ no: '01', en: 'Message', ja: '代表挨拶', id: 'gr-title' })}
      <p class="greet__catch rv">長村製作所は社員一人ひとりがみなさまの暮らしに<br class="pc">安心・安全なそして快適な生活環境を提供するために<br class="pc">新たな価値を創造する物づくり会社として成長してまいります。</p>
      <div class="prose">
        <p class="rv">当社は1938年（昭和13年）の創業以来、「公衆電話ボックス」「光配線盤及び19インチラック」「通信用機材・資材等」の製造を通じ、通信社会インフラ整備構築に貢献してまいりました。</p>
        <p class="rv">創業100年にむけて本業を基盤とし、常に技術を磨きお客様の多様なニーズに対応し「未来のICT社会を支える通信インフラ事業」、「全てのお客様に快適な時を提供する空間創造事業」を中心に積極的に事業展開を図ります。</p>
        <p class="rv">そして多くのお客様から「長村製作所、ありがとう、助かったよ。」の言葉を頂くことを全社員の喜びとする企業を目指し、社員一丸となって邁進してまいります。</p>
        <p class="rv">今後ともご愛顧賜りますように、よろしくお願い申し上げます。</p>
      </div>
      <p class="greet__sign rv"><small>代表取締役</small><strong>飯山 進</strong></p>
    </div>
  </div>
</section>

<section class="sec" id="profile" aria-labelledby="pf-title">
  <div class="wrap split">
    <div class="sticky-col">
      ${head({ no: '02', en: 'Corporate Data', ja: '会社基本情報', id: 'pf-title' })}
      <figure class="figure rv-img" style="aspect-ratio:3/2">${img(r, 'building', '長村製作所 本社工場の外観', { sizes: '(min-width:960px) 36vw, 100vw' })}<figcaption>本社工場（栃木県栃木市大平町）</figcaption></figure>
    </div>
    <dl class="dtable rv">
      ${row('商号', '株式会社 長村製作所')}
      ${row('所在地', `本社工場：${SITE.zip} ${SITE.addr}<br>東京本部：${SITE.tokyoZip} 東京都豊島区東池袋1‐21‐11 オーク池袋ビル5F`)}
      ${row('設立年月日', '1938年5月5日')}
      ${row('資本金', '1,000万円')}
      ${row('代表者', '代表取締役 飯山 進')}
      ${row('社員数', '58名（2026年1月時点）')}
      ${row('業務内容', ul(['各種光配線盤等の設計・製造・販売', '各種シールドキャビネット類の製造・販売', '19インチラック等の設計・試作・製造・販売', '屋外用公衆電話室の設計・製造・販売', '喫煙BOXの設計・製造・販売', '樋門ハウス等公共製品の設計・製造・販売', '大型精密板金製品の設計・製造・販売']))}
      ${row('認証取得', ul(['1998年07月 ： ISO9001 取得 [屋外用公衆電話室・盤架類の設計、開発、販売]', '2001年02月 ： ISO14001 取得 [屋外用公衆電話室・盤架類の設計、開発、販売]']))}
      ${row('取引銀行', '足利銀行小山支店、商工中金足利支店、みずほ銀行栃木支店')}
      ${row('主要取引先', '日本電信電話株式会社様、東日本電信電話株式会社様、西日本日本電信電話株式会社様<br>株式会社エヌ・ティ・ティ・ドコモ様、エヌ・ティ・ティ・コミュニケーションズ株式会社様<br>株式会社エヌ・ティ・ティ・データ様 その他グループ企業様')}
      ${row('加入団体', ul(['全国通信用機器材工業協同組合', '通信盤架工業協同組合', '情報通信ネットワーク産業協会(CIAJ)', '社団法人電気通信協会', '環境事業団大平みずほ企業団地協同組合']))}
      ${row('連絡先', `本社工場 TEL：${SITE.telDisp}　FAX：${SITE.fax}<br>東京本部 TEL：${SITE.tokyoTel}　FAX：${SITE.tokyoFax}`)}
    </dl>
  </div>
</section>

<section class="sec is-light" id="history" aria-labelledby="hi-title">
  <div class="wrap split">
    <div class="sticky-col">
      ${head({ no: '03', en: 'History', ja: '会社沿革', lead: '横浜・鶴見の鉄工所から、栃木の精密板金工場へ。通信インフラとともに歩んだ歴史です。', id: 'hi-title' })}
      <p class="display outline rv" style="font-size:clamp(4rem,10vw,9rem);color:var(--paper-ink)" aria-hidden="true">1938<br><span style="color:var(--red);-webkit-text-stroke:0">→</span></p>
    </div>
    <div class="timeline">
      <span class="timeline__prog" aria-hidden="true"></span>
      <ol>${HISTORY.map(([wa, y, t]) => `<li class="tl"><p class="tl__date">${wa}<small>${y}</small></p><p class="tl__tx">${t}</p></li>`).join('')}</ol>
    </div>
  </div>
</section>

<section class="sec" id="access" aria-labelledby="acc-title">
  <div class="wrap">
    ${head({ no: '04', en: 'Access', ja: 'アクセス', id: 'acc-title' })}
    <div class="access">
      <article class="access__card rv">
        <div class="access__map"><iframe src="${MAP_HQ}" title="大平本社の地図（Googleマップ）" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>
        <div class="access__body">
          <h3><small>HEADQUARTERS & FACTORY</small>アクセス - 大平本社</h3>
          <p>${SITE.zip} ${SITE.addr}</p>
          <p>TEL：${SITE.telDisp}　FAX：${SITE.fax}</p>
          <p style="margin-top:8px"><a class="textlink" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('栃木県栃木市大平町横堀みずほ5-1')}" target="_blank" rel="noopener">Googleマップで開く ${ext}<span class="sr-only">（外部サイト）</span></a></p>
        </div>
      </article>
      <article class="access__card rv" style="--d:.1s">
        <div class="access__map"><iframe src="${MAP_TOKYO}" title="東京本部の地図（Googleマップ）" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>
        <div class="access__body">
          <h3><small>TOKYO HEADQUARTERS</small>アクセス - 東京本部</h3>
          <p>${SITE.tokyoZip} 東京都豊島区東池袋1-21-11 オーク池袋ビル5F</p>
          <p>TEL：${SITE.tokyoTel}　FAX：${SITE.tokyoFax}</p>
          <p style="margin-top:8px"><a class="textlink" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('東京都豊島区東池袋1-21-11 オーク池袋ビル')}" target="_blank" rel="noopener">Googleマップで開く ${ext}<span class="sr-only">（外部サイト）</span></a></p>
        </div>
      </article>
    </div>
  </div>
</section>
`,
    };
  },
};
