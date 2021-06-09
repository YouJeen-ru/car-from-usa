$(function(){
    $('.carousel__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                },

            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                },

            },
            {
                breakpoint: 339,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                },

            },
    ]

    })
});