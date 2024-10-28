
import './App.css';
import {Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import { useState } from 'react';
import RefrshHandler from './RefrshHandler';


function App() {

  // This can be done at last 
  const [isAuthenticated, SetIsAuthenticated] = useState(false);
  const PrivateRoute = ({element})=>{
    // If true then component otherwise navigate to login
    return isAuthenticated ? element :<Navigate to="/login"/>
  }

  return (
    <div className="App">
      <RefrshHandler SetIsAuthenticated={SetIsAuthenticated}/>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<PrivateRoute element={<Home />}/>} />
      </Routes>
    </div>
  );
}

export default App;
