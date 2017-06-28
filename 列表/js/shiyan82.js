window.onload=function(){
	var lis=document.getElementsByName('dian');
	var uls=document.getElementsByName("erji");
	for(var i=0;i<lis.length;i++){
		lis[i].onclick=function(){
			for(var j=0;j<uls.length;j++){
				uls[j].style.display="none";
			}
			    uls[this.id].style.display="block";
		}
	}
}