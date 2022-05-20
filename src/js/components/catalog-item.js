function gallery() {
    var swiper = new Swiper(".gallery .mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        direction: "vertical",
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".gallery .mySwiper2", {
        spaceBetween: 10,
        thumbs: {
            swiper: swiper,
        },
        pagination: {
            el: '.gallery .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });
}

function collectionSlider() {
    var swiper = new Swiper('.collection .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.collection .swiper-button-next',
            prevEl: '.collection .swiper-button-prev',
        },
        pagination: {
            el: '.collection .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            500: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            600: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1150: {
                slidesPerView: 4,
            },
        }
    })
}

$(document).ready(function() {
    gallery()
    collectionSlider()

    $(".catalog-item__tab").click(function() {
        $(".catalog-item__tab").removeClass("catalog-item__tab--active")
        $(this).addClass("catalog-item__tab--active")

        if ($(this).hasClass("catalog-item__tab--desc")) {
            $(".catalog-item__props").hide()
            $(".catalog-item__desc").show()
        } else {
            $(".catalog-item__desc").hide()
            $(".catalog-item__props").show()
        }
    })

    $(".catalog-item__cart").click(function() {
        $(this).toggleClass("catalog-item__cart--active")
    })

    $(".contacts-select__variant").click(function() {
        let path = $(this).attr("data-tab-path")
        let text = $(this).html()
        console.log(path, text);

        $(".contacts-select__variant").removeClass("contacts-select__variant--selected")
        $(this).addClass("contacts-select__variant--selected")
        $(".contacts-select__show span").html(text)
        $(".contacts-select").removeClass("contacts-select--active")

        $(".contacts__group").removeClass("contacts__group--active")
        $(`.contacts__group[data-tab-path="${path}"]`).addClass("contacts__group--active")
    })

    $(".contacts-select__show").click(function() {
        $(".contacts-select").toggleClass("contacts-select--active")
    })

    $(document).mouseup(function(e) {
        var div = $('.contacts-select');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.removeClass("contacts-select--active")
        }
    });

})