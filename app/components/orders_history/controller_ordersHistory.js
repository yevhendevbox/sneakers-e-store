import ViewOrdersHistory from "./view_ordersHistory.js";

export default class ControllerOrdersHistory {
  constructor(){
    this.view = new ViewOrdersHistory(this.handldeHistoryBtnClick);

    this.view.addListener();
  }

  handldeHistoryBtnClick = event => {
    const historyBtn = event.target;
    console.log(historyBtn);
  }
}