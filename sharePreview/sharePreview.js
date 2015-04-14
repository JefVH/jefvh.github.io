var fburl = "http://graph.facebook.com/http://jefvh.github.io/facebookShare/index.html?callback=?&method=post&scrape=true"

$.getJSON(fburl, function (data) {

    var title = data['title'];
    var url = data['url'];
    var image = data['image'];
    var imageUrl = image[0].url;
    var imageWidth = image[0].width;
    var imageHeight = image[0].height;
    $("#profile").append('<h3>' + title + '</h3>');
    $("#profile").append('<h3>' + url + '</h3>');
    $("#profile").append('<h3>' + imageUrl + '</h3>');
    $("#profile").append('<h3>' + imageWidth + '</h3>');
    $("#profile").append('<h3>' + imageHeight + '</h3>');

});