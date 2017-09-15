$(document).ready(function() {
    var aboveHeight = $('header').outerHeight();
    $(window).scroll(function(){
        if ($(window).scrollTop() > aboveHeight){
            $('nav').addClass('fixed').next()
        } else {
            $('nav').removeClass('fixed').next()
        }
    });
});

$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
    ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.apreventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 3000, function() {
                var $target = $(target);
                $target.focus();
            });
        }
    }
});

// !function(e) {
//     "use strict";
//     e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
//         if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
//             var t = e(this.hash);
//             if ((t = t.length ? t : e("[name=" + this.hash.slice(1) + "]")).length)
//                 return e("html, body").animate({
//                     scrollTop: t.offset().top - 48
//                 }, 1e3, "easeInOutExpo"),
//                 !1
//         }
//     }),
//     e(".js-scroll-trigger").click(function() {
//         e(".navbar-collapse").collapse("hide")
//     }),
//     e("body").scrollspy({
//         target: "#mainNav",
//         offset: 54
//     }),
//     e(window).scroll(function() {
//         e("#mainNav").offset().top > 100 ? e("#mainNav").addClass("navbar-shrink") : e("#mainNav").removeClass("navbar-shrink")
//     })
// }(jQuery);