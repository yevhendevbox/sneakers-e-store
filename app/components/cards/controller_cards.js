import ModelCards from "./model_cards.js";
import ViewCards from "./view_cards.js";
import Publisher from "../../publisher.js";

export default class ControllerCards {
  constructor(){
    this.model = new ModelCards();
    this.view = new ViewCards(this.handleClickLike);

    this.init();

    this.pub = new Publisher();

    this.pub.subscribe('ON_CLICK_SORT', this.handleSort)
  }
  init(){
    this.model.getData().then(d => this.view.renderSneakers(d));
  }

  handleSort = sortType => {
    const data = this.model.getSortData(sortType);
    this.view.renderSneakers(data)
  }

  handleClickDetails = ev => {
    const id = this.view.getBtnId(ev);
    this.pub.notify('DETAILS', id);
  }

  handleClickLike = ev => {
    const id = this.view.getCardId(ev);
    id && this.pub.notify('LIKE');
  }
}
