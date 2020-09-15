
$(document).ready(function(){

  $('#our_story').addClass('anim');

});



$("#read_more").click(function(){
  console.log("CLICKED!!!");
  if ($("#more_story").hasClass("d-none")){
    // $(this).html('<b>מזער</b>');
    $("#more_story").removeClass("d-none");
    $("#more_story").addClass("d-block");
  }

  //ADDED 9.9
  $(this).removeClass('d-inline');
  $(this).addClass('d-none');
  
  
});


$('.navbar-toggler').click(function(){
  $("#main_navbar").toggleClass('colored');

});


$(document).scroll(function () {
  var $nav = $("#main_navbar");
  $nav.toggleClass('scrolled', $(this).scrollTop() + 20 > 40);
});


$('#navbarCollapse').on('hide.bs.collapse', function () {
  $('.my_nav').animate({'opacity':'0'} ,'fast');

});

$('#navbarCollapse').on('show.bs.collapse', function () {
  $('.my_nav').animate({ 'opacity' : '1' }, 500);

});

function delay (URL) {
  setTimeout( function() { window.location = URL }, 500 );
}

//Commented 29.08


$(window).scroll( function(){

  $('#second_row').each( function(i){

    const top_of_object = $(this).offset().top; //As soon as it appears, animate it in
    const middle_of_object = $(this).offset().top + $(this).outerHeight()/3; //As soon as it appears, animate it in
    const bottom_of_window = $(window).scrollTop() + $(window).height();

    /* If the object is completely visible in the window, fade it in */
    if( bottom_of_window > top_of_object ){          
       
        // $(this).animate({'width':'show'} , { duration: 1000, easing: "swing" }); //Linear or Swing?? Speed of animation? What on mobile?

        $(this).addClass('anim');

    }

  });
});

$('#scroll-button').click(function(){
  zenscroll.toY(0)
});

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