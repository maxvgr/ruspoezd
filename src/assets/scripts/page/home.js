const swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  slidesPerView: 'auto',
  spaceBetween: 0,
  lazy: true,
  centerInsufficientSlides: true,
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

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  slidesPerView: 'auto',
  spaceBetween: 0,
  lazy: true,
  centerInsufficientSlides: true,
  autoplay: {
    delay: 5000,
  },
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper3 = new Swiper('.swiper3', {
  // Optional parameters
  slidesPerView: 'auto',
  spaceBetween: 0,
  lazy: true,
  centerInsufficientSlides: true,
  autoplay: {
    delay: 5000,
  },
  loop: true,

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


