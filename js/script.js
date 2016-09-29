// JavaScript Document

$(document) .ready(function() {
	var x = "x";
	var	o = "0";
	var	turns = 0;
	
	var spot1 = $("spot1");
	var spot2 = $("spot2");
	var spot3 = $("spot3");
	var spot4 = $("spot4");
	var spot5 = $("spot5");
	var spot6 = $("spot6");
	var spot7 = $("spot7");
	var spot8 = $("spot8");
	var spot9 = $("spot9");
	
	$ (".board li").on("click", function(){
		if(spot1.hasclass("o") && (spot2.hasclass("o") && (spot3.hasclass("o") ||
			(spot4.hasclass("o") && (spot5.hasclass("o") && (spot6.hasclass("o") ||
			(spot7.hasclass("o") && (spot8.hasclass("o") && (spot9.hasclass("o") ||
			(spot1.hasclass("o") && (spot4.hasclass("o") && (spot7.hasclass("o") ||
			(spot2.hasclass("o") && (spot5.hasclass("o") && (spot8.hasclass("o") ||
			(spot3.hasclass("o") && (spot6.hasclass("o") && (spot9.hasclass("o") ||
			(spot1.hasclass("o") && (spot5.hasclass("o") && (spot9.hasclass("o") ||
			(spot3.hasclass("o") && (spot5.hasclass("o") && (spot7.hasclass("o")
		){
		alert ("winnar: O");
			$(".board li") .text("+");
			$(".board li") .removeClass("disable");
			$(".board li") .removeClass("o");
			$(".board li") .removeClass("x");
    	
		} else(spot1.hasclass("x") && (spot2.hasclass("x") && (spot3.hasclass("x") ||
			(spot4.hasclass("x") && (spot5.hasclass("x") && (spot6.hasclass("x") ||
			(spot7.hasclass("x") && (spot8.hasclass("x") && (spot9.hasclass("x") ||
			(spot1.hasclass("x") && (spot4.hasclass("x") && (spot7.hasclass("x") ||
			(spot2.hasclass("x") && (spot5.hasclass("x") && (spot8.hasclass("x") ||
			(spot3.hasclass("x") && (spot6.hasclass("x") && (spot9.hasclass("x") ||
			(spot1.hasclass("x") && (spot5.hasclass("x") && (spot9.hasclass("x") ||
			(spot3.hasclass("x") && (spot5.hasclass("x") && (spot7.hasclass("x")
		){
			alert ("winnar: X");
			$(".board li") .text("+");
			$(".board li") .removeClass("disable");
			$(".board li") .removeClass("o");
			$(".board li") .removeClass("x");
		} else if (turns == 9){
			alert ("tie game");
			$(".board li") .text("+");
			$(".board li") .removeClass("disable");
			$(".board li") .removeClass("o");
			$(".board li") .removeClass("x");
			turns = 0;
		} else if ($(this).hasClass("disabled")){
			alert("this spot is taken");	
		} else if (turns%2 == 0){
			turns++;
			$(this) .text(o);
			$(this).addClass("disable o");
			if(spot1.hasclass("o") && (spot2.hasclass("o") && (spot3.hasclass("o") ||
			(spot4.hasclass("o") && (spot5.hasclass("o") && (spot6.hasclass("o") ||
			(spot7.hasclass("o") && (spot8.hasclass("o") && (spot9.hasclass("o") ||
			(spot1.hasclass("o") && (spot4.hasclass("o") && (spot7.hasclass("o") ||
			(spot2.hasclass("o") && (spot5.hasclass("o") && (spot8.hasclass("o") ||
			(spot3.hasclass("o") && (spot6.hasclass("o") && (spot9.hasclass("o") ||
			(spot1.hasclass("o") && (spot5.hasclass("o") && (spot9.hasclass("o") ||
			(spot3.hasclass("o") && (spot5.hasclass("o") && (spot7.hasclass("o")
		){
				alert("winner: O");
				turns = 0;
			}
		} else {
			turns++;
			$(this) .text(x);
			$(this).addClass("disable x");
			if(spot1.hasclass("x") && (spot2.hasclass("x") && (spot3.hasclass("x") ||
			(spot4.hasclass("x") && (spot5.hasclass("x") && (spot6.hasclass("x") ||
			(spot7.hasclass("x") && (spot8.hasclass("x") && (spot9.hasclass("x") ||
			(spot1.hasclass("x") && (spot4.hasclass("x") && (spot7.hasclass("x") ||
			(spot2.hasclass("x") && (spot5.hasclass("x") && (spot8.hasclass("x") ||
			(spot3.hasclass("x") && (spot6.hasclass("x") && (spot9.hasclass("x") ||
			(spot1.hasclass("x") && (spot5.hasclass("x") && (spot9.hasclass("x") ||
			(spot3.hasclass("x") && (spot5.hasclass("x") && (spot7.hasclass("x")
		){
			alert("winner: X");
			turns = 0;
		}
		}
		});
			//reset
			$(".reset").on("click", function(){
				$(".board li") .text("+");
				$(".board li") .removeClass("disable");
				$(".board li") .removeClass("o");
				$(".board li") .removeClass("x");
				turns = 0;
		});
});