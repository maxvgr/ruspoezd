const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 6,
  spaceBetween: 0,
  lazy: true,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  // speed: 800,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Назначение событий на кнопки навигации
// const swiperPrev = document.getElementById('swiperPrev')
// const swiperNext = document.getElementById('swiperNext')

// swiperPrev.addEventListener('click', () => {
//   swiper.slidePrev();
// })
// swiperNext.addEventListener('click', () => {
//   swiper.slideNext();
// })


