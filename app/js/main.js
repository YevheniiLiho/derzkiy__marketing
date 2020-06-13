$(function () {


  //=============================  Burger
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.header__link').click(function (event) {
    $('.header__burger,.header__menu').removeClass('active');
  });

  //============================  Main-slider
  $('.main-slider').slick({
    slidesToShow: 1,
    centerMode: true,
    dots: true,
    adaptiveHeight: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: 'linear',
  });

  //============================  Workstages-slider
  $('.card-slider').slick({
    slidesToShow: 3,
    dots: true,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1010,
        settings: {
          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 840,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 710,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      }

    ]
  });

  //================================= Scroll page
  $('.scrollto a').on('click', function () {

    let href = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(href).offset().top - 100
    }, {
      duration: 370,   // по умолчанию «400» 
      easing: "linear" // по умолчанию «swing» 
    });
    if ($(window).width() < 768) {
      $('html, body').animate({
        scrollTop: $(href).offset().top - 70
      });
    }
    return false;
  });


});