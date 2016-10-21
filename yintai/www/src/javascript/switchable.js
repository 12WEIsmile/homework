$(function(){
	var timer=0;
	var index=0;
	timer=setInterval(function(){
		if(index==4){
			index=0;
		}
		$(".switchable-active").each(function(i){
		$(".switchable-active").eq(i).removeClass("border-changeColor");
		})
		$(".switchable-active").eq(index).addClass("border-changeColor");
		$(".pr-list-tf").eq(index).show().siblings().hide();
		index++;
	},2000);
		$(".switchable-active").click(function(){
			$(".switchable-active").each(function(i){
				$(".switchable-active").eq(i).removeClass("border-changeColor");
			})
			$(this).toggleClass("border-changeColor");
			$(".pr-list-tf").eq($(this).index()).show().siblings().hide();
		})
})
