
//关于detail的特效

$(function(){
//	关于购物车的下拉菜单
	$(".y-desc-addcar").hover(function(){
		$(this).find(".shoulder-bag").removeClass("hide");
	},function(){
		$(this).find(".shoulder-bag").addClass("hide");
	}
	)
//	关于手机下单立即抢购的下拉菜单
	$(".mobileBuy a").hover(function(){
		$(this).children().removeClass("hide")
	},function(){
		$(this).children().addClass("hide")
	}
	)
//	关于tab切换
	$(".yp-con").children().click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$(".yp-con-desc").children().eq($(this).index()).show().siblings().hide();
	})
	$(".detail-returnTop").click(function(){
		$("body,html").animate({
			scrollTop: 0},1000);
	})
	$(".detail-returnTop").hover(function(){
		$(this).addClass("distance-head");		
	},function(){
		$(this).removeClass("distance-head");
	})
	
	//关于返回顶部
	$(window).scroll(function(){
		if($(this).scrollTop()>80){
			$(".detail-returnTop").fadeIn();
		}else{
			$(".detail-returnTop").fadeOut();
		}
	})
	
})
