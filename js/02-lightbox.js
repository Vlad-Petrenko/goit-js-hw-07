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

let lightbox = new SimpleLightbox('.gallery a', {
  /* options */
});
