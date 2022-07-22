import React , {useContext} from 'react'
import { AppContext } from '../AppContext'

const QuizStart = () => {
    const {startQuiz} = useContext(AppContext)
    //console.log(startQuiz)
  return (
    <main>
        <div className="container">
            <h2>Coding Quiz Challenge</h2>
            <p>Try to answer the following code-related questions within the time limit.</p>
            <p>Keep in mind that incorrect answers will penalize your score/time by 10 seconds.</p>
            <button className="btn" onClick={startQuiz}>Start Quiz </button>
        </div>
    </main>
  )
}

export default QuizStart