import { renderGoods } from "./renderGoods.js";

const handlerClick = (e) => {
  const target = e.target.closest("a");

  if (target) {
    const href = target.getAttribute("href");
    if (href[0] === "?") {
      e.preventDefault();
      history.pushState(
        href.substring(1),
        href.substring(1),
        `${location.pathname}${href}`
      );
      renderGoods(href);
    }
  }
};

export const interceptLink = () => {
  document.body.addEventListener("click", handlerClick);
};
