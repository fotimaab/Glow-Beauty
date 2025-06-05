import React from 'react';
import './FoundationFinder.css';


function FoundationFinder({ onOpenCameraModal }) {
  return (
    <section className="foundation-finder">
      <div className="container">
        <div className="finder-content">
          <div className="finder-row">
            <div className="finder-text">
              <h2 className="section-title">Foundation Shade Finder</h2>
              <p className="finder-description">
                Discover your perfect foundation match with Glow Beauty's innovative skin analysis technology. 
                Our AI-powered camera analyzes your unique skin tone and undertones to recommend the ideal 
                foundation shade from our exclusive collection.
              </p>
              <ul className="finder-benefits">
                <li><span className="benefit-icon">✓</span> Accurate skin tone analysis in seconds</li>
                <li><span className="benefit-icon">✓</span> Personalized recommendations from 40+ shades</li>
                <li><span className="benefit-icon">✓</span> Works with all Glow Beauty foundation lines</li>
              </ul>
              <button className="btn" onClick={onOpenCameraModal}>Find Your Shade</button>
            </div>
            <div className="finder-image">
              <img 
                src="/images/Foundationfindersection.png" 
                alt="Glow Beauty Foundation Shade Finder" 
                className="shade-finder-img" 
              />
              <div className="shade-swatches-preview">
                <div className="swatch" style={{backgroundColor: '#F5E2D0'}}></div>
                <div className="swatch" style={{backgroundColor: '#E5C4A9'}}></div>
                <div className="swatch" style={{backgroundColor: '#D4AF8F'}}></div>
                <div className="swatch" style={{backgroundColor: '#BD9271'}}></div>
                <div className="swatch" style={{backgroundColor: '#9A6545'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoundationFinder;