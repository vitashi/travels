import React from 'react';
import logo from './logo.svg';
import Slider from './LargeSlider';
import Header from './Header';
import Footer from './Footer';
import Offers from './Offers';
import HowTo from './HowTo';
import Testimonials from './Testimonials';
import './App.css';
import './animate.min.css';
import './default.css';

function App() {
  return (
    <div className="App">
    {Content()}
    </div>
  );
}

const Main = () => {
  return (
    <main className="content">
        {Slider()}
        {HowTo()}
        {Offers()}
        {Testimonials()}
      </main>
    )
}

const Content = () => {
  return(
    <div id="site-content">
        {Header()}
        {Main()}
        {Footer()}
      </div>
    )
}


export default App;
