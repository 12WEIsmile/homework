$(function(){
	var timer=0;
	var index=0;
	timer=setInterval(function(){
		if(index==3){
			index=0;
		}
		$(".eva-switchable-active").each(function(i){
		$(".eva-switchable-active").eq(i).removeClass("borderColor");
		})
		$(".eva-switchable-active").eq(index).addClass("borderColor");
		$(".pro_list_rm").eq(index).show().siblings().hide();
		index++;
	},2000);
})