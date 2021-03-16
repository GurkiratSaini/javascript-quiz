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
console.log(timer);
var pEl = document.querySelector("#text-content");
var buttonGroup = document.querySelector("#button-group");
var confirmBtn = document.querySelector("#confirmBtn");

confirmBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startTimer();
    headingEl.innerHTML = "Testing";
    pEl.innerHTML = "";
    confirmBtn.parentNode.removeChild(confirmBtn);
}

function startTimer() {
    timer = 60;
    var time = setInterval(function() {
        timerEl.textContent = timer;
        timer--;

        if(timer === 0) {
            clearInterval(time);
        }
    }, 1000);
}