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