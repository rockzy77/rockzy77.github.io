$(document).ready(function () {
  // $(window).bind("scroll", function () {
  //   if ($(window).scrollTop() >= $("#certificates").offset().top - 300) {
  //     $(".slider-dots .four").addClass("active");
  //     $(".slider-dots .one").removeClass("active");
  //     $(".slider-dots .two").removeClass("active");
  //     $(".slider-dots .three").removeClass("active");
  //   } 
  //   else if ($(window).scrollTop() >= $("#knowledge").offset().top - 300) {
  //     $(".slider-dots .three").addClass("active");
  //     $(".slider-dots .one").removeClass("active");
  //     $(".slider-dots .two").removeClass("active");
  //     $(".slider-dots .four").removeClass("active");
  //   } else if ($(window).scrollTop() >= $("#about").offset().top - 300) {
  //     $(".slider-dots .two").addClass("active");
  //     $(".slider-dots .one").removeClass("active");
  //     $(".slider-dots .three").removeClass("active");
  //     $(".slider-dots .four").removeClass("active");
  //   } else if ($(window).scrollTop() >= $("#home").offset().top) {
  //     $(".slider-dots .one").addClass("active");
  //     $(".slider-dots .two").removeClass("active");
  //     $(".slider-dots .three").removeClass("active");
  //     $(".slider-dots .four").removeClass("active");
  //   }
  // });

  window.addEventListener("scroll", function () {
    if (window.scrollY == 0) {
      $("nav").removeClass("nav-moved");
    } else {
      $("nav").addClass("nav-moved");
    }
  });
});
