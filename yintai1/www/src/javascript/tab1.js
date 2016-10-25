$(function(){
	$(".menu-cate").hover(function(){
		$(this).find(".menu-allout").addClass("show");
	},
	function(){
		$(this).find(".menu-allout").removeClass("show");
	})

//	$(".menu-allout dl").hover(function(){
//		$(this).find("dd").show();
//	},
//		function(){
//		$(this).find("dd").hide();
//	})
	
	$(".menu-allout dl").mouseenter(function(){
		$(this).find("dd").show();
	})
	$(".menu-allout dl").mouseleave(function(){
		$(this).find("dd").hide();
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
