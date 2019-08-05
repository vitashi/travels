import React from 'react';
import './App.css';
import './animate.min.css';
import './default.css';

const HowTo = () =>{
  return (
    <div className="fullwidth-block features-section">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="feature left-icon wow fadeInLeft" data-wow-delay=".3s">
                    <i className="icon-ticket"></i>
                    <h3 className="feature-title">Class aptent taciti</h3>
                    <p>Laborum expedita fugiat et quas quia! Odio dignissimos beatae aspernatur in vero culpa excepturi consequatur!</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="feature left-icon wow fadeInLeft">
                    <i className="icon-plane"></i>
                    <h3 className="feature-title">Class aptent taciti</h3>
                    <p>Lectetur recusandae quasi repellendus accusamus ipsa sed quibusdam officia aspernatur natus itaque, asperiores impedit numquam dolorum.</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="feature left-icon wow fadeInRight">
                    <i className="icon-jetski"></i>
                    <h3 className="feature-title">Class aptent taciti</h3>
                    <p>L culpa ex dolorum ipsa, maxime soluta repudiandae officia corrupti. Doloribus iste voluptatibus nostrum?</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="feature left-icon wow fadeInRight" data-wow-delay=".3s">
                    <i className="icon-shuttelcock"></i>
                    <h3 className="feature-title">Class aptent taciti</h3>
                    <p>Lam sit, facere dicta libero ipsa. Repellat deleniti dignissimos, excepturi minima voluptatibus mollitia adipisci iusto.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}
    
export default HowTo;
