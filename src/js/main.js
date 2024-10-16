import "../assets/scss/main.scss";

import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import { burgerMenu } from "./global/burgerMenu";

import { headerScroll } from "./global/liveHeader";

burgerMenu();
headerScroll();

const swiper = new Swiper(".swiper__my-skills", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 0,
  },
  speed: 5000,
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

const myWorkSwiper = new Swiper(".my-works__swiper", {
  // Optional parameters
  lazy: true,
  autoplay: {
    delay: 4000,
  },
  slidesPerView: 3,
  spaceBetween: 50,
  grid: { rows: 2 },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
