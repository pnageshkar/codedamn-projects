import React , {useState,useContext} from 'react'
import { AppContext } from '../AppContext'

const Results = () => {
    const {currentScore,setShowResults,setShowLdrBoard,setQuizTime} = useContext(AppContext)
    const [initials, setInitials] = useState('');
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    
    const saveInitials = (e) => {
        e.preventDefault()
        const score = {
            score: currentScore,
            name: initials,
        };
        highScores.push(score);
        localStorage.setItem('highScores', JSON.stringify(highScores));
        setShowResults(false);
        setShowLdrBoard(true);
        setQuizTime(60);
        
    }
  return (
    <main>
        <div className="container" >
            <h2>All Done !</h2>
            <p>Your Final Score is : <span className="score">{currentScore}</span></p>
            <form >
                <div className="form-row">
                    <label htmlFor="username" className="label">Enter Initials</label>
                    <input type="text" name="username"  placeholder="Your initials here..." value={initials} onChange={ (e)=> setInitials(e.target.value)}/>
                    <input type="submit"  id="btn-submit" value="Submit" onClick={saveInitials}/>
                </div>             
            </form>
        </div>
    </main>
  )
}

export default Results