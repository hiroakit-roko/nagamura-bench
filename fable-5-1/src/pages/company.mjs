import { img, heading, pageHero, localNav, cta, btn } from '../helpers.mjs';

const history = [
  ['1938', '昭和13年05月', '合名会社 長村鉄工所設立（横浜市鶴見区）'],
  ['1946', '昭和21年11月', '逓信省（現日本電信電話株式会社）と取引開始（配線盤）'],
  ['1953', '昭和28年08月', '株式会社長村鉄工所設立'],
  ['1954', '昭和29年08月', '公衆電話室製作開始'],
  ['1964', '昭和39年02月', '本社を横浜市鶴見区より港北区に移転'],
  ['1965', '昭和40年05月', '栃木県小山市に小山工場新設'],
  ['1967', '昭和42年12月', '社名を株式会社 長村製作所に変更'],
  ['1975', '昭和50年06月', '本社を横浜市港北区より鶴見区に移転'],
  ['1997', '平成09年05月', '本社を横浜市より栃木県小山市に移転。'],
  ['1998', '平成10年07月', 'ISO-9001認証取得'],
  ['1999', '平成11年10月', '大平工場新設'],
  ['2001', '平成13年02月', 'ISO-14001認証取得'],
  ['2004', '平成16年02月', '本社を栃木県小山市より大平工場内へ移転'],
  ['2020', '令和2年10月', '東京本部新設（東京都豊島区・池袋）'],
];

