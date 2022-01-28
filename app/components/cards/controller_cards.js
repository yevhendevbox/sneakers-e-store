import Observer from "../../observer.js";
import ModelCards from "./model_cards.js";
import ViewCards from "./view_cards.js";

export default class ControllerCards{
  constructor(){
    this.model = new ModelCards();
    this.view = new ViewCards(this.handleClickCardDetails, this.handleAddToCart);

    this.observer = new Observer();

    this.fullData = this.model.getProductsAll();

    this.init();
    this.observer.subscribe("ON_CLICK_SORT", this.handleSort);
    this.observer.subscribe("ON_CLICK_FILTER", this.handleFilter);
    this.observer.subscribe("ON_INPUT_SEARCH", this.handleSearch);
    // this.observer.subscribe("ON_PAGE_COUNTED", this.renderPageByNum);
  }
  init(){
    this.model.getData().then(d => {
      this.view.renderSneakers(d);
      this.observer.notify('RENDER', this.model.data);
    });
  }

  handleSort = sortType => {
    const data = this.model.getSortData(sortType);
    // this.observer.notify("ON_SORTED_DATA", data);
    this.view.renderSneakers(data);
  }

  handleFilter = filterType => {
    const data = this.model.getFilterData(filterType);
    // this.observer.notify("ON_FILTERED_DATA", data);
    this.view.renderSneakers(data);
  }

  handleSearch = searchReq => {
    const data = this.model.getSearchedData(searchReq);
    // this.observer.notify("ON_SEARCHED_DATA", data);
    this.view.renderSneakers(data);
  }

  handleClickCardDetails = event => {
    const id = this.view.getCardId(event);
    const clickedCard = this.model.data.find(obj => obj.id === id);
    this.observer.notify("ON_CLICK_OPEN_MODAL", clickedCard);
  }

  //addToCart from cards. Add product to cart data array
  handleAddToCart = id =>{
    const product = this.model.getProductById(id);
    this.observer.notify('ADD_TO_CART', product);
  }

  // Get chunks from pagination model to render page
  // renderPageByNum = chunk => {
  //   this.view.renderSneakers(chunk);
  // }
}
