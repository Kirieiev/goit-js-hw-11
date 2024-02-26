'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImage } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

loader.style.display = 'none';
form.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  loader.style.display = 'block';
  const inputValue = event.target.elements.query.value;
  fetchImage(inputValue)
    .then(data => {
      loader.style.display = 'none';
      if (!data.hits.length) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          maxWidth: 300,
          progressBar: true,
          progressBarEasing: false,
          position: 'topRight',
          backgroundColor: '#ff6d60',
        });
      }
      if (!inputValue.trim()) {
        iziToast.error({
          title: 'Empty field',
          message: 'Enter text to search',
          maxWidth: 300,
          progressBar: true,
          progressBarEasing: false,
          position: 'topRight',
          backgroundColor: '#ff6d60',
        });
        return;
      }
      gallery.innerHTML = '';
      gallery.innerHTML = createMarkup(data.hits);
      const refreshPage = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      refreshPage.refresh();
      form.reset();
    })
    .catch(onFetchError);
}

function onFetchError() {
  iziToast.error({
    title: 'Error',
    message: 'Oops... Please try again',
    maxWidth: 300,
    progressBar: true,
    progressBarEasing: false,
    position: 'topRight',
    backgroundColor: '#ff6d60',
  });
}
