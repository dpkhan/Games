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
         
         //	sym.$("namesInput").hide();
            inputBox = sym.$("namesInput");
            inputNames = $('<textarea id="namesBox"></textarea>');//.attr({'type':'text', 'value':'','id':'namesBox'});
         	inputBox.html("Enter Names:");
         //   inputNames.css({'font-size': '20px','width':'550px','height':'580','text-align':'center','background-color', '#ffffff'});
            inputBox.css('font-size', '20px');
            inputNames.css('font-size', '20px');
            inputNames.css ('text-align', 'left');
            inputNames.css('width', 495);
            inputNames.css('height', 500);
            inputNames.css ('background-color', '#ffffff');
            inputNames.appendTo(inputBox);
         //   inputNames.show();
         //   inputNames.focus();
         
         sym.$("answerBox").html("-------");
         
            inputChancesBox = sym.$("chancesInput");
            inputChances = $('<input type="text" id="chancesBox" onchange="trialsChange()" value="3"></input>');//.attr({'type':'text', 'value':'','id':'namesBox'});
            inputChances.css('font-size', '50px');
            inputChances.css ('text-align', 'center');
            inputChances.css('width', 140);
            inputChances.css('height', 60);
            inputChances.css ('background-color', '#ffffff');
         //   inputChances.html("3");
            inputChances.appendTo(inputChancesBox);
         
            inputTimeBox = sym.$("timeInput");
            inputTime = $('<input type="text" id="timeBox" onchange="timeChange()" value="13"></input>');//.attr({'type':'text', 'value':'','id':'namesBox'});
            inputTime.css('font-size', '50px');
            inputTime.css ('text-align', 'center');
            inputTime.css('width', 140);
            inputTime.css('height', 60);
            inputTime.css ('background-color', '#ffffff');
            inputTime.html("13");
            inputTime.appendTo(inputTimeBox);
         
         sym.$("stage").css({	"-webkit-touch-callout":"none",
         						"-webkit-user-select": "none",
             					"-khtml-user-select": "none",
             					"-moz-user-select": "none",
             					"-ms-user-select": "none",
             					"user-select": "none"});

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${radio0}", "click", function(sym, e) {
         // insert code for mouse click here
         radio0 *= -1; // Prime Numbers
         if (radio0 < 0)
         {
         	sym.$("inside0").hide();
         	skipCondition -= 1;
         }else
         {
         	sym.$("inside0").show();
         	skipCondition += 1;
         };
         //sym.$("answerBox").html(skipCondition.toString(2));
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${radio4}", "click", function(sym, e) {
         // insert code for mouse click here
         radio4 *= -1; // Multiples of 3
         if (radio4 < 0)
         {
         	sym.$("inside4").hide();
         	sym.$("hideNine").hide();
         	sym.$("hideSix").hide();
         	skipCondition -= 16;
         }else
         {
         	sym.$("inside4").show();
         	sym.$("hideNine").show();
         	sym.$("hideSix").show();
         	skipCondition += 16;
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${radio1}", "click", function(sym, e) {
         // insert code for mouse click here
         radio1 *= -1; //Square Numbers
         if (radio1 < 0)
         {
         	sym.$("inside1").hide();
         	skipCondition -= 2;
         }else
         {
         	sym.$("inside1").show();
         	skipCondition += 2;
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${radio2}", "click", function(sym, e) {
         // insert code for mouse click here
         radio2 *= -1; // Powers of 2
         if (radio2 < 0)
         {
         	sym.$("inside2").hide();
         	skipCondition -= 4;
         }else
         {
         	sym.$("inside2").show();
         	skipCondition += 4;
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${radio3}", "click", function(sym, e) {
         // insert code for mouse click here
         radio3 *= -1; //Powers of 3
         if (radio3 < 0)
         {
         	sym.$("inside3").hide();
         	skipCondition -= 8;
         }else
         {
         	sym.$("inside3").show();
         	skipCondition += 8;
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${radio5}", "click", function(sym, e) {
         // insert code for mouse click here
         radio5 *= -1; // Multiples of 4
         if (radio5 < 0)
         {
         	sym.$("inside5").hide();
         	skipCondition -= 32;
         }else
         {
         	sym.$("inside5").show();
         	skipCondition += 32;
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${radio6}", "click", function(sym, e) {
         // insert code for mouse click here
         radio6 *= -1; // Multiples of 6
         if (radio6 < 0)
         {
         	sym.$("inside6").hide();
         	if ( (skipCondition & 256) == 0 )
         	{
         			sym.$("hideThree").hide();	
         	};
         	skipCondition -= 64;
         }else
         {
         	sym.$("inside6").show();
         	sym.$("hideThree").show();
         	skipCondition += 64;
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${radio7}", "click", function(sym, e) {
         // insert code for mouse click here
         radio7 *= -1; // Multiples of 7
         if (radio7 < 0)
         {
         	sym.$("inside7").hide();
         	skipCondition -= 128;
         }else
         {
         	sym.$("inside7").show();
         	skipCondition += 128;
         };

      });
      //Edge binding end

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         temp = 0;
         rainbow = new Rainbow();
         colorSpec = new Array();
         
         ready = 0;
         
         useEnter = 0;
         
         old = "";
         
         previous = "";
         
         numTries = 3;
         timeLimit = 13;
         
         //rainbow.setSpectrum('blue','red');
         //rainbow.setNumberRange(0,numTries);
         
         
         //for (var i = 1; i <= numTries; i++) {
         //    var hexColour = rainbow.colourAt(i);
         //    colorSpec[i] = '#' + hexColour;
         //};
         
         
         count = 0;
         leftCount = 0;
         rightCount = 0;
         previous = 0;
         next = 0;
         trial = 0;
         trialDigit = 0;
         skipCondition = 0;
         
         sym.$("answerBox").css({"text-align":"center", "text-shadow":"5px -5px 4px #9f9d9d","line-height":"200px","font-size":"150px"});
         sym.$("answerBoxCopy").css({"text-align":"center", "line-height":"200px","font-size":"150px"});
         //sym.$("answerBoxCopy").animate({top: "0" , left: "0", opacity: 0,fontSize:"50px"});
         
         rules ="";
         sym.$("rulesLeftHead").html("Skip").css({"text-align":"center","font-size":"60px"});
         sym.$("rulesRightHead").html("Skip").css({"text-align":"center","font-size":"60px"});
         
         sym.$("rulesLeft").html("").css({"text-align":"left","font-size":"40px"});
         sym.$("rulesRight").html("").css({"text-align":"left","font-size":"40px"});
         
         
         sym.$("leftPlayer").css({"text-align":"center","font-size":"75px"});
         sym.$("rightPlayer").css({"text-align":"center","font-size":"75px"});
         
         sym.$("leftTeam").css({"text-align":"center","font-size":"30px"});
         sym.$("rightTeam").css({"text-align":"center","font-size":"30px"});
         
         
         
         start_time = new Date();
         
         player = "left";
         
         numberX = (sym.$("number1").position().left - sym.$("answerBox").position().left + 323);
         numberY = (sym.$("number1").position().top - sym.$("answerBox").position().top)*2 + 150;
         
         for(var i=1;i<61;i++)
         {
         	sym.$("number" + i).css({"text-align":"center","line-height":"60px","font-size":"50px","opacity":0});
         	sym.$("number" + i).html(i);
         };
         
         sym.$("timeBoxleft").css({"text-align":"center","line-height":"140px","font-size":"140px","color":"red"});
         sym.$("timeBoxright").css({"text-align":"center","line-height":"140px","font-size":"140px","color":"red"});
         
         
         correctCount = 1;
         
         namesData = "";
         namesArray = new Array();
         leftArray = new Array();
         rightArray = new Array();
         
         radio0 = -1;
         radio1 = -2;
         radio2 = -4;
         radio3 = -8;
         radio4 = -16;
         radio5 = -32;
         radio6 = -64;
         radio7 = -128;
         radio8 = -256;
         
         sym.$("answerBox").html("-------");
         
         testNext = function(x)
         {
         	var temp = ((correctCount % 60)==0) ? 60 : (correctCount % 60);
         	sym.$("answerBoxCopy").css({top:"", left:""});
         	sym.$("answerBoxCopy").html("").css({opacity:1,fontSize:"200px"});
         	if (trial == next)
         	{
         		stopTime();
         		sym.$("answerBox").html("").css("color","black");
         		sym.$("answerBoxCopy").html(trial).css("color","black");
         		sym.$("answerBoxCopy").animate({top: numberY , left: numberX, opacity:0,fontSize:"50px"});
         		sym.$("number" + temp).html(trial);
         		sym.$("number" + temp).animate({opacity:1});
         
         		if ( temp == 60 )
         		{
         //			correctCount = 0;
         			sym.$("number1").html("");
         			sym.$("number2").html("");
         			sym.$("number3").html("");
         			sym.$("number4").html("");
         			sym.$("number5").html("");
         			timeLimit = timeLimit * .75;
         		};
         
         		correctCount++;
         		
         		temp = ((correctCount % 60)==0) ? 60 : (correctCount % 60);
         
         
         		if ((temp % 5) == 1)
         		{
         			sym.$("number" + (temp + 5)).html("");
         			sym.$("number" + (temp + 6)).html("");
         			sym.$("number" + (temp + 7)).html("");
         			sym.$("number" + (temp + 8)).html("");
         			sym.$("number" + (temp + 9)).html("");
         		};
         
         
         
         		numberX = (sym.$("number" + temp).position().left - sym.$("answerBox").position().left + 323);
         		numberY = (sym.$("number" + temp).position().top - sym.$("answerBox").position().top) + 200;
         
         		trial = "";
         		count = 0;
         		previous = "";
         		next = findNext(next);
         		switchPlayer();
         	}else if (trial > next	)
         	{	
         		stopTime();
         		sym.$("answerBox").html(trial).css("color","red");
         		trial = 0;
         		count = 0;
         		wrongAns();
         	} else
         	{
         		if ( next.toString()[count] == x)
         		{
         			sym.$("answerBox").html(trial).css("color","black");
         			count++;
         		}else
         		{
         			stopTime();
         			sym.$("answerBox").html(trial).css("color","red");
         			count = 0;
         			trial = 0;
         			wrongAns();
         		};
         	};
         };
         
         findNext = function(n)
         {
         	var test = 1;
         	var k = n+1;
         //	sym.$("leftPlayer").html(correctCount)
         	while ( test == 1 )
         	{
         		test = 0;
         		if ( (skipCondition & 1) > 0 )
         		{
         			if (isPrime(k) == 1){
         				test = 1;
         			};
         		};
         		if ( ( (skipCondition & 2) > 0 ) && ( test == 0))
         		{
         			if (isSquare(k) == 1){
         				test = 1;
         			};
         		};
         		if ( ( (skipCondition & 4) > 0 ) && ( test == 0))
         		{
         			if (isPower2(k) == 1){
         				test = 1;
         			};
         		};
         		if ( ( (skipCondition & 8) > 0 ) && ( test == 0))
         		{
         			if (isPower3(k) == 1){
         				test = 1;
         			};
         		};
         		if ( ( (skipCondition & 16) > 0 ) && ( test == 0))
         		{
         			if (isMult3(k) == 1){
         				test = 1;
         			};
         		};
         		if ( ( (skipCondition & 32) > 0 ) && ( test == 0))
         		{
         			if (isMult4(k) == 1){
         				test = 1;
         			};
         		};
         		if ( ( (skipCondition & 64) > 0 ) && ( test == 0))
         		{
         			if (isMult6(k) == 1){
         				test = 1;
         			};
         		};
         		if ( ( (skipCondition & 128) > 0 ) && ( test == 0))
         		{
         			if (isMult7(k) == 1){
         				test = 1;
         			};
         		};
         		if ( ( (skipCondition & 256) > 0 ) && ( test == 0))
         		{
         			if (isMult9(k) == 1){
         				test = 1;
         			};
         		};
         		if ( test == 1 )
         		{
         			k += 1;
         		};
         	};
         //	startTime(10);
         	return k;
         };
         
         
         shuffleArray = function(array) {
             for (var i = array.length - 1; i > 0; i--) {
                 var j = Math.floor(Math.random() * (i + 1));
                 var temp = array[i];
                 array[i] = array[j];
                 array[j] = temp;
             };
             return array;
         };
         
         
         leastFactor = function(n){
          if (isNaN(n) || !isFinite(n)) return NaN;  
          if (n==0) return 0;  
          if (n%1 || n*n<2) return 1;
          if (n%2==0) return 2;  
          if (n%3==0) return 3;  
          if (n%5==0) return 5;  
          var m = Math.sqrt(n);
          for (var i=7;i<=m;i+=30) {
           if (n%i==0)      return i;
           if (n%(i+4)==0)  return i+4;
           if (n%(i+6)==0)  return i+6;
           if (n%(i+10)==0) return i+10;
           if (n%(i+12)==0) return i+12;
           if (n%(i+16)==0) return i+16;
           if (n%(i+22)==0) return i+22;
           if (n%(i+24)==0) return i+24;
          }
          return n;
         };
         
         isSquare = function(x){
         
         	if ( (Math.sqrt(x) % 1) == 0 )
         	{
         		return 1;
         	}else
         	{
         		return 0;
         	}
         };
         
         isPower2 = function(x){
         
         	if ( (Math.log2(x) % 1) == 0 )
         	{
         		return 1;
         	}else
         	{
         		return 0;
         	}
         };
         
         isPower3 = function(x){
         
         	if ( ( (Math.log2(x)/Math.log2(3)) % 1) == 0 )
         	{
         		return 1;
         	}else
         	{
         		return 0;
         	}
         };
         
         isEven = function(x)
         {
         	if ( (x % 2) == 0){
         		return 1;
         	}
         	else
         	{
         		return 0;
         	}
         
         };
         
         isOdd = function(x)
         {
         	if ( (x % 2) == 0){
         		return 0;
         	}
         	else
         	{
         		return 1;
         	}
         
         };
         
         isMult3 = function(x)
         {
         	if ( (x % 3) == 0){
         		return 1;
         	}
         	else
         	{
         		return 0;
         	}
         
         };
         
         isMult4 = function(x)
         {
         	if ( (x % 4) == 0){
         		return 1;
         	}
         	else
         	{
         		return 0;
         	}
         
         };
         
         isMult6 = function(x)
         {
         	if ( (x % 6) == 0){
         		return 1;
         	}
         	else
         	{
         		return 0;
         	}
         
         };
         
         isMult7 = function(x)
         {
         	if ( (x % 7) == 0){
         		return 1;
         	}
         	else
         	{
         		return 0;
         	}
         
         };
         
         isMult9 = function(x)
         {
         	if ( (x % 9) == 0){
         		return 1;
         	}
         	else
         	{
         		return 0;
         	}
         
         };
         
         isPrime = function(n)
         {
          if (isNaN(n) || !isFinite(n) || n%1 || n<2) return 0; 
          if (n == leastFactor(n)) return 1;
          return 0;
         };
         
         startTime = function(n)
         {
         	start_time = new Date();
         	myTimer = setInterval("onTimer("+n+")",100);
         };
         
         
         stopTime = function()
         {
         	sym.$("timeBox"+player).html("00.0");
         	clearInterval(myTimer);
         };
         
         onTimer = function (n) 
         {
         	var start_milli = start_time.getTime();
         	var current_time = new Date();
         	var elapsed_time = n*10 -(current_time.getTime() - start_milli)/100;
         	var hundredths = Math.floor(elapsed_time%10);
         	var seconds = Math.floor((elapsed_time/10)%60);
         	var minutes = Math.floor((elapsed_time/600)%60);
         	var time_string =  seconds + '.'  + hundredths; //minutes + ':' + 
         
         	if (elapsed_time <= 0)
         	{
         		hundredths = 0;
         		seconds = 0;
         		minutes = 0;
         		time_string =  '0.0'; //minutes + ':'  + 
         		sym.$("timeBox"+player).html(time_string);
         		sym.$("answerBox").html("");
         		trial = 0;
         		count = 0;
         		wrongAns(); 				
         	}else
         	{
         		sym.$("timeBox"+player).html(time_string);
         
         	};
         };
         
         wrongAns = function()
         {
         	trial = "";
         	if (player == "left")
         	{
         		if ( leftArray[0][1] < numTries)
         		{
         			++leftArray[0][1];
         		}else
         		{
         			leftArray.shift();
         			if(leftArray.length == 0)
         			{
         				if (rightArray.length == 1)
         				{
         					winner("right");
         				} else
         				{
         					leftArray.unshift(rightArray.pop());
         				};
         			}else if( (leftArray.length + 1) < rightArray.length)
         			{
         				leftArray.unshift(rightArray.pop());
         			}else
         			{
         				if (leftArray.length > 1)
         				{
         						leftArray.unshift(leftArray.pop());
         				};
         			};
         		};
         	}
         	else
         	{
         		if ( rightArray[0][1] < numTries )
         		{
         			++rightArray[0][1];
         		}else
         		{
         			rightArray.shift();
         			if(rightArray.length == 0)
         			{
         				if (leftArray.length == 1)
         				{
         					winner("left");
         				} else
         				{
         					rightArray.unshift(leftArray.pop());
         				};
         
         			}else if( (rightArray.length + 1) < leftArray.length )
         			{
         				rightArray.unshift(leftArray.pop());
         			}else
         			{
         				if (rightArray.length > 1)
         				{
         						rightArray.unshift(rightArray.pop());
         				}
         			};
         		};
         	};
         	switchPlayer();
         };
         
         switchPlayer = function()
         {
         	stopTime();
         	if (player == "left")
         	{
         		if ( ((leftArray.length + rightArray.length) == 3) && (leftArray.length > 1) )
         		{
         			rightArray.push(leftArray.shift());
         		};
         		if ( leftArray.length > 1)
         		{
         			leftArray.push(leftArray.shift());
         		};
         
         		player = "right";
         
         		sym.$("timeBoxleft").html("");
         
         		sym.$("leftarrow").hide();
         		sym.$("leftarrow2").hide();
         		sym.$("rulesRight2").hide();
         		sym.$("numpad1").hide();
         
         		sym.$("numpad2").show();
         		sym.$("rightarrow").show();
         		sym.$("rightarrow2").show();
         		sym.$("rulesLeft2").show();
         		}
         	else
         	{
         		if ( ((leftArray.length + rightArray.length) == 3) && (rightArray.length > 1) )
         		{
         			leftArray.push(rightArray.shift());
         		};
         		if (rightArray.length > 1)
         		{
         			rightArray.push(rightArray.shift());
         		};
         
         		player = "left";
         
         		sym.$("timeBoxright").html("");
         
         		sym.$("rightarrow").hide();
         		sym.$("rightarrow2").hide();
         		sym.$("rulesLeft2").hide();
         		sym.$("numpad2").hide();
         
         		sym.$("numpad1").show();
         
         		sym.$("leftarrow").show();
         		sym.$("leftarrow2").show();
         		sym.$("rulesRight2").show();
         	};
         	startTime(timeLimit);
         	updateTeams();
         };
         
         updateTeams = function()
         {
         	updateLeft();
         	updateRight();
         };
         
         updateLeft = function()
         {
         	leftTeam = "";
         	sym.$("leftPlayer").html(leftArray[0][0]);
         	if (leftArray[0][1] == 0)
         	{
         		sym.$("leftPlayer").css("color","black");
         	}else
         	{
         		sym.$("leftPlayer").css("color",colorSpec[leftArray[0][1]]);
         	};
         
         	for(var i=leftArray.length-1;i>0;i--)
         	{
         		if (leftArray[i][1] == 0)
         		{	
         			leftTeam += leftArray[i][0];
         			leftTeam += "<br>";
         		} else
         		{
         			leftTeam += "<span style='color:";
         			leftTeam +=  colorSpec[leftArray[i][1]];
         			leftTeam += "'>";
         			leftTeam += leftArray[i][0];
         			leftTeam += "</span><br>";		
         		};
         	};
         
         	sym.$("leftTeam").html(leftTeam);
         
         };
         
         updateRight = function()
         {
         	rightTeam = "";
         	sym.$("rightPlayer").html(rightArray[0][0]);
         	if (rightArray[0][1] == 0)
         	{
         		sym.$("rightPlayer").css("color","black");
         	}else
         	{
         		sym.$("rightPlayer").css("color",colorSpec[rightArray[0][1]]);
         	};
         
         	for(var i=rightArray.length-1;i>0;i--)
         	{
         		if (rightArray[i][1] == 0)
         		{	
         			rightTeam += rightArray[i][0];
         			rightTeam += "<br>";
         		} else
         		{
         			rightTeam += "<span style='color:";
         			rightTeam += colorSpec[rightArray[i][1]];
         			rightTeam += "'>";
         			rightTeam += rightArray[i][0];
         			rightTeam += "</span><br>";
         		};
         	};
         	sym.$("rightTeam").html(rightTeam);
         };
         
         winner = function(team)
         {
         	sym.$("winnerBox").css({"text-align":"center", "text-shadow":"5px -5px 4px #9f9d9d","line-height":"250px","font-size":"200px"});
         	if (team == "left")
         	{
         		sym.$("winnerBoxText").html("The Winner Is"+"<br>"+"<br>"+leftArray[0][0]);
         	} else
         	{
         		sym.$("winnerBoxText").html("The Winner Is"+"<br>"+"<br>"+rightArray[0][0]);
         	};
         	sym.$("winnerBox").show();
         };
         
         /**
          * Convert data in CSV (comma separated value) format to a javascript array.
          *
          * Values are separated by a comma, or by a custom one character delimeter.
          * Rows are separated by a new-line character.
          *
          * Leading and trailing spaces and tabs are ignored.
          * Values may optionally be enclosed by double quotes.
          * Values containing a special character (comma's, double-quotes, or new-lines)
          *   must be enclosed by double-quotes.
          * Embedded double-quotes must be represented by a pair of consecutive 
          * double-quotes.
          *
          * Example usage:
          *   var csv = '"x", "y", "z"\n12.3, 2.3, 8.7\n4.5, 1.2, -5.6\n';
          *   var array = csv2array(csv);
          *  
          * Author: Jos de Jong, 2010
          * 
          * @param {string} data      The data in CSV format.
          * @param {string} delimeter [optional] a custom delimeter. Comma ',' by default
          *                           The Delimeter must be a single character.
          * @return {Array} array     A two dimensional array containing the data
          * @throw {String} error     The method throws an error when there is an
          *                           error in the provided data.
          */ 
         csv2array = function(data, delimeter) {
           // Retrieve the delimeter
           if (delimeter == undefined) 
             delimeter = ',';
           if (delimeter && delimeter.length > 1)
             delimeter = ',';
         
           // initialize variables
           var newline = '\n';
           var eof = '';
           var i = 0;
           var c = data.charAt(i);
           var row = 0;
           var col = 0;
           var array = new Array();
         
           while (c != eof) {
             // skip whitespaces
             while (c == ' ' || c == '\t' || c == '\r') {
               c = data.charAt(++i); // read next char
             }
         
             // get value
             var value = "";
             if (c == '\"') {
               // value enclosed by double-quotes
               c = data.charAt(++i);
         
               do {
                 if (c != '\"') {
                   // read a regular character and go to the next character
                   value += c;
                   c = data.charAt(++i);
                 }
         
                 if (c == '\"') {
                   // check for escaped double-quote
                   var cnext = data.charAt(i+1);
                   if (cnext == '\"') {
                     // this is an escaped double-quote. 
                     // Add a double-quote to the value, and move two characters ahead.
                     value += '\"';
                     i += 2;
                     c = data.charAt(i);
                   }
                 }
               }
               while (c != eof && c != '\"');
         
               if (c == eof) {
                 throw "Unexpected end of data, double-quote expected";
               }
         
               c = data.charAt(++i);
             }
             else {
               // value without quotes
               while (c != eof && c != delimeter && c!= newline && c != ' ' && c != '\t' && c != '\r') {
                 value += c;
                 c = data.charAt(++i);
               }
             }
         
             // add the value to the array
             if (array.length <= row) 
               array.push(new Array());
             array[row].push(value);
         
             // skip whitespaces
             while (c == ' ' || c == '\t' || c == '\r') {
               c = data.charAt(++i);
             }
         
             // go to the next row or column
             if (c == delimeter) {
               // to the next column
               col++;
             }
             else if (c == newline) {
               // to the next row
               col = 0;
               row++;
             }
             else if (c != eof) {
               // unexpected character
               throw "Delimiter expected after character " + i;
             }
         
             // go to the next character
             c = data.charAt(++i);
           }  
         
           return array;
         };
         
         trialsChange = function()
         {
         	numTries = Number(document.getElementById('chancesBox').value);
         	if (isNaN(numTries))
         	{
         		numTries = 3;
         	}else if (numTries < 1)
         	{
         		numTries = 1;
         	}else if (numTries > 10)
         	{
         			numTries = 99999;
         	} else
         	{
         		numTries = Math.floor(numTries);
         	};
         	document.getElementById('chancesBox').value = numTries;
         };
         
         timeChange = function()
         {
         	timeLimit = Number(document.getElementById('timeBox').value);
         	if (isNaN(timeLimit))
         	{
         		timeLimit = 13;
         	}else if (timeLimit < 5)
         	{
         		timeLimit = 5;
         	}else if (timeLimit > 30)
         	{
         			timeLimit = 99999;
         	} else
         	{
         		timeLimit = Math.floor(timeLimit);
         	};
         	document.getElementById('timeBox').value = timeLimit;
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${radio8}", "click", function(sym, e) {
         // insert code for mouse click here
         radio8 *= -1; // Multiples of 9
         if (radio8 < 0)
         {
         	sym.$("inside8").hide();
         	if ( (skipCondition & 64) == 0 )
         	{
         			sym.$("hideThree").hide();	
         	};
         	skipCondition -= 256;
         }else
         {
         	sym.$("inside8").show();
         	sym.$("hideThree").show();
         	skipCondition += 256;
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "keydown", function(sym, e) {
         // insert code to be run when the user presses a key.
         // The variable “e.which” tells you the key code of the key that was pressed, e.g. 32 = space
         if (ready == 1){
         if ((e.which == 48) || (e.which == 96)) {
         	trial *= 10;
         	sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         };
         if ((e.which == 49) || (e.which == 97)) {
         	trial *= 10;
         	trial += 1;
         	sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         };
         if ((e.which == 50) || (e.which == 97)) {
         	trial *= 10;
         	trial += 2;
         	sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         };
         if ((e.which == 51) || (e.which == 98)) {
         	trial *= 10;
         	trial += 3;
         	sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         };
         if ((e.which == 52) || (e.which == 99)) {
         	trial *= 10;
         	trial += 4;
         	sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         };
         if ((e.which == 53) || (e.which == 100)) {
         	trial *= 10;
         	trial += 5;
         	sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         };
         if ((e.which == 54) || (e.which == 101)) {
         	trial *= 10;
         	trial += 6;
         	sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         };
         if ((e.which == 55) || (e.which == 102)) {
         	trial *= 10;
         	trial += 7;
         	sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         };
         if ((e.which == 56) || (e.which == 103)) {
         	trial *= 10;
         	trial += 8;
         	sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         };
         if ((e.which == 57) || (e.which == 104)) {
         	trial *= 10;
         	trial += 9;
         	sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         };
         if (e.which == 13) {
         	testNext(trial);
         };
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${nextButton}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$("settingsInput").hide();
         
         //numTries = document.getElementById('chancesBox').value;
         
         //timeLimit = document.getElementById('timeBox').value;
         
         numTries --;
         
         rainbow.setSpectrum('blue','red');
         rainbow.setNumberRange(0,numTries);
         
         for (var i = 1; i <= numTries; i++) {
             var hexColour = rainbow.colourAt(i);
             colorSpec[i] = '#' + hexColour;
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${submitYes}", "click", function(sym, e) {
         // insert code for mouse click here
         if (useEnter == 0)
         {
         	sym.$("insideSubmitNo").hide();
         	sym.$("insideSubmitYes").show();
         	useEnter = 1;
         	sym.$("backspace").show();
         	sym.$("enterbutton").show();
         	sym.$("backspaceCopy").show();
         	sym.$("enterbuttonCopy").show();
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${submitNo}", "click", function(sym, e) {
         // insert code for mouse click here
         if (useEnter == 1)
         {
         	sym.$("insideSubmitYes").hide();
         	sym.$("insideSubmitNo").show();
         	useEnter = 0;
         	sym.$("backspace").hide();
         	sym.$("enterbutton").hide();
         	sym.$("backspaceCopy").hide();
         	sym.$("enterbuttonCopy").hide();	
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button0Copy}", "click", function(sym, e) {
         // insert code for mouse click here
         
         previous = -1;
         trial *= 10;
         previous = 0;
         sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         if (useEnter == 0)
         	testNext(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button1Copy}", "click", function(sym, e) {
         // insert code for mouse click here
         previous = -1;
         trial *=10;
         trial += 1;
         previous = 1;
         sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         if (useEnter == 0)
         	testNext(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button2Copy}", "click", function(sym, e) {
         // insert code for mouse click here
         trial *=10;
         trial += 2;
         previous = 2;
         sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         if (useEnter == 0)
         	testNext(2);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button3Copy}", "click", function(sym, e) {
         trial *=10;
         trial += 3;
         previous = 3;
         sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         if (useEnter == 0)
         	testNext(3);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button4Copy}", "click", function(sym, e) {
         trial *=10;
         trial += 4;
         previous = 4;
         sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         if (useEnter == 0)
         	testNext(4);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button5Copy}", "click", function(sym, e) {
         // insert code for mouse click here
         if ((e.originalEvent.detail == 2) || (e.originalEvent.detail == 2))
         {
         
         }else
         {
         trial *=10;
         trial += 5;
         previous = 5;
         sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         if (useEnter == 0)
         	testNext(5);
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button6Copy}", "click", function(sym, e) {
         // insert code for mouse click here
         if ((e.originalEvent.detail == 2) || (e.originalEvent.detail == 2))
         {
         
         }else
         {
         trial *=10;
         trial += 6;
         previous = 6;
         sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         if (useEnter == 0)
         	testNext(6);
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button7Copy}", "click", function(sym, e) {
         // insert code for mouse click here
         if ((e.originalEvent.detail == 2) || (e.originalEvent.detail == 2))
         {
         
         }else
         {
         trial *=10;
         trial += 7;
         previous = 7;
         sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         if (useEnter == 0)
         	testNext(7);
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button8Copy}", "click", function(sym, e) {
         // insert code for mouse click here
         if ((e.originalEvent.detail == 2) || (e.originalEvent.detail == 2))
         {
         
         }else
         {
         trial *=10;
         trial += 8;
         previous = 8;
         sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         if (useEnter == 0)
         	testNext(8);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button9Copy}", "click", function(sym, e) {
         // insert code for mouse click here
         if ((e.originalEvent.detail == 2) || (e.originalEvent.detail == 2))
         {
         
         }else
         {
         trial *=10;
         trial += 9;
         previous = 9;
         sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         if (useEnter == 0)
         	testNext(9);
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button2}", "click", function(sym, e) {
         // insert code for mouse click here
         trial *=10;
         trial += 2;
         previous = 2;
         sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         if (useEnter == 0)
         	testNext(2);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button3}", "click", function(sym, e) {
         trial *=10;
         trial += 3;
         previous = 3;
         sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         if (useEnter == 0)
         	testNext(3);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button4}", "click", function(sym, e) {
         trial *=10;
         trial += 4;
         previous = 4;
         sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         if (useEnter == 0)
         	testNext(4);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button5}", "click", function(sym, e) {
         // insert code for mouse click here
         if ((e.originalEvent.detail == 2) || (e.originalEvent.detail == 2))
         {
         
         }else
         {
         trial *=10;
         trial += 5;
         previous = 5;
         sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         if (useEnter == 0)
         	testNext(5);
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button6}", "click", function(sym, e) {
         // insert code for mouse click here
         if ((e.originalEvent.detail == 2) || (e.originalEvent.detail == 2))
         {
         
         }else
         {
         trial *=10;
         trial += 6;
         previous = 6;
         sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         if (useEnter == 0)
         	testNext(6);
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button7}", "click", function(sym, e) {
         // insert code for mouse click here
         if ((e.originalEvent.detail == 2) || (e.originalEvent.detail == 2))
         {
         
         }else
         {
         trial *=10;
         trial += 7;
         previous = 7;
         sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         if (useEnter == 0)
         	testNext(7);
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button8}", "click", function(sym, e) {
         // insert code for mouse click here
         if ((e.originalEvent.detail == 2) || (e.originalEvent.detail == 2))
         {
         
         }else
         {
         trial *=10;
         trial += 8;
         previous = 8;
         sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         if (useEnter == 0)
         	testNext(8);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button9}", "click", function(sym, e) {
         // insert code for mouse click here
         if ((e.originalEvent.detail == 2) || (e.originalEvent.detail == 2))
         {
         
         }else
         {
         trial *=10;
         trial += 9;
         previous = 9;
         sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         if (useEnter == 0)
         	testNext(9);
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button1}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         
         previous = 1;
         trial *=10;
         trial += 1;
         previous = 1;
         sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         if (useEnter == 0)
         	testNext(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button0}", "click", function(sym, e) {
         // insert code for mouse click here
         
         previous = -1;
         trial *= 10;
         previous = 0;
         sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         if (useEnter == 0)
         	testNext(0);
         sym.$("button0").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${backspace}", "click", function(sym, e) {
         // insert code for mouse click here
         trial = Math.floor(trial/10);
         if (trial == 0)
         {
         	sym.getComposition().getStage().$("answerBox").html("").css("color","black");
         }else
         {
         	sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${enterbutton}", "click", function(sym, e) {
         // insert code for mouse click here
         testNext(trial);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${backspaceCopy}", "click", function(sym, e) {
         // insert code for mouse click here
         trial = Math.floor(trial/10);
         if (trial == 0)
         {
         	sym.getComposition().getStage().$("answerBox").html("").css("color","black");
         }else
         {
         	sym.getComposition().getStage().$("answerBox").html(trial).css("color","black");
         };

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${enterbuttonCopy}", "click", function(sym, e) {
         // insert code for mouse click here
         testNext(trial);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'button1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${box1}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(100);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${box1}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         // Play the timeline backwards from a label or specific time. For example:
         // sym.playReverse(500); or sym.playReverse("myLabel");
         sym.playReverse(100);
         //trial *=10;
         //trial += 1;
         //testNext(1);
         //sym.getComposition().getStage().$("answerBox").html(trial);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      

   })("button1");
   //Edge symbol end:'button1'

   //=========================================================
   
   //Edge symbol: 'button2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${box2}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(100);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${box2}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         // Play the timeline backwards from a label or specific time. For example:
         // sym.playReverse(500); or sym.playReverse("myLabel");
         sym.playReverse(100);
         //trial *=10;
         //trial += 2;
         //testNext(2);
         //sym.getComposition().getStage().$("answerBox").html(trial);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      

   })("button2");
   //Edge symbol end:'button2'

   //=========================================================
   
   //Edge symbol: 'button3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${box3}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.play(0);
         sym.stop(100);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${box3}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         // Play the timeline backwards from a label or specific time. For example:
         // sym.playReverse(500); or sym.playReverse("myLabel");
         sym.playReverse(100);
         //trial *=10;
         //trial += 3;
         //testNext(3);
         //sym.getComposition().getStage().$("answerBox").html(trial);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      

   })("button3");
   //Edge symbol end:'button3'

   //=========================================================
   
   //Edge symbol: 'button4'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${box4}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(100);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${box4}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         // Play the timeline backwards from a label or specific time. For example:
         // sym.playReverse(500); or sym.playReverse("myLabel");
         sym.playReverse(100);
         //trial *=10;
         //trial += 4;
         //testNext(4);
         //sym.getComposition().getStage().$("answerBox").html(trial);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

   })("button4");
   //Edge symbol end:'button4'

   //=========================================================
   
   //Edge symbol: 'button5'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${box5}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(100);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${box5}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         // Play the timeline backwards from a label or specific time. For example:
         // sym.playReverse(500); or sym.playReverse("myLabel");
         sym.playReverse(100);
         //trial *=10;
         //trial += 5;
         //testNext(5);
         //sym.getComposition().getStage().$("answerBox").html(trial);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

   })("button5");
   //Edge symbol end:'button5'

   //=========================================================
   
   //Edge symbol: 'button6'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${box6}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(100);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${box6}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         // Play the timeline backwards from a label or specific time. For example:
         // sym.playReverse(500); or sym.playReverse("myLabel");
         sym.playReverse(100);
         //trial *=10;
         //trial += 6;
         //testNext(6);
         //sym.getComposition().getStage().$("answerBox").html(trial);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

   })("button6");
   //Edge symbol end:'button6'

   //=========================================================
   
   //Edge symbol: 'button7'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${box7}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(100);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${box7}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         // Play the timeline backwards from a label or specific time. For example:
         // sym.playReverse(500); or sym.playReverse("myLabel");
         sym.playReverse(100);
         //trial *=10;
         //trial += 7;
         //testNext(7);
         //sym.getComposition().getStage().$("answerBox").html(trial);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

   })("button7");
   //Edge symbol end:'button7'

   //=========================================================
   
   //Edge symbol: 'button8'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${box8}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(100);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${box8}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         // Play the timeline backwards from a label or specific time. For example:
         // sym.playReverse(500); or sym.playReverse("myLabel");
         sym.playReverse(100);
         //trial *=10;
         //trial += 8;
         //testNext(8);
         //sym.getComposition().getStage().$("answerBox").html(trial);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

   })("button8");
   //Edge symbol end:'button8'

   //=========================================================
   
   //Edge symbol: 'beginButton_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();
      
      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRect}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.play(0);
         sym.stop(250)
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRect}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         var temp = 0;
         var leftTeam = "";
         var rightTeam = "";
         
         sym.playReverse(250);
         /*
         namesData = document.getElementById('namesBox').value;
         leftArray = ['a','b','c','d','e'];
         next = findNext(0);
         
         //csv2array("a,s,d,f,g",",");
         //sym.getComposition().getStage().$("answerBox").html("test");
         //leftArray = shuffleArray(leftArray);
         
         sym.getComposition().getStage().$("answerBox").html("test");
         
         temp = Math.ceil(leftArray.length/2);
         rightArray = leftArray.splice(temp,(temp*2));
         
         sym.getComposition().getStage().$("leftPlayer").html(leftArray[0]);
         sym.getComposition().getStage().$("rightPlayer").html(rightArray[0]);
         leftArray[0] = [leftArray[0],0];
         rightArray[0] = [rightArray[0],0];
         
         for(var i=1;i<leftArray.length;i++)
         {
         	leftTeam += leftArray[i];
         	leftTeam += "<br>";
         	leftArray[i] = [leftArray[i],0];
         };
         
         for(var i=1;i<rightArray.length;i++)
         {
         	rightTeam += rightArray[i];
         	rightTeam += "<br>";
         	rightArray[i] = [rightArray[i],0];
         };
         
         sym.getComposition().getStage().$("leftTeam").html(leftTeam);
         sym.getComposition().getStage().$("rightTeam").html(rightTeam);
         
         sym.getComposition().getStage().$("namesInput").hide();
         sym.getComposition().getStage().$("loadButton").hide();
         */

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRect}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 0;
         var tempArray = new Array();
         var leftTeam = "";
         var rightTeam = "";
         
         namesData = document.getElementById('namesBox').value;
         tempArray = csv2array(namesData,',');
         //sym.getComposition().getStage().$("answerBox").html("test");
         leftArray = tempArray.reduce(function(a, b) {
           return a.concat(b);
         }, []);
         leftArray = shuffleArray(leftArray);
         
         //sym.getComposition().getStage().$("answerBox").html(timeLimit);
         
         temp = Math.ceil(leftArray.length/2);
         rightArray = leftArray.splice(temp,(temp*2));
         
         sym.getComposition().getStage().$("leftPlayer").html(leftArray[0]);
         sym.getComposition().getStage().$("rightPlayer").html(rightArray[0]);
         leftArray[0] = [leftArray[0],0];
         rightArray[0] = [rightArray[0],0];
         
         for(var i=leftArray.length-1;i>0;i--)
         {
         	leftTeam += leftArray[i];
         	leftTeam += "<br>";
         	leftArray[i] = [leftArray[i],0];
         };
         
         for(var i=rightArray.length-1;i>0;i--)
         {
         	rightTeam += rightArray[i];
         	rightTeam += "<br>";
         	rightArray[i] = [rightArray[i],0];
         };
         
         //updateTeams();
         sym.getComposition().getStage().$("leftTeam").html(leftTeam);
         sym.getComposition().getStage().$("rightTeam").html(rightTeam);
         
         sym.getComposition().getStage().$("namesInput").hide();
         sym.getComposition().getStage().$("loadButton").hide();

      });
      //Edge binding end

      })("loadButton");
   //Edge symbol end:'loadButton'

   //=========================================================
   
   //Edge symbol: 'beginButton'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${RoundRect}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.play(0);
         sym.stop(250);

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${RoundRect}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.playReverse(250);
         previous = 0;
         sym.getComposition().getStage().$("answerBox").html("from 0");
         sym.getComposition().getStage().$("parameterBox").hide();
         sym.getComposition().getStage().$("numbersOutside").show();
         ready = 1;
         if ( (skipCondition & 1) > 0 )
         {
         	rules += "Prime Numbers" + "<br>";
         };
         if ( (skipCondition & 2) > 0 )
         {
         	rules += "Square Numbers" + "<br>";
         };
         if ( (skipCondition & 4) > 0 )
         {
         	rules += "Powers of 2 " + "<br>";
         };
         if ( (skipCondition & 8) > 0 )
         {
         	rules += "Powers of 3" + "<br>";
         };
         if ( (skipCondition & 16) > 0 )
         {
         	rules += "Multiples of 3" + "<br>";
         };
         if ( (skipCondition & 32) > 0 )
         {
         	rules += "Multiples of 4" + "<br>";
         };
         if ( (skipCondition & 64) > 0 )
         {
         	rules += "Multiples of 6" + "<br>";
         };
         if ( (skipCondition & 128) > 0 )
         {
         	rules += "Multiples of 7" + "<br>";
         };
         if ( (skipCondition & 256) > 0 )
         {
         	rules += "Multiples of 9" + "<br>";
         };   
         sym.getComposition().getStage().$("rulesRight").html(rules);
         sym.getComposition().getStage().$("rulesLeft").html(rules);
         sym.getComposition().getStage().$("rulesRight2").show();
         sym.getComposition().getStage().$("numpad1").show();
         sym.getComposition().getStage().$("leftarrow").show();
         sym.getComposition().getStage().$("leftarrow2").show();
         sym.getComposition().getStage().$("hideNine").hide();
         sym.getComposition().getStage().$("hideSix").hide();
         sym.getComposition().getStage().$("hideThree").hide();
         
         next = findNext(0);
         startTime(timeLimit);

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();
      
      });
      //Edge binding end

   })("beginButton");
   //Edge symbol end:'beginButton'

   //=========================================================
   
   //Edge symbol: 'beginButton_1'
   (function(symbolName) {   
   
      })("loadButton");
   //Edge symbol end:'loadButton'

   //=========================================================
   
   //Edge symbol: 'button9'
  (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${box9}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(100);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${box9}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         // Play the timeline backwards from a label or specific time. For example:
         // sym.playReverse(500); or sym.playReverse("myLabel");
         sym.playReverse(100);
         //trial *=10;
         //trial += 9;
         //testNext(9);
         //sym.getComposition().getStage().$("answerBox").html(trial);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

   })("button9");
   //Edge symbol end:'button9'

   //=========================================================
   
   //Edge symbol: 'button0'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${box0}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(100);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${box0}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         // Play the timeline backwards from a label or specific time. For example:
         // sym.playReverse(500); or sym.playReverse("myLabel");
         sym.playReverse(100);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("button0");
   //Edge symbol end:'button0'

   //=========================================================
   
   //Edge symbol: 'button0_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${box0}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(100);

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${box0}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         // Play the timeline backwards from a label or specific time. For example:
         // sym.playReverse(500); or sym.playReverse("myLabel");
         sym.playReverse(100);

      });
         //Edge binding end

      

      

      })("enterbutton");
   //Edge symbol end:'enterbutton'

   //=========================================================
   
   //Edge symbol: 'enterbutton_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${box0}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(100);

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${box0}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         // Play the timeline backwards from a label or specific time. For example:
         // sym.playReverse(500); or sym.playReverse("myLabel");
         sym.playReverse(100);

      });
         //Edge binding end

      

      

      })("backspace");
   //Edge symbol end:'backspace'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-85584");