var projectsArray = [],
    regionsArray = [],
    projectTypesArray = [],
    buildingStylesArray = [],
    productTypesArray = [],
    colorsArray = [],
    productTitlesArray = [],
    regionsArrayFiltered = [],
    projectTypesArrayFiltered = [],
    buildingStylesArrayFiltered = [],
    productTypesArrayFiltered = [],
    colorsArrayFiltered = [],
    regionsArray_nl = [],
    projectTypesArray_nl = [],
    buildingStylesArray_nl = [],
    productTypesArray_nl = [],
    colorsArray_nl = [],
    regionsArray_fr = [],
    projectTypesArray_fr = [],
    buildingStylesArray_fr = [],
    productTypesArray_fr = [],
    colorsArray_fr = [],
    visibleProjects = [];

$(function () {
    $.ajax({
        type: "GET",
        url: "/Content/inspiratiemodule/inspiration.xml",
        dataType: "xml",
        success: function (xml) {
            var countProjects = 1;
            var pathname = window.location.pathname.split('/');
            var lang = pathname[1];

            $(xml).find('project').each(function () {
                window['project' + countProjects] = {};

                regionsArray.push($(this).find('region').text());
                projectTypesArray.push($(this).find('projecttype').text());
                buildingStylesArray.push($(this).find('buildingstyle').text());
                productTypesArray.push($(this).find('producttype').text());
                colorsArray.push($(this).find('color').text());
                productTitlesArray.push($(this).find('producttitle').text());

                window['regionsArray_' + lang].push($(this).find('region_' + lang).text());
                window['projectTypesArray_' + lang].push($(this).find('projecttype_' + lang).text());
                window['buildingStylesArray_' + lang].push($(this).find('buildingstyle_' + lang).text());
                window['productTypesArray_' + lang].push($(this).find('producttype_' + lang).text());
                window['colorsArray_' + lang].push($(this).find('color_' + lang).text());

                window['project' + countProjects].id = $(this).attr('id');
                window['project' + countProjects].location = $(this).find('location_' + lang).text();
                window['project' + countProjects].country = $(this).find('country_' + lang).text();
                window['project' + countProjects].region = $(this).find('region_' + lang).text();
                window['project' + countProjects].projecttype = $(this).find('projecttype_' + lang).text();
                window['project' + countProjects].buildingstyle = $(this).find('buildingstyle_' + lang).text();
                window['project' + countProjects].producttitle = $(this).find('producttitle_' + lang).text();
                window['project' + countProjects].producttype = $(this).find('producttype_' + lang).text();
                window['project' + countProjects].series = $(this).find('series_' + lang).text();
                window['project' + countProjects].colortype = $(this).find('colortype_' + lang).text();
                window['project' + countProjects].color = $(this).find('color_' + lang).text();
                window['project' + countProjects].customer = $(this).find('customer_' + lang).text();
                window['project' + countProjects].websitecustomer = $(this).find('websitecustomer').text();
                window['project' + countProjects].quote = $(this).find('quote_' + lang).text();
                window['project' + countProjects].coverImg = $(this).find('coverImg').text();
                window['project' + countProjects].img1 = $(this).find('img1').text();
                window['project' + countProjects].img2 = $(this).find('img2').text();
                window['project' + countProjects].img3 = $(this).find('img3').text();
                window['project' + countProjects].img4 = $(this).find('img4').text();
                window['project' + countProjects].img5 = $(this).find('img5').text();
                window['project' + countProjects].img6 = $(this).find('img6').text();

                projectsArray.push(window['project' + countProjects]);

                showProject(countProjects-1,lang);

                countProjects++;

            });

            localStorage.setItem('projects',projectsArray);

            regionsArrayFiltered = noDuplicatesArray(regionsArray);
            projectTypesArrayFiltered = noDuplicatesArray(projectTypesArray);
            buildingStylesArrayFiltered = noDuplicatesArray(buildingStylesArray);
            productTypesArrayFiltered = noDuplicatesArray(productTypesArray);
            colorsArrayFiltered = noDuplicatesArray(colorsArray);
            regionsArray_nl = noDuplicatesArray(regionsArray_nl);
            projectTypesArray_nl = noDuplicatesArray(projectTypesArray_nl);
            buildingStylesArray_nl = noDuplicatesArray(buildingStylesArray_nl);
            productTypesArray_nl = noDuplicatesArray(productTypesArray_nl);
            colorsArray_nl = noDuplicatesArray(colorsArray_nl);
            regionsArray_fr = noDuplicatesArray(regionsArray_fr);
            projectTypesArray_fr = noDuplicatesArray(projectTypesArray_fr);
            buildingStylesArray_fr = noDuplicatesArray(buildingStylesArray_fr);
            productTypesArray_fr = noDuplicatesArray(productTypesArray_fr);
            colorsArray_fr = noDuplicatesArray(colorsArray_fr);

            showFilters(lang);

            //oddEvenDivs();

            var $container = $('#projects'),
                visibleProjects = [],
                filters = {};

            $container.isotope({
                itemSelector: 'article',
                layoutMode: 'fitRows',
                isInitLayout: false,
                transitionDuration: 0
            });

            //$container.isotope('on', 'layoutComplete', oddEvenDivs);

            //TO DO: Add combination-function for filters: http://jsfiddle.net/fgLUa/39/
            // --> werken met data-filter-value en data-filter group
            //Combinatie werkt maar geeft geen projecten meer terug als alle filters terug op 'Alles' worden ingesteld.
            $('.project-filter').on('change', function () {

                //var filterValue = this.value;
                //$container.isotope({ filter: filterValue });

                var $this = $(this);

                var group = $this.attr('id');

                filters[group] = $this.find(':selected').attr('value');
                console.log($this.find(':selected'));

                var filtersArray = [];
                for (var prop in filters) {
                    filtersArray.push(filters[prop]);
                }
                console.log(filters);
                var filterValue = filtersArray.join('');
                $container.isotope({ filter: filterValue });
                return false;
            });

            $container.isotope('on', 'layoutComplete',
                function (isoInstance, laidOutItems) {
                    $('.grid-project').removeClass('visibleProject');
                    $.each(laidOutItems, function (index, value) {
                        $(value.element).addClass('visibleProject');
                        crossProjects();
                    });

                });

            $container.isotope('arrange');

            $('.filtersSidebar-trigger').click(function () {
                $(this).addClass('filtersSidebar-open');
                $('.filtersSidebar').addClass('filtersSidebar-open');
            });

            $('.filtersSidebar-close').click(function () {
                $('.filtersSidebar-trigger').removeClass('filtersSidebar-open');
                $('.filtersSidebar').removeClass('filtersSidebar-open');
            });
        }
    });
});

