

export default class ViewPagination {
  CONTAINER = document.querySelector('#content-container');

  constructor(){

  }

  renderPaginationContainer(){
    const strHTML = `
      <div class="pagination_wrap">
        <ul class="pagination>
        </ul>
      </div>
    `;
    this.CONTAINER.insertAdjacentHTML('beforeend', strHTML);
    // this.observer.notify('ON_RENDER_PAG_CONTAINER');
  }

  renderPuginationBtns(pages = 3){

    for (let i = 0; i <= pages; i++) {
      const strHTML = `
      <li class="page-item" aria-current="page" data-page="${i + 1}">
        <span class="page-link">${i + 1}</span>
      </li>
    `;
      document.querySelector('.pagination').insertAdjacentHTML('afterbegin', strHTML);
    }

    // this.PAGINATION.innerHTML = '';
  }
}