import Observer from "../../observer.js";
import ViewSearch from "./view_search.js";

export default class ControllerSearch {
  constructor(){
    this.view = new ViewSearch(this.handleSearchOnInput);
    this.observer = new Observer();

    this.view.init();
  }
  handleSearchOnInput = event => {
    const searchVal = event.target.value;
    this.observer.notify("ON_INPUT_SEARCH", searchVal);
  }

}