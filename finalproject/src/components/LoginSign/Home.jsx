import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';

export const Home = () => {


  
  return (
    <div>
         {/* <header>
    <h1>Your Website</h1>
  </header> */}

  <nav>
    <li id="t">Home</li>
    <li id="t">About</li>
    <li id="t">Services</li>
    <li id="t">Contact</li>
    <Link to="/sign">
    <li id="t">
  Employee LOGIN
      
     </li>
    </Link>
    
   
    
    
  </nav>

  <section>
    <h2>ABC INDUSTRIES</h2>
    <p>
   A TO Z Group Company <br /><br />

Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, animi! Similique cumque, quibusdam nemo neque odit consequuntur omnis cum sequi placeat rerum alias amet beatae, nam dolorem saepe itaque qui. <br /><br />

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam nostrum autem illo expedita, aut ullam dolorum aliquid sunt, mollitia perspiciatis facilis alias provident doloribus asperiores! Cumque saepe debitis ipsum magnam?
    </p>


  




  </section>

  <footer>
    <p>&copy; 2023 Your Website. All rights reserved.</p>
  </footer>


    </div>
  )
}
