import { burgerMenu } from "./modules/burgerMenu.js";
import { controlModal } from "./modules/controllModal.js";
import { interceptLink } from "./modules/interceptLink.js";
import { renderGoods } from "./modules/renderGoods.js";
import { searchControl } from "./modules/searchControl.js";
import { selectControl } from "./modules/selectControl.js";
import { slider } from "./modules/slider.js";

burgerMenu({
  selectorBtn: ".navigation__btn",
  selectorMenu: ".navigation",
  classActive: "navigation_active",
  selectorClose: ".navigation__link, .header__btn",
});

searchControl({
  selectorBtn: ".search__btn",
  selectorForm: ".search",
  classActive: "search_active",
  selectorClose: ".search__close",
  breakpoint: 760,
});

selectControl({
  selectorBtn: ".footer__subtitle",
  selectorSelect: ".footer__nav-item",
  classActive: "footer__nav-item_active",
  breakpoint: 760,
});

const checkSlider = slider({
  selectorParentSlider: ".hero",
  selectorSlider: ".hero__slider",
  selectorPagination: ".hero__slider-pagination",
  bulletClass: "hero__slider-line",
  bulletActiveClass: "hero__slider-line_active",
});

renderGoods(location.search, () => {
  document.body.style.opacity = "1";
});
interceptLink(checkSlider);

controlModal({
  selectorHandler: ".card__description-btn",
  selectorParent: ".goods__list",
  selectorModal: ".overlay_item",
  classActive: "overlay_active",
  closeSelector: ".modal-item__btn-to-cart, .overlay__btn-close",
});
// document.addEventListener("click", (e) => e.preventDefault());
