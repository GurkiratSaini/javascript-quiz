var questions = [
    {q:"Inside which element do you put the JavaScript?", 
     a: ["<scripting>", "<script>", "<js>", "<javascript>"],
     correctAns: "<script>"},
     {q:"How do you write 'Hello World' in an alert box?", 
     a: ["msgBox('Hello World'):", "alertBox('Hello World'):", "msg('Hello World'):", "alert('Hello World');"],
     correctAns: "alert('Hello World');"},
     {q:"How to write an IF statement in JavaScript?", 
     a: ["if i = 5", "if(i==5)", "if i==5 then", "if i==5 then"],
     correctAns: "if(i==5)"},
     {q:"How to write an IF statement for checking a falsy value?", 
     a: ["if i=!5 then", "if (i <> 5)", "if (i !=5 )", "if i <> 5"],
     correctAns: "if (i !=5 )"},
     {q:"How does a for loop start?", 
     a: ["for (i = 0; i <=5; i++)", "for (i = 0; i <=5)", "for i = 1 to 5", "for (i <= 5; i++)"],
     correctAns: "for (i = 0; i <=5; i++)"}
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
var nameDisplay = document.querySelector(".nameDisplay");
var nameSubmitBtn = document.querySelector("#nameSubmitBtn");
var highscoresLink = document.querySelector("#highscoresLink");
var highscoresTable = document.querySelector("#highscoresTable");
var highscoresDiv = document.querySelector(".table");
var questionIndex = 0;
var finalScore = 0;
var playerInitials = "";

console.log(highscoresTable + " HST");

var scores = [];

if (localStorage.getItem("scores")){
    scores = JSON.parse(localStorage.getItem("scores"));
    console.log(scores);
}


function startQuiz() {
    startTimer();
    textContent.classList.add("hide");
    startQuizBtn.classList.add("hide");
    headingEl.classList.add("question-style");
    buttonGroup.classList.remove("hide");
    setQuestion(questionIndex);
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
            nameDisplay.classList.remove("hide");
            nameSubmitBtn.classList.remove("hide");
            finalScore = timer;
            finalScoreText.textContent = `Your Score: ${finalScore}`;
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
    playerInitials = textField.value.toUpperCase();
    console.log(playerInitials);
    scores.push({initials: playerInitials,score: finalScore});
    console.log(scores);
    localStorage.setItem("scores", JSON.stringify(scores));
    displayHighScores(playerInitials);
    // displayHighScores();
}

function displayHighScores(playerInitials){
//    function displayHighScores(){
    nameSubmitBtn.classList.add("hide");
    finalScoreText.classList.add("hide");
    nameDisplay.classList.add("hide");
    textField.classList.add("hide");
    textContent.classList.add("hide");
    startQuizBtn.classList.add("hide");
    headingEl.textContent = "High Scores";
    highscoresDiv.classList.remove("hide");
    // highScoreTableGenerate();
    highScoreTableGenerate(playerInitials);
}

function highScoreTableGenerate(playerInitials) {
//    function highScoreTableGenerate() {
    var trEl = document.createElement("tr");
    var tdNameEl = document.createElement("td");
    var tdScoreEl = document.createElement("td");
    tdNameEl.textContent = playerInitials + "";
    tdScoreEl.textContent = finalScore + "";
    trEl.appendChild(tdNameEl);
    trEl.appendChild(tdScoreEl + "");
    highscoresTable.appendChild(trEl);
}

// function highScoreTableGenerate(){
//     for(let i=0; i<scores.length; i++){
//         // var trEl = document.createElement("tr");
//         // var tdNameEl = document.createElement("td");
//         // var tdScoreEl = document.createElement("td");
//         // tdNameEl.innerHTML = scores[i].initials;
//         // console.log(tdNameEl);
//         // tdScoreEl.innerHTML = scores[i].score;
//         // console.log(tdScoreEl);
//         // trEl.appendChild(tdNameEl);
//         // trEl.appendChild(tdScoreEl);
//         // highscoresTable.appendChild(trEl);
//         // console.log(highscoresTable);

//         var y = i++;
//         var table = 
//         row = highscoresTable.insertRow(y);
//         var cell1 = row.insertCell(i);
//         var cell2 = row.insertCell(y);

//         cell1.innerHTML = scores[i].initials;
//         cell2.innerHTML = scores[i].score;

//         console.log(`HST is ${highscoresTable}`);
//     }
// }


// starts quiz when the 'Start Quiz' Button is clicked
startQuizBtn.addEventListener("click", startQuiz);

answerGroup.forEach(element => {
    element.addEventListener("click", checkAnswer);
});

nameSubmitBtn.addEventListener("click", saveScore);
// highscoresLink.addEventListener("click", displayHighScores);