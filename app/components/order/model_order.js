export default class ModelOrder {
  orderList;
  constructor() {
  }

  setOrderToLocalStorage = ({name, email, phone}) =>{
    const history = JSON.parse(localStorage.getItem('history')) || [];
    const sneakers = JSON.parse(localStorage.getItem('sneakers')) || [];
    history.push({
      name,
      email,
      phone,
      order: sneakers,
    });
    localStorage.setItem('history', JSON.stringify(history));
  }
}
