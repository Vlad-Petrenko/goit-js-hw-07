import { galleryItems } from './gallery-items.js';
// Change code below this line

const blockGallery = document.querySelector('.gallery');

const createGallary = createGalleryMarkup(galleryItems);

blockGallery.insertAdjacentHTML('beforeend', createGallary);

blockGallery.addEventListener('click', onBlockGalleryClick);

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

function onBlockGalleryClick(evt) {
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  console.log(evt.target.dataset.source);
  blockGallery.onclick = () => {
    basicLightbox
      .create(
        `
		<img width="1400" height="900" src="${evt.target.dataset.source}">
	`
      )
      .show();
  };
}
