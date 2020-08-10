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


$('#my_burger').click(function(){
    
});