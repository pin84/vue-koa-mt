//获取每年有多少个周
var getWeek = function(year){
	var d = new Date(year-1,0,1);
	var to = new Date(year,12,31);
	//获取第一个星期一
	for(var i=0;i<31;i++){
		var week = d.getDay();
		if(week==1){
			break;
		}else{
			d.setDate(d.getDate()+1);
			}
		}
	//获取最后一个星期天
	for(var i=0;i<31;i++){
		var week = to.getDay();
		if(week==1){
			break;
		}else{
			to.setDate(to.getDate()-1);
		}
	}						
	var i = 1;  
	var data = [];
	var obj = {};
	for(var from = d; from.getFullYear() <= to.getFullYear(); ){        
		//document.write(from.getFullYear()+"年第"+i+"周"+(from.getMonth() + 1)+"月"+from.getDate() + "日 - ");
		obj.value = i;
		obj.text = from.getFullYear()+"-"+(from.getMonth() + 1)+"-"+from.getDate();
		from.setDate(from.getDate()+6);        
		if(from.getSeconds() <= to.getSeconds()) {
		//document.write((from.getMonth() + 1) + "月" + from.getDate() + "日<br / >"); 
						obj.text += "至"+from.getFullYear()+"-"+(from.getMonth() + 1)+"-"+from.getDate();
						data.push(obj);
						obj={};
						from.setDate(from.getDate()+1);       
						i++;  
					}       
					  
				}
				return data;
}
//设置最大输入长度
 //字数限制
window.onload = function() {       
    try{
        //（document）
        document.getElementById('note').onkeyup = function() {        
        	document.getElementById('text-count').innerHTML=this.value.length;
            this.value=this.value.substring(0, 3000);
      	}
   	 	//（jquery）
      	$('#note2').keyup(function() {
        	//    var val=$('#note2').val();
        	//    var len=val.length;
        	var len=this.value.length;
            $('#text-count2').text(len);
        })
        $('#note3').keyup(function() {
        	//    var val=$('#note2').val();
        	//    var len=val.length;
        	var len=this.value.length;
            $('#text-count3').text(len);

        })
    }catch(e){
        	
    }
}

//上传图片
//function upfile(obj){
//	var ui = obj.parentNode.parentNode;
//	var placeholder = document.createElement('div');
//	var href = document.createElement('a');
//	href.href = '####';
//	var img = document.createElement('img');
//	placeholder.setAttribute('class', 'image-item');
//	var closeButton = document.createElement('div');
//	closeButton.setAttribute('class', 'image-close');
//	closeButton.innerHTML = 'X';
//	closeButton.addEventListener('click', function(event) {
//		event.stopPropagation();
//		event.cancelBubble = true;
//		setTimeout(function() {
//				ui.removeChild(placeholder);
//			}, 0);
//	},false)
//	var file = obj.files[0];
//	if(file){
//		var reader = new FileReader();
//		reader.readAsDataURL(file);
//		reader.onload = function(e){
//			 base64Code=this.result;
//			 img.setAttribute("src",base64Code);
			 
//		}
//	}
//	img.addEventListener('click',function(event){
//		href.href = "#account";
//		var picture = document.getElementById("picture");
//		picture.src = img.src;
//	})
//	placeholder.appendChild(closeButton);
//	placeholder.appendChild(href);
//	href.appendChild(img);
//	ui.insertBefore(placeholder,obj.parentNode);
//}

//生成一个GUID
function guid() {  
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {  
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);  
        return v.toString(16);  
    });  
}
//获取当前的时分秒的字符串
function getDatestring(){
	var myDate = new Date(); 
	var ret = ""+myDate.getFullYear()+myDate.getMonth()+myDate.getDate()
			  +myDate.getHours()+myDate.getMinutes()+myDate.getSeconds()+myDate.getMilliseconds();
	return ret;
} 
//获取url后面的参数
function getUrlParam(name)
{
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	if (r!=null) return unescape(r[2]); return null; //返回参数值
} 
//获取当前时间转成指定格式
function getDateTime(){
	var date = new Date();
	var ret = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+
			  date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+":"+date.getMilliseconds();
	return ret;
}
//取出空格换行
function Trim(str){
	var reg =/(\n)|(\t)/g;
	str = str.replace(reg,"");
	return str;
}

//上传图片
function upload(event){
	var Initi05 = {
		"Initi05OID":"",
		"SYS_Created":"",
		"Initi05_01":"",
		"Initi05_02":"",
		"FileName_ALL":"",
		"Initi05_07":"",
		"SYS_CreatedBy":"00000000-0000-0000-0000-000000000001",
		"BusinessKey":"",
		"TableLX":"",
		"tag":""
		}
	var el = event.currentTarget;
	var datestring = getDatestring();
	var file = el.files[0];
	var filename = file.name;
	var name = filename.split(".");
			
	Initi05.Initi05OID = guid();
	Initi05.SYS_Created = getDateTime();
	Initi05.Initi05_01 = datestring;
	Initi05.Initi05_02 = name[0]+"("+datestring+")";
	Initi05.Initi05_07 = "."+name[1];
	Initi05.tag = "add";
	if(file){
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function(e){
			base64Code = reader.result;
			Initi05.FileName_ALL = base64Code;
		}
	}
	return Initi05;
}


function sendRequest(serverPath,data){
	var xhr = new plus.net.XMLHttpRequest();
	
	xhr.open( "POST",serverPath);
	xhr.withCredentials = true; 
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	xhr.send('json='+JSON.stringify(data));
	return xhr;
}

//获取当前时间转成指定格式
function getDate(){
	var date = new Date();
	var ret = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+
			  date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
	return ret;
}