import React, { useState } from 'react'
import './Login.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import pass_icon from '../assets/password.png'
import { Link, useNavigate } from 'react-router-dom'
import { database } from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'

export const Sign = () => {
    
    // const[action,setAction]=useState("Login");
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate=useNavigate();
    

    const handleSubmit = async(e) =>{
        createUserWithEmailAndPassword(database, email, pass)
        .then((data) => {
          console.log(data, "authData");
          toast.success('Registration successful!');
    
        navigate("/login");
        })
        .catch((error) => {
          // Handle Firebase authentication errors
          const errorCode = error.code;
          const errorMessage = error.message;
    
          if (errorCode === 'auth/weak-password') {
            toast.error('Password should be at least 6 characters.');
          } else {
            toast.error(`Registration failed: ${errorMessage}`);
          }
        });
    };


    


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
                <input type="email" name="" id="" placeholder='Employee Email_Id' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="input">
                <img src={pass_icon} alt="" />
                <input type="password" name="" id=""  placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)}/>
            
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
                
       <button style={{ width: '100px', margin: '0 auto', backgroundColor: '#4CAF50', color: 'white', padding: '10px', borderRadius: '5px', cursor: 'pointer' }} onClick={handleSubmit}>

                 <Link to="/dash" id="butt">
                SUBMIT
                </Link>
                </button>

       
        <div className="submit_container">
            <div className="submit" >Sign Up</div>
            <div className="submit" >
                <Link to="/login" id="routess">

                Login
                    
                </Link>
                </div>
        </div>
    </div>
  )
}
