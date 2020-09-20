const tl = gsap.timeline({ defaults: { ease: "power1.out" }});

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
    tl.fromTo(".card", { y: "100%" }, { y: "0%", delay: 0.2, duration: 1, stagger: 0.5});

    var url = window.location.href;
    var activePage = url;
    $('#navbarCollapse li a').each(function () {
        var linkPage = this.href;
  
        if (activePage == linkPage) {
            $(this).closest("li").addClass("active");
        }
    });
      // $('.card-columns').animate({'width':'show'} , { duration: 1000, easing: "linear" }); //Linear or Swing?? Speed of animation? What on mobile?
      // $('#second-card').animate({'width':'show'} , { duration: 1000, queue: true, easing: "linear" }); //Linear or Swing?? Speed of animation? What on mobile?
      // $('#third-card').animate({'width':'show'} , { duration: 1500, queue: true, easing: "linear" }); //Linear or Swing?? Speed of animation? What on mobile?
  
  });
  
  
//   tl.fromTo(".card", { opacity: 0 }, { opacity: 1, delay: 0.5, duration: 1, stagger: 0.5});
