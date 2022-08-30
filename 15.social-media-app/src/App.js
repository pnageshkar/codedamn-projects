import './App.css';
import Home from './pages/Home/Home';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './State/AuthContext';

import PageNotFound from './pages/Error/PageNotFound';

function App() {
  let { user} = useContext(AuthContext);
  
  //console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Signin />} />
        <Route
          path="/signin"
          caseSensitive={false}
          element={user ? <Home /> : <Signin />}
        />
        <Route
          path="/signup"
          caseSensitive={false}
          element={user ? <Home /> : <Signup />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
