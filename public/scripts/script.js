const headerNav = document.querySelector('header nav');
const workTiles = document.querySelectorAll('.work-tiles');
const headerLinks = document.querySelectorAll('header .links');
const mainHeader = document.querySelector('#welcome-section h1');
const mainSubHeader = document.querySelector('#welcome-section h2');


if (window.innerWidth > 800) {
    mainHeader.textContent = 'Jonathan,';
    mainSubHeader.textContent = 'Website Developer';
} else {
    mainHeader.textContent = 'Jon,';
    mainSubHeader.textContent = 'Web Dev';
}
window.addEventListener('resize', () => {
    if (this.innerWidth > 800) {
      mainHeader.textContent = 'Jonathan,';
      mainSubHeader.textContent = 'Website Developer';
    } else {
      mainHeader.textContent = 'Jon,';
      mainSubHeader.textContent = 'Web Dev';
    }
});
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

workTiles.forEach((tile) => {
  const img = tile.querySelector('img');
  const projectInfo = tile.querySelector('.project-info');

  tile.addEventListener('mouseover', () => {
    if (img) {
      img.classList.add('scale-hover');
    }

    projectInfo.classList.add('show-project-info');
  });
  tile.addEventListener('mouseout', () => {
    if (img) {
      img.classList.remove('scale-hover');
    }

    projectInfo.classList.remove('show-project-info');
  });
});

headerLinks.forEach((link, i) => {
  link.addEventListener('mouseover', () => {
    headerLinks.forEach((link) => {
      link.classList.add('muted-color');
    });
  });

  link.addEventListener('mouseout', () => {
    headerLinks.forEach((link) => {
      link.classList.remove('muted-color');
    });
  });
});
