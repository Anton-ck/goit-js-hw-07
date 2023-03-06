import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

// galleryItems.map(
//     ({ preview, original, description }) => {
//         const galleryItem = document.createElement('div');
//         galleryItem.classList.add('gallery__item');

//         const galleryLink = document.createElement('a');
//         galleryLink.classList.add('gallery__link');
//         galleryLink.href = `${original}`;
          
//         const galleryImg = document.createElement('img');
//         galleryImg.classList.add('gallery__image');
//         galleryImg.src = `${preview}`;
//         galleryImg.dataset.source = `${original}`;
//         galleryImg.alt = `${description}`;

//         galleryLink.appendChild(galleryImg);
//         galleryItem.appendChild(galleryLink);
//         gallery.appendChild(galleryItem);
//     }

// )

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
      </a>
      </div>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

const onClick = event => {
  event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
}

const onEscapePress = (event) => {
    const ESC_KEY_CODE = 'Escape';
        if (event.code === ESC_KEY_CODE) {
            instance.close();
    }
}
    
  
const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,{
      
        onShow: instance => {
        window.addEventListener('keydown', onEscapePress);
        },
        
        onClose: instance => {
        window.removeEventListener('keydown', onEscapePress);
      },
    }
  );
  instance.show();


}

gallery.addEventListener('click', onClick);


