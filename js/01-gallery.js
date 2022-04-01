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

blockGallery.onclick = evt => {
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${evt.target.dataset.source}">
	`
    )
    .show();
  document.body.addEventListener('keydown', e => {
    if (e.key === 'Escape') basicLightbox.visible();
  });
};
// window.addEventListener('keydown', onClose);
// export const onCloseEsc = instance => {
//   blockGallery = e => {
//     if (esc(e.keyCode) === true) instance.close;
//   };
//   console.log(blockGallery);
// };

// export const closeOnEsc = instance => {
//   document.onkeydown = e => {
//     if (esc(e.keyCode) === true) instance.close();
//   };
// };
