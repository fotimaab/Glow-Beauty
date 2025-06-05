import React, { useState, useEffect, useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
// import { CartContext } from '../context/CartContext';

function Header({ onOpenCameraModal }) {
  const [language, setLanguage] = useState('EN');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  const { currentUser, changeLanguage } = useContext(AuthContext);

  // Get cart context
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount, } = useContext(CartContext);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      setLanguage(savedLanguage === 'en' ? 'EN' : savedLanguage === 'ru' ? 'РУ' : 'UZ');
    }
  }, []);

  const handleLanguageChange = (lang, display) => {
    setLanguage(display);
    localStorage.setItem('selectedLanguage', lang);
    changeLanguage(lang);
    setIsDropdownOpen(false);
  };

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isCartOpen && !event.target.closest('.cart-container')) {
        setIsCartOpen(false);
      }
      if (isDropdownOpen && !event.target.closest('.language-selector')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen, isDropdownOpen]);
  // useEffect(() => {
  //   if (user) return;
  //   setUser(JSON?.parse(localStorage?.getItem('user')))
  // }, [currentUser])


  return (
    <header>
      <div className="container">
        <div className="header-top">
          <Link to="/" className="logo">GLOW BEAUTY</Link>
          <div className="user-nav">
            {currentUser?.firstName === undefined ? <Link to="/signin">Sign Up</Link> : <div className=''>
              <span>
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <circle cx="12" cy="12" r="11" stroke="black" stroke-width="2" />
                  <circle cx="12" cy="9" r="3" fill="black" />
                  <path d="M6 18c0-2.5 3-4 6-4s6 1.5 6 4" fill="black" />
                </svg>
              </span>

              <Link to="/account">{currentUser?.firstName}</Link></div>}


            {/* Shopping Cart */}
            <div className="cart-container">
              <button className="cart-button" onClick={handleCartToggle}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black">
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 
           0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 
           14l.84-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 
           0 20 3H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 
           14.37 5.48 16 7 16h12v-2H7.16z"/>
                </svg>

                {getCartCount() > 0 && (
                  <span className="cart-count">{getCartCount()}</span>
                )}
              </button>

              {/* Cart Dropdown */}
              {isCartOpen && (
                <div className="cart-dropdown">
                  <div className="cart-header">
                    <h3>Shopping Cart ({getCartCount()})</h3>
                    <button className="close-cart" onClick={() => setIsCartOpen(false)}>
                      ×
                    </button>
                  </div>

                  <div className="cart-items">
                    {cartItems.length === 0 ? (
                      <div className="empty-cart">
                        <p>Your cart is empty</p>
                        <Link to="/new" onClick={() => setIsCartOpen(false)}>
                          Continue Shopping
                        </Link>
                      </div>
                    ) : (
                      <>
                        {cartItems.map(item => (
                          <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                              <h4 className="cart-item-name">{item.name}</h4>
                              <p className="cart-item-brand">{item.brand}</p>
                              <div className="cart-item-controls">
                                <div className="quantity-controls">
                                  <button
                                    className="quantity-btn"
                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                  >
                                    -
                                  </button>
                                  <span className="quantity">{item.quantity}</span>
                                  <button
                                    className="quantity-btn"
                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                  >
                                    +
                                  </button>
                                </div>
                                <button
                                  className="remove-btn"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  Remove
                                </button>
                              </div>
                              <p className="cart-item-price">
                                ${(typeof item.price === 'string'
                                  ? parseFloat(item.price.replace('$', '')) * item.quantity
                                  : item.price * item.quantity
                                ).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        ))}

                        <div className="cart-footer">
                          <div className="cart-total">
                            <strong>Total: ${getCartTotal().toFixed(2)}</strong>
                          </div>
                          <div className="cart-actions">
                            <Link
                              to="/basket"
                              className="view-cart-btn"
                              onClick={() => setIsCartOpen(false)}
                            >
                              View Cart
                            </Link>
                            <Link
                              to="/checkout"
                              className="checkout-btn"
                              onClick={() => setIsCartOpen(false)}
                            >
                              Checkout
                            </Link>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="language-selector">
              <button
                className="language-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {language}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="language-dropdown">
                  <a href="#" onClick={(e) => {
                    e.preventDefault();
                    handleLanguageChange('en', 'EN');
                  }}>English</a>
                  <a href="#" onClick={(e) => {
                    e.preventDefault();
                    handleLanguageChange('ru', 'РУ');
                  }}>Русский</a>
                  <a href="#" onClick={(e) => {
                    e.preventDefault();
                    handleLanguageChange('uz', 'UZ');
                  }}>O'zbek</a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="search-container">
          <input type="text" className="search-bar" placeholder="Search for products, brands..." />
          <button className="camera-button" onClick={onOpenCameraModal} title="Find foundation match using camera">
            <svg className="camera-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
          </button>
        </div>

        <nav className="main-nav">
          <ul>
            <li><Link to="/new">New</Link></li>
            <li><Link to="/makeup">Makeup</Link></li>
            <li><Link to="/skincare">Skincare</Link></li>
            <li><Link to="/fragrance">Fragrance</Link></li>
            <li><Link to="/hair">Hair</Link></li>
            <li><Link to="/tools">Tools</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;