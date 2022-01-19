export default class ViewCards {
  BODY = document.body.querySelector('.content');

  renderSneakers(sneakers) {
    this.BODY.insertAdjacentHTML('beforeend', sneakers.map(this.getSneakersHTML).join(''));
  }

  getSneakersHTML({ model, image, description, price }) {
    return `
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
        <div class="card mb-4 h-100">
          <img src="${image}" class="card-img-top" alt="${model}">
          <div class="card-body">
            <h5 class="card-title">${model}</h5>
            <p class="card-text">${description}</p>
          </div>
          <div class="card-footer bg-transparent">
            <h5 class="price">${price}</h5>
            <a href="#" class="btn btn-lg btn-dark">Add <i class="bi bi-bag-plus-fill"></i></a>
          </div>
        </div>
      </div>  
    `;
  }
}
