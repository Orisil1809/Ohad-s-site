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
          //Also, changed speed from 500
          //fade: true,
          cssEase: 'linear'
        }
      }
    ]
    });
  });
  
  //#endregion
  
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
  
  //#region our story animation try
  // $(document).ready( function(){

        $('#my_text').animate({'height':'show'} , { duration: 1000, easing: "swing" }); //Linear or Swing?? Speed of animation? What on mobile?

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
  
  $("#story_link").click(function () { 
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
  
  // $("#fb_link").click(function(){
  //   const address = "https://www.facebook.com/נוני-ופורטונה-יד-שניה-וינטג-וקפה-1032462220228396/";
  //   setTimeout(function (){
  //     window.location.replace("fb://profile/1032462220228396");
  //   }, 500);
  //   setTimeout(function () {
  //     window.location.replace(address); }, 1000);
  // })
  



  //#region fb link try
  
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
  
  //#endregion
  
  
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
        //ADDED 8.9 - NOT

  
  
      });
    });
  });
  
  $('#navbarCollapse').on('hide.bs.collapse', function () {
    $('.my_nav').animate({'opacity':'0'} ,'fast');
      //ADDED 8.9
    // $("#main_navbar").removeClass('my-background');

  
  });

  
  $('#navbarCollapse').on('show.bs.collapse', function () {

    $('.my_nav').css({ 'opacity' : 1 });
    //ADDED 8.9
    // $("#main_navbar").addClass('my-background');

  });
  
  function delay (URL) {
    setTimeout( function() { window.location = URL }, 500 );
  }
  
  //Commented 29.08
  
  // $('#navbarCollapse').on('hidden.bs.collapse', function () {
  //   $('#main_navbar').removeClass('colored');
  
  // });
  
  // if ("loading" in HTMLImageElement.prototype) {
  //   console.log("OH YESSSS");
  // } else {
  //   console.log("OH NOOOO");
  // }
  
  
  // $('.fa-bed').click(function(){
  //   console.log("ORIIII");
  //   const audio = new Audio('/assets/0170.mp3');
  //   audio.play();
  // });
  
  
  
  TweenMax.set(".hand-x", {rotation:-20, transformOrigin:"bottom center", x:-20});


  var tween = TweenMax.to(".hand-x", 1, {x:20, rotation:20, repeat:100, ease:Power3.easeInOut, yoyo:true})


  $(window).scroll( function(){
    // if(window)
  /* Check the location of each desired element */
  $('#second h2').each( function(i){

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



$('#scroll-arrow').click(function(){
  console.log("WERWERWERWER");

  var defaultDuration = 777 // ms
  var edgeOffset = 70; // px
  zenscroll.setup(defaultDuration, edgeOffset)
  zenscroll.to(second)

  console.log(zenscroll.getY());

});

$(document).ready(function(){
  $('#my-img').animate({'width':'show'} , { duration: 800, easing: "swing" }); //Linear or Swing?? Speed of animation? What on mobile?

});



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
          
// $('#should-know').click(function(){
//   var defaultDuration = 1000 // ms
//   var edgeOffset = -0 // px
//   zenscroll.setup(defaultDuration, edgeOffset);

//   zenscroll.to(my_footer);

// });

