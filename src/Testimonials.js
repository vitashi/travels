import React from 'react';
import './App.css';
import './animate.min.css';
import './default.css';

const Testimonials = () =>{
  return (
    <div className="fullwidth-block testimonial-section">
            <div className="container">
              <h2 className="section-title">Testimonials</h2>
              <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="testimonial wow fadeInUp">
                    <figure className="avatar"><img src="dummy/person-1.jpg" alt=""/></figure>
                    <blockquote className="testimonial-body">
                      <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
                      <cite>Jessica Tracy</cite>
                      <span>Creative agency CEO</span>
                    </blockquote>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="testimonial wow fadeInUp" data-wow-delay=".2s">
                    <figure className="avatar"><img src="dummy/person-2.jpg" alt=""/></figure>
                    <blockquote className="testimonial-body">
                      <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
                      <cite>John Smith</cite>
                      <span>Traveler</span>
                    </blockquote>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="testimonial wow fadeInUp" data-wow-delay=".4s">
                    <figure className="avatar"><img src="dummy/person-3.jpg" alt=""/></figure>
                    <blockquote className="testimonial-body">
                      <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
                      <cite>Susan Webb</cite>
                      <span>Hairdresser</span>
                    </blockquote>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="testimonial wow fadeInUp" data-wow-delay=".6s">
                    <figure className="avatar"><img src="dummy/person-4.jpg" alt=""/></figure>
                    <blockquote className="testimonial-body">
                      <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
                      <cite>Sarah Brown</cite>
                      <span>Athlete</span>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}
    
export default Testimonials;
