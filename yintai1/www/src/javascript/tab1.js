
//关于首页的商品的二级和三级菜单(banner图旁)
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
//	
//	$(".menu-allout dl").mouseover(function(){
//		$(this).find("dd").addClass("show");
//	})
//	$(".menu-allout dl").mouseout(function(){
//		$(this).find("dd").removeClass("show");
//	})
//	
//	
	
//关于轮播图旁边的图片的移动	
	
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
