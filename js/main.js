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



// Smooth scrolling using jQuery easing
// $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: (target.offset().top - 48)
//         }, 1000, "easeInOutExpo");
//         return false;
//       }
//     }
//   });
  
    // Closes responsive menu when a scroll trigger link is clicked
//   $('.js-scroll-trigger').click(function() {
//     $('.navbar-collapse').collapse('hide');
//   });
//   // Activate scrollspy to add active class to navbar items on scroll
//   $('body').scrollspy({
//     target: '#mainNav',
//     offset: 48
//   });
//   // Collapse the navbar when page is scrolled
//   $(window).scroll(function() {
//     if ($("#mainNav").offset().top > 100) {
//       $("#mainNav").addClass("navbar-shrink");
//     } else {
//       $("#mainNav").removeClass("navbar-shrink");
//     }
//   });
//   // Scroll reveal calls
//   window.sr = ScrollReveal();
//   sr.reveal('.sr-icons', {
//     duration: 600,
//     scale: 0.3,
//     distance: '0px'
//   }, 200);
//   sr.reveal('.sr-button', {
//     duration: 1000,
//     delay: 200
//   });
//   sr.reveal('.sr-contact', {
//     duration: 600,
//     scale: 0.3,
//     distance: '0px'
//   }, 300);
//   // Magnific popup calls
//   $('.popup-gallery').magnificPopup({
//     delegate: 'a',
//     type: 'image',
//     tLoading: 'Loading image #%curr%...',
//     mainClass: 'mfp-img-mobile',
//     gallery: {
//       enabled: true,
//       navigateByImgClick: true,
//       preload: [0, 1]
//     },
//     image: {
//       tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
//     }
//   });