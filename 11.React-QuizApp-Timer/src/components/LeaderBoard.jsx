import React, { useState,useContext } from 'react';
import { AppContext } from '../AppContext';

const LeaderBoard = () => {
  const { setShowStart, setShowLdrBoard } = useContext(AppContext);

  let initialVal = JSON.parse(localStorage.getItem('highScores')) || [];
  const [highScores,setHighScores] = useState(initialVal)
  
  const clearScores = () => {
    setHighScores([]); // Clear Array of High Scores
    //remove from local storage
    localStorage.setItem('highScores', JSON.stringify([]));
  };

  return (
    <main>
      <div className="container">
        <div className="leaderboard">
          <h2>High Scores</h2>
          <ul className="highscorelist">
            {
                highScores.map((score,index) => <li className="high-score" key={index}>{score.name} - {score.score}</li>)
            }
          </ul>
          <div className="leader-btns">
            <button
              className="btn"
              onClick={() => {
                setShowLdrBoard(false);
                setShowStart(true);
              }}
            >
              Go Back
            </button>
            <button className="btn" id="btn-clear" onClick={clearScores}>
              Clear High Scores
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LeaderBoard;
