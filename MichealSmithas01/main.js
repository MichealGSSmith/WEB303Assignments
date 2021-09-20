/*
	WEB 303
	Starting file for Assignment 1 
	{Your Name Here}
*/

$(document).ready(function() {

	function myMath() {
		let $salary = $('input#salary').val();
		let $percentage = $('input#percent').val();
		let $goodies = Number.parseInt($salary) * Number.parseInt($percentage) / 100;
		console.log($goodies);
		$('span#spend').text(`$${$goodies}`)

	}
	
	
	/*$('input#salary').keyup('keyup', function() {
		myMath();
		console.log("it worked");
	});*/

	
	$('input#percent').on('change', function() {
		myMath();
		console.log("it worked");
	});


	


});

