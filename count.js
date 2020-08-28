window.onload=countdown;
function countdown(){
    //获取客户端时间
    var today=new Date();
    //当前距离1970年的毫秒数
    var oldTime = today.getTime();
    var newDate = new Date(2023,5,6,9,00,0); 
    //月数-1
    var newTime = newDate.getTime();
    
    //截止时间距离现在的秒数
    var second = Math.floor((newTime - oldTime) / 1000);
    //设置remainSecond的目的是：如果倒计时结束该执行的方法或事件
    var remainSecond = second;
    //86400代表的是天；一天有24*60*60=86400秒 ；
    var day = Math.floor(second / 86400);
    second %= 86400;//余数代表剩下的秒数；
    var hour = Math.floor(second / 3600);//3600代表小时；
    second %= 3600; //余数代表 剩下的秒数；
    var minute = Math.floor(second / 60);
    second %= 60;
    var str = formatType(day) + '<span class="time">Days</span>'
        + formatType(hour) + '<span class="time">Hours</span>'
        + formatType(minute) + '<span class="time">Mins</span>'
        + formatType(second) + '<span class="time">s</span>';
	    if(remainSecond >0){
	    	document.getElementById("zkdjs").innerHTML=("<font color=#426783>"+str+"</font>");
	    }else{
	    	//设置你的事件或者函数
	    }
   		//500的目的是防止漏掉执行
	    setTimeout(countdown,500);
	}
//设置显示格式，小于10的填0
function formatType(n) {
    return n >= 0 && n < 10 ? '0' + n : '' + n;
  }