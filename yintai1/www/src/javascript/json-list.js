$(function(){
	$.get("../json/list.json",function(data){	
				$.each(data.items, function(i,n) {
//					alert(i);
//					alert(n);
					$(".p-listInfo").eq(i).find(".lg-Img").attr("src",n.limgSrc);
					$(".p-listInfo").eq(i).find(".sm-Img").attr("src",n.simgSrc);
					$(".p-listInfo").eq(i).find(".price-now").html(n.price);
					$(".p-listInfo").eq(i).find(".price-before").html(n.originprice);					
					$(".p-listInfo").eq(i).find(".info-font").html(n.tit);					
					
				});
			}

	)
})
