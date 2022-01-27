export default class ModelOrder {
  orderList;
  constructor() {
  }

  getOrderFromLocalStorage() {
    return JSON.parse(localStorage.getItem('sneakers')) || [];
  }

  setFullData(data) {
    this.fulldata = data;
  }
}
