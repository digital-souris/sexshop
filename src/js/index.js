// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

let sTop = 0
let scale = 1.2

$(document).scroll(function () {
    let scrollPos = $(window).scrollTop()
    let image = $('.first__image')
    if (image.length) {
        image = $(image).find('img')
        let sectionH = $('.section_first').height()
        if (scrollPos < sectionH) {
            let percent = (sectionH - scrollPos) * 100 / sectionH / 5 / 100
            console.log(percent)
            image.css({'transform': `scale(${1.2 - (0.2 - percent)})`})
        }
    }
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