$(function () {
    //init Isotope
    var $container = $('.projects').isotope({
        itemSelector: '.grid-project',
        layoutMode: 'masonry'
    });

    $('#regions-filter').on('change', function () {
        var filterValue = this.value;
        $container.isotope({ filter: filterValue });
    });
})