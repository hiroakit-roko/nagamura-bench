// Inquiry helper: no server — validates, composes the message, copies it and routes
// the visitor to the official Microsoft Forms page (or mailto for recruiting).
export function init() {
  const form = document.querySelector('[data-cform]');
  const out = document.querySelector('[data-cform-out]');
  const ta = out.querySelector('textarea');
  const openBtn = out.querySelector('[data-open]');
  const copied = out.querySelector('[data-copied]');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let ok = true, first = null;
    form.querySelectorAll('[required]').forEach((f) => {
      const err = document.getElementById(f.getAttribute('aria-describedby')?.split(' ').find((id) => id.endsWith('-err')));
      const bad = !f.value.trim() || (f.type === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.value));
      f.setAttribute('aria-invalid', String(bad));
      if (err) err.textContent = bad ? (f.type === 'email' && f.value ? 'メールアドレスの形式をご確認ください。' : '入力してください。') : '';
      if (bad) { ok = false; first = first || f; }
    });
    if (!ok) { first.focus(); return; }
    const fd = new FormData(form);
    const type = fd.get('type');
    const lines = [
      `【お問合せ種別】${type}`,
      `【会社名】${fd.get('company') || '—'}`,
      `【お名前】${fd.get('name')}`,
      `【メール】${fd.get('email')}`,
      `【電話番号】${fd.get('tel') || '—'}`,
      `【ご希望の連絡方法】${fd.get('reply') || '—'}`,
      '',
      '【お問合せ内容】',
      fd.get('message'),
    ];
    const text = lines.join('\n');
    ta.value = text;
    const route = form.querySelector(`[name="type"]:checked`).dataset;
    openBtn.href = route.mail ? `mailto:${route.mail}?subject=${encodeURIComponent('【Webサイトより】' + type)}&body=${encodeURIComponent(text)}` : route.href;
    openBtn.target = route.mail ? '' : '_blank';
    openBtn.querySelector('.btn__label').textContent = route.label;
    out.classList.add('is-shown');
    try { await navigator.clipboard.writeText(text); copied.textContent = 'お問合せ内容をクリップボードにコピーしました。開いたフォームに貼り付けてご送信ください。'; }
    catch { copied.textContent = '下の内容をコピーし、フォームに貼り付けてご送信ください。'; }
    out.scrollIntoView({ behavior: 'smooth', block: 'start' });
    out.focus();
  });
  out.querySelector('[data-copy]')?.addEventListener('click', async () => {
    ta.select();
    try { await navigator.clipboard.writeText(ta.value); copied.textContent = 'コピーしました。'; } catch { document.execCommand('copy'); }
  });
}
