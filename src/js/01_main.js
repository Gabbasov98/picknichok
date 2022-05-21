function mainSlider() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: true,
        loop: true,
        navigation: {
            nextEl: '.main .swiper-button-next',
            prevEl: '.main .swiper-button-prev',
        },
        pagination: {
            el: '.main .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}

$(document).ready(function() {
    $('input[type="tel"]').mask('+7 999 999-9999', { autoclear: false }, { placeholder: '+7             ' });
    cartCalc()
    mainSlider()

    $(".header__catalog-btn").click(function() {
        $(this).toggleClass("header__catalog-btn--active")
        if (innerWidth > 992) {
            $(".header__catalog").append(`<div class="header__catalog-bg"></div>`)
        } else {
            $(".header__catalog-dropdown").slideToggle()
        }
        $(".header__catalog-bg").click(function() {
            $(".header__catalog-btn").removeClass("header__catalog-btn--active")
            $(".header__catalog-bg").remove()
        })
    })


    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $("body").toggleClass("fixed-body")
        $(".header__menu").toggleClass("header__menu--active")
    })




});

function cartCalc() {
    $('.cartcalc .ccalc-minus').click(function() {
        let a = $(this).closest('.cartcalc').find('input').val();
        if (a > 1) {
            let b = +a - 1;
            $(this).closest('.cartcalc').find('input').val(b);
        } else {
            $(this).closest('.cartcalc').find('input').val(a);
        }
    });
    $('.cartcalc .ccalc-plus').click(function() {
        let a = $(this).closest('.cartcalc').find('input').val();
        let b = +a + 1;
        $(this).closest('.cartcalc').find('input').val(b);
    });
}