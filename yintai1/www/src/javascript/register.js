$(function(){
	$(".nametxt").click(function(){
		$(this).addClass("stress");
		return false;
	})
	var renum=/^1[3,4,5,7,8]\d{9}$/
	$("#RegisterName").change(function(){
		var setName=$("#RegisterName").val();
		if(renum.test(setName)==false){
			$(this).siblings().removeClass("hide");
		}else{
			$(this).siblings().addClass("hide");
		}
	})
//	第一部分：由字母、数字、下划线、短线“-”、点号“.”组成，
//第二部分：为一个域名，域名由字母、数字、短线“-”、域名后缀组成，
//而域名后缀一般为.xxx或.xxx.xx，一区的域名后缀一般为2-4位，如cn,com,net，现在域名有的也会大于4位
	var reEmial=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
	$("#Registeremail").change(function(){
		var setMail=$("#Registeremail").val();
		if(reEmial.test(setMail)==false){
			$(this).siblings().removeClass("hide");
		}else{
			$(this).siblings().addClass("hide");
		}
	})
	
//	以字母开头，只能包含字符、数字和下划线
	var recode=/^[a-zA-Z]\w{5,17}$/
	$("#RegisterSecretCode").change(function(){
		var setcode=$("#RegisterSecretCode").val();
		if(recode.test(setcode)==false){
			$(this).siblings().removeClass("hide");
		}else{
			$(this).siblings().addClass("hide");
		}
		$("#RegisterConfirmSecretCode").change(function(){
			var confirmcode=$("#RegisterConfirmSecretCode").val();
			if(confirmcode==setcode){
				$(this).siblings().addClass("hide");
			}else{
				$(this).siblings().removeClass("hide");
			}
		})
	})
//	注册
})

