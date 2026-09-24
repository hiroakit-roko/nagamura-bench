const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('#mobile-nav');
if (menuButton && mobileNav) {
  const closeMenu = () => {
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'メニューを開く');
    mobileNav.inert = true;
  };
  menuButton.addEventListener('click', () => {
    const open = !document.body.classList.contains('menu-open');
    document.body.classList.toggle('menu-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    mobileNav.inert = !open;
    if (open) mobileNav.querySelector('a')?.focus();
  });
  mobileNav.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && document.body.classList.contains('menu-open')) {
      closeMenu();
      menuButton.focus();
    }
  });
}

const progress = document.querySelector('.scroll-line');
let scrolling = false;
function updateProgress() {
  scrolling = false;
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const amount = available > 0 ? Math.min(1, scrollY / available) : 0;
  progress.style.transform = `scaleX(${amount})`;
}
window.addEventListener('scroll', () => {
  if (!scrolling) {
    scrolling = true;
    requestAnimationFrame(updateProgress);
  }
}, {passive:true});
updateProgress();

const galleryLinks = [...document.querySelectorAll('.source-content a[href$=".jpg"], .source-content a[href$=".png"]')]
  .filter(a => a.querySelector('img'));
if (galleryLinks.length) {
  const dialog = document.createElement('dialog');
  dialog.className = 'image-dialog';
  dialog.innerHTML = '<button type="button" aria-label="画像を閉じる">×</button><img alt=""><p></p>';
  document.body.append(dialog);
  const img = dialog.querySelector('img');
  const caption = dialog.querySelector('p');
  const button = dialog.querySelector('button');
  for (const link of galleryLinks) link.addEventListener('click', event => {
    event.preventDefault();
    img.src = link.href;
    img.alt = link.querySelector('img')?.alt || '';
    caption.textContent = link.title || img.alt;
    dialog.showModal();
    button.focus();
  });
  button.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { img.removeAttribute('src'); });
}
