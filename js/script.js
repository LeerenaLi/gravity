// owl-carousel section offer
$(function() {
    $('.offer-carousel').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        dots:false,
        navText: ['<img src="icons/active.svg">', '<img src="icons/active.svg">'],
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
    });

    // owl-carousel section servises

    $('.servises-carousel').owlCarousel({
        loop:true,
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
    });

    // owl-carousel section reviews

    $('.reviews-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        navText: ['<img src="icons/left.svg">', '<img src="icons/right.svg">'],
        // startPosition:0,
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


    // tabs

    $('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
        e.preventDefault();
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });    
});