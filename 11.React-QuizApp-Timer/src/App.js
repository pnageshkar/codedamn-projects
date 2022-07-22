import './App.css';
import {AppContext} from './AppContext'
import { useContext } from 'react';
//Components
import Header from './components/Header';
import QuizStart from './components/QuizStart';
import Quiz from './components/Quiz';
import Results from './components/Results';
import LeaderBoard from './components/LeaderBoard';


function App() {
  const {showStart,showQuiz,showresults,showldrboard} = useContext(AppContext);
  
  return (
    <>
      <Header />
      {showStart && <QuizStart /> }
      {showQuiz && <Quiz />}
      {showresults && <Results />}
      {showldrboard && <LeaderBoard/>}

    </>
  );
}

export default App;
