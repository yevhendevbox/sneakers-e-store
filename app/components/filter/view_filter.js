export default class ViewFilter {
  CONTAINER = document.querySelector('.main-content');
  CHECKBOX_CLASS = '.form-check-input';
  constructor(handleFilterCheckboxCheck) {
    this.handleFilterCheckboxCheck = handleFilterCheckboxCheck;
  }
  init() {
    this.renderFilterCheckboxes();
    this.addListeners(this.handleFilterCheckboxCheck);
  }

  addListeners(listener) {
    [...document.querySelectorAll(this.CHECKBOX_CLASS)].forEach(checkbox => {
      checkbox.addEventListener('click', listener);
    })
  }
  renderFilterCheckboxes() {
    const filterHTML = `
        <div class="sidebar">
          <div class="accordion"
          id="accordionPanelsStayOpenExample">
          <div class="accordion-item" data-filter="gender">
            <h2 class="accordion-header"
              id="panelsStayOpen-headingOne">
              <button class="accordion-button fs-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne">
                Filter by Gender:
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne">
              <div class="accordion-body">

                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="Male"
                    id="flexCheckMale">
                  <label class="form-check-label fs-4"
                    for="flexCheckMale">
                    Male
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="Female"
                    id="flexCheckFemale">
                  <label class="form-check-label fs-4"
                    for="flexCheckFemale">
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>
          <!-- .accordion-item -->
          <div class="accordion-item" data-filter="brand">
            <h2 class="accordion-header"
              id="panelsStayOpen-headingTwo">
              <button class="accordion-button fs-3 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo">
                Filter by brand:
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo">
              <div class="accordion-body">

                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="Adidas"
                    id="flexCheckAdidas">
                  <label class="form-check-label fs-4"
                    for="flexCheckAdidas">
                    Adidas
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input border-dark dark"
                    type="checkbox"
                    value="Asics"
                    id="flexCheckAsics">
                  <label class="form-check-label fs-4"
                    for="flexCheckAsics">
                    Asics
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="Converse"
                    id="flexCheckConverse">
                  <label class="form-check-label fs-4"
                    for="flexCheckConverse">
                    Converse
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="Jordan"
                    id="flexCheckJordan">
                  <label class="form-check-label fs-4"
                    for="flexCheckJordan">
                    Jordan
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="New Balance"
                    id="flexCheckNewBalance">
                  <label class="form-check-label fs-4"
                    for="flexCheckNewBalance">
                    New Balance
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="Nike"
                    id="flexCheckNike">
                  <label class="form-check-label fs-4"
                    for="flexCheckNike">
                    Nike
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="Puma"
                    id="flexCheckPuma">
                  <label class="form-check-label fs-4"
                    for="flexCheckPuma">
                    Puma
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="Reebok"
                    id="flexCheckReebok">
                  <label class="form-check-label fs-4"
                    for="flexCheckReebok">
                    Reebok
                  </label>
                </div>

              </div>
            </div>
          </div>
          <!-- .accordion-item -->
          <div class="accordion-item" data-filter="size">
            <h2 class="accordion-header"
              id="panelsStayOpen-headingThree">
              <button class="accordion-button fs-3 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree">
                Filter by size:
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree">
              <div class="accordion-body">

                <div class="form-check form-check-inline">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    id="inlineCheckbox5"
                    value="5">
                  <label class="form-check-label fs-4"
                    for="inlineCheckbox5">5</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    id="inlineCheckbox5point5"
                    value="5.5">
                  <label class="form-check-label fs-4"
                    for="inlineCheckbox5point5">5.5</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    id="inlineCheckbox6"
                    value="6">
                  <label class="form-check-label fs-4"
                    for="inlineCheckbox6">6</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    id="inlineCheckbox6point5"
                    value="6.5">
                  <label class="form-check-label fs-4"
                    for="inlineCheckbox6point5">6.5</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    id="inlineCheckbox7"
                    value="7">
                  <label class="form-check-label fs-4"
                    for="inlineCheckbox7">7</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    id="inlineCheckbox7point5"
                    value="7.5">
                  <label class="form-check-label fs-4"
                    for="inlineCheckbox7point5">7.5</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    id="inlineCheckbox8"
                    value="8">
                  <label class="form-check-label fs-4"
                    for="inlineCheckbox8">8</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    id="inlineCheckbox8point5"
                    value="8.5">
                  <label class="form-check-label fs-4"
                    for="inlineCheckbox8point5">8.5</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    id="inlineCheckbox9"
                    value="9">
                  <label class="form-check-label fs-4"
                    for="inlineCheckbox9">9</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    id="inlineCheckbox9point5"
                    value="9.5">
                  <label class="form-check-label fs-4"
                    for="inlineCheckbox9point5">9.5</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    id="inlineCheckbox10"
                    value="10">
                  <label class="form-check-label fs-4"
                    for="inlineCheckbox10">10</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    id="inlineCheckbox10point5"
                    value="10.5">
                  <label class="form-check-label fs-4"
                    for="inlineCheckbox10point5">10.5</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    id="inlineCheckbox11"
                    value="11">
                  <label class="form-check-label fs-4"
                    for="inlineCheckbox11">11</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    id="inlineCheckbox11point5"
                    value="11.5">
                  <label class="form-check-label fs-4"
                    for="inlineCheckbox11point5">11.5</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    id="inlineCheckbox12"
                    value="12">
                  <label class="form-check-label fs-4"
                    for="inlineCheckbox12">12</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    id="inlineCheckbox12point5"
                    value="12.5">
                  <label class="form-check-label fs-4"
                    for="inlineCheckbox12point5">12.5</label>
                </div>

              </div>
            </div>
          </div>
          <!-- .accordion-item -->
          <div class="accordion-item" data-filter="color">
            <h2 class="accordion-header"
              id="panelsStayOpen-headingFour">
              <button class="accordion-button fs-3 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour">
                Filter by color:
              </button>
            </h2>
            <div id="panelsStayOpen-collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFour">
              <div class="accordion-body">

                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="White"
                    id="flexCheckWhite">
                  <label class="form-check-label fs-4"
                    for="flexCheckWhite">
                    White
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="Black"
                    id="flexCheckBlack">
                  <label class="form-check-label fs-4"
                    for="flexCheckBlack">
                    Black
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="Blue"
                    id="flexCheckBlue">
                  <label class="form-check-label fs-4"
                    for="flexCheckBlue">
                    Blue
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="Pink"
                    id="flexCheckPink">
                  <label class="form-check-label fs-4"
                    for="flexCheckPink">
                    Pink
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="Grey"
                    id="flexCheckGrey">
                  <label class="form-check-label fs-4"
                    for="flexCheckGrey">
                    Grey
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="Brown"
                    id="flexCheckBrown">
                  <label class="form-check-label fs-4"
                    for="flexCheckBrown">
                    Brown
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="Red"
                    id="flexCheckRed">
                  <label class="form-check-label fs-4"
                    for="flexCheckRed">
                    Red
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="Plum Fog"
                    id="flexCheckPlumFog">
                  <label class="form-check-label fs-4"
                    for="flexCheckPlumFog">
                    Plum Fog
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="Bone"
                    id="flexCheckBone">
                  <label class="form-check-label fs-4"
                    for="flexCheckBone">
                    Bone
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="Yellow"
                    id="flexCheckYellow">
                  <label class="form-check-label fs-4"
                    for="flexCheckYellow">
                    Yellow
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="Beetroot"
                    id="flexCheckBeetroot">
                  <label class="form-check-label fs-4"
                    for="flexCheckBeetroot">
                    Beetroot
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="Purple"
                    id="flexCheckPurple">
                  <label class="form-check-label fs-4"
                    for="flexCheckPurple">
                    Purple
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="Navy"
                    id="flexCheckNavy">
                  <label class="form-check-label fs-4"
                    for="flexCheckNavy">
                    Navy
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="Peach"
                    id="flexCheckPeach">
                  <label class="form-check-label fs-4"
                    for="flexCheckPeach">
                    Peach
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input border-dark"
                    type="checkbox"
                    value="Orange"
                    id="flexCheckOrange">
                  <label class="form-check-label fs-4"
                    for="flexCheckOrange">
                    Orange
                  </label>
                </div>

              </div>
            </div>
          </div>
          <!-- .accordion-item -->
        </div>
        <!-- .accordion -->
      </div>
      <!-- .sidebar -->
    `;

    this.CONTAINER.insertAdjacentHTML('afterbegin', filterHTML);
  }

}