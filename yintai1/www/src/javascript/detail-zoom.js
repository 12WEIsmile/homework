//放大镜封装调用的此方法在ie下不兼容
$(function(){
	$.each($("div .magnifier-wrap div"), function(i, n) {
		Zoom($(n), "../img/detail/pic"+i+"big.jpg")
	})	
	$(".ew-c-list li").hover(function(){
		$(".same-variety").eq($(this).index()).show().siblings().hide();
	})
	
})
