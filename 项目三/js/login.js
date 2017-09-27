$(function(){
	var a=true;
	$("#eye").click(function(){
		if(a){
			$("#eye")[0].src="./imgs/eyes.png";
			$("#password")[0].type="text";
			a=false;
		}else{
			$("#eye")[0].src="./imgs/no-eye.png";
			$("#password")[0].type="password";
			a=true;
		}
		
	});
	// 验证码
	var m=false;
	function change(){
		var code=$("#code");
		var arrays=new Array( 
	       '1','2','3','4','5','6','7','8','9','0',
	       'a','b','c','d','e','f','g','h','i','j', 
	       'k','l','m','n','o','p','q','r','s','t', 
	       'u','v','w','x','y','z', 
	       'A','B','C','D','E','F','G','H','I','J', 
	       'K','L','M','N','O','P','Q','R','S','T', 
	       'U','V','W','X','Y','Z'        
       	);
		var codes='';// 重新初始化验证码
		for(var i = 0; i<4; i++){
   		// 随机获取一个数组的下标
   		var r = parseInt(Math.random()*arrays.length);
   		codes += arrays[r];
  			}
  		code.html(codes);
	}
	change();
	// $("#codeInfo").focus(change);
	$("#code").click(change);
	$(".chang").click(change);
	$("#codeInfo").blur(function(){
		var codes;
		var code=$("#code");
		var arrays=new Array( 
	       '1','2','3','4','5','6','7','8','9','0',
	       'a','b','c','d','e','f','g','h','i','j', 
	       'k','l','m','n','o','p','q','r','s','t', 
	       'u','v','w','x','y','z', 
	       'A','B','C','D','E','F','G','H','I','J', 
	       'K','L','M','N','O','P','Q','R','S','T', 
	       'U','V','W','X','Y','Z'        
       	);
		for(var i = 0; i<4; i++){
   		// 随机获取一个数组的下标
   		var r = parseInt(Math.random()*arrays.length);
   		codes += arrays[r];
  		}
		var inputCode=$("#codeInfo").val().toUpperCase();
		if(inputCode.length == 0)
			{
				$("#codesInfo").html("请输入验证码").css("color","red");
				$(".num").css({
					"border":"2px solid red",
					"background":"#a94442",
				});
				 m=false;
			}
		else if(inputCode!=code.html().toUpperCase()){
				$("#codesInfo").html("输入验证码错误").css("color","red");
				$(".num").css({
					"border":"2px solid  red",
					"background":"#a94442",
				});
				$("#codeInfo").val("");//清空文本框
				 m=false;
			}
		else if(inputCode==code.html().toUpperCase()){
				$("#codesInfo").html("输入验证码正确").css("color","green");
				$(".num").css({
					"border":"2px solid green",
					"background":"green",
				});
				m=true;
			}
	});
	
	// 用户名
	var x=false;
	$("#usen").blur(function(){
		if(localStorage.getItem($("#usen").val())==null){
			$("#useInfo").html("用户不存在").css("color","red");
			$(".user").css({
						"border":"2px solid #f2dede",
				});
				$(".user i").css({
					"backgroundColor":"#f2dede",
					"borderRight":"2px solid #a94442",
					"color":"#a94442",
				});
				x=false;
		}
		else{
			$("#useInfo").html("正确").css("color","green");
			$(".user").css({
					"border":"2px solid green",
				});
			$(".user i").css({
				"backgroundColor":"green",
				"borderRight":"2px solid lightgreen",
				"color":"lightgreen",
				});	
			x=true;
		}
	})

// 密码
var y=false;
	$("#password").blur(function(){
		if($("#password").val()!=localStorage.getItem($("#usen").val())){
			$("#passInfo").html("密码错误").css("color","red");
			$(".pass").css({
						"border":"2px solid #f2dede",
				});
				$(".pass i").css({
					"backgroundColor":"#f2dede",
					"borderRight":"2px solid #a94442",
					"color":"#a94442",
				});
				y=false;
		}
		else{
			$("#passInfo").html("密码正确").css("color","green");
			$(".pass").css({
					"border":"2px solid green",
				});
			$(".pass i").css({
				"backgroundColor":"green",
				"borderRight":"2px solid lightgreen",
				"color":"lightgreen",
				});	
			y=true;
		}
	})
// 登录
$(".lign").click(function(){
		// alert("aa");
		if(x && y  && m){
			
			localStorage.setItem("user",$("#usen").val())
			window.location.href="./index.html";

		}
		else{
			// alert(11);
			swal("登录失败","Sorry","error");
		}

})
})