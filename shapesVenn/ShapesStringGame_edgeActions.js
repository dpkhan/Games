/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      var count = 0;
      var labelCount = 0;
      var incorrectCount = 0;
      var count0 = 100;
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         yepnope(
         {
         nope:[
         // loads the external JQuery Ui for dragging and dropping
         'jquery-ui-1.10.3.custom.min.js',
         'jquery.ui.touch-punch.min.js'
         ],
         complete: init
         
         
         });
         
         function init(){
         
	 	var choices = [	'bigredcircle','smallredcircle', 'bigyellowcircle', 'smallyellowcircle',
							'bigbluecircle', 'smallbluecircle', 'biggreencircle', 'smallgreencircle',
							'bigredsquare', 'smallredsquare', 'bigyellowsquare', 'smallyellowsquare',
							'bigbluesquare', 'smallbluesquare', 'biggreensquare', 'smallgreensquare',
							'bigredtri', 'smallredtri', 'bigyellowtri', 'smallyellowtri',
							'bigbluetri', 'smallbluetri', 'biggreentri', 'smallgreentri'  ];


         var selectArray = [		[1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
         								[0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1],
         								[0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0],
         								[1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1],
         								[0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0],
         								[1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1],
         								[0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1],
         								[1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0],
         								[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         								[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
         								[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
         								[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],
         								[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],
         								[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
         								[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
         								[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]		];

         var r = Math.floor((Math.random()*16)+1);
         var b = Math.floor((Math.random()*16)+1);

	      var mask = [1,2,4,8,16,32];
   	   var flags = new Array(24);


         var xpos = 0;
	      var ypos = 0;
   	   var width = 0;
      	var height = 0;
      	var temp;
      	count = 0;
      	labelCount = 0;
      	incorrectCount = 0;
      	correctCount = 0;


     		blueW = sym.$("blueString").width() * 0.5;
			blueH = sym.$("blueString").height()* 0.5;
			blueX = sym.$("blueString").position().left + blueW;
			blueY = sym.$("blueString").position().top + blueH;

			redW = sym.$("redString").width() * 0.5;
			redH = sym.$("redString").height()* 0.5;
			redX = sym.$("redString").position().left + redW;
			redY = sym.$("redString").position().top + redH;
			
			outsideY = 458;


         while (r == b)
         {
         	b = Math.floor((Math.random()*16)+1);
         }
         selector = new Array(24);
         blueDone = 0;
         redDone = 0;

         //         sym.getSymbol("mult2s").$("redcross").hide('true');

         for(var i=0; i< 24; i++) {
             selector[i] = selectArray[r][i] + 2*selectArray[b][i];
         };
         		         			sym.$('testingCopy').html(selector); 

         // apply the draggable JQuery UI plugin to the MyDraggableSymbol symbol on your stage

      	sym.$(choices[0]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[0]){
        				if ((mask[temp] & flags[0]) == 0)
      	 			{
         				flags[0] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[0]){
         			count++;
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};

         		return false;

					} else
         		{
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

      	sym.$(choices[1]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[1]){
        				if ((mask[temp] & flags[1]) == 0)
      	 			{
         				flags[1] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[1]){
         			count++; 
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};
	         		return false;
					} else {
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

      	sym.$(choices[2]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[2]){
        				if ((mask[temp] & flags[2]) == 0)
      	 			{
         				flags[2] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[2]){
         			count++; 
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};
	         		return false;
					} else {
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

      	sym.$(choices[3]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[3]){
        				if ((mask[temp] & flags[3]) == 0)
      	 			{
         				flags[3] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[3]){
         			count++;
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};
	         		return false;
					} else {
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

      	sym.$(choices[4]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[4]){
        				if ((mask[temp] & flags[4]) == 0)
      	 			{
         				flags[4] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[4]){
         			count++;
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};
	         		return false;
					} else {
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

      	sym.$(choices[5]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[5]){
        				if ((mask[temp] & flags[5]) == 0)
      	 			{
         				flags[5] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[5]){
         			count++;
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};
	         		return false;
					} else {
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

      	sym.$(choices[6]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[6]){
        				if ((mask[temp] & flags[6]) == 0)
      	 			{
         				flags[6] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[6]){
         			count++;
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};
	         		return false;
					} else {
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

      	sym.$(choices[7]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[7]){
        				if ((mask[temp] & flags[7]) == 0)
      	 			{
         				flags[7] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[7]){
         			count++;
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};
	         		return false;
					} else {
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

      	sym.$(choices[8]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[8]){
        				if ((mask[temp] & flags[8]) == 0)
      	 			{
         				flags[8] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[8]){
         			count++;
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};
	         		return false;
					} else {
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

      	sym.$(choices[9]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[9]){
        				if ((mask[temp] & flags[9]) == 0)
      	 			{
         				flags[9] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[9]){
         			count++;
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};
         		return false;
					} else {
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

      	sym.$(choices[10]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[10]){
        				if ((mask[temp] & flags[10]) == 0)
      	 			{
         				flags[10] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[10]){
         			count++;
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};
	         		return false;
					} else {
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

      	sym.$(choices[11]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[11]){
        				if ((mask[temp] & flags[11]) == 0)
      	 			{
         				flags[11] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[11]){
         			count++;
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};
	         		return false;
					} else {
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

      	sym.$(choices[12]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[12]){
        				if ((mask[temp] & flags[12]) == 0)
      	 			{
         				flags[12] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[12]){
         			count++;
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};
	         		return false;
					} else {
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

      	sym.$(choices[13]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[13]){
        				if ((mask[temp] & flags[13]) == 0)
      	 			{
         				flags[13] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[13]){
         			count++;
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};
	         		return false;
					} else {
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

      	sym.$(choices[14]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[14]){
        				if ((mask[temp] & flags[14]) == 0)
      	 			{
         				flags[14] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[14]){
         			count++;
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};
	         		return false;
					} else {
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

      	sym.$(choices[15]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[15]){
        				if ((mask[temp] & flags[15]) == 0)
      	 			{
         				flags[15] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[15]){
         			count++;
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};
	         		return false;
					} else {
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

      	sym.$(choices[16]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[16]){
        				if ((mask[temp] & flags[16]) == 0)
      	 			{
         				flags[16] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[16]){
         			count++;
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};
	         		return false;
					} else {
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

      	sym.$(choices[17]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[17]){
        				if ((mask[temp] & flags[17]) == 0)
      	 			{
         				flags[17] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[17]){
         			count++;
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};
	         		return false;
					} else {
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

      	sym.$(choices[18]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[18]){
        				if ((mask[temp] & flags[18]) == 0)
      	 			{
         				flags[18] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[18]){
         			count++;
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};
	         		return false;
					} else {
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

      	sym.$(choices[19]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[19]){
        				if ((mask[temp] & flags[19]) == 0)
      	 			{
         				flags[19] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[19]){
         			count++;
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};
	         		return false;
					} else {
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

      	sym.$(choices[20]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[20]){
        				if ((mask[temp] & flags[20]) == 0)
      	 			{
         				flags[20] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[20]){
         			count++;
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};
	         		return false;
					} else {
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

      	sym.$(choices[21]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[21]){
        				if ((mask[temp] & flags[21]) == 0)
      	 			{
         				flags[21] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[21]){
         			count++;
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};
	         		return false;
					} else {
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

      	sym.$(choices[22]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[22]){
        				if ((mask[temp] & flags[22]) == 0)
      	 			{
         				flags[22] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[22]){
         			count++;
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};
	         		return false;
					} else {
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

      	sym.$(choices[23]).draggable({ 
         	start: function(e,ui){	width = $(ui.helper).width()*0.5; 
         									height = $(ui.helper).height()*0.5;
											}, 
         	drag: function(e,ui){xpos = ui.position.left, ypos = ui.position.top}, 
         	stop: function(e,ui){
         	if(ui.position.top < outsideY){
               ++incorrectCount;
               sym.$('incorrectCount').html(incorrectCount);
               sym.$('score').html(getScore());
        			if (temp != selector[23]){
        				if ((mask[temp] & flags[23]) == 0)
      	 			{
         				flags[23] |= mask[temp];
         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
						};
					};
         	}},
         	revert: function (){
         		temp = stringTest((xpos+width), (ypos+height));
					if (temp == selector[23]){
         			count++;
         			incorrectCount--;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
						if (count == 24){
							sym.$('labelText').show('true')
							};
	         		return false;
					} else {
         			return true;
         		};
         	}
         }).css('touch-action', 'none');

		/*			

         sym.$('bigredcircle').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[0] }).css('touch-action', 'none');
         sym.$('smallredcircle').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[1] }).css('touch-action', 'none');
         sym.$('bigyellowcircle').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[2] }).css('touch-action', 'none');
         sym.$('smallyellowcircle').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[3] }).css('touch-action', 'none');
         sym.$('bigbluecircle').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[4] }).css('touch-action', 'none');
         sym.$('smallbluecircle').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[5] }).css('touch-action', 'none');
         sym.$('biggreencircle').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[6] }).css('touch-action', 'none');
         sym.$('smallgreencircle').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[7] }).css('touch-action', 'none');
         sym.$('bigredsquare').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[8] }).css('touch-action', 'none');
         sym.$('smallredsquare').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[9] }).css('touch-action', 'none');
         sym.$('bigyellowsquare').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[10] }).css('touch-action', 'none');
         sym.$('smallyellowsquare').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[11] }).css('touch-action', 'none');
         sym.$('bigbluesquare').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[12] }).css('touch-action', 'none');
         sym.$('smallbluesquare').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[13] }).css('touch-action', 'none');
         sym.$('biggreensquare').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[14] }).css('touch-action', 'none');
         sym.$('smallgreensquare').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[15] }).css('touch-action', 'none');
         sym.$('bigredtri').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[16] }).css('touch-action', 'none');
         sym.$('smallredtri').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[17] }).css('touch-action', 'none');
         sym.$('bigyellowtri').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[18] }).css('touch-action', 'none');
         sym.$('smallyellowtri').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[19] }).css('touch-action', 'none');
         sym.$('bigbluetri').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[20] }).css('touch-action', 'none');
         sym.$('smallbluetri').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[21] }).css('touch-action', 'none');
         sym.$('biggreentri').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[22] }).css('touch-action', 'none');
         sym.$('smallgreentri').draggable({ start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++incorrectCount; sym.$('incorrectCount').html(incorrectCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: selector[23] }).css('touch-action', 'none');

         sym.$("out1").droppable({scope: 0, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("out2").droppable({scope: 0, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("out3").droppable({scope: 0, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("out4").droppable({scope: 0, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("out5").droppable({scope: 0, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("out6").droppable({scope: 0, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("out7").droppable({scope: 0, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("out8").droppable({scope: 0, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("out9").droppable({scope: 0, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("out10").droppable({scope: 0, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("out11").droppable({scope: 0, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("out12").droppable({scope: 0, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });

         sym.$("red1").droppable({scope: 1, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("red2").droppable({scope: 1, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("red3").droppable({scope: 1, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("red4").droppable({scope: 1, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("red5").droppable({scope: 1, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("red6").droppable({scope: 1, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("red7").droppable({scope: 1, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("red8").droppable({scope: 1, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("red9").droppable({scope: 1, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });

         sym.$("blue1").droppable({scope: 2, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("blue2").droppable({scope: 2, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("blue3").droppable({scope: 2, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("blue4").droppable({scope: 2, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("blue5").droppable({scope: 2, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("blue6").droppable({scope: 2, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("blue7").droppable({scope: 2, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("blue8").droppable({scope: 2, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("blue9").droppable({scope: 2, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });

         sym.$("both1").droppable({scope: 3, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("both2").droppable({scope: 3, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("both3").droppable({scope: 3, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("both4").droppable({scope: 3, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("both5").droppable({scope: 3, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("both6").droppable({scope: 3, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
         sym.$("both7").droppable({scope: 3, drop: function(e,ui){ count++; sym.$('correctCount').html(count); sym.$('score').html(100-(labelCount*5+incorrectCount+count)); if (count == 30){sym.$('labelText').show('true');}; ui.draggable("disable"); } });
*/
         sym.$("bluechoice").droppable({scope : (b+10) , drop: function(e,ui){blueDone = 1; if (redDone==1){sym.$('stringCount').html("2");sym.$('labelText').hide('true'); sym.$('lowerBackground2').show('true'); sym.$('testout').show('true');sym.$("*").draggable("disable");}else{sym.$('stringCount').html("1")}; ui.draggable("disable"); ui.draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++labelCount; sym.$('labelCount').html(labelCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: 24 }).css('touch-action', 'none');} });
         sym.$("redchoice").droppable({scope : (r+10) , drop: function(e,ui){redDone = 1; if (blueDone==1){sym.$('stringCount').html("2");sym.$('labelText').hide('true'); sym.$('lowerBackground2').show('true'); sym.$('testout').show('true');sym.$("*").draggable("disable");}else{sym.$('stringCount').html("1")}; ui.draggable("disable"); ui.draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++labelCount; sym.$('labelCount').html(labelCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: 24 }).css('touch-action', 'none');} });

         sym.$('red').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){if(ui.position.top > 120){ ++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(getScore())}, revert:'invalid', scope: 10 }).css('touch-action', 'none');
         sym.$('notred').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.top > 120){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(getScore())}, revert:'invalid', scope: 11 }).css('touch-action', 'none');
			sym.$('yellow').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.top > 120){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(getScore())}, revert:'invalid', scope: 12 }).css('touch-action', 'none');
         sym.$('notyellow').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.top > 120){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(getScore())}, revert:'invalid', scope: 13 }).css('touch-action', 'none');
         sym.$('blue').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.top > 120){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(getScore())}, revert:'invalid', scope: 14 }).css('touch-action', 'none');
         sym.$('notblue').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.top > 120){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(getScore())}, revert:'invalid', scope: 15 }).css('touch-action', 'none');
         sym.$('green').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.top > 120){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(getScore())}, revert:'invalid', scope: 16 }).css('touch-action', 'none');
         sym.$('notgreen').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.top > 120){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(getScore())}, revert:'invalid', scope: 17 }).css('touch-action', 'none');
         sym.$('circle').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.top > 120){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(getScore())}, revert:'invalid', scope: 18 }).css('touch-action', 'none');
         sym.$('notcircle').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.top > 120){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(getScore())}, revert:'invalid', scope: 19 }).css('touch-action', 'none');
         sym.$('square').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.top > 120){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(getScore())}, revert:'invalid', scope: 20 }).css('touch-action', 'none');
         sym.$('notsquare').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.top > 120){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(getScore())}, revert:'invalid', scope: 21 }).css('touch-action', 'none');
         sym.$('triangle').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.top > 120){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(getScore())}, revert:'invalid', scope: 22 }).css('touch-action', 'none');
         sym.$('nottriangle').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.top > 120){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(getScore())}, revert:'invalid', scope: 23 }).css('touch-action', 'none');
         sym.$('big').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.top > 120){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(getScore())}, revert:'invalid', scope: 24 }).css('touch-action', 'none');
         sym.$('little').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.top > 120){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(getScore())}, revert:'invalid', scope: 25 }).css('touch-action', 'none');

         function labelString() {
         sym.$('labelText').show('true');
         };


         }

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         stringTest = function( symX, symY ){
         	var counter = 0;
         
         	if(symY < 498){
         		if (( Math.pow(((symY - blueY)/ blueH ),2)  + Math.pow(((symX - blueX)/blueW),2) ) < 1 ) 
         			counter += 2;
         
         		if (( Math.pow(((symY - redY)/ redH ),2)  + Math.pow(((symX - redX)/redW),2) ) < 1 ) 
         			counter += 1;
         
         		return counter;
         	} else
         	{
         		return -1;
         	}
         };
         
         getScore = function(){
         	return 100-(labelCount*5+ Math.max(incorrectCount+count-5,0));
         	//sym.$('score').html("test");
         };

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'posdiv12'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_bigt}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         // stop the timeline at the given position (ms or label)
         sym.stop(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bigt}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         // stop the timeline at the given position (ms or label)
         sym.stop(0);
         var redI = sym.$("redcross").zIndex();
         var blueI = sym.$("bluecross").zIndex();
         if (redI > 1)
         {
         	if (blueI > 1)
         	{
         		blueI = -1;
         		redI = -1;
         	} else
         	{
         		blueI = 100;
         		redI = -1;		
         	}
         }else
         {
         	if (blueI > 1)
         	{
         		blueI = 100;
         		redI = 100;		
         	}else
         	{
         		blueI = -1;
         		redI = 100;
         	}
         }
         
         sym.$("redcross").css("z-index",redI.toString());
         sym.$("bluecross").css("z-index",blueI.toString());

      });
      //Edge binding end

   })("big");
   //Edge symbol end:'big'

   //=========================================================
   
   //Edge symbol: 'mult5'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_YELLOW}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.stop(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_YELLOW}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.stop(0);
         var redI = sym.$("redcross").zIndex();
         var blueI = sym.$("bluecross").zIndex();
         if (redI > 1)
         {
         	if (blueI > 1)
         	{
         		blueI = -1;
         		redI = -1;
         	} else
         	{
         		blueI = 100;
         		redI = -1;		
         	}
         }else
         {
         	if (blueI > 1)
         	{
         		blueI = 100;
         		redI = 100;		
         	}else
         	{
         		blueI = -1;
         		redI = 100;
         	}
         }
         
         sym.$("redcross").css("z-index",redI.toString());
         sym.$("bluecross").css("z-index",blueI.toString());

      });
      //Edge binding end

   })("yellow");
   //Edge symbol end:'yellow'

   //=========================================================
   
   //Edge symbol: 'odd'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_BLUE}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.stop(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_BLUE}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.stop(0);
         var redI = sym.$("redcross").zIndex();
         var blueI = sym.$("bluecross").zIndex();
         if (redI > 1)
         {
         	if (blueI > 1)
         	{
         		blueI = -1;
         		redI = -1;
         	} else
         	{
         		blueI = 100;
         		redI = -1;		
         	}
         }else
         {
         	if (blueI > 1)
         	{
         		blueI = 100;
         		redI = 100;		
         	}else
         	{
         		blueI = -1;
         		redI = 100;
         	}
         }
         
         sym.$("redcross").css("z-index",redI.toString());
         sym.$("bluecross").css("z-index",blueI.toString());

      });
      //Edge binding end

   })("blue");
   //Edge symbol end:'blue'

   //=========================================================
   
   //Edge symbol: 'posdiv27'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_notSquare}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.stop(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_notSquare}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.stop(0);
         var redI = sym.$("redcross").zIndex();
         var blueI = sym.$("bluecross").zIndex();
         if (redI > 1)
         {
         	if (blueI > 1)
         	{
         		blueI = -1;
         		redI = -1;
         	} else
         	{
         		blueI = 100;
         		redI = -1;		
         	}
         }else
         {
         	if (blueI > 1)
         	{
         		blueI = 100;
         		redI = 100;		
         	}else
         	{
         		blueI = -1;
         		redI = 100;
         	}
         }
         
         sym.$("redcross").css("z-index",redI.toString());
         sym.$("bluecross").css("z-index",blueI.toString());

      });
      //Edge binding end

   })("notsquare");
   //Edge symbol end:'notsquare'

   //=========================================================
   
   //Edge symbol: 'posdiv24'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_SQUARE}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.stop(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SQUARE}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.stop(0);
         var redI = sym.$("redcross").zIndex();
         var blueI = sym.$("bluecross").zIndex();
         if (redI > 1)
         {
         	if (blueI > 1)
         	{
         		blueI = -1;
         		redI = -1;
         	} else
         	{
         		blueI = 100;
         		redI = -1;		
         	}
         }else
         {
         	if (blueI > 1)
         	{
         		blueI = 100;
         		redI = 100;		
         	}else
         	{
         		blueI = -1;
         		redI = 100;
         	}
         }
         
         sym.$("redcross").css("z-index",redI.toString());
         sym.$("bluecross").css("z-index",blueI.toString());

      });
      //Edge binding end

   })("square");
   //Edge symbol end:'square'

   //=========================================================
   
   //Edge symbol: 'posprime'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_notTriangle}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.stop(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_notTriangle}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.stop(0);
         var redI = sym.$("redcross").zIndex();
         var blueI = sym.$("bluecross").zIndex();
         if (redI > 1)
         {
         	if (blueI > 1)
         	{
         		blueI = -1;
         		redI = -1;
         	} else
         	{
         		blueI = 100;
         		redI = -1;		
         	}
         }else
         {
         	if (blueI > 1)
         	{
         		blueI = 100;
         		redI = 100;		
         	}else
         	{
         		blueI = -1;
         		redI = 100;
         	}
         }
         
         sym.$("redcross").css("z-index",redI.toString());
         sym.$("bluecross").css("z-index",blueI.toString());

      });
      //Edge binding end

   })("nottriangle");
   //Edge symbol end:'nottriangle'

   //=========================================================
   
   //Edge symbol: 'posdiv20'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_notCircle}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.stop(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_notCircle}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.stop(0);
         var redI = sym.$("redcross").zIndex();
         var blueI = sym.$("bluecross").zIndex();
         if (redI > 1)
         {
         	if (blueI > 1)
         	{
         		blueI = -1;
         		redI = -1;
         	} else
         	{
         		blueI = 100;
         		redI = -1;		
         	}
         }else
         {
         	if (blueI > 1)
         	{
         		blueI = 100;
         		redI = 100;		
         	}else
         	{
         		blueI = -1;
         		redI = 100;
         	}
         }
         
         sym.$("redcross").css("z-index",redI.toString());
         sym.$("bluecross").css("z-index",blueI.toString());

      });
      //Edge binding end

   })("notcircle");
   //Edge symbol end:'notcircle'

   //=========================================================
   
   //Edge symbol: 'posdiv18'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_CIRCLE}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.stop(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_CIRCLE}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.stop(0);
         var redI = sym.$("redcross").zIndex();
         var blueI = sym.$("bluecross").zIndex();
         if (redI > 1)
         {
         	if (blueI > 1)
         	{
         		blueI = -1;
         		redI = -1;
         	} else
         	{
         		blueI = 100;
         		redI = -1;		
         	}
         }else
         {
         	if (blueI > 1)
         	{
         		blueI = 100;
         		redI = 100;		
         	}else
         	{
         		blueI = -1;
         		redI = 100;
         	}
         }
         
         sym.$("redcross").css("z-index",redI.toString());
         sym.$("bluecross").css("z-index",blueI.toString());

      });
      //Edge binding end

   })("circle");
   //Edge symbol end:'circle'

   //=========================================================
   
   //Edge symbol: 'redString'
   (function(symbolName) {   
   
   })("redString");
   //Edge symbol end:'redString'

   //=========================================================
   
   //Edge symbol: 'blueString'
   (function(symbolName) {   
   
   })("blueString");
   //Edge symbol end:'blueString'

   //=========================================================
   
   //Edge symbol: 'outside'
   (function(symbolName) {   
   
   })("outside");
   //Edge symbol end:'outside'

   //=========================================================
   
   //Edge symbol: 'red5'
   (function(symbolName) {   
   
   })("red5");
   //Edge symbol end:'red5'

   //=========================================================
   
   //Edge symbol: 'blue5'
   (function(symbolName) {   
   
   })("blue5");
   //Edge symbol end:'blue5'

   //=========================================================
   
   //Edge symbol: 'blue9'
   (function(symbolName) {   
   
   })("blue9");
   //Edge symbol end:'blue9'

   //=========================================================
   
   //Edge symbol: 'blue8'
   (function(symbolName) {   
   
   })("blue8");
   //Edge symbol end:'blue8'

   //=========================================================
   
   //Edge symbol: 'blue7'
   (function(symbolName) {   
   
   })("blue7");
   //Edge symbol end:'blue7'

   //=========================================================
   
   //Edge symbol: 'blue6'
   (function(symbolName) {   
   
   })("blue6");
   //Edge symbol end:'blue6'

   //=========================================================
   
   //Edge symbol: 'blue3'
   (function(symbolName) {   
   
   })("blue3");
   //Edge symbol end:'blue3'

   //=========================================================
   
   //Edge symbol: 'blue1'
   (function(symbolName) {   
   
   })("blue1");
   //Edge symbol end:'blue1'

   //=========================================================
   
   //Edge symbol: 'blue4'
   (function(symbolName) {   
   
   })("blue4");
   //Edge symbol end:'blue4'

   //=========================================================
   
   //Edge symbol: 'blue2'
   (function(symbolName) {   
   
   })("blue2");
   //Edge symbol end:'blue2'

   //=========================================================
   
   //Edge symbol: 'red1'
   (function(symbolName) {   
   
   })("red1");
   //Edge symbol end:'red1'

   //=========================================================
   
   //Edge symbol: 'red3'
   (function(symbolName) {   
   
   })("red3");
   //Edge symbol end:'red3'

   //=========================================================
   
   //Edge symbol: 'red2'
   (function(symbolName) {   
   
   })("red2");
   //Edge symbol end:'red2'

   //=========================================================
   
   //Edge symbol: 'red4'
   (function(symbolName) {   
   
   })("red4");
   //Edge symbol end:'red4'

   //=========================================================
   
   //Edge symbol: 'red6'
   (function(symbolName) {   
   
   })("red6");
   //Edge symbol end:'red6'

   //=========================================================
   
   //Edge symbol: 'red7'
   (function(symbolName) {   
   
   })("red7");
   //Edge symbol end:'red7'

   //=========================================================
   
   //Edge symbol: 'red8'
   (function(symbolName) {   
   
   })("red8");
   //Edge symbol end:'red8'

   //=========================================================
   
   //Edge symbol: 'red9'
   (function(symbolName) {   
   
   })("red9");
   //Edge symbol end:'red9'

   //=========================================================
   
   //Edge symbol: 'both1'
   (function(symbolName) {   
   
   })("both1");
   //Edge symbol end:'both1'

   //=========================================================
   
   //Edge symbol: 'both2'
   (function(symbolName) {   
   
   })("both2");
   //Edge symbol end:'both2'

   //=========================================================
   
   //Edge symbol: 'both3'
   (function(symbolName) {   
   
   })("both3");
   //Edge symbol end:'both3'

   //=========================================================
   
   //Edge symbol: 'both4'
   (function(symbolName) {   
   
   })("both4");
   //Edge symbol end:'both4'

   //=========================================================
   
   //Edge symbol: 'both5'
   (function(symbolName) {   
   
   })("both5");
   //Edge symbol end:'both5'

   //=========================================================
   
   //Edge symbol: 'both6'
   (function(symbolName) {   
   
   })("both6");
   //Edge symbol end:'both6'

   //=========================================================
   
   //Edge symbol: 'both7'
   (function(symbolName) {   
   
   })("both7");
   //Edge symbol end:'both7'

   //=========================================================
   
   //Edge symbol: 'out1'
   (function(symbolName) {   
   
   })("out1");
   //Edge symbol end:'out1'

   //=========================================================
   
   //Edge symbol: 'out'
   (function(symbolName) {   
   
   })("out");
   //Edge symbol end:'out'

   //=========================================================
   
   //Edge symbol: 'out3'
   (function(symbolName) {   
   
   })("out3");
   //Edge symbol end:'out3'

   //=========================================================
   
   //Edge symbol: 'out5'
   (function(symbolName) {   
   
   })("out4");
   //Edge symbol end:'out4'

   //=========================================================
   
   //Edge symbol: 'out5'
   (function(symbolName) {   
   
   })("out5");
   //Edge symbol end:'out5'

   //=========================================================
   
   //Edge symbol: 'out6'
   (function(symbolName) {   
   
   })("out6");
   //Edge symbol end:'out6'

   //=========================================================
   
   //Edge symbol: 'out7'
   (function(symbolName) {   
   
   })("out7");
   //Edge symbol end:'out7'

   //=========================================================
   
   //Edge symbol: 'out8'
   (function(symbolName) {   
   
   })("out8");
   //Edge symbol end:'out8'

   //=========================================================
   
   //Edge symbol: 'out9'
   (function(symbolName) {   
   
   })("out9");
   //Edge symbol end:'out9'

   //=========================================================
   
   //Edge symbol: 'out10'
   (function(symbolName) {   
   
   })("out10");
   //Edge symbol end:'out10'

   //=========================================================
   
   //Edge symbol: 'out11'
   (function(symbolName) {   
   
   })("out11");
   //Edge symbol end:'out11'

   //=========================================================
   
   //Edge symbol: 'out12'
   (function(symbolName) {   
   
   })("out12");
   //Edge symbol end:'out12'

   //=========================================================
   
   //Edge symbol: 'redchoice'
   (function(symbolName) {   
   
   })("redchoice");
   //Edge symbol end:'redchoice'

   //=========================================================
   
   //Edge symbol: 'bluechoice'
   (function(symbolName) {   
   
   })("bluechoice");
   //Edge symbol end:'bluechoice'

   //=========================================================
   
   //Edge symbol: 'triangle'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_blank_tri}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         // stop the timeline at the given position (ms or label)
         sym.stop(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_blank_tri}", "mouseup", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);
         var redI = sym.$("redcross").zIndex();
         var blueI = sym.$("bluecross").zIndex();
         if (redI > 1)
         {
         	if (blueI > 1)
         	{
         		blueI = -1;
         		redI = -1;
         	} else
         	{
         		blueI = 100;
         		redI = -1;		
         	}
         }else
         {
         	if (blueI > 1)
         	{
         		blueI = 100;
         		redI = 100;		
         	}else
         	{
         		blueI = -1;
         		redI = 100;
         	}
         }
         
         sym.$("redcross").css("z-index",redI.toString());
         sym.$("bluecross").css("z-index",blueI.toString());
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_triangleT}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.stop(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_triangleT}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.stop(0);
         var redI = sym.$("redcross").zIndex();
         var blueI = sym.$("bluecross").zIndex();
         if (redI > 1)
         {
         	if (blueI > 1)
         	{
         		blueI = -1;
         		redI = -1;
         	} else
         	{
         		blueI = 100;
         		redI = -1;		
         	}
         }else
         {
         	if (blueI > 1)
         	{
         		blueI = 100;
         		redI = 100;		
         	}else
         	{
         		blueI = -1;
         		redI = 100;
         	}
         }
         
         sym.$("redcross").css("z-index",redI.toString());
         sym.$("bluecross").css("z-index",blueI.toString());

      });
      //Edge binding end

   })("triangle");
   //Edge symbol end:'triangle'

   //=========================================================
   
   //Edge symbol: 'bigredcircle'
   (function(symbolName) {   
   
   })("bigredcircle");
   //Edge symbol end:'bigredcircle'

   //=========================================================
   
   //Edge symbol: 'bigyellowcircle'
   (function(symbolName) {   
   
   })("bigyellowcircle");
   //Edge symbol end:'bigyellowcircle'

   //=========================================================
   
   //Edge symbol: 'bigbbluecircle'
   (function(symbolName) {   
   
   })("bigbbluecircle");
   //Edge symbol end:'bigbbluecircle'

   //=========================================================
   
   //Edge symbol: 'smallredcircle'
   (function(symbolName) {   
   
   })("smallredcircle");
   //Edge symbol end:'smallredcircle'

   //=========================================================
   
   //Edge symbol: 'bigredsquare'
   (function(symbolName) {   
   
   })("bigredsquare");
   //Edge symbol end:'bigredsquare'

   //=========================================================
   
   //Edge symbol: 'smallyellowcircle'
   (function(symbolName) {   
   
   })("smallyellowcircle");
   //Edge symbol end:'smallyellowcircle'

   //=========================================================
   
   //Edge symbol: 'smallgreencircle'
   (function(symbolName) {   
   
   })("smallgreencircle");
   //Edge symbol end:'smallgreencircle'

   //=========================================================
   
   //Edge symbol: 'bigyellowsquare'
   (function(symbolName) {   
   
   })("bigyellowsquare");
   //Edge symbol end:'bigyellowsquare'

   //=========================================================
   
   //Edge symbol: 'bigbluesquare'
   (function(symbolName) {   
   
   })("bigbluesquare");
   //Edge symbol end:'bigbluesquare'

   //=========================================================
   
   //Edge symbol: 'biggreensquare'
   (function(symbolName) {   
   
   })("biggreensquare");
   //Edge symbol end:'biggreensquare'

   //=========================================================
   
   //Edge symbol: 'smallredsquare'
   (function(symbolName) {   
   
   })("smallredsquare");
   //Edge symbol end:'smallredsquare'

   //=========================================================
   
   //Edge symbol: 'smallbluesquare'
   (function(symbolName) {   
   
   })("smallbluesquare");
   //Edge symbol end:'smallbluesquare'

   //=========================================================
   
   //Edge symbol: 'smallyellowsquare'
   (function(symbolName) {   
   
   })("smallyellowsquare");
   //Edge symbol end:'smallyellowsquare'

   //=========================================================
   
   //Edge symbol: 'smallgreensquare'
   (function(symbolName) {   
   
   })("smallgreensquare");
   //Edge symbol end:'smallgreensquare'

   //=========================================================
   
   //Edge symbol: 'bigredtri'
   (function(symbolName) {   
   
   })("bigredtri");
   //Edge symbol end:'bigredtri'

   //=========================================================
   
   //Edge symbol: 'bigyellowtri'
   (function(symbolName) {   
   
   })("bigyellowtri");
   //Edge symbol end:'bigyellowtri'

   //=========================================================
   
   //Edge symbol: 'bigbluetri'
   (function(symbolName) {   
   
   })("bigbluetri");
   //Edge symbol end:'bigbluetri'

   //=========================================================
   
   //Edge symbol: 'biggreentri'
   (function(symbolName) {   
   
   })("biggreentri");
   //Edge symbol end:'biggreentri'

   //=========================================================
   
   //Edge symbol: 'smallredtri'
   (function(symbolName) {   
   
   })("smallredtri");
   //Edge symbol end:'smallredtri'

   //=========================================================
   
   //Edge symbol: 'smallbluetri'
   (function(symbolName) {   
   
   })("smallbluetri");
   //Edge symbol end:'smallbluetri'

   //=========================================================
   
   //Edge symbol: 'smallyellowtri'
   (function(symbolName) {   
   
   })("smallyellowtri");
   //Edge symbol end:'smallyellowtri'

   //=========================================================
   
   //Edge symbol: 'smallgreentri'
   (function(symbolName) {   
   
   })("smallgreentri");
   //Edge symbol end:'smallgreentri'

   //=========================================================
   
   //Edge symbol: 'smallbluecircle'
   (function(symbolName) {   
   
   })("smallbluecircle");
   //Edge symbol end:'smallbluecircle'

   //=========================================================
   
   //Edge symbol: 'biggreencircle'
   (function(symbolName) {   
   
   })("biggreencircle");
   //Edge symbol end:'biggreencircle'

   //=========================================================
   
   //Edge symbol: 'mult4'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_notRED}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.stop(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_notRED}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.stop(0);
         var redI = sym.$("redcross").zIndex();
         var blueI = sym.$("bluecross").zIndex();
         if (redI > 1)
         {
         	if (blueI > 1)
         	{
         		blueI = -1;
         		redI = -1;
         	} else
         	{
         		blueI = 100;
         		redI = -1;		
         	}
         }else
         {
         	if (blueI > 1)
         	{
         		blueI = 100;
         		redI = 100;		
         	}else
         	{
         		blueI = -1;
         		redI = 100;
         	}
         }
         
         sym.$("redcross").css("z-index",redI.toString());
         sym.$("bluecross").css("z-index",blueI.toString());

      });
      //Edge binding end

   })("notred");
   //Edge symbol end:'notred'

   //=========================================================
   
   //Edge symbol: 'mult3s'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_mult3}", "mousedown", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(500);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mult3}", "mouseup", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);
         var redI = sym.$("redcross").zIndex();
         var blueI = sym.$("bluecross").zIndex();
         if (redI > 1)
         {
         	if (blueI > 1)
         	{
         		blueI = -1;
         		redI = -1;
         	} else
         	{
         		blueI = 100;
         		redI = -1;		
         	}
         }else
         {
         	if (blueI > 1)
         	{
         		blueI = 100;
         		redI = 100;		
         	}else
         	{
         		blueI = -1;
         		redI = 100;
         	}
         }
         
         sym.$("redcross").css("z-index",redI.toString());
         sym.$("bluecross").css("z-index",blueI.toString());

      });
      //Edge binding end

   })("little");
   //Edge symbol end:'little'

   //=========================================================
   
   //Edge symbol: 'mult2s'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_redT}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         // stop the timeline at the given position (ms or label)
         sym.stop(750);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_redT}", "mouseup", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);
         var redI = sym.$("redcross").zIndex();
         var blueI = sym.$("bluecross").zIndex();
         if (redI > 1)
         {
         	if (blueI > 1)
         	{
         		blueI = -1;
         		redI = -1;
         	} else
         	{
         		blueI = 100;
         		redI = -1;		
         	}
         }else
         {
         	if (blueI > 1)
         	{
         		blueI = 100;
         		redI = 100;		
         	}else
         	{
         		blueI = -1;
         		redI = 100;
         	}
         }
         
         sym.$("redcross").css("z-index",redI.toString());
         sym.$("bluecross").css("z-index",blueI.toString());

      });
      //Edge binding end

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         
      });
      //Edge binding end

   })("red");
   //Edge symbol end:'red'

   //=========================================================
   
   //Edge symbol: 'mult10'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_notYELLOW}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.stop(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_notYELLOW}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.stop(0);
         var redI = sym.$("redcross").zIndex();
         var blueI = sym.$("bluecross").zIndex();
         if (redI > 1)
         {
         	if (blueI > 1)
         	{
         		blueI = -1;
         		redI = -1;
         	} else
         	{
         		blueI = 100;
         		redI = -1;		
         	}
         }else
         {
         	if (blueI > 1)
         	{
         		blueI = 100;
         		redI = 100;		
         	}else
         	{
         		blueI = -1;
         		redI = 100;
         	}
         }
         
         sym.$("redcross").css("z-index",redI.toString());
         sym.$("bluecross").css("z-index",blueI.toString());

      });
      //Edge binding end

   })("notyellow");
   //Edge symbol end:'notyellow'

   //=========================================================
   
   //Edge symbol: 'lessneg10'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_GREEN}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.stop(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GREEN}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.stop(0);
         var redI = sym.$("redcross").zIndex();
         var blueI = sym.$("bluecross").zIndex();
         if (redI > 1)
         {
         	if (blueI > 1)
         	{
         		blueI = -1;
         		redI = -1;
         	} else
         	{
         		blueI = 100;
         		redI = -1;		
         	}
         }else
         {
         	if (blueI > 1)
         	{
         		blueI = 100;
         		redI = 100;		
         	}else
         	{
         		blueI = -1;
         		redI = 100;
         	}
         }
         
         sym.$("redcross").css("z-index",redI.toString());
         sym.$("bluecross").css("z-index",blueI.toString());

      });
      //Edge binding end

   })("green");
   //Edge symbol end:'green'

   //=========================================================
   
   //Edge symbol: 'less50'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_notGREEN}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.stop(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_notGREEN}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.stop(0);
         var redI = sym.$("redcross").zIndex();
         var blueI = sym.$("bluecross").zIndex();
         if (redI > 1)
         {
         	if (blueI > 1)
         	{
         		blueI = -1;
         		redI = -1;
         	} else
         	{
         		blueI = 100;
         		redI = -1;		
         	}
         }else
         {
         	if (blueI > 1)
         	{
         		blueI = 100;
         		redI = 100;		
         	}else
         	{
         		blueI = -1;
         		redI = 100;
         	}
         }
         
         sym.$("redcross").css("z-index",redI.toString());
         sym.$("bluecross").css("z-index",blueI.toString());

      });
      //Edge binding end

   })("notgreen");
   //Edge symbol end:'notgreen'

   //=========================================================
   
   //Edge symbol: 'greater50'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_notBlue}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.stop(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_notBlue}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.stop(0);
         var redI = sym.$("redcross").zIndex();
         var blueI = sym.$("bluecross").zIndex();
         if (redI > 1)
         {
         	if (blueI > 1)
         	{
         		blueI = -1;
         		redI = -1;
         	} else
         	{
         		blueI = 100;
         		redI = -1;		
         	}
         }else
         {
         	if (blueI > 1)
         	{
         		blueI = 100;
         		redI = 100;		
         	}else
         	{
         		blueI = -1;
         		redI = 100;
         	}
         }
         
         sym.$("redcross").css("z-index",redI.toString());
         sym.$("bluecross").css("z-index",blueI.toString());

      });
      //Edge binding end

   })("notblue");
   //Edge symbol end:'notblue'

})(jQuery, AdobeEdge, "EDGE-587455394");