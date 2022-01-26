export default class ViewCart {
  list;
  constructor(handleCloseCart, handleOpenCart, handleDeleteItem, getProductById, removeFromCart, updateCart){
    this.body = document.querySelector('#root');

    this.handleCloseCart = handleCloseCart;
    this.handleOpenCart = handleOpenCart;
    this.handleDeleteItem = handleDeleteItem;
    this.getProductById = getProductById;
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
          <div class="modal-footer border-top-0 d-flex justify-content-between">
            <button type="button" class="btn btn-secondary close-cart" data-dismiss="modal">Close</button>
            <button type="button" class="order_btn btn btn-success">Order</button>
          </div>
        </div>  
    </div>`

    this.body.insertAdjacentHTML('afterbegin', modal);

    this.modal = document.querySelector('#cartModal');
    this.cartBody = document.querySelector('.cart-body');
    this.totalCount = document.querySelector('.total-count');
    this.totalPrice = document.querySelector('.total-price');

    // listener on the open modal Cart window for closing
    this.modal.addEventListener('click', this.handleCloseCart);
  }

  renderCart = data => {
    console.log('data for cart rendering', data);
    let cartItem = ``;
    let countTotal = 0;
    let priceTotal = 0;

    data.forEach((item, index) => {
      const { id, model, price, count } = item;
      // const product = this.getProductById(id);
      console.log('product by id for cart rendering', item);
      cartItem += `
        <tr id="${index+1}">
          <td>${index+1}</td>
            <td>${model}</td>
            <td><input class="counter" data-id=${id} type="number" name="count" value=${+count} min="1" step="1"></td>
            <td>${price}</td>
            <td>${Math.round(price * count)}</td>
            <td>
              <a href="#" class="delete-item btn btn-danger btn-sm" data-id="${id}"></a>
            </td>
        </tr>`;
      priceTotal += price * count;
      countTotal += +count;
      console.log('countTotal = ', countTotal);
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
  }

}
