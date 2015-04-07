$(function () {
    var id = location.search.split('id=')[1];

    $.ajax({
        type: "GET",
        url: "/Content/inspiratiemodule/Inspiration_NL.xml",
        datatype: "xml",
        success: function (xml) {
            $(xml).find("project[id=" + id + "]").each(function () {
                var producttitle = $(this).find('producttitle').text();
                var location = $(this).find('location').text();
                var country = $(this).find('country').text();
                var googlemaps = $(this).find('googlemaps').text();
                var projecttype = $(this).find('projecttype').text();
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

                $('#project').append('<h1>' + projecttype + ' ' + location + ' - ' + buildingstyle + '</h1><h2 class="quote">&quot;' + quote + '&quot;</h2><div id="inspiratiedetailinfo"><a href="#" target="_blank"><div class="projectinfo"><img class="infoicon" src=""><h1>LOCATIE</h1><h2>' + location + ', ' + country + '</h2></div></a></div>');
            });

            function renameCountry(country){
                if(country=="België" || country=="Belgie" || country=="Belgique" || country=="Belgium"){
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
        }
    });
}
);