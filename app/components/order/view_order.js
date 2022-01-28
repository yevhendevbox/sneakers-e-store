export default class ViewOrder {
  constructor(handleMakeOrder) {

    this.makeOrder = document.querySelector('.make_order');
    this.formOrder = document.querySelector('.form_order');
    this.formName = this.formOrder.querySelector('.name');
    this.formEmail = this.formOrder.querySelector('.email');
    this.formPhone = this.formOrder.querySelector('.phone');
    this.modalCart = document.querySelector('.cartModal');
    this.span = document.querySelector('.cart_counter');
    this.inner = document.querySelector('.cart-order-block');

    this.makeOrder.addEventListener('click', handleMakeOrder);
  }

  getInfoFromInputs() {
    const name = this.formName.value;
    const email = this.formEmail.value;
    const phone = this.formPhone.value;

    return {name, email, phone}
  }

  closeCart = () => {
    this.modalCart.classList.remove('open');
    this.span.innerHTML = '0';
    this.inner.classList.add('d-none');
  }

  clearInput = () => {
    this.formName.value = '';
    this.formEmail.value = '';
    this.formPhone.value = '';
  }
}
