import Observer from "../../observer.js";
import ViewCart from "./view_cart.js";
import ModelCart from "./model_cart.js";

export default class ControllerCart {
  constructor(){
    this.model = new ModelCart();
    this.view = new ViewCart(this.handleCloseCart, this.handleClickOpenCart, this.handleDeleteItem, this.model.getProductById);
    this.observer = new Observer();

    this.observer.subscribe('ADD_TO_CART', this.handleCart);
    this.observer.subscribe('OPEN_CART', this.handleOpenCart);
    this.observer.subscribe('RENDER', this.handleGetData);
  }

  handleCart = product => {
    this.model.addToArrayForCart(product); // make array for cart, wich will be store in localStorage
    this.model.updateLocalStorage(); // update array in localStorage for cart
    this.model.addToSpanCart()
  }

  handleOpenCart = data => {
    this.view.renderCart(data);
  }

  handleCloseCart = e => {
    if (e.target.classList.contains('cartModal')
      || e.target.classList.contains('close-cart')) {
      this.view.close(e);
    }
  }

  handleClickOpenCart = () => {
    const dataCart = this.model.getFromLocalStorage();
    this.observer.notify("OPEN_CART", dataCart);
  }

  handleDeleteItem = el => {

  }

  // get full data from card component
  handleGetData = data => {
    this.model.getFullData(data);
  }
}
