import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import BimmersBanner from './../../assets/images/banner-bimmers.jpg'

const NavBar = () => {
  const [togglerOpen, setTogglerOpen] = useState(false);

  const togglerOnClick = (e) => {
    e.preventDefault();
    setTogglerOpen(current => !current)
  }

    return (
      <div className='nav-bar-container'>
        <img src={BimmersBanner} alt="not-found"/>
        <div className="navbar-area">
            <div className="container">
              <nav className="site-navbar">
                {/* <a href="#home" className="site-logo">logo</a> */}
                <ul className={`${togglerOpen ? 'open' : ''}`}>
                  <li onClick={togglerOnClick}><Link to="/">Home</Link></li>
                  <li onClick={togglerOnClick}><Link to="/services">service</Link></li>
                  <li onClick={togglerOnClick}><Link to="/specials">specials</Link></li>
                  <li onClick={togglerOnClick}><Link to="/contact">contact</Link></li>
                </ul>
        
                <button className={`nav-toggler${togglerOpen ? ' toggler-open' : ''}`} onClick={togglerOnClick}>
                  <span></span>
                </button>
              </nav>
            </div>
          </div>
      </div>
    )
}

export default NavBar
