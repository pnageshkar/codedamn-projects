import React, {useRef,useContext} from 'react';
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../State/AuthContext';
import './signin.css';
import TwitterIcon from '@mui/icons-material/Twitter';

const Signin = () => {
    const email = useRef();
    const password = useRef();
    //const navigate = useNavigate()
    const {isLoading, dispatch } = useContext(AuthContext);
    

  const handleSubmit= (e) => {
    e.preventDefault();
    dispatch({ type: "LOGGING_IN" });
    //if uservalid dispatch authenticated
    
    //alert('login')
    let allUsers = [];
    // if no users exist
    allUsers = JSON.parse(localStorage.getItem("allUsers"))
   
    
    if (!allUsers) {
        dispatch({ type: "REJECTED", payload: "No User in System" });
        alert('No User')
    } else {
        const user_auth = allUsers.find((usr)=> {return (usr.email === email.current.value) && (atob(usr.password)===password.current.value)})
        console.log(user_auth)
        if (user_auth) {
            dispatch({ type: "AUTHENTICATED", payload: user_auth });
            //alert('User Authenticated')
           
        
        } else {
            dispatch({ type: "REJECTED", payload: "Either your Email id or Password are incorrect" });
            alert('Incorrect email password')
           
        }
    }
    
   }

  return (
    <div className="signin">
      <div className="signin-container">
        <div className="signin-left">
          <div className="signin-left-container">
            <div className="signin-app-name">Chirp</div>
            <div className="signin-cta-text1">Join trending discussions</div>
          </div>
        </div>
        <div className="signin-right">
           <div className="signin-cta-text2">Already on Chirp?</div> 
          <form className="signin-form" onSubmit={handleSubmit}>
            <input
              placeholder="Enter Email ..."
              type="email"
              required
              className="signin-input"
              ref={email}
            />
            <input
              placeholder="Enter Password ..."
              type="password"
              required
              minLength="8"
              className="signin-input"
              ref={password}
            />
            <button className="signin-btn" type="submit" disabled={isLoading}>
            {isLoading ? (
                <CircularProgress color="white" size="1.2rem" />
              ) : (
                "Sign In"
              )}
            </button>
            <span className="signin-forgotpwd">Forgot password?</span>
            <hr className='line-separator'/>
            <div>
            <Link to="/signup">
              <button className="signup-btn">Sign up</button>
            </Link>
            </div>
          </form>
          
        </div>
        
      </div>
    </div>
  );
};

export default Signin;
