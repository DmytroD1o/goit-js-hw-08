// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const listImages = document.querySelector(".gallery");


const imagesMarkup = createImagesListMarkup(galleryItems);

listImages.insertAdjacentHTML('beforeend', imagesMarkup)


function createImagesListMarkup(images) {
  return images
    .map(({ original, preview, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`;
    })
    .join("");
}

    
   const lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionType: "attr",
    captionsData: "alt",
    captionDelay: 250,
   });

   