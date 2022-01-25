export default class ViewSearch {
  HEADER = document.querySelector('.nav-wrapper');
  SEARCH_SELECTOR = '[type=search]';

  constructor(handleSearchOnInput){
    this.handleSearchOnInput = handleSearchOnInput;
  }

  init() {
    this.renderSearchInput();
    this.addListenerOnInput(this.handleSearchOnInput);
  }

  addListenerOnInput(listener){
    document.querySelector(this.SEARCH_SELECTOR).addEventListener('input', listener);
  }

  renderSearchInput(){
    const searchHTML = `
    <div class="nav-search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    </div>
    `;
    this.HEADER.insertAdjacentHTML('afterbegin', searchHTML);
  }
}