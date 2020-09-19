//#region slick carousel

$(document).ready(function(){

    $('.slick').slick({
    lazyLoad: 'ondemand',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots:true,
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

    $('#home-text').animate({'height':'show'} , { duration: 1000, easing: "swing" });
    TweenMax.set(".hand-x", {rotation:-20, transformOrigin:"bottom center", x:-20});
    var tween = TweenMax.to(".hand-x", 1, {x:20, rotation:20, repeat:100, ease:Power3.easeInOut, yoyo:true})
    
    let window_height = window.innerHeight;
    console.log(window_height);
    $('#header').height(window_height);

  });
  
  // window.onload = function(){

  // };


  function resizeHeader(){
    let window_height = window.innerHeight;
    $('#header').height(window_height);
  }

  // window.addEventListener('resize', resizeHeader);

  
  $(window).scroll( function(){
      // if(window)
    /* Check the location of each desired element */
    $('#our_story').each( function(i){
  
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
  

$('.navbar-toggler').click(function(){
  $("#main_navbar").toggleClass('colored');
  $('.colored #navbarCollapse').on("click", ".navbar-nav li #contact" , function(){
    
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


//#region Prevent bodyscroll on collapse scroll

$('#navbarCollapse').on('hide.bs.collapse', function () {
  $('body').removeClass('noscroll')
});


// $('#navbarCollapse').on('show.bs.collapse', function () {

//   $('body').addClass('noscroll')
// });

$('#navbarCollapse').on('shown.bs.collapse', function () {

  $('body').addClass('noscroll')
});


//#endregion

function delay (URL) {
  setTimeout( function() { window.location = URL }, 500 );
}

$('#scroll-arrow').click(function(){

  var defaultDuration = 777 // ms
  var edgeOffset = 125 // px
  zenscroll.setup(defaultDuration, edgeOffset)
  zenscroll.to(second)

});

  //#region our story animation try
  // $(document).ready( function(){

  //   $('#our_story').animate({'opacity':'1'} ,'slow'); //Linear or Swing?? Speed of animation? What on mobile?
  
  // });
  
  // $(document).ready( function(){
  //   $('#our_story').animate({'width':'show'} , { duration: 500, easing: "linear" }); //Linear or Swing?? Speed of animation? What on mobile?
  
  // });
  
  //Animate #our_Story - either width show or opacity change - on scroll or onload?
  
  // window.onload =  function(){
  //   console.log("PRESSED!!!");
  //   $('#our_story').each(function(i){
  //     // $(this).animate({ width: 'show'});
  //     $(this).animate({'opacity':'1'} ,'slow');
  
  //   });
  // };
  
  //#endregion

  
//   $(window).scroll( function(){
//   $('#second h2').each( function(i){

//       const top_of_object = $(this).offset().top; //As soon as it appears, animate it in
//       const middle_of_object = $(this).offset().top + $(this).outerHeight()/3; //As soon as it appears, animate it in
//       const bottom_of_window = $(window).scrollTop() + $(window).height();

//       if( bottom_of_window > middle_of_object ){         

//           $(this).animate({'width':'show'} , { duration: 1000, easing: "swing" }); //Linear or Swing?? Speed of animation? What on mobile?

//       }
//   }); 

// });