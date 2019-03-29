


mui.init();
mui.plusReady(function() {
	launchScreen();
})





(function fn_InitEv(){
	//如果参数不为空,直接登录，否则返回到登录页面
	var userName = localStorage.getItem("username");
	var password = localStorage.getItem("password");
	var isChecked = localStorage.getItem("isChecked");
	var serverPath = localStorage.getItem("serverPath");
	if(isChecked){
		$("#password").val(password);
		$("#remember").attr("checked",true);
	}
	$("#username").val(userName);
})();
//登录操作		
$("#Btn").click(function(){	
	var username=$("#username").val();
	var password=$("#password").val();
	if(username==""){
		mui.alert("登录名不能为空");
		return;
	}

	var serverPath = localStorage.getItem("serverPath")+"/mobile/app/Login.ashx";
	var Expression=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
	
	var objExp=new RegExp(Expression);
	if(!objExp.test(serverPath)){
		mui.alert("地址格式不正确");
		return;
	}
	var jsonData={
			'username':username,
			'password':password,
	}
		
	info = plus.push.getClientInfo();
	info['username'] = username;
	info['password'] = password;
	var xhr = sendRequest(serverPath,info);
	
	
	xhr.onreadystatechange = function () {
    	switch ( xhr.readyState ) {     
        	case 4:
            	if ( xhr.status == 200 ) {
                	var result =  JSON.parse(xhr.responseText);
                	success(result);
            	} else {
                	alert( "xhr请求失败："+xhr.readyState );
					alert(xhr.status);
            	}
           		break;
    	}
    }
	
});


document.getElementById("mdialog4").addEventListener('tap', function(e) {
	var serverPath = localStorage.getItem("serverPath");
	e.detail.gesture.preventDefault(); //修复iOS 8.x平台存在的bug，使用plus.nativeUI.prompt会造成输入法闪一下又没了
	var btnArray = ['取消', '确定'];
	mui.prompt(' ',serverPath,'设置服务器地址', btnArray, function(e) {
		if (e.index == 1) {
			console.log()
			if(e.value){
				localStorage.setItem("serverPath",e.value);
			}
		} else {
			
		}
	});
});

//请求成功
function success(result){
	var message = result.message;
	if(message=="登录成功")
	{
		var username=$("#username").val();
		var password=$("#password").val();
		var isChecked=$("#remember").attr("checked")=='checked';
		localStorage.setItem("username",username);
		localStorage.setItem("password",password);
		localStorage.setItem("isChecked",isChecked);
		localStorage.setItem('login','success');
		localStorage.setItem('firstLogin','true');
		window.location.href = "Module/shouye/shouye.html";
	}else{
		mui.alert(message);
	}
}

// 设置启动时的轮播页
function launchScreen() {
	//读取本地存储，检查是否为首次启动
	var firstLogin = localStorage.getItem("firstLogin");
	console.log(firstLogin);
	var login = localStorage.getItem("login");
	if(firstLogin){ 
		if(login){
			var json = {
				'username':localStorage.getItem("username"),
				'password':localStorage.getItem("password")|| " ",
			}

			var serverPath = localStorage.getItem("serverPath")+"/mobile/app/Login.ashx";
			console.log(serverPath)
			mui.ajax(serverPath,
			{
				dataType:'jsonp',//服务器返回json格式数据
				type:'post',//HTTP请求类型
//				timeout:10000,//超时时间设置为10秒；
				data:{'json':JSON.stringify(json)},
				headers:{'Content-Type':'application/x-www-form-urlencoded'},	              
				success:function(data){
					window.location.href = "Module/shouye/shouye.html";
				},
				error:function(xhr,type,errorThrown){
					//异常处理；
					console.log(type);
				}
			});
		}
		else{
			plus.navigator.closeSplashscreen();
			plus.navigator.setFullscreen(false);
		}
	}else{
		//显示启动导航
		mui.openWindow({
			id:'guide',
			url:'Module/shouye/guide.html',
			show:{
				aniShow:'none'
			},
			waiting:{
				autoShow:false
			}
		});
	}
}