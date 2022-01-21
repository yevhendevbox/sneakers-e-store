import Observer from "../../observer.js";
import ModelCards from "./model_cards.js";
import ViewCards from "./view_cards.js";

export default class ControllerCards{
  constructor(){
    this.model = new ModelCards();
    this.view = new ViewCards(this.handleClickCardDetails);

    this.init();

    this.observer = new Observer();
    this.observer.subscribe("ON_CLICK_SORT", this.handleSort);
  }
  init(){
    this.model.getData().then(d => this.view.renderSneakers(d));
  }

  handleSort = sortType => {
    const data = this.model.getSortData(sortType);
    this.view.renderSneakers(data);
  }

  // Get clicked card ID
  getCardId = event => event.target.closest(".card").dataset.id;

  handleClickCardDetails = event => {
    const id = this.getCardId(event);
  }

  handleOpenModal(event){}

}