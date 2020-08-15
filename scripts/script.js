$(document).ready(function(){
  $('.slick').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots:true,
  speed: 350,
  autoplay: true,
  autoplaySpeed: 2500,
  loop: true,
  rtl: true,
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
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      }
    }
  ]
  });
});



// $('#my_burger').click(function(){
    
// });

// $('.navbar-toggler-icon').click(function(){
//     $(this)
// });

$(window).scroll( function(){
    if(window)
  /* Check the location of each desired element */
  $('#our_story').each( function(i){

      // var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      const top_of_object = $(this).offset().top; //As soon as it appears, animate it in
      const middle_of_object = $(this).offset().top + $(this).outerHeight()/3; //As soon as it appears, animate it in
      const bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it in */
      if( bottom_of_window > middle_of_object ){
          console.log("asdasd");
          
          // $(this).animate({'opacity':'1'} ,'slow');
          $(this).animate({'width':'show'} , { duration: 1000, easing: "swing" }); //Linear or Swing?? Speed of animation? What on mobile?


      }

  }); 

});

//Animate #our_Story - either width show or opacity change - on scroll or onload?

// window.onload =  function(){
//   console.log("PRESSED!!!");
//   $('#our_story').each(function(i){
//     // $(this).animate({ width: 'show'});
//     $(this).animate({'opacity':'1'} ,'slow');

//   });
// };

$(".my_nav").click(function () { 
    console.log("PRESSED!!!");
    $('#our_story').each(function(i){
      $(this).animate({ width: 'show'}, 'slow');
    });

  });

$("#read_more").click(function(){
  if($("#more_story").hasClass("hide_story")){
    $(this).html('מזער');
    $("#more_story").removeClass("hide_story");
    $("#more_story").addClass("show_story");
  }
  else if ($("#more_story").hasClass("show_story")){
    $(this).html('קרא עוד');
    $("#more_story").removeClass("show_story");
    $("#more_story").addClass("hide_story");
  }

});

$("#fb_link").click(function(){
  const address = "https://www.facebook.com/נוני-ופורטונה-יד-שניה-וינטג-וקפה-1032462220228396/";
  setTimeout(function () { window.location = address; }, 25); 
  window.location = "fb://נוני-ופורטונה-יד-שניה-וינטג-וקפה-1032462220228396/";
})