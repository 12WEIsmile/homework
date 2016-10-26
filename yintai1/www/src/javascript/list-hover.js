//关于列表页对应得图片放大
$(function(){
	$(".p-listInfo").hover(function(){
		$(this).toggleClass("stress-bc");
		$(this).find(".lg-Img").toggleClass('show-bigImg');
	})
})
