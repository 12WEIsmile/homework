$(function(){
	$(".expandBtn").click(function(){
//		alert(1);
		$(this).toggleClass("position-bg1");
		$(this).parent().siblings().find(".dd-btn").toggleClass("show-dd");
		if($(this).hasClass("position-bg1")){
			$(this).html("收起");
		}else{
			$(this).html("展开");
		}
		
	})
	$(".J-click").hover(function(){
		$(this).find("span").addClass("J-price")
	},function(){
		$(this).find("span").removeClass("J-price")
	})
	
})
