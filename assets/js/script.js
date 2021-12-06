const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let questions = [
    {
        question: "JavaScript: What keyword declares a variable that cannot have its value changed?",
        choice1 : "const",
        choice2 : "var",
        choice3 : "return",
        choice4 : "cost",
        answer: 1
    },
    {
        question: "What is the name of the built-in object that contains numerous functions useful for performing mathematical operations?",
        choice1 : "calculations",
        choice2 : "Arithmetic",
        choice3 : "Math",
        choice4 : "plus",
        answer: 3
    },
    {
        question: "What method of strings deletes all whitespace at the beginning and end of the string?",
        choice1 : "delete()",
        choice2 : "remove()",
        choice3 : "backspace()",
        choice4 : "trim()",
        answer: 4
    },
    {
        question: "How are template literals formatted?",
        choice1 : "# #",
        choice2 : "* *",
        choice3 : "/ /",
        choice4 : "` `",
        answer: 4
    },
    {
        question: "How are multi-line comments fomatted?",
        choice1 : "{}",
        choice2 : "||",
        choice3 : "//",
        choice4 : "/**/",
        answer: 4
    },
    {
        question: "Which of the following is fundamental data type?",
        choice1 : "Bean",
        choice2 : "Defined",
        choice3 : "Ring",
        choice4 : "Number",
        answer: 4
    },
    {
        question: "Which of the following is fundamental data type??",
        choice1 : "Null",
        choice2 : "Integer",
        choice3 : "Console",
        choice4 : "Log",
        answer: 1
    },
    {
        question: "Which of the following is fundamental data type??",
        choice1 : "Splice",
        choice2 : "Return",
        choice3 : "Symbol",
        choice4 : "JSON",
        answer: 3
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
        localStorage.setItem('mostRecentScore', score);

        //go to end page
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

        if(classToApply === 'correct'){
            incrementScore(CORRECT_BONUS);
        }
        
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
        });
        //console.log(selectedAnswer===currentQuestion.answer);
    });

    incrementScore = num => {
        score += num;
        scoreText.innerText = score;

    };

startQuiz();