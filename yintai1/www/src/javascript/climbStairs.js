//关于爬楼梯

$(function(){
	var keycode=["时尚名品","潮流女装","精品男装","时尚鞋靴","潮流箱包","美容护肤","运动户外","内衣配饰","可爱婴童"];
//	在滚轮事件的固定位置出现
	$(window).scroll(function(){
		if($(this).scrollTop()>1000){
			$("#float_nav").fadeIn();
		}else{
			$("#float_nav").fadeOut();
		}
	})
//	返回顶部
	$("#float_nav ul li.last").click(function(){
		$("body,html").animate({
					scrollTop: 0},1000);
	})
	
//	点击相应的图标出现对于的楼层
	$("#float_nav ul li").not(".last").click(function(){
//		alert($("body").height());

		$(this).html(keycode[$(this).index()]).siblings().html("");
		$(this).addClass("scrollColor").siblings().removeClass("scrollColor");
		
//		注意在chrome下兼容		
		$("body").animate({scrollTop:$(this).index()*454+1800},600);
		
//		$(document.documentElement).animate({scrollTop:$(this).index()*454+1800},600);
//		注意在IE下兼容下面的形式
		$("html").animate({scrollTop:$(this).index()*454+1800},600);
		
	})
	
	
//	滚到相应的位置出现对应得图标文字
	$(window).scroll(function(){
		
//		console.log($("body").scrollTop());
//		console.log($(window).height());
		
		var num;
		
//		num=Math.floor((($("body").scrollTop()-1800)+$(window).height()/2) /454);
//		num=Math.floor((($("html").scrollTop()-1800)+$(window).height()/2) /454);

		num=Math.floor((($(window).scrollTop()-1800)+$(window).height()/2) /454);
		
		if(num<0){
			$("#float_nav ul li").not(".last").each(function(i){
				$(this).html("");
				$(this).removeClass("scrollColor");
			})
		}else{
		$("#float_nav ul li").not(".last").eq(num).addClass("scrollColor").siblings().removeClass("scrollColor")
		$("#float_nav ul li").not(".last").eq(num).html(keycode[num]).siblings().html("");
		}
	})
	
})
