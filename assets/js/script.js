const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let questions = [
    {
        question: "The first question",
        choice1 : "as",
        choice2 : "cf",
        choice3 : "gh",
        choice4 : "ki",
        answer: 1
    },
    {
        question: "The second question",
        choice1 : "sa",
        choice2 : "fc",
        choice3 : "hg",
        choice4 : "ir",
        answer: 2
    },
    {
        question: "The third question",
        choice1 : "aws",
        choice2 : "cyf",
        choice3 : "gjh",
        choice4 : "kli",
        answer: 3
    },
    {
        question: "The forth question",
        choice1 : "a1s",
        choice2 : "c3f",
        choice3 : "g7h",
        choice4 : "k4i",
        answer: 4
    },
    {
        question: "The fifth question",
        choice1 : "a#s",
        choice2 : "c4f",
        choice3 : "%gh",
        choice4 : "k^i",
        answer: 1
    },


]


//CONSTANTS
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 5;

startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log("availableQuestions");
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length=== 0 || questionCounter > MAX_QUESTIONS) {
        return window.location.assign("./hghscr.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    console.log(availableQuestions);
    acceptingAnswers = true;
};

choices.forEach(choice=> {
    choice.addEventListener("click",e =>{
        if (!acceptingAnswers) return;

        //console.log(e.target);


        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"; 
        
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
        });
        //console.log(selectedAnswer===currentQuestion.answer);
    });


startQuiz();