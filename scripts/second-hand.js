// $('.menu').click(function(){
//     console.log("ORIIIII");
//     $('#overlay').each(function(){
//         if($(this).hasClass('hidden')){
//             console.log($(this));
//             $(this).animate({'width':'show'} , { duration: 1000, easing: "swing" });
//         }

//         else{
//             $(this).animate({'width':'hide'} , { duration: 1000, easing: "linear" });

//         }
//         $(this).toggleClass('hidden');
//     });

// });


$('.nav_menu').click(function(){
    $('#main_navbar').each(function(){
        // if($(this).hasClass('colored')){
        //     $(this).css("background-color", "transparent");
        // }
        // else{
        //     $(this).animate({backgroundColor: '#FF0000'}, slow);

        //     // $(this).css("background-color", "yellow");
        // }

        $(this).toggleClass('colored');
    });
    

});


$(window).scroll( function(){
    // if(window)
  /* Check the location of each desired element */
  $('.card').each( function(i){
      console.log("##########");
      console.log($(this));
      // var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      const top_of_object = $(this).offset().top; //As soon as it appears, animate it in
      const middle_of_object = $(this).offset().top + $(this).outerHeight()/3; //As soon as it appears, animate it in
      const bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it in */
      if( bottom_of_window > middle_of_object ){    
          console.log("CARD REACHED");      
          // $(this).animate({'opacity':'1'} ,'slow');
          $(this).animate({'width':'show'} , { duration: 1000, easing: "swing" }); //Linear or Swing?? Speed of animation? What on mobile?
          console.log($(this));


      }

  }); 

});