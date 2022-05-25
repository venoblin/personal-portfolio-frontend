const headerNav = document.querySelector('header nav');

let lastScrollTop = 0;
document.addEventListener('scroll', () => {
  if (window.scrollY > 75) {
    headerNav.classList.add('nav-scroll-bg');
  } else {
    headerNav.classList.remove('nav-scroll-bg');
  }

  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollTop > lastScrollTop){
     // downscroll code
     headerNav.classList.add('nav-scroll-hide');
  } else {
     // upscroll code
     headerNav.classList.remove('nav-scroll-hide');
  }
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});
