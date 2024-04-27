import { controllCart } from "./modules/addCart.js";
import { addFavorite } from "./modules/addFavorite.js";
import { burgerMenu } from "./modules/burgerMenu.js";
import { controlModal } from "./modules/controllModal.js";
import { interceptLink } from "./modules/interceptLink.js";
import { renderGoods } from "./modules/renderGoods.js";
import { searchControl } from "./modules/searchControl.js";
import { selectControl } from "./modules/selectControl.js";
import { slider } from "./modules/slider.js";
import { renderCart } from "./service/renderCart.js";

burgerMenu({
  selectorBtn: ".navigation__btn",
  selectorMenu: ".navigation",
  classActive: "navigation_active",
  selectorClose: ".navigation__link, .header__btn",
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

searchControl({
  selectorBtn: ".search__btn",
  selectorForm: ".search",
  classActive: "search_active",
  selectorClose: ".search__close",
  breakpoint: 760,
  cb: checkSlider,
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

controlModal({
  selectorHandler: ".header__btn_cart",
  selectorModal: ".overlay_cart",
  classActive: "overlay_active",
  closeSelector: ".overlay__btn-close",
  callback: renderCart,
});

addFavorite({
  linkFavoriteHandler: ".header__btn_favorite",
  targetSelector: ".card__favorite-btn",
  parentSelector: ".goods__list",
  changeActiveClass: "",
});

addFavorite({
  linkFavoriteHandler: ".header__btn_favorite",
  targetSelector: ".modal-item__btn-to-favorite",
  changeActiveClass: ".card__favorite-btn",
});

controllCart({
  selectorAdd: ".card__to-cart",
  selectorParent: ".goods__list",
  text: `{count} в корзине`,
});

controllCart({
  selectorAdd: ".modal-item__btn-to-cart",
  text: `{count} в корзине`,
  selectorText: {
    selector: ".card__to-cart",
    text: `{count} в корзине`,
  },
});

controllCart({
  selectorAdd: ".props__btn_plus",
  selectorParent: ".modal-cart__list",
  selectorRemove: ".props__btn_minus",
  selectorText: {
    selector: ".card__to-cart",
    text: `{count} в корзине`,
  },
  callback: renderCart,
});

// document.addEventListener("click", (e) => e.preventDefault());
