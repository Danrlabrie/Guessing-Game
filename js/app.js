// jquery - begin/test

// Initializes game by generating a random number (1-100 inclusive)



$('#halbox').hide();
$('.image').hide();


// Initializes game by generating a random number (1-100 inclusive) also initialize
// some check variables.

var initialize = function() {
	var output = Math.floor( Math.random() * 100 + 1);
		return output;
}

var compNum = initialize()
var hotHi = compNum + 10,
	hotLo = compNum - 10,
	warmHi = compNum + 20,
	warmLo = compNum - 20,
	coolHi = compNum + 40,
	coolLo = compNum - 40;

var oddEven = compNum % 2 === 0 ? "even" : "odd" ;

var guessNum = 1;
var guessLeft = 4;
// button animation

$('.btn').click(function() {
  $( this ).animate({
    'font-size': 20
  }, 300, function() {
    $(this).animate({
    	'font-size': 18
    })
  });
}); 



// submit button (general gameplay) ---------

$('#submit').click(function(){
	var theGuess= $('input[name=guessbox]').val();
	var whereToGo = theGuess < compNum ? "higher" : "lower"
	
	if( theGuess > 100 || theGuess < 1 || isNaN(theGuess)) {

		$('#halspeech').html("I can't let you do that, Dave... You have to enter a number between 1 and 100.")
		$('#halbox').fadeIn("slow", function(){
			$('#halbox').delay(2000).fadeOut("slow");
		});
	return //function leave
	}
	else if ($("td").is( ":contains('"+theGuess+"')")) {
		$('#halspeech').html("Dave, you have already guessed that number..."+"." )
		$('#halbox').fadeIn("slow", function(){
			$('#halbox').delay(2000).fadeOut("slow");
	});
		return //function leave
	}

	else if ( theGuess == compNum ) {
		$('.image').show();
	}
	
	else if (hotLo < theGuess && theGuess < hotHi ) {
		$('#halspeech').html("You're getting HOT now, Dave. Why don't you guess a little " + whereToGo+".")
		$('#halbox').fadeIn("slow", function(){
			$('#halbox').delay(2000).fadeOut("slow");
	});
	}

	else if (warmLo < theGuess && theGuess < warmHi ) {
		$('#halspeech').html("You're starting to get WARM, Dave. Why don't you guess a little " + whereToGo+".")
		$('#halbox').fadeIn("slow", function(){
			$('#halbox').delay(2000).fadeOut("slow");
	});
	}

	else if ( coolLo < theGuess && theGuess < coolHi ) {
		$('#halspeech').html("You're cool, Dave. Why don't you guess a little " + whereToGo+"." )
		$('#halbox').fadeIn("slow", function(){
			$('#halbox').delay(2000).fadeOut("slow");
	});
	}
	else if ( coolLo < theGuess && theGuess < coolHi ) {
		$('#halspeech').html("You're cooling off, Dave. Why don't you guess a little " + whereToGo+"." )
		$('#halbox').fadeIn("slow", function(){
			$('#halbox').delay(2000).fadeOut("slow");
	});
	}


	else  {
		$('#halspeech').html("You're ICE COLD , Dave. Why don't you guess a little "+ whereToGo+".")
		$('#halbox').fadeIn("slow", function(){
			$('#halbox').delay(2000).fadeOut("slow");
	});
	};

	$('table').append("<tr><td>" + theGuess + "</td></tr>");
	$('#guesscount').html("" + guessLeft);
	
	if(guessLeft === 0) {
		$('.f').fadeOut("slow");
		$('#halspeech').html("You've lost, Dave. Better luck next time.")
		$('#halbox').fadeIn("slow")
	


}
	guessNum++ ;
	guessLeft--;

});




// hint button ---- provides whether the answer is odd or even.


	$('#gethint').click(function(){
		$('#halspeech').html("You need assistance, Dave? The answer is " + oddEven +".")
		$('#halbox').fadeIn("slow", function(){
			$('#halbox').delay(2000).fadeOut("slow");
		});
	});

		$('#showanswer').click(function(){
		$('#halspeech').html("Giving up, Dave? The answer is " + compNum +".")
		$('#halbox').fadeIn("slow", function(){
			$('#halbox').delay(2000).fadeOut("slow");
		});
	});

// refresh button, refreshes the page, waits for a msg from HAL.

$('#restarter').click(function() {
	$('#halspeech').html("I can\'t let you jeopardize this mission, Dave. Goodbye.")
		$('#halbox').fadeIn("slow", function(){
			$('#halbox').delay(2000).fadeOut("slow")
			setTimeout(function(){
				location.reload();
			}, 2500)
				
		});
});
