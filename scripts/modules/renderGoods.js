import { getStorage } from "../service/serviceStorage.js";
import { URL_API, serviceGoods } from "../service/servisGoods.js";

const createCard = ({ id, title, image, price, discountPrice }) => {
  const allFavorite = getStorage("favorite");

  const li = document.createElement("li");
  li.classList.add("goods__item");

  li.insertAdjacentHTML(
    "beforeend",
    `
      <article class="card goods__card">
        <img class="card__img" src="${image}" alt="${title}" />
        <button class="${
          allFavorite.includes(id)
            ? "card__favorite-btn active"
            : "card__favorite-btn "
        }" data-id="${id}">
          <svg width="28" height="24">
            <use xlink:href="#heart" />
          </svg>
        </button>
        <div class="card__control-wrapper">
          <h3 class="card__title">${title}</h3>
          <button class="to-cart" data-id="${id}">В корзину</button>
          <p class="card__price">
          ${
            discountPrice
              ? `
            ${discountPrice} ₽
            <span class="card__old-price">${discountPrice} ₽</span>
          `
              : `${price} ₽`
          }
      
            
          </p>
          <button class="card__description-btn" data-id="${id}">Подробнее</button>
        </div>
      </article>
    `
  );

  return li;
};

const renderCards = (parent) => {
  return (data) => {
    parent.append(...data.map(createCard));
  };
};

export const renderGoods = (query, cb) => {
  const list = document.querySelector(".goods__list");
  list.textContent = "";

  serviceGoods(renderCards(list), query, cb);
};
