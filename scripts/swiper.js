/* 
Author: Neeraj Verma 
Library Used: swiper.js
Updated on: 15-06-2025
*/

const breakpoints = {
  530: {
    slidesPerView: 1.5,
    spaceBetween: 20,
  },
  1050: {
    slidesPerView: 2.2,
    spaceBetween: 20,
  },
};

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  loop: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false, // optional
  },

  breakpoints: breakpoints,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
  },
});
