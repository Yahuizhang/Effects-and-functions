window.onload=function(){

      var images=document.getElementsByTagName('img'); 
      for (var i = 0; i < images.length; i++) {
      	
         images[i].onclick=function(){

               var textarea=document.getElementById("textarea")
               
                  switch(this.id){
                        case"1":textarea.innerHTML="较差";
                               break;
                        case"2":textarea.innerHTML="一般";
                               break;
                        case"3":textarea.innerHTML="较好";
                               break;
                        case"4":textarea.innerHTML="好";
                               break;
                        case"5":textarea.innerHTML="非常好";
                               break;

                  }

               for (var j1 = 1; j1 <=this.id; j1++) {
         	        var img=document.getElementById(j1);
         	        img.src="images/star4.gif";      	        
               };

               for (var j2 =Number(this.id)+1; j2 <=5; j2++) {
         	        var img=document.getElementById(j2);
         	        img.src="images/star3.gif";      	        
               };

               // var textarea=document.getElementsByTagName("textarea");
               //    switch(this.id){
               //          case"1":textarea.innerHTML="较差";
               //                 break;
               //          case"2":textarea.innerHTML="一般";
               //                 break;
               //          case"3":textarea.innerHTML="较好";
               //                 break;
               //          case"4":textarea.innerHTML="好";
               //                 break;
               //          case"5":textarea.innerHTML="非常好";
               //                 break;

               //    }



         }

        
      };

      

}