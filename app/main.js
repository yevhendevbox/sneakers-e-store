import ControllerCards from "./components/cards/controller_cards.js";
import ControllerModal from "./components/modal/controller_modal.js";
import ControllerSort from "./components/sort/controller_sort.js";

const controllerCards = new ControllerCards();
const controllerSort = new ControllerSort(controllerCards.handleSort);
const controllerModal = new ControllerModal();