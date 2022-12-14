var timerEl = document.getElementById("timer-value") // timer element
var secondsLeft = 60; // timer starts at 15 seconds
var highScoresImage = document.getElementById("high-scores-image"); // high scores image
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
var questionText = document.getElementById("question-text"); // question text element
var olQuizEl = document.getElementById("quiz-list"); // ordered list element
var choiceButtons = document.querySelectorAll(".q-button"); // choice buttons
var startButton = document.getElementById("start-button"); // start button



function setTime() { //master quiz timer, color changes as time reduces lower than 10 and 5
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft;
        if (secondsLeft > 11) {
            timerEl.setAttribute("style", "color: green");
        }
        if (secondsLeft < 11 && secondsLeft > 6) {
            timerEl.setAttribute("style", "color: orange");
        }
        if (secondsLeft < 6) {
            timerEl.setAttribute("style", "color: red");
        }
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            gameOver() //function to end quiz
        }
    }, 1000);
}

startButton.addEventListener('click', startGame) // start button event listener


function startGame() { // start game function
    let highScoreData = localStorage.getItem("score")
    currentQuestion = 0;
    setTime()
    console.log("startgame");
    landingPage.setAttribute("style", "display: none;")
    quizSection.setAttribute("style", "display: flex;")
}

highScoresImage.addEventListener('click', highScoresPage) // high scores image event listener

function highScoresPage() {
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
        answer: "Camel",
    },
    {
        title: "What name is commonly used as the first program written in a lanugage?",
        choices: ["Hello There", "OK Computer", "Hello World", "Initialize"],
        answer: "Hello World",
    },
    {
        title: "A loop is defined by ____ ",
        choices: ["If", "For", "Else", "Loop"],
        answer: "For",
    },
    {
        title: "We stage using the GIT____ command",
        choices: ["Add", "Push", "Commit", "Init"],
        answer: "Add",
    },
    {
        title: "JavaScript is what type of language?",
        choices: ["Descriptive", "Imperative", "Objective", "Serif"],
        answer: "Imperative",
    },
    {
        title: "What is the correct syntax for declaring a variable in JavaScript?",
        choices: ["var myVariable;", "variable myVariable;", "let myVariable;", "const myVariable;"],
        answer: "var myVariable;",
    },]


let currentQuestion = 0; // current question index

var currentQuestionEl = questions[currentQuestion].title;
var currentAnswer = questions[currentQuestion].answer;


function displayQuestions() { // function to display questions
    console.log("display question and choices");
    questionText.textContent = questions[currentQuestion].title;

    for (var i = 0; i < choiceButtons.length; i++){
        console.log(currentAnswer)
        choiceButtons[i].textContent = questions[currentQuestion].choices[i];
    }
    if (currentQuestion == 5) {
        gameOver()
    }
}

displayQuestions() // display questions

function nextQuestion() { // function to move to next question
    currentQuestion++
    displayQuestions()
}

function checkAnswer(event) {    // function to check answer

    var userChoice = event.target;
    // console.log("target click")
    // console.log(userChoice)

    if (userChoice.textContent == currentAnswer) {
        console.log("correct")
        document.querySelector("#confirm-answer").textContent = "Correct!"
        secondsLeft = secondsLeft + 5;
    }
    else {
        console.log("wrong")
        document.querySelector("#confirm-answer").textContent = "Wrong!"
        secondsLeft = secondsLeft - 5;
    }
    nextQuestion()
}

for (var i = 0; i < choiceButtons.length; i++){
    choiceButtons[i].addEventListener('click', function (event) {
        checkAnswer(event)})
}


// QUIZ COMPLETE
// find score - setItem("score", "data")
// enter name: text box and button
// click button and then highscores page appears feat goback or clear high scores buttons

var score = timerEl;

function gameOver() {
    // localStorage.setItem("score", score)
    timerEl.setAttribute("style", "color: blue");
    timerEl.textContent = "Game Over!";
    quizSection.setAttribute("style", "display: none;");
    highScore.setAttribute("style", "display: flex;");
}

// HIGH SCORE KEEPER
// high score record keeper
// gets data from quiz score, stored in localStorage, and displays highest value first. 

let highScoreArray = [];

function highScoreKeeper() {
    console.log(highScoreData);
    var highScoreList = document.getElementById("high-score-list");

    for (i = 0; i < highScoreArray.length; i++){
    var highScoreListEl = document.createElement("li");
    highScoreListEl.textContent = highScoreData;
    highScoreList.appendChild(highScoreListEl);
    }
}

// highScoreData is stored locally.

returnToBase.addEventListener("click", restartGame);
clearScores.addEventListener("click", clearHighScores);

function restartGame() {
    highScore.setAttribute("style", "display: none;")
    landingPage.setAttribute("style", "display: flex;")
    secondsLeft = 15;
}

function clearHighScores() {
    localStorage.clear();
}


