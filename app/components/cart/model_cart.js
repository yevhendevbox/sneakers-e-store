export default class ModelCart {
  constructor() {
    this.cartCounter = document.querySelector('.cart_counter');

    this.data = JSON.parse(localStorage.getItem('sneakers')) || [];
    this.span = localStorage.getItem('counter') || 0;

    this.addToSpanCart();
  }

  addToArrayForCart(product) {
    const { id } = product;
    let dataFromLocal = JSON.parse(localStorage.getItem('sneakers')) || [];
    // this.data = dataFromLocal;
    // check if there is already in this array
    let ind = dataFromLocal.findIndex(el => el.id === id);
    if (+ind >= 0) {
      dataFromLocal[ind].count++ ;
    } else dataFromLocal.push({ id, count: 1 })
    this.data = dataFromLocal;

    return dataFromLocal;
  }

  getCount = () => {
    this.span = this.data.reduce((sum, el) => {
      return sum + +el.count;
    }, 0)
    return this.span;
  }

  addToSpanCart = () => {
    this.cartCounter.innerHTML = this.span;
  }

  updateLocalStorage() {
    this.getCount();
    localStorage.setItem('sneakers', JSON.stringify(this.data));
    localStorage.setItem('counter', this.span);
  }

  getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('sneakers')) || [];
  }

  setFullData(data) {
    this.fulldata = data;
  }

  getProductById = id => {
    return this.fulldata.find(item => item.id === id)
  }
}
