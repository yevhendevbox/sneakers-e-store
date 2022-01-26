import Observer from "../../observer.js";
import ModelPagination from "./model_pagination.js";
import ViewPagination from "./view_pagination.js";

export default class ControllerPagination {
  constructor(){
    this.view = new ViewPagination();
    this.model = new ModelPagination();
    this.observer = new Observer();

    this.observer.subscribe('ON_RENDER_PAG_CONTAINER', this.onRenderPaginationContainer);
    this.view.renderPaginationContainer();
  }

  onRenderPaginationContainer = () => {
    this.view.init();
  }

}