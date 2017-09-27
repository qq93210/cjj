$(function(){
	// 显示和隐藏密码
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
		
	})

	$("#eyes").click(function(){
		if(a){
			$("#eyes")[0].src="./imgs/eyes.png";
			$("#passwords")[0].type="text";
			a=false;
		}else{
			$("#eyes")[0].src="./imgs/no-eye.png";
			$("#passwords")[0].type="password";
			a=true;
		}
		
	})
	var x=false;
		// 用户注册
		$("#phone").blur(function(){
		var reg=/^1\d{10}$/;
		var phone=$("#phone").val();
				if(localStorage.getItem(phone)){
					$("#phoneInfo").html("手机号码已被注册");
				$("#phoneInfo").css({
					"color":"red",
				});;
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
			else if(reg.test(phone)){
				$("#phoneInfo").html("格式正确");
				$("#phoneInfo").css({
					"color":"green",
				});
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
			else{
				$("#phoneInfo").html("手机号码格式不对");
				$("#phoneInfo").css({
					"color":"red",
				});;
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
			
		})
			


// 密码
	
		var y=false;
		$("#password").blur(function(){
			var re=/^[\da-z]{6,10}$/;
			var password=$("#password").val();
			if(password.trim()==""){
				$("#passwordInfo").html("请输入密码");
				$("#passwordInfo").css({
					"color":"red",
					"fontSize":"12px",
				});
				$(".pass").css({
						"border":"2px solid #f2dede",
				});
				$(".pass i").css({
					"backgroundColor":"#f2dede",
					"borderRight":"2px solid #a94442",
					"color":"#a94442",
				});
				 y=false;
				// break;
			}
			else if(re.test(password)){
				$("#passwordInfo").html("密码格式正确");
				$("#passwordInfo").css({"color":"green"});
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
			else{
				$("#passwordInfo").html("密码只能由数字和字母组成为6-10位");
				$("#passwordInfo").css({
					"color":"red",
					"fontSize":"12px",
				});
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
	});

	// 确认密码
	
		var z=false;
		$("#passwords").blur(function(){
			var repassword=$("#passwords").val() ;
			var password=$("#password").val();
			if(repassword.trim()==""){
				$("#passwordsInfo").html("请输入密码");
				$("#passwordsInfo").css({
					"color":"red",
					"fontSize":"12px",
				});
				$(".pass-r").css({
						"border":"2px solid #f2dede",
				});
				$(".pass-r i").css({
					"backgroundColor":"#f2dede",
					"borderRight":"2px solid #a94442",
					"color":"#a94442",
				});
				 z=false;
				// break;
			}
			else if(repassword==password){
				$("#passwordsInfo").html("密码正确");
				$("#passwordsInfo").css({"color":"green"});
				$(".pass-r").css({
					"border":"2px solid green",
				});
				$(".pass-r i").css({
					"backgroundColor":"green",
					"borderRight":"2px solid lightgreen",
					"color":"lightgreen",
				});
				 z=true;
			}
			else {
				$("#passwordsInfo").html("两次密码不一致");
				$("#passwordsInfo").css({
					"color":"red",
					"fontSize":"12px",
				});
				$(".pass-r").css({
						"border":"2px solid #f2dede",
				});
				$(".pass-r i").css({
					"backgroundColor":"#f2dede",
					"borderRight":"2px solid #a94442",
					"color":"#a94442",
				});
				 z=false;	
			}
		});
	
// 验证码

	// $("#code").click(function(){;
	// 	var code=$("#code");
	// 	var arrays=new Array( 
	//        '1','2','3','4','5','6','7','8','9','0',
	//        'a','b','c','d','e','f','g','h','i','j', 
	//        'k','l','m','n','o','p','q','r','s','t', 
	//        'u','v','w','x','y','z', 
	//        'A','B','C','D','E','F','G','H','I','J', 
	//        'K','L','M','N','O','P','Q','R','S','T', 
	//        'U','V','W','X','Y','Z'        
 //       	);
	// 	var codes='';// 重新初始化验证码
	// 	for(var i = 0; i<4; i++){
 //   		// 随机获取一个数组的下标
 //   		var r = parseInt(Math.random()*arrays.length);
 //   		codes += arrays[r];
 //  			}
 //  		code.html(codes);
	// });
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
				$("#codeIn").html("请输入验证码").css("color","red");
				$(".two").css({
					"border":"2px solid #f2dede",
				});
				$(".two i").css({
					"backgroundColor":"#f2dede",
					"borderRight":"2px solid #a94442",
					"color":"#a94442",
				});
				 m=false;
			}
		else if(inputCode!=code.html().toUpperCase()){
				$("#codeIn").html("输入验证码错误").css("color","red");
				$(".two").css({
					"border":"2px solid #f2dede",
				});
				$(".two i").css({
					"backgroundColor":"#f2dede",
					"borderRight":"2px solid #a94442",
					"color":"#a94442",
				});
				$("#codeInfo").val("");//清空文本框
				 m=false;
			}
		else if(inputCode==code.html().toUpperCase()){
				$("#codeIn").html("输入验证码正确").css("color","green");
				$(".two").css({
					"border":"2px solid green",
				});
				$(".two i").css({
					"backgroundColor":"green",
					"borderRight":"2px solid lightgreen",
					"color":"lightgreen",
				});
				m=true;
			}
	});

// 提交
	$("#sub").click(function(){
		// alert("aa");
		if(x && y && z && m){
			swal({
				title:"注册成功",
				text:"Yes",
				type:"success",

			});
			localStorage.setItem($('#phone').val(),$("#password").val());
			window.location.href="./login.html";

		}
		else{
			// alert(11);
			swal("注册失败","Sorry","error");
		}


		// 交互
		
		
	});





})















