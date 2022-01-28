import Observer from "../../observer.js";
import ModelPagination from "./model_pagination.js";
import ViewPagination from "./view_pagination.js";

export default class ControllerPagination {
  DATA_ITEMS = [];
  constructor(){
    this.view = new ViewPagination();
    this.model = new ModelPagination();
    this.observer = new Observer();


    this.observer.subscribe('RENDER', this.handleCountPagesForRender);
    this.observer.subscribe('ON_SORTED_DATA', this.handleCountPagesForRender);
    this.observer.subscribe('ON_FILTERED_DATA', this.handleCountPagesForRender);
    this.observer.subscribe('ON_SEARCHED_DATA', this.handleCountPagesForRender);

    this.view.renderPaginationContainer();
  }

  // onRenderPaginationContainer = () => {
  // }

  handleCountPagesForRender = dataObj => {
    this.DATA_ITEMS = dataObj;
    this.observer.notify('ON_PAGE_COUNTED', dataObj);
  }

  handleAmountPagesToRender = () => {
    const pages = this.model.countPages(this.DATA_ITEMS);
    this.view.renderPuginationBtns(pages);
  }

}