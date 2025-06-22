$(function(){
  $('.services-slider').slick({
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    prevArrow:'<button type="button" class="slick-prev"><img src="img/prev.svg"></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="img/next.svg"></button>',
  });
});