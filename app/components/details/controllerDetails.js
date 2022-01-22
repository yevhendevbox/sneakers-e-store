import Publisher from "../../publisher.js";
import ViewDetails from "./ViewDetails.js";

export default class ControllerDetails {

  constructor() {
    this.view = new ViewDetails();

    this.pub = Publisher;
  }

}
