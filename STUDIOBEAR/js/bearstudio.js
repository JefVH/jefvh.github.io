/*var height = $(window).height();
var topHeading = height/5;
var headerHeight = $('#header').height();
var servicesHeight = $('#services').height();
var headingHeight = $('#header-heading').height();
var servicesHeadingHeight = $('#services-heading').height();*/

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

/*$(window).scroll(function(){
	var outcome = height-topHeading-headingHeight;
	var scroll = $(window).scrollTop();
	if(scroll > outcome){
		$('#header-heading').addClass('stick');
	}
	else{
		$('#header-heading').removeClass('stick');
	}
});

$(document).ready(function(){
	$('#scroll-down').addClass('animated bounce');	
	$('#header-heading').addClass('animated slideInLeft');
	$('#mobile-header').addClass('animated fadeIn');

	$(window).scroll(function(){
		var $blocks = $('.not-viewed');

		$blocks.each(function(i,elem){
			if($(this).hasClass('viewed'))
				return;

			isScrolledIntoView($(this));
		});
	});
});

function isScrolledIntoView(elem){
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();
	var elemOffset = 0;

	if(elem.data('offset') != undefined){
		elemOffset = elem.data('offset');
	}

	var elemTop = $(elem).offset()	.top;
	var elemBottom = elemTop + $(elem).height();

	if(elemOffset != 0){
		if(docViewTop - elemTop >= 0){
			elemTop = $(elem).offset().top + elemOffset;
		}
		else{
			elemBottom = elemTop + $(elem).height() - elemOffset;
		}
	}

	if((elemBottom <= docViewBottom) && (elemTop >= docViewTop)){
		$(elem).removeClass('not-viewed').addClass('viewed');
		$(elem).addClass('animated slideInLeft');
	}
}*/