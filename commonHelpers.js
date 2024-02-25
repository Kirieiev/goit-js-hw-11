import{i as a,S as g}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function u(s){const o=`https://pixabay.com/api/?key=42516548-e76607dce4d0f5a31ac9147e6&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&per_page=18`;return fetch(o).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function d(s){return s.map(({webformatURL:t,largeImageURL:i,tags:o,likes:e,views:r,comments:l,downloads:f})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${t}"
      alt="${o}"
    />
    <div class="description-container">
        <ul class="gallery-description">
    <li class="description-item">Likes</li>
    <li class="description-second-item">${e}</li>
    </ul>
        <ul class="gallery-description">
    <li class="description-item">Views</li>
    <li class="description-second-item">${r}</li>
    </ul>
        <ul class="gallery-description">
    <li class="description-item">Comments</li>
    <li class="description-second-item">${l}</li>
    </ul>
        <ul class="gallery-description">
    <li class="description-item">Downloads</li>
    <li class="description-second-item">${f}</li>
    </ul>
    </div>
  </a>
</li>
  `).join("")}const p=document.querySelector(".search-form"),c=document.querySelector(".gallery"),n=document.querySelector(".loader");n.style.display="none";p.addEventListener("submit",m);function m(s){s.preventDefault(),n.style.display="block";const t=s.target.elements.query.value;u(t).then(i=>{if(n.style.display="none",i.hits.length||a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:300,progressBar:!0,progressBarEasing:!1,position:"topRight",backgroundColor:"#ff6d60"}),!t.trim()){a.error({title:"Empty field",message:"Enter text to search",maxWidth:300,progressBar:!0,progressBarEasing:!1,position:"topRight",backgroundColor:"#ff6d60"});return}c.innerHTML="",c.innerHTML=d(i.hits),new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),p.reset()}).catch(y)}u();d();function y(){a.error({title:"Error",message:"Oops... Please try again",maxWidth:300,progressBar:!0,progressBarEasing:!1,position:"topRight",backgroundColor:"#ff6d60"})}
//# sourceMappingURL=commonHelpers.js.map
