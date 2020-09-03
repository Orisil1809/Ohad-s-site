$(window).scroll( function(){

    $('.card').each( function(i){
  
      const top_of_object = $(this).offset().top; //As soon as it appears, animate it in
      const middle_of_object = $(this).offset().top + $(this).outerHeight()/3; //As soon as it appears, animate it in
      const bottom_of_window = $(window).scrollTop() + $(window).height();
  
  
      /* If the object is completely visible in the window, fade it in */
      if( bottom_of_window > middle_of_object ){          
        $(this).addClass('anim');
      }
  
    }); 
});

$(window).on('load', function(){
    $('.card').each( function(i){
      $(this).removeClass('anim');
      const top_of_object = $(this).offset().top
      const middle_of_object = $(this).offset().top + $(this).outerHeight()/3;
      const bottom_of_window = $(window).scrollTop() + $(window).height();
  
      if( bottom_of_window > middle_of_object ){          
          $(this).addClass('anim');
  
      }
  
    }); 
  
  });

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