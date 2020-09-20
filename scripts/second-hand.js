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

});


