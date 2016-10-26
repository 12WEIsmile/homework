//关于首页的tab切换加自动切换对应得内容
$(function(){
	var timer=0;
	var index=0;
	//	关于定时器加轮播
	timer=setInterval(function(){
		if(index==2){
			index=0;
		}
		$(".eva-switchable-active").each(function(i){
		$(".eva-switchable-active").eq(i).removeClass("borderColor");
		})
		$(".eva-switchable-active").eq(index).addClass("borderColor");
		$(".pro_list_rm").eq(index).show().siblings().hide();
		index++;
	},2000);
	$(".eva-switchable-active").click(function(){
		$(".eva-switchable-active").each(function(i){
			$(this).removeClass("borderColor");
		})
		$(this).addClass("borderColor");
		$(".pro_list_rm").eq($(this).index()).show().siblings().hide();
		
	})
})