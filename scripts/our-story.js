//#region slick carousel

$(document).ready(function(){
    $("#our_story").animate({'opacity':'1'} ,1000);
});
  
//   $(window).scroll( function(){
  

//     $('#our_story').each( function(i){
  
//         // var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//         const top_of_object = $(this).offset().top; //As soon as it appears, animate it in
//         const middle_of_object = $(this).offset().top + $(this).outerHeight()/3; //As soon as it appears, animate it in
//         const bottom_of_window = $(window).scrollTop() + $(window).height();
  
//         /* If the object is completely visible in the window, fade it in */
//         if( bottom_of_window > middle_of_object ){          
//             // $(this).animate({'opacity':'1'} ,'slow');
//             $(this).animate({'width':'show'} , { duration: 1000, easing: "swing" }); //Linear or Swing?? Speed of animation? What on mobile?
  
  
//         }
  
//     }); 
  
//   });
  
  //#region our story animation try
  
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
    console.log("CLICKED!!!");
    if($("#more_story").hasClass("d-block")){
      $(this).html('<b>קרא עוד</b>');
      $("#more_story").removeClass("d-block");
      $("#more_story").addClass("d-none");
    }
    else if ($("#more_story").hasClass("d-none")){
      $(this).html('<b>מזער</b>');
      $("#more_story").removeClass("d-none");
      $("#more_story").addClass("d-block");
    }
  
  });
  
  $("#fb_link").click(function(){
    const address = "https://www.facebook.com/נוני-ופורטונה-יד-שניה-וינטג-וקפה-1032462220228396/";
    window.location.replace("fb://profile/1032462220228396");
    setTimeout(function () {
      window.location.replace(address); }, 2000);
  })
  
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
    console.log("ORIIASD");
    $("#main_navbar").toggleClass('colored');
    $('.colored #navbarCollapse').on("click", "li" , function(){
      console.log("ORI11");
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
  
  //Commented 29.08
  

  $(window).scroll( function(){

    $('#second_row').each( function(i){
  
      const top_of_object = $(this).offset().top; //As soon as it appears, animate it in
      const middle_of_object = $(this).offset().top + $(this).outerHeight()/3; //As soon as it appears, animate it in
      const bottom_of_window = $(window).scrollTop() + $(window).height();
  
      /* If the object is completely visible in the window, fade it in */
      if( bottom_of_window > top_of_object ){          
         
          // $(this).animate({'width':'show'} , { duration: 1000, easing: "swing" }); //Linear or Swing?? Speed of animation? What on mobile?
  
          $(this).addClass('anim');
  
      }
  
    });
});

$('#button').click(function(){
    zenscroll.toY(0)
    // $('#button').css("background-color", "#FCB103");
});