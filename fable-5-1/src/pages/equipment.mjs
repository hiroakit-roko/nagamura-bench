import { img, heading, pageHero, localNav, cta } from '../helpers.mjs';

// [No., 設備名, 型式, 仕様, 台数] — transcribed verbatim from nagamura.co.jp/equipment/ (original numbering preserved)
const CATS = [
  { id: 'press', en: 'PRESS / SHEET METAL', ja: 'プレス・板金加工', rows: [
    [1, '複合機', 'LC2512C1AJ', '-', 1], [2, 'ダブルクランクプレス', 'DA-150B', '150t', 1], [3, 'クランクパワープレス', 'PEGA-100A', '100t', 1], [4, 'C形単独シングルクランクプレス', 'CS-80', '80t', 1], [5, 'ダブルクランクプレス', '-', '75t', 1], [6, 'ポンチングプレス', 'AG-70', '70t', 1], [7, 'C形クランクプレス', 'PF-20', '30t', 4], [8, 'C形クランクプレス', '-', '20t', 3], [9, 'C形クランクプレス', 'EPIF-15', '15t', 1], [10, 'C形クランクプレス', '-', '5t', 1], [11, 'CNCターレットパンチプレス', 'VP357-V2', '30t / 1270×1830', 1], [12, 'CNCターレットパンチプレス', 'EM2510', '20t / 1270×2500 / サイクルローダー付', 1], [13, 'NC付セットプレス', 'SP-30', '30t', 1], [14, 'セットプレス', 'SP-15', '15t', 1], [15, 'ハンド（ねこ）プレス', '-', '-', 1],
  ], photos: [['eq-press-1', '複合機'], ['eq-press-2', 'CNCターレットパンチプレス'], ['eq-press-3', 'CNCターレットパンチプレス'], ['eq-press-8', 'ダブルクランクプレス'], ['eq-press-4', 'セットプレス'], ['eq-press-6', 'クランクパワープレス'], ['eq-press-7', 'C形シングルクランクプレス'], ['eq-press-5', 'パンチングプレス']] },
  { id: 'bending', en: 'BENDING', ja: '曲げ加工', rows: [
    [1, 'プレスブレーキ', 'FBD3004', '300t / 油圧式 / NCバックゲージ付', 1], [2, 'プレスブレーキ', 'HDS2203', '220t / 油圧式 / NCバックゲージ付', 2], [3, 'プレスブレーキ', 'PB-100091', '150t / 電動式', 1], [4, 'プレスブレーキ', 'FBD1025NT', '100t / 油圧式 / NCバックゲージ付', 2], [5, 'プレスブレーキ', 'FBD5012NT', '50t / 油圧式 / NCバックゲージ付', 1], [6, 'プレスブレーキ', 'RG-25', '25t / 油圧式 / NCバックゲージ付', 1],
  ], photos: [['eq-bend-1', 'プレスブレーキ'], ['eq-bend-2', 'プレスブレーキ'], ['eq-bend-3', 'プレスブレーキ']] },
  { id: 'machining', en: 'MACHINING', ja: '機械加工', rows: [
    [1, '6尺旋盤', 'HAT-20', '-', 1], [2, '立フライス', 'RA2', '-', 1], [3, '高速自動金型研磨機', 'TOGU lll', '-', 1], [4, '自動平面バリ取り機', 'DB-610', '-', 1], [5, '卓上面取り機', 'CC02型', '-', 1], [6, '直立ボール盤', 'KUD-560', 'φ40', 1], [7, '卓上ボール盤', 'ASD-360', 'φ13', 3], [8, 'タッピングボール盤', 'KRT-340', 'M6', 1], [9, 'タッピングマシン', 'BT6-311', 'M8', 7], [10, 'NCタッピングマシン', 'CTS-900', 'M3,M4,M5', 1], [11, 'グラインダー', 'TG-305A', '-', 7], [12, 'ケーブル加工機', 'CASTING C351', '-', 1], [13, '束巻電線供給機', '-', '-', 1],
  ], photos: [['eq-mach-1', 'NCタッピングマシン'], ['eq-mach-2', '立フライス']] },
  { id: 'cutting', en: 'CUTTING', ja: '切断加工', rows: [
    [1, 'スケアーシャー', 'A-531', '4.5mm×3100 / 電動バックゲージ付<br>ダレ止めバイラーリフター付', 1], [2, 'スケアーシャー', 'M1245', '3.2mm×1219 / 電動バックゲージ付<br>リタコンフローレスパイラ付', 1], [3, 'アルミ高速切断機', 'CS-1000', '-', 1], [4, '自動帯鋸盤', 'HA-250', '-', 1], [5, '高速丸鋸切断機', 'VX-125ER', '-', 1], [6, 'エアープラズマ切断機', 'CT-0302', '-', 1],
  ], photos: [['eq-cut-1', 'スケアーシャー'], ['eq-cut-2', 'スケアーシャー']] },
  { id: 'welding', en: 'WELDING', ja: '溶接加工', rows: [
    [1, 'アルゴンアーク溶接機', 'AGC-403', '-', 5], [2, 'CO2半自動溶接機', 'CPTM-1604', '-', 19], [3, '6軸関節形アーク溶接ロボット', 'YA-IMMR61', '6KVA', 4], [4, 'スポット溶接機', 'YR-800CDS-2B', '80KVA', 1], [5, 'スポット溶接機', 'NDN-35-L6-F', '35KVA', 5], [6, 'CDスタットウェルダー', 'JDI-80', '-', 2], [11, 'ガス溶接機', '-', '-', 1],
  ], photos: [['eq-weld-1', 'ロボット溶接機'], ['eq-weld-2', 'CO2半自動溶接機'], ['eq-weld-3', 'アルゴンアーク溶接機'], ['eq-weld-4', 'スポット溶接機']] },
  { id: 'measuring', en: 'TESTING & MEASURING', ja: '試験・計測器', rows: [
    [1, '絶縁抵抗計', '-', 'DC100,200,500V /0. ～2×1072×107', 1], [2, '絶縁耐圧計', '-', '-', 1], [3, 'デジタル抵抗計', '-', '-', 1], [4, '光電池照度計', '-', '0～3000LX', 2], [5, '膜厚計', '-', '0.5µ～1mm', 1], [6, 'デジタルハイトゲージ', '-', '1000m', 1], [7, '引っ張り試験器', '-', '-', 1], [8, 'その他度量測定器各種', '-', '-', 1],
  ], photos: [] },
  { id: 'others', en: 'OTHER FACILITIES', ja: 'その他の設備', rows: [
    [1, 'エアーコンプレッサー', '-', '37KW', 1], [2, 'エアーコンプレッサー', '-', '22KW', 1], [3, 'エアーコンプレッサー', '-', '15KW', 1], [4, 'エアーコンプレッサー', '-', '7.5KW', 1], [5, 'エアーコンプレッサー', '-', '3.7KW', 2], [6, 'エアーコンプレッサー', '-', '0.75KW', 1], [7, 'テーブルリフト', '-', '-', 4], [8, '穴付定盤', '-', '0.9m×1.8m', 1], [9, '溝付定盤', '-', '1.5m×3.0m', 1], [10, '平面定盤', '-', '1.5m×3.0m', 1], [11, '平面定盤', '-', '2.0m×3.0m', 1], [12, '平面定盤', '-', 'その他', 3], [13, 'ホイストクレーン', '-', '2t', 1], [14, 'ホイストクレーン', '-', '20kg', 7],
  ], photos: [] },
];

