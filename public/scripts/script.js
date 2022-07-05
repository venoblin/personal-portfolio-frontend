const body = document.querySelector('body');
const navToggle = document.querySelector('.burger-container');
const navToggleSpans = navToggle.querySelectorAll('span');
const navBar = document.querySelector('header nav');
const navLinks = navBar.querySelectorAll('.link');
const mainHeader = document.querySelector('#welcome-section h1');
const mainSubHeader = document.querySelector('#welcome-section h2');
const arrowScrollDown = document.querySelector('.full-section .arrow-container');
const workTiles = document.querySelectorAll('.work-grid .work-tile');
const contactForm = document.querySelector('.contact-form');


function cutQueryFromUrl(url) {
  return url.split("?")[0];
}

if (document.body.contains(document.querySelector('.message-container'))) {
  const messageContainer = document.querySelector('.message-container');
  const exitBtn = document.querySelector('.exit-container');
  const exitBtnSpans = exitBtn.querySelectorAll('span');

  exitBtn.addEventListener('mouseover', () => {
    exitBtnSpans.forEach((span) => {
      span.classList.toggle('hover');
    });
  });
  exitBtn.addEventListener('mouseout', () => {
    exitBtnSpans.forEach((span) => {
      span.classList.toggle('hover');
    });
  });
  exitBtn.addEventListener('click', () => {
    messageContainer.classList.toggle('dismiss');
    window.location.href = cutQueryFromUrl(window.location.href);
  });
}

navToggle.addEventListener('mouseover', () => {
  navToggleSpans.forEach((span) => {
    span.classList.toggle('hover');
  });
});
navToggle.addEventListener('mouseout', () => {
  navToggleSpans.forEach((span) => {
    span.classList.toggle('hover');
  });
});

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
