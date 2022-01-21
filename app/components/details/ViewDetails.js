export default class ViewDetails {

  constructor(handleClickDetails) {
    this.modal = document.querySelector('.my_modal');
    this.content = document.querySelector('.my_content');


    this.handleClickDetails = handleClickDetails;
  }
}
