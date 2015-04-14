$(document).ready(function () {
    $('#submit').on('click', function () {
        var url = 'https://graph.facebook.com/?id=' + $('#url').val() + '&scrape=true&method=post';
        $.getJSON(url, function (data) {
            var items = [];
            $.each(data, function (key, val) {
                items.push('<li id=' + key + '>' + val + '</li>');
            });

            $('<ul/>', {
                'class': 'opengraph',
                html: items.join('')
            }).appendTo('body');
        });
    });
});