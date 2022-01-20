export default class ViewSort{
  CONTAINER = document.querySelector('#content-container');
  SORT_SELECTOR = '#floatingSelect';

  constructor(handleSortSelectClick){
    this.handleSortSelectClick = handleSortSelectClick;
  }
  init() {
    this.renderSelect();
    this.addListeners(this.handleSortSelectClick);
  }
  addListeners(listener){
    document.querySelector(this.SORT_SELECTOR).addEventListener('change', listener);
  }
  renderSelect(){
    const selectHTML = `
        <div class="sort-inputs">
        <div class="form-floating">
          <select class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example">
            <option selected
              disabled>Sort By: </option>
            <option value="priceUp">Price Up</option>
            <option value="priceDown">Price Down</option>
            <option value="brandA">Brand A to Z</option>
            <option value="brandZ">Brand Z to A</option>
          </select>
          <label for="floatingSelect">Choose category</label>
        </div>
      </div>
    `;
    this.CONTAINER.insertAdjacentHTML('afterbegin', selectHTML);
  }
}