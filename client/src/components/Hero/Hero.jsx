import React from 'react';
import './Hero.css';
// Import the image
// In a real project, you'd have the image in your assets folder
// import heroImage from '../images/foundation-banner.jpg';

function Hero() {
  return (
    <section className="hero">
      {/* Use imported image or provide a path for the image */}
      <img 
        src="/images/foundation-banner.jpg" 
        alt="Glow Beauty Foundation Banner" 
        className="hero-img" 
      />
      <div className="hero-text">
        <h2>GLOW BEAUTY</h2>
        <h1>Discover Your Perfect Shade</h1>
        <p>Use our foundation finder technology to match your skin tone with our extensive range of foundations.</p>
        <a href="/shop" className="hero-btn">Shop Now</a>
      </div>
    </section>
  );
}

export default Hero;