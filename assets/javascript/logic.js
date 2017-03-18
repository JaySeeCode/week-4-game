// <!-- Javascript Code -->
	

		var winCounter = 0;
		var lossesCounter = 0;
		var hasWonOrLost = false;

		// ALL OF THESE VALUES ARE AUTOMATICALLY ASSIGNED A VALUE THE MOMENT
		// THE startGame() IS CALLED.

		var totalScore = 0;
		var userTotal = 0;
		var numBlue = 0;
		var numPurple = 0;
		var numRuby = 0;
		var numPointy = 0;

		startGame();


	$(document).ready(function(){

		$('#score').html("<h2>" + totalScore + "</h2>");

		$('.button').on("click", function(){

			hasWonOrLost = false;
			startGame();
			$('#score').html("<h2>" + totalScore + "</h2>");
			$("#total").html("<h2>" + userTotal + "</h2>");
			console.log(totalScore);
			console.log(numBlue);
			console.log(numPurple);
			console.log(numRuby);
			console.log(numPointy);

		})


		// this allows one to generate a random number between a specified set of point
		// Math.floor(Math.random()*(max-min+1)+min);

		$("#blue").on("click", function(){

			if(hasWonOrLost) return;


			userTotal += numBlue;
			// console.log(numBlue);

			// $("#test-display").text("blue" + ": " + numBlue);
			$("#total").html("<h2>" + userTotal + "</h2>");

			checkForWin();
			checkForLose();
		})

		$("#purple").on("click", function(){

			if(hasWonOrLost) return;


			// $("#test-display").text("purple"+ ": " + numPurple);

			userTotal += numPurple;
			// console.log(numPurple);
			$("#total").html("<h2>" + userTotal + "</h2>");

			checkForWin();
			checkForLose();
		})

		$("#ruby").on("click", function(){

			if(hasWonOrLost) return;

			// $("#test-display").text("ruby"+ ": " + numRuby);

			userTotal += numRuby;
			// console.log(numRuby);
			$("#total").html("<h2>" + userTotal + "</h2>");

			checkForWin();
			checkForLose();
		})

		$("#pointy").on("click", function(){

			if(hasWonOrLost) return;

			// $("#test-display").text("pointy"+ ": " + numPointy);

			userTotal += numPointy;
			// console.log(numPointy);
			$("#total").html("<h2>" + userTotal + "</h2>");

			checkForWin();
			checkForLose();
		})


	});


	// FUNCTIONS

	function generateScoreNum() {

		var num = Math.floor(Math.random()*(47-31+1)+31);
		return num;

	}

	function generateCrystalNum() {

		var num = Math.floor(Math.random()*(9-1+1)+1);

		while( num === numBlue || num === numPurple || num === numPointy || num === numRuby ){
			num = Math.floor(Math.random()*(9-1+1)+1);
		} 


		return num;
	}

	function startGame(){

		totalScore = generateScoreNum();
		userTotal= 0;

		numBlue = generateCrystalNum();
		numPurple = generateCrystalNum();
		numRuby = generateCrystalNum();
		numPointy = generateCrystalNum();

		console.log(numBlue);
		console.log(numPurple);
		console.log(numRuby);
		console.log(numPointy);


		checkForMatches();
		
	}

	function checkForMatches(array) {




		if((numBlue == numPurple) || (numBlue == numRuby) || (numBlue == numPointy)){

			numBlue = generateCrystalNum();
		}
		if((numPurple == numBlue) || (numPurple == numRuby) || (numPurple == numPointy)){

			numPurple = generateCrystalNum();
		}
		if((numRuby == numBlue) || (numBlue == numPurple) || (numBlue == numPointy)){

			numRuby = generateCrystalNum();
		}
		if((numPointy == numBlue) || (numPointy == numPurple) || (numPointy == numRuby)){

			numPointy = generateCrystalNum();
		}
	}

	function checkForWin(){

		if(userTotal == totalScore){
			winCounter++;
			hasWonOrLost = true;
			// console.log("you win");

			$('#win').html("<strong>" + "Wins: " + winCounter + "</strong>");
			alert("Congratulations, you've matched the number and won. If you wish to play again, please click the 'Play Again' button.");
		}

	}

	function checkForLose(){

		if(userTotal > totalScore){
			lossesCounter++;
			hasWonOrLost = true;
			// console.log("you lose");

			$('#lose').html("<strong>" + "Losses: " + lossesCounter + "</strong>");
			alert("So sorry, but you've exceeded the number and lost... If you wish to play again, please click the 'Play Again' button.");
	
		}

	}




//  <!-- ~2:30 am
//  so far I've got each crystal with a randomnly generated number. I've also got the main random number. now I need to figure out how to get the crystals to keep their number for the remainder of the game session. also, i need to make sure that no number is repeated twice. I force a long code ahead. -->

// <!-- 3:01 am
// done with the first part: making the numbers stay the same throught the course of the game session. now, I need to check and make sure no numbers are repeated twice.then I can move on conditionals for determining win or lose. -->

// <!-- 3:11 am
// okay, I have writen the code that checks for matches. if no numbers are the same, then nothing happens. but if it finds a match for a number that has been repeated, it generates it again. now, I need to write the code that checks for a win or lose situation. -->

// <!-- 3:22 am 
// got a win or lose check system working, but my numbers aren't getting reset whenever the user wins or losses.... -->

// <!-- 3:33 am
// awesome, got numbers to reset upon clicking of the "play again" button. when player wins or loses, game stops.  -->

// <!-- 3:36 am
// okay so just doubled checked that everything was getting reset... check. Now I just need to display the updated values and scores on the screen... after that, I can focus on some CSS for styles and looks. -->



// <!-- 3:59 pm
// so, I got a lot of stuff working in the program. the numbers add up, the program successfully checks for win or lose continually until userTotal either matches or surpasses totalScore. when the game is over, everything freezes unless you choose to play again by clicking the respective button. if you do press it, everything gets reset, except the wins and losses counters. also, everything is updated on the screen real time. Now, there is one thing that isn't working quite right... and that is the checkForMatch function, whose sole purpose is, as the name suggests, to check whether the numbers that have been randomly assigned to the crystals repeat themselves, and if they do, to reassign a value... this part is turning out to be a little trickier than I initially thought.  -->