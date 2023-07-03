var swiper = new Swiper(".locate_card_slider", {
  breakpoints: {
    0: { slidesPerView: 1, spaceBetween: 5 },
    480: { slidesPerView: 2, spaceBetween: 5 },
    728: { slidesPerView: 3, spaceBetween: 10 },
    900: { slidesPerView: 3, spaceBetween: 20 },
    1200: { slidesPerView: 4, spaceBetween: 30 },
  },
  initialSlide: 0,
  // centerSlide: "true",
  fade: true,
  grabCursor: "true",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-nav-nxt",
    prevEl: ".swiper-nav-prv",
  },
});
