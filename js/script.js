// JavaScript Document

$(document).ready(function(){
	var x = "x",
		o = "0",
		turns = 0,
		spot1 = $(".spot1"),
		spot2 = $(".spot2"),
		spot3 = $(".spot3"),
		spot4 = $(".spot4"),
		spot5 = $(".spot5"),
		spot6 = $(".spot6"),
		spot7 = $(".spot7"),
		spot8 = $(".spot8"),
		spot9 = $(".spot9"),
	
	$(".board li").on("click", function(){
		if(
			spot1.hasClass("o") && spot2.hasClass("o") && spot3.hasClass("o") ||
			spot4.hasClass("o") && spot5.hasClass("o") && spot6.hasClass("o") ||
			spot7.hasClass("o") && spot8.hasClass("o") && spot9.hasClass("o") ||
			spot1.hasClass("o") && spot4.hasClass("o") && spot7.hasClass("o") ||
			spot2.hasClass("o") && spot5.hasClass("o") && spot8.hasClass("o") ||
			spot3.hasClass("o") && spot6.hasClass("o") && spot9.hasClass("o") ||
			spot1.hasClass("o") && spot5.hasClass("o") && spot9.hasClass("o") ||
			spot3.hasClass("o") && spot5.hasClass("o") && spot7.hasClass("o")
		){
			alert ("winnar: O");
			$(".board li") .text("+");
			$(".board li") .removeClass("disable");
			$(".board li") .removeClass("o");
			$(".board li") .removeClass("x");
    	
		} else if(
			spot1.hasClass("x") && spot2.hasClass("x") && spot3.hasClass("x") ||
			spot4.hasClass("x") && spot5.hasClass("x") && spot6.hasClass("x") ||
			spot7.hasClass("x") && spot8.hasClass("x") && spot9.hasClass("x") ||
			spot1.hasClass("x") && spot4.hasClass("x") && spot7.hasClass("x") ||
			spot2.hasClass("x") && spot5.hasClass("x") && spot8.hasClass("x") ||
			spot3.hasClass("x") && spot6.hasClass("x") && spot9.hasClass("x") ||
			spot1.hasClass("x") && spot5.hasClass("x") && spot9.hasClass("x") ||
			spot3.hasClass("x") && spot5.hasClass("x") && spot7.hasClass("x")
		){
			alert ("winnar: X");
			$(".board li") .text("+");
			$(".board li") .removeClass("disable");
			$(".board li") .removeClass("o");
			$(".board li") .removeClass("x");
			
		} else if (turns === 9){
			alert ("tie game");
			$(".board li") .text("+");
			$(".board li") .removeClass("disable");
			$(".board li") .removeClass("o");
			$(".board li") .removeClass("x");
			turns = 0;
			
		} else if ($(this).hasClass("disabled")){
			alert("this spot is taken");	
			
		} else if (turns%2 === 0){
			turns++;
			$(this) .text(o);
			$(this).addClass("disable o");
			
			if(
				spot1.hasClass("o") && spot2.hasClass("o") && spot3.hasClass("o") ||
				spot4.hasClass("o") && spot5.hasClass("o") && spot6.hasClass("o") ||
				spot7.hasClass("o") && spot8.hasClass("o") && spot9.hasClass("o") ||
				spot1.hasClass("o") && spot4.hasClass("o") && spot7.hasClass("o") ||
				spot2.hasClass("o") && spot5.hasClass("o") && spot8.hasClass("o") ||
				spot3.hasClass("o") && spot6.hasClass("o") && spot9.hasClass("o") ||
				spot1.hasClass("o") && spot5.hasClass("o") && spot9.hasClass("o") ||
				spot3.hasClass("o") && spot5.hasClass("o") && spot7.hasClass("o")
		){
				alert("winner: O");
				turns = 0;
			}
		} else {
			turns++;
			$(this) .text(x);
			$(this).addClass("disable x");
			if(
				spot1.hasClass("x") && spot2.hasClass("x") && spot3.hasClass("x") ||
				spot4.hasClass("x") && spot5.hasClass("x") && spot6.hasClass("x") ||
				spot7.hasClass("x") && spot8.hasClass("x") && spot9.hasClass("x") ||
				spot1.hasClass("x") && spot4.hasClass("x") && spot7.hasClass("x") ||
				spot2.hasClass("x") && spot5.hasClass("x") && spot8.hasClass("x") ||
				spot3.hasClass("x") && spot6.hasClass("x") && spot9.hasClass("x") ||
				spot1.hasClass("x") && spot5.hasClass("x") && spot9.hasClass("x") ||
				spot3.hasClass("x") && spot5.hasClass("x") && spot7.hasClass("x")
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