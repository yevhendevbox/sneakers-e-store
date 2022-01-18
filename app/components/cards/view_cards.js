export default class ViewCards {
  BODY = document.body.querySelector('.flex');

  renderSneakers(sneakers){
    this.BODY.insertAdjacentHTML('beforeend', sneakers.map(this.getSneakersHTML).join(''));
  }

  getSneakersHTML({ model, image, description, price }){
    return `
        <div class="card">
          <div class="card-image">
            <img
              src="${image}" alt="${model}">
            <span class="card-title grey-text text-darken-3">${model}</span>
          </div>
          <div class="card-content">
            <p class="card-content__wrap">${description}</p>
          </div>
          <!-- /.card-content -->
          <div class="card-action btn-rigth">
            <span class="price">$ ${price}</span>
            <a class="waves-effect waves-light btn-small btn-m-right grey darken-4">Add
              <i class="material-icons right">add_shopping_cart</i>
            </a>
          </div>
          <!-- /.card-action -->
        </div>
        <!-- /.card -->
    `;
  }
}