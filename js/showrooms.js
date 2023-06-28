var swiper = new Swiper(".showroom_card_slider", {
  initialSlide: 0,
  centerSlide: "true",
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
  breakpoints: {
    0: { slidesPerView: 1, spaceBetween: 10 },
    600: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 2, spaceBetween: 30 },
  },
});
