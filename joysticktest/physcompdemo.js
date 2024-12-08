window.onload= function(){
const leftJ = document.getElementById("leftJ");
const rightJ = document.getElementById("rightJ");
const lefty = document.getElementById("lefty");
const right = document.getElementById("right");
const xpos = document.getElementById("xpos");
const info = document.getElementById("info");

   xpos.value = "test";	

var lx1 = lefty.getBoundingClientRect().left;
var lx2 = lefty.getBoundingClientRect().right;
var ly1 = lefty.getBoundingClientRect().top;
var ly2 = lefty.getBoundingClientRect().bottom;
var rx1 = right.getBoundingClientRect().left;
var rx2 = right.getBoundingClientRect().right;
var ry1 = right.getBoundingClientRect().top + window.pageYOffset;
var ry2 = right.getBoundingClientRect().bottom + window.pageYOffset;	
var jlT = leftJ.getBoundingClientRect().top + window.pageYOffset;
var jlL = leftJ.getBoundingClientRect().left;
var jlW = leftJ.getBoundingClientRect().width;
var jrT = rightJ.getBoundingClientRect().top + window.pageYOffset;
var jrL = rightJ.getBoundingClientRect().left;
var jrW = rightJ.getBoundingClientRect().width;	

	
window.addEventListener("resize",(event) => {

	lx1 = lefty.getBoundingClientRect().left;
	lx2 = lefty.getBoundingClientRect().right;
	ly1 = lefty.getBoundingClientRect().top;
	ly2 = lefty.getBoundingClientRect().bottom;
	rx1 = right.getBoundingClientRect().left;
	rx2 = right.getBoundingClientRect().right;
	ry1 = right.getBoundingClientRect().top + window.pageYOffset;
	ry2 = right.getBoundingClientRect().bottom + window.pageYOffset;	
	jlT = leftJ.getBoundingClientRect().top + window.pageYOffset;
	jlL = leftJ.getBoundingClientRect().left;
	jlW = leftJ.getBoundingClientRect().width;
	jrT = rightJ.getBoundingClientRect().top + window.pageYOffset;
	jrL = rightJ.getBoundingClientRect().left;
	jrW = rightJ.getBoundingClientRect().width;	
	
	leftJ.style.left = jlL + 'px';
	rightJ.style.left = jrL + 'px';
	rightJ.style.top = jrT + 'px';

	
});	
	
var draggingL = "";
var lshiftX = 0;
var lshiftY = 0;

var draggingR = "";
var rshiftX = 0;
var rshiftY = 0;
	
info.value = "top: " + rx1 + "bottom: " + rx2;

leftHandlers("leftJ");
rightHandlers("rightJ");
	
window.onmouseup = allDragEnd;
	
function allDragEnd(event){
	draggingL = "";
	draggingR = "";
	rightJ.style.left = jrL + 'px';
	rightJ.style.top = jrT + 'px';
	leftJ.style.left = jlL + 'px';
	leftJ.style.top = jlT + 'px';
}

function leftHandlers(name) {
  // Install event handlers for the given element
  const el = document.getElementById(name);
  el.addEventListener("touchstart", startL);	
  el.addEventListener("touchmove", moveL);	
  el.addEventListener("touchend", endL);	
  el.addEventListener("touchcancel", endL);	

	//  el.ontouchstart = startL;
//  el.ontouchmove = moveL;
  // Use same handler for touchcancel and touchend
  el.ontouchcancel = endL;
  el.ontouchend = endL;
  el.onmousedown = dragStartL;
  el.onmouseup = dragEndL;
  el.onmousemove = dragL;
//  el.onmouseleave = dragEndL;
}

function rightHandlers(name) {
  // Install event handlers for the given element
  const el = document.getElementById(name);
  el.ontouchstart = startR;
  el.ontouchmove = moveR;
  // Use same handler for touchcancel and touchend
  el.ontouchcancel = endR;
  el.ontouchend = endR;
  el.onmousedown = dragStartR;
  el.onmouseup = dragEndR;
  el.onmousemove = dragR;
//  el.onmouseleave = dragEndR;
}
	
function startL(event){
	event.preventDefault();
	const touches = event.changedTouches;
//	xpos.value = "touch start";
	for (let i = 0; i < touches.length; i++) {
		if (touches[i].target == leftJ){
			var rect = touches[i].target.getBoundingClientRect();
			lshiftX = touches[i].clientX - rect.left; //x position within the element.
			lshiftY = touches[i].clientY - rect.top;  //y position within the element.

			draggingL = touches[i].target;
		}
	}
}

function moveL(event){
	event.preventDefault();
	xpos.value = "touch move";
	const touches = event.changedTouches;
	for (let i = 0; i < touches.length; i++) {
		if (touches[i].target == leftJ){

			  var rect = touches[i].target.getBoundingClientRect();
			  var X = touches[i].pageX;
			  var Y = touches[i].pageY;
			  var newX = X-lshiftX;
			  var newY = Y-lshiftY;

			   if (newX < lx1){
				  newX = lx1;
			   }

			   if (newY < ly1){
				  newY = ly1;
			   }

			   if ((newX + jlW) > lx2){
				   newX = lx2-jlW;
			   }

			   if (Y >  ly2){
				  newY = ly2;
			   }

			   touches[i].target.style.left = (newX ) + 'px';
			//   event.target.style.top = newY - shiftY + 'px';
			   xpos.value = "xpos :" + X + " newX: " + newX + "\nshifted: " + lshiftX;
			 }
		
		}

}

function endL(event){
	draggingL = "";
	leftJ.style.left = jlL + 'px';
}

function startR(event){
	
}

function moveR(event){
	
}

function endR(event){
	
}

function dragL(event){  
 if(event.target == draggingL){
  var rect = event.target.getBoundingClientRect();
  var X = event.pageX;
  var Y = event.pageY;
  var newX = X-lshiftX;
  var newY = Y-lshiftY;

   if (newX < lx1){
      newX = lx1;
   }

   if (newY < ly1){
      newY = ly1;
   }

   if ((newX + jlW) > lx2){
       newX = lx2-jlW;
   }

   if (Y >  ly2){
      newY = ly2;
   }

   event.target.style.left = (newX ) + 'px';
//   event.target.style.top = newY - shiftY + 'px';
   xpos.value = "xpos :" + X + " newX: " + newX + "\nshifted: " + lshiftX;
 }
}


function dragStartL(event){
    var rect = event.target.getBoundingClientRect();
    lshiftX = event.clientX - rect.left; //x position within the element.
    lshiftY = event.clientY - rect.top;  //y position within the element.

	if (draggingL == ""){
		draggingL = event.target;
		xpos.value = "shiftX: " + lshiftX + "shiftY: " + lshiftY;
	}
}

function dragEndL(event){
	draggingL = "";
	event.target.style.left = jlL + 'px';

}
	
function dragR(event){  
 if(event.target == draggingR){
  var rect = event.target.getBoundingClientRect();
  var X = event.pageX;
  var Y = event.pageY;
  var newX = X-rshiftX;
  var newY = Y-rshiftY;

   if (newX < rx1){
      newX = rx1;
   }

   if (newY < ry1){
      newY = ry1;
   }

   if ((newX + jrW) > rx2){
       newX = rx2-jrWX;
   }

   if ((newY + jrW)>  ry2){
      newY = ry2-jrW;
   }

   event.target.style.left = (newX ) + 'px';
   event.target.style.top = (newY ) + 'px';
	 //   event.target.style.top = newY - shiftY + 'px';
   xpos.value = "ypos :" + Y + " newY: " + newY + "\nshifted: " + rshiftY;
 }
}

function dragStartR(event){
    var rect = event.target.getBoundingClientRect();
    rshiftX = event.clientX - rect.left; //x position within the element.
    rshiftY = event.clientY - rect.top;  //y position within the element.

	if (draggingR == ""){
		draggingR = event.target;
		xpos.value = "shiftX: " + rshiftX + "shiftY: " + rshiftY;
	}
}
//xpos.value = "xpos :";

function dragEndR(event){
	draggingR = "";
	event.target.style.left = jrL + 'px';
	event.target.style.top = jrT + 'px';

}


}