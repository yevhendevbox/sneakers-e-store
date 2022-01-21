import ModelModal from "./model_modal.js";
import ViewModal from "./view_modal.js";

export default class ControllerModal {
  constructor(){
    this.model = new ModelModal();
    this.view = new ViewModal();

    this.view.init();
  }

  handleClickOnCardToTrigerModal(){

  }
}
