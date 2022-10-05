
var omitformtags=["input", "textarea", "select"]

omitformtags=omitformtags.join("|")

function disableselect(e){ 
if (omitformtags.indexOf(e.target.tagName.toLowerCase())==-1) 
return false 
}

function reEnable(){ 
return true 
}

if (typeof document.onselectstart!="undefined") 
document.onselectstart=new Function ("return false") 
else{ 
document.onmousedown=disableselect 
document.onmouseup=reEnable 
}
function stop(){ 
return false; 
} 
document.oncontextmenu=stop; 

	function click(e) {
		if (document.layers) {
			if (e.which == 3) {
				oncontextmenu='return false';
			}
		}
	}
	if (document.layers) {
		document.captureEvents(Event.MOUSEDOWN);
	}
	document.onmousedown=click;
	document.oncontextmenu = new Function("return false;")
	document.onkeydown =document.onkeyup = document.onkeypress=function(){ 
		if(window.event.keyCode == 123) { 
			window.event.returnValue=false;
			return(false); 
		} 
	}
