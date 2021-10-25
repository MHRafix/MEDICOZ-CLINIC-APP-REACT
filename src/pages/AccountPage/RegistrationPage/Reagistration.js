import React, { useState } from 'react';
import '../LoginPage/Login.css';
import {Link, useLocation, useHistory} from 'react-router-dom';
import Banner from '../../images/loginBanner.jpg';
import GoogleIcon from '../../images/google.png';
import GithubIcon from '../../images/github.png';
import useAuth from '../../../customHooks/useAuth/useAuth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Reagistration = () => {
    const history = useHistory();

    const {user, handleGoogleSignin, handleGithubSignin} = useAuth();
    if(user.email){
        history.push('/');
     }
    const location = useLocation();
    const redirectUrl = location.state?.from || '/home';
    // Handle google Singup by taking info from Context api
    const handleGoogleLogin = () => {
        handleGoogleSignin()
        .then(res => {
              history.push(redirectUrl);
        })
  }
    
    // Handle github Singup by taking info from Context api
    const handleGithubLogin = () => {
        handleGithubSignin()
        .then(res => {
            history.push(redirectUrl);
        })
    }
    



    // Intregate registration method with email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // Store get auth in a variable
    const auth = getAuth();


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

    // Handle signup form
     const handleSignupForm = e => {
          createUserWithEmailAndPassword(auth, email, password)
          .then((res) => {
              console.log(res.user);
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
                              <h2 className="doctorName">Create New Acoount</h2>
                              <form onSubmit={handleSignupForm}>
                                  <input type="email" onBlur={handleEmail} placeholder="Enter your email"  required /> <br />
                                  <input type="password" onBlur={handlePassword} placeholder="Enter your password" required /> <br />
                                  <button className="submitBtn">SignUp</button> <br />
                                  <span onClick={handleGoogleLogin} className="apiProvider"><img src={GoogleIcon} alt="apiImg" />Singin with Google</span>
                                  <span onClick={handleGithubLogin} className="apiProvider"><img src={GithubIcon} alt="apiImg" />Github</span>
                              </form> <br />
                              <span style={{ color: "#444", fontWeight: "500", marginTop: "10px"}}>Already have an account ?<Link to="/account"> Login</Link></span>
                          </div>
                     </div>
                 </div>
             </div>
        </div>
    );
};

export default Reagistration;