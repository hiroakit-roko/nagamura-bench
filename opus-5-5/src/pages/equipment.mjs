import { img, head, pageHero } from '../lib.mjs';
import { EQUIPMENT, eqUnits, EQ_TOTAL_UNITS, EQ_TOTAL_KINDS } from '../data.mjs';

export default {
  path: 'equipment/',
  render(r) {
    const bars = (n) => `<span class="qty__bar" aria-hidden="true">${'<i></i>'.repeat(Math.min(n, 20))}</span>`;
    return {
      title: '設備概要',
      description: `長村製作所の設備概要。プレス・板金加工、曲げ加工、機械加工、切断加工、溶接加工、試験・計測器、その他の設備の型式・仕様・台数を掲載（全${EQ_TOTAL_KINDS}項目）。`,
      body: `
${pageHero(r, { no: 'TECHNOLOGY / 02', en: 'Equipment', ja: '設備概要', image: 'eq-press02', crumbs: [{ label: '設備概要' }], lead: '試作から単品・量産まで。多種多様なご依頼に応える設備体制です。' })}

<section class="sec" aria-labelledby="eq-title" data-eq>
  <div class="wrap">
    ${head({ no: '00', en: 'Equipment List', ja: '保有設備一覧', id: 'eq-title' })}
    <div class="stats" style="margin-bottom:48px">
      ${EQUIPMENT.slice(0, 4).map((g) => `<div class="stat"><p class="stat__label">${g.ja}</p><p class="stat__num"><span data-count="${eqUnits(g)}">${eqUnits(g)}</span><small>台</small></p><p class="stat__note">${g.rows.length}項目</p></div>`).join('')}
    </div>
    <div class="eq-tools">
      <div class="eq-tabs" role="group" aria-label="カテゴリで絞り込み">
        <button type="button" data-eq-tab="all" aria-pressed="true">すべて<small>${EQ_TOTAL_UNITS}</small></button>
        ${EQUIPMENT.map((g) => `<button type="button" data-eq-tab="${g.id}" aria-pressed="false">${g.ja}<small>${eqUnits(g)}</small></button>`).join('')}
      </div>
      <label class="eq-search"><span class="sr-only">設備名・型式・仕様で検索</span><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="m16 16 5 5" stroke="currentColor" stroke-width="1.6"/></svg><input type="search" data-eq-search placeholder="設備名・型式・仕様で検索（例：プレスブレーキ、FBD）"></label>
      <p class="note" data-eq-status aria-live="polite"></p>
    </div>
    ${EQUIPMENT.map((g, gi) => `<section class="eq-group" id="${g.id}" data-cat="${g.id}" aria-labelledby="eqh-${g.id}">
      <div class="eq-group__head"><h3 id="eqh-${g.id}"><small>${String(gi + 1).padStart(2, '0')} ${g.en}</small>${g.ja}</h3><p class="eq-group__sum">${g.rows.length}項目 / 合計<b>${eqUnits(g)}</b>台</p></div>
      <div class="table-wrap" tabindex="0" role="region" aria-label="${g.ja}の設備表">
      <table class="eq-table">
        <caption class="sr-only">${g.ja}の設備一覧</caption>
        <thead><tr><th scope="col">No.</th><th scope="col">設備名</th><th scope="col">型式</th><th scope="col">仕様</th><th scope="col">台数</th></tr></thead>
        <tbody>${g.rows.map(([no, name, model, spec, qty]) => `<tr data-qty="${qty}"><td>${no}</td><th scope="row" class="name">${name}</th><td class="model">${model}</td><td class="spec">${spec}</td><td class="qty"><span class="qty__wrap"><span class="qty__n">${qty}</span>${bars(qty)}</span></td></tr>`).join('')}</tbody>
      </table>
      </div>
      ${g.photos.length ? `<div class="gallery gallery--4 eq-photos" data-lb-group>${g.photos.map(([im, cap]) => `<figure>${img(r, im, cap, { sizes: '(min-width:900px) 25vw, 50vw', lb: cap })}<figcaption>${cap}</figcaption></figure>`).join('')}</div>` : ''}
    </section>`).join('')}
    <p class="eq-empty" hidden>該当する設備が見つかりませんでした。キーワードを変えてお試しください。</p>
    <p class="note" style="margin-top:24px">※表記は元サイトの掲載内容に基づきます（溶接加工のNo.は原文どおり 1〜6, 11）。</p>
  </div>
</section>
`,
    };
  },
};
