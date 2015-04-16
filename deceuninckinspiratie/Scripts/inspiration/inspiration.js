var projectsArray = [];
regionsArray = [],
projectTypesArray = [],
buildingStylesArray = [],
productTypesArray = [],
colorsArray = [],
colorTypesArray = [],
productTitlesArray = [],
regionsArrayFiltered = [],
projectTypesArrayFiltered = [],
buildingStylesArrayFiltered = [],
productTypesArrayFiltered = [],
colorsArrayFiltered = [],
colorTypesArrayFiltered = [],
productTitlesArrayFiltered = [],
regionsArray_nl = [],
projectTypesArray_nl = [],
buildingStylesArray_nl = [],
productTypesArray_nl = [],
colorsArray_nl = [],
colorTypesArray_nl = [],
productTitlesArray_nl = [],
regionsArray_fr = [],
projectTypesArray_fr = [],
buildingStylesArray_fr = [],
productTypesArray_fr = [],
colorsArray_fr = [],
colorTypesArray_fr = [],
productTitlesArray_fr = [];

$(function () {
    $.ajax({
        type: "GET",
        url: "/Content/inspiration/inspiration.xml",
        dataType: "xml",
        success: function (xml) {
            var countProjects = 1;
            var pathname = window.location.pathname.split('/');
            var lang = pathname[1];

            $(xml).find('project').each(function () {
                createArrays($(this), countProjects, lang);

                showProject(countProjects - 1, lang);

                countProjects++;

            });

            noDuplicateArrays();

            showFilters(lang);

            localStorage.setItem('projects', projectsArray)

            $('.option-set ul').hide();

            $('.filter-header').click(function () {
                $(this).find('i').toggleClass('open');
                $(this).parent().find('ul').slideToggle();
            });

            $('.blocklink').click(function () {
                var href;
                if (lang === 'nl') {
                    href = '/' + lang + '/inspiratie/detail.html?id=' + $(this).attr('data-projectid');
                }
                $.fancybox({
                    href: href,
                    type: 'iframe',
                    width: '80%',
                    height: 'auto'
                });
            });
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

    setTimeout(function () { $('.filtersSidebar-trigger').addClass('animated tada') }, 100);
});

function createArrays(project, countProjects, lang) {
    window['project' + countProjects] = {};

    regionsArray.push(project.find('region').text());
    projectTypesArray.push(project.find('projecttype').text());
    buildingStylesArray.push(project.find('buildingstyle').text());
    productTypesArray.push(project.find('producttype').text());
    colorsArray.push(project.find('color').text());
    colorTypesArray.push(project.find('colortype').text());
    productTitlesArray.push(project.find('producttitle').text());

    window['regionsArray_' + lang].push(project.find('region_' + lang).text());
    window['projectTypesArray_' + lang].push(project.find('projecttype_' + lang).text());
    window['buildingStylesArray_' + lang].push(project.find('buildingstyle_' + lang).text());
    window['productTypesArray_' + lang].push(project.find('producttype_' + lang).text());
    window['colorsArray_' + lang].push(project.find('color_' + lang).text());
    window['colorTypesArray_' + lang].push(project.find('colortype_' + lang).text());
    window['productTitlesArray_' + lang].push(project.find('producttitle_' + lang).text());

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
    colorTypesArrayFiltered = noDuplicatesArray(colorTypesArray);
    productTitlesArrayFiltered = noDuplicatesArray(productTitlesArray);
    regionsArray_nl = noDuplicatesArray(regionsArray_nl);
    projectTypesArray_nl = noDuplicatesArray(projectTypesArray_nl);
    buildingStylesArray_nl = noDuplicatesArray(buildingStylesArray_nl);
    productTypesArray_nl = noDuplicatesArray(productTypesArray_nl);
    colorsArray_nl = noDuplicatesArray(colorsArray_nl);
    colorTypesArray_nl = noDuplicatesArray(colorTypesArray_nl);
    productTitlesArray_nl = noDuplicatesArray(productTitlesArray_nl);
    regionsArray_fr = noDuplicatesArray(regionsArray_fr);
    projectTypesArray_fr = noDuplicatesArray(projectTypesArray_fr);
    buildingStylesArray_fr = noDuplicatesArray(buildingStylesArray_fr);
    productTypesArray_fr = noDuplicatesArray(productTypesArray_fr);
    colorsArray_fr = noDuplicatesArray(colorsArray_fr);
    colorTypessArray_fr = noDuplicatesArray(colorTypesArray_fr);
    productTitlesArray_fr = noDuplicatesArray(productTitlesArray_fr);
}

function noDuplicatesArray(sourceArray) {
    var result = [];
    $.each(sourceArray, function (i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    result = result.filter(function (v) { return v !== '' });
    return result;
}

function showProject(count, lang) {
    var imgPathBase = "/Content/inspiration/Images/Projects/";
    var detailPathBase = "/" + lang + "/inspiration/detail.aspx?id=";
    var projectNumber = count + 1;
    switch (lang) {
        case 'nl':
            $('.project-overview').append($('<li></li>')
                            .addClass('blocklink')
                            .addClass(regionsArray[count])
                            .addClass(projectTypesArray[count])
                            .addClass(buildingStylesArray[count])
                            .addClass(productTypesArray[count])
                            .addClass(colorsArray[count])
                            .addClass(productTitlesArray[count])
                            .attr({ id: 'project-' + projectNumber })
                            .attr('data-projectid', projectNumber)
                            .append($('<img />')
                                .attr({ src: imgPathBase + projectsArray[count].coverImg }))
                            .append($('<div></div>')
                                .addClass('info')
                                .append($('<div></div>')
                                    .addClass('info-wrap')
                                    .append($('<div></div>')
                                        .addClass('v-info-wrap')
                                        .append($('<h2></h2>')
                                            .append(projectsArray[count].buildingstyle + '<br>' + projectsArray[count].location))
                                        .append($('<div></div>')
                                            .addClass('info-text')
                                        )
                                    )
                                )
                            )
            );

            switch (productTypesArray[count]) {
                case 'windowprofile':
                    switch (colorTypesArray[count]) {
                        case 'decoroc':
                            $('.project-overview #project-' + projectNumber + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-linetype')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/windowicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)))
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/sprayicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].colortype)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Bekijk project'));
                            break;

                        case 'foil':
                            $('.project-overview #project-' + projectNumber + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-linetype')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/windowicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)))
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/foilicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].colortype)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Bekijk project'));
                            break;

                        case 'mass':
                            $('.project-overview #project-' + projectNumber + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-linetype')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/windowicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)))
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/massicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].colortype)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Bekijk project'));
                            break;

                    }
                    break;

                case 'roofline':
                    switch (colorTypesArray[count]) {
                        case 'decoroc':
                            $('.project-overview #project-' + projectNumber + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-linetype')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/rooficon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)))
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/sprayicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].colortype)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Bekijk project'));
                            break;

                        case 'foil':
                            $('.project-overview #project-' + projectNumber + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-linetype')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/rooficon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)))
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/foilicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].colortype)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Bekijk project'));
                            break;

                        case 'mass':
                            $('.project-overview #project-' + projectNumber + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-linetype')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/rooficon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)))
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/massicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].colortype)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Bekijk project'));
                            break;

                        case 'twinson':
                            $('.project-overview #project-' + projectNumber + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/rooficon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Bekijk project'));
                            break;
                    }
                    break;

                case 'cladding':
                    switch (colorTypesArray[count]) {
                        case 'decoroc':
                            $('.project-overview #project-' + projectNumber + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-linetype')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/claddingicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)))
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/sprayicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].colortype)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Bekijk project'));
                            break;

                        case 'foil':
                            $('.project-overview #project-' + projectNumber + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-linetype')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/claddingicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)))
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/foilicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].colortype)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Bekijk project'));
                            break;

                        case 'mass':
                            $('.project-overview #project-' + projectNumber + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-linetype')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/claddingicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)))
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/massicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].colortype)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Bekijk project'));
                            break;

                        case 'twinson':
                            $('.project-overview #project-' + projectNumber + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/claddingicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Bekijk project'));
                            break;
                    }
                    break;

                case 'fence':
                    $('.project-overview #project-' + projectNumber + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/fenceicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Bekijk project'));
                    break;

                case 'terrace':
                    $('.project-overview #project-' + projectNumber + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/terraceicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Bekijk project'));
                    break;

                case 'interior':
                    $('.project-overview #project-' + projectNumber + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-linetype')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/wallicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)))
                                                    .append($('<a></a>')
                                                        .append('Bekijk project'));
                    break;

            }

            break;

        case 'fr':
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
                                            .append(projectsArray[count].buildingstyle + '<br>' + projectsArray[count].location))
                                        .append($('<div></div>')
                                            .addClass('info-text')
                                        )
                                    )
                                )
                            )
            );

            switch (productTypesArray[count]) {
                case 'windowprofile':
                    switch (colorTypesArray[count]) {
                        case 'decoroc':
                            $('.project-overview #project-' + count + 1 + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-linetype')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/windowicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)))
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/sprayicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].colortype)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Voir projet'));
                            break;

                        case 'foil':
                            $('.project-overview #project-' + count + 1 + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-linetype')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/windowicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)))
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/foilicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].colortype)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Voir projet'));
                            break;

                        case 'mass':
                            $('.project-overview #project-' + count + 1 + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-linetype')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/windowicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)))
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/massicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].colortype)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Voir projet'));
                            break;

                    }
                    break;

                case 'roofline':
                    switch (colorTypesArray[count]) {
                        case 'decoroc':
                            $('.project-overview #project-' + count + 1 + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-linetype')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/rooficon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)))
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/sprayicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].colortype)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Voir projet'));
                            break;

                        case 'foil':
                            $('.project-overview #project-' + count + 1 + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-linetype')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/rooficon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)))
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/foilicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].colortype)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Voir projet'));
                            break;

                        case 'mass':
                            $('.project-overview #project-' + count + 1 + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-linetype')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/rooficon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)))
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/massicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].colortype)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Voir projet'));
                            break;

                        case 'twinson':
                            $('.project-overview #project-' + count + 1 + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/rooficon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Voir projet'));
                            break;
                    }
                    break;

                case 'cladding':
                    switch (colorTypesArray[count]) {
                        case 'decoroc':
                            $('.project-overview #project-' + count + 1 + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-linetype')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/claddingicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)))
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/sprayicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].colortype)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Voir projet'));
                            break;

                        case 'foil':
                            $('.project-overview #project-' + count + 1 + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-linetype')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/claddingicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)))
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/foilicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].colortype)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Voir projet'));
                            break;

                        case 'mass':
                            $('.project-overview #project-' + count + 1 + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-linetype')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/claddingicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)))
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/massicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].colortype)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Voir projet'));
                            break;

                        case 'twinson':
                            $('.project-overview #project-' + count + 1 + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/claddingicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Voir projet'));
                            break;
                    }
                    break;

                case 'fence':
                    $('.project-overview #project-' + count + 1 + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/fenceicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Voir projet'));
                    break;

                case 'terrace':
                    $('.project-overview #project-' + count + 1 + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-line')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/terraceicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)
                                                        .append($('<br>'))
                                                        .append(projectsArray[count].color)))
                                                    .append($('<a></a>')
                                                        .append('Voir projet'));
                    break;

                case 'interior':
                    $('.project-overview #project-' + count + 1 + ' .info-text')
                                                .append($('<div></div>')
                                                    .addClass('info-linetype')
                                                    .append($('<img></img>')
                                                        .attr({ src: '/Content/inspiration/Images/Icons/wallicon.png' }))
                                                    .append($('<p></p>')
                                                        .append(projectsArray[count].series)))
                                                    .append($('<a></a>')
                                                        .append('Voir projet'));
                    break;

            }

            break;
    }
}

