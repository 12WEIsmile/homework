$(function(){
	$(".y-desc-addcar").hover(function(){
		$(this).find(".shoulder-bag").removeClass("hide");
	},function(){
		$(this).find(".shoulder-bag").addClass("hide");
	}
	)
	
	$(".mobileBuy a").hover(function(){
		$(this).children().removeClass("hide")
	},function(){
		$(this).children().addClass("hide")
	}
	)
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
	$(window).scroll(function(){
		if($(this).scrollTop()>80){
			$(".detail-returnTop").fadeIn();
		}else{
			$(".detail-returnTop").fadeOut();
		}
	})
	
})
