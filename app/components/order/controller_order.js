import Observer from "../../observer.js";
import ModelOrder from "./model_order.js";
import ViewOrder from "./view_order.js";

export default class ControllerOrder {
  constructor(){
    this.model = new ModelOrder();
    this.view = new ViewOrder();

    this.observer = new Observer();
  }
}
