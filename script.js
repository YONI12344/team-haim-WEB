const hamburgerBtn = document.getElementById('hamburgerBtn');
const menu = document.getElementById('mobileMenu');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('open');
  menu.classList.toggle('open');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
});

function closeMenu() {
  hamburgerBtn.classList.remove('open');
  menu.classList.remove('open');
  document.body.style.overflow = '';
}
