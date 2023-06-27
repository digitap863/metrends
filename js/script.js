var swiper = new Swiper(".card_slider", {
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
    0: { slidesPerView: 1, spaceBetween: 30 },
    680: { slidesPerView: 2, spaceBetween: 30 },
    966: { slidesPerView: 3, spaceBetween: 20 },
    1220: { slidesPerView: 4, spaceBetween: 25 },
  },
});
