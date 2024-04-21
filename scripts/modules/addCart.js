import { getStorage, setStorage } from "../service/serviceStorage.js";

const addCart = (elem, text, selectorText) => {
  let obj = {};
  const cart = getStorage("cart");
  const fintCard = cart.find((item) => item.id === elem.dataset.id);
  if (fintCard) {
    obj = fintCard;
    obj.count += 1;
  } else {
    obj.count = 1;
    obj.id = elem.dataset.id;
    cart.push(obj);
  }

  if (text) {
    elem.textContent = text.replace("{count}", obj.count);
  }
  setStorage("cart", cart);
  console.log("selectorText: ", selectorText);

  if (selectorText) {
    document
      .querySelectorAll(selectorText.selector)
      .forEach(
        (elem) =>
          (elem.textContent = selectorText.text.replace("{count}", obj.count))
      );
  }
};

const removeCart = () => {};

export const controllCart = ({
  selectorAdd,
  selectorRemove,
  selectorParent,
  text,
  selectorText,
}) => {
  if (selectorParent) {
    const parent = document.querySelector(selectorParent);

    parent.addEventListener("click", (e) => {
      const addTarget = e.target.closest(selectorAdd);
      if (addTarget) {
        addCart(addTarget, text);
        return;
      }

      const removeTarget = e.target.closest(selectorRemove);

      if (removeTarget) {
        removeCart();
      }
    });
  } else {
    const btn = document.querySelector(selectorAdd);
    btn.addEventListener("click", () => {
      addCart(btn, text, selectorText);
    });
  }
};
