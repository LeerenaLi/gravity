$(function() {
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        dots:false,
        navText: ['<img src="icons/left.svg">', '<img src="icons/right.svg">'],
        startPosition:0,
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
    })
});