function showFilters(lang) {

    switch (lang) {
        case "nl":
            $('.filtersSidebar-content').append($('<ul></ul>')
                .append($('<li></li>')
                    .addClass('filterRegion')
                    .addClass('option-set')
                    .attr('data-group', 'region')
                    .append($('<div></div>')
                        .addClass('filter-header')
                        .append('<h4>Provincie</h4><i class="fa fa-caret-down"></i>'))
                    .append($('<ul></ul>')))
                .append($('<li></li>')
                    .addClass('filterProjecttype')
                    .addClass('option-set')
                    .attr('data-group', 'projecttype')
                    .append($('<div></div>')
                        .addClass('filter-header')
                        .append('<h4>Projecttype</h4><i class="fa fa-caret-down"></i>'))
                    .append($('<ul></ul>')))
                .append($('<li></li>')
                    .addClass('filterBuildingstyle')
                    .addClass('option-set')
                    .attr('data-group', 'buildingstyle')
                    .append($('<div></div>')
                        .addClass('filter-header')
                        .append('<h4>Bouwstijl</h4><i class="fa fa-caret-down"></i>'))
                    .append($('<ul></ul>')))
                .append($('<li></li>')
                    .addClass('filterProducttitle')
                    .addClass('option-set')
                    .attr('data-group', 'producttitle')
                    .append($('<div></div>')
                        .addClass('filter-header')
                        .append('<h4>Toepassingen</h4><i class="fa fa-caret-down"></i>'))
                    .append($('<ul></ul>')))
                .append($('<li></li>')
                    .addClass('filterProducttype')
                    .addClass('option-set')
                    .attr('data-group', 'producttype')
                    .append($('<div></div>')
                        .addClass('filter-header')
                        .append('<h4>Producttype</h4><i class="fa fa-caret-down"></i>'))
                    .append($('<ul></ul>')))
                .append($('<li></li>')
                    .addClass('filterColortype')
                    .addClass('option-set')
                    .attr('data-group', 'color')
                    .append($('<div></div>')
                        .addClass('filter-header')
                        .append('<h4>Kleurtype</h4><i class="fa fa-caret-down"></i>'))
                    .append($('<ul></ul>')))
                .append($('<li></li>')
                    .addClass('filterColor')
                    .addClass('option-set')
                    .attr('data-group', 'color')
                    .append($('<div></div>')
                        .addClass('filter-header')
                        .append('<h4>Kleur</h4><i class="fa fa-caret-down"></i>'))
                    .append($('<ul></ul>')))
            );

            $('.filterRegion ul').append($('<li></li>')
                                .append($('<input>')
                                    .attr({ type: 'checkbox' })
                                    .attr({ id: 'region-all' })
                                    .attr('checked', 'checked')
                                    .addClass('all'))
                                .append('Alles'));
            $('.filterProjecttype ul').append($('<li></li>')
                                .append($('<input>')
                                    .attr({ type: 'checkbox' })
                                    .attr({ id: 'projecttype-all' })
                                    .attr('checked', 'checked')
                                    .addClass('all'))
                                .append('Alles'));
            $('.filterBuildingstyle ul').append($('<li></li>')
                                .append($('<input>')
                                    .attr({ type: 'checkbox' })
                                    .attr({ id: 'buildingstyle-all' })
                                    .attr('checked', 'checked')
                                    .addClass('all'))
                                .append('Alles'));
            $('.filterProducttitle ul').append($('<li></li>')
                                .append($('<input>')
                                    .attr({ type: 'checkbox' })
                                    .attr({ id: 'producttitle-all' })
                                    .attr('checked', 'checked')
                                    .addClass('all'))
                                .append('Alles'));
            $('.filterProducttype ul').append($('<li></li>')
                                .append($('<input>')
                                    .attr({ type: 'checkbox' })
                                    .attr({ id: 'producttype-all' })
                                    .attr('checked', 'checked')
                                    .addClass('all'))
                                .append('Alles'));
            $('.filterColortype ul').append($('<li></li>')
                                .append($('<input>')
                                    .attr({ type: 'checkbox' })
                                    .attr({ id: 'colortype-all' })
                                    .attr('checked', 'checked')
                                    .addClass('all'))
                                .append('Alles'));
            $('.filterColor ul').append($('<li></li>')
                                .append($('<input>')
                                    .attr({ type: 'checkbox' })
                                    .attr({ id: 'color-all' })
                                    .attr('checked', 'checked')
                                    .addClass('all'))
                                .append('Alles'));

            $.each(regionsArrayFiltered, function (key, value) {
                var region = regionsArray_nl[key];
                $('.filterRegion ul').append($('<li></li>')
                                    .append($('<input>')
                                        .attr({ type: 'checkbox' })
                                        .attr({ id: 'selection_' + value })
                                        .attr({ value: value }))
                                    .append(region));
            });

            $.each(projectTypesArrayFiltered, function (key, value) {
                var projecttype = projectTypesArray_nl[key];
                $('.filterProjecttype ul').append($('<li></li>')
                                    .append($('<input>')
                                        .attr({ type: 'checkbox' })
                                        .attr({ id: 'selection_' + value })
                                        .attr({ value: value }))
                                    .append(projecttype));
            });

            $.each(buildingStylesArrayFiltered, function (key, value) {
                var buildingstyle = buildingStylesArray_nl[key];
                $('.filterBuildingstyle ul').append($('<li></li>')
                                    .append($('<input>')
                                        .attr({ type: 'checkbox' })
                                        .attr({ id: 'selection_' + value })
                                        .attr({ value: value }))
                                    .append(buildingstyle));
            });

            $.each(productTitlesArrayFiltered, function (key, value) {
                var producttitle = productTitlesArray_nl[key];
                $('.filterProducttitle ul').append($('<li></li>')
                                    .append($('<input>')
                                        .attr({ type: 'checkbox' })
                                        .attr({ id: 'selection_' + value })
                                        .attr({ value: value }))
                                    .append(producttitle));
            });

            $.each(productTypesArrayFiltered, function (key, value) {
                var producttype = productTypesArray_nl[key];
                $('.filterProducttype ul').append($('<li></li>')
                                    .append($('<input>')
                                        .attr({ type: 'checkbox' })
                                        .attr({ id: 'selection_' + value })
                                        .attr({ value: value }))
                                    .append(producttype));
            });

            $.each(colorTypesArrayFiltered, function (key, value) {
                var colortype = colorTypesArray_nl[key];
                $('.filterColortype ul').append($('<li></li>')
                                    .append($('<input>')
                                        .attr({ type: 'checkbox' })
                                        .attr({ id: 'selection_' + value })
                                        .attr({ value: value }))
                                    .append(colortype));
            });

            $.each(colorsArrayFiltered, function (key, value) {
                var color = colorsArray_nl[key];
                $('.filterColor ul').append($('<li></li>')
                                    .append($('<input>')
                                        .attr({ type: 'checkbox' })
                                        .attr({ id: 'selection_' + value })
                                        .attr({ value: value }))
                                    .append(color));
            });
            break;

        case 'fr':
            $('.filtersSidebar-content').append($('<ul></ul>')
                .append($('<li></li>')
                    .addClass('filterRegion')
                    .addClass('option-set')
                    .attr('data-group', 'region')
                    .append($('<div></div>')
                        .addClass('filter-header')
                        .append('<h4>Province</h4><i class="fa fa-caret-down"></i>'))
                    .append($('<ul></ul>')))
                .append($('<li></li>')
                    .addClass('filterProjecttype')
                    .addClass('option-set')
                    .attr('data-group', 'projecttype')
                    .append($('<div></div>')
                        .addClass('filter-header')
                        .append('<h4>Type de projet</h4><i class="fa fa-caret-down"></i>'))
                    .append($('<ul></ul>')))
                .append($('<li></li>')
                    .addClass('filterBuildingstyle')
                    .addClass('option-set')
                    .attr('data-group', 'buildingstyle')
                    .append($('<div></div>')
                        .addClass('filter-header')
                        .append('<h4>Style de construction</h4><i class="fa fa-caret-down"></i>'))
                    .append($('<ul></ul>')))
                .append($('<li></li>')
                    .addClass('filterProducttitle')
                    .addClass('option-set')
                    .attr('data-group', 'producttitle')
                    .append($('<div></div>')
                        .addClass('filter-header')
                        .append('<h4>Applications</h4><i class="fa fa-caret-down"></i>'))
                    .append($('<ul></ul>')))
                .append($('<li></li>')
                    .addClass('filterProducttype')
                    .addClass('option-set')
                    .attr('data-group', 'producttype')
                    .append($('<div></div>')
                        .addClass('filter-header')
                        .append('<h4>Type de produit</h4><i class="fa fa-caret-down"></i>'))
                    .append($('<ul></ul>')))
                .append($('<li></li>')
                    .addClass('filterColortype')
                    .addClass('option-set')
                    .attr('data-group', 'color')
                    .append($('<div></div>')
                        .addClass('filter-header')
                        .append('<h4>Type de couleur</h4><i class="fa fa-caret-down"></i>'))
                    .append($('<ul></ul>')))
                .append($('<li></li>')
                    .addClass('filterColor')
                    .addClass('option-set')
                    .attr('data-group', 'color')
                    .append($('<div></div>')
                        .addClass('filter-header')
                        .append('<h4>Couleur</h4><i class="fa fa-caret-down"></i>'))
                    .append($('<ul></ul>')))
            );

            $('.filterRegion ul').append($('<li></li>')
                                .append($('<input>')
                                    .attr({ type: 'checkbox' })
                                    .attr({ id: 'region-all' })
                                    .attr('checked', 'checked')
                                    .addClass('all'))
                                .append('Tout'));
            $('.filterProjecttype ul').append($('<li></li>')
                                .append($('<input>')
                                    .attr({ type: 'checkbox' })
                                    .attr({ id: 'region-all' })
                                    .attr('checked', 'checked')
                                    .addClass('all'))
                                .append('Tout'));
            $('.filterBuildingstyle ul').append($('<li></li>')
                                .append($('<input>')
                                    .attr({ type: 'checkbox' })
                                    .attr({ id: 'region-all' })
                                    .attr('checked', 'checked')
                                    .addClass('all'))
                                .append('Tout'));
            $('.filterProducttitle ul').append($('<li></li>')
                                .append($('<input>')
                                    .attr({ type: 'checkbox' })
                                    .attr({ id: 'region-all' })
                                    .attr('checked', 'checked')
                                    .addClass('all'))
                                .append('Tout'));
            $('.filterProducttype ul').append($('<li></li>')
                                .append($('<input>')
                                    .attr({ type: 'checkbox' })
                                    .attr({ id: 'region-all' })
                                    .attr('checked', 'checked')
                                    .addClass('all'))
                                .append('Tout'));
            $('.filterColortype ul').append($('<li></li>')
                                .append($('<input>')
                                    .attr({ type: 'checkbox' })
                                    .attr({ id: 'region-all' })
                                    .attr('checked', 'checked')
                                    .addClass('all'))
                                .append('Tout'));
            $('.filterColor ul').append($('<li></li>')
                                .append($('<input>')
                                    .attr({ type: 'checkbox' })
                                    .attr({ id: 'region-all' })
                                    .attr('checked', 'checked')
                                    .addClass('all'))
                                .append('Tout'));

            $.each(regionsArrayFiltered, function (key, value) {
                var region = regionsArray_fr[key];
                $('.filterRegion ul').append($('<li></li>')
                                    .append($('<input>')
                                        .attr({ type: 'checkbox' })
                                        .attr({ id: 'selection_' + value })
                                        .attr({ value: value }))
                                    .append(region));
            });

            $.each(projectTypesArrayFiltered, function (key, value) {
                var projecttype = projectTypesArray_fr[key];
                $('.filterProjecttype ul').append($('<li></li>')
                                    .append($('<input>')
                                        .attr({ type: 'checkbox' })
                                        .attr({ id: 'selection_' + value })
                                        .attr({ value: value }))
                                    .append(projecttype));
            });

            $.each(buildingStylesArrayFiltered, function (key, value) {
                var buildingstyle = buildingStylesArray_fr[key];
                $('.filterBuildingstyle ul').append($('<li></li>')
                                    .append($('<input>')
                                        .attr({ type: 'checkbox' })
                                        .attr({ id: 'selection_' + value })
                                        .attr({ value: value }))
                                    .append(buildingstyle));
            });

            $.each(productTitlesArrayFiltered, function (key, value) {
                var producttitle = productTitlesArray_fr[key];
                $('.filterProducttitle ul').append($('<li></li>')
                                    .append($('<input>')
                                        .attr({ type: 'checkbox' })
                                        .attr({ id: 'selection_' + value })
                                        .attr({ value: value }))
                                    .append(producttitle));
            });

            $.each(productTypesArrayFiltered, function (key, value) {
                var producttype = productTypesArray_fr[key];
                $('.filterProducttype ul').append($('<li></li>')
                                    .append($('<input>')
                                        .attr({ type: 'checkbox' })
                                        .attr({ id: 'selection_' + value })
                                        .attr({ value: value }))
                                    .append(producttype));
            });

            $.each(colorTypesArrayFiltered, function (key, value) {
                var colortype = colorTypesArray_fr[key];
                $('.filterColortype ul').append($('<li></li>')
                                    .append($('<input>')
                                        .attr({ type: 'checkbox' })
                                        .attr({ id: 'selection_' + value })
                                        .attr({ value: value }))
                                    .append(colortype));
            });

            $.each(colorsArrayFiltered, function (key, value) {
                var color = colorsArray_fr[key];
                $('.filterColor ul').append($('<li></li>')
                                    .append($('<input>')
                                        .attr({ type: 'checkbox' })
                                        .attr({ id: 'selection_' + value })
                                        .attr({ value: value }))
                                    .append(color));
            });
            break;

    }
}