$(function(){
//	移除商品
	$(".pro-remove").bind('click',function(){		
		var index=$(this).parents(".CommodityList").index() - 1 ;		
		var newCookie = [];
		$.each($.cookie('goods'), function(i,n) {
			if(i!=index){
				newCookie.push(n);
			}			
		});		
		$.cookie("goods", newCookie);
		$(this).parent().parent().parent().remove();		
	})	
	
//	商品加减		
	$(".nums-red").bind("click",function(){
		var valbf = $(this).siblings(".pro-nums");
		var num = valbf.val();
		if(num <= 1){
			num=2;
		}
		num--;
		$(this).siblings(".pro-nums").val(num);
//		setTotal(); 
	})

	$(".nums-add").bind("click",function(){
		var valbf = $(this).siblings(".pro-nums");
		var num = valbf.val();
		num++;
		$(this).siblings(".pro-nums").val(num);
//		setTotal(); 
	})
	
	
	//	价格变动
	$("#J-UPCheck").click(function(){
		$(".J-willing").prop("checked",true);
		$(".all-price").html(calcuMoney());
	})			
	$(".pro-nums").change(function(){
		$(".all-price").html(calcuMoney());
	})
	$(".nums-add").click(function(){
		$(".all-price").html(calcuMoney());
	})
	$(".nums-red").click(function(){
		$(".all-price").html(calcuMoney());
	})
//	var flag=false;
	$(".J-willing").bind("click",function(){
		$(".all-price").html(calcuMoney());
	})	
//	alert(calcuMoney());
	
	
//	价格封装的函数
	function calcuMoney() {
		var money = 0;
		$.each($("div.CommodityList"), function(i, n) {
			if($(n).find(".J-willing").is(":checked")){
				money += $(n).find(".pro-nums").val() * $(n).find("em").html();
			}				
			
		});		
		return money;
				
	}
	
})
