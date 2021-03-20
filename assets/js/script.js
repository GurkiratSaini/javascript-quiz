var questions = [
    {q:"Question 1", 
     a: ["ans1", "ans2", "ans3", "ans4"],
     correctAns: "ans2"},
     {q:"Question 2", 
     a: ["ans1", "ans2", "ans3", "ans4"],
     correctAns: "ans3"},
     {q:"Question 3", 
     a: ["ans1", "ans2", "ans3", "ans4"],
     correctAns: "ans1"},
     {q:"Question 4", 
     a: ["ans1", "ans2", "ans3", "ans4"],
     correctAns: "ans4"},
     {q:"Question 5", 
     a: ["ans1", "ans2", "ans3", "ans4"],
     correctAns: "ans1"}
];
var timer = 70;
var headingEl = document.querySelector("#heading-h1");
var timerEl = document.querySelector("#timer");
var textContent = document.querySelector("#text-content");
var finalScoreText = document.querySelector("#finalScore");
var buttonGroup = document.querySelector("#btn-group");
var startQuizBtn = document.querySelector("#startQuiz");
var flashContent = document.querySelector(".text-flash-container");
var answerGroup = document.querySelectorAll("button.ansBtn");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var textField = document.querySelector("#nameField");
var questionIndex = 0;

var scores = {};

function startQuiz() {
    startTimer();
    textContent.classList.add("hide");
    startQuizBtn.classList.add("hide");

    headingEl.classList.add("question-style");
    buttonGroup.classList.remove("hide");
    
    setQuestion(questionIndex);
    console.log(`Question Index is ${questionIndex}`);
}

// timer logic
function startTimer() {
    var time = setInterval(function() {
        timer--;
        timerEl.textContent = timer;
        console.log(timer);

        if(timer <= 0 || questionIndex === questions.length) {
            clearInterval(time);
            headingEl.textContent = "Game Over";
            buttonGroup.classList.add("hide");
            flashContent.classList.add("hide");
            finalScoreText.classList.remove("hide");
            textField.classList.remove("hide");
            finalScoreText.textContent = `Your Score: ${timer}`;
        }
    }, 1000);
}

function setQuestion(index) {
    if (index < questions.length) {
        headingEl.textContent = questions[index].q;
        answer1.textContent = questions[index].a[0];
        answer2.textContent = questions[index].a[1];
        answer3.textContent = questions[index].a[2];
        answer4.textContent = questions[index].a[3];
    }
}

function checkAnswer(event){
    
    flashContent.classList.remove("hide");
    var pEl = document.createElement("p");
    flashContent.appendChild(pEl);
    setTimeout(function() {
        pEl.classList.add("hide");
    }, 1000);

    if(questions[questionIndex].correctAns === event.target.textContent) {
        pEl.textContent = "Correct!";
    }
    else {
        timer = timer - 10;
        pEl.textContent = "Wrong!";
    }

    if(questionIndex < questions.length) {
        questionIndex++;
    }
    setQuestion(questionIndex);
}

function saveScore() {
    localStorage.setItem("score", JSON.stringify());
}


// starts quiz when the 'Start Quiz' Button is clicked
startQuizBtn.addEventListener("click", startQuiz);

answerGroup.forEach(element => {
    element.addEventListener("click", checkAnswer);
});