// TIMER
// TIMER()
// function TIMER(){
// setInterval(1000);
// console.log("timer");
// };

var timerEl = document.getElementById("timer-value")
var secondsLeft = 15;

setTime()

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
       title: "The universal selector in CSS is what?",
       choices: ["$", "69", "UNI", "*"],
       answer: "*", },]

function cycleQuestions(){
    
}

// QUESTIONS       
// set the question text for each new question
// add text data to question ID per each question >> id="question-text" <<
// Questions exist in an array variable and are called upon for each question, 1 - 6
// run a for loop to cycle through the questions and the arrays of q's and a's.
// Then we create a for loop to loop through the questions where you target the properties like title, 
// choices, or answers to appear as you create the elements

document.getElementById("#quizlist")

    for(let i = 0; i < questions.length; i++) {
    const element = questions[i];
}

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
    timerEl.setAttribute("style", "color: blue");
    timerEl.textContent = "Game Over!";
}

// HIGH SCORE KEEPER
// high score record keeper
// gets data from quiz score, stored in localStorage, and displays highest value first. 
// var highScore = localStorage.getItem("score")


