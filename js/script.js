// JavaScript Document

$(document).ready(function(){
	var x = "x",
		o = "0",
		turns = 0,
		playerScore1 = 0,
		playerScore2 = 0,
		spot1 = $(".spot1"),
		spot2 = $(".spot2"),
		spot3 = $(".spot3"),
		spot4 = $(".spot4"),
		spot5 = $(".spot5"),
		spot6 = $(".spot6"),
		spot7 = $(".spot7"),
		spot8 = $(".spot8"),
		spot9 = $(".spot9"),
		oWon = $(".pop-up-o"),
		xWon = $(".pop-up-x"),
		scorePopup = $(".score-popup"),
		tie = $(".tie-game");

	
	$(".score-player-o span").text(playerScore1);
	$(".score-player-x span").text(playerScore2);

	function checkSpots(player) {
		return spot1.hasClass(player) && spot2.hasClass(player) && spot3.hasClass(player) ||
			spot4.hasClass(player) && spot5.hasClass(player) && spot6.hasClass(player) ||
			spot7.hasClass(player) && spot8.hasClass(player) && spot9.hasClass(player) ||
			spot1.hasClass(player) && spot4.hasClass(player) && spot7.hasClass(player) ||
			spot2.hasClass(player) && spot5.hasClass(player) && spot8.hasClass(player) ||
			spot3.hasClass(player) && spot6.hasClass(player) && spot9.hasClass(player) ||
			spot1.hasClass(player) && spot5.hasClass(player) && spot9.hasClass(player) ||
			spot3.hasClass(player) && spot5.hasClass(player) && spot7.hasClass(player);
	}
	
	$(".board li").on("click", function(){
		if(checkSpots('o')){
			$(".board li") .text("+");
			$(".board li") .removeClass("disable");
			$(".board li") .removeClass("o");
			$(".board li") .removeClass("x");
			alert ("winnar: O");
    	
		} else if(checkSpots('x')){
			$(".board li") .text("+");
			$(".board li") .removeClass("disable");
			$(".board li") .removeClass("o");
			$(".board li") .removeClass("x");
			alert ("winnar: X");
			
		} else if (turns === 8){
			alert ("tie game");
			tie.show();
			$(".board li") .text("+");
			$(".board li") .removeClass("disable");
			$(".board li") .removeClass("o");
			$(".board li") .removeClass("x");
			turns = 0;
			
		} else if ($(this).hasClass("disable")){
			alert("this spot is taken");	
			
		} else if (turns%2 === 0){
			turns++;
			$(this) .text(o);
			$(this).addClass("disable o");
			
			if(checkSpots('o')){
				
				oWon.animate({
					opacity: 1
				}, 'fast');
				turns = 0;
				playerScore1++;
				$(".score-player-o span").text(playerScore1);

			}
		} else {
			turns++;
			$(this) .text(x);
			$(this).addClass("disable x");
			if(checkSpots('x')){
				xWon.animate({
					opacity: 1
				}, 'fast');
				turns = 0;
				playerScore2++;
				$(".score-player-x span").text(playerScore2);
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
				scorePopup.animate({
					opacity: 0
				}, 'fast');
	});
});