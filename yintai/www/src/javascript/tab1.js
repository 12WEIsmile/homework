$(function(){
	$(".menu-cate").mouseover(function(){
		$(this).find(".menu-allout").addClass("show");
	})
	$(".menu-cate").mouseout(function(){
		$(this).find(".menu-allout").removeClass("show");
	})
	$(".menu-allout dl dt").mouseover(function(){
		$(this).siblings().show();
//		$(this).css({
//			"background":"#e5004f"
//		})
	})
	$(".menu-allout dl dd").mouseover(function(){
		$(this).show();
	})
	$(".menu-allout dl dd").mouseout(function(){
		$(this).hide();
	})
	$(".menu-allout dl dt").mouseout(function(){
		$(this).siblings().hide();
	})
	
	
	$(".f-pic").mouseover(function(){
		$(this).animate({
			left:-50
		},1000);
	})
	$(".f-pic").mouseout(function(){
		$(this).animate({
			left:0
		},1000);
	})
})
