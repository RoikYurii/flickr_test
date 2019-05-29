// IE
import "isomorphic-fetch";
import "es6-promise/auto"

import Api from './blocks/api.js';
const api = new Api;
import PhotoDOM from './blocks/photoDOM';
const photoDom = new PhotoDOM;


$("#searchForm").on("submit", function(e) {
  e.preventDefault();    
  loadPhotos($(this));
})

$("#lazyBtn").on("click", function() {
  loadPhotos($(this));
})


function loadPhotos(el) {
  let options = photoDom.getOptions(el);
  if (options) {
    $("#loadIcon").fadeIn();
    api.get(options);
  }
}