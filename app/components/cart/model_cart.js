export default class ModelCart {
  constructor() {
    this.cartCounter = document.querySelector('.cart_counter');

    this.data = JSON.parse(localStorage.getItem('sneakers')) || [];
    this.span = localStorage.getItem('counter') || 0;

    this.addToSpanCart();
  }

  addToArrayForCart(product) {
    const { id, model, price } = product;
    console.log('{ id, model, price } = ', { id, model, price });
    // check if there is already in this array
    let ind = this.data.findIndex(el => el.id == id);
    if (+ind >= 0) {
      this.data[ind].count += 1 ;
    } else this.data.push({ id, model, price, count: 1 })

    return this.data;
  }

  getCount = () => {
    this.span = this.data.reduce((sum, el) => {
      return sum + +el.count;
    }, 0)
    console.log('data = ', this.data);
    console.log('span = ', this.span);
    return this.span;
  }

  addToSpanCart = () => {
    this.cartCounter.innerHTML = localStorage.getItem('counter') || 0;
  }

  updateLocalStorage() {
    this.getCount();
    localStorage.setItem('sneakers', JSON.stringify(this.data));
    localStorage.setItem('counter', this.span);
  }

  getFromLocalStorage() {
    return this.data = JSON.parse(localStorage.getItem('sneakers')) || [];
  }

  getFullData(data) {
    console.log('full data in cart model from render', data);
    return data;
  }

  getProductById = id => {
    let list = this.getFullData();
    return list.find(item => item.id === id)
  }
}
