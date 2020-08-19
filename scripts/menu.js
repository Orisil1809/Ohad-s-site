
$('.nav_menu').click(function(){
    console.log("ORIIII");
    $('#main_navbar').each(function(){
        // if($(this).hasClass('colored')){
        //     $(this).css("background-color", "transparent");
        // }
        // else{
        //     $(this).animate({backgroundColor: '#FF0000'}, slow);

        //     // $(this).css("background-color", "yellow");
        // }

        $(this).toggleClass('colored');
        $('#my_brand').toggleClass('coffee_disappear');
        //Change hover color on nav links
        //Display none the #my_brand
    });
    

});