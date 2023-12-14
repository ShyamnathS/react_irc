import React, { useState } from 'react'
import './Login.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import pass_icon from '../assets/password.png'
import { Link } from 'react-router-dom'

export const Login2 = () => {
    




    

    


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
                <input type="email" name="" id="" placeholder='Employee Email_Id' />
            </div>
            <div className="input">
                <img src={pass_icon} alt="" />
                <input type="password" name="" id=""  placeholder='Password'/>
            
            </div>
            
            
        </div>

        

         <div className="forgot-password">Lost Password? <span>Click Here!</span></div>


       
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
