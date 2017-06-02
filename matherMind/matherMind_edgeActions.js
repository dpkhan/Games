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
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         
         ansTest = ["","","","",""];
         inCount = 0;
         outCount = 0;
         answer = "";
         nextTile = -1;
         nextOp = -1;
         
         for ( var i=1; i < 11; i++)
         {
         	for( var j=1; j < 6; j++) 
         	{
         		sym.$("try"+i+"in"+j).hide();
         		sym.$("try"+i+"out"+j).hide();
         	};
         };
         
         sym.$("try1in1").hide();
         sym.$("try1in2").hide();
         sym.$("try1in3").hide();
         sym.$("try1in4").hide();
         sym.$("try1in5").hide();
         sym.$("try1out1").hide();
         sym.$("try1out2").hide();
         sym.$("try1out3").hide();
         sym.$("try1out4").hide();
         sym.$("try1out5").hide();
         
         sym.$("opTile0").html("+").css({"text-align":"center","line-height":"80px", "color": "#4b41df",
         											"font-family":"carter-one, sans-serif","font-size":"60px"});
         sym.$("opTile0").draggable({helper:'clone', start: function(e,ui){nextTile = '+'; nextOp = 0}, drag: function(e,ui){}, 
         											revert: 'invalid', scope: 1}).css('touch-action', 'none');
         sym.$("opTile1").html("-").css({"text-align":"center","line-height":"80px", "color": "#4b41df",
         											"font-family":"carter-one, sans-serif","font-size":"60px"});
         sym.$("opTile1").draggable({helper:'clone', start: function(e,ui){nextTile = '-'; nextOp = 1}, drag: function(e,ui){}, 
         											revert: 'invalid', scope: 1}).css('touch-action', 'none');
         sym.$("opTile2").html('&times').css({"text-align":"center","line-height":"80px", "color": "#4b41df",
         											"font-family":"carter-one, sans-serif","font-size":"60px"});
         sym.$("opTile2").draggable({helper:'clone', start: function(e,ui){nextTile = '&times'; nextOp = 2}, drag: function(e,ui){}, 
         											revert: 'invalid', scope: 1}).css('touch-action', 'none');
         sym.$("opTile3").html('&divide').css({"text-align":"center","line-height":"80px", "color": "#4b41df",
         											"font-family":"carter-one, sans-serif","font-size":"60px"});
         sym.$("opTile3").draggable({helper:'clone', start: function(e,ui){nextTile = '&divide'; nextOp = 3}, drag: function(e,ui){}, 
         											revert: 'invalid', scope: 1}).css('touch-action', 'none');
         
         sym.$("numTile1").html(1).css({"text-align":"center","line-height":"80px", "color": "#4b41df",
         											"font-family":"carter-one, sans-serif","font-size":"60px"});
         sym.$("numTile1").draggable({helper:'clone', start: function(e,ui){nextTile = 1}, drag: function(e,ui){}, 
         											revert: 'invalid', scope: 0}).css('touch-action', 'none');
         sym.$("numTile2").html(2).css({"text-align":"center","line-height":"80px", "color": "#4b41df",
         											"font-family":"carter-one, sans-serif","font-size":"60px"});
         sym.$("numTile2").draggable({helper:'clone', start: function(e,ui){nextTile = 2}, drag: function(e,ui){}, 
         											revert: 'invalid', scope: 0}).css('touch-action', 'none');
         sym.$("numTile3").html(3).css({"text-align":"center","line-height":"80px", "color": "#4b41df",
         											"font-family":"carter-one, sans-serif","font-size":"60px"});
         sym.$("numTile3").draggable({helper:'clone', start: function(e,ui){nextTile = 3}, drag: function(e,ui){}, 
         											revert: 'invalid', scope: 0}).css('touch-action', 'none');
         sym.$("numTile4").html(4).css({"text-align":"center","line-height":"80px", "color": "#4b41df",
         											"font-family":"carter-one, sans-serif","font-size":"60px"});
         sym.$("numTile4").draggable({helper:'clone', start: function(e,ui){nextTile = 4}, drag: function(e,ui){}, 
         											revert: 'invalid', scope: 0}).css('touch-action', 'none');
         sym.$("numTile5").html(5).css({"text-align":"center","line-height":"80px", "color": "#4b41df",
         											"font-family":"carter-one, sans-serif","font-size":"60px"});
         sym.$("numTile5").draggable({helper:'clone', start: function(e,ui){nextTile = 5}, drag: function(e,ui){}, 
         											revert: 'invalid', scope: 0}).css('touch-action', 'none');
         sym.$("numTile6").html(6).css({"text-align":"center","line-height":"80px", "color": "#4b41df",
         											"font-family":"carter-one, sans-serif","font-size":"60px"});
         sym.$("numTile6").draggable({helper:'clone', start: function(e,ui){nextTile = 6}, drag: function(e,ui){}, 
         											revert: 'invalid', scope: 0}).css('touch-action', 'none');
         sym.$("numTile7").html(7).css({"text-align":"center","line-height":"80px", "color": "#4b41df",
         											"font-family":"carter-one, sans-serif","font-size":"60px"});
         sym.$("numTile7").draggable({helper:'clone', start: function(e,ui){nextTile = 7}, drag: function(e,ui){}, 
         											revert: 'invalid', scope: 0}).css('touch-action', 'none');
         sym.$("numTile8").html(8).css({"text-align":"center","line-height":"80px", "color": "#4b41df",
         											"font-family":"carter-one, sans-serif","font-size":"60px"});
         sym.$("numTile8").draggable({helper:'clone', start: function(e,ui){nextTile = 8}, drag: function(e,ui){}, 
         											revert: 'invalid', scope: 0}).css('touch-action', 'none');
         sym.$("numTile9").html(9).css({"text-align":"center","line-height":"80px", "color": "#4b41df",
         											"font-family":"carter-one, sans-serif","font-size":"60px"});
         sym.$("numTile9").draggable({helper:'clone', start: function(e,ui){nextTile = 9}, drag: function(e,ui){}, 
         											revert: 'invalid', scope: 0}).css('touch-action', 'none');
         
         sym.$("p0").droppable({	scope:0, 
         								drop: function(e,ui){ 
         											ansNums[0] = nextTile;
         											sym.$("guess1").html(nextTile).fadeIn("fast").css({"text-align":"center","line-height":"175px",
         																	"font-family":"carter-one, sans-serif","font-size":"150px"});
         											testAnswer(numberChoice[0],numberChoice[1],numberChoice[2],opChoice[0],opChoice[1]);
         										}
         								});
         sym.$("p1").droppable({ scope:1,
         								drop: function(e,ui){ 
         											ansOps[0] = nextOp;
         											sym.$("guess2").html(nextTile).fadeIn("fast").css({"text-align":"center","line-height":"175px",
         																	"font-family":"carter-one, sans-serif","font-size":"150px"});
         											testAnswer(numberChoice[0],numberChoice[1],numberChoice[2],opChoice[0],opChoice[1]);
         										}
         								});
         sym.$("p2").droppable({ scope:0,
         								drop: function(e,ui){ 
         											ansNums[1] = nextTile;
         											sym.$("guess3").html(nextTile).fadeIn("fast").css({"text-align":"center","line-height":"175px",
         																	"font-family":"carter-one, sans-serif","font-size":"150px"});
         											testAnswer(numberChoice[0],numberChoice[1],numberChoice[2],opChoice[0],opChoice[1]);
         										}
         								});
         sym.$("p3").droppable({ scope:1,
         								drop: function(e,ui){
         											ansOps[1] = nextOp;
         											sym.$("guess4").html(nextTile).fadeIn("fast").css({"text-align":"center","line-height":"175px",
         																	"font-family":"carter-one, sans-serif","font-size":"150px"});
         											testAnswer(numberChoice[0],numberChoice[1],numberChoice[2],opChoice[0],opChoice[1]);
         										}
         								});
         sym.$("p4").droppable({ scope:0,
         								drop: function(e,ui){ 
         											ansNums[2] = nextTile;
         											sym.$("guess5").html(nextTile).fadeIn("fast").css({"text-align":"center","line-height":"175px",
         																	"font-family":"carter-one, sans-serif","font-size":"150px"});
         											testAnswer(numberChoice[0],numberChoice[1],numberChoice[2],opChoice[0],opChoice[1]);
         										}
         								});
         
         findTarget();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         opSymbols = ["+","&#8722","&times","&divide"];
         numberChoice = ["","",""];
         opChoice = ["",""];
         ansOps = ["",""];
         ansNums = ["","",""];
         count = 0;
         colorCount = 0;
         blueFreezes = 3;
         redFreezes = 3;
         blueClears = 2;
         redClears = 2;
         blueSkips = 1;
         redSkips = 1;
         cleared = 0;
         paused = -1;
         
         TIME_CONST = 45;
         
         //sym.$("freezeTime").html("test").css({"text-align":"center","line-height":"120px","font-size":"100px"});
         
         start_time = new Date();
         start_freeze = "";
         freeze_time = new Date();
         freezeTime = "";
         
         
         opArray = ['+','-','*','/'];
         plus = function(x,y){return x+y };
         minus = function(x,y){return x-y };
         times = function(x,y){return x*y };
         divide = function(x,y){return x/y };
         operations = {'+':plus,'-':minus,'*':times,'/':divide};
         targetArray = ["","","","",""];
         
         numberChoice = ["", "", ""];
         opChoice = ["", ""];
         
         
         calculate = function(opIndex1, opIndex2, x, y, z){
         	var tempo1 = 0;
         	var tempo2 = 0;
         	if ( ((opIndex1 == 0) || (opIndex1 == 1)) && ((opIndex2 == 2) || (opIndex2 == 3)) )
         	{
         		if ((opIndex2!=3) || (z != 0))
         		{
         			tempo1 = operations[opArray[opIndex2]](y,z);
         			if ((opIndex1!=3) || (tempo1 != 0)){
         				tempo2 = operations[opArray[opIndex1]](x,tempo1);
         			} else
         			{
         				tempo2 = null;
         			}
         		} else
         		{
         
         		}
         	}else{
         		if ((opIndex1!=3) || (y != 0))
         		{
         			tempo1 = operations[opArray[opIndex1]](x,y);
         			if ((opIndex2!=3) || (z != 0)){
         				tempo2 = operations[opArray[opIndex2]](tempo1,z);
         			} else
         			{
         				tempo2 = null;			
         			}
         		} else
         		{
         			tempo2 = null;		
         		}
         	};
         	return tempo2;
         };
         
         
         findTarget = function()
         {
         
         	var temp = 0;
         	var answer = "";
         
         	numberChoice = ["", "", ""];
         	opChoice = ["", ""];
         
         	do
         	{
         		for( var i=0; i<3; i++) 
         		{
         			do{
         				temp = 1 + Math.floor(Math.random()*9);
         			}while(numberChoice.indexOf(temp) > -1);
         			numberChoice[i]=temp;
         		};
         		for( var i=0; i<2; i++) 
         		{
         			do{
         				temp = Math.floor(Math.random()*4);
         			}while(opChoice.indexOf(temp) > -1);
         			opChoice[i] = temp;
         		};
         		answer = calculate(opChoice[0],opChoice[1],numberChoice[0],numberChoice[1],numberChoice[2])
         	}while((answer < 1) || (answer > 100) || (answer == null) || ((answer%1) != 0)); 
         
         
         
         	targetArray = [numberChoice[0],opChoice[0],numberChoice[1],opChoice[1],numberChoice[2]];
         
         
         	/*	sym.$("p0").html(numberChoice[0]).css({"text-align":"center","line-height":"175px",
         											"font-family":"carter-one, sans-serif","font-size":"150px"});
         	sym.$("p1").html(opArray[opChoice[0]]).css({"text-align":"center","line-height":"175px",
         											"font-family":"carter-one, sans-serif","font-size":"150px"});
         	sym.$("p2").html(numberChoice[1]).css({"text-align":"center","line-height":"175px",
         											"font-family":"carter-one, sans-serif","font-size":"150px"});
         	sym.$("p3").html(opArray[opChoice[1]]).css({"text-align":"center","line-height":"150px",
         											"font-family":"carter-one, sans-serif","font-size":"150px"});
         	sym.$("p4").html(numberChoice[2]).css({"text-align":"center","line-height":"175px",
         											"font-family":"carter-one, sans-serif","font-size":"150px"}); */
         
         	sym.getSymbol("teamSwitcher").$("target").html(answer).css({"text-align":"center","line-height":"200px",
         											"font-family":"carter-one, sans-serif","font-size":"175px"});	
         
         };
         
         
         testAnswer = function(a,b,c,d,e)
         {
         inCount = 0;
         outCount = 0;
         
         var numbers = [a,b,c];
         var ops = [d,e];
         
         
         if ( (ansOps.indexOf("") == -1) && (ansNums.indexOf("") == -1) )
         {	
         		sym.$("tile"+((count+1)%10)+"1").fadeOut("fast");
         		sym.$("tile"+((count+1)%10)+"2").fadeOut("fast");
         		sym.$("tile"+((count+1)%10)+"3").fadeOut("fast");
         		sym.$("tile"+((count+1)%10)+"4").fadeOut("fast");
         		sym.$("tile"+((count+1)%10)+"5").fadeOut("fast");
         
         		for( var i=1; i < 5; i++) 	
         		{
         			sym.$("try"+((count+2)%10)+"in"+i).fadeOut();
         		};	
         
         		for( var i=1; i < 5; i++) 	
         		{
         			sym.$("try"+((count+2)%10)+"out"+i).fadeOut();
         		};
         
         
         
         		sym.$("tile"+(count%10)+"1").html(ansNums[0]).fadeIn("fast").css({"text-align":"center","line-height":"50px",
         												"font-family":"carter-one, sans-serif","font-size":"50px"});
         		sym.$("tile"+(count%10)+"2").html(opSymbols[ansOps[0]]).fadeIn("fast").css({"text-align":"center","line-height":"50px",
         												"font-family":"carter-one, sans-serif","font-size":"50px"});
         		sym.$("tile"+(count%10)+"3").html(ansNums[1]).fadeIn("fast").css({"text-align":"center","line-height":"50px",
         												"font-family":"carter-one, sans-serif","font-size":"50px"});
         		sym.$("tile"+(count%10)+"4").html(opSymbols[ansOps[1]]).fadeIn("fast").css({"text-align":"center","line-height":"50px",
         												"font-family":"carter-one, sans-serif","font-size":"50px"});
         		sym.$("tile"+(count%10)+"5").html(ansNums[2]).fadeIn("fast").css({"text-align":"center","line-height":"50px",
         												"font-family":"carter-one, sans-serif","font-size":"50px"});
         
         
         		for( var i=0; i < ops.length; i++) 
         		{
         			if ( ops[i] == ansOps[i] )
         			{
         				inCount++;
         				ansOps[i] = -2;
         				ops[i] = -1;
         			}
         		};
         
         		for( var i=0; i < numbers.length; i++) 
         		{
         			if ( numbers[i] == ansNums[i] )
         			{
         				inCount++;
         				ansNums[i] = -2;
         				numbers[i] = -1;
         			}
         		};
         		for( var i=0; i < ops.length; i++) 
         		{
         			for( var j=0; j < ops.length; j++)
         			{
         				if ( ops[j] == ansOps[i] )
         				{
         					ops[j] = -1;
         					ansOps[i] = -2;
         					outCount++;
         				}
         			}
         		};
         		for( var i=0; i < numbers.length; i++) 
         		{
         			for( var j=0; j < numbers.length; j++) 
         			{	
         				if ( numbers[j] == ansNums[i] )
         				{
         					outCount++;
         					numbers[j] = -1;
         					ansNums[i] = -2;
         				}
         			}
         		};
         
         		for( var i=1; i < 6; i++) 
         		{	
         			sym.$("guess"+i).html("").fadeOut("fast").css({"text-align":"center","line-height":"175px",
         																		"font-family":"carter-one, sans-serif","font-size":"150px"})
         		};	
         
         		for( var i=1; i < (inCount+1); i++) 	
         		{
         			sym.$("try"+(count%10 + 1)+"in"+i).fadeIn();
         		};	
         
         		for( var i=1; i < (outCount+1); i++) 	
         		{
         			sym.$("try"+(count%10 + 1)+"out"+i).fadeIn();
         		};
         
         		count++;
         
         		ansOps = ["",""];
         		ansNums = ["","",""];
         
         
         if ( inCount == 5)
         {
         
         	sym.$("p0").html(numberChoice[0]).css({"text-align":"center","line-height":"175px",
         											"font-family":"carter-one, sans-serif","font-size":"150px"});
         	sym.$("p1").html(opSymbols[opChoice[0]]).css({"text-align":"center","line-height":"175px",
         											"font-family":"carter-one, sans-serif","font-size":"150px"});
         	sym.$("p2").html(numberChoice[1]).css({"text-align":"center","line-height":"175px",
         											"font-family":"carter-one, sans-serif","font-size":"150px"});
         	sym.$("p3").html(opSymbols[opChoice[1]]).css({"text-align":"center","line-height":"150px",
         											"font-family":"carter-one, sans-serif","font-size":"150px"});
         	sym.$("p4").html(numberChoice[2]).css({"text-align":"center","line-height":"175px",
         											"font-family":"carter-one, sans-serif","font-size":"150px"}); 
         
         	if ((colorCount%2) == 1)
         	{
         		sym.$("blueWins").fadeIn();
         		sym.getSymbol("endButton").$("RoundRect").css({"background-image":"linear-gradient(180deg,rgba(8,12,147,1.00) 0%,rgba(0,6,239,1.00) 100%)"});
         	} else
         	{
         		sym.$("redWins").fadeIn();
         	}
         
         	stopTime2('Red');
         	stopTime2('Blue');
         
         	sym.$("endCover").fadeIn();
         
         }else
         {
         //	sym.getSymbol("teamSwitcher").$(color+"Cover2").hide();
         //	sym.getSymbol("teamSwitcher").$(color+"Cover1").show();
         
         	if ((colorCount%2) == 1)
         	{
         //		sym.getSymbol("teamSwitcher").play(1000);
         //		startTime(TIME_CONST,'Blue');
         		stopTime('Blue');
         		startTime(0,'Blue');
         		sym.getSymbol("teamSwitcher").$("BlueCover2").hide();
         		sym.getSymbol("teamSwitcher").$("BlueCover1").show();
         	} else
         	{
         //		sym.getSymbol("teamSwitcher").playReverse(2000);
         //		startTime(TIME_CONST,'Red');
         		stopTime('Red');
         		startTime(0,'Red');
         		sym.getSymbol("teamSwitcher").$("RedCover2").hide();
         		sym.getSymbol("teamSwitcher").$("RedCover1").show();	}
         };
         
         
         };
         
         sym.$("In").html(inCount).css({"text-align":"center","line-height":"80px", "color": "#4b41df",
         											"font-family":"carter-one, sans-serif","font-size":"60px"});
         
         sym.$("Out").html(outCount).css({"text-align":"center","line-height":"80px", "color": "#4b41df",
         											"font-family":"carter-one, sans-serif","font-size":"60px"});
         
         };
         
         startTime = function(n, color)
         {
         	start_time = new Date();
         	myTimer = setInterval(function() { onTimer(n+5,color); },100);
         	sym.getSymbol("teamSwitcher").$(color+"Cover2").show();
         
         };
         
         
         stopTime = function(color)
         {
         	clearInterval(myTimer);
         	sym.$("timeBox"+color).html("00.0");
         	for( var i=1; i < 6; i++) 
         	{	
         		sym.$("guess"+i).html("").fadeOut("fast").css({"text-align":"center","line-height":"175px",
         																	"font-family":"carter-one, sans-serif","font-size":"150px"})
         	};	
         	ansOps = ["",""];
         	ansNums = ["","",""];
         
         };
         
         onTimer = function (n,color) 
         {
         	var start_milli = start_time.getTime();
         	var current_time = new Date();
         	var elapsed_time = n*10 -(current_time.getTime() - start_milli)/100;
         	var hundredths = Math.floor(elapsed_time%10);
         	var seconds = Math.floor((elapsed_time/10)%60) - 5;
         	var minutes = Math.floor((elapsed_time/600)%60);
         	var time_string =  ((seconds < 10)?('0'+ seconds + '.'):( seconds + '.' )) + hundredths; //minutes + ':' + 
         
         	paused =0;
         
         	if (elapsed_time <= 0)
         	{
         		hundredths = 0;
         		seconds = 0;
         		minutes = 0;
         //		time_string =  'test';//'00.0'; //minutes + ':'  + 
         		stopTime(color);
         		paused = -1;
         		colorCount++;
         		if ((colorCount%2) == 1)
         		{
         //			stopTime('Red');
         			sym.getSymbol("teamSwitcher").play(1000);
         			startTime(TIME_CONST,'Blue');
         		} else
         		{
         //			stopTime('Blue');
         			sym.getSymbol("teamSwitcher").playReverse(1999);
         			startTime(TIME_CONST,'Red');
         		};	
         		cleared = 0;
         	}else if (elapsed_time <= 50)
         	{
         		sym.$("freezeTime").show();
         		sym.getSymbol("teamSwitcher").$(color+"Cover1").show();
         		seconds = Math.floor((elapsed_time/10)%60);
         		time_string =  ((seconds < 10)?('0'+ seconds + '.'):( seconds + '.' )) + hundredths;
         		sym.getSymbol("teamSwitcher").$("timeBox"+color).html(time_string).css({"color":"red","text-align":"center","line-height":"120px","font-size":"100px"});
         	}else
         	{
         		sym.$("freezeTime").hide();
         		sym.getSymbol("teamSwitcher").$("timeBox"+color).html(time_string).css({"color":"black","text-align":"center","line-height":"120px","font-size":"100px"});
         	}
         };
         
         clear = function(color,clearButton)
         {
         	count = 0;
         	cleared == 1;
         	for ( var i=0; i < 10; i++) 
         	{
         		sym.$("tile"+i+"1").fadeOut("fast");
         		sym.$("tile"+i+"2").fadeOut("fast");
         		sym.$("tile"+i+"3").fadeOut("fast");
         		sym.$("tile"+i+"4").fadeOut("fast");
         		sym.$("tile"+i+"5").fadeOut("fast");
         
         		for( var j=1; j < 5; j++) 	
         		{
         			sym.$("try"+(i+1)+"in"+j).fadeOut();
         		};	
         
         		for( var j=1; j < 5; j++) 	
         		{
         			sym.$("try"+(i+1)+"out"+j).fadeOut();
         		};
         
         	};
         	sym.getSymbol("teamSwitcher").$(clearButton).remove();
         	sym.getSymbol("teamSwitcher").$(color+"Cover2").show();
         };
         
         freeze = function(color,freezeButton)
         {
         	var current_time = new Date();
         	var start_milli = start_time.getTime();
         	start_freeze = 45 -(current_time.getTime() - start_milli)/1000;
         	if (start_freeze < 10)
         	{
         		start_freeze = 10;
         	};
         	sym.$("freezeTime").show();
         	stopTime2(color);
         	freeze_time = new Date();
         	freezer = setInterval(function() { freezeTimer(10); },100);
         	sym.getSymbol("teamSwitcher").$(freezeButton).remove();
         	sym.getSymbol("teamSwitcher").$(color+"Cover1").show();
         };
         
         pause = function()
         {
         	var current_time = new Date();
         	var start_pause = start_time.getTime();
         	stopTime('Blue');	
         	stopTime('Red');	
         	start_freeze = 45 -(current_time.getTime() - start_pause)/1000;
         	if (start_freeze < 10)
         	{
         		start_freeze = 10;
         	};
         };
         
         unpause = function(){
         
         	var current_time = new Date();
         //	start_time = 1000*
         	if ((colorCount%2) == 1)
         	{
         		stopTime('Blue');		
         		startTime(start_freeze,'Blue');
         	} else
         	{
         		stopTime('Red');	
         		startTime(start_freeze,'Red');
         	};
         
         }
         
         freezeTimer = function (n) 
         {
         	var start_milli = freeze_time.getTime();
         	var current_time = new Date();
         	var elapsed_time = n*10 -(current_time.getTime() - start_milli)/100;
         	var hundredths = Math.floor(elapsed_time%10);
         	var seconds = Math.floor((elapsed_time/10)%60);
         	var minutes = Math.floor((elapsed_time/600)%60);
         	var time_string =  ((seconds < 10)?('0'+ seconds + '.'):( seconds + '.' )) + hundredths; //minutes + ':' + 
         
         	if (elapsed_time <= 0)
         	{
         		hundredths = 0;
         		seconds = 0;
         		minutes = 0;
         		time_string =  '00.0'; //minutes + ':'  + 
         		sym.$("freezeTime").html("");
         		stopFreeze();
         		if ((colorCount%2) == 1)
         		{
         			startTime(start_freeze,'Blue');
         		} else
         		{
         			startTime(start_freeze,'Red');
         		};
         	}else
         	{
         		sym.$("freezeTime").html(time_string).css({"color":"red","text-align":"center","line-height":"220px","font-size":"200px"});
         	}
         };
         
         stopFreeze = function() {
         	clearInterval(freezer);
         	sym.$("freezeTime").hide();
         };
         
         skip = function(skipButton)
         {
         	colorCount++;
         	sym.getSymbol("teamSwitcher").$(skipButton).remove();
         };
         
         stopTime2 = function(color)
         {
         	clearInterval(myTimer);
         	sym.$("timeBox"+color).html("00.0");
         };
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "keydown", function(sym, e) {
         // insert code to be run when the user presses a key.
         // The variable “e.which” tells you the key code of the key that was pressed, e.g. 32 = space
         var current_time = new Date();
         var start_milli = start_time.getTime();
         
         if (e.which == 32) {
         	if ((colorCount%2) == 1)
         	{
         		stopTime('Blue');	
         	} else
         	{
         		stopTime('Red');
         	};
         
         	sym.$("p0").html(numberChoice[0]).css({"text-align":"center","line-height":"175px",
         											"font-family":"carter-one, sans-serif","font-size":"150px"});
         	sym.$("p1").html(opSymbols[opChoice[0]]).css({"text-align":"center","line-height":"175px",
         											"font-family":"carter-one, sans-serif","font-size":"150px"});
         	sym.$("p2").html(numberChoice[1]).css({"text-align":"center","line-height":"175px",
         											"font-family":"carter-one, sans-serif","font-size":"150px"});
         	sym.$("p3").html(opSymbols[opChoice[1]]).css({"text-align":"center","line-height":"150px",
         											"font-family":"carter-one, sans-serif","font-size":"150px"});
         	sym.$("p4").html(numberChoice[2]).css({"text-align":"center","line-height":"175px",
         											"font-family":"carter-one, sans-serif","font-size":"150px"}); 
         
         }else if (e.which == 80) {
         	if (paused == 1)
         	{
         		paused = 0;
         		unpause();
         	} else if (paused == 0)
         	{
         		paused = 1;
         		pause();
         	}
         
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'teamSwitcher'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 996, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${blueClear1}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.getSymbol("blueClear1").playReverse(1000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${blueClear1}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.getSymbol("blueClear1").play(500);
         clear("Blue","blueClear1");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${redClear1}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.getSymbol("redClear1").playReverse(1000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${redClear1}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.getSymbol("redClear1").play(500);
         clear("Red","redClear1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${redSkip}", "mouseup", function(sym, e) {
         sym.getSymbol("redSkip").play(500);
         skip("redSkip");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${redSkip}", "mousedown", function(sym, e) {
         sym.getSymbol("redSkip").playReverse(1000);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${blueSkip}", "mouseup", function(sym, e) {
         sym.getSymbol("blueSkip").play(500);
         skip("blueSkip");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${blueSkip}", "mousedown", function(sym, e) {
         sym.getSymbol("blueSkip").playReverse(1000);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${redClear2}", "mousedown", function(sym, e) {
         sym.getSymbol("redClear2").playReverse(1000);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${redClear2}", "mouseup", function(sym, e) {
         sym.getSymbol("redClear2").play(500);
         clear("Red","redClear2");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${redFreeze1}", "mouseup", function(sym, e) {
         freeze("Red","redFreeze1");
         sym.getSymbol("redFreeze1").play(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${redFreeze1}", "mousedown", function(sym, e) {
         sym.getSymbol("redFreeze1").playReverse(1000);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${blueClear2}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.getSymbol("blueClear1").playReverse(1000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${blueClear2}", "mouseup", function(sym, e) {
         sym.getSymbol("blueClear2").play(500);
         clear("Blue","blueClear2");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${redFreeze3}", "mousedown", function(sym, e) {
         sym.getSymbol("redFreeze3").playReverse(1000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${redFreeze2}", "mousedown", function(sym, e) {
         sym.getSymbol("redFreeze2").playReverse(1000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${redFreeze3}", "mouseup", function(sym, e) {
         freeze("Red","redFreeze3");
         sym.getSymbol("redFreeze3").play(500);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${redFreeze2}", "mouseup", function(sym, e) {
         freeze("Red","redFreeze2");
         sym.getSymbol("redFreeze2").play(500);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${blueFreeze1}", "mouseup", function(sym, e) {
         freeze("Blue","blueFreeze1");
         sym.getSymbol("blueFreeze1").play(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${blueFreeze1}", "mousedown", function(sym, e) {
         sym.getSymbol("blueFreeze1").playReverse(1000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${blueFreeze2}", "mousedown", function(sym, e) {
         sym.getSymbol("blueFreeze2").playReverse(1000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${blueFreeze3}", "mousedown", function(sym, e) {
         sym.getSymbol("blueFreeze3").playReverse(1000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${blueFreeze2}", "mouseup", function(sym, e) {
         freeze("Blue","blueFreeze2");
         sym.getSymbol("blueFreeze2").play(500);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${blueFreeze3}", "mouseup", function(sym, e) {
         freeze("Blue","blueFreeze3");
         sym.getSymbol("blueFreeze3").play(500);
         

      });
      //Edge binding end

   })("teamSwitcher");
   //Edge symbol end:'teamSwitcher'
   
   //Edge symbol: 'beginButton'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${RoundRect}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.play(250);
      
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${RoundRect}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.playReverse(500);
         
         sym.getComposition().getStage().getSymbol("teamSwitcher").play(0);
         startTime(TIME_CONST,'Red');
         sym.getComposition().getStage().$("beginBox").fadeOut();
         

      });
      //Edge binding end

   })("beginButton");
   //Edge symbol end:'beginButton'

   //=========================================================
   
   //Edge symbol: 'redClear'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("redClear");
   //Edge symbol end:'redClear'

   //=========================================================
   
   //Edge symbol: 'blueClear'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("blueClear");
   //Edge symbol end:'blueClear'

   //=========================================================
   
   //Edge symbol: 'redSkip'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("redSkip");
   //Edge symbol end:'redSkip'

   //=========================================================
   
   //Edge symbol: 'blueSkip'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("blueSkip");
   //Edge symbol end:'blueSkip'

   //=========================================================
   
   //Edge symbol: 'blueFreeze'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("blueFreeze");
   //Edge symbol end:'blueFreeze'

   //=========================================================
   
   //Edge symbol: 'blueFreeze_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("redFreeze");
   //Edge symbol end:'redFreeze'
   
   //Edge symbol: 'beginButton_1'
   (function(symbolName) {   
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();
      
      });
         //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${RoundRect}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.play(250);
      
      
      });
         //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${RoundRect}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.playReverse(500);
         location.reload();
         

      });
         //Edge binding end

      })("endButton");
   //Edge symbol end:'endButton'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1130454706");