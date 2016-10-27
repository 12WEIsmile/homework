
//轮播图的jquery特效
$(function(){
	var len=$(".banner-ul li").length;//重点是在后面加一张图片
	var index=0;//图片序号
	var adTimer;//定时器
	var adWidth=$(".banner-img>ul>li:first").width();//获得宽度
	adTimer=setInterval(showImg,3000);
	$(".banner-ul").mouseover(function(){
		clearInterval(adTimer);
	})
	$(".banner-ul").mouseout(function(){
		adTimer=setInterval(showImg,3000);
	})
	$(".banner-img .left").click(function(){
		clearInterval(adTimer);
		index-=2;
		if(index<0){
			$(".banner-ul").css("left", -adWidth*(len-1));
			index=3;//此处为最后一张的前面的第二张所处的下标
		}
		showImg();
		adTimer=setInterval(showImg,3000);
	})
	$(".banner-img .right").click(function(){
		clearInterval(adTimer);
		showImg();
		adTimer=setInterval(showImg,3000);
	})
	
	function showImg(){
		index++;
		$(".choose .num1").each(function(i){
			$(".choose .num1").eq(i).removeClass("carouselbg");
		})
		$(".choose .num1").eq(index).addClass("carouselbg");
//	$("#tab-nav").css("background","url(img/index/data-bg"+index+".jpg) no-repeat center 0");
	$(".banner-ul").animate({
		"left":-adWidth*index
	},2000,function() {
		if(index == 4) {
			$(".choose .num1").eq(0).addClass("carouselbg");
			$(".banner-ul").css("left", 0);			
			index = 0;
//			$("#tab-nav").css({
//			background:"url(/img/index/data-bg1.jpg) no-repeat center 0"
//			})
		}
	});
}
})


