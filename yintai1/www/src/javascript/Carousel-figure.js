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
		if(index==-2){
			$(".banner-ul").css("left", -adWidth*(len-1));
			index=2;//此处为最后一张的前面的第二张所处的下标
		}
		showImg();
	})
	$(".banner-img .right").click(function(){
		clearInterval(adTimer);
		showImg();
	})		
	function showImg(){
		index++;
		if(index>=len){
			index=1;
			$(".banner-ul").css("left", 0);	
		}
		$(".banner-ul").animate({
		"left":-adWidth*index
		},2000,function() {
		for(var j=0;j<len-1;j++){
			if(j==index){
				$(".choose .num1").eq(j).addClass("carouselbg");
			}else{
				$(".choose .num1").eq(j).removeClass("carouselbg");
			}if(index==len-1){
				$(".choose .num1").eq(0).addClass("carouselbg");
			}
		}
		
	});
	
}
})


