$(document).ready(function() {
    
    var aboveHeight = $('header').outerHeight();
    //when scroll
        $(window).scroll(function(){
                if ($(window).scrollTop() > aboveHeight){
                $('nav').addClass('fixed').css('top','0').next()
                .css('padding-top','60px');
                } else {
                $('nav').removeClass('fixed').next()
                .css('padding-top','0');
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
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              var $target = $(target);
              $target.focus();
            });
          }
        }
    });