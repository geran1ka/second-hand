import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

export const slider = ({
  selectorParentSlider,
  selectorSlider,
  selectorPagination,
  bulletClass,
  bulletActiveClass,
}) => {
  const swiper = new Swiper(selectorSlider, {
    init: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: selectorPagination,
      type: "bullets",
      bulletClass,
      bulletActiveClass,
      clickable: true,
    },
    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });
        this.el.addEventListener("mouseleave", () => {
          this.autoplay.start();
        });
      },
    },
  });

  const checkSlider = () => {
    const href = location.href;

    if (href.includes("?")) {
      swiper.disable();
      document.querySelector(selectorParentSlider)?.remove();
    } else {
      swiper.init();
    }
  };

  checkSlider();
  return checkSlider;
};
