// components/Hero/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Urban Streetwear Collection</h1>
        <p>Discover the latest drops from top streetwear brands</p>
        <div className="hero-buttons">
          <a href="/shop" className="btn btn-primary">Shop Now</a>
          <a href="/new-in" className="btn btn-outline">View New Arrivals</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;