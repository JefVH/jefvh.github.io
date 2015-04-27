var fburl1 = 'http://graph.facebook.com/?id=';
var fburl2 = '?callback=?&method=post&scrape=true';
var shareURL = 'http://facebook.com/share?u='

$(function(){
    $('#submit').on('click',function(){
        fburl = fburl1+$('#url').val()+fburl2;
        shareURL = shareURL+$('#url').val();
        getData(fburl);
    });
});

function getData(fburl){
    $.getJSON(fburl, function (data) {
        window.open(shareURL);
    });
}