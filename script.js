const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const menu = document.getElementById('mobileMenu');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('open');
  menu.classList.toggle('open');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
});

closeMenuBtn.addEventListener('click', closeMenu);

function closeMenu() {
  hamburgerBtn.classList.remove('open');
  menu.classList.remove('open');
  document.body.style.overflow = '';
}
