import Observer from "../../observer.js";
import ViewModal from "./view_modal.js";

export default class ControllerModal {
  constructor(){
    this.view = new ViewModal(this.handleClickOutsideModal);
    this.observer = new Observer();

    this.view.init();
    this.observer.subscribe("ON_CLICK_OPEN_MODAL", this.handleClickOnCardToTrigerModal);
  }

  handleClickOnCardToTrigerModal = obj => {
    this.view.renderDetailsToModal(obj);
  }

  handleClickOutsideModal = event => {
    const isOutside = !event.target.closest(".modal-inner");
    const isCloseBtn = event.target.classList.contains('btn-close');
    if (isOutside || isCloseBtn) {
      this.view.closeModal();
    }
  }
}
