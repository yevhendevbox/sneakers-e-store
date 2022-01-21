import ViewModal from "./view_modal.js";

export default class ControllerModal {
  constructor(){
    this.view = new ViewModal(this.handleClickOnCardToTrigerModal);

  }

  handleClickOnCardToTrigerModal = obj => {
    this.view.renderModalWindow(obj);
    this.view.init();
  }
}
