$(function(){
	//放大镜
	$(".magnifier-wrap").hover(function(){
        $(".glass").css("display","block");
        $(".bigImg").css("display","block");
        $(".magnifier-wrap").mousemove(function(e){
            e = e || event;
            var _left = e.pageX - $(".magnifier-wrap").offset().left-40;
            var _top = e.pageY - $(".magnifier-wrap").offset().top-40;
            if(_left < 0){
                _left = 0;
            }else if(_left > 220){
                _left = 220;
            }
            if(_top < 0){
                _top = 0;
            }else if(_top > 320){
                _top = 320;
            }
            $(".glass").css("left",_left);
            $(".glass").css("top",_top);
            var disX = $(".glass").offset().left - $(".magnifier-wrap").offset().left;
            var disY = $(".glass").offset().top - $(".magnifier-wrap").offset().top;

            $(".bigImg").children().css("left",disX*-2);
            $(".bigImg").children().css("top",disY*-2);
        })
    },function(){
        $(".glass").css("display","none");
        $(".bigImg").css("display","none");
    })
	
//	tab切换图片部分
//对应小图显示对应大图
    $(".ew-c-list li").mouseenter(function(){
        var _index = $(this).index();
        $(".small-img").attr("src","../img/detail/pic"+(_index+1)+"l.jpg");
        $(".bigImg img").attr("src","../img/detail/pic"+(_index)+"big.jpg");
//      ../img/detail/pic0big.jpg
//      ../img/detail/pic1l.jpg
    })


})
