import { useState, createContext } from "react"

const loaded_questions = [
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

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [showStart, setShowStart] = useState(true)
  //const [loading, setLoading] = useState(false)
   //const [error, setError] = useState(false)
  const [showQuiz,setShowQuiz] = useState(false)
  const [questions, setQuestions] = useState(loaded_questions)
  const [index, setIndex] = useState(0)
  const [answerStatus, setAnswerStatus] = useState('')
  const [correct_count, setCorrectCount] = useState(0)
  const [showresults, setShowResults] = useState(false)
  const [showldrboard, setShowLdrBoard] = useState(false)
  const MAXQUIZTIME = 60
  const [quizTime,setQuizTime] = useState(MAXQUIZTIME)
  const [currentScore, setCurrentScore] = useState(0)

  const showNextQuestion = () => {
    setIndex((lastIndex) => {
      setAnswerStatus('')
      const index = lastIndex + 1
      if (index > questions.length - 1 ) {
        //setCurrentScore(quizTime)//??check
        setShowQuiz(false)
        setShowResults(true)
        return 0
      } else {
        return index
      }
    })
  }
  const checkAnswer = (value) => {
    
    if (value === questions[index].answer) {
      setCorrectCount(prevValue => prevValue + 1)//track correct answers..not needed
      setAnswerStatus('Correct !')
      showNextQuestion()
    }else {
      setAnswerStatus('Incorrect !')
      setQuizTime(preVal => preVal-10)// decrement score
      showNextQuestion()
    }
    
  }

  // const startTimer = ()=> {
   
  //   let quizTimer = setInterval(() => {
  //     if (quizTime <= 0) {
  //       clearInterval(quizTimer);
  //       setShowQuiz(false); // Time over and end Quiz
  //       setShowResults(true);
  //     } else {
  //       setQuizTime(preVal => preVal - 1);
  //       console.log(quizTime)
        
  //     }
  //   }, 1000);

  // }

  const startQuiz = (e) => {
    e.preventDefault();
    setShowStart(false)
    //setQuizTime(60)
    //console.log(quizTime,showStart)
    //startTimer();
    setShowQuiz(true)
    
  }

  return (
          <AppContext.Provider value = {{
            showStart,
            setShowStart,
            showQuiz,
            setShowQuiz,
            questions,
            setQuestions,
            index,
            setIndex,
            correct_count,
            setCorrectCount,
            showresults,
            setShowResults,
            showldrboard,
            setShowLdrBoard,
            showNextQuestion,
            checkAnswer,
            answerStatus,
            setAnswerStatus,
            quizTime,
            setQuizTime,
            startQuiz,
            currentScore,
            setCurrentScore
            }}>
              {children}
          </AppContext.Provider>
  )
}

export {AppContext,AppContextProvider};
