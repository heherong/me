/**
 * mylife
 */
$(function(){
	//隐藏图片和多出的内容
	$('.mylife_js_model').each(function(index,elem){
		$(elem).find('.image').hide();
	})
	//显示图片和多出的内容
	$('.mylife_js_open').click(function(){
		$(this).hide();
		$(this).next('.mylife_css_close').show();
		$(this).parent('p').parent('.mylife_js_model').removeClass('mylife_css_model ');
		$(this).prev().show();
	})
	$('.mylife_css_close').click(function(){
		$(this).hide();
		$(this).prev('.mylife_js_open').show();
		$(this).parent('p').parent('.mylife_js_model').addClass('mylife_css_model ');
		$(this).prev().prev().hide();
	})
})
//doitmyself
