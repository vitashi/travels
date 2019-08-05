import React from 'react';
import './App.css';
import './animate.min.css';
import './default.css';

const Header = () =>{
  return (
    <header className="site-header wow fadeInDown">
          <div className="container">
            <div className="header-content">
              <div className="branding">
                <img src="images/logo.png" alt="Company Name" className="logo"/>
                <h1 className="site-title"><a href="index.html">Company Name</a></h1>
                <small className="site-description">Tagline goes here</small>
              </div>
              
              <nav className="main-navigation">
                <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
                <ul className="menu">
                  <li className="menu-item"><a href="about-us.html">About us</a></li>
                  <li className="menu-item"><a href="our-offer.html">Our Offer</a></li>
                  <li className="menu-item"><a href="customer-protection.html">Customer Protection</a></li>
                  <li className="menu-item"><a href="contact.html">Contact</a></li>
                </ul>
              </nav>
              
              <div className="social-links">
                <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                <a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a>
              </div>
            </div>
          </div>
        </header> 
    )
}
    
export default Header;
