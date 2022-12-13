var timerEl = document.getElementById("timer-value") // timer element
var secondsLeft = 15; // timer starts at 15 seconds
var highScoresImage = document.getElementById("high-scores-image"); // high scores image
var questionText = document.getElementById("question-text"); // question text element
var olEl = document.getElementById("quiz-list"); // ordered list element
var choiceButton1 = document.getElementById("choice1"); // choice button 1
var choiceButton2 = document.getElementById("choice2"); // choice button 2
var choiceButton3 = document.getElementById("choice3"); // choice button 3
var choiceButton4 = document.getElementById("choice4"); // choice button 4
var startButton = document.getElementById("start-button"); // start button
var landingPage = document.getElementById("landing-page"); // landing page
var quizSection = document.getElementById("quiz-section"); // quiz section
var li1 = document.getElementById("high-score-list").children[0]; 
var li2 = document.getElementById("high-score-list").children[1];
var li3 = document.getElementById("high-score-list").children[2];
var li4 = document.getElementById("high-score-list").children[3];
var highScoreData = localStorage.getItem("score") //score is remaining time.
var highScore = document.getElementById("high-score-page"); // high score page
var clearScores = document.getElementById("clear-button"); // clear high score list
var returnToBase = document.getElementById("return-button"); // go back to main page
var confirmAnswerEl = document.getElementById("confirm-answer"); // confirm answer element

function setTime() { //master quiz timer, color changes as time reduces lower than 10 and 5
    var timerInterval = setInterval(function() {
        secondsLeft --;
        timerEl.textContent = secondsLeft;
        if(secondsLeft > 11) {
            timerEl.setAttribute("style", "color: green");
        }
        if(secondsLeft < 11 && secondsLeft > 6) {
            timerEl.setAttribute("style", "color: orange");
        }
        if(secondsLeft < 6) {
            timerEl.setAttribute("style", "color: red");
        }
        if(secondsLeft <= 0) {
            clearInterval(timerInterval);
            gameOver() //function to end quiz
        }
    }, 1000);}

startButton.addEventListener('click', startGame) // start button event listener


function startGame(){ // start game function
    setTime()
    console.log("startgame");
    landingPage.setAttribute("style", "display: none;")
    quizSection.setAttribute("style", "display: flex;")
}

highScoresImage.addEventListener('click', highScoresPage) // high scores image event listener

function highScoresPage(){
    gameOver()
    landingPage.setAttribute("style", "display: none;")
    quizSection.setAttribute("style", "display: none;")
    highScore.setAttribute("style", "display: flex;")
}

// Q&A's variables
// each object(q.c.a) has an array INDEX. 0 1 2 3 4
var questions = [
     {
       title: 'What case format does JavaScript use?',
       choices: ["Giraffe", "Suit", "Camel", "Eagle"],
       answer: 2,
     },
     {
       title: "What name is commonly used as the first program written in a lanugage?",
       choices: ["Hello There", "OK Computer", "Hello World", "Initialize"],
       answer: 2,
     },
     {
       title: "A loop is defined by ____ ",
       choices: ["If", "For", "Else", "Loop"],
       answer: 1,
     },
     {
       title: "We stage using the GIT____ command",
       choices: ["Add", "Push", "Commit", "Init"],
       answer: 0,
     },
     {
       title: "JavaScript is what type of language?",
       choices: ["Descriptive", "Imperative", "Objective", "Serif"],
       answer: 1,
     },
     {
       title: "What is the correct syntax for declaring a variable in JavaScript?",
       choices: ["var myVariable;", "variable myVariable;", "let myVariable;", "const myVariable;"],
       answer: 0, },]


let currentQuestion = 0; // current question index

function displayQuestions(){ // function to display questions
    console.log("display question and choices");
    questionText.textContent = questions[currentQuestion].title;
    choiceButton1.textContent = questions[currentQuestion].choices[0];
    choiceButton2.textContent = questions[currentQuestion].choices[1];
    choiceButton3.textContent = questions[currentQuestion].choices[2];
    choiceButton4.textContent = questions[currentQuestion].choices[3];
}

displayQuestions()

function nextQuestion(){ // function to move to next question
    currentQuestion++
    displayQuestions()
}

userClicks()

function userClicks(event){ 
    choiceButton1.addEventListener('click', function(event) { checkAnswer() })
    choiceButton2.addEventListener('click', function(event) { checkAnswer() })
    choiceButton3.addEventListener('click', function(event) { checkAnswer() })
    choiceButton4.addEventListener('click', function(event) { checkAnswer() })
}

var answerEl = questions[currentQuestion].answer;
var choiceClicks = document.getElementById("quiz-list").children;

function checkAnswer(event){ // function to check answer

    console.log("check answer");
    event.choiceClicks
    if (choiceClicks === answerEl) {
        console.log("correct")
        secondsLeft = secondsLeft + 5;
        confirmAnswerEl.textContent = "Correct!"
        nextQuestion()
    } else {
        console.log("wrong")
        secondsLeft = secondsLeft - 5;
        confirmAnswerEl.textContent = "Wrong!"
        nextQuestion()
    }
}

// QUIZ COMPLETE
// find score - setItem("score", "data")
// enter name: text box and button
// click button and then highscores page appears feat goback or clear high scores buttons

var score = [];

function gameOver(){
    localStorage.setItem("score", score)
    timerEl.setAttribute("style", "color: blue");
    timerEl.textContent = "Game Over!";
    quizSection.setAttribute("style", "display: none;")
    highScore.setAttribute("style", "display: flex;")
}

// HIGH SCORE KEEPER
// high score record keeper
// gets data from quiz score, stored in localStorage, and displays highest value first. 

function highScoreKeeper() {
    var highScoreData = localStorage.getItem("score")
    console.log(highScoreData);
    var highScoreList = document.getElementById("high-score-list");
    var highScoreListEl = document.createElement("li");
    highScoreListEl.textContent = highScoreData;
    highScoreList.appendChild(highScoreListEl);
}

returnToBase.addEventListener("click", restartGame)
clearScores.addEventListener("click", clearHighScores)

function restartGame() {
    highScore.setAttribute("style", "display: none;")
    landingPage.setAttribute("style", "display: flex;")
    secondsLeft = 15;
}

function clearHighScores() {
    localStorage.clear();
}


