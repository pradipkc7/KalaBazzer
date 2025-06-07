// import Login from "./LoginPage";
// function App(){
//     return (
//         < Login/>
//     )
// }
// export default App;

import React from 'react'; 
import { Routes, Route } from 'react-router-dom'; 
import  Dashboard  from './core/public/Dashboard';
import Login from './core/public/Login';
import Register from './core/public/Register';
 
function App() { 
  return ( 
    <Routes> 
      <Route path="/" element={<Dashboard />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} /> 
    </Routes> 
  ); 
} 
 
export default App; 
