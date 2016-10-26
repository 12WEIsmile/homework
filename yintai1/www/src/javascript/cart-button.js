$(function(){
//	移除商品
	$(".pro-remove").bind('click',function(){
//		alert(1);
		$(this).parent().parent().parent().remove();
	})	
	
	
	$(".nums-red").bind("click",function(){
		var valbf=$(".pro-nums").val();
		if(valbf<=1){
			valbf=2
		}
		valbf--;
		$(".pro-nums").val(valbf);		
	})
//	商品加减
	$(".nums-add").bind("click",function(){
		var valbf=$(".pro-nums").val();
		valbf++;
		$(".pro-nums").val(valbf);
	})
})
