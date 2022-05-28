const html = document.querySelector('html');
const mainNav = document.querySelector('.main-nav');
const workersDiv = document.querySelectorAll('.worker-container');
const toggleGallery = document.querySelectorAll('.worker-container button');
const workersGallery = document.querySelectorAll('.worker-gallery');
const pictureContainer = document.querySelector('.picture-container');
const viewerImg = pictureContainer.querySelector('img');
const closeBtn = pictureContainer.querySelector('.close');
const prevBtn = pictureContainer.querySelector('.prev');
const nextBtn = pictureContainer.querySelector('.next');
const navLinksToggle = mainNav.querySelector('button');
const mainNavUl = mainNav.querySelector('ul');
const mainNavLinks = document.querySelectorAll('.nav-links');

//Nav links media query using JS
function onNavLinks() {
  for (let link of mainNavLinks) {
    link.classList.remove('hide-height');
  }
  mainNavUl.classList.remove('hide-height');
}
function offNavLinks() {
  for (let link of mainNavLinks) {
    link.classList.add('hide-height');
  }
  mainNavUl.classList.add('hide-height');
}
if (window.innerWidth < 700) {
  offNavLinks();
} else {
  onNavLinks();
}
window.addEventListener('resize', () => {
  if (this.innerWidth < 700) {
    offNavLinks();
  } else {
    onNavLinks();
  }
});
navLinksToggle.addEventListener('click', () => {
  if (mainNavLinks[0].classList.contains('hide-height')) {
    onNavLinks();
  } else {
    offNavLinks();
  }
});

document.addEventListener('scroll', () => {
  if (this.scrollY > 75) {
    mainNav.classList.add('nav-color-change');
  } else {
    mainNav.classList.remove('nav-color-change');
  }

  //Makes sure image viewer stays on top of screen
  pictureContainer.style.top = `${window.scrollY}px`;
});

workersDiv.forEach((workerDiv) => {
  const button = workerDiv.querySelector('button');
  const img = workerDiv.querySelector('img');

  button.addEventListener('mouseover', () => {
    const img = workerDiv.querySelector('img');
    img.classList.add('worker-img-hover');
  });
  button.addEventListener('mouseout', () => {
    img.classList.remove('worker-img-hover');
  });
});


toggleGallery.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    //Grabs tiles and hides or shows them
    const tiles = workersGallery[i].querySelectorAll('.tiles');
    for (let tile of tiles) {
      if (tile.classList.contains('hide-height')) {
        tile.classList.remove('hide-height');
      } else {
        tile.classList.add('hide-height')
      }
    }

    if (workersGallery[i].classList.contains('worker-gallery-margin')) {
      workersGallery[i].classList.remove('worker-gallery-margin');
      btn.innerHTML = 'View My Work';
    } else {
      workersGallery[i].classList.add('worker-gallery-margin');
      btn.innerHTML = 'Hide My Work';
    }
  });
});


/*
Image viewer code: Using the current gallery and tile
counters we can tracked the selected tile from the
selected gallery
workersGallery[currentGallery].tiles[currentTile]
*/
let currentGallery = 0;
let currentTile = 0;

function updateImage() {
  const tiles = workersGallery[currentGallery].querySelectorAll('.tiles');
  const tileImg = tiles[currentTile].querySelector('img');
  viewerImg.src = tileImg.src;
}

workersGallery.forEach((gallery, galleryIndex) => {
  const tiles = gallery.querySelectorAll('.tiles');

  tiles.forEach((tile, tileIndex) => {
    tile.addEventListener('click', () => {
      currentTile = tileIndex;
      currentGallery = galleryIndex;
      updateImage();
      pictureContainer.style.display = 'flex';
      html.classList.add('overflow-hidden');
    });
  });
});

nextBtn.addEventListener('click', () => {
  const tiles = workersGallery[currentGallery].querySelectorAll('.tiles');

  if (currentTile === tiles.length - 1) {
    currentTile = tiles.length - 1;
  } else {
    currentTile++
  }
  updateImage();
});

prevBtn.addEventListener('click', () => {
  if (currentTile === 0) {
    currentTile = 0;
  } else {
    currentTile--;
  }
  updateImage();
});

closeBtn.addEventListener('click', () => {
  pictureContainer.style.display = 'none';
  html.classList.remove('overflow-hidden');

  currentTile = 0;
  currentGallery = 0;
});
