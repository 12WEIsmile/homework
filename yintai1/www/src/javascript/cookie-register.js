$(function(){
//	alert(JSON.parse($.cookie("msg")));	
	var $msglist = $.cookie("msg") ? JSON.parse($.cookie("msg")):[];
	$("#RegisterName").change(function(){
		$.each($msglist, function(i, n) {
		if(n.phone==$("#RegisterName").val()||n.email==$("#Registeremail").val()){	
			$("#register").css({
				"background": "#ccc",
				"cursor": "not-allowed"
			});
			$("#register").attr("disabled",true);
		}else{
			$("#register").removeAttr("disabled");
			$("#register").css({
				"background": "#e5004f",
				"cursor": "pointer"
			});
		}
	})
	})	
	$("#register").click(function(){		
		if(($("#RegisterName").val()=="")||($("#Registeremail").val()=="")||($("#RegisterSecretCode").val()=="")||($("#RegisterConfirmSecretCode").val()=="")){
//			alert("2");
			$("#register").addAttr("disabled",true);
			
		}else if($(".user1").hasClass("hide")&&$(".user2").hasClass("hide")&&$(".user3").hasClass("hide")&&$(".user4").hasClass("hide")){		
//			alert("1");						
			$(".show-wicket").removeClass("hide");			
			var msg = {
				"phone":$("#RegisterName").val(),
				"email":$("#Registeremail").val(),
				"code":$("#RegisterSecretCode").val()
			}
			$msglist.push(msg);
			$.cookie("msg",JSON.stringify($msglist),{ expires:30,path: '/' });
			//	计时跳转到登录界面
			setTimeout(function(){
			location.href="login.html";
			},2000);
		}else{
//			alert("2");
			$("#register").addAttr("disabled",true);
		}
	})
	
	
	

	
})
