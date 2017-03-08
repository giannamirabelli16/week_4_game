//always wrap jQuery in this://
$(document).ready(function(){

//variables
var wins = 0;
var losses = 0;
var currentNumber = 0; //this variable is for current number; the sum of crystals added together while playing game
var targetNumber = 0; //computer generated number once game is started
var crystalWhite = 0;
var crystalBlue = 0; 
var crystalPink = 0; 
var crystalPurple = 0; 
var totalscore = 0; 
var chances = 5; 

//allows the user to click on the crystals to achieve the target number//
$("#crystal1").click(function(){
	//When crystal1 is clicked on the function is allowing the value of the crystal to be added to the current number
	currentNumber += crystalWhite;
	$(".currentnumber").html(currentNumber);
	evaluateTotal();
});
$("#crystal2").click(function(){
	//When crystal1 is clicked on the function is allowing the value of the crystal to be added to the current number
	currentNumber += crystalBlue;
	$(".currentnumber").html(currentNumber);
	evaluateTotal();
});
$("#crystal3").click(function(){
	//When crystal1 is clicked on the function is allowing the value of the crystal to be added to the current number
	currentNumber += crystalPink;
	$(".currentnumber").html(currentNumber);
	evaluateTotal();
});
$("#crystal4").click(function(){
	//When crystal1 is clicked on the function is allowing the value of the crystal to be added to the current number
	currentNumber += crystalPurple;
	$(".currentnumber").html(currentNumber);
	evaluateTotal();
});

//This function will be evaluating the wins and losses after executing the crystal values 
function evaluateTotal () {
	if (currentNumber > targetNumber) {
		losses ++;
		$(".losses").html(losses);
		totalscore -= 10; 
		$(".totalscore").html(totalscore);
		chances --; 
		$(".chancesleft").html(chances);
		if (chances === 0) {
		$(".chancesleft").html(chances);
		wins = losses = totalscore = 0;
		$(".wins").html(wins);
		$(".losses").html(losses);
		$(".totalscore").html(totalscore);
		chances = 5;
		$(".chancesleft").html(chances);
			alert("You did not collect all the crystals! Please try again!");
		}
		start ();
	}else if (currentNumber === targetNumber) {
		wins ++;
		$(".wins").html(wins);
		totalscore += 10;
		$(".totalscore").html(totalscore);
		if (totalscore === 50) {
			alert("You are a winner!");
			wins = losses = totalscore = 0;
			$(".wins").html(wins);
			$(".losses").html(losses);
			$(".totalscore").html(totalscore);
			chances = 5;
			$(".chancesleft").html(chances);
		}
		start ();
	}

};

//This function is for the start of the game and/or when a player wins//
function start () {
	targetNumber = Math.floor(Math.random() * (102) + 19);

	$(".targetnumber").html(targetNumber);

	crystalWhite = Math.floor(Math.random() * (12) + 1);
	crystalBlue = Math.floor(Math.random() * (12) + 1);
	crystalPink = Math.floor(Math.random() * (12) + 1);
	crystalPurple = Math.floor(Math.random() * (12) + 1);

	currentNumber = 0;

	$(".currentnumber").html(currentNumber);
};

start ();

//Everything inside the document.ready function is what will load on the page before the player starts the game
$(".totalscore").html(totalscore);
$(".chancesleft").html(chances);

});