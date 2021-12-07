// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

let sTop = 0

$(document).scroll(function () {
    let scrollPos = $(window).scrollTop()
    if (scrollPos > 100) {
        $('.header').addClass('header_bg')
        if (sTop < scrollPos) {
            $('.header').addClass('header_top')
        }
        else {
            $('.header').removeClass('header_top')
        }
    }
    else {
        $('.header').removeClass('header_bg')
        $('.header').removeClass('header_top')
    }
    sTop = scrollPos
})

$(document).ready(function () {
    $('.header__burger').click(function () {
        $('.header__menu').slideToggle()
    })
})