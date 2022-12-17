var timerEl = document.getElementById("timer-value") // timer element
var secondsLeft = 20; // timer starts at 15 seconds
var highScoresImage = document.getElementById("high-scores-image"); // high scores image
var landingPage = document.getElementById("landing-page"); // landing page
var quizSection = document.getElementById("quiz-section"); // quiz section
var li1 = document.getElementById("high-score-list").children[0];
var li2 = document.getElementById("high-score-list").children[1];
var li3 = document.getElementById("high-score-list").children[2];
var li4 = document.getElementById("high-score-list").children[3];
var highScore = document.getElementById("high-score-page"); // high score page
var clearScores = document.getElementById("clear-button"); // clear high score list
var endQuizPage = document.getElementById("end-quiz-page"); // end quiz page
var returnToBase = document.getElementById("return-button"); // go back to main page
var confirmAnswerEl = document.getElementById("confirm-answer"); // confirm answer element
var questionText = document.getElementById("question-text"); // question text element
var olQuizEl = document.getElementById("quiz-list"); // ordered list element
var choiceButtons = document.querySelectorAll(".q-button"); // choice buttons
var startButton = document.getElementById("start-button"); // start button
var submitButtonEl = document.getElementById("submit-button"); // submit button
var finalScoreEl = document.getElementById("final-score"); // final score element
var timerInterval
var currentScore = 0; // user score flux variable


function setTime() { //master quiz timer, color changes as time reduces lower than 10 and 5
        // secondsLeft = 50;
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
            gameOver() //function to end quiz
            clearInterval(timerInterval);
        }
    }

startButton.addEventListener('click', startGame) // start button event listener


function startGame() { // start game function
    console.log("startgame");
    currentQuestion = 0;
    timerInterval = setInterval(setTime, 1000) // start timer
    landingPage.setAttribute("style", "display: none;");
    quizSection.setAttribute("style", "display: flex;");
    highScore.setAttribute("style", "display: none;");
    endQuizPage.setAttribute("style", "display: none;");
}

highScoresImage.addEventListener('click', highScoresPage) // high scores image event listener

function highScoresPage() {
    gameOver() // function to end quiz
    landingPage.setAttribute("style", "display: none;")
    quizSection.setAttribute("style", "display: none;")
    endQuizPage.setAttribute("style", "display: none;");
    highScore.setAttribute("style", "display: flex;");
}

// Q&A's variables
// each object(q.c.a) has an array INDEX. 0 1 2 3 4

var questions = [ // array of objects with questions/choices/answer
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

var currentQuestionEl = questions[currentQuestion].title; // current question Element
var currentAnswer; // questions[currentQuestion].answer; // current answer

function displayQuestions() { // function to display questions
    console.log("display question and choices");
    currentAnswer = questions[currentQuestion].answer; // current answer
    questionText.textContent = questions[currentQuestion].title;

    for (var i = 0; i < choiceButtons.length; i++){ // loop to display choices
        console.log(currentAnswer) //checking current answer is the right string
        choiceButtons[i].textContent = questions[currentQuestion].choices[i];
    }
    if (currentQuestion == 5) { // if last question, end quiz
        gameOver() // function to end quiz
        clearInterval(timerInterval);
    }
}

displayQuestions() // display questions

function nextQuestion() { // function to move to next question
    currentQuestion++
    displayQuestions()
}

function checkAnswer(event) {    // function to check answer

    var userChoice = event.target;
    console.log("target click") // check button/selection clicked
    

    if (userChoice.textContent == currentAnswer) {
        console.log("correct")
        document.querySelector("#confirm-answer").textContent = "Correct! 😃"
        currentScore = currentScore + 2;
        secondsLeft = secondsLeft + 5;
    }
    else {
        console.log("wrong")
        document.querySelector("#confirm-answer").textContent = "Wrong! ☹️"
        currentScore = currentScore - 1;
        secondsLeft = secondsLeft - 5;
    }
    console.log(currentScore) // current user score

    nextQuestion()
}

for (var i = 0; i < choiceButtons.length; i++){
    choiceButtons[i].addEventListener('click', function (event) {
        checkAnswer(event)})
}

// QUIZ COMPLETE
// find score - setItem("score", "data")
// enter name: text box and sumbit button
// click button and then highscores page appears feat goback or clear high scores buttons

function gameOver() { // game over function - end game and move to endquiz page
        finalScoreEl.textContent = currentScore;
        timerEl.setAttribute("style", "color: blue");
        timerEl.textContent = "Game Over!";
        quizSection.setAttribute("style", "display: none;");
        highScore.setAttribute("style", "display: none;");
        endQuizPage.setAttribute("style", "display: flex;");
}

submitButtonEl.addEventListener('click', submitClick) // click submit to save score

var nameInput = document.getElementById("name")

var highscores =  	JSON.parse(window.localStorage.getItem('highscores')) || [];
var newScore = {  	score: currentScore,  	initials: nameInput,	};


function submitClick(){ // save user score and name
    console.log(secondsLeft)
    console.log("click submit")
    highscores.push(newScore);
    window.localStorage.setItem('highscores', JSON.stringify(newScore));
    landingPage.setAttribute("style", "display: none;");
    quizSection.setAttribute("style", "display: none;");
    endQuizPage.setAttribute("style", "display: none;");
    highScore.setAttribute("style", "display: flex;");


    // quizSection.setAttribute("style", "display: none;");
    // landingPage.setAttribute("style", "display: none;");
    // quizSection.setAttribute("style", "display: none;");
    // endQuizPage.setAttribute("style", "display: none;");
    // highScore.setAttribute("style", "display: flex;");

}

// HIGH SCORE KEEPER

// var highScoreArray = []; // array to store highscores



returnToBase.addEventListener("click", returnToMain);
clearScores.addEventListener("click", clearHighScores);


var highScoreListLi = document.createElement("li");

function returnToMain() { // return to main landing-page
    landingPage.setAttribute("style", "display: flex;");
    quizSection.setAttribute("style", "display: none;");
    highScore.setAttribute("style", "display: none;");
    endQuizPage.setAttribute("style", "display: none;");
}

// function highScoreKeeper() { // highscore keeper function (local storage)
//     console.log(highScoreData);
//     var highScoreListEl = document.getElementById("high-score-list");

//     for (i = 0; i < highScoreArray.length; i++){
//     highScoreListLi.textContent = highScoreData;
//     highScoreListEl.appendChild(highScoreListLi);
//     // addNameListEl()
//     }
// }

// !!! append highscore and name to the highscore list

// submitButtonEl.addEventListener("click", addNameListEl)

function addNameListEl () { // sumbit name and score
    console.log("submit button clicked");
//     let nameListEl = document.createElement("li");
//     nameListEl.textContent = nameInput.value;
//     highScoreListEl.appendChild(nameListEl);
    // highScoreArray.push(nameInput.value);
    // console.log(highScoreArray);
    // localStorage.setItem("score", highScoreArray);
}

// function restartGame() {
//     highScore.setAttribute("style", "display: none;")
//     landingPage.setAttribute("style", "display: flex;")
//     secondsLeft = 15;
// }

function clearHighScores() {
    localStorage.clear();

}
