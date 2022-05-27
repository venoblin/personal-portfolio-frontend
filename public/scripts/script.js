const headerNav = document.querySelector('header nav');
const headerLinksContainer = headerNav.querySelector('.links-container');
const headerLinks = headerNav.querySelectorAll('.links');
const burgerMenu = headerNav.querySelector('.burger-menu');
const burgerMenuSpans = burgerMenu.querySelectorAll('span');
const workTiles = document.querySelectorAll('.work-tiles');
const mainHeader = document.querySelector('#welcome-section h1');
const mainSubHeader = document.querySelector('#welcome-section h2');

burgerMenu.addEventListener('mouseover', () => {
  burgerMenuSpans.forEach((span) => {
    span.classList.toggle('primary-color-bg');
  });
});
burgerMenu.addEventListener('mouseout', () => {
  burgerMenuSpans.forEach((span) => {
    span.classList.toggle('primary-color-bg');
  });
});
burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  headerNav.classList.toggle('open');
  headerLinksContainer.classList.toggle('open');
  console.log(window.scrollY);
  if (window.scrollY < 75) {
    headerNav.classList.toggle('nav-scroll-bg');
  }
});


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

  if (burgerMenu.classList.contains('open')) {
    burgerMenu.classList.remove('open');
    headerNav.classList.remove('open');
    headerLinksContainer.classList.remove('open');
  }

  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollTop > lastScrollTop && !burgerMenu.classList.contains('open')){
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
      img.classList.toggle('scale-hover');
    }

    projectInfo.classList.toggle('show-project-info');
  });
  tile.addEventListener('mouseout', () => {
    if (img) {
      img.classList.toggle('scale-hover');
    }

    projectInfo.classList.toggle('show-project-info');
  });
});

headerLinks.forEach((link, i) => {
  link.addEventListener('mouseover', () => {
    headerLinks.forEach((link) => {
      link.classList.toggle('muted-color');
    });
  });

  link.addEventListener('mouseout', () => {
    headerLinks.forEach((link) => {
      link.classList.toggle('muted-color');
    });
  });
});
