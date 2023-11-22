import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Reviews from './components/reviews/Reviews';
import './App.css'

const App = () => {
    const location = useLocation();
    let path = location.pathname.split("/")[1];
    return (
      <div className={`app-container${path === "services" ? ' extended-down' : ''}`}>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/reviews" element={<Reviews/>}/>
        </Routes>
        <hr className="splash-page-main-div-hr" align="center"/>
      </div>
    )
}

export default App
