$(() => {
    $(".slide_container").slick({
        autoplay: true,
        swipe: true,
        arrows: false,
        dots: true,
        centerMode: false,
        slidesToShow: 1,
        infinite: true,
        variableWidth: true,
    });

    $(".slide_four_photos").slick({
        dots: false,
        slidesToShow: 3,
        variableWidth: true,
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
                variableWidth: true,
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
