$(() => {
    $(".slide_container").slick({
        autoplay: true,
        swipe: true,
        arrows: false,
        dots: true,
        infinite: true,
    });

    $(".slide_four_photos").slick({
        dots: false,
        slidesToShow: 3,
        infinite: false,
        appendArrows: $(".slide_four_photos"),
        prevArrow: $(".prev"),
        nextArrow: $(".next"),
        responsive: [
            {
              breakpoint: 1180,
              settings: {
                dots: false,
                slidesToShow: 2,
                infinite: false,
                appendArrows: $(".slide_four_photos"),
                prevArrow: $(".prev"),
                nextArrow: $(".next"),
              }
            },
            {
                breakpoint: 760,
                settings: {
                  dots: false,
                  slidesToShow: 1,
                  infinite: false,
                  appendArrows: $(".slide_four_photos"),
                  prevArrow: $(".prev"),
                  nextArrow: $(".next"),
                }
              },
        ]
    });
});
