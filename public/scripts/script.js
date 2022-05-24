const headerNav = document.querySelector('header nav');

let lastKnownScrollPosition = 0;
document.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    headerNav.classList.add('nav-scroll');
  } else {
    headerNav.classList.remove('nav-scroll');
  }
});
