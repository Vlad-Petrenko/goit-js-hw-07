import { galleryItems } from './gallery-items.js';
// Change code below this line

const blockGallery = document.querySelector('.gallery');

const createGallary = createGalleryMarkup(galleryItems);

blockGallery.insertAdjacentHTML('beforeend', createGallary);

function createGalleryMarkup(imgs) {
  return imgs
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" /></a>`;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
