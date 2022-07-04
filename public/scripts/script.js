const body = document.querySelector('body');
const navToggle = document.querySelector('.nav-toggle');
const navBar = document.querySelector('header nav');
const navLinks = navBar.querySelectorAll('.link');
const mainHeader = document.querySelector('#welcome-section h1');
const mainSubHeader = document.querySelector('#welcome-section h2');
const arrowScrollDown = document.querySelector('.full-section .arrow-container');
const workTiles = document.querySelectorAll('.work-grid .work-tile');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('toggle');
  navBar.classList.toggle('toggle');
  body.classList.toggle('toggle');
});

navLinks.forEach(link => {

  link.addEventListener('click', () => {
    if (window.innerWidth < 800) {
      if (navBar.classList.contains('toggle')) {
        navToggle.classList.remove('toggle');
        navBar.classList.remove('toggle');
        body.classList.remove('toggle');
      }
    }
  });
});

if (window.innerWidth > 800) {
  mainHeader.textContent = 'Jonathan,';
  mainSubHeader.textContent = 'Website Developer';

  if (navBar.classList.contains('toggle')) {
    navToggle.classList.remove('toggle');
    navBar.classList.remove('toggle');
    body.classList.remove('toggle');
  }
} else {
  mainHeader.textContent = 'Jon,';
  mainSubHeader.textContent = 'Web Dev';
}
window.addEventListener('resize', () => {
  if (this.innerWidth > 800) {
    mainHeader.textContent = 'Jonathan,';
    mainSubHeader.textContent = 'Website Developer';

    if (navBar.classList.contains('toggle')) {
      navToggle.classList.remove('toggle');
      navBar.classList.remove('toggle');
      body.classList.remove('toggle');
    }
  } else {
    mainHeader.textContent = 'Jon,';
    mainSubHeader.textContent = 'Web Dev';
  }
});

if (window.scrollY > 75) {
  arrowScrollDown.classList.add('scroll');
} else {
  arrowScrollDown.classList.remove('scroll');
}
document.addEventListener('scroll', () => {
  if (window.scrollY > 75) {
    arrowScrollDown.classList.add('scroll');
  } else {
    arrowScrollDown.classList.remove('scroll');
  }
});

workTiles.forEach((tile) => {
  const img = tile.querySelector('img');
  const projectInfo = tile.querySelector('.project-info');

  //Work tiles hover effect
  tile.addEventListener('mouseover', () => {
    if (img) {
      img.classList.toggle('hover');
    }
    projectInfo.classList.toggle('show');
  });
  tile.addEventListener('mouseout', () => {
    if (img) {
      img.classList.toggle('hover');
    }
    projectInfo.classList.toggle('show');
  });
});
