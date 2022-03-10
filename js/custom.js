$(function(){
     'use strict';
    
    // service slider
    $('.service-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows:false,
      centerMode:true,
        speed:1500,
      centerPadding:false,
      autoplaySpeed: 2500,
    });
    
    // counter js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    //mouse
//    jQuery(document).ready(function($){
//
//        $('a.scroll-link').click(function(e){
//           e.preventDefault();
//            $id = $(this).attr('href');
//           $('body,html').animate({
//                scrollTop: $($id).offset().top + 80
//            }, 750);
//       });
//
//    });
    
});

    