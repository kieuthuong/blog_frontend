function myFunction() {
		    var x = document.getElementById("myTopnav");
		    if (x.className === "topnav") {
		        x.className += " responsive";
		    } else {
		        x.className = "topnav";
		    }
		}


$(function(){
	$("#swap").click(function(){
		var div1=$('#address1');
		var div2=$('#address2');
		var tdiv1=div1.clone();
		var tdiv2=div2.clone();
		div1.replaceWith(tdiv2);
		div2.replaceWith(tdiv1);
	})
})
		
	