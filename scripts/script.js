
const tl = gsap.timeline({ defaults: { ease: "power1.out" }});
const tl2 = gsap.timeline({ defaults: { ease: "power3.out" }});

let firstModal = false;
//#region slick carousel

$(window).on('load', function(){  
  tl2.to($(".overlay"),
  {height: "0%", ease: "slow(0.7, 0.7, false)"});
});


$(document).ready(function(){

  $('.slick').slick({
  lazyLoad: 'ondemand',
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  speed: 350,
  autoplay: true,
  autoplaySpeed: 2500,
  loop: true,
  rtl: true,
  pauseOnFocus: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 848,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
        
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        speed: 250,
        cssEase: 'linear'
      }
    }
  ]
  });

  tl.to (".text", {y: "0%", delay: 0.5, duration: 1, stagger: 0.5});
  tl.to("#home-text", {y: "0%", delay: 0.5, duration: 1}, "-=3");
  tl.to(".scroll-down", {opacity: 1, duration: 1}, "-=0.5");

  TweenMax.set(".hand-x", {rotation:-20, transformOrigin:"bottom center", x:-20});
  var tween = TweenMax.to(".hand-x", 1, {x:20, rotation:20, repeat:100, ease:Power3.easeInOut, yoyo:true})

});

$(window).scroll( function(){
  $('.header-title').each( function(i){
        
    const top_of_object = $(this).offset().top;
    const middle_of_object = $(this).offset().top + $(this).outerHeight()/3;
    const bottom_of_window = $(window).scrollTop() + $(window).height();

    if( bottom_of_window > middle_of_object ){   
      $('.wrapper').addClass("anim");
    }

  }); 

  if(!firstModal){
    $('#info-section').each( function(i){
        
        const top_of_object = $(this).offset().top;
        const middle_of_object = $(this).offset().top + $(this).outerHeight()/3;
        const bottom_of_window = $(window).scrollTop() + $(window).height();

        
        if( bottom_of_window > middle_of_object ){    
          $('#myModal').modal();
          firstModal = true;
        }

    }); 
  }

});


$('.navbar-toggler').click(function(){
  $("#main_navbar").toggleClass('colored');
  $('body').toggleClass('noscroll');
  $('.colored #navbarCollapse').on("click", ".navbar-nav li #contact" , function(){
    $('body').removeClass('noscroll');
    $('#navbarCollapse').collapse('hide');
    $('.navbar-toggler').removeClass('opened');
    $('.navbar-toggler').addClass('collapsed');
    $('#main_navbar').removeClass('colored');

  });
});


$(document).scroll(function () {
  var $nav = $("#main_navbar");
  $nav.toggleClass('scrolled', $(this).scrollTop() + 20 > 40);
});

function delay (URL) {
setTimeout( function() { window.location = URL }, 500 );
}

$('#scroll-arrow').click(function(){

var defaultDuration = 777 // ms
var edgeOffset = 125 // px
zenscroll.setup(defaultDuration, edgeOffset)
zenscroll.to(second)

});