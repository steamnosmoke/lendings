$(function(){
  $('.header-slider').slick({
    dots:true,
    prevArrow:'<button type="button" class="slick-prev"><img src="img/prev.svg"></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="img/next.svg"></button>',
    vertical:true,
    autoPlay:true,
    autoPlaySpeed:3000,
  });


  $('.product-name').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-content',
    focusOnSelect: true,
    vertical:true,
    prevArrow:'<button type="button" class="product-prev"><img src="img/pr-pr.svg"></button>',
    nextArrow:'<button type="button" class="product-next"><img src="img/pr-n.svg"></button>',
    Infinity:true,
    centerMode:true,
  });
  $('.product-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product-name',
    fade:true,
    arrows:false,
  });


  $('.menu__btn').on('click',function(){
    $('.menu__list').toggleClass('menu__list--active');
  });
});

