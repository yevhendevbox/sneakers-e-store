import Observer from "../../observer.js";

export default class ModelPagination {
  constructor(){
    this.observer = new Observer();

    // this.observer.subscribe('ON_PAGE_COUNTED', this.countPages)
  }

  countPages = data => {
    const maxItemsOnPage = 12;
    const itemsAmount = data.length;
    let pagesAmount = Math.ceil(itemsAmount / maxItemsOnPage);

    return pagesAmount;
  }

}