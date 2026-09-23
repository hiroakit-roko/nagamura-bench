import { img, imgUrl, head, pageHero, toc, btn, SITE } from '../lib.mjs';
import { PRODUCTS } from '../data.mjs';

export default {
  path: 'products/',
  render(r) {
    const spec = (heads, rows) => `<div class="table-wrap" tabindex="0" role="region" aria-label="仕様表"><table class="spec"><thead><tr><th scope="col"></th>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map(([k, ...v]) => `<tr><th scope="row">${k}</th>${v.length === 1 ? `<td colspan="${heads.length}">${v[0]}</td>` : v.map((x) => `<td>${x}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    return {
      title: '製品紹介',
      description: '長村製作所の製品紹介。光ケーブル配分架・光本配線盤などの各種配線盤類、400G対応を含む19インチラック、屋外公衆電話室、喫煙スポット・樋門ハウスなどの公共製品。自社ブランドSMOX・KOVAKO・Monobo。',
      body: `
${pageHero(r, { no: 'TECHNOLOGY / 03', en: 'Products', ja: '製品紹介', image: 'tech12', crumbs: [{ label: '製品紹介' }], lead: '通信インフラを支える配線盤・ラックから、まちの公衆電話室、そして新しい空間をつくる自社ブランドまで。' })}
${toc([...PRODUCTS.map((g) => [g.id, g.ja]), ['brands', '自社ブランド']])}

<section class="sec is-light" aria-labelledby="pr-title">
  <div class="wrap">
    ${head({ no: '00', en: 'Product Line-up', ja: '製品ラインナップ', lead: '画像をクリックすると拡大表示します。', id: 'pr-title' })}
    ${PRODUCTS.map((g, gi) => `<section class="pgroup" id="${g.id}" aria-labelledby="pg-${g.id}">
      <div class="pgroup__head"><h3 id="pg-${g.id}"><small>${String(gi + 1).padStart(2, '0')} ${g.en}</small>${g.ja}</h3><p class="pgroup__count">${g.items.length} ITEMS</p></div>
      <ul class="pgrid" data-lb-group>
        ${g.items.map(([im, name, code]) => `<li class="pitem rv">${img(r, im, name + (code ? ' ' + code : ''), { sizes: '(min-width:1100px) 22vw, (min-width:760px) 30vw, 46vw', lb: name + (code ? ' ' + code : '') })}<p class="pitem__name">${name}${code ? `<span class="pitem__code">${code}</span>` : ''}</p></li>`).join('')}
      </ul>
    </section>`).join('')}
  </div>
</section>

<section class="sec" id="brands" aria-labelledby="br-title">
  <div class="wrap">
    ${head({ no: '06', en: 'Our Brands', ja: '電話ボックスの技術から生まれた、<br>自社ブランド。', lead: '公衆電話ボックスの製造で培った型材と技術を活かし、長村製作所は「空間」をつくる製品を展開しています。詳細・資料請求は各ブランドサイトをご覧ください。', id: 'br-title' })}

    <article class="bpanel" id="smox" aria-labelledby="b-smox">
      <div class="bpanel__media" data-lb-group>
        <figure class="figure">${img(r, 'smox-install', 'SMOXの設置作業', { sizes: '(min-width:960px) 45vw, 100vw', lb: 'SMOXの設置作業' })}</figure>
        <figure class="figure" style="background:#fff">${img(r, 'smox-render', '喫煙ブース SMOX', { sizes: '22vw', lb: '喫煙ブース SMOX', style: 'object-fit:contain' })}</figure>
        <figure class="figure">${img(r, 'smox-case', 'SMOX 導入実績：ドコモショップ足利山辺店', { sizes: '22vw', lb: 'SMOX 導入実績：ドコモショップ足利山辺店' })}</figure>
      </div>
      <div>
        <h3 class="bpanel__name" id="b-smox">SMOX</h3>
        <p class="bpanel__cat">喫煙ブース・喫煙ボックス（屋内外対応）</p>
        <ul class="bpanel__points"><li>風速36m/secの耐久性</li><li>約15秒で中の空気を入れ替え</li><li>設置後1年間の無料修理保証</li></ul>
        <p>『SMOX』は屋外にも設置可能な喫煙ボックスです。長村製作所が長らく作り続けてきた電話ボックスの型材をもとにして制作しているため、とても頑丈で風速36m/secの耐久性を有しています。設置から保守まで、すべて弊社と協力会社が対応するため、わかりやすくワンストップでご対応させていただくことができます。</p>
        <p class="note" style="margin-top:8px">※無料修理保証はお客様の過失による故障ではない場合。導入には厚生労働省・都道府県労働局の「受動喫煙防止対策助成金」をご活用いただけます（申請はお客様に行っていただきます）。</p>
        ${spec(['Sサイズ（900x900）', 'Mサイズ（1,800x1,800）', 'Lサイズ（2,700x1,800）'], [
          ['サイズ', '幅 1025mm×1025mm<br>高さ 2556mm', '幅 1865mm×1865mm<br>高さ 2720mm', '幅 2765mm×1865mm<br>高さ 2720mm'],
          ['重量', '約250kg', '約500kg', '約600kg'],
          ['電源', 'AC100V 50/60Hz'], ['ガラス面', '5m/m板厚強化ガラス'], ['枠材', 'アルミニウム合金押出異型材'], ['照明設備', 'LEDダウンライト'], ['センサー', '熱線センサ付自動スイッチ'], ['換気設備', 'ダクト用換気扇'],
        ])}
        <p class="note" style="margin-top:10px">上記以外のサイズをご希望の方は個別にお問い合わせください。オプション：カッティングシートを付属できます。<br>導入の流れ：お問い合わせ・資料請求 → 現地調査（無料） → 工事費なども含めた正式なお見積もり → 基礎工事（必要な場合） → 設置</p>
        <div class="yt" style="margin-top:24px"><img src="${imgUrl(r, 'smox-clear', 960)}" alt="" loading="lazy" style="object-fit:contain;background:#fff"><button type="button" data-yt="yHSOGVdjLnE" data-title="SMOX 排気実験の様子"><span class="play" aria-hidden="true"></span>排気実験の様子を再生（YouTube）</button></div>
        <details class="legacy" style="margin-top:16px">
          <summary>喫煙ブースの設置要件・導入実績</summary>
          <div class="legacy__body">
            <p class="note">2018年7月、多数の者が利用する施設等に対し一定の場所以外での喫煙が禁止になり、管理権限者には受動喫煙を防止するための責務があります。</p>
            <h4>屋外</h4><p>幼稚園や小学校などの一部の建物を除いて、以下の基準を満たした場合に設置できます：禁煙場所と区画されていること／喫煙所としての標識が設置されていること／受動喫煙を生じさせることがないように配慮されていること。設置可能な場所の例：大学・病院・コンビニ・工場・市役所（上記以外でもほとんどの場所に設置可能です）。</p>
            <h4>屋内</h4><p>出入口において喫煙室の外側から内側に流入する空気の気流が0.2ｍ／秒以上であること／たばこの煙（加熱式たばこの蒸気を含む。）が喫煙室の中から施設の屋内に流出しないよう、壁・天井等によって区画すること／たばこの煙が施設の屋外に排気されていること。『SMOX』は上記の条件をクリアしています。</p>
            <h4>導入実績：ドコモショップ足利山辺店</h4><p>「換気能力が高いためか、全くタバコの匂いがBOXに残らないためほとんど掃除をしなくても使えています。また、換気扇からでる煙や匂いに関しても排気ダクトが外に繋がっているため、タバコを吸わない従業員も助かっています。」</p>
          </div>
        </details>
        <div class="btn-row" style="margin-top:24px">${btn('https://nagamura.co.jp/smox/', 'SMOX 公式サイト', { external: true })}${btn(SITE.smoxForm, '資料請求・お問い合わせ', { external: true, variant: 'btn--red' })}</div>
      </div>
    </article>

    <article class="bpanel" id="kovako" aria-labelledby="b-kovako">
      <div class="bpanel__media" data-lb-group>
        <figure class="figure">${img(r, 'kovako-booth', '工場内に設置されたファクトリーブース KOVAKO', { sizes: '(min-width:960px) 45vw, 100vw', lb: '工場内に設置されたファクトリーブース KOVAKO' })}</figure>
        <figure class="figure" style="grid-column:1/-1;aspect-ratio:16/9;background:#fff">${img(r, 'kovako-spec', 'KOVAKO 外観', { sizes: '45vw', lb: 'KOVAKO 外観', style: 'object-fit:contain' })}</figure>
      </div>
      <div>
        <h3 class="bpanel__name" id="b-kovako">KOVAKO</h3>
        <p class="bpanel__cat">従業員を守る安心・安全のファクトリーブース</p>
        <ul class="bpanel__points"><li>防災防塵に最適</li><li>最短1日で工事完了</li><li>完全オーダーメイド制</li></ul>
        <p>簡単に設置できる換気性能抜群なファクトリーブース「KOVAKO」。電話ボックスと同じ型材を用いた高耐久設計で、最小900x900mmのものから3m四方以上の小部屋まで自由に設計できます。照明・人感センサー・冷暖房の設置、換気ダクトを外につないだ溶接ヒューム対策にも対応します。</p>
        ${spec(['仕様'], [
          ['サイズ・重量', 'オーダーメイドであるため、現地調査後に確定いたします。'], ['電源', 'AC100V 50/60Hz'], ['ガラス面', '5m/m板厚強化ガラス'], ['枠材', 'アルミニウム合金押出異型材'], ['照明設備', 'LEDダウンライト'], ['センサー', '熱戦センサ付自動スイッチ ※手動スイッチへの変更も可能です。'], ['エアコン', 'ご希望により設置可能'],
        ])}
        <p class="note" style="margin-top:10px">割賦支払いのお支払い例：サイズ 2700×900／本体価格 200万円（設置工事費込み）／金利 年利5～7％／支払回数 60回／月額 約39,000円（※割賦支払いには利息が発生いたします）。<br>お電話でのお問い合わせ受付時間：平日 8:15 ～ 17:00（KOVAKOサイト記載）</p>
        <div class="yt" style="margin-top:24px"><img src="${imgUrl(r, 'kovako-booth', 960)}" alt="" loading="lazy"><button type="button" data-yt="L2UgGfBdmT8" data-title="KOVAKO 開発ストーリー"><span class="play" aria-hidden="true"></span>開発ストーリーを再生（YouTube）</button></div>
        <p class="note" style="margin-top:10px">開発のきっかけは、法改正された溶接ヒュームに関する規則（特化則第37条：作業場所以外の場所に休憩室を設ける）に当社として対応するため、換気性能の高いファクトリーブースを作ろうと考えたことでした。</p>
        <div class="btn-row" style="margin-top:24px">${btn('https://nagamura.co.jp/kovako/', 'KOVAKO 公式サイト', { external: true })}${btn(SITE.kovakoForm, '資料請求はこちら', { external: true, variant: 'btn--red' })}</div>
      </div>
    </article>

    <article class="bpanel" id="monobo" aria-labelledby="b-monobo">
      <div class="bpanel__media" data-lb-group>
        <figure class="figure">${img(r, 'monobo-room', 'Monoboの内部', { sizes: '(min-width:960px) 45vw, 100vw', lb: 'Monoboの内部' })}</figure>
        <figure class="figure">${img(r, 'monobo-1', 'Monobo 1人用', { sizes: '22vw', lb: 'Monobo 1人用' })}</figure>
        <figure class="figure">${img(r, 'monobo-4', 'Monobo 4人用', { sizes: '22vw', lb: 'Monobo 4人用' })}</figure>
      </div>
      <div>
        <h3 class="bpanel__name" id="b-monobo">Monobo</h3>
        <p class="bpanel__cat">省スペース対応テレワークブース</p>
        <ul class="bpanel__points"><li>低天井OK（最低天井高2100mm）</li><li>見学・利用予約可能</li><li>最短2時間で設置可能</li></ul>
        <p>長村製作所の「Monobo（モノボ）」は、公衆電話ボックス製造で培った技術とメーカーのノウハウを活かして開発された、省スペース向けのテレワークブース。オフィスの執務室はもちろん、廊下の一角やデッドスペースになっている場所にも無理なく設置可能。購入プランは一括またはレンタルからお選びいただけます。</p>
        ${spec(['1人用', '2人用', '4人用'], [
          ['サイズ<br><small>（突起部含まず）</small>', '幅 1268mm×奥行868mm×高さ1780mm', '幅2470mm × 奥行870mm × 高さ2095mm', '幅 2318mm×奥行1368mm×高さ1920mm'],
          ['重量', '約150kg', '約250kg', '約350kg'],
          ['必要天井高', '2100mm〜', '2400mm〜', '2200mm〜'],
          ['換気', '換気扇 × 1個', '換気扇 × 1個', '換気扇 × 2個'],
          ['吸音材', '壁面へ貼り付け'],
          ['価格', 'オープン価格'],
        ])}
        <p class="note" style="margin-top:10px">最短2週間で導入可能（在庫がある場合）。本体内部音圧：完全遮音ではなく、消防法基準に則り、92db以上のアラームの基準音圧がボックス内では65db以上で聞こえる仕様になっています。FeLuce（フェルーチェ）は日本製鉄株式会社の登録商標です。</p>
        <div class="btn-row" style="margin-top:24px">${btn('https://nagamura.co.jp/monobo/', 'Monobo 公式サイト', { external: true })}${btn(SITE.monoboForm, '資料請求・見積もり', { external: true, variant: 'btn--red' })}</div>
      </div>
    </article>
  </div>
</section>
`,
    };
  },
};
