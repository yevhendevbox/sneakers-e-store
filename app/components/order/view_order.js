export default class ViewOrder {
  constructor(handleOrderData) {
    this.handleOrderData = handleOrderData;
    this.orderBtn = document.querySelector('.order-btn');
    this.cartBody = document.querySelector('.modal-inner');

    // this.orderBtn.addEventListener('click', this.handleOrderData);
  }

  addOrderForm() {

    // const orderFormHTML = `
    // <div class="cart-order-block d-none" id="orderBlock">
    //   <div class="col-12 text-center"><h3 class="annotation-title">Введите свои данные</h3></div>
    //     <form id="cartForm" class="row m-0">
    //       <div class="form-group col-12 p-0 d-flex justify-content-center my-2">
    //           <input type="text" name="customerName" id="customerName" placeholder="Alan" class="w-100 col-8"/>
    //         </div>
    //       <div class="form-group col-12 p-0 d-flex justify-content-center my-2">
    //         <input type="email" name="customerEmail" id="customerEmail" placeholder="mail@something.com" class="w-100 col-8"/>
    //       </div>
    //       <div class="form-group col-12 p-0 d-flex justify-content-center my-2">
    //         <input type="text" name="customerPhone" id="customerPhone" placeholder="380991234567" class="w-100 col-8"/>
    //       </div>
    //       <div class="col-12 d-flex justify-content-end cart-order-block-footer">
    //         <button id="orderCancel" type="button" class="btn btn-secondary">Cancel</button>
    //         <button id="orderSuccess" type="button" class="btn btn-primary">Order!</button>
    //       </div>
    //     </form>
    //   </div>
    // </div>`;
    // this.cartBody.insertAdjacentHTML('afterend', orderFormHTML);

  }
}
