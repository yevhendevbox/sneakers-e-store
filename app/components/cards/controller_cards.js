import ModelCards from "./model_cards.js";
import ViewCards from "./view_cards.js";

export default class ControllerCards {
  constructor(){
    this.model = new ModelCards();
    this.view = new ViewCards(this.handleClickLike);

    this.init();
  }
  init(){
    this.model.getData().then(d => this.view.renderSneakers(d));
  }

  handleSort = sortType => {
    const data = this.model.getSortData(sortType);
    this.view.renderSneakers(data)
  }

  handleClickDetails = ev => {

  }

  handleClickLike = ev => {
    const id = this.view.getCardId(ev)
  }
}
