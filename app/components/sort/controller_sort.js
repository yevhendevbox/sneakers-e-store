import Observer from "../../observer.js";
import ViewSort from "./view_sort.js";

export default class ControllerSort {
  constructor(){
    this.view = new ViewSort(this.handleSortSelectClick);

    this.view.init();
    this.observer = new Observer();
  }
  handleSortSelectClick = event => {
    const sortType = event.target.value;
    this.observer.notify("ON_CLICK_SORT", sortType);
  }
}