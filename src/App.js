import React from 'react'
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import './App.css'

const App = () => {
    return (
      <div className='app-container'>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <hr className="splash-page-main-div-hr" align="center"/>
      </div>
    )
}

export default App
