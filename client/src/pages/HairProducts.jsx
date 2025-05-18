import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FragranceProducts.css';


const fragranceHeroBgImg = process.env.PUBLIC_URL + '/images/fragrance-hero-bg.jpg';

const FragranceProducts = () => {
  
  const [showCameraModal, setShowCameraModal] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');
  const [cameraStream, setCameraStream] = useState(null);
  const [facingMode, setFacingMode] = useState('user');
  const [showProcessingMessage, setShowProcessingMessage] = useState(false);
  const [wishlistItems, setWishlistItems] = useState({});
  const [activePage, setActivePage] = useState(1);
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResults, setQuizResults] = useState(null);
  const [quizLoading, setQuizLoading] = useState(false);

  const cameraFeedRef = useRef(null);
  const cameraCanvasRef = useRef(null);
  const uploadPhotoRef = useRef(null);
  
  
  const fragranceTypes = [
    { id: 1, name: "Perfume", image: "/images/perfume.png" },
    { id: 2, name: "Eau de Parfum", image: "/images/eau de parfum.png" },
    { id: 3, name: "Eau de Toilette", image: "/images/eau de toilette.png" },
    { id: 4, name: "Cologne", image: "/images/cologne.png" },
    { id: 5, name: "Body Mist", image: "/images/bodymist.png" },
    { id: 6, name: "Travel Size", image: "/images/travek size.png" }
  ];
  
  
  const featuredBrands = [
    { id: 1, name: "Chanel", logo: "/images/chanel logo.png" },
    { id: 2, name: "Dior", logo: "/images/dior logo.png" },
    { id: 3, name: "Gucci", logo: "/images/gucci logo.png" },
    { id: 4, name: "Yves Saint Laurent", logo: "/images/ysl logo.png" },
    { id: 5, name: "Giorgio Armani", logo: "/images/armani logo.png" },
    { id: 6, name: "Tom Ford", logo: "/images/tomford logo.png" },
    { id: 7, name: "Jo Malone", logo: "/images/jomalone logo.png" },
    { id: 8, name: "Versace", logo: "/images/versace logo.png" },
    { id: 9, name: "Dolce & Gabbana", logo: "/images/dg logo.png" },
    { id: 10, name: "Lancôme", logo: "/images/lancome logo.png" },
    { id: 11, name: "Burberry", logo: "/images/burberry logo.png" },
    { id: 12, name: "Paco Rabanne", logo: "/images/paco logo.png" }
  ];

  
  const fragranceProducts = [
    {
      id: "prod1",
      name: "Bloom Eau de Parfum",
      brand: "Gucci",
      rating: "★★★★★",
      ratingCount: "2,345",
      price: "$135.00",
      image: "/images/Bloom Eau de Parfum.png",
      badge: "BESTSELLER",
      description: "A rich floral scent featuring Rangoon Creeper, jasmine bud, and tuberose for a modern, elegant white floral fragrance. Created by master perfumer Alberto Morillas under Alessandro Michele's creative direction, it embodies authenticity and vitality in a natural white floral scent."
    },
    
    {
      id: "prod18",
      name: "1 Million",
      brand: "Paco Rabanne",
      rating: "★★★★☆",
      ratingCount: "3,210",
      price: "$92.00",
      image: "../images/1 Million.png", // Fixed this path
      description: "A daring, sensual men's fragrance that combines fresh grapefruit, red orange, mint, and rose with warm cinnamon, spices, leather, and woody notes. Bold and assertive, this scent embodies luxury and makes a seductive statement."
    }
  ];

  
  const scentFamilies = [
    { id: 1, name: "Floral", description: "Rose, Jasmine, Lily, Peony", image: "/images/floral.png" },
    { id: 2, name: "Fresh", description: "Citrus, Green, Aquatic, Fruity", image: "/images/fresh.png" },
    { id: 3, name: "Oriental", description: "Amber, Vanilla, Spices, Incense", image: "/images/oriental.png" },
    { id: 4, name: "Woody", description: "Cedar, Sandalwood, Vetiver, Oud", image: "/images/woody.png" }
  ];

 

  return (
    <>
      
      {showCameraModal && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <span className="close-modal" onClick={() => setShowCameraModal(false)}>&times;</span>
            <h2 id="camera-modal-title">{getText('camera-modal-title')}</h2>
            <p id="camera-modal-text">{getText('camera-modal-text')}</p>
            <div className="camera-container">
              <video ref={cameraFeedRef} id="camera-feed" autoPlay playsInline></video>
              <canvas ref={cameraCanvasRef} id="camera-canvas" style={{ display: 'none' }}></canvas>
            </div>
            <div className="camera-controls">
              <button id="take-photo-btn" onClick={takePhoto}>{getText('take-photo-btn')}</button>
              <button id="switch-camera-btn" onClick={() => setFacingMode(prev => prev === 'user' ? 'environment' : 'user')}>
                {getText('switch-camera-btn')}
              </button>
              <input 
                type="file" 
                id="upload-photo" 
                ref={uploadPhotoRef}
                accept="image/*"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
              <label htmlFor="upload-photo" id="upload-label">{getText('upload-label')}</label>
            </div>
            {showProcessingMessage && (
              <div id="processing-message">
                <p>Processing your image...</p>
                <div className="loader"></div>
              </div>
            )}
          </div>
        </div>
      )}

      
      
      <section className="category-hero" style={{ backgroundImage: `url(${fragranceHeroBgImg})` }}>
        <div className="container">
          <div className="category-content">
            <h1 className="category-title">{getText('category-title')}</h1>
            <p className="category-description">{getText('category-description')}</p>
          </div>
        </div>
      </section>

      <main className="container">
        
        <section className="fragrance-types">
          <h2 className="section-title">{getText('section-title-type')}</h2>
          <div className="type-grid">
            {fragranceTypes.map(type => (
              <Link to="#" key={type.id} className="type-card">
                <div className="type-img-container">
                  <img src={type.image} alt={type.name} className="type-img" />
                </div>
                <div className="type-name">{type.name}</div>
              </Link>
            ))}
          </div>
        </section>

        
        <section className="scent-families">
          <h2 className="section-subtitle">{getText('section-title-scent')}</h2>
          <div className="scent-grid">
            {scentFamilies.map(scent => (
              <Link to="#" key={scent.id} className="scent-card">
                <img src={scent.image} alt={scent.name} className="scent-img" />
                <div className="scent-overlay">
                  <div className="scent-name">{scent.name}</div>
                  <div className="scent-description">{scent.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        
      </main>

      
      {showDetailsModal && selectedProduct && (
        <div className="product-details-modal">
          <div className="modal-content">
            <span className="close-modal" onClick={() => setShowDetailsModal(false)}>&times;</span>
            <div className="product-details-container">
              <div className="product-details-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
                {selectedProduct.badge && (
                  <span className={`badge ${selectedProduct.badge.toLowerCase()}-badge`}>
                    {selectedProduct.badge}
                  </span>
                )}
              </div>
              <div className="product-details-info">
                <h2>{selectedProduct.name}</h2>
                <p className="product-brand">{selectedProduct.brand}</p>
                <div className="product-rating">
                  <div className="stars">{selectedProduct.rating}</div>
                  <span className="rating-count">({selectedProduct.ratingCount})</span>
                </div>
                <p className="product-price">
                  {selectedProduct.sale_price ? (
                    <>
                      <span className="original-price">{selectedProduct.price}</span> {selectedProduct.sale_price}
                    </>
                  ) : (
                    selectedProduct.price
                  )}
                </p>
                <div className="product-description">
                  <h3>{getText('description')}</h3>
                  <p>{selectedProduct.description}</p>
                </div>
                <div className="product-actions detail-actions">
                  <button 
                    className="add-to-cart" 
                    onClick={() => handleAddToCart(selectedProduct.name)}
                  >
                    Add to Cart
                  </button>
                  <button 
                    className="wishlist-btn"
                    onClick={() => handleToggleWishlist(selectedProduct.id, selectedProduct.name)}
                  >
                    <svg 
                      className="heart-icon" 
                      viewBox="0 0 24 24" 
                      fill={wishlistItems[selectedProduct.id] ? "var(--accent-color)" : "none"} 
                      stroke={wishlistItems[selectedProduct.id] ? "var(--accent-color)" : "currentColor"}
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FragranceProducts;