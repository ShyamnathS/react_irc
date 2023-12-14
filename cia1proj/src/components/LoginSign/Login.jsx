import React, { useState } from 'react'
import './Login.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import pass_icon from '../assets/password.png'

export const Login = () => {

    const[action,setAction]=useState("Login");
    const [acceptTerms, setAcceptTerms] = useState(false);


  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:  <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" name="" id="" placeholder='Employee First Name' />
            </div>
            
            }
            {action==="Login"?<div></div>:  <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" name="" id="" placeholder='Employee Last Name' />
            </div>
            
            }
            
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" name="" id="" placeholder='Employee Email_Id' />
            </div>
            <div className="input">
                <img src={pass_icon} alt="" />
                <input type="password" name="" id=""  placeholder='Password'/>
            
            </div>
            
            
        </div>

        {action === "Sign Up" && (                <div className="terms-checkbox">
                    <label>
                        <input
                            type="checkbox"
                            checked={acceptTerms}
                            onChange={() => setAcceptTerms(!acceptTerms)}
                        />
                        Accept Terms and Conditions
                    </label>
                </div>
            )}

        {action==="Sign Up"?<div></div>: <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
}

       
        <div className="submit_container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}
