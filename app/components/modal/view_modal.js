export default class ViewModal {
  MAIN = document.body.querySelector(".main-content");

  renderModalWindow = () => {
    const strHTML = `
      <div class="modal-outer open">
        <div class="modal-inner">
          <p>TEsting 123</p>
        </div>
      </div>
      <!-- /.modal-outer -->
    `;
    this.MAIN.insertAdjacentHTML('beforeend', strHTML);
  }
}