import React, {useState} from 'react';
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
                  <li><a href="/">home</a></li>
                  <li><a href="/services">service</a></li>
                  <li><a href="/specials">specials</a></li>
                  <li><a href="/contact">contact</a></li>
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
