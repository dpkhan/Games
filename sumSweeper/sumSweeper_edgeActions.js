/***********************
*	Custom Functions
/***********************/
function accept_click(ans, values, counters, sum, selection)
	{
		var comp = AdobeEdge.getComposition("EDGE-2823191").getStage();
	       
		if (counters[ans] != 1)
		{
			if (ans < 10)
			{
				comp.$('b0'+ans).css({"background-color":"rgba(33,33,200,1.00)","color":"white"});
			}else
			{
				comp.$('b'+ans).css({"background-color":"rgba(33,33,200,1.00)","color":"white"});
			}
			counters[ans] = 1;
			sum = sum + values[ans];
			selection.push(ans);
		} else
		{
			if (ans < 10)
			{
				comp.$('b0'+ans).css({"background-color":"white","color":"black"});
			}else
			{
				comp.$('b'+ans).css({"background-color":"white","color":"black"});
			}
			counters[ans] = 0;
			sum = sum - values[ans];
			selection.splice(selection.indexOf(ans),1);
		}
			
		return sum;
	};

function find_sum(sorter, target, sum, count)
{
	var temp = 0;

	var comp = AdobeEdge.getComposition("EDGE-2823191").getStage();

	if (count > sorter.length)
	{
		return 0;
	} else
	{
		if( (sum + sorter[count]) == target )
		{
			return 1;
		}else if ( (sum + sorter[count]) > target )
		{
			return 0;
		}else
		{
			temp =  find_sum(sorter, target, (sum+sorter[count]) , count+1);
			if (temp == 1)
			{
				return 1;
			} else
			{
				return find_sum(sorter, target, sum, count+1);
			};
		};
	};
};	
function any_left(values, sorter, target, selection, count, score)
	{
		var comp = AdobeEdge.getComposition("EDGE-2823191").getStage();
		var is_sum = 1;
		var temp = 0;
		for(var i=0; i < selection.length; i++) 
      {
	     	temp = selection[i];
	     	sorter.splice(sorter.indexOf(values[temp]),1);
      }
      if (count > 50)
      {
      	is_sum = find_sum(sorter, target,0,0);
      	if (is_sum != 0)
      	{
				comp.$('check').css({"background-color":"green"});
      	}else
      	{
      		comp.$('check').css({"background-color":"red"});
//      		clearInterval(timer);
      	}
    	}
    	return is_sum;
   };
function finished(counters, score)
{
	var comp = AdobeEdge.getComposition("EDGE-2823191").getStage();
	var j = 0;
	var k = 0;
	
   for(var i=0; i<100; i++) 
   {
     	if (i>9){
    		comp.$("b"+i).unbind("click");
     	} else
     	{
     		comp.$("b0"+i).unbind("click");
     	}
	}
  	color_timer = setInterval(color_square,25);

	function color_square()
	{
     	while ( counters[j] == 1 )
     	{
     		j++;
     	};
     	if (j<10){
     		comp.$("b0"+j).css({"background-color":"red"});
     	} else if (j < 100)
     	{
     		comp.$("b"+j).css({"background-color":"red"});
     	} else
     	{
     		clearInterval(color_timer);
     		clear_timer = setInterval(clear_square,25);
			}
     	j++;
	};	
	
	function clear_square()
	{
     	if (k<10){
     		comp.$("b0"+k).hide();
     	} else if (k < 100)
     	{
     		comp.$("b"+k).hide();
     	} else
     	{
     		clearInterval(clear_timer);
     		comp.$("backgroundBox").html("<br>Congratulations!!!<br>You Scored<br><br><br>Points").css({"text-align":"center","background-color":"orange","color":"white","line-height":"70px","font-size":"65px"});
			comp.$("backgroundScore").html(score).css({"text-align":"center","background-color":"orange","color":"white","line-height":"175px","font-size":"150px"});
     	}
     	k++;
    }
 };
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
   
	Array.prototype.randomize = function()
		{
			var i = this.length, j, temp;
			while ( --i )
			{
				j = Math.floor( Math.random() * (i - 1) );
				temp = this[i];
				this[i] = this[j];
				this[j] = temp;
			}
		}

	
      var counters = new Array(100,0);
      var values = new Array(100,0);
  		var target = Math.floor((Math.random()*19)+10);
  		var halftarget = target / 2;
  		var sum = 0;
  		var count = 0;
		var sorter = [];
  		var selection = [];
  		var score = 0;
  		var bonus = 0;
  		var time_bonus = 0;
  		
  		if (target == 10)
  		{
  			bonus = 1.5;
  		}else if ((target == 15) || (target == 20))
  		{
  			bonus = 2.5;
  		}else if (target < 15)
  		{
  			bonus = 3;
  		}else if (target < 20)
  		{
  			bonus = 3.5;
  		}else if (target == 25)
  		{
  			bonus = 4;
  		}else if (target < 25)
  		{
  			bonus = 4.5;
  		}else
  		{
  			bonus = 5;
  		};	
       
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         var count = 0;
	  		var temp = 0;
	  		timer = setInterval(onTimer,100);
  			start_time = new Date();
			start_milli = start_time.getTime();
			
	  		function onTimer() {
	  			var current_time = new Date();
	  			var elapsed_time = 600 -(current_time.getTime() - start_milli)/100;
	  			var hundredths = Math.floor(elapsed_time%10);
				var seconds = Math.floor((elapsed_time/10)%60);
	  			var minutes = Math.floor((elapsed_time/600)%60);
	  			var time_string =  minutes + ':' + ((seconds < 10)?('0'+ seconds + ':'):( seconds + ':' )) + hundredths;
	  			
	  			if (elapsed_time <= 0)
	  			{
	  				clearInterval(timer);
	  				hundredths = 0;
					seconds = 0;
	  				minutes = 0;
	  				time_string =  minutes + ':'  + ((seconds < 10)?('0'+ seconds + ':'):( seconds + ':' )) + hundredths;
					sym.$("timeBox").html(time_string).css({"text-align":"center","line-height":"150px","font-size":"90px"});
					finished(counters, score);	  				
	  			}else
	  			{
	  				sym.$("timeBox").html(time_string).css({"text-align":"center","line-height":"150px","font-size":"90px"});
	  				time_bonus = minutes*60 + seconds;
	  			}
			}

	  		sym.$("target").html(target).css({"text-align":"center","line-height":"420px","font-size":"250px"});
	  		sym.$("scorebox").html(score).css({"text-align":"center","line-height":"150px","font-size":"90px"});

