
var random_result;
var lost = 0;
var win = 0;
var previous = 0;

// Setters
// Getters

// $(".crystal").attr('class');

var resetAndStart = function () {

	$(".crystals").empty();

	var images = [
			'http://cdn.playbuzz.com/cdn/7a5d7935-6177-4be8-8b72-2a95ad2bcdfe/3b295cc9-7b5e-412f-8b1f-8547edd8e66b.jpg', 
			'http://www.giftsforprofessionals.com/images/148p42d18824055/Optical_Crystal_Diamond_Award___4_.jpg', 
			'https://openclipart.org/download/239078/Crystals-seamless-tile-2016012938.svg', 
			'http://www.giftsforprofessionals.com/images/3d7p8a614b49210/Blue_Diamond_Paperweight.jpg'

			];
		
	
// A new random number should generate every single time we play the four crystals game.

	random_result = Math.floor(Math.random() * 100 ) + 19; 


	$("#result").html('Random Result: ' + random_result);

	for(var i = 0; i < 4; i++){

	// Every click on any crystal should  generate a random number between 19 - 120.

		var random = Math.floor(Math.random() * 11) + 1;

		var crystal = $("<div>");
			crystal.attr({
				"class": 'crystal',
				"data-random": random
			});
			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"background-size":"cover"

			});


		$(".crystals").append(crystal);

	}

	$("#previous").html("Your total score is: " + previous);

}


resetAndStart();


// Event Delegation
$(document).on('click', ".crystal", function () {

	var num = parseInt($(this).attr('data-random'));

	previous += num;


	$("#previous").html("Your total score is: " + previous);

	console.log(previous);

// We play the game until it is equal to greater than the random result. If it is greater than the random result, we increase a lost counter.


	if(previous > random_result){

		lost++;

		$("#lost").html("You lost: " + lost);

		previous = 0;

		resetAndStart();

	} 


// If it is equal, then we increment a win counter.


	else if(previous === random_result){

		win++;

		$("#win").html("You win: " + win);

		previous = 0;

		resetAndStart();

	}

});



