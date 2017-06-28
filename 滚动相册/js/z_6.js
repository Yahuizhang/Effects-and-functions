window.onload=function(){
	var jpg=document.getElementsByName('jpg');
	var centDiv=document.getElementById("cent");
	var tuDiv=document.getElementById("tudiv");
	var img=document.getElementById("img");
    
    function gd(){            
	        if (centDiv.scrollLeft<tuDiv.offsetWidth-900) {
	             centDiv.scrollLeft+=3;            
	        }else{
	        	centDiv.scrollLeft=0;
	        }
    }
	 var se=setInterval(gd,15);
	for(var i in jpg){
		jpg[i].onmouseover=function(){
			clearInterval(se);			
		}
		jpg[i].onmouseout=function(){
			se=setInterval(gd,10);			
		}

		jpg[i].onclick=function(){
            var id=this.id;
            img.src=this.src;

         }
	}





}