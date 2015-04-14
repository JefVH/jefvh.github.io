$(document).ready(function () {
    $('#submit').on('click', function () {
        var url = 'https://graph.facebook.com/' + $('#url').val() + '?callback=?&scrape=true&method=post';

        $.getJSON(url, function (data) {
            var url  = data['url'];
            var type = data['type'];
            var title = data['title'];
            var description = data['description'];

            $('body').append('<p>URL:' + url + '</p>');
            $('body').append('<p>TYPE:' + type + '</p>');
            $('body').append('<p>TITLE:' + title + '</p>');
            $('body').append('<p>DESCRIPTION:' + description + '</p>');
        });
    });
});