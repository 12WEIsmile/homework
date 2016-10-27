$(function() {
//	登录信息变为用户名的属性
	if($.cookie("logouser")) {
		$(".login-name").html($.cookie("logouser") + " 用户");
		$(".withdraw").html(" ");
		
	}
		
	
//	$(".withdraw").click(function(){
//			$(".login-name").html("Hi,欢迎来到银泰网");
//		})
	
//	触发点击事件出现的效果,还有判断cookie里是否有数据
	$("#submit").click(function() {
		var loginName = $("#LoginName").val();
		var loginPassWord = $("#LoginPassWord").val();
		if(checkUserLogin(loginName, loginPassWord)) {
			$("#log-show").removeClass("hide");
			setTimeout(function() {
				location.href = "login.html";
			}, 2000);
		}
		if($("#agreement").is(":checked")) {
			$.cookie("logouser", loginName, {
				expires: 1,
				path: '/'
			});
		} else {
			$.cookie("logouser", loginName, {
				path: '/'
			});
		}
	})
	
	
	function checkUserLogin(username, userpass) {
		var flag = false;
		$.each(JSON.parse($.cookie("msg")), function(i, n) {
			if(n.phone == username || n.email == username && n.code == userpass) {
				flag = true;
				$(".show-flagcode").addClass("hide");
				$(".show-flagphone").addClass("hide");
			} else {
				$(".show-flagcode").removeClass("hide");
				$(".show-flagphone").removeClass("hide");
				flag = false;
			}
		});
		return flag;
	}

})