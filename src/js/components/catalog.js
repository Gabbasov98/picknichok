$(document).ready(function() {

    const rangeSlider = document.getElementById("range")
    const rangeInput0 = document.getElementById("range-input1")
    const rangeInput1 = document.getElementById("range-input2")
    const rangeInputs = [rangeInput0, rangeInput1]
    if (rangeSlider) {
        noUiSlider.create(rangeSlider, {
            start: [0, +$(rangeInput1).attr("max")],
            connect: true,
            step: 1,
            range: {
                'min': 0,
                'max': +$(rangeInput1).attr("max")
            }
        });
    }
    if (rangeSlider) {
        rangeSlider.noUiSlider.on('update', function(values, handle) {
            rangeInputs[handle].value = Math.round(values[handle])
        })
        rangeInputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                setRangeSlider(index, e.currentTarget.value)
            })
        })
    }


    const setRangeSlider = (i, value) => {
        let array = [null, null];
        array[i] = value;

        rangeSlider.noUiSlider.set(array);
    };


    $(".selected-filters__item button").click(function() {
        $(this).parents(".selected-filters__item").remove()
        let numOfSelectedFilters = $(".selected-filters__item").length

        console.log(numOfSelectedFilters);
        if (numOfSelectedFilters === 0) {
            $(".selected-filters__all").remove()
        }
    })

    $(".selected-filters__all button").click(function() {
        $(".selected-filters__item").remove()
        $(".selected-filters__all").remove()
    })

    $(".catalog-card__favourite").click(function() {
        $(this).toggleClass("catalog-card__favourite--active")
    })


    $(".catalog-card__btn").click(function() {
        let alert = `
        <div class="added-badge">
            <div class="added-badge__wrap">
                <img src="img/check2.png" alt="">
                <span>Товар добавлен в корзину</span>
            </div>
        </div>
        `
        $("body").append(alert)
        $(".added-badge").fadeIn()

        setTimeout(() => {
            $(".added-badge").remove()
        }, 3000);

        $(this).hide()
        $(this).siblings(".catalog-card__calc").addClass("catalog-card__calc--active")
    })

    $(".catalog-page__filter-btn").click(function() {
        $(".filter").addClass("filter--active")
    })

    $(".filter__close").click(function() {
        $(".filter").removeClass("filter--active")
    })

    $(".filter__btn").click(function() {
        $(".filter").removeClass("filter--active")
    })

})