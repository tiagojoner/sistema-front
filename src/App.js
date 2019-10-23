import React from 'react';
import './App.css';
import logo from './assets/logo-horizontal-ti4go.png';
import Routes from './routes';

function App() { 
   
  return (
    <div className="container">
      <img src={logo} alt="AirCNC"  style={{width:"50%", height:"50%"}} />
      
      <div className="content">
          <Routes />
      </div>
    </div>
  );
}

export default App;
