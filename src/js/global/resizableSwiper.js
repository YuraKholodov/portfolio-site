import Swiper from "swiper/bundle";

export function resizableSwiper(
  breakpoint,
  swiperClass,
  swiperSettings,
  callback
) {
  let swiper;

  breakpoint = window.matchMedia(breakpoint);

  function enableSwiper(className, settings) {
    swiper = new Swiper(className, settings);

    if (callback) {
      callback(swiper);
    }
  }

  function checker() {
    if (breakpoint.matches) {
      return enableSwiper(swiperClass, swiperSettings);
    } else {
      if (swiper !== undefined) swiper.destroy(true, true);
      return;
    }
  }

  breakpoint.addEventListener("change", checker);
  checker();

  // Пример колбек функции реагирующей на смену слайда
  // const someFunc = (instance) => {
  //   if (instance) {
  //     instance.on("slideChange", function (e) {
  //       console.log("*** mySwiper.activeIndex", instance.activeIndex);
  //     });
  //   }
  // };
}
