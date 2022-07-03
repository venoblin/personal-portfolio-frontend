const body = document.querySelector('body');
const navToggle = document.querySelector('.nav-toggle');
const navBar = document.querySelector('header nav');
const mainHeader = document.querySelector('#welcome-section h1');
const mainSubHeader = document.querySelector('#welcome-section h2');
const arrowScrollDown = document.querySelector('.full-section .arrow-container');
const workTiles = document.querySelectorAll('.work-grid .work-tile');

navToggle.addEventListener('click', () => {
  navBar.classList.toggle('toggle');
  body.classList.toggle('toggle');
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
