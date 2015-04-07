var projectsArray = [],
    regionsArray = [],
    projectTypesArray = [],
    buildingStylesArray = [],
    productTypesArray = [],
    colorsArray = [],
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
                window['project' + countProjects] = {};

                regionsArray.push($(this).find('region').text());
                projectTypesArray.push($(this).find('projecttype').text());
                buildingStylesArray.push($(this).find('buildingstyle').text());
                productTypesArray.push($(this).find('producttype').text());
                colorsArray.push($(this).find('color').text());

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
        }
    });
});

function noDuplicatesArray(sourceArray) {
    sourceArray = sourceArray.filter(Boolean);
    sourceArray = $.unique(sourceArray);

    return sourceArray;
}

function showProject(count, lang) {
    var imgPathBase = "/Content/inspiratiemodule/Images/Projects/";
    var detailPathBase = "/"+lang+"/inspiratiemodule/detail.aspx?id=";
    switch(lang){
        case 'nl':

    //TO DO: Switch case toevoegen om te controleren op de 4 productcategorieën
            $('#projects').append($('<div></div>')
                                .addClass('grid-project')
                                .addClass(regionsArray[count])
                                .addClass(projectTypesArray[count])
                                .addClass(buildingStylesArray[count])
                                .addClass(productTypesArray[count])
                                .addClass(colorsArray[count])
                                .append($('<a></a>')
                                    .attr({ href: detailPathBase + projectsArray[count].id })
                                    .attr({ target: '_blank' })
                                    .append($('<img />')
                                        .attr({ src: imgPathBase + projectsArray[count].img1 })
                                        .addClass('grid-project-img')
                                    )
                                    .append($('<div></div>')
                                        .addClass('grid-project-info')s
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

function showFilters(lang) {
    var regionsArrayCount = regionsArrayFiltered.length;
    var projectTypesArrayCount = projectTypesArrayFiltered.length;
    var buildingStylesArrayCount = buildingStylesArrayFiltered.length;
    var productTypesArrayCount = productTypesArrayFiltered.length;
    var colorsArrayCount = colorsArray.length;

    switch (lang) {
        case "nl":
            $('#filters').append($('<table></table')
                 .append($('<tr></tr>')
                     .attr({ id: 'filterlabels' })
                     .append($('<td></td>')
                         .attr({id:'regionlabel'})
                         .append('Provincie'))
                     .append($('<td></td>')
                         .attr({id:'projecttypelabel'})
                         .append('Projecttype'))
                     .append($('<td></td>')
                         .attr({id:'buildingstylelabel'})
                         .append('Bouwstijl'))
                     .append($('<td></td>')
                         .attr({id:'producttypelabel'})
                         .append('Producttype'))
                     .append($('<td></td>')
                         .attr({id:'colorlabel'})
                         .append('Kleur'))
                     )
                 .append($('<tr></tr>')
                     .append($('<td></td>')
                         .append($('<select></select>')
                             .attr({ id: 'regions-filter' })
                         ))
                     .append($('<td></td>')
                         .append($('<select></select>')
                             .attr({ id: 'projecttypes-filter' })
                         ))
                     .append($('<td></td>')
                         .append($('<select></select>')
                             .attr({ id: 'buildingstyles-filter' })
                         ))
                     .append($('<td></td>')
                         .append($('<select></select>')
                             .attr({ id: 'producttypes-filter' })
                         ))
                     .append($('<td></td>')
                         .append($('<select></select>')
                             .attr({ id: 'colors-filter' })
                         ))
                     )
                );
            
            //TO DO: Geen duplicate options in select
            $('#regions-filter').append($('<option></option>')
                                    .attr({value:'*'})
                                    .append('Toon alles')
                                );
            $.each(regionsArrayFiltered, function (key, value) {
                $('#regions-filter').append($('<option></option>')
                                        .attr({ value: '.'+value })
                                        .append(regionsArray_nl[key])
                                    );
            });

            $('#projecttypes-filter').append($('<option></option<')
                                    .attr({ value: '*' })
                                    .append('Toon alles')
                                );
            $.each(projectTypesArrayFiltered, function (key, value) {
                $('#projecttypes-filter').append($('<option></option>')
                                        .attr({ value: '.'+value })
                                        .append(projectTypesArray_nl[key])
                                    );
            });

            $('#buildingstyles-filter').append($('<option></option<')
                                    .attr({ value: '*' })
                                    .append('Toon alles')
                                );
            $.each(buildingStylesArrayFiltered, function (key, value) {
                $('#buildingstyles-filter').append($('<option></option>')
                                        .attr({ value: '.'+value })
                                        .append('.' + buildingStylesArray_nl[key])
                                    );
            });

            $('#producttypes-filter').append($('<option></option<')
                                    .attr({ value: '*' })
                                    .append('Toon alles')
                                );
            $.each(productTypesArrayFiltered, function (key, value) {
                $('#producttypes-filter').append($('<option></option>')
                                        .attr({ value: '.'+value })
                                        .append(productTypesArray_nl[key])
                                    );
            });

            $('#colors-filter').append($('<option></option<')
                                    .attr({ value: '*' })
                                    .append('Toon alles')
                                );
            $.each(colorsArrayFiltered, function (key, value) {
                $('#colors-filter').append($('<option></option>')
                                        .attr({ value: '.'+value })
                                        .append(colorsArray_nl[key])
                                    );
            });
            break;
    }
   
}

