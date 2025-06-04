import React, { useState } from 'react';
import './ToolsProducts.css';
import { Camera, Filter, SortDesc, Heart, X } from 'lucide-react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ToolsProducts = () => {
  const [activePageButton, setActivePageButton] = useState(1);
  const [wishlisted, setWishlisted] = useState({});
  const { addToCart } = useContext(CartContext);
  
  const [selectedProduct, setSelectedProduct] = useState(null);

 
  const products = [
    {
      id: "1",
      image: "../images/originalbeauty.png",
      name: "Original Beauty Blender",
      brand: "Beauty Blender",
      price: "$20.00",
      rating: 5,
      ratingCount: 3245,
      badge: { type: "bestseller", text: "BESTSELLER" },
      description: "The ultimate makeup sponge for a flawless finish. This iconic egg-shaped sponge is designed to evenly blend foundation, concealer, and other cream or liquid makeup. When damp, it doubles in size and becomes super soft, creating an airbrushed effect with minimal product absorption. Reusable and latex-free."
    },
    {
      id: "2",
      image: "../images/Jade.png",
      name: "Jade Face Roller & Gua Sha Set",
      brand: "Mount Lai",
      price: "$34.00",
      rating: 4,
      ratingCount: 1876,
      description: "This dual-ended jade roller and gua sha tool helps improve blood circulation and reduce puffiness. The larger roller is perfect for cheeks, jawline, and forehead, while the smaller one targets under-eye areas and around the nose. The gua sha stone provides deeper facial massage and promotes lymphatic drainage."
    },
    {
      id: "3",
      image: "../images/professional.png",
      name: "Professional Makeup Brush Set",
      brand: "Morphe",
      price: "$48.00",
      rating: 5,
      ratingCount: 987,
      badge: { type: "new", text: "NEW" },
      description: "A comprehensive 12-piece brush collection featuring essential tools for face and eye makeup application. Includes foundation, powder, contour, highlighter, and various eyeshadow brushes. Made with synthetic bristles that are soft, durable, and cruelty-free. The ergonomic handles provide optimal control and precision."
    },
    {
      id: "4",
      image: "../images/promaster.png",
      name: "ProMaster Eyelash Curler",
      brand: "Shu Uemura",
      price: "$22.00",
      rating: 5,
      ratingCount: 2134,
      description: "This award-winning eyelash curler features a curved design that fits most eye shapes for perfect curl without pinching. The silicone padding provides just the right amount of pressure to curl lashes from root to tip without crimping. Creates dramatically curled lashes that last all day."
    },
    {
      id: "5",
      image: "../images/luna3.png",
      name: "Luna 3 Facial Cleansing Brush",
      brand: "FOREO",
      price: "$199.00",
      rating: 5,
      ratingCount: 1543,
      description: "This innovative silicone facial cleansing device uses T-Sonic™ pulsations to provide a deep yet gentle cleanse. Features ultra-soft, hygienic silicone touchpoints that are 35x more hygienic than nylon bristles. Removes 99.5% of dirt, oil, and makeup residue. The app-connected smart device offers personalized skincare routines."
    },
    {
      id: "6",
      image: "../images/supersonic.png",
      name: "Supersonic Hair Dryer",
      brand: "Dyson",
      price: "$399.00",
      originalPrice: "$429.00",
      rating: 5,
      ratingCount: 4321,
      badge: { type: "sale", text: "SALE" },
      description: "Revolutionary hair dryer engineered to protect hair from extreme heat damage. Features intelligent heat control that measures air temperature 20 times per second. The powerful digital motor V9 creates high-pressure, high-velocity airflow for fast drying. Comes with magnetic styling attachments for versatile styling options."
    },
    {
      id: "7",
      image: "../images/LED.png",
      name: "LED Lighted Makeup Mirror",
      brand: "Simplehuman",
      price: "$180.00",
      rating: 4,
      ratingCount: 876,
      description: "This tru-lux light system simulates natural sunlight, allowing you to see subtle variations in your makeup color. Features 5x magnification for detail work and sensor-activated lighting that turns on automatically as your face approaches the mirror. The surgical-grade LED lights won't dim even after many years of use."
    },
    {
      id: "8",
      image: "../images/microneedling.png",
      name: "Microneedling Derma Roller",
      brand: "BeautyBio",
      price: "$68.00",
      rating: 4,
      ratingCount: 654,
      description: "This clinical-grade microneedling tool features 0.3mm stainless steel needles that create micro-channels in the skin to enhance product absorption. Helps improve the appearance of fine lines, wrinkles, and uneven skin texture. The ergonomic handle provides optimal control for precise application."
    },
    {
      id: "9",
      image: "../images/1ceramic.png",
      name: '1" Ceramic Curling Iron',
      brand: "T3",
      price: "$150.00",
      rating: 4,
      ratingCount: 987,
      description: "This professional-grade curling iron features ceramic barrel technology that maintains consistent heat while emitting negative ions to seal the cuticle for smooth, shiny results. Five adjustable heat settings accommodate all hair types and textures. The 1-inch barrel creates versatile, medium-sized curls and waves."
    },
    {
      id: "10",
      image: "../images/precision.png",
      name: "Precision Point Tweezers",
      brand: "Tweezerman",
      price: "$23.00",
      rating: 5,
      ratingCount: 2156,
      badge: { type: "new", text: "NEW" },
      description: "These stainless steel tweezers feature hand-filed tips aligned to grab the smallest, finest hairs with maximum precision. The slant design makes it easy to grab hairs at the root for clean, efficient removal. The perfectly calibrated tension provides the right amount of resistance for optimal control."
    },
    {
      id: "11",
      image: "/images/acylicorganizer.png",
      name: "Acrylic Makeup Organizer",
      brand: "Glow Beauty",
      price: "$32.00",
      rating: 4,
      ratingCount: 543,
      description: "This clear acrylic organizer features multiple compartments designed to store and display your beauty collection. Includes specialized slots for lipsticks, brushes, and palettes, plus larger compartments for bottles and jars. The stackable design allows you to customize the configuration based on your collection size."
    },
    {
      id: "12",
      image: "../images/nano.png",
      name: "Nano Ionic Facial Steamer",
      brand: "Dr. Dennis Gross",
      price: "$119.00",
      originalPrice: "$149.00",
      rating: 4,
      ratingCount: 765,
      badge: { type: "sale", text: "SALE" },
      description: "This professional-quality facial steamer uses nano-ionic technology to produce ultra-fine steam particles that penetrate skin up to 10 times more effectively than regular steam. The wide steam zone provides full-face coverage to open pores, boost circulation, and enhance absorption of skincare products."
    }
  ];

  const handleAddToCart = (product) => {
    const productWithNumericPrice = {
      ...product,
      price: product.price
    };
    
    addToCart(productWithNumericPrice);
  };

  const handleWishlist = (productId, productName) => {
    setWishlisted(prev => {
      const newState = { ...prev, [productId]: !prev[productId] };
      
      if (newState[productId]) {
        alert(`${productName} added to your wishlist!`);
      } else {
        alert(`${productName} removed from your wishlist!`);
      }
      
      return newState;
    });
  };

  
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleFilterButtonClick = () => {
    alert('Filter options would appear in a dropdown or modal in a real application.');
  };

  const handleSortButtonClick = () => {
    alert('Sort options would appear in a dropdown in a real application.');
  };

  const handlePageButtonClick = (pageNumber) => {
    setActivePageButton(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      
      <section className="category-hero">
        <div className="container">
          <h1 className="category-title">Beauty Tools</h1>
          <p className="category-description">Discover professional-quality beauty tools to elevate your routine. From makeup brushes to high-tech devices, find everything you need for flawless application and results.</p>
        </div>
      </section>

      
      <main className="container">
        
        <section className="tool-categories">
          <h2 className="section-title">Shop by Category</h2>
          <div className="category-grid">
            <CategoryCard 
              image="../images/makeuptools.png" 
              name="Makeup Brushes" 
              count={42} 
            />
            <CategoryCard 
              image="../images/sponges.png" 
              name="Sponges & Applicators" 
              count={28} 
            />
            <CategoryCard 
              image="../images/skintools.png" 
              name="Skincare Tools" 
              count={35} 
            />
            <CategoryCard 
              image="../images/hairtool.png" 
              name="Hair Tools" 
              count={23} 
            />
            <CategoryCard 
              image="../images/beautytech.png" 
              name="Beauty Tech" 
              count={19} 
            />
            <CategoryCard 
              image="../images/accessories.png" 
              name="Accessories" 
              count={31} 
            />
          </div>
        </section>

        
        <section className="filter-section">
          <div className="filter-container">
            <button className="filter-button" onClick={handleFilterButtonClick}>
              <Filter className="filter-icon" />
              Filter
            </button>
            <button className="filter-button" onClick={handleFilterButtonClick}>Brand</button>
            <button className="filter-button" onClick={handleFilterButtonClick}>Price</button>
            <button className="filter-button" onClick={handleFilterButtonClick}>Type</button>
            <button className="filter-button" onClick={handleFilterButtonClick}>Rating</button>
          </div>
          <div className="sort-container">
            <button className="sort-button" onClick={handleSortButtonClick}>
              <SortDesc className="sort-icon" />
              Sort by: Featured
            </button>
          </div>
          <div className="results-count">Showing 1-24 of 98 products</div>
        </section>

        {/* Products Grid */}
        <section className="product-grid">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              brand={product.brand}
              price={product.price}
              originalPrice={product.originalPrice}
              rating={product.rating}
              ratingCount={product.ratingCount}
              badge={product.badge}
              wishlisted={wishlisted[product.id]}
              onAddToCart={handleAddToCart}
              onWishlist={handleWishlist}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </section>

        {/* Pagination */}
        <div className="pagination">
          <button className="page-btn prev" onClick={() => activePageButton > 1 && handlePageButtonClick(activePageButton - 1)}>Prev</button>
          <button 
            className={`page-btn ${activePageButton === 1 ? 'active' : ''}`}
            onClick={() => handlePageButtonClick(1)}
          >1</button>
          <button 
            className={`page-btn ${activePageButton === 2 ? 'active' : ''}`}
            onClick={() => handlePageButtonClick(2)}
          >2</button>
          <button 
            className={`page-btn ${activePageButton === 3 ? 'active' : ''}`}
            onClick={() => handlePageButtonClick(3)}
          >3</button>
          <button 
            className={`page-btn ${activePageButton === 4 ? 'active' : ''}`}
            onClick={() => handlePageButtonClick(4)}
          >4</button>
          <button 
            className={`page-btn ${activePageButton === 5 ? 'active' : ''}`}
            onClick={() => handlePageButtonClick(5)}
          >5</button>
          <button className="page-btn next" onClick={() => activePageButton < 5 && handlePageButtonClick(activePageButton + 1)}>Next</button>
        </div>

        {/* How To Section */}
        <section className="how-to-section">
          <h2 className="how-to-title">How To Use Your Beauty Tools</h2>
          <div className="tutorials-grid">
            <TutorialCard 
              image="../images/cleanmakeup.png" 
              title="How to Clean Makeup Brushes" 
              description="Learn the proper techniques for cleaning your makeup brushes to prevent bacteria buildup and extend their lifespan." 
            />
            <TutorialCard 
              image="../images/technology.png" 
              title="Face Roller Techniques" 
              description="Discover how to use jade and rose quartz face rollers to reduce puffiness and promote lymphatic drainage." 
            />
            <TutorialCard 
              image="../images/beautyblender.png" 
              title="Beauty Blender Tips & Tricks" 
              description="Master the art of using a beauty blender for flawless foundation application and seamless blending." 
            />
          </div>
        </section>
      </main>

      {/* Featured Section */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Brands</h2>
          <div className="brand-grid">
            <BrandCard 
              logo="../images/beautylogo.png" 
              name="Beauty Blender" 
            />
            <BrandCard 
              logo="../images/foreologo.png" 
              name="FOREO" 
            />
            <BrandCard 
              logo="../images/dysonlogo.png" 
              name="Dyson" 
            />
            <BrandCard 
              logo="../images/morphelogo.png" 
              name="Morphe" 
            />
            <BrandCard 
              logo="../images/tweezermanlogo.png" 
              name="Tweezerman" 
            />
            <BrandCard 
              logo="../images/t3.png" 
              name="T3" 
            />
          </div>
        </div>
      </section>

      
      {selectedProduct && (
        <div className="product-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProduct(null)}>
              <X size={24} />
            </button>
            <div className="product-modal-details">
              <div className="product-modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
                {selectedProduct.badge && (
                  <span className={`badge ${selectedProduct.badge.type}-badge`}>
                    {selectedProduct.badge.text}
                  </span>
                )}
              </div>
              <div className="product-modal-info">
                <h2 className="product-modal-name">{selectedProduct.name}</h2>
                <p className="product-modal-brand">{selectedProduct.brand}</p>
                <div className="product-modal-rating">
                  <div className="stars">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className="star">
                        {i < selectedProduct.rating ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                  <span className="rating-count">({selectedProduct.ratingCount.toLocaleString()})</span>
                </div>
                <p className="product-modal-price">
                  {selectedProduct.originalPrice && (
                    <span style={{ textDecoration: 'line-through', color: '#999', marginRight: '5px' }}>
                      {selectedProduct.originalPrice}
                    </span>
                  )}
                  {selectedProduct.price}
                </p>
                <div className="product-modal-description">
                  <h3>Description</h3>
                  <p>{selectedProduct.description}</p>
                </div>
                <div className="product-modal-actions">
                  <button 
                    className="add-to-cart" 
                    onClick={() => handleAddToCart(selectedProduct.name)}
                  >
                    Add to Cart
                  </button>
                  <button 
                    className="wishlist-btn"
                    onClick={() => handleWishlist(selectedProduct.id, selectedProduct.name)}
                  >
                    <Heart 
                      className="heart-icon" 
                      fill={wishlisted[selectedProduct.id] ? 'var(--accent-color)' : 'none'} 
                      stroke={wishlisted[selectedProduct.id] ? 'var(--accent-color)' : 'currentColor'}
                    />
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


const CategoryCard = ({ image, name, count }) => {
  return (
    <a href="#" className="category-card">
      <img src={image} alt={name} className="category-img" />
      <div className="category-overlay">
        <div className="category-name">{name}</div>
        <div className="category-count">{count} Products</div>
      </div>
    </a>
  );
};


const ProductCard = ({ 
  id, 
  image, 
  name, 
  brand, 
  price, 
  originalPrice, 
  rating, 
  ratingCount, 
  badge, 
  wishlisted,
  onAddToCart,
  onWishlist,
  onClick
}) => {
  
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i}>
          {i <= rating ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="product-card" onClick={onClick}>
      {badge && <span className={`badge ${badge.type}-badge`}>{badge.text}</span>}
      <img src={image} alt={name} className="product-img" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-brand">{brand}</p>
        <div className="product-rating">
          <div className="stars">{renderStars()}</div>
          <span className="rating-count">({ratingCount.toLocaleString()})</span>
        </div>
        <p className="product-price">
          {originalPrice && (
            <span style={{ textDecoration: 'line-through', color: '#999', marginRight: '5px' }}>
              {originalPrice}
            </span>
          )}
          {price}
        </p>
        <div className="product-actions" onClick={e => e.stopPropagation()}>
          <button className="add-to-cart" onClick={() => onAddToCart(name)}>
            Add to Cart
          </button>
          <button 
            className="wishlist-btn" 
            onClick={() => onWishlist(id, name)}
          >
            <Heart 
              className="heart-icon" 
              fill={wishlisted ? 'var(--accent-color)' : 'none'} 
              stroke={wishlisted ? 'var(--accent-color)' : 'currentColor'} 
            />
          </button>
        </div>
      </div>
    </div>
  );
};


const TutorialCard = ({ image, title, description }) => {
  return (
    <div className="tutorial-card">
      <div className="tutorial-image-container">
        <img src={image} alt={title} className="tutorial-img" />
      </div>
      <div className="tutorial-content">
        <h3 className="tutorial-title">{title}</h3>
        <p className="tutorial-description">{description}</p>
        <a href="#" className="tutorial-link">Watch Tutorial</a>
      </div>
    </div>
  );
};


const BrandCard = ({ logo, name }) => {
  return (
    <a href="#" className="brand-card">
      <img src={logo} alt={name} className="brand-logo" />
      <div className="brand-name">{name}</div>
    </a>
  );
};

export default ToolsProducts;