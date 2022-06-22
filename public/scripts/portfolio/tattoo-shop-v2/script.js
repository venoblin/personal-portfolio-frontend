const body = document.querySelector('body');
const mainNav = document.querySelector('header nav');
const mainNavToggle = mainNav.querySelector('.burger-menu');
const toggleSpans = mainNavToggle.querySelectorAll('span');
const mainNavLinks = mainNav.querySelectorAll('.link');
const dropLinks = document.querySelectorAll('.drop-container .drop-link');
const dropMenus = document.querySelectorAll('.drop-container .drop-menu');
const mainLogo = document.querySelector('.main-logo');
const workerBtns = document.querySelectorAll('.worker-info .btn');
const workerImgs = document.querySelectorAll('.worker-pic img');
const workerContainers = document.querySelectorAll('.worker');

mainNavToggle.addEventListener('click', () => {
  if (!mainNav.classList.contains('expand') && !mainNavToggle.classList.contains('open')) {
    mainNav.classList.add('expand');
    body.classList.add('expand');
    mainNavToggle.classList.add('open');
  } else {
    mainNav.classList.remove('expand');
    body.classList.remove('expand');
    mainNavToggle.classList.remove('open');
  }
});

mainNavToggle.addEventListener('mouseenter', () => {
  if (!mainNavToggle.classList.contains('hover')) {
    mainNavToggle.classList.add('hover');
    toggleSpans.forEach(span => {
      span.classList.add('hover');
    });
  }
});
mainNavToggle.addEventListener('mouseleave', () => {
  if (mainNavToggle.classList.contains('hover')) {
    mainNavToggle.classList.remove('hover');
    toggleSpans.forEach(span => {
      span.classList.remove('hover');
    });
  }
});

mainNavLinks.forEach((link, i) => {
  link.addEventListener('click', () => {
    if (mainNav.classList.contains('expand')) {
      mainNav.classList.remove('expand');
      body.classList.remove('expand');
    }
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 75) {
    mainNav.classList.add('scroll');
    mainLogo.classList.add('scroll');

    for (let menu of dropMenus) {
      menu.classList.add('scroll');
    }
  } else {
    mainNav.classList.remove('scroll');
    mainLogo.classList.remove('scroll');

    for (let menu of dropMenus) {
      menu.classList.remove('scroll');
    }
  }

});

workerBtns.forEach((btn, i) => {
  btn.addEventListener('mouseenter', () => {
    if (!workerImgs[i].classList.contains('hover')) {
      workerImgs[i].classList.add('hover');

      // For mobile
      workerContainers[i].classList.add('hover');
    }
  });

  btn.addEventListener('mouseleave', () => {
    if (workerImgs[i].classList.contains('hover')) {
      workerImgs[i].classList.remove('hover');

      // For mobile
      workerContainers[i].classList.remove('hover');
    }
  });
});

dropLinks.forEach((link, i) => {
  link.addEventListener('mouseenter', () => {
    if (!dropMenus[i].classList.contains('show') && window.innerWidth > 700) {
      dropMenus[i].classList.add('show');
    }
  });
  link.addEventListener('mouseleave', () => {
    if (dropMenus[i].classList.contains('show')) {
      dropMenus[i].classList.remove('show');
    }
  });
});

dropMenus.forEach((menu, i) => {
  menu.addEventListener('mouseenter', () => {
    if (!menu.classList.contains('show') && window.innerWidth > 700) {
      menu.classList.add('show');
      dropLinks[i].classList.add('hover');
    }
  });
  menu.addEventListener('mouseleave', () => {
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
      dropLinks[i].classList.remove('hover');
    }
  });
});
