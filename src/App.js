import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import './App.css'

const App = () => {
    return (
      <div className='app-container'>
        <NavBar/>
        <Routes>
          <Route path="/BPAS" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
        <hr className="splash-page-main-div-hr" align="center"/>
      </div>
    )
}

export default App
