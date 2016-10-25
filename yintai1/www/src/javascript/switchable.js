$(function(){
	var timer=0;
	var index=0;
//	关于定时器加轮播
	timer=setInterval(function(){
		if(index==3){
			index=0;
		}
		$(".switchable-active").each(function(i){
		$(this).removeClass("border-changeColor");
		
		})
		$(".switchable-active").eq(index).addClass("border-changeColor");
		$(".pr-list-tf").eq(index).show().siblings().hide();
		index++;
	},2000);
//		tab切换
		$(".switchable-active").click(function(){
			$(".switchable-active").each(function(i){
				$(this).removeClass("border-changeColor");
			})
			$(this).toggleClass("border-changeColor");
			$(".pr-list-tf").eq($(this).index()).show().siblings().hide();
			
			
		})
})
