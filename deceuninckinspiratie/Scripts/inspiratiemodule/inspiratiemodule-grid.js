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
    colorsArray_fr = [];

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
                createArrays($(this), countProjects, lang);

                showProject(countProjects-1,lang);

                countProjects++;

            });

            noDuplicateArrays();

            showFilters(lang);
        }
    });

    $('.filtersSidebar-trigger').click(function () {
        $(this).addClass('filtersSidebar-open');
        $('.filtersSidebar').addClass('filtersSidebar-open');
    });

    $('.filtersSidebar-close').click(function () {
        $('.filtersSidebar-trigger').removeClass('filtersSidebar-open');
        $('.filtersSidebar').removeClass('filtersSidebar-open');
    });
});

function createArrays(project, countProjects, lang) {
    window['project' + countProjects] = {};

    regionsArray.push(project.find('region').text());
    projectTypesArray.push(project.find('projecttype').text());
    buildingStylesArray.push(project.find('buildingstyle').text());
    productTypesArray.push(project.find('producttype').text());
    colorsArray.push(project.find('color').text());
    productTitlesArray.push(project.find('producttitle').text());

    window['regionsArray_' + lang].push(project.find('region_' + lang).text());
    window['projectTypesArray_' + lang].push(project.find('projecttype_' + lang).text());
    window['buildingStylesArray_' + lang].push(project.find('buildingstyle_' + lang).text());
    window['productTypesArray_' + lang].push(project.find('producttype_' + lang).text());
    window['colorsArray_' + lang].push(project.find('color_' + lang).text());

    window['project' + countProjects].id = project.attr('id');
    window['project' + countProjects].location = project.find('location_' + lang).text();
    window['project' + countProjects].country = project.find('country_' + lang).text();
    window['project' + countProjects].region = project.find('region_' + lang).text();
    window['project' + countProjects].projecttype = project.find('projecttype_' + lang).text();
    window['project' + countProjects].buildingstyle = project.find('buildingstyle_' + lang).text();
    window['project' + countProjects].producttitle = project.find('producttitle_' + lang).text();
    window['project' + countProjects].producttype = project.find('producttype_' + lang).text();
    window['project' + countProjects].series = project.find('series_' + lang).text();
    window['project' + countProjects].colortype = project.find('colortype_' + lang).text();
    window['project' + countProjects].color = project.find('color_' + lang).text();
    window['project' + countProjects].customer = project.find('customer_' + lang).text();
    window['project' + countProjects].websitecustomer = project.find('websitecustomer').text();
    window['project' + countProjects].quote = project.find('quote_' + lang).text();
    window['project' + countProjects].coverImg = project.find('coverImg').text();
    window['project' + countProjects].img1 = project.find('img1').text();
    window['project' + countProjects].img2 = project.find('img2').text();
    window['project' + countProjects].img3 = project.find('img3').text();
    window['project' + countProjects].img4 = project.find('img4').text();
    window['project' + countProjects].img5 = project.find('img5').text();
    window['project' + countProjects].img6 = project.find('img6').text();

    projectsArray.push(window['project' + countProjects]);
}

function noDuplicateArrays() {
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
            $('.project-overview').append($('<li></li>')
                            .addClass('blocklink')
                            .addClass(regionsArray[count])
                            .addClass(projectTypesArray[count])
                            .addClass(buildingStylesArray[count])
                            .addClass(productTypesArray[count])
                            .addClass(colorsArray[count])
                            .addClass(productTitlesArray[count])
                            .attr({ id: 'project-' + count + 1 })
                            .append($('<img />')
                                .attr({ src: imgPathBase + projectsArray[count].coverImg }))
                            .append($('<div></div>')
                                .addClass('info')
                                .append($('<div></div>')
                                    .addClass('info-wrap')
                                    .append($('<div></div>')
                                        .addClass('v-info-wrap')
                                        .append($('<h2></h2>')
                                            .append(projectsArray[count].buildingstyle + ' ' + projectsArray[count].location))
                                        .append($('<div></div>')
                                            .addClass('info-text')
                                            .append($('<p></p>')
                                                .append(projectsArray[count].series))
                                            .append($('<p></p>')
                                                .append(projectsArray[count].colortype))
                                            .append($('<p></p>')
                                                .append(projectsArray[count].color))
                                            .append($('<a></a>')
                                                .append('Bekijk project'))
                                        )
                                    )
                                )
                            )
            );
            break;

        case 'fr':
    }
}


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
                    .addClass('option-set')
                    .attr('data-group','region')
                    .append('<h4>Provincie</h4>'))
                .append($('<li></li>')
                    .addClass('filterProjecttype')
                    .addClass('option-set')
                    .attr('data-group', 'projecttype')
                    .append('<h4>Projecttype</h4>'))
                .append($('<li></li>')
                    .addClass('filterBuildingstyle')
                    .addClass('option-set')
                    .attr('data-group', 'buildingstyle')
                    .append('<h4>Bouwstijl</h4>'))
                .append($('<li></li>')
                    .addClass('filterProducttype')
                    .addClass('option-set')
                    .attr('data-group', 'producttype')
                    .append('<h4>Producttype</h4>'))
                .append($('<li></li>')
                    .addClass('filterColor')
                    .addClass('option-set')
                    .attr('data-group', 'color')
                    .append('<h4>Kleur</h4>'))
            );

            $('.filterRegion').append($('<input>')
                                    .attr({ type: 'checkbox' })
                                    .attr({ id: 'region-all' })
                                    .attr('checked','checked')
                                    .addClass('all'));
            $('.filterRegion').append('Alles');
            $('.filterRegion').append($('<br>'));
            $('.filterProjecttype').append($('<input>')
                                    .attr({ type: 'checkbox' })
                                    .attr({ id: 'projecttype-all' })
                                    .attr('checked','checked')
                                    .addClass('all'));
            $('.filterProjecttype').append('Alles');
            $('.filterProjecttype').append($('<br>'));
            $('.filterBuildingstyle').append($('<input>')
                                    .attr({ type: 'checkbox' })
                                    .attr({ id: 'buildingstyle-all' })
                                    .attr('checked', 'checked')
                                    .addClass('all'));
            $('.filterBuildingstyle').append('Alles');
            $('.filterBuildingstyle').append($('<br>'));
            $('.filterProducttype').append($('<input>')
                                    .attr({ type: 'checkbox' })
                                    .attr({ id: 'producttype-all' })
                                    .attr('checked', 'checked')
                                    .addClass('all'));
            $('.filterProducttype').append('Alles');
            $('.filterProducttype').append($('<br>'));
            $('.filterColor').append($('<input>')
                                    .attr({ type: 'checkbox' })
                                    .attr({ id: 'color-all' })
                                    .attr('checked', 'checked')
                                    .addClass('all'));
            $('.filterColor').append('Alles');
            $('.filterColor').append($('<br>'));

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
