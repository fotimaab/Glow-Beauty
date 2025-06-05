import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './HairProducts.css';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';


const hairHeroBg = process.env.PUBLIC_URL + '/images/hair-hero-bg.jpg';

const HairProducts = () => {
  
  const [wishlistItems, setWishlistItems] = useState({});
  const [activePage, setActivePage] = useState(1);
  const {  language } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);
  
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [detailModalVisible, setDetailModalVisible] = useState(false);

  
  const products = [
    {
      id: 1,
      name: 'Hydrating Shampoo',
      brand: 'Olaplex',
      price: '28.00',
      image: '/images/hydratingshampoo.png',
      rating: 5,
      ratingCount: 2345,
      badge: { type: 'bestseller', text: 'BESTSELLER' },
      description: "A moisturizing shampoo that gently cleanses while providing intense hydration to dry, damaged hair. Formulated with Olaplex's patented bond-building technology to repair and strengthen hair structure."
    },
    {
      id: 2,
      name: 'Hydrating Conditioner',
      brand: 'Olaplex',
      price: '28.00',
      image: '/images/hydratingconditioner.png',
      rating: 5,
      ratingCount: 1987,
      description: "An intensely hydrating conditioner that detangles and smooths while delivering moisture to dry, damaged hair. Formulated with Olaplex's bond-building technology to repair and protect hair from daily damage."
    },
    {
      id: 3,
      name: 'No.3 Hair Perfector',
      brand: 'Olaplex',
      price: '30.00',
      image: '/images/no3hairprotector.png',
      rating: 5,
      ratingCount: 3432,
      badge: { type: 'new', text: 'NEW' },
      description: 'An innovative pre-shampoo treatment that reduces breakage and visibly strengthens hair, improving its look and feel. This concentrated formula works on a molecular level to repair and restore damaged hair structures.'
    },
    {
      id: 4,
      name: 'Nourishing Hair Oil',
      brand: 'Moroccanoil',
      price: '34.00',
      image: '/images/nourishing.png',
      rating: 5,
      ratingCount: 2876,
      description: 'A versatile, argan oil-infused hair treatment that creates shine and smoothness while protecting against environmental damage and heat styling. Ideal for all hair types, it absorbs quickly to immediately improve manageability.'
    },
    {
      id: 5,
      name: 'Intense Hydrating Mask',
      brand: 'Briogeo',
      price: '38.00',
      image: '/images/hydrationmasks.png',
      rating: 4,
      ratingCount: 1543,
      description: "A deeply nourishing weekly treatment mask for dry, damaged hair. Formulated with 98% naturally-derived ingredients including B-vitamins, rosehip oil, and argan oil to restore hydration and enhance hair's strength and elasticity."
    },
    {
      id: 6,
      name: 'Curl Defining Cream',
      brand: 'DevaCurl',
      price: '22.00',
      image: '/images/curldefining.png',
      rating: 4,
      ratingCount: 932,
      originalPrice: '28.00',
      badge: { type: 'sale', text: 'SALE' },
      description: 'A botanical blend cream that enhances natural curl definition while providing moisture and eliminating frizz. Specifically designed for wavy, curly, and coily hair types, this formula leaves curls soft, shiny, and bounce-worthy.'
    },
    {
      id: 7,
      name: 'Invisible Dry Shampoo',
      brand: 'Living Proof',
      price: '26.00',
      image: '/images/invisibledry.png',
      rating: 5,
      ratingCount: 1876,
      description: 'A lightweight dry shampoo that instantly absorbs oil, sweat, and odor without leaving visible residue on any hair color. The time-released fragrance technology keeps hair smelling fresh all day.'
    },
    {
      id: 8,
      name: 'Leave-In Conditioner',
      brand: 'Ouai',
      price: '28.00',
      image: '/images/liavein.png',
      rating: 4,
      ratingCount: 1234,
      description: 'A multi-benefit leave-in conditioner that detangles, provides heat protection up to 450°F, and fights frizz. Enriched with vitamin E, amino acids, and tamarind seed extract to hydrate, repair, and protect hair.'
    },
    {
      id: 9,
      name: 'Texturizing Hair Spray',
      brand: 'Ouai',
      price: '26.00',
      image: '/images/texturizing.png',
      rating: 4,
      ratingCount: 987,
      description: 'A dry finishing spray that gives hair that perfectly imperfect texture with the perfect amount of shine. Provides medium hold for all-day style and volume while being buildable and brushable.'
    },
    {
      id: 10,
      name: 'Scalp Revival Treatment',
      brand: 'Briogeo',
      price: '42.00',
      image: '/images/scalprevival.png',
      rating: 5,
      ratingCount: 765,
      badge: { type: 'new', text: 'NEW' },
      description: 'A soothing treatment serum that addresses dry, itchy scalp while supporting a healthy scalp microbiome. Contains hyaluronic acid, aloe vera, and a prebiotic-probiotic complex to balance and hydrate the scalp.'
    },
    {
      id: 11,
      name: 'Frizz Defense Serum',
      brand: 'Living Proof',
      price: '32.00',
      image: '/images/frizz.png',
      rating: 4,
      ratingCount: 543,
      description: 'A lightweight serum that blocks humidity and prevents frizz for up to 12 hours. The patented Healthy Hair Molecule creates an invisible shield around hair strands to lock in moisture and repel environmental aggressors.'
    },
    {
      id: 12,
      name: 'Custom Hair Color Kit',
      brand: 'Madison Reed',
      price: '22.00',
      image: '/images/custom.png',
      rating: 4,
      ratingCount: 876,
      originalPrice: '28.00',
      badge: { type: 'sale', text: 'SALE' },
      description: 'A professional-grade, at-home hair color kit free from ammonia, PPD, resorcinol, and parabens. The multi-tonal formula creates dimension and shine while covering grays and leaving hair feeling nourished and healthy.'
    }
  ];

  
  const handleAddToCart = (product) => {
    const productWithNumericPrice = {
      ...product,
      price: product.price
    };
    
    addToCart(productWithNumericPrice);
  };

  const toggleWishlist = (productId, productName) => {
    setWishlistItems(prev => {
      const newWishlistItems = {...prev};
      newWishlistItems[productId] = !prev[productId];
      
      if (newWishlistItems[productId]) {
        alert(`${productName} added to your wishlist!`);
      } else {
        alert(`${productName} removed from your wishlist!`);
      }
      
      return newWishlistItems;
    });
  };

  const handleFilterClick = () => {
    alert('Filter options would appear in a dropdown or modal in a real application.');
  };

  const handleSortClick = () => {
    alert('Sort options would appear in a dropdown in a real application.');
  };

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  
  const showProductDetails = (product) => {
    setSelectedProduct(product);
    setDetailModalVisible(true);
  };

  return (
    <>
      
      <section className="category-hero" style={{ backgroundImage: `url(${hairHeroBg})` }}>
        <div className="container">
          <div className="category-content">
            <h1 className="category-title">Hair Care Collection</h1>
            <p className="category-description">
              Discover premium hair care products for every hair type and concern. 
              From shampoos to styling products, find everything you need for healthy, beautiful hair.
            </p>
          </div>
        </div>
      </section>

      
      <main className="container">
        
        <section className="hair-type-section">
          <h2 className="section-subtitle">Shop by Hair Type</h2>
          <div className="hair-type-grid">
            <Link to="#" className="hair-type-card">
              <img src="/images/straight.png" alt="Straight Hair" className="hair-type-img" />
              <div className="hair-type-name">Straight</div>
            </Link>
            <Link to="#" className="hair-type-card">
              <img src="/images/wavy.png" alt="Wavy Hair" className="hair-type-img" />
              <div className="hair-type-name">Wavy</div>
            </Link>
            <Link to="#" className="hair-type-card">
              <img src="/images/curlyhair.png" alt="Curly Hair" className="hair-type-img" />
              <div className="hair-type-name">Curly</div>
            </Link>
            <Link to="#" className="hair-type-card">
              <img src="/images/coily.png" alt="Coily Hair" className="hair-type-img" />
              <div className="hair-type-name">Coily</div>
            </Link>
            <Link to="#" className="hair-type-card">
              <img src="/images/thinfinehair.png" alt="Fine Hair" className="hair-type-img" />
              <div className="hair-type-name">Fine</div>
            </Link>
            <Link to="#" className="hair-type-card">
              <img src="/images/thinkhair.png" alt="Thick Hair" className="hair-type-img" />
              <div className="hair-type-name">Thick</div>
            </Link>
          </div>
        </section>

        
        <section className="subcategories">
          <h2 className="subcategory-title">Categories</h2>
          <div className="subcategory-grid">
            <Link to="#" className="subcategory-card">
              <img src="/images/shampoo.png" alt="Shampoo" className="subcategory-img" />
              <div className="subcategory-name">Shampoo</div>
            </Link>
            <Link to="#" className="subcategory-card">
              <img src="/images/conditioner.png" alt="Conditioner" className="subcategory-img" />
              <div className="subcategory-name">Conditioner</div>
            </Link>
            <Link to="#" className="subcategory-card">
              <img src="/images/treatments.png" alt="Treatments" className="subcategory-img" />
              <div className="subcategory-name">Treatments</div>
            </Link>
            <Link to="#" className="subcategory-card">
              <img src="/images/stylingproducts.png" alt="Styling Products" className="subcategory-img" />
              <div className="subcategory-name">Styling</div>
            </Link>
            <Link to="#" className="subcategory-card">
              <img src="/images/haircolor.png" alt="Hair Color" className="subcategory-img" />
              <div className="subcategory-name">Hair Color</div>
            </Link>
            <Link to="#" className="subcategory-card">
              <img src="/images/Hairtool.png" alt="Hair Tools" className="subcategory-img" />
              <div className="subcategory-name">Tools</div>
            </Link>
          </div>
        </section>

        
        <section className="filter-section">
          <div className="filter-container">
            <button className="filter-button" onClick={handleFilterClick}>
              <svg className="filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 21v-7m0-4V3m8 18v-4m0-7V3m8 18v-11m0-4V3M1 14h6m2-6h6m2 8h6"/>
              </svg>
              Filter
            </button>
            <button className="filter-button" onClick={handleFilterClick}>Brand</button>
            <button className="filter-button" onClick={handleFilterClick}>Price</button>
            <button className="filter-button" onClick={handleFilterClick}>Hair Type</button>
            <button className="filter-button" onClick={handleFilterClick}>Concern</button>
          </div>
          <div className="sort-container">
            <button className="sort-button" onClick={handleSortClick}>
              <svg className="sort-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M6 12h12m-9 6h6"/>
              </svg>
              Sort by: Featured
            </button>
          </div>
          <div className="results-count">Showing 1-24 of 112 products</div>
        </section>

        
        <section className="product-grid">
          {products.map(product => (
            <div className="product-card" key={product.id} onClick={() => showProductDetails(product)}>
              {product.badge && (
                <span className={`badge ${product.badge.type}-badge`}>{product.badge.text}</span>
              )}
              <img src={product.image} alt={product.name} className="product-img" />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-brand">{product.brand}</p>
                <div className="product-rating">
                  <div className="stars">{'★'.repeat(product.rating)}{'☆'.repeat(5-product.rating)}</div>
                  <span className="rating-count">({product.ratingCount.toLocaleString()})</span>
                </div>
                <p className="product-price">
                  {product.originalPrice && (
                    <span style={{ textDecoration: 'line-through', color: '#999', marginRight: '5px' }}>
                      ${product.originalPrice}
                    </span>
                  )}
                  ${product.price}
                </p>
                <div className="product-actions">
                  <button 
                    className="add-to-cart" 
                    onClick={(e) => {
                      e.stopPropagation(); 
                      handleAddToCart(product);
                    }}
                  >
                    Add to Cart
                  </button>
                  <button 
                    className="wishlist-btn"
                    onClick={(e) => {
                      e.stopPropagation(); 
                      toggleWishlist(product.id, product.name);
                    }}
                  >
                    <svg 
                      className="heart-icon" 
                      viewBox="0 0 24 24"
                      fill={wishlistItems[product.id] ? 'var(--accent-color)' : 'none'}
                      stroke={wishlistItems[product.id] ? 'var(--accent-color)' : 'currentColor'}
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        
        <div className="pagination">
          <button 
            className="page-btn prev" 
            onClick={() => activePage > 1 && handlePageClick(activePage - 1)}
          >
            Prev
          </button>
          {[1, 2, 3, 4, 5].map(page => (
            <button 
              key={page}
              className={`page-btn ${activePage === page ? 'active' : ''}`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          ))}
          <button 
            className="page-btn next"
            onClick={() => activePage < 5 && handlePageClick(activePage + 1)}
          >
            Next
          </button>
        </div>

        
        <section className="hair-tips-section">
          <h2 className="tips-title">Expert Hair Care Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <img src="/images/washingtips.png" alt="Washing Tips" className="tip-img" />
              <div className="tip-content">
                <h3 className="tip-title">How Often Should You Wash Your Hair?</h3>
                <p className="tip-description">Learn the ideal washing frequency for your specific hair type and how to maintain healthy, balanced hair between washes.</p>
                <Link to="#" className="tip-link">Read More</Link>
              </div>
            </div>
            <div className="tip-card">
              <img src="/images/hairprotection.png" alt="Heat Protection" className="tip-img" />
              <div className="tip-content">
                <h3 className="tip-title">Protecting Your Hair from Heat Damage</h3>
                <p className="tip-description">Discover essential tips for minimizing heat damage while still achieving your desired styles with hot tools.</p>
                <Link to="#" className="tip-link">Read More</Link>
              </div>
            </div>
            <div className="tip-card">
              <img src="/images/haircolorcare.png" alt="Hair Color Care" className="tip-img" />
              <div className="tip-content">
                <h3 className="tip-title">Maintaining Vibrant Hair Color</h3>
                <p className="tip-description">Learn how to keep your color-treated hair looking fresh and vibrant between salon visits with these expert tips.</p>
                <Link to="#" className="tip-link">Read More</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Brands</h2>
          <div className="subcategory-grid">
            <Link to="#" className="subcategory-card">
              <img src="/images/olaplex.png" alt="Olaplex" className="subcategory-img" />
              <div className="subcategory-name">Olaplex</div>
            </Link>
            <Link to="#" className="subcategory-card">
              <img src="/images/Maroccanoil.png" alt="Moroccanoil" className="subcategory-img" />
              <div className="subcategory-name">Moroccanoil</div>
            </Link>
            <Link to="#" className="subcategory-card">
              <img src="/images/briogeo.png" alt="Briogeo" className="subcategory-img" />
              <div className="subcategory-name">Briogeo</div>
            </Link>
            <Link to="#" className="subcategory-card">
              <img src="/images/livingproof.png" alt="Living Proof" className="subcategory-img" />
              <div className="subcategory-name">Living Proof</div>
            </Link>
            <Link to="#" className="subcategory-card">
              <img src="/images/ouau.png" alt="Ouai" className="subcategory-img" />
              <div className="subcategory-name">Ouai</div>
            </Link>
            <Link to="#" className="subcategory-card">
              <img src="/images/devacurl.png" alt="DevaCurl" className="subcategory-img" />
              <div className="subcategory-name">DevaCurl</div>
            </Link>
          </div>
        </div>
      </section>

      
      {detailModalVisible && selectedProduct && (
        <div className="product-detail-modal">
          <div className="product-detail-content">
            <button 
              className="close-modal" 
              onClick={() => setDetailModalVisible(false)}
            >
              &times;
            </button>
            <div className="product-detail-grid">
              <div className="product-detail-image">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                />
                {selectedProduct.badge && (
                  <span className={`badge ${selectedProduct.badge.type}-badge detail-badge`}>
                    {selectedProduct.badge.text}
                  </span>
                )}
              </div>
              <div className="product-detail-info">
                <h2>{selectedProduct.name}</h2>
                <p className="detail-brand">{selectedProduct.brand}</p>
                <div className="product-rating">
                  <div className="stars">{'★'.repeat(selectedProduct.rating)}{'☆'.repeat(5-selectedProduct.rating)}</div>
                  <span className="rating-count">({selectedProduct.ratingCount.toLocaleString()})</span>
                </div>
                <p className="detail-price">
                  {selectedProduct.originalPrice && (
                    <span style={{ textDecoration: 'line-through', color: '#999', marginRight: '5px' }}>
                      ${selectedProduct.originalPrice}
                    </span>
                  )}
                  ${selectedProduct.price}
                </p>
                <div className="product-description">
                  <h3>Description</h3>
                  <p>{selectedProduct.description}</p>
                </div>
                <div className="product-detail-actions">
                  <button 
                    className="add-to-cart-detail" 
                    onClick={() => {
                      handleAddToCart(selectedProduct.name);
                      setDetailModalVisible(false);
                    }}
                  >
                    Add to Cart
                  </button>
                  <button 
                    className="wishlist-btn-detail"
                    onClick={() => toggleWishlist(selectedProduct.id, selectedProduct.name)}
                  >
                    <svg 
                      className="heart-icon" 
                      viewBox="0 0 24 24"
                      fill={wishlistItems[selectedProduct.id] ? 'var(--accent-color)' : 'none'}
                      stroke={wishlistItems[selectedProduct.id] ? 'var(--accent-color)' : 'currentColor'}
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
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

export default HairProducts;