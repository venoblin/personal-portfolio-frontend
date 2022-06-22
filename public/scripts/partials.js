const nav = document.querySelector('.partial-navbar');
const homeLogo = nav.querySelector('.partial-home-logo');

nav.addEventListener('mouseenter', () => {
  homeLogo.classList.toggle('hover');
});
nav.addEventListener('mouseleave', () => {
  homeLogo.classList.toggle('hover');
});
