export default class ViewCards {
  BODY = document.body.querySelector('.content');

  constructor(handleClickLike, handleClickDetails) {
    this.content = document.querySelector('.content');

    // this.handleClickLike = handleClickLike;
    this.handleClickDetails = handleClickDetails;

    //listener for click likes
    this.BODY.addEventListener('click', handleClickLike);

    //listener for click details
    // this.BODY.addEventListener('click', handleClickDetails);
  }

  renderSneakers(sneakers) {
    this.BODY.innerHTML = '';
    this.BODY.insertAdjacentHTML('beforeend', sneakers.map(this.getSneakersHTML).join(''));
    // debugger;
    //listener for details modal window
    this.content.querySelectorAll('.btn-details').forEach(btn => btn.addEventListener('click', this.handleClickDetails));
  }

  getSneakersHTML({ id, model, image, description, price, brand }) {
    return `
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
        <div class="card mb-4 h-100 mycard" data-id="${ id }">
          <img src="${ image }" class="card-img-top" alt="${ model }">
          <div class="card-body">
            <h5 class="card-title">${ model }</h5>
            <h4 class="card-subtitle mb-2 text-muted">${ brand }</h4>
            <p class="card-text">${ description }</p>
          </div>
          <div class="card-footer bg-transparent">
            <div class="footer-bottom">
              <h5 class="price">${price}</h5>
              <a href="#" class="btn btn-lg btn-dark">Add <i class="bi bi-bag-plus-fill"></i></a>
            </div>  
            <button type="button" class="btn btn-success btn-details w-100" data-id="${ id }">Details</button>
          </div>
        </div>
      </div>  
    `;
  }

  //TODO: move to controller?
  getCardId = ev => ev.target.closest('.mycard')?.dataset.id;

}