//     		sym.$("backgroundBox").html("Congratulations!!!<br>You Scores<br>" + score).css({"text-align":"center","background-color":"orange","color":"white","line-height":"150px","font-size":"75px"});

		
         while (count < 95)
         {
         	values[count]=Math.floor((Math.random()*halftarget)+1);
         	values[count+1]=Math.floor((Math.random()*(halftarget-1))+1);
         	temp = (values[count] + values[count + 1]);
         	count += 2;
         	if ( temp > halftarget )
         	{
         		values[count] = target - temp;
         		count ++;
         	} 
         	else
         	{
	          	values[count]=Math.floor((Math.random()*halftarget)+1);
   				temp += values[count];
   				values[count + 1] = target - temp;
   				count += 2;   		
         	}
         };
         
         if (count == 95)
         {
         	values[count]=Math.floor((Math.random()*halftarget)+1);
         	values[count+1]=Math.floor((Math.random()*(halftarget-1))+1);
         	temp = (values[count] + values[count + 1]);
        		values[count+2] = target - temp;
         	values[count+3]=Math.floor((Math.random()*(halftarget-1))+1);
         	values[count+4] = target - values[count+3];  
				count += 5;
         }else if (count == 96)
         {
         	values[count]=Math.floor((Math.random()*halftarget)+1);
         	values[count+1] = target - values[count];
         	values[count+2]=Math.floor((Math.random()*(halftarget-1))+1);
         	values[count+3] = target - values[count+2];  
         	count += 4;       	
         }else if (count == 97)
         {
         	values[count]=Math.floor((Math.random()*halftarget)+1);
         	values[count+1]=Math.floor((Math.random()*(halftarget-1))+1);
         	temp = (values[count] + values[count + 1]);
         	values[count+2] = target - temp;
         	count += 3;
         }else if (count == 98)
         {
         	values[count]=Math.floor((Math.random()*halftarget)+1);
         	values[count+1] = target - values[count];
         	count += 2;       
         };
         
         sorter = values.slice(0);
  			sorter.sort(function(a,b){return a-b});       
         values.randomize();
