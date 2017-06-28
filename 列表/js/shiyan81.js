window.onload=function(){
	var dians=document.getElementsByName('dian');
	var nv=document.getElementById("gril");
	var zu1=document.getElementById("zu1");
	var zu2=document.getElementById("zu2");
	var zu3=document.getElementById("zu3");
	var zus=document.getElementsByName("zu");
		
		for (var i = 0; i < dians.length; i++) {

			dians[i].onclick=function(){
				var id=this.id;
				if (zus[id].style.display=="none") {
					zus[id].style.display="block"
				}
				else{
					zus[id].style.display="none"
				}
			}
		}
	
	nv.onclick=function(){
		var n=0;
		if (dians[n].style.display=="none") {
			for(var i=0;i<dians.length;i++){
				dians[i].style.display="block";
			}       
		}else{
			for(var j=0;j<dians.length;j++){
				dians[j].style.display="none";
				zus[j].style.display="none";
			}
		}

		n++;

	}

}