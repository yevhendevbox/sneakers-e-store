import Observer from "../../observer.js";
import ViewFilter from "./view_filter.js";


export default class ControllerFilter {
  constructor(){
    this.view = new ViewFilter(this.handleFilterCheckboxCheck);

    this.view.init();
    this.observer = new Observer();
  }

  handleFilterCheckboxCheck = event => {
    const targetCheckbox = event.target;
    const checkBox = targetCheckbox.value.toLowerCase();
    const fType = targetCheckbox.closest('.accordion-item').dataset.filter;
    let criteria = [checkBox, fType];

    [...document.querySelectorAll('.form-check-input')].forEach(item => {
      if (!targetCheckbox.checked) {
        item.disabled = false;
        criteria = [];
      } else {
        item.disabled = true;
        targetCheckbox.disabled = false;
      }
    })

    this.observer.notify('ON_CLICK_FILTER', criteria);
  }

}