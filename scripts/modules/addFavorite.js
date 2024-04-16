import { toggleStorage } from "../service/serviceStorage.js";

export const addFavorite = (targetSelector, parentSelector) => {
  if (parentSelector) {
    const parent = document.querySelector(parentSelector);

    parent.addEventListener("click", (e) => {
      const target = e.target.closest(targetSelector);

      if (target) {
        target.classList.toggle("active");
        toggleStorage("favorite", target.dataset.id);
      }
    });
  } else {
    const target = document.querySelector(targetSelector);
    target.addEventListener("click", (e) => {
      target.classList.toggle("active");
      toggleStorage("favorite", target.dataset.id);
    });
  }
};
