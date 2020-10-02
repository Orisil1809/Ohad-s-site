const tl = gsap.timeline({ defaults: { ease: "power1.out" }});

$('.navbar-toggler').click(function(){
  $("#main_navbar").toggleClass('colored');
  $('body').toggleClass('noscroll');
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

function resizeCards(){
  let card_height = $('#second-card').height();
  $('#first-card').height(card_height);
  $('#third-card').height(card_height);

}

window.addEventListener('resize', resizeCards);


// $(document).ready(function ($) {
//   tl.fromTo(".card", { opacity: 0 }, { opacity: 1, delay: 0.2, duration: 1, stagger: 0.5});


//   var url = window.location.href;
//   var activePage = url;
//   $('#navbarCollapse li a').each(function () {
//       var linkPage = this.href;

//       if (activePage == linkPage) {
//           $(this).closest("li").addClass("active");
//       }
//   });

//   let card_height = $('#second-card').height();
//   $('#first-card').height(card_height);
//   $('#third-card').height(card_height);


// });


$(window).on('load', function(){
    tl.fromTo(".card", { opacity: 0 }, { opacity: 1, delay: 0.2, duration: 1, stagger: 0.5});


  var url = window.location.href;
  var activePage = url;
  $('#navbarCollapse li a').each(function () {
      var linkPage = this.href;

      if (activePage == linkPage) {
          $(this).closest("li").addClass("active");
      }
  });

  let card_height = $('#second-card').height();
  $('#first-card').height(card_height);
  $('#third-card').height(card_height);


});