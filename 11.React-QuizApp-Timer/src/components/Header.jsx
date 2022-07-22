import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

const Header = () => {
            
  const {quizTime,showQuiz,setShowStart,setShowQuiz,setShowResults,setShowLdrBoard} = useContext(AppContext)
  
  const ViewScores = () => {
    setShowLdrBoard(true);
    setShowQuiz(false);
    setShowStart(false);
    setShowResults(false);
  }

  return (
    <header>
      <div>
        <span onClick={ViewScores}>View Highscores </span>
          <i className="fas fa-hand-point-left fa-lg"></i>
      </div>
      <div>Time remaining: {showQuiz && quizTime}</div>
    </header>
  )
}

export default Header