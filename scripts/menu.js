// $('.navbar-toggler').click(function(){
//     $("#main_navbar").toggleClass('colored');
//     $('.colored #navbarCollapse').on("click", "li" , function(){
//       $('#navbarCollapse').collapse('hide');
//       $('.navbar-toggler').removeClass('opened');
//       $('.navbar-toggler').addClass('collapsed');
//       $('#main_navbar').removeClass('colored');
  
  
//     });
  
//   });

  
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