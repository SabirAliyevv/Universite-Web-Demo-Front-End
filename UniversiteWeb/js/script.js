$(document).ready(function(){

    $('.nav-link').click(function() {
        console.log("Clicked");
        $('.nav-link.active').removeClass('active');
        $(this).addClass('active');
    });
  
    $(function(){
        $('.timer').countTo();
    });



    $('.student-1').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });



    $('.partner-logo').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            }
        }
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    window.addEventListener("scroll",function(){
        var nav =document.querySelector("nav");
        nav.classList.toggle("fixed-top",window.scrollY>58);
    })
    
    window.addEventListener("scroll",function(){
        var nav =document.getElementsByClassName("down-top")[0];
        nav.classList.toggle("top",window.scrollY>20);
    })


    
    
  });