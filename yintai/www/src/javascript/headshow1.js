$(function(){
	$("li").mouseover(function(){
		$(this).find(".head-show").show();
	})
	$("li").mouseout(function(){
		$(this).find(".head-show").hide();
	})
})
