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