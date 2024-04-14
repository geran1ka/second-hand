export const selectControl = ({
  selectorBtn,
  selectorSelect,
  classActive,
  breakpoint,
}) => {
  const btns = document.querySelectorAll(selectorBtn);
  const selects = document.querySelectorAll(selectorSelect);

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (document.documentElement.clientWidth <= breakpoint) {
        const parentSelect = btn.closest(selectorSelect);
        parentSelect.classList.add(classActive);
        selects.forEach((select) => {
          if (select !== parentSelect) {
            select.classList.remove(classActive);
          }
        });
      }
    });
  });
};
