

$(function () {
    $.ajax({
        type: "GET",
        url: "/Content/inspiratiemodule/Inspiration_NL.xml",
        dataType: "xml",
        success: function (xml) {
            var count = 0;
            $(xml).find('project').each(function () {
                var id = $(this).attr("id");
                var producttitle = $(this).find('producttitle').text();
                var location = $(this).find('location').text();
                var country = $(this).find('country').text();
                var countrydata = renameCountry($(this).find('country').text());
                var googlemaps = $(this).find('googlemaps').text();
                var projecttype = $(this).find('projecttype').text();
                var projecttypedata = renameProjecttype($(this).find('projecttype').text());
                var buildingstyle = $(this).find('buildingstyle').text();
                var producttitle = $(this).find('producttitle').text();
                var producttype = $(this).find('producttype').text();
                var series = $(this).find('series').text();
                var colourtype = $(this).find('colourtype').text();
                var colour = $(this).find('colour').text();
                var customer = $(this).find('customer').text();
                var websitecustomer = $(this).find('websitecustomer').text();
                var quote = $(this).find('quote').text();
                var img1 = $(this).find('img1').text();
                var img2 = $(this).find('img2').text();
                var img3 = $(this).find('img3').text();
                var img4 = $(this).find('img4').text();
                var img5 = $(this).find('img5').text();
                var img6 = $(this).find('img6').text();
                var info = $(this).find('info').text();

                switch (producttitle) {
                    case "Ramen en Deuren":
                        if (count < 2) {
                            $('#projects').append('<div data-country="' + countrydata + '" data-projecttype="' + projecttypedata + '" data-buildingstyle="' + buildingstyle +
                                '" data-producttitle="' + producttitle + '" data-producttype="' + producttype + '"><article><a href="detail.aspx?id=' + id + '" class="ramenendeuren"><figure><img height="380px" src="/Content/inspiratiemodule/Images/Projects/' + img1 +
                                '" class="image" alt="' + projecttype + ' ' + location + '" /><figcaption><span><img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt="" />bekijk project</span></figcaption></figure><div class="body txt"><header><h1 class="ramenendeuren">Project</h1><h2>'
                                + projecttype + '/' + location + '</h2><h1 class="ramenendeuren">Bouwstijl</h1><h2>' + buildingstyle + '</h2><h1 class="ramenendeuren">' + producttype + '</h1><h2>' + colourtype + '<br />' + colour + '</h2></header></div></a></article></div>');
                            count++;
                        }
                        else if (count >= 2){
                            $('#projects').append('<div data-country="' + countrydata + '" data-projecttype="' + projecttypedata + '" data-buildingstyle="' + buildingstyle +
                                '" data-producttitle="' + producttitle + '" data-producttype="' + producttype + '"><article><a href="detail.aspx?id=' + id + '" class="ramenendeuren"><div class="body txt"><header><h1 class="ramenendeuren">Project</h1><h2>'
                                + projecttype + '/' + location + '</h2><h1 class="ramenendeuren">Bouwstijl</h1><h2>' + buildingstyle + '</h2><h1 class="ramenendeuren">' + producttype + '</h1><h2>' + colourtype + '<br />' + colour + '</h2></header></div><figure><img height="380px" src="/Content/inspiratiemodule/Images/Projects/' + img1 +
                                '" class="image" alt="' + projecttype + ' ' + location + '" /><figcaption><span><img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt="" />bekijk project</span></figcaption></figure></a></article></div>');
                            count++;
                            if (count > 3) {
                                count = 0;
                            }
                        }
                        break;

                    case "Dak en Gevel":
                        if (count < 2) {
                            $('#projects').append('<div data-country="' + countrydata + '" data-projecttype="' + projecttypedata + '" data-buildingstyle="' + buildingstyle +
                            '" data-producttitle="' + producttitle + '" data-producttype="' + producttype + '"><article><a href="detail.aspx?id=' + id + '" class="dakengevel"><figure><img height="380px" src="/Content/inspiratiemodule/Images/Projects/' + img1 +
                            '" class="image" alt="' + projecttype + ' ' + location + '" /><figcaption><span><img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt="" />bekijk project</span></figcaption></figure><div class="body txt"><header><h1 class="dakengevel">Project</h1><h2>'
                            + projecttype + '/' + location + '</h2><h1 class="dakengevel">Bouwstijl</h1><h2>' + buildingstyle + '</h2><h1 class="dakengevel">' + producttype + '</h1><h2>' + colourtype + '<br />' + colour + '</h2></header></div></a></article></div>');
                            count++;
                        }
                        else if (count >= 2) {
                            $('#projects').append('<div data-country="' + countrydata + '" data-projecttype="' + projecttypedata + '" data-buildingstyle="' + buildingstyle +
                            '" data-producttitle="' + producttitle + '" data-producttype="' + producttype + '"><article><a href="detail.aspx?id=' + id + '" class="dakengevel"><div class="body txt"><header><h1>Project</h1><h2>'
                            + projecttype + '/' + location + '</h2><h1>Bouwstijl</h1><h2>' + buildingstyle + '</h2><h1>' + producttype + '</h1><h2>' + colourtype + '<br />' + colour + '</h2></header></div><figure><img height="380px" src="/Content/inspiratiemodule/Images/Projects/' + img1 +
                            '" class="image" alt="' + projecttype + ' ' + location + '" /><figcaption><span><img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt="" />bekijk project</span></figcaption></figure></a></article></div>');
                            count++;
                            if (count > 3) {
                                count = 0;
                            }
                        }
                            break;


                    case "Tuintoepassingen":
                        if (count < 2) {
                            $('#projects').append('<div data-country="' + countrydata + '" data-projecttype="' + projecttypedata +
                            '" data-producttitle="' + producttitle + '" data-producttype="' + producttype + '"><article><a href="detail.aspx?id=' + id + '" class="tuintoepassingen"><figure><img height="380px" src="/Content/inspiratiemodule/Images/Projects/' + img1 +
                           '" class="image" alt="' + projecttype + ' ' + location + '" /><figcaption><span><img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt="" />bekijk project</span></figcaption></figure><div class="body txt"><header><h1>Project</h1><h2>'
                           + location + '</h2><h1>' + producttype + '</h1><h2>' + series + '<br />' + colour + '</h2></header></div></a></article></div>');
                            count++;
                        }
                        else if (count >= 2) {
                            $('#projects').append('<div data-country="' + countrydata + '" data-projecttype="' + projecttypedata +
                            '" data-producttitle="' + producttitle + '" data-producttype="' + producttype + '"><article><a href="detail.aspx?id' + id + '" class="tuintoepassingen"><div class="body txt"><header><h1>Project</h1><h2>'
                            + location + '</h2><h1>' + producttype + '</h1><h2>' + series + '<br />' + colour + '</h2></header></div><figure><img height="380px" src="/Content/inspiratiemodule/Images/Projects/' + img1 +
                            '" class="image" alt="' + projecttype + ' ' + location + '" /><figcaption><span><img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt="" />bekijk project</span></figcaption></figure></a></article></div>');
                            count++;
                            if (count > 3) {
                                count = 0;
                            }
                        }
                            break;

                    case "Interieurtoepassingen":
                        if (count < 2) {
                            $('#projects').append('<div data-producttitle="' + producttitle + '" data-producttype="' + producttype + '"><article><a href="detail.aspx?id=' + id + '" class="interieurtoepassingen"><figure><img height="380px" src="/Content/inspiratiemodule/Images/Projects/' + img1 +
                           '" class="image" alt="' + producttype + '" /><figcaption><span><img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt="" />bekijk project</span></figcaption></figure><div class="body txt"><header><h1>' + producttype + '</h1><h2>'
                           + info + '<br />' + colour + '</h2></header></div></a></article></div>');
                            count++;
                            if (count > 3) {
                                count = 0;
                            }
                        }
                        else if (count >= 2) {
                            $('#projects').append('<div data-producttitle="' + producttitle + '" data-producttype="' + producttype + '"><article><a href="detail.aspx?id=' + id + '" class="interieurtoepassingen"><div class="body txt"><header><h1>' + producttype + '</h1><h2>'
                           + info + '<br />' + colour + '</h2></header></div><figure><img height="380px" src="/Content/inspiratiemodule/Images/Projects/' + img1 +
                           '" class="image" alt="' + producttype + '" /><figcaption><span><img src="/Content/PP/Images/product-plus.svg" width="14" height="13" alt="" />bekijk project</span></figcaption></figure></a></article></div>');
                            count++;
                            if (count > 3) {
                                count = 0;
                            }
                        }
                            break;                   
                }

                function renameCountry(country) {
                    if (country == "België" || country == "Belgie" || country == "Belgique" || country == "Belgium") {
                        return "belgium";
                    }
                }

                function renameProjecttype(projecttype) {
                    if (projecttype == "Nieuwbouw" || projecttype == "Nouvelle construction" || projecttype == "New build") {
                        return "newbuild";
                    }
                    else if (projecttype == "Renovatie" || projecttype == "Rénovation" || projecttype == "Renovation") {
                        return "renovation";
                    }
                }
            });
        }
    });
});

