import React from 'react'
import NavBar from './components/navbar/NavBar';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css'
const App = () => {
    return (
      <div className='app-container'>
          <Routes>

            <Route path="/" element={<NavBar/>}/>
          </Routes>
      </div>
    )
}

export default App
