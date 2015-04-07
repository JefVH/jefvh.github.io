jQuery(document).ready(function () {

    // Dropdown
    //--------------------------------------
    var config = {
        sensitivity: 3, // number = sensitivity threshold (must be 1 or higher)    
        interval: 200,  // number = milliseconds for onMouseOver polling interval    
        over: doOpen,   // function = onMouseOver callback (REQUIRED)    
        timeout: 200,   // number = milliseconds delay before onMouseOut    
        out: doClose    // function = onMouseOut callback (REQUIRED)    
    };

    function doOpen() {
        $(this).addClass("hover");
        $('ul:first', this).css('visibility', 'visible');
    }

    function doClose() {
        $(this).removeClass("hover");
        $('ul:first', this).css('visibility', 'hidden');
    }

    $("ul.dropdown li").hoverIntent(config);

    $("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");


    // Empty input fields on click
    //--------------------------------------
    // display value in search field
    $('input.searchInput, input.emptyonclick, input.loginname, input.password').emptyonclick();


    // Slider (homepage)
    //--------------------------------------  
    // main vertical scroll
    var contentSlider = $("#slider-content").scrollable({
        // basic settings
        vertical: true, mousewheel: false, speed: 600, circular: true
        // main navigator (thumbnail images)
    }).navigator({ navi: "#slider-nav ul", naviItem: "li" }).autoscroll(6000);
    $('#slider-nav li').hoverIntent(function () {
        $(this).click();
    }, function () { });

    // Split5 scrollable, need to move this to -1 to get the last active page as content on page load

    // Slider (pages)
    //--------------------------------------
    // main vertical scroll
    $("#slider-content-page").scrollable({
        circular: true

    }).navigator("#slider-nav-page").autoscroll(5000);



    // Popups (colorbox - http://colorpowered.com/colorbox/)
    //--------------------------------------

    //$("#slider-content a").fancybox({
    //    'transitionIn': 'elastic',
    //    'transitionOut': 'elastic'
    //});
    //

    //    $("#slider-nav a").fancybox({
    //        onStart:	function() {
    //			 $(this).click();
    //		}
    //    });

    //$(".item h1").fancybox({
    //    'transitionIn': 'elastic',
    //    'transitionOut': 'elastic'
    //});

    /*$("#menu a").fancybox({  
    'transitionIn'	: 'elastic',      
    'transitionOut'	: 'elastic'        
    });*/


    $(".popup .readmore a").fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic'
    });


    $("a#country").fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic'
    });

    $("a.discover").fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic'
    });


    // Superfish expandable menu
    //--------------------------------------     

    $("ul.menu").superfish();




    // Simulate select box
    //--------------------------------------

    $('a.toggler').click(function () {
        $(this).next('ul.links').slideToggle('slow');
    });


    $("ul.links").bind("clickoutside", function (event) {
        $(this).hide();
    });


});
