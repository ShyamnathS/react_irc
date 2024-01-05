
import React, { useState } from 'react';

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import pass_icon from '../assets/password.png'


import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { database } from './firebase';

export const Login2 = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    const handleLogin = (e) => {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          toast.success('Login successful!');
          console.log("Navigating to /dash");
          navigate("/dash");
          setIsAuthenticated(true);
        })
        .catch((error) => {
          console.error('Firebase Authentication Error:', error);
          toast.error('Login failed. Please check your credentials.');
        });
    };
  
    return (
      <div className='container'>
        <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
        </div>

       
        <div className="inputs">
            <div></div>
            
            
            <div></div>
            
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" name="" id="" placeholder='Employee Email_Id'  value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="input">
                <img src={pass_icon} alt="" />
                <input type="password" name="" id=""  placeholder='Password' value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            
            </div>
            
            
            
        </div>

        

         <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
               
         <button
        style={{
          width: '100px',
          margin: '0 auto',
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        onClick={handleLogin}
      >
        Submit
      </button>

      <ToastContainer />

                

       
        <div className="submit_container">
            <div className="submit" >
                <Link to="/sign" id="routess">
                Sign Up
                </Link>
                </div>
            <div className="submit" >Login</div>
        </div>
    </div>
  )
}

export default Login2;
