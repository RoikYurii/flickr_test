import PhotoDOM from './photoDOM'
const photoDom = new PhotoDOM;

class Api {

  constructor() {
  }

  // get data from server
  get({data, page, type} = {options}) {

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7b593d1a115b3d98bf97a2790a4646f6&tags=${data}&per_page=10&page=${page}&format=json&nojsoncallback=1`)
    .then(function(response) {
      return response.json();
     })
    .then(function (res) {
      photoDom.addPhotos([res, type]);
    })
    .catch(function (error) {
      console.log(error);
    });

    $("#loadIcon").fadeOut();

  }

};

export default Api;