function crossProjects() {
    $('.visibileProject').each(function (index, element) {
        console.log(index + ': ' + element);
    });
}

function noDuplicatesArray(sourceArray) {
    var result = [];
    $.each(sourceArray, function (i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}



function showProject(count, lang) {
    var imgPathBase = "/Content/inspiratiemodule/Images/Projects/";
    var detailPathBase = "/"+lang+"/inspiratiemodule/detail.aspx?id=";
    switch(lang){
        case 'nl':

    //TO DO: Switch case toevoegen om te controleren op de 4 productcategorieën
            $('#projects').append($('<article></article>')
                                .addClass('grid-project')
                                .addClass(regionsArray[count])
                                .addClass(projectTypesArray[count])
                                .addClass(buildingStylesArray[count])
                                .addClass(productTypesArray[count])
                                .addClass(colorsArray[count])
                                .append($('<a></a>')
                                    .attr({ href: detailPathBase + projectsArray[count].id })
                                    .attr({ target: '_blank' })
                                    .addClass(productTitlesArray[count])
                                    .append($('<figure></figure>')
                                        .append($('<img />')
                                            .attr({ src: imgPathBase + projectsArray[count].coverImg })
                                            .addClass('grid-project-img'))
                                        .append($('<figcaption></figcaption>')
                                            .append($('<span></span>')
                                                .append($('<img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt=""/>'))
                                                .append('bekijk project')))
                                    )
                                    .append($('<div></div>')
                                        .addClass('grid-project-info')
                                        .append($('<h1></h1>')
                                            .append('Project'))
                                        .append($('<h2></h2>')
                                            .append(projectsArray[count].projecttype + '/' + projectsArray[count].location))
                                        .append($('<h1></h1>')
                                            .append('Bouwstijl'))
                                        .append($('<h2></h2>')
                                            .append(projectsArray[count].buildingstyle))
                                        .append($('<h1></h1>')
                                            .append(projectsArray[count].producttype))
                                        .append($('<h2></h2>')
                                            .append(projectsArray[count].series))
                                        .append($('<h2></h2>')
                                            .append(projectsArray[count].colortype))
                                        .append($('<h2></h2>')
                                            .append(projectsArray[count].color))
                                ))
                            );
            break;
        case 'fr':
    }
}

// --- FILTERS SIDEBAR ---
function showFilters(lang) {
    var regionsArrayCount = regionsArrayFiltered.length;
    var projectTypesArrayCount = projectTypesArrayFiltered.length;
    var buildingStylesArrayCount = buildingStylesArrayFiltered.length;
    var productTypesArrayCount = productTypesArrayFiltered.length;
    var colorsArrayCount = colorsArray.length;

    switch (lang) {
        case "nl":
            $('.filtersSidebar-content').append($('<ul></ul>')
                .append($('<li></li>')
                    .addClass('filterRegion')
                    .append('<h4>Provincie</h4>'))
                .append($('<li></li>')
                    .addClass('filterProjecttype')
                    .append('<h4>Projecttype</h4>'))
                .append($('<li></li>')
                    .addClass('filterBuildingstyle')
                    .append('<h4>Bouwstijl</h4>'))
                .append($('<li></li>')
                    .addClass('filterProducttype')
                    .append('<h4>Producttype</h4>'))
                .append($('<li></li>')
                    .addClass('filterColor')
                    .append('<h4>Kleur</h4>'))
            );

            //$.each(regionsArrayFiltered, function (key, value) {
            //    $('.filterRegion').append($('<input>')
            //                            .attr({ type: 'checkbox' })
            //                            .attr({ id: 'selection_' + value })
            //                            .attr({ value: value }));
            //    $('.filterRegion').append($(regionsArray_nl[key] + '<br>'));
            //});

            $.each(regionsArrayFiltered, function (key, value) {
                var region = regionsArray_nl[key];
                $('.filterRegion').append($('<input>')
                                        .attr({ type: 'checkbox' })
                                        .attr({ id: 'selection_' + value })
                                        .attr({ value: value }));
                $('.filterRegion').append(region);
                $('.filterRegion').append($('<br>'));
            });

            $.each(projectTypesArrayFiltered, function (key, value) {
                var projecttype = projectTypesArray_nl[key];
                $('.filterProjecttype').append($('<input>')
                                        .attr({ type: 'checkbox' })
                                        .attr({ id: 'selection_' + value })
                                        .attr({ value: value }));
                $('.filterProjecttype').append(projecttype);
                $('.filterProjecttype').append($('<br>'));
            });

            $.each(buildingStylesArrayFiltered, function (key, value) {
                var buildingstyle = buildingStylesArray_nl[key];
                $('.filterBuildingstyle').append($('<input>')
                                        .attr({ type: 'checkbox' })
                                        .attr({ id: 'selection_' + value })
                                        .attr({ value: value }));
                $('.filterBuildingstyle').append(buildingstyle);
                $('.filterBuildingstyle').append($('<br>'));
            });

            $.each(productTypesArrayFiltered, function (key, value) {
                var producttype = productTypesArray_nl[key];
                $('.filterProducttype').append($('<input>')
                                        .attr({ type: 'checkbox' })
                                        .attr({ id: 'selection_' + value })
                                        .attr({ value: value }));
                $('.filterProducttype').append(producttype);
                $('.filterProducttype').append($('<br>'));
            });

            $.each(colorsArrayFiltered, function (key, value) {
                var color = colorsArray_nl[key];
                var colorShort = color.substr(0, color.indexOf(' '));
                $('.filterColor').append($('<input>')
                                        .attr({ type: 'checkbox' })
                                        .attr({ id: 'selection_' + value })
                                        .attr({ value: value }));
                $('.filterColor').append(colorShort);
                $('.filterColor').append($('<br>'));
            });

    }
}


// --- FILTERS TABLE SELECT ---
//function showFilters(lang) {
//    var regionsArrayCount = regionsArrayFiltered.length;
//    var projectTypesArrayCount = projectTypesArrayFiltered.length;
//    var buildingStylesArrayCount = buildingStylesArrayFiltered.length;
//    var productTypesArrayCount = productTypesArrayFiltered.length;
//    var colorsArrayCount = colorsArray.length;

//    switch (lang) {
//        case "nl":
//            $('#filters').append($('<table></table')
//                 .append($('<tr></tr>')
//                     .attr({ id: 'filterlabels' })
//                     .append($('<td></td>')
//                         .attr({id:'regionlabel'})
//                         .append('Provincie'))
//                     .append($('<td></td>')
//                         .attr({id:'projecttypelabel'})
//                         .append('Projecttype'))
//                     .append($('<td></td>')
//                         .attr({id:'buildingstylelabel'})
//                         .append('Bouwstijl'))
//                     .append($('<td></td>')
//                         .attr({id:'producttypelabel'})
//                         .append('Producttype'))
//                     .append($('<td></td>')
//                         .attr({id:'colorlabel'})
//                         .append('Kleur'))
//                     )
//                 .append($('<tr></tr>')
//                     .append($('<td></td>')
//                         .append($('<select></select>')
//                             .attr({ id: 'regions-filter' })
//                             .addClass('project-filter')
//                         ))
//                     .append($('<td></td>')
//                         .append($('<select></select>')
//                             .attr({ id: 'projecttypes-filter' })
//                             .addClass('project-filter')
//                         ))
//                     .append($('<td></td>')
//                         .append($('<select></select>')
//                             .attr({ id: 'buildingstyles-filter' })
//                             .addClass('project-filter')
//                         ))
//                     .append($('<td></td>')
//                         .append($('<select></select>')
//                             .attr({ id: 'producttypes-filter' })
//                             .addClass('project-filter')
//                         ))
//                     .append($('<td></td>')
//                         .append($('<select></select>')
//                             .attr({ id: 'colors-filter' })
//                             .addClass('project-filter')
//                         ))
//                     )
//                );
            
//            //TO DO: Geen duplicate options in select
//            $('#regions-filter').append($('<option></option>')
//                                    .attr({value:'*'})
//                                    .append('Toon alles')
//                                );
//            $.each(regionsArrayFiltered, function (key, value) {
//                $('#regions-filter').append($('<option></option>')
//                                        .attr({ value: '.'+value })
//                                        .append(regionsArray_nl[key])
//                                    );
//            });

//            $('#projecttypes-filter').append($('<option></option<')
//                                    .attr({ value: '*' })
//                                    .append('Toon alles')
//                                );
//            $.each(projectTypesArrayFiltered, function (key, value) {
//                $('#projecttypes-filter').append($('<option></option>')
//                                        .attr({ value: '.'+value })
//                                        .append(projectTypesArray_nl[key])
//                                    );
//            });

//            $('#buildingstyles-filter').append($('<option></option<')
//                                    .attr({ value: '*' })
//                                    .append('Toon alles')
//                                );
//            $.each(buildingStylesArrayFiltered, function (key, value) {
//                $('#buildingstyles-filter').append($('<option></option>')
//                                        .attr({ value: '.'+value })
//                                        .append(buildingStylesArray_nl[key])
//                                    );
//            });

//            $('#producttypes-filter').append($('<option></option<')
//                                    .attr({ value: '*' })
//                                    .append('Toon alles')
//                                );
//            $.each(productTypesArrayFiltered, function (key, value) {
//                $('#producttypes-filter').append($('<option></option>')
//                                        .attr({ value: '.'+value })
//                                        .append(productTypesArray_nl[key])
//                                    );
//            });

//            $('#colors-filter').append($('<option></option<')
//                                    .attr({ value: '*' })
//                                    .append('Toon alles')
//                                );
//            $.each(colorsArrayFiltered, function (key, value) {
//                $('#colors-filter').append($('<option></option>')
//                                        .attr({ value: '.'+value })
//                                        .append(colorsArray_nl[key])
//                                    );
//            });
//            break;
//    }
   
//}

$(document).ready(function () {
    $('.grid-project').fancybox();
});
