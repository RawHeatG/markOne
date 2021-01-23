var readLineSync = require('readline-sync');

var score = 0;
var userName = readLineSync.question("Welcome to \"Do You Know Rohit!\"\nWhat are you called human? ");

console.log("Yooo, " + userName + " let's see how well you me! 😛");
console.log("---------------------");

function askQuestion(question, answer){

  var reply = readLineSync.question(question).toLowerCase();
  
  if( reply === answer ){
      score = score + 1;
      console.log("Yayyy!!!, "+ reply + " it is!");
  }
  else{
      console.log("Aghhhh, it's " + answer + " not " + reply + " :(");
  }
  console.log("---------------------");
}

var questions = [
    {question: "What's my favourite food? ",
     answer: "parantha"},
    {question: "Am I a \"Beach\" person or a \"Mountain\" person? ",
     answer: "mountain"},
    {question: "What do I like to call myself other than Rohit??? ",
     answer:"rawheat"}
]

for(var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    askQuestion(currentQuestion.question, currentQuestion.answer);
}

console.log("Well Done!" + userName + " ,your Total Score: \"" + score + "\"");

console.log("High Score:\n 1. Honey Sing, Score \"3\"\n 2. Badshah, Score \"2\"");
