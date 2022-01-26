export default class ModelCart {
  constructor() {
    this.cartCounter = document.querySelector('.cart_counter');

    this.data = JSON.parse(localStorage.getItem('sneakers')) || [];
    this.span = localStorage.getItem('counter') || 0;

    this.addToSpanCart();
  }

  addToArrayForCart(product) {
    const { id } = product;
    // check if there is already in this array
    let ind = this.data.findIndex(el => el.id === id);
    if (+ind >= 0) {
      this.data[ind].count++ ;
    } else this.data.push({ id, count: 1 })

    return this.data;
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
