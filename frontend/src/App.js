import React from 'react';
import './assets/css/index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Quotes from "./pages/Quotes";
import Dashboard from './pages/Dashboard';
  //import RequireAuth from './Auth/Auth.js';
  

function App(){

    return (
     <div className='App'>

            <BrowserRouter>
                <Routes>
                    
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/quotes" element={<Quotes />} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                </Routes>
            </BrowserRouter>
     </div>
            
      );
    }
    
export default App;