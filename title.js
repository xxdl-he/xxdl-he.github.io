var OriginTitile = document.title;    // 保存之前页面标题  
var titleTime;  
document.addEventListener('visibilitychange', function(){  
    if (document.hidden){  
        document.title ='你不要我啦？ TT';  
        clearTimeout(titleTime);  
    }else{  
        document.title = '略略略 你回来啦 ';  
        titleTime = setTimeout(function() {  
            document.title = OriginTitile;  
        }, 3000); 
    }  
});  