$('.navbar-toggler').click(function(){
  $("#main_navbar").toggleClass('colored');

});

$(document).scroll(function () {
  var $nav = $("#main_navbar");
  $nav.toggleClass('scrolled', $(this).scrollTop() + 20 > 40);
});

// $('#navbarCollapse').on('hide.bs.collapse', function () {
//   $('.my_nav').animate({'opacity':'0'} ,'fast');

// });

// $('#navbarCollapse').on('show.bs.collapse', function () {
//   $('.my_nav').animate({ 'opacity' : '1' }, 500);

// });

function delay (URL) {
  setTimeout( function() { window.location = URL }, 500 );
}


// $(window).scroll( function(){

// $('.card').each( function(i){

//     const top_of_object = $(this).offset().top;
//     const middle_of_object = $(this).offset().top + $(this).outerHeight()/3;
//     const bottom_of_window = $(window).scrollTop() + $(window).height();

//     if( bottom_of_window > middle_of_object ){    

//         $(this).animate({'width':'show'} , { duration: 1000, easing: "swing" });


//     }

// }); 

// });

$(document).ready(function ($) {
  var url = window.location.href;
  var activePage = url;
  $('#navbarCollapse li a').each(function () {
      var linkPage = this.href;

      if (activePage == linkPage) {
          $(this).closest("li").addClass("active");
      }
  });
});