//        	sym.$("leftany").html(sorter.toString()).css({"text-align":"center","line-height":"30px","font-size":"30px","word-wrap":"break-word"});
               
         for(var i=0; i<100; i++) 
         {
         	if (i>9){
         		sym.$("b"+i).html(values[i]).css({"text-align":"center","line-height":"50px","font-family":"carter-one, sans-serif","font-size":"33px"});
         	} else
         	{
         		sym.$("b0"+i).html(values[i]).css({"text-align":"center","line-height":"50px","font-family":"carter-one, sans-serif","font-size":"33px"});
         	}
         };
			
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_b00}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(0, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b01}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(1, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b02}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(2, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b03}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(3, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b04}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(4, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b05}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(5, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b06}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(6, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b07}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(7, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b08}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(8, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b09}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(9, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b10}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(10, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b11}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(11, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b12}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(12, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b13}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(13, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b14}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(14, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b15}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(15, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b16}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(16, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b17}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(17, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b18}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(18, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b19}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(19, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b20}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(20, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b21}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(21, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b22}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(22, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b23}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(23, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b24}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(24, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b25}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(25, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b26}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(26, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b27}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(27, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b28}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(28, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b29}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(29, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b30}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(30, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b31}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(31, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b32}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(32, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b33}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(33, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b34}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(34, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b35}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(35, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b36}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(36, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b37}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(37, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b38}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(38, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b39}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(39, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b40}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(40, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b41}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(41, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b42}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(42, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b43}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(43, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b44}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(44, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b45}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(45, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b46}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(46, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b47}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(47, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b48}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(48, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b49}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(49, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b50}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(50, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b51}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(51, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b52}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(52, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b53}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(53, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b54}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(54, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b55}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(55, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b56}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(56, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b57}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(57, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b58}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(58, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b59}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(59, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b60}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(60, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b61}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(61, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b62}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(62, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b63}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(63, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b64}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(64, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b65}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(65, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b66}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(66, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b67}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(67, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b68}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(68, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b69}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(69, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b70}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(70, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b71}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(71, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b72}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(72, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b73}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(73, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b74}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(74, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b75}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(75, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b76}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(76, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b77}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(77, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b78}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(78, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b79}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(79, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b80}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(80, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b81}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(81, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b82}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(82, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b83}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(83, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b84}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(84, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b85}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(85, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b86}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(86, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b87}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(87, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b88}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(88, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b89}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(89, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b90}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(90, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b91}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(91, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b92}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(92, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b93}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(93, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b94}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(94, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b95}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(95, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b96}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(96, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b97}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(97, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b98}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(98, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_b99}", "click", function(sym, e) {
         // insert code for mouse click here
         sum = accept_click(99, values, counters, sum, selection);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_submit}", "click", function(sym, e) {
         // insert code for mouse click here
         var temp = 0;
         var test = 0;
         if (sum == target)
         {
         //				sym.$('check').css({"background-color":"green"});
				sum = 0;
				if ( count < 20 )
				{
					score += selection.length*1;
				}else if ( count < 40 )
				{
					score += selection.length*2;
				}else if ( count < 60 )
				{
					score += selection.length*3;
				}else if ( count < 80 )
				{
					score += selection.length*4;
				}else
				{
					score += selection.length*5;
				}
         	count += selection.length;
         	if (count == 100)
         	{
         		clearInterval(timer);
         		score += time_bonus;
         		finished(counters,score);
         	} else
         	{
         		test = any_left(values, sorter, target, selection, count, score);
         		if ( test == 0 )
         		{
      	   		clearInterval(timer);
						finished(counters,score);
         		} else
         		{
         		    start_milli += (1000*bonus);
         		}
         	}
         	while (selection.length > 0)
         	{ 
         		temp = selection.pop(); 
         		if (temp < 10)
         		{
         		sym.$('b0'+temp).hide();
         		}else
         		{
         		sym.$('b'+temp).hide();
         		}
         	};
		  		sym.$("scorebox").html(score).css({"text-align":"center","line-height":"150px","font-size":"90px"});
         } else
         {
		 		for(var i=0; i < selection.length; i++) 
      		{
					if ( selection[i] < 10)
					{
						sym.$('b0'+ selection[i]).css({"background-color":"red","color":"white"});
					}else
					{
						sym.$('b'+ selection[i]).css({"background-color":"red","color":"white"});
					}	     			
      		}
         }


      });
      //Edge binding end
		
		
   Symbol.bindElementAction(compId, symbolName, "document", "keyup", function(sym, e) {
         // insert code to be run when the user stops pressing a key.
         // The variable “e.which” tells you the key code of the key that was pressed, e.g. 13 = enter
      if (e.which == 13) {
         var temp = 0;
         var test = 0;
         if (sum == target)
         {
         //				sym.$('check').css({"background-color":"green"});
				sum = 0;
				if ( count < 20 )
				{
					score += selection.length*1;
				}else if ( count < 40 )
				{
					score += selection.length*2;
				}else if ( count < 60 )
				{
					score += selection.length*3;
				}else if ( count < 80 )
				{
					score += selection.length*4;
				}else
				{
					score += selection.length*5;
				}
         	count += selection.length;
         	if (count == 100)
         	{
         		clearInterval(timer);
         		score += time_bonus;
         		finished(counters,score);
         	} else
         	{
         		any_left(values, sorter, target, selection, count, score);
         		start_milli += (1000*bonus);
         	}
           	while (selection.length > 0)
         	{ 
         		temp = selection.pop(); 
         		if (temp < 10)
         		{
         		sym.$('b0'+temp).hide();
         		}else
         		{
         		sym.$('b'+temp).hide();
         		}
         	};
		  		sym.$("scorebox").html(score).css({"text-align":"center","line-height":"150px","font-size":"90px"});
         }else
         {
		 		for(var i=0; i < selection.length; i++) 
      		{
					if ( selection[i] < 10)
					{
						sym.$('b0'+ selection[i]).css({"background-color":"red","color":"white"});
					}else
					{
						sym.$('b'+ selection[i]).css({"background-color":"red","color":"white"});
					}	     			
      		}
         }; 
			
      }

   });
   //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'submit'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_submit}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         // stop the timeline at the given position (ms or label)
         sym.stop(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_submit}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         // stop the timeline at the given position (ms or label)
         sym.stop(0);

      });
      //Edge binding end

   })("submit");
   //Edge symbol end:'submit'

})(jQuery, AdobeEdge, "EDGE-2823191");