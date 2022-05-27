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
  //ADDS OR REMOVES NAV BACKGROUND DEPENDING ON SCROLL POSITION
  if (this.scrollY > 75) {
    mainNav.classList.add('nav-color-change');
  } else {
    mainNav.classList.remove('nav-color-change');
  }

  //MAKES SURE IMAGE VIEWER IS ALWAYS UP TOP
  pictureContainer.style.top = `${window.scrollY}px`;
});

workersDiv.forEach((workerDiv) => {
  const button = workerDiv.querySelector('button');
  const img = workerDiv.querySelector('img');

  //HOVER EFFECT ON WORKER PROFILE PIC WHEN HOVERING OVER BUTTON
  button.addEventListener('mouseover', () => {
    const img = workerDiv.querySelector('img');
    img.classList.add('worker-img-hover');
  });
  button.addEventListener('mouseout', () => {
    img.classList.remove('worker-img-hover');
  });
});

//TOGGLES WORKER PORTFOLIO
toggleGallery.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    //GRABS ALL TILES AND HIDES OR SHOWS THEM
    const tiles = workersGallery[i].querySelectorAll('.tiles');
    for (let tile of tiles) {
      if (tile.classList.contains('hide-height')) {
        tile.classList.remove('hide-height');
      } else {
        tile.classList.add('hide-height')
      }
    }

    //REMOVES OR ADDS TILES PARENTS MARGIN AND CHANGES BUTTON TEXT
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
IMAGE VIEWER
*/
let currentGallery = 0;
let currentTile = 0;

function updateImage() {
  //GRABS SELECTED WORKER GALLERY USING currentGallery
  const tiles = workersGallery[currentGallery].querySelectorAll('.tiles');

  //GRABS SELECTED TILE USING currentTile
  const tilesImg = tiles[currentTile].querySelector('img');

  //IMAGE VIEWER DISPLAYS TILE IMAGE
  viewerImg.src = tilesImg.src;
}

workersGallery.forEach((gallery, galleryIndex) => {
  const tiles = gallery.querySelectorAll('.tiles');
  //ADDS CLICK LISTENERS TO ALL TILES FOR EACH GALLERY
  tiles.forEach((tile, tileIndex) => {
    tile.addEventListener('click', () => {
      //SETS currentGallery and currentTile TO THE SELECTED GALLERY AND TILE
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

  //ADDS TO currentTile WITHOUT GOING OVER tiles.length
  if (currentTile === tiles.length - 1) {
    currentTile = tiles.length - 1;
  } else {
    currentTile++
  }
  updateImage();
});

prevBtn.addEventListener('click', () => {
  //SUBTRACTS FROM currentTile WITHOUT GOING UNDER 0
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

  //RESETS INDEXES
  currentTile = 0;
  currentGallery = 0;
});
