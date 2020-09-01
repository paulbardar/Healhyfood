$( document ).ready(function() {
  console.log("READY!!!");



// Slick nav
$(function(){
     $('.menu').slicknav(
       {
         prependTo: '.nav'
       }
     );
 });

 // oel-carrousel

 $('.events__content').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    URLhashListener: true,
    startPosition: 'URLHash',
    items: 1,
    smartSpeed: 500,
    dotsContainer: ('.events__dots')
  });


});
