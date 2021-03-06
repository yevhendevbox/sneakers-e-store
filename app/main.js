import ControllerCards from "./components/cards/controller_cards.js";
import ControllerFilter from "./components/filter/controller_filter.js";
import ControllerModal from "./components/modal/controller_modal.js";
import ControllerSearch from "./components/search/controller_search.js";
import ControllerSort from "./components/sort/controller_sort.js";
import ControllerCart from "./components/cart/controller_cart.js";
import ControllerOrder from "./components/order/controller_order.js";
import ControllerPagination from "./components/pagination/controller_pagination.js";
import ControllerOrdersHistory from "./components/orders_history/controller_ordersHistory.js";

const controllerCards = new ControllerCards();
const controllerModal = new ControllerModal();
const controllerCart = new ControllerCart();
const controllerSort = new ControllerSort();
const controllerFilter = new ControllerFilter();
const controllerSearch = new ControllerSearch();
const controllerOrder = new ControllerOrder();
// const controllerPagination = new ControllerPagination();
const controllerOrdersHistory = new ControllerOrdersHistory();
