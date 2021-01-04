var askQuestionButton = document.querySelector(".ask-question-button")
var answerToQuestion = document.querySelector(".answer-to-question")
var eightBall = document.querySelector(".eight-ball")
var answers = ['It is certain.',
'It is decidedly so.',
'Without a doubt.',
'Yes - definitely.',
'You may rely on it.',
'As I see it, yes.']
function getRandomAnswer(){
  return Math.floor(Math.random() * answers.length);
}
function showAnswer(){
  var answerString = ''
  answerString = answers[getRandomAnswer()];
  answerToQuestion.innerHTML = answerString;
  eightBall.style.display = "none";
}
askQuestionButton.addEventListener("click", showAnswer)
