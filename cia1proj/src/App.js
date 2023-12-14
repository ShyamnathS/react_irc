import logo from './logo.svg';

import './App.css';
import { Login } from './components/LoginSign/Login';
import { Login2 } from './components/LoginSign/Login2';
import { Sign } from './components/LoginSign/Sign';
import { Route,Routes,BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div>
      {/* <Login2/> */}

      
      <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Login2/>}></Route>
    <Route exact path="/sign" element={<Sign/>}></Route>

    </Routes>

      </BrowserRouter>


      {/* <Sign/> */}
    </div>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Login2 from './components/LoginSign/Login2';
// import Sign from './components/LoginSign/Sign';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/login" component={Login2} />
//         <Route path="/sign" component={Sign} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;

