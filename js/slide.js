$(() => {
    $(".slide_container").slick({
        dots: true,
        arrows: false,
        variableWidth: true,
        autoplay: true
    });

    $(".slide_four_photos").slick({
        dots: false,
        slidesToShow: 3,
        variableWidth: true,
        infinite: false,
        appendArrows: $(".slide_four_photos"),
        prevArrow: $(".prev"),
        nextArrow: $(".next"),
    });
});
