export default class ModelOrder {
  constructor(getFullData) {
  }

  setOrderToLocalStorage = ({name, email, phone}, data) =>{
    const history = JSON.parse(localStorage.getItem('history')) || [];
    const order = this.getFullOrder(data);
    history.push({
      name,
      email,
      phone,
      order,
    });
    localStorage.setItem('history', JSON.stringify(history));
  }

  getFullOrder = (data) => {
    const sneakers = JSON.parse(localStorage.getItem('sneakers')) || [];

    return sneakers.reduce((arr, el)=>{
      return [...arr, this.getById(data, el.id)]
    }, []);
  }

  getById = (array, id) => array.find(item => item.id === id)

  validateInputs = ({name, email, phone}) => {
    const nameInput = document.querySelector('.name');
    const emailInput = document.querySelector('.email');
    const phoneInput = document.querySelector('.phone');

    const nameRegExp = /([\u0401\u0451\u0410-\u044fa-z]+ ?)+/gi;
    const phoneRegExp = /\+380(\d{2})[-. ]?(\d{3})[-. ]?(\d{2})[-. ]?(\d{2})/g;
    const emailRegExp = /([a-z0-9]+.?)+[a-z0-9]+@[a-z]+.[a-z0-9]+/gi;
    let result = true;

    if(!name.match(nameRegExp)) {
      nameInput.classList.add('red');
      result = false;
    } else {nameInput.classList.remove('red')}

    if(!email.match(emailRegExp)) {
      emailInput.classList.add('red');
      result = false;
    } else {emailInput.classList.remove('red')}

    if(!phone.match(phoneRegExp)) {
      phoneInput.classList.add('red');
      result = false;
    } else {phoneInput.classList.remove('red')}

    return result;
  }

  clearLocalStorage = () => {
    localStorage.removeItem('sneakers');
    localStorage.removeItem('counter');
  }

  notificate = () => {
    const history = JSON.parse(localStorage.getItem('history'));
    const order = history[history.length - 1];
    const message = `You get new order: 
    name: ${order.name}
    email: ${order.email}
    phone: ${order.phone}
    `;
    const URL = `https://api.telegram.org/bot5110330498:AAEJpIfxlKyvkFxsPDqvQEOeArvmvMx2uTs/sendMessage?chat_id=245907196&text=${message}`;
    console.log('urlBot = ', URL);
    fetch(URL);
  }
}
