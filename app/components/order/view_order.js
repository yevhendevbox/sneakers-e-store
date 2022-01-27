export default class ViewOrder {
  constructor(handleMakeOrder) {

    this.makeOrder = document.querySelector('.make_order');
    this.formOrder = document.querySelector('.form_order');
    this.formName = this.formOrder.querySelector('.name');
    this.formEmail = this.formOrder.querySelector('.email');
    this.formPhone = this.formOrder.querySelector('.phone');

    this.makeOrder.addEventListener('click', handleMakeOrder);
  }

  getInfoFromInputs() {
    const name = this.formName.value;
    const email = this.formEmail.value;
    const phone = this.formPhone.value;

    return {name, email, phone}
  }

}
