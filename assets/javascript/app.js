var startScreen = document.getElementById("start-screen");
var quiz = document.getElementById("quiz");
var animalImg = document.getElementById("animal-img");
var question = document.getElementById("question");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("time-guage");
var optionA = document.getElementById("A");
var optionB = document.getElementById("B");
var optionC = document.getElementById("C");
var optionD = document.getElementById("D");
var endScreen = document.getElementById("end-screen");

var questions = [
    {
        question: "What do you call a group of gorillas?",
        imgSrc: "",
        optionA: "A band",
        optionB: "A bunch",
        optionC: "A kong",
        optionD: "A gaggle",
        correct: "A",
    },
    {
        question: "What do you call a group of stingrays?",
        imgSrc: "",
        optionA: "A glide",
        optionB: "A school",
        optionC: "A fever",
        optionD: "A flight",
        correct: "C",
    },
    {
        question: "What do you call a group of cobras?",
        imgSrc: "",
        optionA: "A basket",
        optionB: "A quiver",
        optionC: "A nightmare",
        optionD: "A slither",
        correct: "B",
    },
    {
        question: "What do you call a group of toads?",
        imgSrc: "",
        optionA: "A plague",
        optionB: "A knot",
        optionC: "A council",
        optionD: "A croak",
        correct: "B",
    },
    {
        question: "What do you call a group of bears?",
        imgSrc: "",
        optionA: "A bevy",
        optionB: "A baloo",
        optionC: "A troop",
        optionD: "A sleuth",
        correct: "D",
    },
    {
        question: "What do you call a group of ferrets?",
        imgSrc: "",
        optionA: "A tangle",
        optionB: "A colony",
        optionC: "A business",
        optionD: "A flock",
        correct: "C",
    },
    {
        question: "What do you call a group of skunks?",
        imgSrc: "",
        optionA: "A stench",
        optionB: "A rankness",
        optionC: "A squad",
        optionD: "An odor ",
        correct: "A",
    },
    {
        question: "What do you call a group of parrots?",
        imgSrc: "",
        optionA: "A cacophony",
        optionB: "A pulchritude",
        optionC: "A discord",
        optionD: "A pandemonium",
        correct: "D",
    },
    {
        question: "What do you call a group of lemurs?",
        imgSrc: "",
        optionA: "A league",
        optionB: "A conspiracy",
        optionC: "A shadow",
        optionD: "A leap",
        correct: "B",
    },
    {
        question: "What do you call a group of porcupines?",
        imgSrc: "",
        optionA: "A prickle",
        optionB: "A poke",
        optionC: "A cuddle",
        optionD: "A puddle",
        correct: "A",
    }    
];

var lastQuestionIndex = questions.length - 1;
var runningQuestionIndex = 0;

function renderQuestion(){
    var q = questions[runningQuestionIndex];
    animalImg.innerHTML = "<img src=" + q.imgSrc + ">";
    question.innerHTML = "<p>" + q.question + "</p>";
    optionA.innerHTML = q.optionA;
    optionB.innerHTML = q.optionB;
    optionC.innerHTML = q.optionC;
    optionD.innerHTML = q.optionD;
};

function answerIsRight(){};

function answerIsWrong(){};

function renderScore(){};

var questionTime = 10;
var gaugeWidth = 150;
var count = 10;
var gaugeProgressUnit = gaugeWidth/questionTime;

function renderCounter(){
    if(count < 0){
        counter.innerHTML = count;
        timeGauge.style.width = gaugeProgressUnit * count + "px";
        count--;
    }else {
        count = 0;
        answerIsWrong();
        if (runningQuestionIndex < lastQuestionIndex) {
            runningQuestionIndex++;
            renderQuestion();
        }else {
            clearInterval(timer);
            renderScore();
        }
    }
};

var timer = setInterval(renderCounter, 1000);

function checkAnswer(answer){
    if(questions[runningQuestionIndex].correct == answer){
        score++;
        answerIsCorrect();
    }else {
        answerIsWrong();
    }
    if (runningQuestionIndex < lastQuestionIndex) {
        count = 10;
        runningQuestionIndex++;
        renderQuestion();
    }else {
        clearInterval(timer);
        renderScore();
    }
};


