export default class ViewCart {

  constructor(handleModalClick, handleOpenCart, removeFromCart, updateCart){
    this.body = document.querySelector('#root');

    this.handleModalClick = handleModalClick;
    this.handleOpenCart = handleOpenCart;
    this.removeFromCart = removeFromCart;
    this.updateCart = updateCart;

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
              <h5>Total count: <span class="total-count text-success"></span></h5>
            </div>
            <div class="d-flex justify-content-end mt-3">
              <h5>Total order value : <span class="total-price text-success"></span></h5>
            </div>
          </div>
          <div class="cart-order-block d-none" id="orderBlock">
            <div class="col-12 text-center"><h3 class="annotation-title">Введите свои данные</h3></div>
            <form class="form_order row m-0">
              <div class="form-group col-12 p-0 d-flex justify-content-center my-2">
                <input type="text" name="name" placeholder="enter name" class="name w-75" maxlength="50"/>
              </div>
              <div class="form-group col-12 p-0 d-flex justify-content-center my-2">
                <input type="email" name="email" placeholder="example@gmail.com" class="email w-75" maxlength="50"/>
              </div>
              <div class="form-group col-12 p-0 d-flex justify-content-center my-2">
                <input type="text" name="phone" placeholder="+38050-444-22-33" class="phone w-75" maxlength="13"/>
              </div>
              <div class="col-12 d-flex justify-content-center">
                <button type="button" class="make_order btn btn-primary mt-3">Make your order</button>
              </div>
            </form>  
          </div>
          <div class="modal-footer border-top-0 d-flex justify-content-between">
            <button type="button" class="btn btn-secondary close-cart" data-dismiss="modal">Close</button>
            <button type="button" class="order_btn btn btn-success">Order</button>
          </div>  
        </div>
      </div>  
    </div>`;

    this.body.insertAdjacentHTML('afterbegin', modal);
    this.inner = document.querySelector('.cart-order-block');
    this.orderBtn = document.querySelector('.order_btn');

    this.modal = document.querySelector('#cartModal');
    this.cartBody = document.querySelector('.cart-body');
    this.totalCount = document.querySelector('.total-count');
    this.totalPrice = document.querySelector('.total-price');

    // listener on the open modal Cart window for closing
    this.modal.addEventListener('click', this.handleModalClick);
  }

  renderCart = data => {
    let cartItem = ``;
    let countTotal = 0;
    let priceTotal = 0;

    data.forEach((item, index) => {
      const { id, model, price, count } = item;
      cartItem += `
        <tr id="${index+1}">
          <td>${index+1}</td>
            <td>${model}</td>
            <td><input class="counter" data-id=${id} type="number" name="count" value=${+count} min="1" step="1"></td>
            <td>${price}</td>
            <td>${Math.round(price * count)}</td>
            <td>
              <a href="#" class="delete-item btn btn-danger btn-sm" data-id="${id}">x</a>
            </td>
        </tr>`;
      priceTotal += price * count;
      countTotal += +count;
    });
    this.cartBody.innerHTML = cartItem;
    this.totalCount.innerText = `${countTotal}`;
    this.totalPrice.innerText = `${Math.round(priceTotal)} $`;

    let counterBtn = document.querySelectorAll('.counter');
    counterBtn.forEach(el => el.addEventListener('change', () => this.updateCart(el)))
    let deleteItemsBtn = document.querySelectorAll('.delete-item');
    deleteItemsBtn.forEach(el => el.addEventListener('click', () => this.removeFromCart(el.dataset.id)))

    this.modal.classList.add('open');
  }

  close = (e) => {
    this.modal.classList.remove('open');
    this.inner.classList.add('d-none');
    this.orderBtn.disabled = false;
  }

  clickOrder = (e) => {
    this.inner.classList.remove('d-none');
    this.orderBtn.disabled = true;
  }

}
