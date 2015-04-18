$(function(){
	$('#shareTitle').keyup(function(){
		$('.linkDescriptionHeading').empty();
		$('.linkDescriptionHeading').append($('#shareTitle').val());
	});

	$('#shareDescription').keyup(function(){
		$('.linkDescriptionBody').empty();
		$('.linkDescriptionBody').append($('#shareDescription').val());
	});

	$('#shareImage').change(function(){
		readURL(this);
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
        }

        reader.readAsDataURL(input.files[0]);
    }
}