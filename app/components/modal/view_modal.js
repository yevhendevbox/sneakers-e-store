export default class ViewModal {
  MAIN = document.body.querySelector(".main-content");
  constructor(){

  }

  init(){
    this.renderModalWindow();
  }

  addListeners(){}

  renderModalWindow = () => {
    const strHTML = `
      <div class="modal-outer">
        <div class="modal-inner">
          <p>TEsting 123</p>
        </div>
      </div>
      <!-- /.modal-outer -->
    `;
    this.MAIN.insertAdjacentHTML('beforeend', strHTML);
  }
}