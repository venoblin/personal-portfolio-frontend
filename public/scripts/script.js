const mainHeader = document.querySelector('#welcome-section h1');
const mainSubHeader = document.querySelector('#welcome-section h2');
const arrowScrollDown = document.querySelector('.full-section .arrow-container');

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
