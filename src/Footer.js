import React from 'react';
import './App.css';
import './animate.min.css';
import './default.css';

const Footer = () =>{
  return (
    <footer className="site-footer wow fadeInUp">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="widget">
                    <h3 className="widget-title">About us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus animi asperiores magnam ducimus laboriosam soluta, odio doloribus, voluptas numquam facilis consectetur nam in repudiandae commodi odit iste sed doloremque repellat.</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="widget">
                    <h3 className="widget-title">Helpful Links</h3>
                    <ul className="list-arrow">
                      <li><a href="#">Labore et dolore magnam</a></li>
                      <li><a href="#">Dolore magnam</a></li>
                      <li><a href="#">Magnam Labore et</a></li>
                      <li><a href="#">Dolore mabore magnam</a></li>
                      <li><a href="#">Et dolore magnam</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="widget">
                    <h3 className="widget-title">Helpful Links</h3>
                    <ul className="list-arrow">
                      <li><a href="#">Labore et dolore magnam</a></li>
                      <li><a href="#">Dolore magnam</a></li>
                      <li><a href="#">Magnam Labore et</a></li>
                      <li><a href="#">Dolore mabore magnam</a></li>
                      <li><a href="#">Et dolore magnam</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="widget widget-customer-info">
                    <h3 className="widget-title">Customer Service</h3>
                    <img src="dummy/footer-customer-service.jpg" alt="" className="pull-left"/>
                    <div className="cs-info">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim voluptates pariatur vero.</p>
                      <p>+1 421 458 321 <br/> <a href="mailto:cs@companyname.com">cs@companyname.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="branding pull-left">
                <img src="images/logo-footer.png" alt="Company Name" className="logo"/>
                <h1 className="site-title"><a href="index.html">Company Name</a></h1>
                <small className="site-description">Tagline goes here</small>
              </div>

              <div className="contact-links pull-right">
                <a href="https://goo.gl/maps/oQKxg"><i className="fa fa-map-marker"></i> 983 Avenue Street, New York</a>
                <a href="tel:+134453455345"><i className="fa fa-phone"></i> +1 344 5345 5345</a>
                <a href="mailto:contact@companyname.com"><i className="fa fa-envelope"></i> contact@companyname.com</a>
              </div>
            </div>
          </div>
          <div className="colophon">
            <div className="container">
              <p className="copy">Copyright 2014 Company Name, Designed by Themezy, All right reserved.</p>
            </div>
          </div>
        </footer>
    )
}
    
export default Footer;
