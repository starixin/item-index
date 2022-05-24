$(function() {
	$('.block li a').mouseover(function() {
		$(this).css({
			color: '#11A4C5'
		}).parent().siblings().find('a').css({
			color: '#ffffff',
		});
		$(this).siblings().stop().show().parent().siblings().find('.none').stop().hide();
	});
	$('.block li a').click(function() {
		var $index = $(this).index();
		$(this).siblings('.blackOp').find('div').hide();
	});
	$('.block li a').mouseleave(function() {
		$(this).css({
			color: ''
		}).parent().siblings().find('a').css({
			color: ''
		});
		$(this).siblings().stop().hide().parent().siblings().find('.none').stop().hide();
	});
	$('.photos img').mouseover(function() {
		var $index = $(this).index();
		$(this).siblings('.blackOp').find('div').eq($index).show().siblings('div').hide();
	});
	$('.photos img').mouseleave(function() {
		var $index = $(this).index();
		$(this).siblings('.blackOp').find('div').hide();
	});
})
