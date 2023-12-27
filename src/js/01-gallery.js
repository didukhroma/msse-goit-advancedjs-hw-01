// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Reference
const galleryRef = document.querySelector('.gallery');

// Markup
const markup = galleryItems
  .map(
    ({ description, preview, original }) => `
   <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`
  )
  .join('');

// Insert markup
galleryRef.insertAdjacentHTML('afterbegin', markup);

// New SimpleLightbox
new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 500,
});
