function mainSlider() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 2000,
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
    $('input[type="tel"]').mask('+7 999 999-9999', { placeholder: '+7             ' });

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
        $(".header__menu").toggleClass("header__menu--active")
    })

});