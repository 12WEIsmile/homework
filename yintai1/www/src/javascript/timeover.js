//倒计时
	showTimer();
	setInterval(showTimer,1000);
	function showTimer(){
		var now=new Date();
		var fure=new Date(2016,10,11);
		var cha=fure-now;
		var s=1000;
		var m=60*s;
		var h=60*m;
		var d=24*h;
		var dall=Math.floor(cha/d);
		var hall=Math.floor((cha%d)/h);
		var mall=Math.floor(((cha%d)%h)/m)
		var sall=Math.floor(((cha%d)%h)%m/1000);
		if(dall<10){
			mall="0"+mall;
		}
		if(hall<10){
			hall="0"+hall;
		}
		if(mall<10){
			mall="0"+mall;
		}
		if(sall<10){
			sall="0"+sall;
		}
		
		$(".time-shower").html(dall+"天"+hall+":"+mall+":"+sall);
	}
	
