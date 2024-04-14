import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

export const slider = ({
  selectorSlider,
  selectorPagination,
  bulletClass,
  bulletActiveClass,
}) => {
  new Swiper(selectorSlider, {
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
};
