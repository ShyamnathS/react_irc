import React, { useState } from 'react'
import './Login.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import pass_icon from '../assets/password.png'
import { Link } from 'react-router-dom'

export const Sign = () => {

    // const[action,setAction]=useState("Login");
    const [acceptTerms, setAcceptTerms] = useState(false);

    


  return (
    <div className='container'>
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
           <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" name="" id="" placeholder='Employee First Name' />
            </div>
            
            
          <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" name="" id="" placeholder='Employee Last Name' />
            </div>
            
            
            
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" name="" id="" placeholder='Employee Email_Id' />
            </div>
            <div className="input">
                <img src={pass_icon} alt="" />
                <input type="password" name="" id=""  placeholder='Password'/>
            
            </div>
            
            
        </div>

       <div className="terms-checkbox">
                    <label>
                        <input
                            type="checkbox"
                            checked={acceptTerms}
                            onChange={() => setAcceptTerms(!acceptTerms)}
                        />
                        Accept Terms and Conditions
                    </label>
                </div>
            

       <div></div>

       
        <div className="submit_container">
            <div className="submit" >Sign Up</div>
            <div className="submit" >
                <Link to="/" id="routess">

                Login
                    
                </Link>
                </div>
        </div>
    </div>
  )
}
