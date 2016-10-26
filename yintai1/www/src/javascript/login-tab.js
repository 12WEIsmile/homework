//关于列表的tab切换特效
$(function(){
	$(".c-login-head span").click(function(){
		$(".c-login-num").eq($(this).index()).removeClass("hide").siblings().addClass("hide");
		$(this).addClass("showbgcolor").siblings().removeClass("showbgcolor");
	})
	
})
