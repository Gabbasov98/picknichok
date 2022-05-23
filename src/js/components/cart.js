$(document).ready(function() {

    checkSelectedCart()

    function checkSelectedCart() {
        let checkedCartArray = []

        $(".cart-card__check input").each((i, el) => {
            checkedCartArray.push($(el).prop("checked"))
        })

        if (checkedCartArray.indexOf(false) === -1) {
            return true
        }

        return false

    }

    $(".cart-card__check input").change(() => {
        if (checkSelectedCart()) {
            $(".cart__all input").prop("checked", true)
        } else {
            $(".cart__all input").prop("checked", false)
        }
    })

    $(".cart__all input").change(function() {
        let checked = $(this).prop("checked")
        $(".cart-card__check input").each((i, el) => {
            if (checked) {
                $(el).prop("checked", true)
            } else {
                $(el).prop("checked", false)
            }
        })
    })

    $(".cart-card__calc .ccalc-minus").click(function() {
        let inputVal = +$(this).siblings("input").val()

        if (inputVal === 1) {
            $(this).parents(".cart-card").fadeOut()
            setTimeout(() => {
                $(this).parents(".cart-card").remove()
            }, 2000);
        }
    })

    $(".cart-card__delete").click(function() {
        $(this).parents(".cart-card").fadeOut()
        setTimeout(() => {
            $(this).parents(".cart-card").remove()
        }, 2000);
    })




})