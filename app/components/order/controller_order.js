import Observer from "../../observer.js";
import ModelOrder from "./model_order.js";
import ViewOrder from "./view_order.js";

export default class ControllerOrder {
  constructor(){
    this.model = new ModelOrder();
    this.view = new ViewOrder(this.handleMakeOrder);

    this.observer = new Observer();
    this.observer.subscribe('RENDER', this.getFullData);
  }

  handleMakeOrder = () => {
    const inputsData = this.view.getInfoFromInputs();
    if(this.model.validateInputs(inputsData)) {
      this.model.setOrderToLocalStorage(inputsData, this.fulldata);
      this.model.clearLocalStorage();
      this.view.closeCart();
      this.view.clearInput();
      // this.model.notificate();
    }

    //повесить отсылку на телеграм
  }

  getFullData = (data) => {
    this.fulldata = data;
  }
}
