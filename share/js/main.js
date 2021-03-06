$(function(){
	$('#shareTitle').bind('keypress keyup focus',function(){
	    $('.linkDescriptionHeading').empty();
	    $('.linkedinContent h4').empty();
	    $('.googleplusContentTitle').empty();
	    $('.linkDescriptionHeading').append($('#shareTitle').val());
	    $('.linkedinContent h4').append($('#shareTitle').val());
	    $('.googleplusContentTitle').append($('#shareTitle').val());
	});

	$('#shareDescription').bind('keypress keyup focus', function () {
	    $('.linkDescriptionBody').empty();
	    $('.linkedinContentDescription span').empty();
	    $('.googleplusContentDescription').empty();
	    $('.linkDescriptionBody').append($('#shareDescription').val());
	    $('.linkedinContentDescription span').append($('#shareDescription').val());
	    $('.googleplusContentDescription').append($('#shareDescription').val());
	});

	$('#shareImage').change(function(){
		readURL(this);
	});

	$('#tweet').bind('keypress keyup focus', function () {
	    var $this = $(this);
	    var text = $this.val();
	    var maxlength = parseInt($this.attr('maxlength'));
	    var length = text.length;
	    var $count = $('#twitterCount');
	    var regex = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig;

	    if (!isNaN(maxlength) && $count.length) {
	        $count.html(maxlength - length);
	    }

	    var replacedURLTweet = text.replace(regex, "<a href='$1' target='_blank'>$1</a>");
	    
        var finalTweet = replacedURLTweet.replace(/#(\S+)/g, '<a href=http://twitter.com/#!/search/$1" class="hashtag" target="_blank">#$1</a>');

        $('#tweet').empty();
        $('#tweet').append(finalTweet);
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
            $('.googleplusImageWrap img').attr('src',e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}