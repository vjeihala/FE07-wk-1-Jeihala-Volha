$(function () {

  let header = $('#header');
  let JSscreen = $('#JSscreen');
  let JSscreenH;
  let scrollPos = $(window).scrollTop();
  let nav = $('#nav');
  let navToggle = $("#navToggle");


  $(window).on('scroll load resize', function () {
    JSscreenH = JSscreen.innerHeight();

    scrollPos = $(this).scrollTop();

    if (scrollPos > JSscreenH) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  });



  $("[data-scroll]").on('click', function (event) {

    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    nav.removeClass('show');

    console.log(elementOffset);
    $('html, body').animate({

      scrollTop: elementOffset - 55
    }, 700);

  });


  navToggle.on('click', function (event) {

    event.preventDefault();
    nav.toggleClass('show');


  });


  let slider = $("#reviewsSlider");

  $("#reviewsSlider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });

});