const totalUnits = CATS.reduce((a, c) => a + c.rows.reduce((b, r) => b + r[4], 0), 0);
const totalRows = CATS.reduce((a, c) => a + c.rows.length, 0);

const section = (c, i) => {
  const units = c.rows.reduce((a, r) => a + r[4], 0);
  return `<section class="section ${i % 2 ? 'section--light' : 'section--dark section--grid'}" id="${c.id}" aria-labelledby="${c.id}-title">
  <div class="container">
    <div class="reveal flex flex--between" style="align-items:flex-end">
      ${heading({ num: String(i + 1).padStart(2, '0'), en: c.en, ja: c.ja, tone: i % 2 ? 'light' : 'dark' }).replace('<h2 class="sec-title">', `<h2 class="sec-title" id="${c.id}-title">`)}
      <p class="badge ${i % 2 ? '' : 'badge--gold'}" style="margin-bottom:clamp(32px,5vw,56px)">${c.rows.length} 品目 / 計 ${units} 台</p>
    </div>
    ${c.photos.length ? `<ul class="grid-4 mb-4" data-stagger>${c.photos.map(([im, t]) => `<li><figure class="fig">${img('photo/' + im, t)}<figcaption>${t}</figcaption></figure></li>`).join('')}</ul>` : ''}
    <div class="table-wrap reveal">
      <table class="table">
        <caption class="sr-only">${c.ja}の設備一覧</caption>
        <thead><tr><th class="num">No.</th><th>設備名</th><th>型式</th><th>仕様</th><th class="num">台数</th></tr></thead>
        <tbody>${c.rows.map(r => `<tr><td class="num">${r[0]}</td><td>${r[1]}</td><td class="model">${r[2]}</td><td>${r[3]}</td><td class="count">${r[4]}</td></tr>`).join('')}</tbody>
        <tfoot><tr><td colspan="4">${c.ja} 合計</td><td class="count">${units}</td></tr></tfoot>
      </table>
    </div>
  </div>
</section>`;
};

const body = `
${pageHero({ en: 'EQUIPMENT', ja: '設備概要', lead: 'プレス・板金加工から曲げ、機械加工、切断、溶接、試験・計測まで。長村製作所の生産設備を全て公開しています。', image: 'photo/factory-wide', crumbs: [{ label: '設備概要' }] })}
${localNav(CATS.map(c => ['#' + c.id, c.ja]))}
<section class="section section--tight section--dark-2">
  <div class="container">
    <ul class="numbers numbers--3 reveal">
      <li class="num"><span class="num__label">Categories</span><span class="num__value">${CATS.length}<small>カテゴリ</small></span><span class="num__ja">プレス・板金／曲げ／機械／切断／溶接／試験・計測／その他</span></li>
      <li class="num"><span class="num__label">Items</span><span class="num__value"><span class="js-counter" data-count="${totalRows}">${totalRows}</span><small>品目</small></span><span class="num__ja">掲載設備の品目数</span></li>
      <li class="num"><span class="num__label">Units</span><span class="num__value"><span class="js-counter" data-count="${totalUnits}">${totalUnits}</span><small>台</small></span><span class="num__ja">掲載設備の合計台数</span><span class="num__note">※各カテゴリの台数欄を合算</span></li>
    </ul>
  </div>
</section>
${CATS.map(section).join('')}
${cta()}
`;

export default { slug: 'equipment', title: '設備概要', description: '長村製作所の設備一覧：複合機、CNCターレットパンチプレス、プレスブレーキ（300t〜25t）、6軸関節形アーク溶接ロボット4台、CO2半自動溶接機19台ほか、型式・仕様・台数を掲載。', body };
