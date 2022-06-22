const album = document.querySelector('.album');
const albumPics = album.querySelectorAll('.pic');
const imageViewer = document.querySelector('.image-viewer');
const imageViewerImg = imageViewer.querySelector('img');
const imageViewerCloseBtn = imageViewer.querySelector('button[name="close"]');
const imageViewerPrevBtn = imageViewer.querySelector('button[name="prev"]');
const imageViewerNextBtn = imageViewer.querySelector('button[name="next"]');


imageViewer.style.top = `${window.scrollY}px`;
window.addEventListener('scroll', () => {
  imageViewer.style.top = `${window.scrollY}px`;
});

let picIndex = 0;

function updateImage() {
  const img = albumPics[picIndex].querySelector('img');

  imageViewerImg.src = img.src;
}

function updateButtons() {
  if (picIndex <= 0) {
    imageViewerPrevBtn.disabled = true;
  } else {
    imageViewerPrevBtn.disabled = false;
  }

  if (picIndex >= albumPics.length - 1) {
    imageViewerNextBtn.disabled = true;
  } else {
    imageViewerNextBtn.disabled = false;
  }
}

albumPics.forEach((pic, i) => {
  pic.addEventListener('click', () => {
    picIndex = i;
    updateImage();
    updateButtons();
    imageViewer.classList.add('open');
    body.classList.add('expand');
  });
});

imageViewerCloseBtn.addEventListener('click', () => {
  picIndex = 0;
  imageViewer.classList.remove('open');
  body.classList.remove('expand');
});
imageViewerPrevBtn.addEventListener('click', () => {
  if (picIndex <= 0) {
    picIndex = 0;
  } else {
    picIndex--;
  }
  updateImage();
  updateButtons();
});
imageViewerNextBtn.addEventListener('click', () => {
  if (picIndex >= albumPics.length - 1) {
    picIndex = albumPics.length - 1;
  } else {
    picIndex++;
  }
  updateImage();
  updateButtons();
});
