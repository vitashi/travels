import React from 'react';
import './App.css';
import './animate.min.css';
import './default.css';

const Offers = () =>{
  return (
    <div className="fullwidth-block offers-section" data-bg-color="#f1f1f1">
            <div className="container">
              <h2 className="section-title">The newest holiday offers</h2>
              <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <article className="offer wow bounceIn">
                    <figure className="featured-image"><img src="dummy/offer-thumbnail-1.jpg" alt=""/></figure>
                    <h2 className="entry-title"><a href="">Nemo enim ipsam voluptatem</a></h2>
                    <p>Piditate non provident similique  sunt in culpa qui oficia deserunt molitia animi est aborum et dolorum fuga</p>
                    <a href="#" className="button">See details</a>
                  </article>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <article className="offer wow bounceIn" data-wow-delay=".2s">
                    <figure className="featured-image"><img src="dummy/offer-thumbnail-2.jpg" alt=""/></figure>
                    <h2 className="entry-title"><a href="">Nemo enim ipsam voluptatem</a></h2>
                    <p>Piditate non provident similique  sunt in culpa qui oficia deserunt molitia animi est aborum et dolorum fuga</p>
                    <a href="#" className="button">See details</a>
                  </article>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <article className="offer wow bounceIn" data-wow-delay=".4s">
                    <figure className="featured-image"><img src="dummy/offer-thumbnail-3.jpg" alt=""/></figure>
                    <h2 className="entry-title"><a href="">Nemo enim ipsam voluptatem</a></h2>
                    <p>Piditate non provident similique  sunt in culpa qui oficia deserunt molitia animi est aborum et dolorum fuga</p>
                    <a href="#" className="button">See details</a>
                  </article>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <article className="offer wow bounceIn" data-wow-delay=".6s">
                    <figure className="featured-image"><img src="dummy/offer-thumbnail-4.jpg" alt=""/></figure>
                    <h2 className="entry-title"><a href="">Nemo enim ipsam voluptatem</a></h2>
                    <p>Piditate non provident similique  sunt in culpa qui oficia deserunt molitia animi est aborum et dolorum fuga</p>
                    <a href="#" className="button">See details</a>
                  </article>
                </div>
              </div>
            </div>
          </div>
    )
}
    
export default Offers;
