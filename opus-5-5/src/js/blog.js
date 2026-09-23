// President's blog archive: 895 posts (title/date/excerpt) with year filter + search.
export async function init() {
  const root = document.querySelector('[data-blog]');
  const list = root.querySelector('[data-blog-list]');
  const yearsEl = root.querySelector('[data-blog-years]');
  const input = root.querySelector('[data-blog-search]');
  const meta = root.querySelector('[data-blog-meta]');
  const more = root.querySelector('[data-blog-more]');
  const base = root.dataset.blog;
  let data = [];
  try { data = await (await fetch(root.dataset.src)).json(); } catch (e) { meta.textContent = '記事一覧を読み込めませんでした。'; return; }
  const years = [...new Set(data.map((d) => d.d.slice(0, 4)))];
  let year = 'all', limit = 30;
  yearsEl.innerHTML = [`<button type="button" data-y="all" aria-pressed="true">ALL <small>${data.length}</small></button>`]
    .concat(years.map((y) => `<button type="button" data-y="${y}" aria-pressed="false">${y} <small>${data.filter((d) => d.d.startsWith(y)).length}</small></button>`)).join('');
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const icon = '<svg class="ic-ext" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';
  function render() {
    const q = input.value.trim().toLowerCase();
    const rows = data.filter((d) => (year === 'all' || d.d.startsWith(year)) && (!q || d.t.toLowerCase().includes(q) || d.e.toLowerCase().includes(q)));
    list.innerHTML = rows.slice(0, limit).map((d) => `<li><a class="post" href="${base}?p=${d.id}" target="_blank" rel="noopener"><time datetime="${d.d}">${d.d.replace(/-/g, '.')}</time><span class="post__t">${esc(d.t)}</span><span class="post__e">${esc(d.e)}</span>${icon}<span class="sr-only">（元記事・新しいタブ）</span></a></li>`).join('');
    meta.textContent = `${rows.length}件中 ${Math.min(limit, rows.length)}件を表示`;
    more.hidden = rows.length <= limit;
  }
  yearsEl.addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b) return;
    year = b.dataset.y; limit = 30;
    yearsEl.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    render();
  });
  let t; input.addEventListener('input', () => { clearTimeout(t); t = setTimeout(() => { limit = 30; render(); }, 120); });
  more.addEventListener('click', () => { limit += 60; render(); });
  render();
}
