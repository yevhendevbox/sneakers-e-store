import ViewFilter from "./viewFilter.js";
import Publisher from "../../publisher.js";

export default class ControllerFilter {

  constructor() {
    this.view = new ViewFilter();

    this.pub = new Publisher();
  }
}
