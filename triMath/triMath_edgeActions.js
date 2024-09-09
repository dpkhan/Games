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
         
         var colors = ["#d50101","#ec7d00","#0d00d9","#0c9603","#91169a"];
         
         sym.$("divideText").html('&divide');
         sym.$("multText").html('&times');
         
         for( var i=0; i<100; i++) 
         {
         	colorChoice[i] = colors[Math.floor(Math.random()*5)];
         	sym.$("R"+i).html(Math.floor(values[i]=(Math.random()*10)+1)).css({"border-color":colorChoice[i],"color":colorChoice[i],
         						"text-align":"center","line-height":"50px","font-family":"carter-one, sans-serif","font-size":"33px"});
         
         };
         var goesFirst = (Math.random()<5)?"blue":"white";
         var startIndex = 0;
         var opIndex1 = 0;
         var opIndex2 = 0;
         var dirIndex = {x:0,y:0};
         var temp = 0;
         for ( var i=0; i<30; i++) 
         {
         		temp = 0;
         		do{
         			startIndex = Math.floor(Math.random()*100);
         			if ( startIndex <20 )
         			{
         				dirIndex.y = Math.floor(Math.random()*2);
         			} else if ( startIndex >80 )
         			{
         				dirIndex.y = Math.floor(Math.random()*2)-1;
         			} else
         			{
         				dirIndex.y = Math.floor(Math.random()*3)-1;
         			};
         			if ( (startIndex % 10) < 2 )
         			{
         				dirIndex.x = Math.floor(Math.random()*2);
         			} else if ( (startIndex % 10) > 7 )
         			{
         				dirIndex.x = Math.floor(Math.random()*2)-1;
         			} else
         			{
         				dirIndex.x = Math.floor(Math.random()*3)-1;
         			};
         			if ( (values[startIndex]%values[startIndex+10*dirIndex.y+dirIndex.x]) == 0)
         			{
         				opIndex1 = Math.floor(Math.random()*4);
         			} else
         			{
         				opIndex1 = Math.floor(Math.random()*3);
         			};
         			temp = calculate(values[startIndex],values[startIndex+ 10*dirIndex.y + dirIndex.x],opArray[opIndex1]);
         
         			if ( ( values[startIndex + 20*dirIndex.y + 2*dirIndex.x] != 0) && ((answers[i]%values[startIndex + 20*dirIndex.y + 2*dirIndex.x]) == 0 ) )
         			{
         				opIndex2 = Math.floor(Math.random()*4);
         			} else
         			{
         				opIndex2 = Math.floor(Math.random()*3);
         			};
         			temp = calculate(temp,values[startIndex + 20*dirIndex.y + 2*dirIndex.x],opArray[opIndex2]);
         	}while ((temp > 100) || (temp < 0) || (answers.indexOf(temp) > -1));
         	answers[i]=temp;
         	sym.$("A"+i).html(temp).css({"color":"black","background-color":goesFirst,"text-align":"center","line-height":"45px","font-family":"carter-one, sans-serif","font-size":"0px"});
         };
         opIndex1 = null;
         opIndex2 = null;

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A2}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),2);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A1}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),1);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A3}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),3);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A4}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),4);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A5}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),5);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A6}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),6);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A7}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),7);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A8}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),8);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A9}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),9);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A10}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),10);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A11}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),11);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A0}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),0);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A12}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),12);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A13}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),13);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A14}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),14);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A15}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),15);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A16}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),16);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A17}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),17);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A18}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),18);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A19}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),19);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A20}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),20);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A21}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),21);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A22}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),22);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A23}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),23);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A24}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),24);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A25}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),25);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A26}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),26);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A27}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),27);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A28}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),28);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_A29}", "click", function(sym, e) {
         // insert code for mouse click here
         selected(sym.$(e.target),29);
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_blueButton}", "click", function(sym, e) {
         // insert code for mouse click here
         if (mode < 0)
         {
         	mode = 1;
         	sym.$("whiteCover").show();
         	sym.$("blueSelected").show();
         	current.effect("shake");
         	current.animate({ backgroundColor : "blue"});
         	stopTime();
         	startTime(15);
         	player = 1;
         	answered = 1;
         }

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_whiteButton}", "click", function(sym, e) {
         // insert code for mouse click here
         if (mode < 0)
         {
         	mode = 1;
         	sym.$("blueCover").show();
         	sym.$("whiteSelected").show();
         	current.effect("shake");
         	current.animate({ backgroundColor : "white"});
         	stopTime();
         	startTime(15);
         	player = 2;
         	answered = 1;
         }

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         yepnope(
                  {
                  nope:[
                  // loads the external JQuery Ui for dragging and dropping
                  'jquery-ui-1.10.3.custom.min.js',
                  'jquery.ui.touch-punch.min.js'
                  ],
         //         complete: init
         
         });
         
         //function init(){};
         
         //global variables
         answers = new Array(100);
         values = new Uint8Array(100);
         mask = new Uint8Array(100);
         colorChoice = new Array(100);
         
         target = null;
         blueScore = 0;
         whiteScore = 0;
         old = null;
         current = null;
         
         mode = 0;
         player = 0;
         guess = null;
         answered = new Boolean();
         
         guessIndex1 = null;
         guessIndex2 = null;
         guessIndex3 = null;
         opIndex1 = null;
         opIndex2 = null;
         
         start_time = new Date();
         
         opArray = ['+','-','*','/'];
         plus = function(x,y){return x+y };
         minus = function(x,y){return x-y };
         times = function(x,y){return x*y };
         divide = function(x,y){return x/y };
         operations = {'+':plus,'-':minus,'*':times,'/':divide};
         calculate = function(x, y, operation){
            return operations[operation](x, y);
         };
         
         
         selected = function(thisone, A){
         	answered = 0;
         	for (var i=0; i<100; i++)
         	{
         		mask[i]=1;
         	}
         	if (old != null){
         //		thisone.animate({left: old.left+25, top:old.top, width: 0, height: 47, lineHeight: 50, fontSize: 25 });
         //		thisone.animate({left: old.left, width:47, backgroundColor: (Math.random()>0.5)?"blue":"white"});
         //		thisone.unbind("click");
         //		old = null;
         //		sym.$("plusTile").hide();
         //		sym.$("minusTile").hide();
         //		sym.$("timesTile").hide();
         //		sym.$("divideTile").hide();
         //		for (var i=0; i<100; i++)
         //		{
         //			if (i != A)
         //			sym.$("A"+i).show();
         //		}
         	}else
         	{
         		current = thisone;
         		old = thisone.position();
         		target = answers[A];
         		for (var i=0; i<100; i++)
         		{
         			if (i != A)
         			sym.$("A"+i).hide();
         		}
         		sym.$("plusTile").show();
         		sym.$("minusTile").show();
         		sym.$("timesTile").show();
         		sym.$("divideTile").show();
         		sym.$("timeBox").show();
         		thisone.animate({left: 450, top:[585,'easeInQuad'],height: [150,'easeInQuad'], width: 150});
         		thisone.effect("shake");
         		thisone.animate({fontSize: 75 , lineHeight: 150, backgroundColor: "#11d04d"});
         		setTimeout(function(){startTime(60);mode = -1;},1000);
         		//startTime();
         		}
         };
         
         disableTiles = function( n ){
         	if ( n < 0 )
         	{
         		sym.$("backGroundRect").show();
         		for (var i=0; i<100; i++)
         		{
         			sym.$("R"+i).css({"opacity": 1}).css({"color":colorChoice[i],"background-color":"white"});
         			mask[i] = 1;
         		};
         	} else
         	{
         		sym.$("backGroundRect").hide();
         		for (var i=0; i<100; i++)
         		{
         			sym.$("R"+i).css({"opacity": 0.25}).css({"color":colorChoice[i],"background-color":"white"});
         			mask[i] = 0;
         		};
         		sym.$("R"+n).css({"color":"white","background-color":"red"});
         		sym.$("R"+n).css({"opacity": 1});	mask[n]=1
         //		sym.$("R"+(n+10)).css({"opacity": 1}); mask[n+10] = 1;	
         //		sym.$("R"+(n-10)).css({"opacity": 1});	mask[n-10] = 1;
         //		sym.$("R"+(n+20)).css({"opacity": 1});	
         //		sym.$("R"+(n-20)).css({"opacity": 1});	
         
         //		if (n%10 > 0)	
         //		{
         //			sym.$("R"+(n-1)).css({"opacity": 1}); mask[n-1] = 1;
         //			sym.$("R"+(n-11)).css({"opacity": 1}); mask[n-11] = 1;
         //			sym.$("R"+(n+9)).css({"opacity": 1}); mask[n+9] = 1;
         //		};
         		if (n%10 > 1)
         		{
         			sym.$("R"+(n-1)).css({"opacity": 1}); mask[n-1] = 1;
         			sym.$("R"+(n-2)).css({"opacity": 1});
         //			sym.$("R"+(n-22)).css({"opacity": 1});
         //			sym.$("R"+(n+18)).css({"opacity": 1});
         		};
         		if (n%10 < 8)
         		{
         			sym.$("R"+(n+1)).css({"opacity": 1}); mask[n+1] = 1;
         			sym.$("R"+(n+2)).css({"opacity": 1});
         //			sym.$("R"+(n+22)).css({"opacity": 1});
         //			sym.$("R"+(n-18)).css({"opacity": 1});
         		};
         		if (n > 19)
         		{
         			sym.$("R"+(n-10)).css({"opacity": 1});	mask[n-10] = 1;
         			sym.$("R"+(n-20)).css({"opacity": 1});	
         			if (n%10 > 1)
         			{
         				sym.$("R"+(n-11)).css({"opacity": 1}); mask[n-11] = 1;
         				sym.$("R"+(n-22)).css({"opacity": 1});		
         			}
         			if (n%10 < 8)
         			{
         				sym.$("R"+(n-9)).css({"opacity": 1}); mask[n-9] = 1;
         				sym.$("R"+(n-18)).css({"opacity": 1});		
         			}
         		};
         		if (n < 80)
         		{
         			sym.$("R"+(n+10)).css({"opacity": 1});	mask[n+10] = 1;
         			sym.$("R"+(n+20)).css({"opacity": 1});	
         			if (n%10 > 1)
         			{
         				sym.$("R"+(n+9)).css({"opacity": 1}); mask[n+9] = 1;
         				sym.$("R"+(n+18)).css({"opacity": 1});		
         			}
         			if (n%10 < 8)
         			{
         				sym.$("R"+(n+11)).css({"opacity": 1}); mask[n+11] = 1;
         				sym.$("R"+(n+22)).css({"opacity": 1});		
         			}
         		};
         //		if (n%10 < 9)
         //		{
         //			sym.$("R"+(n+1)).css({"opacity": 1}); mask[n+1] = 1;
         //			sym.$("R"+(n+11)).css({"opacity": 1}); mask[n+11] = 1;
         //			sym.$("R"+(n-9)).css({"opacity": 1}); mask[n-9] = 1;
         //		};
         	};
         };
         
         disableNext = function(n,m)
         {
         	for (var i=0; i<100; i++)		
         	{
         		mask[i] = 0;
         	};
         	sym.$("R"+m).css({"color":"white","background-color":"red"});
         	sym.$("R"+(n-1)).css({"opacity": .25});
         	sym.$("R"+(n-10)).css({"opacity": .25});
         	sym.$("R"+(n-11)).css({"opacity": .25});
         	sym.$("R"+(n+10)).css({"opacity": .25});
         	sym.$("R"+(n-20)).css({"opacity": .25});
         	sym.$("R"+(n+20)).css({"opacity": .25});	
         	sym.$("R"+(n+9)).css({"opacity": .25});		
         	sym.$("R"+(n-2)).css({"opacity": .25});	
         	sym.$("R"+(n-22)).css({"opacity": .25});
         	sym.$("R"+(n+18)).css({"opacity": .25});		
         	sym.$("R"+(n+2)).css({"opacity": .25});	
         	sym.$("R"+(n+22)).css({"opacity": .25});
         	sym.$("R"+(n-18)).css({"opacity": .25});		
         	sym.$("R"+(n+1)).css({"opacity": .25});
         	sym.$("R"+(n+11)).css({"opacity": .25});
         	sym.$("R"+(n-9)).css({"opacity": .25});
         	sym.$("R"+(m)).css({"opacity": 1}); mask[m]=1;
         	sym.$("R"+(2*m -n)).css({"opacity": 1}); mask[(2*m - n)]=1;
         	sym.$("plusTile").css({"color":"black","background-color":"white"});;
         	sym.$("minusTile").css({"color":"black","background-color":"white"});;
         	sym.$("timesTile").css({"color":"black","background-color":"white"});;
         	sym.$("divideTile").css({"color":"black","background-color":"white"});;
         };
         
         disableOps = function(n)
         {
         	var opNames = ["plusTile","minusTile","timesTile","divideTile"];
         		sym.$("test").html("test").css({"line-height":"100px","font-size":"40px"});
         
         	if (n == 1)
         	{
         		sym.$(opNames[opIndex2]).css({"color":"black","background-color":"white"});
         		sym.$(opNames[opIndex1]).css({"color":"white","background-color":"red"});
         		opIndex2 = null;
         	}else
         	{
         		sym.$(opNames[opIndex1]).css({"color":"black","background-color":"white"});
         		sym.$(opNames[opIndex2]).css({"color":"black","background-color":"white"});
         		opIndex1 = null;
         		opIndex2 = null;	
         	}
         }
         
         correctAns = function (){
         	if (player == 1)
         	{
         
         		sym.$("test").html("hereb").css({"line-height":"100px","font-size":"40px"});
         		current.animate({left: (214 + 75*(blueScore%3)), top: (165 + 75*(Math.floor(blueScore/3))), width: 0, height: 47, lineHeight: 50, fontSize: 25 });
         		current.animate({left: (186 + 75*(blueScore%3)), width:47, backgroundColor: "white"});
         		++blueScore;
         		sym.$("B"+blueScore).show("fade").html(blueScore).css({"color":"black" ,"text-align":"center"
         									,"line-height":"50px","font-family":"carter-one, sans-serif","font-size":"33px"});
         
         		if (blueScore > 15)
         		{
         			sym.$("winnerBlue").toggle("scale");
         		}
         	} else
         	{
         
         		sym.$("test").html("herew").css({"line-height":"100px","font-size":"40px"});
         		current.animate({left: (1035 + 75*(whiteScore%3)), top: (165 + 75*(Math.floor(whiteScore/3))), width: 0, height: 47, lineHeight: 50, fontSize: 25 });
         		current.animate({left: 1010 + 75*(whiteScore%3), width:47, backgroundColor: "blue"});
         		++whiteScore;
         		sym.$("W"+whiteScore).show("fade").html(whiteScore).css({"color":"black" ,"text-align":"center"
         									,"line-height":"50px","font-family":"carter-one, sans-serif","font-size":"33px"});
         //		current.unbind("click");
         		if (whiteScore > 15)
         		{
         			sym.$("winnerWhite").toggle("scale");
         		}
         
         		};
         		mode = 0;
         		stopTime();
         		disableTiles(-1);
         		disableOps(2);
         		guessIndex1 = null;
         		guessIndex2 = null;
         		old = null;
         		current = null;
         		sym.$("plusTile").hide();
         		sym.$("minusTile").hide();
         		sym.$("timesTile").hide();
         		sym.$("divideTile").hide();
         		sym.$("timeBox").hide();
         		sym.$("whiteCover").hide();
         		sym.$("blueSelected").hide();
         		sym.$("blueCover").hide();
         		sym.$("whiteSelected").hide();
         		for (var i=0; i<30; i++)
         		{
         			sym.$("A"+i).show().css({"background-color":(player==2)?"white":"blue","font-size":"0px"});;
         		}
         }
         
         wrongAns = function (){
         		mode = 0;
         		stopTime();
         		disableTiles(-1);
         		disableOps(2);
         		guessIndex1 = null;
         		guessIndex2 = null;
         		if (!answered)
         		{
         			current.animate({left: old.left+25, top: old.top,width: 0, height: 47, lineHeight: 50, fontSize: 0 });
         			current.animate({ width:47, backgroundColor: "red", left: old.left});
         			old = null;
         			current = null;
         			sym.$("plusTile").hide();
         			sym.$("minusTile").hide();
         			sym.$("timesTile").hide();
         			sym.$("divideTile").hide();
         			sym.$("timeBox").hide();
         			sym.$("whiteCover").hide();
         			sym.$("blueSelected").hide();
         			sym.$("blueCover").hide();
         			sym.$("whiteSelected").hide();
         			for (var i=0; i<30; i++)
         			{
         				sym.$("A"+i).show().css({"background-color":(player==1)?"white":"blue","font-size":"0px"});
         			}
         		} else
         		{
         			answered = 0;
         			mode = 1;
         			if (player == 1)
         			{
         				player = 2;
         				sym.$("blueCover").show();
         				sym.$("whiteSelected").show();
         				sym.$("whiteCover").hide();
         				sym.$("blueSelected").hide();
         				current.effect("shake");
         				current.animate({ backgroundColor : "white"});
         //				stopTime();
         				startTime(30);
         			}else
         			{
         				player = 1;
         				sym.$("whiteCover").show();
         				sym.$("blueSelected").show();
         				sym.$("blueCover").hide();
         				sym.$("whiteSelected").hide();
         				current.effect("shake");
         				current.animate({ backgroundColor : "blue"});
         //				stopTime();
         				startTime(30);
         			}
         		}
         }
         
         startTime = function(n)
         {
         	start_time = new Date();
         	myTimer = setInterval("onTimer("+n+")",100);
         };
         
         
         stopTime = function()
         {
         	sym.$("timeBox").html("00.0");
         	clearInterval(myTimer);
         }
         
         answerTime = function()
         {
         
         }
         
         onTimer = function (n) 
         {
         	var start_milli = start_time.getTime();
         	var current_time = new Date();
         	var elapsed_time = n*10 -(current_time.getTime() - start_milli)/100;
         	var hundredths = Math.floor(elapsed_time%10);
         	var seconds = Math.floor((elapsed_time/10)%60);
         	var minutes = Math.floor((elapsed_time/600)%60);
         	var time_string =  ((seconds < 10)?('0'+ seconds + '.'):( seconds + '.' )) + hundredths; //minutes + ':' + 
         
         //	if (elapsed_time <= - 5)
         //	{
         //		wrongAns();
         //	}
         //	else 
         	if (elapsed_time <= 0)
         	{
         		hundredths = 0;
         		seconds = 0;
         		minutes = 0;
         		time_string =  '00.0'; //minutes + ':'  + 
         		sym.$("timeBox").html(time_string).css({"text-align":"center","line-height":"80px","font-size":"60px"});
         		wrongAns();	  				
         	}else
         	{
         		sym.$("timeBox").html(time_string).css({"text-align":"center","line-height":"80px","font-size":"60px"});
         //		time_bonus = minutes*60 + seconds;
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_timesTile}", "click", function(sym, e) {
         // insert code for mouse click here
         //clicked times
         if (mode == 2){
         	mode = 1;
         	sym.$("timesTile").css({"color":"white","background-color":"red"});
         	if (opIndex1 == null)
         	{
         		opIndex1 = 2;
         	}else
         	{
         		opIndex2 = 2;
         	};
         }else if (mode == 1)
         {
         	if (opIndex2 == null)
         	{
         		if (opIndex1 == 2)
         		{
         			mode = 2;
         			opIndex1 = null;
         			sym.$("timesTile").css({"color":"black","background-color":"white"});
         		}
         	}else	if (opIndex2 == 2)
         	{
         		mode = 2;
         		opIndex2 = null;
         		sym.$("timesTile").css({"color":"black","background-color":"white"});
         	}
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_minusTile}", "click", function(sym, e) {
         // insert code for mouse click here
         // clicked minus
         if (mode == 2){
         	mode = 1;
         	sym.$("minusTile").css({"color":"white","background-color":"red"});
         	if (opIndex1 == null)
         	{
         		opIndex1 = 1;
         	}else
         	{
         		opIndex2 = 1;
         	};
         }else if (mode == 1)
         {
         	if (opIndex2 == null)
         	{
         		if (opIndex1 == 1)
         		{
         			mode = 2;
         			opIndex1 = null;
         			sym.$("minusTile").css({"color":"black","background-color":"white"});
         		}
         	}else if (opIndex2 == 1)
         	{
         		mode = 2;
         		opIndex2 = null;
         		sym.$("minusTile").css({"color":"black","background-color":"white"});
         	}
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_divideTile}", "click", function(sym, e) {
         // insert code for mouse click here
         // clicked divide
         if (mode == 2){
         	mode = 1;
         	sym.$("divideTile").css({"color":"white","background-color":"red"});
         	if (opIndex1 == null)
         	{
         		opIndex1 = 3;
         	}else
         	{
         		opIndex2 = 3;
         	};
         }else if (mode == 1)
         {
         	if (opIndex2 == null)
         	{
         		if (opIndex1 == 3)
         		{
         			mode = 2;
         			opIndex1 = null;
         			sym.$("divideTile").css({"color":"black","background-color":"white"});
         		}
         	}else if (opIndex2 == 3)
         	{
         		mode = 2;
         		opIndex2 = null;
         		sym.$("divideTile").css({"color":"black","background-color":"white"});
         	}
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_plusTile}", "click", function(sym, e) {
         // insert code for mouse click here
         // clicked plus
         if (mode == 2){
         	sym.$("plusTile").css({"color":"white","background-color":"red"});
         	mode = 1;
         	if (opIndex1 == null)
         	{
         		opIndex1 = 0;
         	}else
         	{
         		opIndex2 = 0;
         	};
         }else if (mode == 1)
         {
         	if (opIndex2 == null)
         	{
         		if (opIndex1 == 0)
         		{
         			mode = 2;
         			opIndex1 = null;
         			sym.$("plusTile").css({"color":"black","background-color":"white"});
         		}
         	}else if (opIndex2 == 0)
         	{
         		mode = 2;
         		opIndex2 = null;
         		sym.$("plusTile").css({"color":"black","background-color":"white"});
         	}
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R0}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 0;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R11}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 11;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R22}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 22;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R2}", "click", function(sym, e) {
         // insert code for mouse click here
         // insert code for mouse click here
         var temp = 2;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R1}", "click", function(sym, e) {
         // insert code for mouse click here
         // insert code for mouse click here
         var temp = 1;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R3}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 3;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R5}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 5;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R4}", "click", function(sym, e) {
         // insert code for mouse click here
         // insert code for mouse click here
         var temp = 4;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R6}", "click", function(sym, e) {
         // insert code for mouse click here
         // insert code for mouse click here
         var temp = 6;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R7}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 7;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R8}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 8;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R9}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 9;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R10}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 10;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R29}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 29;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R28}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 28;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R27}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 27;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R26}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 26;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R25}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 25;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R24}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 24;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R23}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 23;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R21}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 21;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R20}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 20;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R39}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 39;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R38}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 38;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R37}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 37;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R36}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 36;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R35}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 35;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R34}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 34;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R33}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 33;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R32}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 32;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R31}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 31;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R30}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 30;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R49}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 49;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R48}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 48;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R47}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 47;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R46}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 46;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R45}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 45;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R44}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 44;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R43}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 43;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R42}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 42;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R41}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 41;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R40}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 40;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R59}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 59;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R58}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 58;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R57}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 57;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R56}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 56;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R55}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 55;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R54}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 54;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R53}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 53;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R52}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 52;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R51}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 51;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R50}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 50;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R69}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 69;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R68}", "click", function(sym, e) {
         var temp = 68;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R67}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 67;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R66}", "click", function(sym, e) {
         var temp = 66;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R65}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 65;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R64}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 64;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R63}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 63;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R62}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 62;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R61}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 61;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R60}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 60;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R79}", "click", function(sym, e) {
         var temp = 79;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R78}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 78;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R77}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 77;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R76}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 76;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R99}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 99;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R98}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 98;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R97}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 97;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R96}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 96;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R95}", "click", function(sym, e) {
         var temp = 95;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R94}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 94;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R93}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 93;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R92}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 92;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R91}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 91;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R90}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 90;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R80}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 80;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R81}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 81;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R82}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 82;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R83}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 83;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R84}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 84;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R85}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 85;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R86}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 86;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R87}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 87;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R88}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 88;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R89}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 89;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R70}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 70;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R71}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 71;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R72}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 72;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R73}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 73;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R74}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 74;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R75}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 75;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R12}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 12;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R13}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 13;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R14}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 14;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R15}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 15;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R16}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 16;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R17}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 17;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R18}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 18;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R19}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 19;
         if (temp == guessIndex1){
         
         		mode = 1;
         		guessIndex1 = null;
         		guess = null;
         		disableTiles(-100);
         		disableOps(2);
         
         }else if (temp == guessIndex2){
         
         		mode = 1;
         		guessIndex2 = null;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		disableOps(1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         
         } else if (mode == 1 & mask[temp] == 1 )
         {
         	if (guessIndex1 == null)
         	{
         		mode = 2;
         		guessIndex1 = temp;
         		guess = values[guessIndex1];
         		disableTiles(guessIndex1);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         	}else if (guessIndex2 == null)
         	{
         		mode = 2;
         		guessIndex2 = temp;
         		guess = calculate(guess,values[guessIndex2],opArray[opIndex1]);
         		disableNext(guessIndex1,guessIndex2);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"})
         	}else
         	{
         		mode = 0;
         		guessIndex3 = temp;
         		guess = calculate(guess,values[guessIndex3],opArray[opIndex2]);
         		sym.$("test").html(guess).css({"line-height":"100px","font-size":"40px"});
         		if (guess == target)
         		{
         			correctAns();
         		}
         		else
         		{
         			wrongAns();	
         		}
         	};
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "keydown", function(sym, e) {
         // insert code to be run when the user presses a key.
         // The variable “e.which” tells you the key code of the key that was pressed, e.g. 32 = space
         if (e.which == 65) 
         {
         	if (mode < 0)
         	{
         	mode = 1;
         	sym.$("whiteCover").show();
         	sym.$("blueSelected").show();
         	current.effect("shake");
         	current.animate({ backgroundColor : "blue"});
         	stopTime();
         	startTime(15);
         	player = 1;
         	answered = 1;
         }
         }else if (e.which == 76)
         {
         	if (mode < 0)
         	{
         		mode = 1;
         		sym.$("blueCover").show();
         		sym.$("whiteSelected").show();
         		current.effect("shake");
         		current.animate({ backgroundColor : "white"});
         		stopTime();
         		startTime(15);
         		player = 2;
         		answered = 1;
         	}
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'redButton'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Ellipse2}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);
         sym.stop(200);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ellipse2}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.playReverse(200);
         sym.stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ellipse2}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play(0);
         sym.stop(200);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ellipse2}", "touchend", function(sym, e) {
         // insert code to be run when a user stops touching an object (for touch devices only)
         sym.playReverse(200);
         sym.stop(0);

      });
      //Edge binding end

   })("redButton");
   //Edge symbol end:'redButton'

})(jQuery, AdobeEdge, "EDGE-377409989");