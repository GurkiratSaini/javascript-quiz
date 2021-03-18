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
var timer = 0;
var headingEl = document.querySelector("#heading-h1");
console.log(headingEl.textContent);
var timerEl = document.querySelector("#timer");
var pEl = document.querySelector("#text-content");
var buttonGroup = document.querySelector("#button-group");
var confirmBtn = document.querySelector("#confirmBtn");
var flashContent = document.querySelector("#text-flash-container");



function startQuiz() {
    timer = 11;
    startTimer();
    pEl.classList.add("hide");
    confirmBtn.classList.add("hide");

    var questionIndex = 0;
    headingEl.classList.add("question-style");
    headingEl.textContent = questions[questionIndex].q;

    // for (let i=0; i<questions.length; i++) {
    //     headingEl.textContent = questions[i].q;
    //     console.log(headingEl.textContent);
    // }

}

// timer logic
function startTimer() {
    var time = setInterval(function() {
        timer--;
        timerEl.textContent = timer;
        console.log(timer);

        if(timer <= 0) {
            clearInterval(time);
        }
    }, 1000);
}

// starts quiz when the 'Start Quiz' Button is clicked
confirmBtn.addEventListener("click", startQuiz);