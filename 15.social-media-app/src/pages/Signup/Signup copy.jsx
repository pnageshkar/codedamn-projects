import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from "react-hook-form";
import './signup.css';
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [passwordRep, setpasswordRep] = useState();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const rePWdPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
// Password Must contain at least one number and one uppercase and lowercase letter, and at least 8 characters
  
  const signUp = (user) => {
    
    let allUsers = [];
    // if no users exist
    if (localStorage.getItem("allUsers") === null ) {
      localStorage.setItem("allUsers",allUsers);
    } else { //retreive all registered users
     allUsers = JSON.parse(localStorage.getItem("allUsers"))
    }
    //check if we the new user email ID already exists
    if (allUsers.some((usr) => {return usr.email === user.email})) {
      alert ("We have another user with same EmailID  - try a new one")
      return false;
    } else {
      // if no duplicate email - encrypt pwd & push on to local storage
      user.password = btoa(user.password)
      allUsers.push(user)
      localStorage.setItem("allUsers", JSON.stringify(allUsers))
      return true;
    }
  }
  
  const genUserInitials = (userName) => {
    const arrfullName = userName.split(' ');
    let initials;
    if (arrfullName.length > 1) {
      initials = arrfullName.shift().charAt(0) + arrfullName.pop().charAt(0);
    } else {
      initials = arrfullName.shift().charAt(0);
    }
    return initials.toUpperCase();
  }
  const onSubmit = (e) => {
    e.preventDefault();

    if (passwordRep !== password) {
      alert('Passwords not identical')
      // <Alert severity="error">Passwords do not match!</Alert>
      if (!rePWdPattern.test(password)) {
        alert('You have a Weak Password - it must have atleast one number and one uppercase and lowercase letter, and at least 8 or more characters' )
      }
    } else {
      const user = {
        username: username,
        initials : genUserInitials(username),
        email: email,
        password: password,
      };
      console.log(user);
      if (signUp(user)) {
        navigate('/signin'); // Move to Login page
      }
      
    }
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <div className="signup-left">
          <div className="signup-left-container">
            <h3 className="signup-app-name">Chirp</h3>
            <div className="signup-cta-text1"> Join trending discussions !</div>
            <div className="signup-cta-text2">Join Chirp NOW</div>
          </div>
        </div>
        <div className="signup-right">
          <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              name="user-name"
              placeholder="Enter Your Name ..."
              type="text"
              required
              className="signup-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              name="email"
              placeholder="Enter Email ..."
              type="email"
              required
              className="signup-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              name="password"
              placeholder="Enter Password ..."
              type="password"
              required
              minLength="8"
              className="signup-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              name="password_reenter"
              placeholder="Re-Enter Password ..."
              type="password"
              required
              minLength="8"
              className="signup-input"
              value={passwordRep}
              onChange={(e) => setpasswordRep(e.target.value)}
            />
            <button className="signup-btn" type="submit">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
