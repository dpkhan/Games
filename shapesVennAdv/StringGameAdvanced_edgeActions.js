
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
var choices = [	'neg100','neg80', 'neg55', 'neg15','neg10', 
							'neg5', 'neg1', 'zero', 'pos1', 'pos2', 
							'pos3', 'pos4','pos5', 'pos6', 'pos7',
							'pos8', 'pos9', 'pos10', 'pos12', 'pos18',
							'pos20', 'pos24', 'pos27', 'pos40', 'pos45',
							'pos50','pos60','pos99','pos100','pos105'  ];
	
	selectArray = [		[1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0],
         					[0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1],
         					[1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0],
         					[1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1],
         					[1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0],
         					[0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
         					[0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0],
         					[0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0],
         					[0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0],
         					[0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0],
         					[0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1],
         					[0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         					[1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         					[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
         					[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
         					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1]		];

      marker = 	  [ [0,0,0],
      					 [0,0,0],
      					 [0,0,0],
      					 [0,0,0],
      					 [0,0,0],
      					 [0,0,0],
      					 [0,0,0],
      					 [0,0,0],
      					 [0,0,0],
      					 [0,0,0],
      					 [0,0,0],
      					 [0,0,0],
      					 [0,0,0],
      					 [0,0,0],
      					 [0,0,0],
      					 [0,0,0] ];

		labels = [	[ 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 ],
						[ 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 ],
						[ 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 ] ];

		aarray = [	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1 ],
						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1 ],
						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1 ],
						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1 ],
						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1 ],
						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1 ],
						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1 ],
						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1 ] ];


		rnot = [];
		bnot = [];
		gnot = [];
		onot = [];
		ris = -1;
		bis = -1;
		gis = -1;;
		rcount = 0;
		bcount = 0;
		gcount = 0;

		var r = Math.floor((Math.random()*16));
		var b = -1;
		var g = -1;

