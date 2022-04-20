const navToggle = document.getElementById('nav-toggle');
const navCollapse = document.getElementById('nav-collapse');
const mainNav = document.getElementById('main-nav');
const mainHeader = document.querySelector('#welcome-section h1');

if (window.innerWidth > 800) {
    mainHeader.innerText = 'Jonathan';
} else {
    mainHeader.innerText = 'Jon';
}
window.addEventListener('resize', () => {
    if (this.innerWidth > 800) {
        mainHeader.innerText = 'Jonathan';
        navToggle.innerText = '|||';
        navCollapse.classList.add('nav-translate');
    } else {
        mainHeader.innerText = 'Jon';
    }
});

let currentPos = 0;
document.addEventListener('scroll', () => {
    if (Math.floor(this.scrollY) > 75 && this.innerWidth < 800) {
        mainNav.classList.add('header-change-bg');
        navCollapse.classList.add('header-change-bg');
    } else {
        mainNav.classList.remove('header-change-bg');
        navCollapse.classList.remove('header-change-bg');
    }

    if (!navCollapse.classList.contains('nav-translate')) {
        navCollapse.classList.add('nav-translate');
        navToggle.innerText = '|||';
    }
});

navToggle.addEventListener('click', () => {
    if (navCollapse.classList.contains('nav-translate')) {
        navCollapse.classList.remove('nav-translate');
        navToggle.innerText = 'X';
    } else {
        navCollapse.classList.add('nav-translate');
        navToggle.innerText = '|||';
    }
});