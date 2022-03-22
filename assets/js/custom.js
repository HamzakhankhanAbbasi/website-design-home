//Add Class Sticky On Scroll
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".header-nav").removeClass("sticky");
            $(".navbar .navbar-brand img").attr("src", "assets/images/logo.png");
        } 
        else {
            $(".header-nav").addClass("sticky");
            $(".navbar .navbar-brand img").attr("src", "assets/images/logo.png");
        }
    });
    
// Mobile Menu Js
$('.mobile-toggle').click(function(){
	$('.mobile-menu').toggleClass('show');
});

// Testimonial Slider JS
$('.testimonial-wrap').owlCarousel({
	loop:true,
	margin:10,
	nav:false,
	dots:false,
	center:true,
	autoplay:true,
	responsive:{
		0:{
			items:1,
		},
		600:{
			items:1
		},
		1000:{
			items:1
		}
	}
});

// Parallax-Img
var scene = document.getElementById('js-parallax-scene1');
var parallax = new Parallax(scene);
var scene = document.getElementById('js-parallax-scene2');
var parallax = new Parallax(scene);
var scene = document.getElementById('js-parallax-scene3');
var parallax = new Parallax(scene);
var scene = document.getElementById('js-parallax-scene4');
var parallax = new Parallax(scene);
var scene = document.getElementById('js-parallax-scene5');
var parallax = new Parallax(scene);