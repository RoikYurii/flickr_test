class PhotoDOM {

  constructor() {
    this._imagesHtml = $("#imagesContainer");
  }

  getOptions(el) {
    
    let input = $("#searchInp");
    let data = $(input).val();
    if (data) { $(input).attr("data-val", data) };
    let page = el.attr("data-page");
    let type = el.attr("data-type");

    if (data.length > 0) {
      if (type === "standart") { 
        this._imagesHtml.html("");
        $("#lazyBtn").hide();
      }
      return { data: data, page: page, type: type };
    } else {

      // lazy load with empty input
      if (type === "lazy") {
        data = $(input).attr("data-val");
        return { data: data, page: page, type: type };
      } else {
        alert ("Потрібно ввести запит");
        return false;
      }
    }
  };

  addPhotos([res, type] = [res, type]) {

    // results validating
    if (res.photos.total === "0") {
      alert ("Зображень не знайдено :(");
    } else if (res.stat === "ok") {
      let photosHtml = "";
      let photos = res.photos.photo;

      // creating images
      photos.forEach(photo => {
        let photoSrc = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`;
        photosHtml += `<div class="images__item">
                        <p>${photo.title}</p>
                        <img src="${photoSrc}" alt="${photo.title}">
                      </div>
                      `;
      });
      this._imagesHtml.append(photosHtml);

      // lazyload settings
      let lazyBtn = $("#lazyBtn");
      if (type === "standart") {
        $(lazyBtn).fadeIn();
        $(lazyBtn).attr("data-page", 2);
      } else {
        let nextPage = +lazyBtn.attr("data-page") + 1;
        $(lazyBtn).attr("data-page", nextPage);
      }

    } else if (res.code === 3) {
      alert ("Потрібно ввести запит");
    } else {
      alert ("Виникла помилка");
      console.log(res.code + " - " + res.message);
    }

  };

};

export default PhotoDOM;

