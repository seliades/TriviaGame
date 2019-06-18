var startScreen = document.getElementById("start-screen");
var quiz = document.getElementById("quiz");
var animalImg = document.getElementById("animal-img");
var question = document.getElementById("question");
var counter = document.getElementById("counter");
var optionA = document.getElementById("A");
var optionB = document.getElementById("B");
var optionC = document.getElementById("C");
var optionD = document.getElementById("D");
var endScreen = document.getElementById("end-screen");

var questions = [
    {
        question: "What do you call a group of gorillas?",
        imgSrc: "./assets/images/gorilla.jpg",
        optionA: "A band",
        optionB: "A bunch",
        optionC: "A kong",
        optionD: "A gaggle",
        correct: "A",
    },
    {
        question: "What do you call a group of stingrays?",
        imgSrc: "./assets/images/stingray.jpg",
        optionA: "A glide",
        optionB: "A school",
        optionC: "A fever",
        optionD: "A flight",
        correct: "C",
    },
    {
        question: "What do you call a group of cobras?",
        imgSrc: "./assets/images/cobra.png",
        optionA: "A basket",
        optionB: "A quiver",
        optionC: "A nightmare",
        optionD: "A slither",
        correct: "B",
    },
    {
        question: "What do you call a group of toads?",
        imgSrc: "./assets/images/toad.jpg",
        optionA: "A plague",
        optionB: "A knot",
        optionC: "A council",
        optionD: "A croak",
        correct: "B",
    },
    {
        question: "What do you call a group of bears?",
        imgSrc: "./assets/images/bear.jpg",
        optionA: "A bevy",
        optionB: "A baloo",
        optionC: "A troop",
        optionD: "A sleuth",
        correct: "D",
    },
    {
        question: "What do you call a group of ferrets?",
        imgSrc: "./assets/images/ferrets.png",
        optionA: "A tangle",
        optionB: "A colony",
        optionC: "A business",
        optionD: "A flock",
        correct: "C",
    },
    {
        question: "What do you call a group of skunks?",
        imgSrc: "./assets/images/skunk.jpg",
        optionA: "A stench",
        optionB: "A rankness",
        optionC: "A squad",
        optionD: "An odor ",
        correct: "A",
    },
    {
        question: "What do you call a group of parrots?",
        imgSrc: "./assets/images/parrot.jpg",
        optionA: "A cacophony",
        optionB: "A pulchritude",
        optionC: "A discord",
        optionD: "A pandemonium",
        correct: "D",
    },
    {
        question: "What do you call a group of lemurs?",
        imgSrc: "./assets/images/lemur.png",
        optionA: "A league",
        optionB: "A conspiracy",
        optionC: "A shadow",
        optionD: "A leap",
        correct: "B",
    },
    {
        question: "What do you call a group of porcupines?",
        imgSrc: "./assets/images/porcupine.png",
        optionA: "A prickle",
        optionB: "A poke",
        optionC: "A cuddle",
        optionD: "A puddle",
        correct: "A",
    }
];

var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var score = 0;
var count = 10;
var timer;

function renderQuestion() {
    var q = questions[runningQuestion];
    animalImg.innerHTML = "<img src=" + q.imgSrc + ">";
    question.innerHTML = "<p>" + q.question + "</p>";
    optionA.innerHTML = q.optionA;
    optionB.innerHTML = q.optionB;
    optionC.innerHTML = q.optionC;
    optionD.innerHTML = q.optionD;
};

startScreen.addEventListener("click", startQuiz);

function startQuiz() {
    startScreen.style.display = "none";
    quiz.style.display = "block";
    renderQuestion();
    renderCounter();
    timer = setInterval(renderCounter, 8000);
};


function renderCounter() {
    if (count < 0) {
        counter.innerHTML = "<p>" + count + "</p>";
        count--;
    } else {
        count = 0;
        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            clearInterval(timer);
            renderScore();
        }
    }
};


function answerIsRight() { };

function answerIsWrong() { };

function renderScore() {
    endScreen.style.display = "block";
    var scorePercent = Math.round(100 * score / questions.length);
    endScreen.innerHTML = "<p> You got " + scorePercent + " % correct! </p>";
};

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        score++;
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
    count = 10;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        clearInterval(timer);
        renderScore();
    }
};


