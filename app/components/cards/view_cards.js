export default class ViewCards {
  BODY = document.body.querySelector('.flex');

  constructor(handleClickCardDetails){
  // Addin event on the products container to handke witch card was clicked...
    this.BODY.addEventListener('click', handleClickCardDetails);
  }
  // Render cards template to the page
  renderSneakers(sneakers) {
    this.BODY.innerHTML = '';
    this.BODY.insertAdjacentHTML('beforeend', sneakers.map(this.getSneakersHTML).join(''));
  }

  //  HTML template for product card
  getSneakersHTML({ id, model, image, description, price, brand }) {
    return `
        <div class="card" data-id="${id}">
          <img src="${image}" class="card-img-top" alt="${model}">
          <div class="card-body">
            <h5 class="card-title">${model}</h5>
            <h5 class="card-subtitle mb-2 text-muted">${brand}</h5>
            <p class="card-text">${description}</p>
            </div>
          <div class="card-footer bg-transparent d-flex justify-content-between align-content-start align-items-center">
            <h5 class="price">$ ${price}</h5>
            <a href="#" class="btn btn-lg btn-dark">Add <i class="bi bi-bag-plus-fill"></i></a>
          </div>
        </div>
    `;
  }
  // Get clicked card ID
  getCardId = event => event.target.closest(".card").dataset.id;
}