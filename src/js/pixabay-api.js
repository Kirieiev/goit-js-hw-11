'use strict';

export function fetchImage(name) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '42516548-e76607dce4d0f5a31ac9147e6';
  const url = `${BASE_URL}?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=18`;

  return fetch(url).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}
