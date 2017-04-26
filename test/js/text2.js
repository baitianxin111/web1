$(function() {
	var k = 0;
	$('#container').click(function() {
		if (k % 2 == 0) {
			$(this).css({'background': 'orange'});
		} else {
			$(this).css({'background': 'skyblue'});
		}
		k++;

	});
	$('img').click(function() {
		k++;
		if (k % 2 == 1) {
			$(this).parent().css({
				'padding': '20px'
			});

		} else {
			$(this).parent().css({
				'padding': '5px'
			});

		}
	});
	$('.box').click(function() {
		$(this).hide(500);
	});

});