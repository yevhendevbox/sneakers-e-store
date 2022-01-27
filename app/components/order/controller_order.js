import Observer from "../../observer.js";
import ModelOrder from "./model_order.js";
import ViewOrder from "./view_order.js";

export default class ControllerOrder {
  constructor(){
    this.model = new ModelOrder();
    this.view = new ViewOrder(this.handleMakeOrder);

    this.observer = new Observer();
    this.observer.subscribe('MAKE_ORDER', this.handleOrder);
  }

  handleMakeOrder () {
    const inputsData = this.view.getInfoFromInputs();
    this.observer.notify('MAKE_ORDER', inputsData);
  }

  handleOrder (data) {
    this.model.setOrderToLocalStorage(data);
  }

}
