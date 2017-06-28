window.onload=function(){
	var imgDiv=document.getElementById("shang");
	var imgs=imgDiv.getElementsByTagName('img');
	var datu=document.getElementById("datu");
	for(var i in imgs){
		imgs[i].onclick=function(){
            datu.src=this.src;
		}
	}
}




