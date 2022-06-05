const nav = document.querySelector('.navbar');
const homeLogo = nav.querySelector('.home-logo');

nav.addEventListener('mouseenter', () => {
  homeLogo.classList.toggle('hover');
});
nav.addEventListener('mouseleave', () => {
  homeLogo.classList.toggle('hover');
});
