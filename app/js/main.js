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
    });

    $('select').styler();

    var mixer = mixitup('.products__inner-box');
    
});