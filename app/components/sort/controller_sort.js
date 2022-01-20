import ViewSort from "./view_sort.js";

export default class ControllerSort {
  constructor(handleSortByControllerCards){
    this.view = new ViewSort(this.handleSortSelectClick);
    this.handleSortByControllerCards = handleSortByControllerCards;

    this.view.init();
  }
  handleSortSelectClick = event => {
    const sortType = event.target.value;
    this.handleSortByControllerCards(sortType);
  }
}