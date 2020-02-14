$(function(){

    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "13px",
        readOnly: true,
        normalFill: "#ddd",
        multiColor: {
            "startColor": "#ffc000", //RED
            "endColor"  : "#ffc000"  //GREEN
        }
    });

    $('.products-slider__inner').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
    });

    var mixer = mixitup('.products__inner-box');
    
});