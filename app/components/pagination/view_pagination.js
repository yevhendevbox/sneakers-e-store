import Observer from "../../observer.js";

export default class ViewPagination {
  CONTAINER = document.querySelector('#content-container');

  constructor(){
    this.observer = new Observer();
  }

  init(){
    this.renderPuginationBtns();
  }

  renderPaginationContainer(){
    const strHTML = `
      <div class="pagination_wrap"></div>
    `;
    this.CONTAINER.insertAdjacentHTML('beforeend', strHTML);
    this.observer.notify('ON_RENDER_PAG_CONTAINER');
  }

  renderPuginationBtns(pages = 3){
    const strHTML = `
    <ul class="pagination>
      <li class="page-item active" aria-current="page">
        <span class="page-link">1</span>
      </li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
    </ul>
    `;
    // this.PAGINATION.innerHTML = '';
    document.querySelector('.pagination_wrap').insertAdjacentHTML('afterbegin', strHTML);
  }
}