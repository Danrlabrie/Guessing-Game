// jquery - begin/test

// Initializes game by generating a random number (1-100 inclusive)


$('#halbox').fadeIn("slow", function(){
		$('#halbox').delay(2000).fadeOut("slow");
		});
$('#halbox').hide();
// Initializes game by generating a random number (1-100 inclusive)

var initialize = function() {
	var output = Math.floor( Math.random() * 100 + 1);
		return output;
}

var compNum = initialize()



$('.btn').click(function() {
  $( this ).animate({
    'font-size': 20
  }, 300, function() {
    $(this).animate({
    	'font-size': 18
    })
  });
}); 

var monkey = "this string"


// submit button (general gameplay) ---------

$('#submit').click(function(){
	var theGuess= $('input[name=guessbox]').val();
	if( theGuess > 100 || theGuess < 1 || isNaN(theGuess)) {

		$('#halspeech').html("I can't let you do that, Dave... You have to enter a number between 1 and 100.")
		$('#halbox').fadeIn("slow", function(){
			$('#halbox').delay(2000).fadeOut("slow");
		});
	}
	$('table').append(theGuess);
});

var oddOrEven = function(num) {
	if(num % 2 === 0) {
		return "even" ;
	}
	else if(num % 2 === 1) {
		return "odd" ;
	}
} 

// hint button ---- provides whether the answer is odd or even.


	$('#gethint').click(function(){
		$('#halspeech').html("You need assistance, Dave? The answer is " + oddOrEven(compNum)+".")
		$('#halbox').fadeIn("slow", function(){
			$('#halbox').delay(2000).fadeOut("slow");
		});
	});

		$('#showanswer').click(function(){
		$('#halspeech').html("Giving up, Dave? The answer was " + compNum +".")
		$('#halbox').fadeIn("slow", function(){
			$('#halbox').delay(2000).fadeOut("slow");
		});
	});


 	//	$('#test').html(guess);

 // });




// $('#test').html(guess);

// 	if (compNum === guess) {
// 		$(".jumbotron").hide()
//	}