//		var r = 10;
//		var b = 11;
//		var g = 12;


     	count = 0;
     	labelCount = 0;
     	incorrectCount = 0;
     	correctCount = 0;
     	stringCount = 0;		


		do{
			b = Math.floor((Math.random()*16));
		} while ( b == r);
		do{
			g = Math.floor((Math.random()*16));
		} while ( (g == b) || (g == r) );

		blueW = sym.$("blueString").width() * 0.5;
		blueH = sym.$("blueString").height()* 0.5;
		blueX = sym.$("blueString").position().left + blueW;
		blueY = sym.$("blueString").position().top + blueH;

		redW = sym.$("redString").width() * 0.5;
		redH = sym.$("redString").height()* 0.5;
		redX = sym.$("redString").position().left + redW;
		redY = sym.$("redString").position().top + redH;

		greenW = sym.$("greenString").width() * 0.5;
		greenH = sym.$("greenString").height()* 0.5;
		greenX = sym.$("greenString").position().left + greenW;
		greenY = sym.$("greenString").position().top + greenH;

      var mask = [1,2,4,8,16,32,64,128];
      var flags = new Array(30);

      movesList = [[-1,-1,-1]];
      var shapesUsed = [];
      var setsUsed = 	[];				 
		var usedTest = 0;

      var selector = new Array(30);
      var blueDone = 0;
      var redDone = 0;
      var greenDone = 0;
      var xpos = 0;
      var ypos = 0;
      width = 0;
      height = 0;
      var temp = 0;
      current = -1;

      for(var i=0; i<selector.length; i++) {
          selector[i] = selectArray[b][i] + 2*selectArray[r][i] + 4*selectArray[g][i];
      };


		for(var i=0; i< 30; i++) {
			sym.$(choices[i]).index = i;
      	sym.$(choices[i]).draggable({
         	start: 	starti(i),
//         				function(e,ui){	width = $(ui.helper).width()*0.5;
//        									height = $(ui.helper).height()*0.5;},
         	drag: function(e,ui){
         									xpos = ui.position.left; 
         									ypos = ui.position.top;
         								}, 
         	stop: function(e,ui){
         				var testlist = "";
							if ( ((xpos > 375) || ((ypos < 610) && (xpos>290)) || ((ypos < 405) && (xpos > 140))) && 
												(((xpos+width)<910) || (((xpos+width)<1060) && (ypos < 518))) ) {
								var sc = width/20;

								if (temp != selector[current]){
        							if ((mask[temp] & flags[current]) == 0)
      	 						{

										++incorrectCount;
				   	            sym.$('incorrectCount').html(incorrectCount);
   		   			         sym.$('score').html(getScore());

										flags[current] |= mask[temp];

			         				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
										sym.$("xout").clone().appendTo("body").css({"opacity":0.5,left:xpos, top:ypos});

										movesList[count+incorrectCount-1] = [current,temp,0];
										for (var j=0; j<movesList.length; j++){
											testlist += movesList[j].toString()+"<br>";
										};
//										main_pass();
//										sym.$("testing").html(testlist);
									};
								} else {
									movesList[count+incorrectCount-1] = [current,temp,1];
									for (var j=0; j<movesList.length; j++){
										testlist += movesList[j].toString()+"<br>";
									};
//									main_pass();
//									sym.$("testing").html(testlist);						
								};

							};
         			},
         	revert: function (e,ui){
         		temp = stringTest((xpos+width), (ypos+height));
         		if (temp == selector[current]){
         			count++;
         			sym.$('correctCount').html(count); 
         			sym.$('score').html(getScore()); 
         			return false;
         		} else
         		{
         			return true;
         		};

         	}
         }).css('touch-action', 'none');
 		};

         sym.$("greenchoice").droppable({scope : (g+10) , drop: function(e,ui){greenDone = 1; if ((blueDone==1) && (redDone==1)){sym.$('stringCount').html("2"); sym.$('finalBackground').appendTo("body").show('true'); sym.$('testout').appendTo("body").show('true'); sym.$('finalScore').appendTo("body").show('true');sym.$('finalScore').html(getScore());sym.$("*").draggable("disable");}else{stringCount++;sym.$('stringCount').html(stringCount)}; ui.draggable("disable"); ui.draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++labelCount; sym.$('labelCount').html(labelCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: 24 }).css('touch-action', 'none');} });
         sym.$("bluechoice").droppable({scope : (b+10) , drop: function(e,ui){blueDone = 1; if (redDone==1 && (greenDone==1)){sym.$('stringCount').html("2"); sym.$('finalBackground').appendTo("body").show('true'); sym.$('testout').appendTo("body").show('true'); sym.$('finalScore').appendTo("body").show('true');sym.$('finalScore').html(getScore());sym.$("*").draggable("disable");}else{stringCount++;sym.$('stringCount').html(stringCount)}; ui.draggable("disable"); ui.draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++labelCount; sym.$('labelCount').html(labelCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: 24 }).css('touch-action', 'none');} });
         sym.$("redchoice").droppable({scope : (r+10) , drop: function(e,ui){redDone = 1; if (blueDone==1 && (greenDone==1)){sym.$('stringCount').html("2"); sym.$('finalBackground').appendTo("body").show('true'); sym.$('testout').appendTo("body").show('true'); sym.$('finalScore').appendTo("body").show('true'); sym.$('finalScore').html(getScore());sym.$("*").draggable("disable");}else{stringCount++;sym.$('stringCount').html(stringCount)}; ui.draggable("disable"); ui.draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ ++labelCount; sym.$('labelCount').html(labelCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: 24 }).css('touch-action', 'none');} });

         sym.$('mult2').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){if(ui.position.left < 930){ ++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: 10 }).css('touch-action', 'none');
         sym.$('mult3').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.left < 930){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: 11 }).css('touch-action', 'none');
			sym.$('mult4').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.left < 930){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: 12 }).css('touch-action', 'none');
         sym.$('mult5').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.left < 930){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: 13 }).css('touch-action', 'none');
         sym.$('mult10').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.left < 930){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: 14 }).css('touch-action', 'none');
         sym.$('posdiv12').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.left < 930){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: 15 }).css('touch-action', 'none');
         sym.$('posdiv18').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.left < 930){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: 16 }).css('touch-action', 'none');
         sym.$('posdiv20').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.left < 930){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: 17 }).css('touch-action', 'none');
         sym.$('posdiv24').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.left < 930){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: 18 }).css('touch-action', 'none');
         sym.$('posdiv27').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.left < 930){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: 19 }).css('touch-action', 'none');
         sym.$('odd').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.left < 930){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: 20 }).css('touch-action', 'none');
         sym.$('posprime').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.left < 930){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: 21 }).css('touch-action', 'none');
         sym.$('lessneg10').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.left < 930){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: 22 }).css('touch-action', 'none');
         sym.$('less50').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.left < 930){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: 23 }).css('touch-action', 'none');
         sym.$('greaterneg10').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.left < 930){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: 24 }).css('touch-action', 'none');
         sym.$('greater50').draggable({ helper: "clone", start: function(e){}, drag: function(e,ui){}, stop: function(e,ui){ if(ui.position.left < 930){++labelCount}; sym.$('labelCount').html(labelCount); sym.$('score').html(100-(labelCount*5+incorrectCount+count))}, revert:'invalid', scope: 25 }).css('touch-action', 'none');

         function labelString() {
         sym.$('labelText').show('true');
         };





      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         
         stringTest = function( symX, symY ){
         	var counter = 0;
         
         	if ( (symX > 140) && ( (symX+width)<1060 ) ) { 
         
         		if (( Math.pow(((symY - blueY)/ blueH ),2)  + Math.pow(((symX - blueX)/blueW),2) ) < 1 ) 
         				counter += 1;
         
         		if (( Math.pow(((symY - redY)/ redH ),2)  + Math.pow(((symX - redX)/redW),2) ) < 1 ) 
         				counter += 2;
         
         		if (( Math.pow(((symY - greenY)/ greenH ),2)  + Math.pow(((symX - greenX)/greenW),2) ) < 1 ) 
         				counter += 4;
         
         	}
         
         	return counter;
         };
         
         getScore = function(){
         	return 100-(labelCount*5+ Math.max(incorrectCount+count-5,0));
         };
         
         
         
         starti = function(i){
         	return function(e,ui){	
         								current = i;
         								width = $(ui.helper).width()*0.5;
                 						height = $(ui.helper).height()*0.5;
                 					};
         };
         
         stopi = function(i){
         	return function(e,ui){
                        ++incorrectCount;
                 			if (temp != selector[i]){
                 				if ((mask[temp] & flags[i]) == 0)
               	 			{
                  				flags[i] |= mask[temp];
                  				$(ui.helper).clone().appendTo("body").css({"opacity":0.2,left:xpos, top:ypos});
         						};
         					};
                  	}
         };
         
         main_pass = function()
         {
         var testlist = "";
         var checkr = 1;
         var checkb = 1;
         var checkg = 1;
         var indexL = -1;
         var rsum = 0;
         var bsum = 0;
         var gsum = 0;
         var testArray = [	[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
         						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
         						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1] ];
         var ml = movesList.length-1;
         
         if (movesList[ml][2] == 1){
         	for (var k = 0; k < 8; k++){
         		aarray[k][movesList[ml][0]] = 0; 
         	};
         	aarray[movesList[ml][1]][movesList[ml][0]] = 1;
         }else {
         	var x = -1;
         	var y = 0;
         	var z = 0;
         	for (var k = 0; k < 8; k++){
         		if ((k != movesList[ml][1]) && (aarray[k][movesList[ml][0]] == 0)){
         			z++;
         		} else if (aarray[k][movesList[ml][0]] == -1){
         			x = k;	
         		};
         	};
         	if ((z == 6) && (x > 0)){
         		aarray[x][movesList[ml][0]] = 1;
         	};
         		aarray[movesList[ml][1]][movesList[ml][0]] = 0;																
         };
         
         
         	for (var j = 0; j < 30; j++)
         	{
         		rnot[j] = aarray[2][j] + aarray[3][j] + aarray[6][j] + aarray[7][j];
         		bnot[j] = aarray[1][j] + aarray[3][j] + aarray[5][j] + aarray[7][j];
         		gnot[j] = aarray[4][j] + aarray[5][j] + aarray[6][j] + aarray[7][j];
         		onot[j] = aarray[0][j];
         
         		if ( (rnot[j]==0) && (bnot[j]==0) && (onot[j]==0)){
         			gnot[j] = 1;
         		};
         		if ( (rnot[j]==0) && (gnot[j]==0) && (onot[j]==0)){
         			bnot[j] = 1;
         		};
         		if ( (gnot[j]==0) && (bnot[j]==0) && (onot[j]==0)){
         			rnot[j] = 1;
         		};
         	};
         
         	for (var j = 0; j < 16; j++)
         	{
         		for (var k = 0; k < 30; k++)
         		{
         			if ( (labels[0][j] != 0) && (rnot[k] > -1) && (rnot[k] != selectArray[j][k]) )
         			{
         				labels[0][j] = 0;
         				sym.getSymbol("marker_"+j).$("redMarker1").css({"opacity":0.2});
         			};
         			if ( (labels[1][j] != 0) && (bnot[k] > -1) && (bnot[k] != selectArray[j][k]) )
         			{
         				labels[1][j] = 0;
         				sym.getSymbol("marker_"+j).$("blueMarker1").css({"opacity":0.2});
         			};
         			if ( (labels[2][j] != 0) && (gnot[k] > -1) && (gnot[k] != selectArray[j][k]) )
         			{
         				labels[2][j] = 0;
         				sym.getSymbol("marker_"+j).$("greenMarker1").css({"opacity":0.2});
         			};
         		};
         		rsum += labels[0][j];
         		bsum += labels[1][j];
         		gsum += labels[2][j];
         	};				
         
         	if (rsum == 1){
         		ris = labels[0].indexOf(1);
         		labels[1][ris] = 0;
         		labels[2][ris] = 0;
         
         		for (var k = 0; k < 30; k++)
         		{
         			if ( selectArray[ris][k] == 1){
         				aarray[0][k] = 0;
         				aarray[1][k] = 0;
         				aarray[4][k] = 0;
         				aarray[5][k] = 0;
         			}else {
         				aarray[2][k] = 0;
         				aarray[3][k] = 0;
         				aarray[6][k] = 0;
         				aarray[7][k] = 0;				
         			}
         		};
         	};
         
         	if (bsum == 1){
         		bis = labels[1].indexOf(1);
         		labels[0][bis] = 0;
         		labels[2][bis] = 0;
         		for (var k = 0; k < 30; k++)
         		{
         			if ( selectArray[bis][k] == 1){
         				aarray[0][k] = 0;
         				aarray[2][k] = 0;
         				aarray[4][k] = 0;
         				aarray[6][k] = 0;
         			} else{
         				aarray[1][k] = 0;
         				aarray[3][k] = 0;
         				aarray[5][k] = 0;
         				aarray[7][k] = 0;				
         			}
         		};
         	};
         	if (gsum == 1){
         		gis = labels[2].indexOf(1);
         		labels[0][gis] = 0;
         		labels[1][gis] = 0;
         		for (var k = 0; k < 30; k++)
         		{
         			if ( selectArray[gis][k] == 1){
         				aarray[0][k] = 0;
         				aarray[1][k] = 0;
         				aarray[2][k] = 0;
         				aarray[3][k] = 0;
         			} else {
         				aarray[4][k] = 0;
         				aarray[5][k] = 0;
         				aarray[6][k] = 0;
         				aarray[7][k] = 0;				
         			}
         		};
         	};
         
         for (var j = 0; j < 30; j++)
         {
         	rnot[j] = aarray[2][j] + aarray[3][j] + aarray[6][j] + aarray[7][j];
         	bnot[j] = aarray[1][j] + aarray[3][j] + aarray[5][j] + aarray[7][j];
         	gnot[j] = aarray[4][j] + aarray[5][j] + aarray[6][j] + aarray[7][j];
         	onot[j] = aarray[0][j];
         
         	if ( (rnot[j]==0) && (bnot[j]==0) && (onot[j]==0)){
         		gnot[j] = 1;
         	};
         	if ( (rnot[j]==0) && (gnot[j]==0) && (onot[j]==0)){
         		bnot[j] = 1;
         	};
         	if ( (gnot[j]==0) && (bnot[j]==0) && (onot[j]==0)){
         		rnot[j] = 1;
         	};
         };
         
         for (var j = 0; j < 16; j++)
         {
         	for (var k = 0; k < 30; k++)
         	{
         		if ( (labels[0][j] != 0) && (rnot[k] > -1) && (rnot[k] != selectArray[j][k]) )
         		{
         			labels[0][j] = 0;
         			sym.getSymbol("marker_"+ris).$("redMarker1").css({"background":"yellow"});
         		};
         		if ( (labels[1][j] != 0) && (bnot[k] > -1) && (bnot[k] != selectArray[j][k]) )
         		{
         			labels[1][j] = 0;
         			sym.getSymbol("marker_"+bis).$("blueMarker1").css({"background":"yellow"});
         		};
         		if ( (labels[2][j] != 0) && (gnot[k] > -1) && (gnot[k] != selectArray[j][k]) )
         		{
         			labels[2][j] = 0;
         			sym.getSymbol("marker_"+gis).$("greenMarker1").css({"background":"yellow"});
         		};
         	};
         };				
         
         indexL = labels[0].indexOf(1);
         if (indexL > -1)
         {			
         	testArray[0] = selectArray[indexL].slice();
         	for (var j = indexL; j < 16; j++)
         	{
         		for (var k = 0; k < 30; k++)
         		{
         			if (labels[0][j] == 1)
         			{
         				if (( selectArray[j][k] != testArray[0][k] ))
         				{
         					testArray[0][k] = -1; 
         				};
         			};
         		};
         	};
         };
         
         indexL = labels[1].indexOf(1);
         if (indexL > -1){		
         	testArray[1] = selectArray[indexL].slice();
         	for (var j = indexL; j < 16; j++)
         	{
         		for (var k = 0; k < 30; k++){
         			if (labels[1][j] == 1){
         				if (( selectArray[j][k] != testArray[1][k] ))
         				{
         					testArray[1][k] = -1; 
         				};
         			};
         		};
         	};
         };
         
         indexL = labels[2].indexOf(1);
         if (indexL > -1){			
         	testArray[2] = selectArray[indexL].slice();
         	for (var j = indexL; j < 16; j++)
         	{
         		for (var k = 0; k < 30; k++){
         			if (labels[2][j] == 1){
         				if (( selectArray[j][k] != testArray[2][k] ))
         				{
         					testArray[2][k] = -1; 
         				};
         			};
         		};
         	};
         };
         
         for (var j = 0; j < 16; j++)
         {
         	for (var k = 0; k < 30; k++)
         	{
         		if ( (labels[0][j] != 0) && (testArray[0][k] > -1) && (testArray[0][k] != selectArray[j][k]) )
         		{
         			labels[0][j] = 0;
         		};
         		if ( (labels[1][j] != 0) && (testArray[1][k] > -1) && (testArray[1][k] != selectArray[j][k]) )
         		{
         			labels[1][j] = 0;
         		};
         		if ( (labels[2][j] != 0) && (testArray[2][k] > -1) && (testArray[2][k] != selectArray[j][k]) )
         		{
         			labels[2][j] = 0;
         		};
         	};
         };				
         
         for (var j = 0; j < 16; j++)
         {
         	if (labels[0][j] == 0){
         		sym.getSymbol("marker_"+j).$("redMarker1").css({"opacity":0.2});
         	};
         	if (labels[1][j] == 0){
         		sym.getSymbol("marker_"+j).$("blueMarker1").css({"opacity":0.2});
         	};
         	if (labels[2][j] == 0){
         		sym.getSymbol("marker_"+j).$("greenMarker1").css({"opacity":0.2});
         	};
         };						
         
         for (var j=0; j<8; j++){
         	testlist += aarray[j].toString()+"<br>";
         };
         //sym.$("testing").html(testlist);
         //sym.$("testing").html(testArray[0].toString() + "<br>" + testArray[1].toString() + "<br>" + testArray[2].toString());
         //sym.$("testing").html(labels[0].toString() + "<br>" + labels[1].toString() + "<br>" + labels[2].toString());
         //sym.$("testing").html(rnot.toString() + "<br>" + bnot.toString() + "<br>" + gnot.toString());						
         
         };
         
         ////////////////////////////////////////////////////////////////
         ////
         //// ////////////////
         ////						//////////////////
         ////
         ////////////////////////////////////////////////////////////////
         
         
         notRed = function()
         {
         
         for (var j = 0; j < 30; j++)
         {
         	bnot[j] = aarray[1][j] + aarray[3][j] + aarray[5][j] + aarray[7][j];
         	gnot[j] = aarray[4][j] + aarray[5][j] + aarray[6][j] + aarray[7][j];
         	onot[j] = aarray[0][j];
         	if ( (rnot[j]==0) && (bnot[j]==0) && (onot[j]==0)){
         		gnot[j] = 1;
         	};
         	if ( (rnot[j]==0) && (gnot[j]==0) && (onot[j]==0)){
         		bnot[j] = 1;
         	};
         };
         
         for (var j = 0; j < 16; j++)
         {
         	for (var k = 0; k < 30; k++)
         	{
         		if ( (labels[1][j] != 0) && (bnot[k] > -1) && (bnot[k] != selectArray[j][k]) )
         		{
         			labels[1][j] = 0;
         			sym.getSymbol("marker_"+j).$("blueMarker1").css({"opacity":0.2});
         		};
         		if ( (labels[2][j] != 0) && (gnot[k] > -1) && (gnot[k] != selectArray[j][k]) )
         		{
         			labels[2][j] = 0;
         			sym.getSymbol("marker_"+j).$("greenMarker1").css({"opacity":0.2});
         		};
         	};
         	bsum += labels[1][j];
         	gsum += labels[2][j];
         };				
         
         if (bsum == 1){
         	bis = labels[1].indexOf(1);
         	labels[0][bis] = 0;
         	labels[2][bis] = 0;
         	for (var k = 0; k < 30; k++)
         	{
         		if ( selectArray[bis][k] == 1){
         			aarray[0][k] = 0;
         			aarray[2][k] = 0;
         			aarray[4][k] = 0;
         			aarray[6][k] = 0;
         		}
         	};
         };
         
         if (gsum == 1){
         	gis = labels[2].indexOf(1);
         	labels[0][gis] = 0;
         	labels[1][gis] = 0;
         	for (var k = 0; k < 30; k++)
         	{
         		if ( selectArray[gis][k] == 1){
         			aarray[0][k] = 0;
         			aarray[1][k] = 0;
         			aarray[2][k] = 0;
         			aarray[3][k] = 0;
         		}
         	};
         };
         
         for (var j = 0; j < 30; j++)
         {
         	bnot[j] = aarray[1][j] + aarray[3][j] + aarray[5][j] + aarray[7][j];
         	gnot[j] = aarray[4][j] + aarray[5][j] + aarray[6][j] + aarray[7][j];
         	onot[j] = aarray[0][j];
         
         	if ( (rnot[j]==0) && (bnot[j]==0) && (onot[j]==0)){
         		gnot[j] = 1;
         	};
         	if ( (rnot[j]==0) && (gnot[j]==0) && (onot[j]==0)){
         		bnot[j] = 1;
         	};
         };
         
         for (var j = 0; j < 16; j++)
         {
         	for (var k = 0; k < 30; k++)
         	{
         		if ( (labels[0][j] != 0) && (rnot[k] > -1) && (rnot[k] != selectArray[j][k]) )
         		{
         			labels[0][j] = 0;
         			sym.getSymbol("marker_"+ris).$("redMarker1").css({"background":"yellow"});
         		};
         		if ( (labels[1][j] != 0) && (bnot[k] > -1) && (bnot[k] != selectArray[j][k]) )
         		{
         			labels[1][j] = 0;
         			sym.getSymbol("marker_"+bis).$("blueMarker1").css({"background":"yellow"});
         		};
         		if ( (labels[2][j] != 0) && (gnot[k] > -1) && (gnot[k] != selectArray[j][k]) )
         		{
         			labels[2][j] = 0;
         			sym.getSymbol("marker_"+gis).$("greenMarker1").css({"background":"yellow"});
         		};
         	};
         };				
         
         
         indexL = labels[1].indexOf(1);
         if (indexL > -1){		
         	testArray[1] = selectArray[indexL].slice();
         	for (var j = indexL; j < 16; j++)
         	{
         		for (var k = 0; k < 30; k++){
         			if (labels[1][j] == 1){
         				if ((selectArray[j][k]==1) && (testArray[1][k]==1)){
         					testArray[1][k] = 1; 
         				} else if ((selectArray[j][k]==0) && (testArray[1][k]==0)){
         					testArray[1][k] = 0; 
         				}else {
         					testArray[1][k] = -1; 
         				};
         			};
         		};
         	};
         };
         
         indexL = labels[2].indexOf(1);
         if (indexL > -1){			
         	testArray[2] = selectArray[indexL].slice();
         	for (var j = indexL; j < 16; j++)
         	{
         		for (var k = 0; k < 30; k++){
         			if (labels[2][j] == 1){
         				if ((selectArray[j][k] == 1) && (testArray[2][k] == 1)){
         					testArray[2][k] = 1; 
         				}else if ((selectArray[j][k] == 0) && (testArray[2][k] == 0)){
         					testArray[2][k] = 0; 
         				}else{
         					testArray[2][k] = -1; 
         				};
         			};
         		};
         	};
         };
         
         for (var j = 0; j < 16; j++)
         {
         	for (var k = 0; k < 30; k++)
         	{
         		if ( (labels[0][j] != 0) && (testArray[0][k] > -1) && (testArray[0][k] != selectArray[j][k]) )
         		{
         			labels[0][j] = 0;
         		};
         		if ( (labels[1][j] != 0) && (testArray[1][k] > -1) && (testArray[1][k] != selectArray[j][k]) )
         		{
         			labels[1][j] = 0;
         		};
         		if ( (labels[2][j] != 0) && (testArray[2][k] > -1) && (testArray[2][k] != selectArray[j][k]) )
         		{
         			labels[2][j] = 0;
         		};
         	};
         };				
         
         for (var j=0; j<8; j++){
         	testlist += aarray[j].toString()+"<br>";
         };
         //sym.$("testing").html(testlist);
         //sym.$("testing").html(testArray[0].toString() + "<br>" + testArray[1].toString() + "<br>" + testArray[2].toString());
         //sym.$("testing").html(labels[0].toString() + "<br>" + labels[1].toString() + "<br>" + labels[2].toString());
         //sym.$("testing").html(rnot.toString() + "<br>" + bnot.toString() + "<br>" + gnot.toString());						
         
         };

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

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
   
   //Edge symbol: 'greenString'
   (function(symbolName) {   
   
   })("greenString");
   //Edge symbol end:'greenString'

   //=========================================================
   
   //Edge symbol: 'xout'
   (function(symbolName) {   
   
   })("xout");
   //Edge symbol end:'xout'

   //=========================================================
   
   //Edge symbol: 'marker'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${greenMarker1}", "click", function(sym, e) {
         if (marker[0][2] == 0)
         {
         	sym.$("greenMarker1").css({"opacity":0.2});
         	marker[0][2] = 1;
         } else
         {
         	sym.$("greenMarker1").css({"opacity":1});
         	marker[0][2] = 0;
         };
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${blueMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[0][1] == 0)
         {
         	sym.$("blueMarker1").css({"opacity":0.2});
         	marker[0][1] = 1;
         } else
         {
         	sym.$("blueMarker1").css({"opacity":1});
         	marker[0][1] = 0;
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${redMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[0][0] == 0)
         {
         	sym.$("redMarker1").css({"opacity":0.2});
         	marker[0][0] = 1;
         } else
         {
         	sym.$("redMarker1").css({"opacity":1});
         	marker[0][0] = 0;
         }

      });
      //Edge binding end

   })("marker_0");
   //Edge symbol end:'marker_0'

   //=========================================================
   
   //Edge symbol: 'marker_1'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${greenMarker1}", "click", function(sym, e) {
         if (marker[1][2] == 0)
         {
         	sym.$("greenMarker1").css({"opacity":0.2});
         	marker[1][2] = 1;
         } else
         {
         	sym.$("greenMarker1").css({"opacity":1});
         	marker[1][2] = 0;
         };
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${blueMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[1][1] == 0)
         {
         	sym.$("blueMarker1").css({"opacity":0.2});
         	marker[1][1] = 1;
         } else
         {
         	sym.$("blueMarker1").css({"opacity":1});
         	marker[1][1] = 0;
         }
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${redMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[1][0] == 0)
         {
         	sym.$("redMarker1").css({"opacity":0.2});
         	marker[1][0] = 1;
         } else
         {
         	sym.$("redMarker1").css({"opacity":1});
         	marker[1][0] = 0;
         }
      
      });
      //Edge binding end

   })("marker_1");
   //Edge symbol end:'marker_1'

   //=========================================================
   
   //Edge symbol: 'marker_2'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${greenMarker1}", "click", function(sym, e) {
         if (marker[2][2] == 0)
         {
         	sym.$("greenMarker1").css({"opacity":0.2});
         	marker[2][2] = 1;
         } else
         {
         	sym.$("greenMarker1").css({"opacity":1});
         	marker[2][2] = 0;
         };
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${blueMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[2][1] == 0)
         {
         	sym.$("blueMarker1").css({"opacity":0.2});
         	marker[2][1] = 1;
         } else
         {
         	sym.$("blueMarker1").css({"opacity":1});
         	marker[2][1] = 0;
         }
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${redMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[2][0] == 0)
         {
         	sym.$("redMarker1").css({"opacity":0.2});
         	marker[2][0] = 1;
         } else
         {
         	sym.$("redMarker1").css({"opacity":1});
         	marker[2][0] = 0;
         }
      
      });
      //Edge binding end

   })("marker_2");
   //Edge symbol end:'marker_2'

   //=========================================================
   
   //Edge symbol: 'marker_3'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${greenMarker1}", "click", function(sym, e) {
         if (marker[3][2] == 0)
         {
         	sym.$("greenMarker1").css({"opacity":0.2});
         	marker[3][2] = 1;
         } else
         {
         	sym.$("greenMarker1").css({"opacity":1});
         	marker[3][2] = 0;
         };
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${blueMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[3][1] == 0)
         {
         	sym.$("blueMarker1").css({"opacity":0.2});
         	marker[3][1] = 1;
         } else
         {
         	sym.$("blueMarker1").css({"opacity":1});
         	marker[3][1] = 0;
         }
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${redMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[3][0] == 0)
         {
         	sym.$("redMarker1").css({"opacity":0.2});
         	marker[3][0] = 1;
         } else
         {
         	sym.$("redMarker1").css({"opacity":1});
         	marker[3][0] = 0;
         }
      
      });
      //Edge binding end

   })("marker_3");
   //Edge symbol end:'marker_3'

   //=========================================================
   
   //Edge symbol: 'marker_4'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${greenMarker1}", "click", function(sym, e) {
         if (marker[4][2] == 0)
         {
         	sym.$("greenMarker1").css({"opacity":0.2});
         	marker[4][2] = 1;
         } else
         {
         	sym.$("greenMarker1").css({"opacity":1});
         	marker[4][2] = 0;
         };
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${blueMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[4][1] == 0)
         {
         	sym.$("blueMarker1").css({"opacity":0.2});
         	marker[4][1] = 1;
         } else
         {
         	sym.$("blueMarker1").css({"opacity":1});
         	marker[4][1] = 0;
         }
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${redMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[4][0] == 0)
         {
         	sym.$("redMarker1").css({"opacity":0.2});
         	marker[4][0] = 1;
         } else
         {
         	sym.$("redMarker1").css({"opacity":1});
         	marker[4][0] = 0;
         }
      
      });
      //Edge binding end

   })("marker_4");
   //Edge symbol end:'marker_4'

   //=========================================================
   
   //Edge symbol: 'marker_5'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${greenMarker1}", "click", function(sym, e) {
         if (marker[5][2] == 0)
         {
         	sym.$("greenMarker1").css({"opacity":0.2});
         	marker[5][2] = 1;
         } else
         {
         	sym.$("greenMarker1").css({"opacity":1});
         	marker[5][2] = 0;
         };
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${blueMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[5][1] == 0)
         {
         	sym.$("blueMarker1").css({"opacity":0.2});
         	marker[5][1] = 1;
         } else
         {
         	sym.$("blueMarker1").css({"opacity":1});
         	marker[5][1] = 0;
         }
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${redMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[5][0] == 0)
         {
         	sym.$("redMarker1").css({"opacity":0.2});
         	marker[5][0] = 1;
         } else
         {
         	sym.$("redMarker1").css({"opacity":1});
         	marker[5][0] = 0;
         }
      
      });
      //Edge binding end

   })("marker_5");
   //Edge symbol end:'marker_5'

   //=========================================================
   
   //Edge symbol: 'marker_6'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${greenMarker1}", "click", function(sym, e) {
         if (marker[6][2] == 0)
         {
         	sym.$("greenMarker1").css({"opacity":0.2});
         	marker[6][2] = 1;
         } else
         {
         	sym.$("greenMarker1").css({"opacity":1});
         	marker[6][2] = 0;
         };
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${blueMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[6][1] == 0)
         {
         	sym.$("blueMarker1").css({"opacity":0.2});
         	marker[6][1] = 1;
         } else
         {
         	sym.$("blueMarker1").css({"opacity":1});
         	marker[6][1] = 0;
         }
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${redMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[6][0] == 0)
         {
         	sym.$("redMarker1").css({"opacity":0.2});
         	marker[6][0] = 1;
         } else
         {
         	sym.$("redMarker1").css({"opacity":1});
         	marker[6][0] = 0;
         }
      
      });
      //Edge binding end

   })("marker_6");
   //Edge symbol end:'marker_6'

   //=========================================================
   
   //Edge symbol: 'marker_7'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${greenMarker1}", "click", function(sym, e) {
         if (marker[7][2] == 0)
         {
         	sym.$("greenMarker1").css({"opacity":0.2});
         	marker[7][2] = 1;
         } else
         {
         	sym.$("greenMarker1").css({"opacity":1});
         	marker[7][2] = 0;
         };
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${blueMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[7][1] == 0)
         {
         	sym.$("blueMarker1").css({"opacity":0.2});
         	marker[7][1] = 1;
         } else
         {
         	sym.$("blueMarker1").css({"opacity":1});
         	marker[7][1] = 0;
         }
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${redMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[7][0] == 0)
         {
         	sym.$("redMarker1").css({"opacity":0.2});
         	marker[7][0] = 1;
         } else
         {
         	sym.$("redMarker1").css({"opacity":1});
         	marker[7][0] = 0;
         }
      
      });
      //Edge binding end

   })("marker_7");
   //Edge symbol end:'marker_7'

   //=========================================================
   
   //Edge symbol: 'marker_8'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${greenMarker1}", "click", function(sym, e) {
         if (marker[8][2] == 0)
         {
         	sym.$("greenMarker1").css({"opacity":0.2});
         	marker[8][2] = 1;
         } else
         {
         	sym.$("greenMarker1").css({"opacity":1});
         	marker[8][2] = 0;
         };
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${blueMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[8][1] == 0)
         {
         	sym.$("blueMarker1").css({"opacity":0.2});
         	marker[8][1] = 1;
         } else
         {
         	sym.$("blueMarker1").css({"opacity":1});
         	marker[8][1] = 0;
         }
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${redMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[8][0] == 0)
         {
         	sym.$("redMarker1").css({"opacity":0.2});
         	marker[8][0] = 1;
         } else
         {
         	sym.$("redMarker1").css({"opacity":1});
         	marker[8][0] = 0;
         }
      
      });
      //Edge binding end

   })("marker_8");
   //Edge symbol end:'marker_8'

   //=========================================================
   
   //Edge symbol: 'marker_9'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${greenMarker1}", "click", function(sym, e) {
         if (marker[9][2] == 0)
         {
         	sym.$("greenMarker1").css({"opacity":0.2});
         	marker[9][2] = 1;
         } else
         {
         	sym.$("greenMarker1").css({"opacity":1});
         	marker[9][2] = 0;
         };
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${blueMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[9][1] == 0)
         {
         	sym.$("blueMarker1").css({"opacity":0.2});
         	marker[9][1] = 1;
         } else
         {
         	sym.$("blueMarker1").css({"opacity":1});
         	marker[9][1] = 0;
         }
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${redMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[9][0] == 0)
         {
         	sym.$("redMarker1").css({"opacity":0.2});
         	marker[9][0] = 1;
         } else
         {
         	sym.$("redMarker1").css({"opacity":1});
         	marker[9][0] = 0;
         }
      
      });
      //Edge binding end

   })("marker_9");
   //Edge symbol end:'marker_9'

   //=========================================================
   
   //Edge symbol: 'marker_10'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${greenMarker1}", "click", function(sym, e) {
         if (marker[10][2] == 0)
         {
         	sym.$("greenMarker1").css({"opacity":0.2});
         	marker[10][2] = 1;
         } else
         {
         	sym.$("greenMarker1").css({"opacity":1});
         	marker[10][2] = 0;
         };
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${blueMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[10][1] == 0)
         {
         	sym.$("blueMarker1").css({"opacity":0.2});
         	marker[10][1] = 1;
         } else
         {
         	sym.$("blueMarker1").css({"opacity":1});
         	marker[10][1] = 0;
         }
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${redMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[10][0] == 0)
         {
         	sym.$("redMarker1").css({"opacity":0.2});
         	marker[10][0] = 1;
         } else
         {
         	sym.$("redMarker1").css({"opacity":1});
         	marker[10][0] = 0;
         }
      
      });
      //Edge binding end

   })("marker_10");
   //Edge symbol end:'marker_10'

   //=========================================================
   
   //Edge symbol: 'marker_11'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${greenMarker1}", "click", function(sym, e) {
         if (marker[11][2] == 0)
         {
         	sym.$("greenMarker1").css({"opacity":0.2});
         	marker[11][2] = 1;
         } else
         {
         	sym.$("greenMarker1").css({"opacity":1});
         	marker[11][2] = 0;
         };
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${blueMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[11][1] == 0)
         {
         	sym.$("blueMarker1").css({"opacity":0.2});
         	marker[11][1] = 1;
         } else
         {
         	sym.$("blueMarker1").css({"opacity":1});
         	marker[11][1] = 0;
         }
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${redMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[11][0] == 0)
         {
         	sym.$("redMarker1").css({"opacity":0.2});
         	marker[11][0] = 1;
         } else
         {
         	sym.$("redMarker1").css({"opacity":1});
         	marker[11][0] = 0;
         }
      
      });
      //Edge binding end

   })("marker_11");
   //Edge symbol end:'marker_11'

   //=========================================================
   
   //Edge symbol: 'marker_12'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${greenMarker1}", "click", function(sym, e) {
         if (marker[12][2] == 0)
         {
         	sym.$("greenMarker1").css({"opacity":0.2});
         	marker[12][2] = 1;
         } else
         {
         	sym.$("greenMarker1").css({"opacity":1});
         	marker[12][2] = 0;
         };
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${blueMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[12][1] == 0)
         {
         	sym.$("blueMarker1").css({"opacity":0.2});
         	marker[12][1] = 1;
         } else
         {
         	sym.$("blueMarker1").css({"opacity":1});
         	marker[12][1] = 0;
         }
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${redMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[12][0] == 0)
         {
         	sym.$("redMarker1").css({"opacity":0.2});
         	marker[12][0] = 1;
         } else
         {
         	sym.$("redMarker1").css({"opacity":1});
         	marker[12][0] = 0;
         }
      
      });
      //Edge binding end

   })("marker_12");
   //Edge symbol end:'marker_12'

   //=========================================================
   
   //Edge symbol: 'marker_13'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${greenMarker1}", "click", function(sym, e) {
         if (marker[13][2] == 0)
         {
         	sym.$("greenMarker1").css({"opacity":0.2});
         	marker[13][2] = 1;
         } else
         {
         	sym.$("greenMarker1").css({"opacity":1});
         	marker[13][2] = 0;
         };
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${blueMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[13][1] == 0)
         {
         	sym.$("blueMarker1").css({"opacity":0.2});
         	marker[13][1] = 1;
         } else
         {
         	sym.$("blueMarker1").css({"opacity":1});
         	marker[13][1] = 0;
         }
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${redMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[13][0] == 0)
         {
         	sym.$("redMarker1").css({"opacity":0.2});
         	marker[13][0] = 1;
         } else
         {
         	sym.$("redMarker1").css({"opacity":1});
         	marker[13][0] = 0;
         }
      
      });
      //Edge binding end

   })("marker_13");
   //Edge symbol end:'marker_13'

   //=========================================================
   
   //Edge symbol: 'marker_14'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${greenMarker1}", "click", function(sym, e) {
         if (marker[14][2] == 0)
         {
         	sym.$("greenMarker1").css({"opacity":0.2});
         	marker[14][2] = 1;
         } else
         {
         	sym.$("greenMarker1").css({"opacity":1});
         	marker[14][2] = 0;
         };
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${blueMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[14][1] == 0)
         {
         	sym.$("blueMarker1").css({"opacity":0.2});
         	marker[14][1] = 1;
         } else
         {
         	sym.$("blueMarker1").css({"opacity":1});
         	marker[14][1] = 0;
         }
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${redMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[14][0] == 0)
         {
         	sym.$("redMarker1").css({"opacity":0.2});
         	marker[14][0] = 1;
         } else
         {
         	sym.$("redMarker1").css({"opacity":1});
         	marker[14][0] = 0;
         }
      
      });
      //Edge binding end

   })("marker_14");
   //Edge symbol end:'marker_14'

   //=========================================================
   
   //Edge symbol: 'marker_15'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${greenMarker1}", "click", function(sym, e) {
         if (marker[15][2] == 0)
         {
         	sym.$("greenMarker1").css({"opacity":0.2});
         	marker[15][2] = 1;
         } else
         {
         	sym.$("greenMarker1").css({"opacity":1});
         	marker[15][2] = 0;
         };
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${blueMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[15][1] == 0)
         {
         	sym.$("blueMarker1").css({"opacity":0.2});
         	marker[15][1] = 1;
         } else
         {
         	sym.$("blueMarker1").css({"opacity":1});
         	marker[15][1] = 0;
         }
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${redMarker1}", "click", function(sym, e) {
         // insert code for mouse click here
         if (marker[15][0] == 0)
         {
         	sym.$("redMarker1").css({"opacity":0.2});
         	marker[15][0] = 1;
         } else
         {
         	sym.$("redMarker1").css({"opacity":1});
         	marker[15][0] = 0;
         }
      
      });
      //Edge binding end

   })("marker_15");
   //Edge symbol end:'marker_15'

   //=========================================================
   
   //Edge symbol: 'redchoice_1'
   (function(symbolName) {   
   
      })("greenChoice");
   //Edge symbol end:'greenChoice'

   //=========================================================
   
   //Edge symbol: 'mult2s'
   (function(symbolName) {   
   
      

      

      

   })("mult2s");
   //Edge symbol end:'mult2s'

   //=========================================================
   
   //Edge symbol: 'odd'
   (function(symbolName) {   
   
      

      

   })("odd");
   //Edge symbol end:'odd'

   //=========================================================
   
   //Edge symbol: 'greaterneg10'
   (function(symbolName) {   
   
      

      

   })("greaterneg10");
   //Edge symbol end:'greaterneg10'

   //=========================================================
   
   //Edge symbol: 'greater50'
   (function(symbolName) {   
   
      

      

   })("greater50");
   //Edge symbol end:'greater50'

   //=========================================================
   
   //Edge symbol: 'neg55'
   (function(symbolName) {   
   
   })("neg55");
   //Edge symbol end:'neg55'

   //=========================================================
   
   //Edge symbol: 'neg80'
   (function(symbolName) {   
   
   })("neg80");
   //Edge symbol end:'neg80'

   //=========================================================
   
   //Edge symbol: 'lessneg10'
   (function(symbolName) {   
   
      

      

   })("lessneg10");
   //Edge symbol end:'lessneg10'

   //=========================================================
   
   //Edge symbol: 'less50'
   (function(symbolName) {   
   
      

      

   })("less50");
   //Edge symbol end:'less50'

   //=========================================================
   
   //Edge symbol: 'mult10'
   (function(symbolName) {   
   
      

      

   })("mult10");
   //Edge symbol end:'mult10'

   //=========================================================
   
   //Edge symbol: 'mult4'
   (function(symbolName) {   
   
      

      

   })("mult4");
   //Edge symbol end:'mult4'

   //=========================================================
   
   //Edge symbol: 'mult5'
   (function(symbolName) {   
   
      

      

   })("mult5");
   //Edge symbol end:'mult5'

   //=========================================================
   
   //Edge symbol: 'mult3s'
   (function(symbolName) {   
   
      

      

   })("mult3s");
   //Edge symbol end:'mult3s'

   //=========================================================
   
   //Edge symbol: 'neg100'
   (function(symbolName) {   
   
   })("neg100");
   //Edge symbol end:'neg100'

   //=========================================================
   
   //Edge symbol: 'posdiv27'
   (function(symbolName) {   
   
      

      

   })("posdiv27");
   //Edge symbol end:'posdiv27'

   //=========================================================
   
   //Edge symbol: 'posdiv24'
   (function(symbolName) {   
   
      

      

   })("posdiv24");
   //Edge symbol end:'posdiv24'

   //=========================================================
   
   //Edge symbol: 'posprime'
   (function(symbolName) {   
   
      

      

   })("posprime");
   //Edge symbol end:'posprime'

   //=========================================================
   
   //Edge symbol: 'posdiv20'
   (function(symbolName) {   
   
      

      

   })("posdiv20");
   //Edge symbol end:'posdiv20'

   //=========================================================
   
   //Edge symbol: 'posdiv18'
   (function(symbolName) {   
   
      

      

   })("posdiv18");
   //Edge symbol end:'posdiv18'

   //=========================================================
   
   //Edge symbol: 'posdiv12'
   (function(symbolName) {   
   
      

      

   })("posdiv12");
   //Edge symbol end:'posdiv12'

   //=========================================================
   
   //Edge symbol: 'pos1'
   (function(symbolName) {   
   
   })("pos1");
   //Edge symbol end:'pos1'

   //=========================================================
   
   //Edge symbol: 'zero'
   (function(symbolName) {   
   
   })("zero");
   //Edge symbol end:'zero'

   //=========================================================
   
   //Edge symbol: 'neg1'
   (function(symbolName) {   
   
   })("neg1");
   //Edge symbol end:'neg1'

   //=========================================================
   
   //Edge symbol: 'neg5'
   (function(symbolName) {   
   
   })("neg5");
   //Edge symbol end:'neg5'

   //=========================================================
   
   //Edge symbol: 'neg10'
   (function(symbolName) {   
   
   })("neg10");
   //Edge symbol end:'neg10'

   //=========================================================
   
   //Edge symbol: 'neg15'
   (function(symbolName) {   
   
   })("neg15");
   //Edge symbol end:'neg15'

   //=========================================================
   
   //Edge symbol: 'pos18'
   (function(symbolName) {   
   
   })("pos18");
   //Edge symbol end:'pos18'

   //=========================================================
   
   //Edge symbol: 'pos12'
   (function(symbolName) {   
   
   })("pos12");
   //Edge symbol end:'pos12'

   //=========================================================
   
   //Edge symbol: 'pos99'
   (function(symbolName) {   
   
   })("pos99");
   //Edge symbol end:'pos99'

   //=========================================================
   
   //Edge symbol: 'pos60'
   (function(symbolName) {   
   
   })("pos60");
   //Edge symbol end:'pos60'

   //=========================================================
   
   //Edge symbol: 'pos50'
   (function(symbolName) {   
   
   })("pos50");
   //Edge symbol end:'pos50'

   //=========================================================
   
   //Edge symbol: 'pos45'
   (function(symbolName) {   
   
   })("pos45");
   //Edge symbol end:'pos45'

   //=========================================================
   
   //Edge symbol: 'pos40'
   (function(symbolName) {   
   
   })("pos40");
   //Edge symbol end:'pos40'

   //=========================================================
   
   //Edge symbol: 'pos27'
   (function(symbolName) {   
   
   })("pos27");
   //Edge symbol end:'pos27'

   //=========================================================
   
   //Edge symbol: 'pos24'
   (function(symbolName) {   
   
   })("pos24");
   //Edge symbol end:'pos24'

   //=========================================================
   
   //Edge symbol: 'pos20'
   (function(symbolName) {   
   
   })("pos20");
   //Edge symbol end:'pos20'

   //=========================================================
   
   //Edge symbol: 'pos10'
   (function(symbolName) {   
   
   })("pos10");
   //Edge symbol end:'pos10'

   //=========================================================
   
   //Edge symbol: 'pos9'
   (function(symbolName) {   
   
   })("pos9");
   //Edge symbol end:'pos9'

   //=========================================================
   
   //Edge symbol: 'pos8'
   (function(symbolName) {   
   
   })("pos8");
   //Edge symbol end:'pos8'

   //=========================================================
   
   //Edge symbol: 'pos7'
   (function(symbolName) {   
   
   })("pos7");
   //Edge symbol end:'pos7'

   //=========================================================
   
   //Edge symbol: 'pos6'
   (function(symbolName) {   
   
   })("pos6");
   //Edge symbol end:'pos6'

   //=========================================================
   
   //Edge symbol: 'pos5'
   (function(symbolName) {   
   
   })("pos5");
   //Edge symbol end:'pos5'

   //=========================================================
   
   //Edge symbol: 'pos4'
   (function(symbolName) {   
   
   })("pos4");
   //Edge symbol end:'pos4'

   //=========================================================
   
   //Edge symbol: 'pos3'
   (function(symbolName) {   
   
   })("pos3");
   //Edge symbol end:'pos3'

   //=========================================================
   
   //Edge symbol: 'pos2'
   (function(symbolName) {   
   
   })("pos2");
   //Edge symbol end:'pos2'

   //=========================================================
   
   //Edge symbol: 'pos105'
   (function(symbolName) {   
   
   })("pos105");
   //Edge symbol end:'pos105'

   //=========================================================
   
   //Edge symbol: 'pos100'
   (function(symbolName) {   
   
   })("pos100");
   //Edge symbol end:'pos100'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-587455394");