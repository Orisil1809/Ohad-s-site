$('.navbar-toggler').click(function(){
  $("#main_navbar").toggleClass('colored');
  $('.colored #navbarCollapse').on("click", "li" , function(){
    $('#navbarCollapse').collapse('hide');
    $('.navbar-toggler').removeClass('opened');
    $('.navbar-toggler').addClass('collapsed');
    $('#main_navbar').removeClass('colored');


  });

});

$(function () {
  $(document).scroll(function () {
    var $nav = $("#main_navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() + 20 > 80);
    $('.scrolled #navbarCollapse').on("click", "li" , function(){
      console.log("ORI22");
      $('#navbarCollapse').collapse('hide');
      $('.navbar-toggler').removeClass('opened');
      $('.navbar-toggler').addClass('collapsed');
      $('#main_navbar').removeClass('colored');


    });
  });
});

$('#navbarCollapse').on('hide.bs.collapse', function () {
  // $('.my_nav').css({ 'opacity' : 0 });
  $('.my_nav').animate({'opacity':'0'} ,'fast');

});

$('#navbarCollapse').on('show.bs.collapse', function () {
  $('.my_nav').css({ 'opacity' : 1 });

});

function delay (URL) {
  setTimeout( function() { window.location = URL }, 500 );
}


$(window).scroll( function(){
  // if(window)
/* Check the location of each desired element */
$('.card').each( function(i){

    // var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    const top_of_object = $(this).offset().top; //As soon as it appears, animate it in
    const middle_of_object = $(this).offset().top + $(this).outerHeight()/3; //As soon as it appears, animate it in
    const bottom_of_window = $(window).scrollTop() + $(window).height();

    /* If the object is completely visible in the window, fade it in */
    if( bottom_of_window > middle_of_object ){    
        // $(this).animate({'opacity':'1'} ,'slow');
        $(this).animate({'width':'show'} , { duration: 1000, easing: "swing" }); //Linear or Swing?? Speed of animation? What on mobile?


    }

}); 

});

// $('.flip-div .front').click(function(){
//   $('.ori2').addClass('margined');
// });

// $('.flip-div .back').click(function(){
//   $('.ori2').removeClass('margined');
// });



$('.front #flip-btn').click(function(){
$('.ori2').addClass('margined');
// $('.flip-main').addClass('pressed');
$('.front').css('-webkit-transform', 'rotateY(180deg)')
$('.front').css('-moz-transform', 'rotateY(180deg)')
$('.front').css('-o-transform', 'rotateY(180deg)')
$('.front').css('transform', 'rotateY(180deg)')

$('.back').css('-webkit-transform', 'rotateY(0deg)')
$('.back').css('-moz-transform', 'rotateY(0deg)')
$('.back').css('-o-transform', 'rotateY(0deg)')
$('.back').css('transform', 'rotateY(0deg)')
console.log("WHATTTT");
console.log($('.pressed .front .card .card-body'));
console.log("WHATTTT222222222222");

});

$('.back #flip-btn').click(function(){
$('.ori2').removeClass('margined');
});





$('.back #flip-btn').click(function(){
console.log("HERE222");
$('.back').css('-webkit-transform', 'rotateY(180deg)')
$('.back').css('-moz-transform', 'rotateY(180deg)')
$('.back').css('-o-transform', 'rotateY(180deg)')
$('.back').css('transform', 'rotateY(180deg)')

$('.front').css('-webkit-transform', 'rotateY(0deg)')
$('.front').css('-moz-transform', 'rotateY(0deg)')
$('.front').css('-o-transform', 'rotateY(0deg)')
$('.front').css('transform', 'rotateY(0deg)')


});


// $('.pressed .front .card').on("click", "#flip-btn" , function(){
//   console.log("HELLOOOOOO");
// });




// $('.pressed .front #flip-btn').click(function(){
//   console.log("HERE111");
//   $('.front').css('-webkit-transform', 'rotateY(180deg)')
//   $('.front').css('-moz-transform', 'rotateY(180deg)')
//   $('.front').css('-o-transform', 'rotateY(180deg)')
//   $('.front').css('transform', 'rotateY(180deg)')

//   $('.back').css('-webkit-transform', 'rotateY(0deg)')
//   $('.back').css('-moz-transform', 'rotateY(0deg)')
//   $('.back').css('-o-transform', 'rotateY(0deg)')
//   $('.back').css('transform', 'rotateY(0deg)')


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


