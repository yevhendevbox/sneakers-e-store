import Observer from "../../observer.js";
import ViewModal from "./view_modal.js";

export default class ControllerModal {
  constructor(){
    this.view = new ViewModal(this.handleClickOutsideModal, this.handleClickCardDetailsToCart);
    this.observer = new Observer();

    // this.view.init();
    this.observer.subscribe("ON_CLICK_OPEN_MODAL", this.handleClickOnCardToTrigerModal);
  }

  handleClickOnCardToTrigerModal = obj => {
    this.view.renderDetailsToModal(obj);
  }

  handleClickOutsideModal = event => {
    // console.log('event.target = ', event.target);
    // console.log('!event.target.closest(".modal-inner") = ', !event.target.closest(".modal-inner"));
    // console.log('event.target.classList.contains(btn-close) = ', event.target.classList.contains('btn-close'));
    const isOutside = !event.target.closest(".modal-inner");
    const isCloseBtn = event.target.classList.contains('btn-close');
    if (isOutside || isCloseBtn) {
      this.view.closeModal();
    }
  }

  handleClickCardDetailsToCart = product => {
    console.log('this=' ,this);
    console.log('cart from details = ', product);
    this.observer.notify('ADD_TO_CART', product);
  }
}
