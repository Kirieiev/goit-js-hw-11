'use strict';

export function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
  <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
    <div class="description-container">
        <ul class="gallery-description">
    <li class="description-item">Likes</li>
    <li class="description-second-item">${likes}</li>
    </ul>
        <ul class="gallery-description">
    <li class="description-item">Views</li>
    <li class="description-second-item">${views}</li>
    </ul>
        <ul class="gallery-description">
    <li class="description-item">Comments</li>
    <li class="description-second-item">${comments}</li>
    </ul>
        <ul class="gallery-description">
    <li class="description-item">Downloads</li>
    <li class="description-second-item">${downloads}</li>
    </ul>
    </div>
  </a>
</li>
  `
    )
    .join('');
}
