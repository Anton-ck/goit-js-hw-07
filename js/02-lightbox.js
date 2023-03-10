import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

// galleryItems.map(
//     ({ preview, original, description }) => {
//         const galleryItem = document.createElement('a');
//         galleryItem.classList.add('gallery__item');
//         galleryItem.href = `${original}`;
          
//         const galleryImg = document.createElement('img');
//         galleryImg.classList.add('gallery__image');
//         galleryImg.src = `${preview}`;
//         galleryImg.alt = `${description}`;

//         galleryItem.appendChild(galleryImg);
//         gallery.appendChild(galleryItem);
//     }

// )

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
      </a>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});




