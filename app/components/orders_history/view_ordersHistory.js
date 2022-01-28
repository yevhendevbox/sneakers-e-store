export default class ViewOrdersHistory {
  MODAL_CONTAINER = document.body.querySelector(".modal-outer");
  MODAL_BODY = document.body.querySelector(".modal-inner");
  HISTORY_SELECTOR = '.history_btn';

  constructor(handldeHistoryBtnClick){
    this.handldeHistoryBtnClick = handldeHistoryBtnClick;

    this.addListener(this.handldeHistoryBtnClick);
  }

  addListener(listener){
    document.querySelector(this.HISTORY_SELECTOR).addEventListener('click', listener);
  }
}