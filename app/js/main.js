$(function(){

    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "13px",
        readOnly: true,
        normalFill: "#ddd",
        multiColor: {
            "startColor": "#ffc000",
            "endColor"  : "#ffc000"  
        }
    });

    $('.weekly-slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/content/chevron-left.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/content/chevron-right.png" alt=""></button>',
    });

    $('.products-slider__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/content/chevron-left.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/content/chevron-right.png" alt=""></button>',
        responsive: [
            {
              breakpoint: 1150,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        
    });

    $('select').styler();

    $('.header__menu-btn').on('click', function(){
        $('.menu > ul').slideToggle();
    });

    $('.products__filters-btn').on('click', function(){
      $('.products__filters > ul').slideToggle();
  });

    var mixer = mixitup('.products__inner-box');
    
});