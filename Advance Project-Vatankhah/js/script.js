jQuery(document).ready(function($) {

	var menu = $('.main-nav');
    var navbar = $('.navbar-collapse');
	$(window).scroll(function() {
		if ($(this).scrollTop() > 150 && menu.hasClass('main-nav')) {
			menu.addClass('sticky-nav');
		} else if ($(this).scrollTop() <= 120 && menu.hasClass('sticky-nav')) {
			menu.removeClass('sticky-nav');
		}
	});

    $('.navbar-toggler').click(function () {
        if (!navbar.hasClass('show')) {
            menu.addClass('nav-expand');
        } else {
            menu.removeClass('nav-expand');
        }
    });

    $('.feature-item.active').waypoint(function(direction) {
        $('.feature-item.active').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    $('.box-animation').waypoint(function(direction) {
        $('.box-animation').addClass('animated fadeInUp');
    }, {
        offset: '85%'
    });

    $('.chevron-down').click(function () {
        $('html, body').animate({scrollTop: $('.feature-section').offset().top}, 1000); 
    });

    $('.wiki-item').waypoint(function(direction) {
        $('.wiki-item').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });
	
});