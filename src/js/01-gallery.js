// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallerySection = document.querySelector('.gallery');

const galleryEl = galleryItems.reduce((acc, img) => {
  return (acc += `<a class="gallery__link" href="${img.original}">
      <img 
        class="gallery__image"
        src="${img.preview}"
        alt="${img.description}"
      />
    </a>
  `);
}, []);

gallerySection.innerHTML = galleryEl;

new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionsData: 'alt',
  loop: true,
  docClose: true,
});
