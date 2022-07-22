import React , {useEffect,useContext} from 'react'
import { AppContext } from '../AppContext'

const Quiz = () => {
    const {quizTime,setQuizTime,setCurrentScore,setShowQuiz,setShowResults,questions,index,setIndex,checkAnswer,answerStatus} = useContext(AppContext)
    const {questionText,options} = questions[index]
    
    useEffect(()=> {
        let quizTimer = setTimeout(() => {
            if (quizTime <= 0) {
              clearTimeout(quizTimer);
              setQuizTime(0);
              setCurrentScore(0);
              setIndex(0);
              setShowQuiz(false); // Time over and end Quiz
              setShowResults(true);
            } else {
              setQuizTime(preVal => preVal - 1);
              setCurrentScore(quizTime)
              console.log(quizTime)
              
            }
          }, 1000);
         return () => clearTimeout(quizTimer)
    })
    
    return (
        <main>
            <div className="container">
                <div className="quiz">
                <h2 className="question">{questionText}</h2>
                <div className="options">
                    <p className="option" data-num="1" onClick={(e)=>checkAnswer(e.target.innerText)}>{options[0]}</p>
                    <p className="option" data-num="2" onClick={(e)=>checkAnswer(e.target.innerText)}>{options[1]}</p>
                    <p className="option" data-num="3" onClick={(e)=>checkAnswer(e.target.innerText)}>{options[2]}</p>
                    <p className="option" data-num="4" onClick={(e)=>checkAnswer(e.target.innerText)}>{options[3]}</p>
                </div>
                <p className="answer">{answerStatus}</p>
                </div>
            </div>
        </main>
  )
}

export default Quiz