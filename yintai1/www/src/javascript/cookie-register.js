//关于注册存入cookie
$(function() {
	//	alert(JSON.parse($.cookie("msg")));	
	var $msglist = $.cookie("msg") ? JSON.parse($.cookie("msg")) : [];
	$("#RegisterName").change(function() {
		if(judgeRepeat($("#RegisterName").val())) {
			$("#register").css({
				"background": "#ccc",
				"cursor": "not-allowed"
			});
			$("#register").prop("disabled", true);
		} else {
			$("#register").prop("disabled", false);
			$("#register").css({
				"background": "#e5004f",
				"cursor": "pointer"
			});
		}
	})
//	判断账号是不是相同
	function judgeRepeat(username) {
		var flag = false;
		$.each($msglist, function(i, n) {
			if(n.phone == username) {
				flag = true;
			}
		})
		return flag;
	}
	
	$("#register").click(function() {
		if(($("#RegisterName").val() == "") || ($("#Registeremail").val() == "") || ($("#RegisterSecretCode").val() == "") || ($("#RegisterConfirmSecretCode").val() == "")) {
			//			alert("2");
			//			$("#register").addAttr("disabled",true);						
		} else if($(".user1").hasClass("hide") && $(".user2").hasClass("hide") && $(".user3").hasClass("hide") && $(".user4").hasClass("hide")) {
			//			alert("1");						
			$(".show-wicket").removeClass("hide");
			var msg = {
				"phone": $("#RegisterName").val(),
				"email": $("#Registeremail").val(),
				"code": $("#RegisterSecretCode").val()
			}
			$msglist.push(msg);
			$.cookie("msg", JSON.stringify($msglist), {
				expires: 1,
				path: '/'
			});
			//	计时跳转到登录界面
			setTimeout(function() {
				location.href = "login.html";
			}, 2000);
		} else {
			//			alert("2");
			$("#register").prop("disabled", true);
		}
	})

})