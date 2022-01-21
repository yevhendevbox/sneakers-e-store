export default class ViewSort {
  SELECT = document.querySelector('.select');
  FORM_SELECT = '.form-select';

  constructor(handleClickSelectSort) {
    this.handleClickSelectSort = handleClickSelectSort;
  }

  init() {
    this.renderSelect();
    this.addListeners(this.handleClickSelectSort);
  }

  addListeners(listener) {
    debugger;
    document.querySelector(this.FORM_SELECT).addEventListener('change', listener)
  }

  renderSelect() {
    debugger;
    const form_select = `
      <div class="col-3 ms-auto" >
        <select class="form-select ms-auto" aria-label="Default select example">
          <option selected value="priceUp">price Up<i class="fas fa-sort-numeric-up"></i></option>
          <option value="priceDown">price Down<i class="fas fa-sort-numeric-down"></i></option>
          <option value="brandA">brand A-Z<i class="fas fa-sort-numeric-up"></i></option>
          <option value="brandZ">brand Z-A<i class="fas fa-sort-numeric-down"></i></option>
        </select>
      </div>
    `
    this.SELECT.insertAdjacentHTML('afterbegin', form_select);
  }
}
