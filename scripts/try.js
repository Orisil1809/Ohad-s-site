// init Masonry

// var $grid = $('.grid').masonry({
//   itemSelector: '.grid-item',
//   percentPosition: true,
//   columnWidth: '.grid-sizer'
// });

// // layout Masonry after each image loads
// $grid.imagesLoaded().progress( function() {
//   $grid.masonry();
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
        $('#my_brand').toggleClass('coffee_disappear');
        //Change hover color on nav links
        //Display none the #my_brand
    });
    

});