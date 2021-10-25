import React, { useState } from 'react';
import './Login.css';
import {Link, useLocation, useHistory } from 'react-router-dom';
import Banner from '../../images/loginBanner.jpg';
import GoogleIcon from '../../images/google.png';
import GithubIcon from '../../images/github.png';
import useAuth from '../../../customHooks/useAuth/useAuth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const history = useHistory();
    const {user, handleGoogleSignin, handleGithubSignin} = useAuth(); 
    
    const location = useLocation();
    const redirectUrl = location.state?.from || '/home';
    if(user.email){
       history.push(redirectUrl);
    }else if(!user.email){
    }

    // Handle google login by taking info from useFirebase
    const handleGoogleLogin = () => {
          handleGoogleSignin()
          .then(res => {
                history.push(redirectUrl);
          })
    }
   
    // Handle github login by taking info from useFirebase
   const handleGithubLogin = () => {
       handleGithubSignin()
       .then(res => {
             history.push(redirectUrl);
       })
   }


    // Intregate firebase email and password login

   // Store auth in auth variable
   const auth = getAuth();

  // Take some of state for storing email and password 
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
  
   // Handle email field
   const handleEmail = e => {
         const email = e.target.value;
         setEmail(email);
   }

   // Handle password field
   const handlePassword = e => {
       const password = e.target.value;
       setPassword(password);
   }
   // Handle sign in with existing user info
   const handleSignin = e => {
         signInWithEmailAndPassword(auth, email, password)
         .then(res => {

         });
         e.preventDefault();
   }
   
    return (
        <div className="loginArea">
             <div className="container">
                 <div className="row">
                     <div className="col-lg-6 col-md-6 col-sm-12">
                         <div className="imageDemo">
                             <img src={Banner} alt="banner" />
                         </div>
                     </div>
                     <div className="col-lg-5 col-md-6 col-sm-12">
                          <div className="loginForm">
                              <h2 className="doctorName">Connect with doctors</h2>
                              <form onSubmit={handleSignin}>
                                  <input type="email" onBlur={handleEmail} placeholder="Enter your email" required /> <br />
                                  <input type="password" onBlur={handlePassword} placeholder="Enter your password" required /> <br />
                                  <button className="submitBtn">Login</button> <br />
                                  <span onClick={handleGoogleLogin} className="apiProvider"><img src={GoogleIcon} alt="apiImg" />Singin with Google</span>
                                  <span onClick={handleGithubLogin} className="apiProvider"><img src={GithubIcon} alt="apiImg" />Github</span>
                              </form> <br />
                              <span style={{ color: "#444", fontWeight: "500", marginTop: "10px"}}>Are you new user ? <Link to="/registration"> Get started</Link></span>
                          </div>
                     </div>
                 </div>
             </div>
        </div>
    );
};

export default Login;