const question = document.querySelector('.question');
const options = Array.from(document.getElementsByClassName('option'));
const remTime = document.querySelector('.remtime');
const answer = document.querySelector('.answer');

let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let quizTime = 60; // seconds
const maxTime = 60;

const MAX_QUESTIONS = 3;

// Questions & Answers for Quiz

const questions = [
  {
    questionText: 'Commonly used data types DO NOT include:',
    options: ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
    answer: '3. alerts',
  },
  {
    questionText: 'Arrays in JavaScript can be used to store ______.',
    options: [
      '1. numbers and strings',
      '2. other arrays',
      '3. booleans',
      '4. all of the above',
    ],
    answer: '4. all of the above',
  },
  {
    questionText:
      'String values must be enclosed within _____ when being assigned to variables.',
    options: ['1. commas', '2. curly brackets', '3. quotes', '4. parentheses'],
    answer: '3. quotes',
  },
  {
    questionText:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    options: [
      '1. JavaScript',
      '2. terminal/bash',
      '3. for loops',
      '4. console.log',
    ],
    answer: '4. console.log',
  },
  {
    questionText:
      'Which of the following is a statement that can be used to terminate a loop, switch or label statement?',
    options: ['1. break', '2. stop', '3. halt', '4. exit'],
    answer: '1. break',
  },
];

function clickHandler(e) {
  const selectedOption = e.target;
  const selectedAnswer = selectedOption.innerText;
  console.log(selectedAnswer);
  if (selectedAnswer !== questions[questionCounter].answer) {
    quizTime -= 10;
    answer.innerText = 'InCorrect !';
  } else {
    answer.innerText = 'Correct !';
    score += 1;
    questionCounter++;
    getNextQuestion();
  }
}

function getNextQuestion() {
  if (questionCounter >= MAX_QUESTIONS || quizTime === 0) {
    quizEnd();
  }
  question.innerHTML = questions[questionCounter].questionText;
  //console.log(options)
  options.forEach((option) => {
    const number = option.dataset['num'];
    option.innerText = questions[questionCounter].options[number - 1];
    option.addEventListener('click', clickHandler);
  });
}
// Add A CountDown for the Quiz

function quizEnd() {
  localStorage.setItem('currentScore', quizTime);
  return window.location.assign('/pages/results.html');
}

function startCountdown() {
  remTime.innerHTML = maxTime; // Initialize timer to 60 sec
  let quizTimer = setInterval(() => {
    if (quizTime <= 0) {
      clearInterval(quizTimer);
      quizEnd(); // Time over
    } else {
      quizTime--;
      remTime.innerHTML = quizTime;
    }
  }, 1000);
}

startQuiz = () => {
  questionCounter = 0;
  startCountdown();
  getNextQuestion();
};

startQuiz();
