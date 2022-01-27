import Observer from "../../observer.js";
import ModelOrder from "./model_order.js";
import ViewOrder from "./view_order.js";

export default class ControllerOrder {
  constructor(){
    this.model = new ModelOrder();
    this.view = new ViewOrder(this.handleClickOrder);

    this.observer = new Observer();
    this.observer.subscribe('OPEN_ORDER', this.handleOrderData);
    this.observer.subscribe('RENDER', this.handleGetData);
  }

  handleOrderData () {

    // add html to modal
    this.view.addOrderForm();
  }

  handleClickOrder() {
    const dataOrder = this.model.getOrderFromLocalStorage();
    this.observer.notify("OPEN_ORDER", dataOrder);
  }

  // get full data from card component
  handleGetData = data => {
    this.model.setFullData(data);
  }
}
