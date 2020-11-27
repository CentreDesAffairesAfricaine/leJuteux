 $(function() {

     'use strict';

     $('.navbar ul.navbar-nav li.search a').on('click', function() {
         $(this).siblings('form').fadeToggle();
     });

     $('.navbar ul.navbar-nav li a, footer ul.main-list li a').on('click', function(e) {

         var getAttr = $(this).attr('href');

         e.preventDefault();
         $('html').animate({
             scrollTop: $(getAttr).offset().top
         }, 1000);
     });
 });