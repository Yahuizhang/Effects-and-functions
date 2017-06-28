window.onload=function(){
	var btns=document.getElementsByTagName("button");// 获取所有的button元素
    for(var i=0;i<btns.length;i++){
    	btns[i].onclick=function(){
    		var val=this.value;  // 获取单击按钮时的可得到的value
    		switch(val){
    			case"=":
    			    calculate();
    			    break;
    		    case"C":
    		        document.getElementById("result").innerHTML="0";
    			    break;
    			default: 
    			    var result=document.getElementById("result");
                    if(result.innerHTML==0){
                       result.innerHTML="";
                    }
                    result.innerHTML += val;    
    		        break;
            } 
        }
    }
}
 
    function calculate(){
    	var sum=document.getElementById("result").innerHTML;
    	var jieguo=eval(sum);  //能将字符串作为代码执行
        jieguo=Math.round(result*=100);
        document.getElementById("result").innerHTML=result/100;
        // document.getElementById("result").innerHTML=jg;
        // var aa=jg.substr(jg.indexOf("."),2);
        // document.getElementById("result").innerHTML=aa;
     } 