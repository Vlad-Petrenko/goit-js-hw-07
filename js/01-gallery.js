import { galleryItems } from './gallery-items.js';
// Change code below this line

const blockGallery = document.querySelector('.gallery');

const createGallary = createGalleryMarkup(galleryItems);

blockGallery.insertAdjacentHTML('beforeend', createGallary);

function createGalleryMarkup(imgs) {
  return imgs
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}" onclick="return false">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

blockGallery.addEventListener('click', onBlockGalleryClick);

function onBlockGalleryClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(
    `
  <img src="${evt.target.dataset.source}">`,
    {
      onShow: instance => {
        window.addEventListener('keydown', closeModalEscKey);
      },
      onClose: instance => {
        window.removeEventListener('keydown', closeModalEscKey);
      },
    }
  );
  instance.show();

  function closeModalEscKey(evt) {
    if (evt.code === 'Escape') {
      instance.close();
    }
  }
}
