export default class ViewCards {
  BODY = document.body.querySelector('.flex');

  constructor(handleClickCardDetails, handleAddToCart){
    this.handleAddToCart = handleAddToCart;

  // Addin event on the products container to handle witch card was clicked...

    this.BODY.addEventListener('click', (e) => {
      if (e.target.classList.contains("btn-cart") || e.target.closest(".btn-cart")) {
        this.handleAddToCart(e.target.dataset.id);
      } else handleClickCardDetails(e);
    });
  }

  // Render cards template to the page
  renderSneakers(sneakers) {
    this.BODY.innerHTML = '';
    this.BODY.insertAdjacentHTML('beforeend', sneakers.map(this.getSneakersHTML).join(''));
  }

  //  HTML template for product card
  getSneakersHTML({ id, model, image, description, price, brand, gender, size }) {
    return `
        <div class="card" data-id="${id}">
          <img src="${image}" class="card-img-top" alt="${model}">
          <div class="card-body">
            <h5 class="card-title">${model}</h5>
            <div class="card-info">
              <h5 class="card-subtitle mb-2 text-muted">${brand}</h5>
              <h5 class="card-subtitle mb-2 text-muted">gender: ${gender}</h5>
              <h5 class="card-subtitle mb-2 text-muted">size: ${size}</h5>
            </div>
            <p class="card-text">${description}</p>
            </div>
          <div class="card-footer bg-transparent d-flex justify-content-between align-content-start align-items-center">
            <h5 class="price">$ ${price}</h5>
            <a href="#" class="btn btn-lg btn-dark btn-cart" data-id="${ id }">Add <i class="bi bi-bag-plus-fill"></i></a>
          </div>
        </div>
    `;
  }

  // Get clicked card ID
  getCardId = event => event.target.closest(".card").dataset.id;


}
