import { useState,forwardRef } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from "react-hook-form";
import './signup.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Signup = () => {

  const { register, handleSubmit, formState: { errors } , watch} = useForm();
  const navigate = useNavigate();
  // MuiAlert
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const rePWdPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
// Password Must contain at least one number and one uppercase and lowercase letter, and at least 8 characters
  
  const registerUser = (user) => {
    
    let allUsers = [];
    // if no users exist
    if (localStorage.getItem("allUsers") === null ) {
      localStorage.setItem("allUsers",allUsers);
    } else { //retreive all registered users
     allUsers = JSON.parse(localStorage.getItem("allUsers"))
    }
    //check if  the entered user name or email ID has already been taken up
    if (allUsers.some((usr) => {
      return (usr.email === user.email || usr.username === user.username)
      })) {
      // MUI Alert Message
      setOpen(true);
      //alert ("There is already an user with either that email ID or that Name - Try a new one !")
      console.log(user.email, user.username)
      return false;
    } else {
      // if no duplicate email - encrypt pwd & push on to local storage
      user.password = btoa(user.password) //encrypt password
      allUsers.push(user)
      localStorage.setItem("allUsers", JSON.stringify(allUsers))
      return true;
    }
  }
  
  const genUserInitials = (userName) => {
    // This function is used to generate initials for a user - used for creation of avatar.
    const arrfullName = userName.split(' ');
    let initials;
    if (arrfullName.length > 1) {
      initials = arrfullName.shift().charAt(0) + arrfullName.pop().charAt(0);
    } else {
      initials = arrfullName.shift().charAt(0);
    }
    return initials.toUpperCase();
  }

  const onSubmit = (data) => {
    const user = {
        username: data.username,
        initials : genUserInitials(data.username),
        email: data.email,
        password: data.password,
    };
    console.log(user);
    if (registerUser(user)) {
      navigate('/signin'); // Move to Login page
    }
  }
 
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
              placeholder="Enter Your Name ..."
              type="text"
              className="signup-input"
              {...register("username", {required: "* User Name is required",minLength: {value: 3, message: "User Name must be atleast 3 characters"}})}
            />
            <p className="err-message">{errors.username?.message}</p>
            <input
              placeholder="Enter Email ..."
              type="email"
              className="signup-input"
              {...register("email" , {required: "* Email is required", pattern: {value:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/ , message: "Email is Invalid"}})}
            />
             <p className="err-message">{errors.email?.message}</p>
            <input
              placeholder="Enter Password ..."
              type="password"
              className="signup-input"
              {...register("password", { required: "* Password is required", minLength: {value: 8, message: "Password must be atleast 8 characters"},
                            pattern:{value:rePWdPattern, message:"Password Must contain at least one number and one uppercase and lowercase letter, and at least 8 characters"}})}
            />
             <p className="err-message">{errors.password?.message}</p>
            <input
              placeholder="Re-Enter Password ..."
              type="password"
              className="signup-input"
              {...register("password_repeat", { required: "* Password is required", 
                validate: (val) => {
                if (watch('password') !== val) {
                  return "* Your passwords do not match";
                }}})}
            />
            <p className="err-message">{errors.password_repeat?.message}</p>
            <button className="signup-btn" type="submit">
              Sign up
            </button>
          </form>
        </div>
      </div>
      <Snackbar anchorOrigin={{ vertical:'top', horizontal:'right' }} open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        There is already an user with either that email ID or that Name - Try a new one !
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Signup;
