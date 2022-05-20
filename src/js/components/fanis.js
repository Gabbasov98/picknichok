function sliderWork() {
    var swiper = new Swiper('.our-work .swiper', {
        slidesPerView: 3,
        spaceBetween: 35,
        navigation: {
            nextEl: ' .our-work .swiper-button-next',
            prevEl: ' .our-work .swiper-button-prev',
        },
        pagination: {
            el: ".our-work .swiper-pagination",
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 12
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 25,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 35,
            }
        }
    })
}


function sliderProduction() {
    var swiper = new Swiper('.production .swiper', {
        slidesPerView: 3,
        spaceBetween: 35,
        navigation: {
            nextEl: ' .production .swiper-button-next',
            prevEl: ' .production .swiper-button-prev',
        },
        pagination: {
            el: ".production .swiper-pagination",
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 12
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 25,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 35,
            }
        }
    })
}


function sliderCertificates() {
    var swiper = new Swiper('.certificates .swiper', {
        slidesPerView: 4,
        spaceBetween: 75,
        navigation: {
            nextEl: '.certificates .swiper-button-next',
            prevEl: '.certificates .swiper-button-prev',
        },
        pagination: {
            el: ".certificates .swiper-pagination",
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 75,
            }
        }
    })
}


sliderWork()
sliderProduction()
sliderCertificates()