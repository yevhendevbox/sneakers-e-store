import ViewSort from "./view_sort.js";

export default class ControllerSort {

  constructor(handleSortByControllerCards) {
    this.view = new ViewSort(this.handleClickSelectSort);
    this.handleSortByControllerCards = handleSortByControllerCards;

    this.view.init();
  }

  handleClickSelectSort = ev => {
    const sortType = ev.target.value;
    this.handleSortByControllerCards(sortType);
  }
}
