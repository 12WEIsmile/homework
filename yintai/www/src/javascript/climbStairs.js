$(function(){
	var keycode=["时尚名品","潮流女装","精品男装","时尚鞋靴","潮流箱包","美容护肤","运动户外","内衣配饰","可爱婴童"];	
	$(window).scroll(function(){
		if($(this).scrollTop()>1000){
			$("#float_nav").fadeIn();
		}else{
			$("#float_nav").fadeOut();
		}
	})
	$("#float_nav ul li.last").click(function(){
		$("body,html").animate({
					scrollTop: 0},1000);
	})
	$("#float_nav ul li").not(".last").click(function(){
		$(this).html(keycode[$(this).index()]).siblings().html("");
		$(this).addClass("scrollColor").siblings().removeClass("scrollColor");
//		var $doc=$("body")||$(document.documentElement);
//		$doc.animate({scrollTop:$(this).index()*454+1800},600);
		$("body").animate({scrollTop:$(this).index()*454+1800},600);
//		$(document.documentElement).animate({scrollTop:$(this).index()*454+1800},600);
	})
	$(document).scroll(function(){
		var num=Math.floor((($("body").scrollTop()-1800)+$(window).height()/2) /454);
		$("#float_nav ul li").not(".last").eq(num).addClass("scrollColor").siblings().removeClass("scrollColor")
		$("#float_nav ul li").not(".last").eq(num).html(keycode[num]).siblings().html("");
	})
	
})
