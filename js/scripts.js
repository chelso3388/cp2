
$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 25) {
    $('#quiz').show();
  } else {
    $('#under-21').show();
  }
});


function check() {
	var q1 = document.quiz.q1.value;
	var q2 = document.quiz.q2.value;
	var q3 = document.quiz.q3.value;
	var q4 = document.quiz.q4.value;
	var q5 = document.quiz.q5.value;
	var correct = 0;
	if (q1 == "c3") {
		correct++;
	}
	if (q2 == "c3") {
		correct++;
	}
	if (q3 == "c4") {
		correct++;
	}
	if (q4 == "c1") {
		correct++;
	}
	if (q5 == "c2") {
		correct++;
	}
	var messages = ["You should learn JavaScript - It enables interactive web pages and thus is an essential part of web application", "You should learn Ruby - Ruby has built in support for Rational numbers and Complex numbers, which helps in solving complex mathematical problems.", "You should learn C# - C# is good for developing games"];
	var range;
	if (correct < 1) {
		range = 0;
	}
	if (correct > 0 && correct < 3) {
		range = 1;
	}
	if (correct > 2) {
		range = 2;
	}
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[range];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct";
}
