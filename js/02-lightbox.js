import { galleryItems } from "./gallery-items.js";

const galleryListItem = document.querySelector(".gallery");

const createGalleryListItem = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join("");

galleryListItem.insertAdjacentHTML("afterbegin", `${createGalleryListItem}`);

const gallerySimpleLightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
