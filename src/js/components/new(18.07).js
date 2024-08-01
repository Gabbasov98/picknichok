$(".scroll-up").click(function() {
    $("body,html").scrollTop(0);
})
isScrollUoBtnVisible()
$(window).scroll(function() {
    isScrollUoBtnVisible()
})

function isScrollUoBtnVisible() {
    if ($(window).scrollTop() > 100) {
        $(".scroll-up").addClass("scroll-up--active")
    } else {
        $(".scroll-up").removeClass("scroll-up--active")
    }
}

function reviewsSlider() {
    var swiper = new Swiper('.reviews-slider .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 0,
        navigation: {
            nextEl: '.reviews-slider .swiper-button-next',
            prevEl: '.reviews-slider .swiper-button-prev',
        },
    })
}

reviewsSlider()

$(".cookie-modal__btn").click(function () {
    $(".cookie-modal").removeClass("_active")
})
