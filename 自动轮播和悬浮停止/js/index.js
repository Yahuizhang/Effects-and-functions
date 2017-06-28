/**
 * Created by Administrator on 2016/10/25.
 */
$(document).ready(function(){
    //文字滚动
    var speed=20;
    var demo2=document.getElementById("scrolList2");
    var demo1=document.getElementById("scrolList1");
    var demo=document.getElementById("scrolList");

    demo2.innerHTML=demo1.innerHTML;   //此时demo2中的内容与demo1中的全部相同

    demo.scrollTop=demo.scrollHeight;
    //console.log(demo2.offsetTop);

    function MarqueeUp(){
        if(demo2.offsetTop-demo.scrollTop<=0){
            demo.scrollTop-=demo2.offsetHeight;
        }
        else{
            demo.scrollTop++;
        }
    }

    var MyMar=setInterval(MarqueeUp,speed);
    demo.onmouseover=function(){
        clearInterval(MyMar);
    };
    demo.onmouseout=function(){
        MyMar=setInterval(MarqueeUp,speed);
    }



});