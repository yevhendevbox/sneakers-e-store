import Observer from "../../observer.js";
import ViewCart from "./view_cart.js";
import ModelCart from "./model_cart.js";

export default class ControllerCart {
  constructor(){
    this.model = new ModelCart();
    this.view = new ViewCart(
        this.handleModalClick,
        this.handleClickOpenCart,
        this.removeFromCart,
        this.updateCart);
    this.observer = new Observer();

    this.observer.subscribe('ADD_TO_CART', this.handleAddToCart);
    this.observer.subscribe('OPEN_CART', this.handleOpenCart);
    this.observer.subscribe('RENDER', this.handleGetData);
  }

  handleAddToCart = product => {
    this.model.addToArrayForCart(product); // make array for cart, wich will be store in localStorage
    this.model.updateLocalStorage(); // update array in localStorage for cart
    this.model.addToSpanCart();
  }

  handleOpenCart = data => {
    this.view.renderCart(data);
  }

  handleModalClick = e => {
    if(e.target.classList.contains('order_btn')) {
      this.view.clickOrder(e);
    }
    // if(e.target.classList.contains('make_order')) {
    //   this.observer.notify('MAKE_ORDER', this.view.getInfoFromInputs());
    // }
    if (e.target.classList.contains('cartModal')
      || e.target.classList.contains('close-cart')) {
      this.view.close(e);
    }
  }

  handleClickOpenCart = () => {
    const dataCart = this.prepareDataForCart();
    this.observer.notify("OPEN_CART", dataCart);
  }

  prepareDataForCart = () => {
    const shortData = this.model.getFromLocalStorage();
    const prepareData = [];
    shortData.forEach((el, ind) => {
      prepareData[ind] = this.model.getProductById(el.id);
      prepareData[ind].count = el.count;
    })
    return prepareData;
  }

  // get full data from card component
  handleGetData = data => {
    this.model.setFullData(data);
  }

  // remove element from Cart
  removeFromCart = (id) => {
    this.model.data = this.model.data.filter(el => el.id !== id);
    this.model.updateLocalStorage();
    this.view.renderCart(this.prepareDataForCart());
    this.model.addToSpanCart();
  }

  // update Cart after change count of products in the cart
  updateCart = (el) => {
    let changeElement = this.model.data.find(item => item.id === el.dataset.id);
    changeElement.count = el.value;
    this.model.updateLocalStorage();
    this.view.renderCart(this.prepareDataForCart());
    this.model.addToSpanCart();
  }
}
