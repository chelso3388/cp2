function check (){
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
    if (q3 =="c4") {
      correct++;
    }
    if (q4 =="c1") {
      correct++;
    }
    if (q5 =="c2") {
      correct++;
    }
document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML = "You got" + correct + "correct";

}
