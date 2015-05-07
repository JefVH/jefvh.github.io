$(function () {
    $('#message_title').bind('keypress keyup focus', function () {
        $('.linkDescriptionHeading').empty();
        $('.linkedinContent h4').empty();
        $('.googleplusContentTitle').empty();
        $('.richPinGridTitle').empty();
        $('.linkDescriptionHeading').append($('#message_title').val());
        $('.linkedinContent h4').append($('#message_title').val());
        $('.googleplusContentTitle').append($('#message_title').val());
        $('.richPinGridTitle').append($('#message_title').val());
    });

    $('#fbMessage').bind('keypress keyup focus', function () {
        $('.linkDescriptionBody').empty();
        $('.linkedinContentDescription span').empty();
        $('.googleplusContentDescription').empty();
        $('.pinDescription').empty();
        $('.linkDescriptionBody').append($('#fbMessage').val());
        $('.linkedinContentDescription span').append($('#fbMessage').val());
        $('.googleplusContentDescription').append($('#fbMessage').val());
        $('.pinDescription').append($('#fbMessage').val());
    });

    $('#fbBanner').change(function () {
        readURL(this);
    });

    $('#shareMessage').bind('keypress keyup focus', function () {
        var $this = $(this);
        var text = $this.val();
        var maxlength = parseInt($this.attr('maxlength'));
        var length = text.length;
        var $count = $('#shareMessage_count');
        var regex = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig;

        if (!isNaN(maxlength) && $count.length) {
            $count.html(maxlength - length);
        }

        var replacedURLTweet = text.replace(regex, "<a href='$1' target='_blank'>$1</a>");

        var finalTweet = replacedURLTweet.replace(/#(\S+)/g, '<a href=http://twitter.com/#!/search/$1" class="hashtag" target="_blank">#$1</a>');

        $('#tweetContent').empty();
        $('#tweetContent').append(finalTweet);
    });

    // $('#shareTitle').onkeyup(function(){
    // 	var title = $(this).val();

    // 	$('.linkDescriptionHeading').empty();
    // 	$('.linkDescriptionHeading').append(title);
    // });

    // $('#submit').on('click',function(){
    // 	var title=$('#shareTitle').val();
    // 	var description=$('#shareDescription').val();

    // 	$('.linkDescriptionHeading').append(title);
    // 	$('.linkDescriptionBody').append(description);

    // 	readURL($('#shareImage'));
    // });
});

function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.linkImage img').attr('src', e.target.result);
            $('.linkedinImageContainer img').attr('src', e.target.result);
            $('.googleplusImageWrap img').attr('src', e.target.result);
            $('.pinImgWrap img').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}