const body = `
${pageHero({ en: 'COMPANY PROFILE', ja: '会社概要', lead: '1938年の創業以来、通信社会インフラの整備構築に貢献。創業100年に向けて、未来のICT社会を支える通信インフラ事業と、快適な時を提供する空間創造事業を展開します。', image: 'hero/factory', crumbs: [{ label: '会社概要' }] })}
${localNav([['#message', '代表挨拶'], ['#profile', '会社基本情報'], ['#history', '会社沿革'], ['#access', 'アクセス']])}

<section class="section section--dark section--grid" id="message" aria-labelledby="msg-title">
  <div class="container split split--wide-img">
    <div class="split__img split__img--frame img-reveal" style="max-width:420px">${img('recruit/president', '代表取締役 飯山 進', { sizes: '(min-width: 900px) 40vw, 100vw' })}</div>
    <div class="split__body reveal">
      ${heading({ num: '01', en: 'MESSAGE', ja: '代表挨拶' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="msg-title">')}
      <h3>長村製作所は社員一人ひとりがみなさまの暮らしに安心・安全なそして快適な生活環境を提供するために新たな価値を創造する物づくり会社として成長してまいります。</h3>
      <p>当社は1938年（昭和13年）の創業以来、「公衆電話ボックス」「光配線盤及び19インチラック」「通信用機材・資材等」の製造を通じ、通信社会インフラ整備構築に貢献してまいりました。</p>
      <p>創業100年にむけて本業を基盤とし、常に技術を磨きお客様の多様なニーズに対応し「未来のICT社会を支える通信インフラ事業」、「全てのお客様に快適な時を提供する空間創造事業」を中心に積極的に事業展開を図ります。</p>
      <p>そして多くのお客様から「長村製作所、ありがとう、助かったよ。」の言葉を頂くことを全社員の喜びとする企業を目指し、社員一丸となって邁進してまいります。</p>
      <p>今後ともご愛顧賜りますように、よろしくお願い申し上げます。</p>
      <p class="mt-4"><span class="small">代表取締役</span><br><strong style="font-size:22px">飯山 進</strong></p>
    </div>
  </div>
</section>

<section class="section section--light" id="profile" aria-labelledby="pf-title">
  <div class="container">
    <div class="reveal">${heading({ num: '02', en: 'CORPORATE DATA', ja: '会社基本情報', tone: 'light' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="pf-title">')}</div>
    <dl class="def reveal">
      <div><dt>商号</dt><dd>株式会社 長村製作所</dd></div>
      <div><dt>所在地</dt><dd><strong>本社工場</strong>：〒329-4411 栃木県栃木市大平町横堀みずほ5-1<br><strong>東京本部</strong>：〒170-0013 東京都豊島区東池袋1‐21‐11 オーク池袋ビル5F</dd></div>
      <div><dt>設立年月日</dt><dd>1938年5月5日</dd></div>
      <div><dt>資本金</dt><dd>1,000万円</dd></div>
      <div><dt>代表者</dt><dd>代表取締役 飯山 進</dd></div>
      <div><dt>社員数</dt><dd>58名（2026年1月時点）</dd></div>
      <div><dt>業務内容</dt><dd><ul>
        <li>各種光配線盤等の設計・製造・販売</li>
        <li>各種シールドキャビネット類の製造・販売</li>
        <li>19インチラック等の設計・試作・製造・販売</li>
        <li>屋外用公衆電話室の設計・製造・販売</li>
        <li>喫煙BOXの設計・製造・販売</li>
        <li>樋門ハウス等公共製品の設計・製造・販売</li>
        <li>大型精密板金製品の設計・製造・販売</li>
      </ul></dd></div>
      <div><dt>認証取得</dt><dd>1998年07月 ： ISO9001 取得 [屋外用公衆電話室・盤架類の設計、開発、販売]<br>2001年02月 ： ISO14001 取得 [屋外用公衆電話室・盤架類の設計、開発、販売]</dd></div>
      <div><dt>取引銀行</dt><dd>足利銀行小山支店、商工中金足利支店、みずほ銀行栃木支店</dd></div>
      <div><dt>主要取引先</dt><dd>日本電信電話株式会社様、東日本電信電話株式会社様、西日本日本電信電話株式会社様<br>株式会社エヌ・ティ・ティ・ドコモ様、エヌ・ティ・ティ・コミュニケーションズ株式会社様<br>株式会社エヌ・ティ・ティ・データ様 その他グループ企業様</dd></div>
      <div><dt>加入団体</dt><dd><ul>
        <li>全国通信用機器材工業協同組合</li>
        <li>通信盤架工業協同組合</li>
        <li>情報通信ネットワーク産業協会(CIAJ)</li>
        <li>社団法人電気通信協会</li>
        <li>環境事業団大平みずほ企業団地協同組合</li>
      </ul></dd></div>
    </dl>
  </div>
</section>

<section class="section section--dark section--grid" id="history" aria-labelledby="hi-title">
  <div class="container">
    <div class="split" style="align-items:start">
      <div class="reveal">
        ${heading({ num: '03', en: 'HISTORY', ja: '会社沿革', lead: '横浜・鶴見の鉄工所から、栃木・大平の本社工場へ。逓信省との取引に始まる通信インフラの歴史。' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="hi-title">')}
        <div class="split__img img-reveal">${img('photo/building', '本社工場 外観', { sizes: '(min-width: 900px) 45vw, 100vw' })}</div>
      </div>
      <ol class="timeline reveal">
        ${history.map(([y, era, t]) => `<li class="timeline__item"><div><span class="timeline__year">${y}</span><span class="timeline__era">${era}</span></div><p class="timeline__text">${t}</p></li>`).join('')}
      </ol>
    </div>
  </div>
</section>

<section class="section section--light" id="access" aria-labelledby="ac-title">
  <div class="container">
    <div class="reveal">${heading({ num: '04', en: 'ACCESS', ja: 'アクセス', tone: 'light' }).replace('<h2 class="sec-title">', '<h2 class="sec-title" id="ac-title">')}</div>
    <div class="grid-2" data-stagger>
      <div>
        <h3 class="sec-title" style="font-size:24px;color:var(--text)">大平本社</h3>
        <p class="mt-2" style="color:var(--text-2)">〒329-4411 栃木県栃木市大平町横堀みずほ5-1<br>TEL：0282(45)1341　FAX：0282(45)1508</p>
        <div class="map mt-3"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12854.174070630084!2d139.73194409445244!3d36.34761170043221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601f4630c9233781%3A0x901e4f286e888f5d!2zKOagqinplbfmnZHoo73kvZzmiYA!5e0!3m2!1sja!2sjp!4v1561686766265!5m2!1sja!2sjp" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="大平本社の地図（Google マップ）" allowfullscreen></iframe></div>
      </div>
      <div>
        <h3 class="sec-title" style="font-size:24px;color:var(--text)">東京本部</h3>
        <p class="mt-2" style="color:var(--text-2)">〒170-0013 東京都豊島区東池袋1-21-11 オーク池袋ビル5F<br>TEL：03-5985-4472　FAX：03-5985-4473</p>
        <div class="map mt-3"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.8264736808715!2d139.71344241457857!3d35.73048593487779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d66199776a1%3A0x5c738595ae41ed30!2z44CSMTcwLTAwMTMg5p2x5Lqs6YO96LGK5bO25Yy65p2x5rGg6KKL77yR5LiB55uu77yS77yR4oiS77yR77yRIOOCquODvOOCr-axoOiii-ODk-ODq-ODh-OCo-ODs-OCsCA1Zg!5e0!3m2!1sja!2sjp!4v1653540948877!5m2!1sja!2sjp" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="東京本部の地図（Google マップ）" allowfullscreen></iframe></div>
      </div>
    </div>
  </div>
</section>
${cta()}
`;

export default { slug: 'company', title: '会社概要', description: '株式会社長村製作所の代表挨拶、会社基本情報（本社工場：栃木県栃木市大平町横堀みずほ5-1／東京本部：東池袋）、会社沿革、アクセス。', body };
