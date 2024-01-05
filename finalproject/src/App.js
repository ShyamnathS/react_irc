import logo from './logo.svg';

// import './App.css';

import { Login2 } from './components/LoginSign/Login2';
import { Sign } from './components/LoginSign/Sign';
import { Route,Routes,BrowserRouter, Navigate } from 'react-router-dom';
import { Home } from './components/LoginSign/Home';
import TitlebarBelowImageList from './components/LoginSign/material';
import Dashboard from './components/LoginSign/Dashboard';
import { Experimental_CssVarsProvider } from '@mui/material';
import EmployeeList from './components/LoginSign/EmployeeList';
import EmployeeDashboard from './components/LoginSign/Dashboard';
import EmailPage from './components/LoginSign/email';


function App() {
  return (
    <div>
    

     
      <BrowserRouter>
    <Routes>
    {/* <Route path='*' element={<Navigate to='/' /> }></Route> */}
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/sign" element={<Sign/>}></Route>
    <Route exact path="/login" element={<Login2/>}></Route>
    <Route exact path="/dash" element={<Dashboard/>}></Route>
    <Route exact path="/email" element={<EmailPage/>}></Route>
    <Route exact path="/employee" element={<EmployeeList/>}></Route>
   

    </Routes>

      </BrowserRouter>

      {/* <EmployeeDashboard/> */}





      





      


      


      
    </div>
  );
}

export default App;





// src/App.js








// src/App.js
// import React from 'react';
// import { Route,Routes,BrowserRouter } from 'react-router-dom';
// import EmployeeList from './components/LoginSign/EmployeeList';
// import Dashboard from './components/LoginSign/Dashboard';


// const App = () => {
//   return (
//     <BrowserRouter>
//      <Routes>
    
//      <Route exact path="/" element={<EmployeeList/>}></Route>
//      <Route exact path="/dash" element={<Dashboard/>}></Route>
     

//      </Routes>
//      </BrowserRouter>
//   );
// };

// export default App;
