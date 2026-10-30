$(document).ready(function () {
    let sliderTextSpan = $('.slider-span');
    let sliderText = $('.slider-linear ~ .slider-text-block ');
    let arrTextSpan = [];

    $('.slider').slick({
        dots: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        easing: 'linear',
        infinite: true,
        draggable: true,
        swipe: true,
        touchThreshold: 20,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: false,
        centerPadding: '0',
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="./assets/images/arrow_prev.png"></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="./assets/images/arrow_next.png"></button>',
        customPaging: function (slider, i) {
            return $('<button type="button" />').text('');
        },
        speed: 380,
        useCSS: false,
        useTransform: true,
        cssEase: 'ease',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: false,
                    swipe: true,
                    speed: 800,
                },
            },
            {
                breakpoint: 677,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: false,
                    arrows: false,
                    swipe: true,
                },
            },
        ],
    });

    let oldWidth = window.innerWidth;
    window.onresize = function () {
        if (window.innerWidth !== oldWidth) {
            oldWidth = window.innerWidth;
            winCheck();
        }
    };

    function winCheck() {
        let win = $(window).width();
        for (let i = 0; i <= sliderTextSpan.length; i++) {
            arrTextSpan.push(sliderTextSpan.eq(i).html());
        }
        if (win > 478) {
            sliderText.text('');
            for (let i = 0; i <= sliderText.length; i++) {
                let index = 0;
                while (index <= 9) {
                    sliderText.eq(i).html(`<div class="slider-title">Габариты: <span class="slider-description slider-span">${arrTextSpan[index]}</span></div><div class="slider-title">Площадь: <span class="slider-description slider-span">${arrTextSpan[index+1]}</span>`);
                    index +=2;
                }
            }
        }
        if (win <= 478) {
            sliderText.text('');
            for (let i = 0; i <= sliderText.length; i++) {
                let index = 0;
                while (index <= 9) {
                    sliderText.eq(i).html(`<div class="slider-description">${arrTextSpan[index]}</div><div class="slider-description">${arrTextSpan[index+1]}</div>`);
                    index +=2;
                }
            }
        }
    }

    winCheck();
});