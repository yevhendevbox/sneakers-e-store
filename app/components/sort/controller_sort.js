import ViewSort from "./view_sort.js";
import Publisher from "../../publisher.js";

export default class ControllerSort {

  constructor() {
    this.view = new ViewSort(this.handleClickSelectSort);

    this.view.init();

    this.pub = new Publisher();
  }

  handleClickSelectSort = ev => {
    const sortType = ev.target.value;
    this.pub.notify('ON_CLICK_SORT', sortType);
  }
}
