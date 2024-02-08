$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    // lazyLoad: "ondemand",
    infinite: true,
    centerMode: true,
    centerPadding: "50px",
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
          breakpoint: 1450,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 1200,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 800,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
  });
});

// $(".slick-prev").text("-");
// $('.slick-prev').text('');
// $(".slick-next").text("❯");