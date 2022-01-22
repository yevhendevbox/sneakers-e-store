export default class ViewDetails {

  constructor(listener) {
    const modal = `
      <div class="modal my_modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content my_content">
          </div>
        </div>
      </div>`;
    this.BODY = document.querySelector('#root');
    this.BODY.insertAdjacentHTML('afterbegin', modal);

    this.modal = document.querySelector('.my_modal');
    this.content = document.querySelector('.my_content');

    this.modal.addEventListener('click', listener);
  }

  render = ({ model, image, description, price, color, gender, size, brand }) => {
    this.content.innerHTML = `
            <div class="modal-header">
                <h5 class="modal-title justify-content-center">${ model }</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class = "card-img-wrapper"> 
                    <img src="${ image }" class="card-img-top" alt="${ model }">
                </div>
                <p class="card-info"><span class = 'modal-span'>brand: </span>${ brand }</p>
                <p class="card-info"><span class = 'modal-span'>model: </span>${ model }</p>
                <p class="card-info"><span class = 'modal-span'>description: </span>${ description }</p>
                <p class="card-info"><span class = 'modal-span'>color: </span>${ color }</p>
                <p class="card-info"><span class = 'modal-span'>gender: </span>${ gender }</p>
                <p class="card-info"><span class = 'modal-span'>size: </span>${ size }</p>
                <p class="card-info-price"><span class = 'modal-price'>price: </span>$${ price }</p>
            </div>
            <div class="modal-footer">
			  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
			</div>
        `
    // debugger;
    // this.modal.classList.remove('.hide');
    this.modal.classList.add('show');
    // debugger;
  }

  close(e) {
    // debugger;
    this.content.innerHTML = '';
    this.modal.classList.remove('show');
  }
}

