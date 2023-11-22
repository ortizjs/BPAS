import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './NavBar.css';
import BimmersBanner from './../../assets/images/banner-bimmers.jpg'

const NavBar = () => {
  const location = useLocation();
  const [togglerOpen, setTogglerOpen] = useState(false);
  const [path, setPath] = useState("");

  const togglerOnClick = (e) => {
    e.preventDefault();
    setTogglerOpen(current => !current)
  }
  const handleSelectedNav = () => {
    let p = location.pathname.split("/")[1];
    setPath(p)
  }

  useEffect(() => {
    handleSelectedNav();
  })

  return (
    <div className='nav-bar-container'>
      <img src={BimmersBanner} alt="not-found"/>
      <div className="navbar-area">
          <div className="container">
            <nav className="site-navbar">
              {/* <a href="#home" className="site-logo">logo</a> */}
              <ul className={`${togglerOpen ? 'open' : ''}`}>
                <li className={`${path === "" ? "active" : ""}`} onClick={togglerOnClick}><Link to="/">Home</Link></li>
                <li className={`${path === "services" ? "active" : ""}`} onClick={togglerOnClick}><Link to="/services">service</Link></li>
                <li className={`${path === "specials" ? "active" : ""}`} onClick={togglerOnClick}><Link to="/specials">specials</Link></li>
                <li className={`${path === "reviews" ? "active" : ""}`} onClick={togglerOnClick}><Link to="/reviews">reviews</Link></li>
                <li className={`${path === "contact" ? "active" : ""}`} onClick={togglerOnClick}><Link to="/contact">contact</Link></li>
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
