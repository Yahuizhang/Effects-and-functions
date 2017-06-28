/**
 * Created by Administrator on 2016/11/4.
 */
$(document).ready(function(){
    $(".div1 ul li").bind("mouseenter mouseleave",function(e){
        var w=$(this).width();
        var h=$(this).height();
        var x=(e.pageX-this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);       //offset获取的是相对于父对象的左边距
        var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        var eventType= e.type;
        var dirName=new Array('top','right','bottom','left');
        if(e.type=="mouseenter"){
            //$(this).html(dirName[direction]+'进入');
            if(dirName[direction]=="top"){
                //$(this).children(".mask").addClass("top");
                console.log(this);
                console.log("top");
            }
            if(dirName[direction]=="left"){
                //$(this).children(".mask").addClass("left");
                $(this).children('img').append("<div class='mask'></div>");
                console.log('left');
            }
            if(dirName[direction]=="right"){

            }
            if(dirName[direction]=="bottom"){

            }

        }else{

            //$(this).html(dirName[direction]+'离开');
        }

        switch (direction) {
            case 0:
                $(this).html('上方进入');
                break;
            case 1:
                $(this).html('右侧进入');
                break;
            case 2:
                $(this).html('下方进入');
                break;
            case 3:
                $(this).html('左侧进入');
                break;
        }

    });




});