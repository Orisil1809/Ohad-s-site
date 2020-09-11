  
  $('.navbar-toggler').click(function(){
    $("#main_navbar").toggleClass('colored');
    // var element = document.getElementById('navbarCollapse');
    // element.style.height = "100vh !important";
    // $("#main_navbar").toggleClass('my-background');


    $('.colored #navbarCollapse').on("click", ".navbar-nav li" , function(){
      
      $('#navbarCollapse').collapse('hide');
      $('.navbar-toggler').removeClass('opened');
      $('.navbar-toggler').addClass('collapsed');
      $('#main_navbar').removeClass('colored');
      // $("#main_navbar").removeClass('my-background');
      // $("#navbarCollapse").toggleClass('full-navbar');

      // $('#navbarCollapse').css( "height" , "800px");
  


    });
  
  });
  
  $(function () {
    $(document).scroll(function () {
      var $nav = $("#main_navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() + 20 > 40);
      $('.scrolled #navbarCollapse').on("click", "li" , function(){
        $('#navbarCollapse').collapse('hide');
        $('.navbar-toggler').removeClass('opened');
        $('.navbar-toggler').addClass('collapsed');
        $('#main_navbar').removeClass('colored');
        //ADDED 8.9 - NOT

  
  
      });
    });
  });
  
  $('#navbarCollapse').on('hide.bs.collapse', function () {
    $('.my_nav').animate({'opacity':'0'} ,'fast');
      //ADDED 8.9
    // $("#main_navbar").removeClass('my-background');

  
  });

  
  $('#navbarCollapse').on('show.bs.collapse', function () {

    $('.my_nav').css({ 'opacity' : 1 });
    //ADDED 8.9
    // $("#main_navbar").addClass('my-background');

  });
  
  function delay (URL) {
    setTimeout( function() { window.location = URL }, 500 );
  }
  

$(document).ready(function(){
  $('#my-img').animate({'width':'show'} , { duration: 800, easing: "swing" }); //Linear or Swing?? Speed of animation? What on mobile?

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
          
