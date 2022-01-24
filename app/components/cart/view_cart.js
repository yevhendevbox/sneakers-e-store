export default class ViewCart {
  list;
  constructor(handleCloseCart, handleOpenCart, handleDeleteItem, getProductById){
    this.body = document.querySelector('#root');

    this.handleCloseCart = handleCloseCart;
    this.handleOpenCart = handleOpenCart;
    this.handleDeleteItem = handleDeleteItem;
    this.getProductById = getProductById;

    // listener on the button Cart in the header
    this.cart = document.querySelector('.cart_icon');
    this.cart.addEventListener('click', this.handleOpenCart);

    const modal = `<div class="modal cartModal modal-outer" id="cartModal">
        <div class="modal-inner">
          <div class="modal-top">
            <h4 class="modal-title">Your order</h4>
          </div>
          <div class="modal-body">
            <table class="table">
              <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Product</th>
                <th scope="col">Count</th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
                <th scope="col"></th>
              </tr>
              </thead>
              <tbody class='cart-body'>
              </tbody>
            </table>
            <div class="d-flex justify-content-end">
              <h5>Total: <span class="total-price text-success"></span></h5>
            </div>
          </div>
          <div class="modal-footer border-top-0 d-flex justify-content-between">
            <button type="button" class="btn btn-secondary close-cart" data-dismiss="modal">Close</button>
            <button type="button" class="order_btn btn btn-success">Order</button>
          </div>
        </div>  
    </div>`

    this.body.insertAdjacentHTML('afterbegin', modal);

    this.modal = document.querySelector('#cartModal');
    this.cartBody = document.querySelector('.cart-body');
    this.totalPrice = document.querySelector('.total-price');
    // this.cartCounter = document.querySelector('.cart_counter');

    this.modal.addEventListener('click', this.handleCloseCart);
  }

  renderCart = data => {
    console.log('data for cart rendering', data);
    let cartItem = ``;
    let countTotal = 0;

    data.forEach((item, index) => {
      const { id, model, price, count } = item;
      // const product = this.getProductById(id);
      console.log('product by id for cart rendering', item);
      cartItem += `
        <tr id="${index+1}">
          <td>${index+1}</td>
            <td>${model}</td>
            <td>${count}</td>
            <td>${price}</td>
            <td>${price * count}</td>
            <td>
              <a href="#" class="delete-item btn btn-danger btn-sm">
                <i class="fa fa-times"></i>
              </a>
            </td>
        </tr>`;
      countTotal += item.price;
    });
    this.cartBody.innerHTML = cartItem;
    this.totalPrice.innerText = `${countTotal}$`;

    let deleteItemBtn = document.querySelectorAll('.delete-item');
    deleteItemBtn.forEach(el => el.addEventListener('click', () => this.handleDeleteItem(el)))

    this.modal.classList.add('open');
  }

  close = (e) => {
    // debugger;
    this.modal.innerHTML = '';
    this.modal.classList.remove('open');
  }

}
