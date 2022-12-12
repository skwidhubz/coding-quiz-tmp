var timerEl = document.getElementById("timer-value") // timer element
var secondsLeft = 15; // timer starts at 15 seconds
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
        if(secondsLeft === 0) {
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
       answer: "var myVariable;", },]


cycleQuestions(questions);
cycleChoices(choices[i]);


function cycleQuestions(){ // function to cycle through questions
    for (let i = 0; i < questions.length; i++){
        console.log("cycleQuestions for loop is running");

        // set the question text for each new question
        questionText.textContent = questions[i].title;
        console.log(questions[i].title);


    }
}

function cycleChoices(){ // function to cycle through questions
    for (let i = 0; i < questions.length; i++){
        console.log("cycleQuestions for loop is running");

        // set the question text for each new question
        questionText.textContent = questions[i].choices[i];
        console.log(questions[i].choices[i]);
        choiceButton1.textContent = questions[i].choices[0];
        choiceButton2.textContent = questions[i].choices[1];
        choiceButton3.textContent = questions[i].choices[2];
        choiceButton4.textContent = questions[i].choices[3];

    }
}





// QUESTIONS       
// set the question text for each new question
// add text data to question ID per each question >> id="question-text" <<
// Questions exist in an array variable and are called upon for each question, 1 - 6
// run a for loop to cycle through the questions and the arrays of q's and a's.
// Then we create a for loop to loop through the questions where you target the properties like title, 
// choices, or answers to appear as you create the elements

document.getElementById("#quizlist")

//     for(let i = 0; i < questions.length; i++) {
//     const element = questions[i];
//     console.log(element);
// }

//     for(let i = 0; i < questions.choices[i].length; i++) {
//     console.log(questions.choices[i]);
// }

// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
// var li = document.querySelectorAll("li");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// ANSWER SELECTIONS
// question must have a correct answer
// when clicking on the button, checks the answer is right or wrong (truefalse) in relation to the question
// each quiz question needs to have: question, answers X 4. each answer needs to be a true or false value. 
// if true then add a score to localStorage...
// key = score
// data = 1 
// var userScore = localStorage.setItem("score")
//table creator 

var score = 0;

// QUIZ COMPLETE
// find score - setItem("score", "data")
// enter name: text box and button
// click button and then highscores page appears feat goback or clear high scores buttons



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


