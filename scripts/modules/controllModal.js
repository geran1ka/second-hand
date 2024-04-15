export const controlModal = ({
  selectorHandler,
  selectorParent,
  selectorModal,
  classActive,
  closeSelector,
}) => {
  const modal = document.querySelector(selectorModal);
  if (selectorParent) {
    const parent = document.querySelector(selectorParent);
    parent.addEventListener("click", (e) => {
      const target = e.target;
      console.log("target: ", target);
      console.log("selectorHandler: ", selectorHandler);

      if (target.closest(selectorHandler)) {
        modal.classList.add(classActive);
      }
    });
  } else {
    const target = document.querySelector(selectorHandler);
  }

  modal.addEventListener("click", (e) => {
    const target = e.target;
    if (target === modal || target.closest(closeSelector)) {
      modal.classList.remove(classActive);
    }
  });
};
