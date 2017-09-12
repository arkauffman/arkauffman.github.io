$(document).ready(function() {
    var aboveHeight = $('header').outerHeight();
    $(window).scroll(function(){
        if ($(window).scrollTop() > aboveHeight){
            $('nav').addClass('fixed').css('top','0').next()
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
            }, 2000, function() {
                var $target = $(target);
                $target.focus();
            });
        }
    }
});