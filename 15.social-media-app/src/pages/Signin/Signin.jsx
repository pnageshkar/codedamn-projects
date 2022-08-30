import React, {useContext} from 'react';
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../State/AuthContext';
import { useForm } from "react-hook-form";
import './signin.css';


const Signin = () => {
    // const email = useRef();
    // const password = useRef();
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    //const navigate = useNavigate()
    const {isLoading, dispatch } = useContext(AuthContext);
    

    const onSubmit= (data) => {
      // e.preventDefault();
      console.log(data);
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
          const user_auth = allUsers.find((usr)=> {return (usr.email === data.email) && (atob(usr.password)=== data.password)})
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
          <form className="signin-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Enter Email ..."
              type="email"
              className="signin-input"
              {...register("email" , {required: "* Email is required", pattern: {value:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/ , message: "Invalid Email"}})}
            />
            <p className="err-message">{errors.email?.message}</p>
            <input
              placeholder="Enter Password ..."
              type="password"
              className="signin-input"
              {...register("password", { required: "* Password is required", minLength: {value: 8, message: "Password must be more than 7 characters",
              }})}
            />
            <p className="err-message">{errors.password?.message}</p>
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
