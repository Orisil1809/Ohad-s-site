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
        speed: 500,
        fade: true,
        cssEase: 'linear'
      }
    }
  ]
  });
});



$('.navbar-toggler').click(function(){
  console.log("ORIIASD");
  $("#main_navbar").toggleClass('colored');
});

// $('.navbar-toggler').click(function(){
//   console.log("ORI1");
//   $(this).toggleClass('hidden');
//   if(($this).hasClass('hidden')){
//     console.log("ORI2");
//     $(this).animate({'width':'show'} , { duration: 1000, easing: "swing" }); //Linear or Swing?? Speed of animation? What on mobile?
//   }
//   else{
//     console.log("ORI3");
//     $(this).animate({'width':'hide'} , { duration: 1000, easing: "swing" }); //Linear or Swing?? Speed of animation? What on mobile?
//   }
// });

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

// $(document).ready( function(){
//   $('#our_story').animate({'width':'show'} , { duration: 1000, easing: "swing" }); //Linear or Swing?? Speed of animation? What on mobile?

// });

//Animate #our_Story - either width show or opacity change - on scroll or onload?

// window.onload =  function(){
//   console.log("PRESSED!!!");
//   $('#our_story').each(function(i){
//     // $(this).animate({ width: 'show'});
//     $(this).animate({'opacity':'1'} ,'slow');

//   });
// };

$("#story_link").click(function () { 
    $('#our_story').each(function(i){
      $(this).animate({ width: 'show'}, 'slow');
    });
  });

$("#read_more").click(function(){
  // var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  // console.log(userAgent);
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
  window.location.replace("fb://profile/1032462220228396");
  setTimeout(function () {
    window.location.replace(address); }, 2000);
})

// $("#fb_link").click(function(){
//   const address = "https://www.facebook.com/נוני-ופורטונה-יד-שניה-וינטג-וקפה-1032462220228396/";
//   setTimeout(function () { window.location = address; }, 25); 
//   let os_sys = getMobileOperatingSystem()
//   switch(os_sys){
//     case "Windows Phone":
//       window.location = "fb://page/1032462220228396";
//     case "Android":
//       window.location = "fb://page/1032462220228396";
//     case "iOS":
//       window.location = "fb://profile/1032462220228396";

//   }
// })

// $("#fb_link").click(function(){
//   setTimeout(function(){alert("ORI")}, 2000);
//   // const address = "https://www.facebook.com/נוני-ופורטונה-יד-שניה-וינטג-וקפה-1032462220228396/";
//   // let app_location="";
//   // let os_sys = getMobileOperatingSystem()
//   // switch(os_sys){
//   //   case "Android" || "Windows Phone":
//   //     app_location = "fb://page/1032462220228396";
//   //   case "iOS":
//   //     app_location = "fb://profile/1032462220228396";
//   //   }
//   //   // window.location = app_location;
//   //   // console.log(window.location);
//   //   // setTimeout(function () {
//   //   //   console.log("ORIII");
//   //   //   window.location = (address); }, 2000);
//   //   if(app_location==""){
//   //     console.log("!!!!!!!!!!!!!!!!");
//   //     window.location = address;
//   //   }
//   //   else{
//   //   window.location.replace(app_location); setTimeout(function () {

//   //   window.location.replace(address); }, 2000);
//   // }

// })



function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  // console.log(userAgent);
      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
  
        return "iOS";
    }
    return "unknown";
}


$(function () {
  $(document).scroll(function () {
    var $nav = $("#main_navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() + 20 > 80);
    
  });
});

// if ("loading" in HTMLImageElement.prototype) {
//   console.log("OH YESSSS");
// } else {
//   console.log("OH NOOOO");
// }