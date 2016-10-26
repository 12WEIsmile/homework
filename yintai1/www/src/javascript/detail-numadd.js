//点击变背景
$(function(){
	$(".linknum1").hover(function(){
		$(this).addClass("bg-position1");
	},function(){
		$(this).removeClass("bg-position1");
	}
	)
	$(".linknum2 ").hover(function(){
		$(this).addClass("bg-position2");
	},function(){
		$(this).removeClass("bg-position2");
	}
	)
	
//	加数	
	var num=$("#buynum").val();
	$("#buynum").change(function(){
		num=$("#buynum").val();
	})
	$(".linknum1").click(function(){
		num++;
		$("#buynum").val(num);
	})
	$(".linknum2").click(function(){
		num--;
		if(num<1){
			num=1;
		}
		$("#buynum").val(num);
	})
	
	
//	点击变色
	$(".buyit").hover(function(){
		$(this).addClass("buy-changecolor");
	},function(){
		$(this).removeClass("buy-changecolor");
	})
	$(".incart").hover(function(){
		$(this).addClass("cart-changecolor");
	},function(){
		$(this).removeClass("cart-changecolor");
	})
	
//	出现弹窗
	$(".incart").click(function(){
		$(".box-cart-info").find("span").html(num);
		$(".box-cart-info").find("em").html((num*16824.00).toFixed(2));		
		$("body").css({
			background:"#999",
			opacity:.5,
		});
		$(".show-wicket").removeClass("hide");
	})
	$(".close-exit,.box-cart-clo").click(function(){
		$("body").css({
			background:"#fff",
			opacity:.9
		});
		$(".show-wicket").addClass("hide");
	})
})
