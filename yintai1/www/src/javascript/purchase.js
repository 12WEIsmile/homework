$(function() {
	$.cookie.json = true;

	$(".incart").bind("click", function() {
			var item = {
				id: "sno_11",
				info: $(".p-tit").html(),
				price: $(".dis-price").html(),
				num: $("#buynum").val(),
				path: $(".good-img").attr("src")
			}
			var cookieArr;
			if(!$.cookie("goods")) {
				cookieArr = []
			}else {
				cookieArr = $.cookie("goods");
			}
				cookieArr.push(item);
				$.cookie("goods", cookieArr);
				
//			$.cookie("goods", {
//					"item1": {
//						id: "sno_11",
//						info: $(".p-tit").html(),
//						price: $(".dis-price").html(),
//						num: $("#buynum").val(),
//						path: $(".good-img").attr("src")
//					},
//					"item2": {
//						id: "sno_11",
//						info: $(".p-tit").html(),
//						price: $(".dis-price").html(),
//						num: $("#buynum").val(),
//						path: $(".good-img").attr("src")
//					}
//				})
				//			alert(1);
		})
		//		var goods=$.cookie("goods");
		//		alert(goods);
		//		var path=goods.item1.path;
		//		alert(path);				
		//		var info=goods.item1.info;
		//		var price=goods.item1.price;
		//		var num=goods.item1.num;
	$.each($.cookie('goods'), function(n, i) {
		var path = i.path;
		alert(path);
		var info = i.info;
		var price = i.price;
		var num = i.num;
		$(".PayofFouCont").before("<div class='CommodityList'>" +
			"<div class='category th-chk l'>" +
			"<div style='margin-top: 14.5px;'>" +
			"<input type='checkbox' class='J-willing l' id='J-change'/>" +
			"<label class='J-SelectPro' for='J-change'></label>" +
			"</div>" +
			"</div>" +
			"<div class='th-item l'>" +
			"<div class='property'>" +
			"<div class='pro-img l'>" +
			"<img src=" + path + " " + "style='display:block;width: 45px; height: 60px;'>" +
			"</div>" +
			"<p class='pro-title l'>" +
			"<a href='###'>" + info + "</a>" +
			"</p>" +
			"<p class='pro-check'>" +
			"<span>颜色:<b>黑色</b></span>" +
			"<span>尺寸:<b>190*140*90mm</b></span>" +
			"</p>" +
			"</div>" +
			"</div>" +
			"<div class='th-price l'>" +
			"<div class='pro-price'>" +
			"<strong>￥<em>" + price + "</em></strong>" +
			"<span class='pro-rebate'><b>7.6</b>折</span>" +
			"</div>" +
			"</div>" +
			"<div class='th-amount l'>" +
			"<div class='pro-number'>" +
			"<a href='###' class='nums-red'>-</a>" +
			"<input type='text' class='pro-nums' value='1' />" +
			"<a href='###' class='nums-add'>+</a>" +
			"</div>" +
			"</div>" +
			"<div class='th-sum l' style='margin-top: 11px;'>" + price + "</div>" +
			"<div class='th-op l' style='margin-top: 3px;'>" +
			"<div class='relative decidetime'>" +
			"<a href='###' class='pro-collect'>移入收藏</a>" +
			"</div>" +
			"<div class='relative decidetime'>" +
			"<a href='###' class='pro-remove'>删除商品</a>" +
			"</div>" +
			"</div>" +
			"</div>");

	});

})