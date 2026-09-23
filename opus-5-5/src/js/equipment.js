// Equipment list: category filter + incremental search with highlight.
export function init() {
  const root = document.querySelector('[data-eq]');
  const groups = [...root.querySelectorAll('.eq-group')];
  const tabs = [...root.querySelectorAll('[data-eq-tab]')];
  const input = root.querySelector('[data-eq-search]');
  const status = root.querySelector('[data-eq-status]');
  const empty = root.querySelector('.eq-empty');
  let cat = 'all';
  const rows = [...root.querySelectorAll('tbody tr')];
  rows.forEach((tr) => { tr.dataset.text = tr.textContent.replace(/\s+/g, ' ').toLowerCase(); tr.querySelectorAll('.name,.model,.spec').forEach((c) => (c.dataset.orig = c.innerHTML)); });
  const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  function run() {
    const q = (input.value || '').trim().toLowerCase();
    const re = q ? new RegExp(escRe(q), 'gi') : null;
    let shownRows = 0, shownUnits = 0;
    groups.forEach((g) => {
      const inCat = cat === 'all' || g.dataset.cat === cat;
      let n = 0;
      g.querySelectorAll('tbody tr').forEach((tr) => {
        const hit = !q || tr.dataset.text.includes(q);
        tr.hidden = !hit;
        tr.querySelectorAll('[data-orig]').forEach((c) => { c.innerHTML = re ? c.dataset.orig.replace(re, (m) => `<mark>${m}</mark>`) : c.dataset.orig; });
        if (hit && inCat) { n++; shownUnits += Number(tr.dataset.qty || 0); }
      });
      g.hidden = !inCat || n === 0;
      shownRows += inCat ? n : 0;
    });
    empty.hidden = shownRows > 0;
    status.textContent = `${shownRows}項目・合計${shownUnits}台を表示中`;
  }
  tabs.forEach((b) => b.addEventListener('click', () => {
    cat = b.dataset.eqTab;
    tabs.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    run();
  }));
  input.addEventListener('input', run);
  run();
}
