export default class ViewModal {
  MODAL_CONTAINER = document.body.querySelector(".modal-outer");
  MODAL_BODY = document.body.querySelector(".modal-inner");

  constructor(handleClickOutsideModal, handleClickCardDetailsToCart){
    this.handleClickOutsideModal = handleClickOutsideModal;
    this.handleClickCardDetailsToCart = handleClickCardDetailsToCart;

    // document.querySelector('.btn-cart').addEventListener('click', (e) => {
    //   this.handleClickCardDetailsToCart(e.target.dataset.id);
    // });
  }

  init(){
    this.addListener(this.handleClickOutsideModal);
  }


  renderDetailsToModal = ({ id, model, image, description, price, brand, color, size }) => {
    const product = { id, model, image, description, price, brand, color, size };
    const strModalHTML = `
      <div class="detailes_wrapper">
        <div class="detailes_img">
          <img src="${image}" alt="${model}" />
        </div>
        <div class="detailes_content">
          <button type="button" class="btn-close" aria-label="Close"></button>
          <h5 class="details_content--brand">${brand}</h5>
          <h1 class="detailes_sontent--title">${model}</h1>
          <h3 class="detailes_content--price">$ ${price}</h3>
          <hr />
          <p class="details_content--color">Color: ${color}</p>
          <hr />
          <div class="details_content--size">
            <h6>Size: </h6>
            <p>${size}</p>
          </div>
          <hr />
          <p class="details_content--description">${description}</p>
          <button class="btn btn-dark btn-cart" data-id="${ id }">Add <i class="bi bi-bag-plus-fill"></i></button>
        </div>
      </div>
    `;
    this.MODAL_BODY.innerHTML = '';
    this.MODAL_BODY.insertAdjacentHTML('beforeend', strModalHTML);
    this.MODAL_CONTAINER.classList.add('open');

    this.MODAL_BODY.querySelector('.btn-cart').addEventListener('click', () => {
      this.handleClickCardDetailsToCart(product);
    });
  }

  closeModal() {
    this.MODAL_CONTAINER.classList.remove("open");
  }
  addListener(listener){
    this.MODAL_CONTAINER.addEventListener('click', listener);
  }

}
