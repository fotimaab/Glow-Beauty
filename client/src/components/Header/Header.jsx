import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
function Header({ onOpenCameraModal }) {
  const [language, setLanguage] = useState('EN');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      setLanguage(savedLanguage === 'en' ? 'EN' : savedLanguage === 'ru' ? 'РУ' : 'UZ');
    }
  }, []);
  
  const handleLanguageChange = (lang, display) => {
    setLanguage(display);
    localStorage.setItem('selectedLanguage', lang);
    setIsDropdownOpen(false);
  };
  console.log(language)
  return (
    <header>
      <div className="container">
        <div className="header-top">
          <a href="/" className="logo">GLOW BEAUTY</a>
          <div className="user-nav">
            <a href="/signin">Sign In</a>
            <div className="language-selector">
              <button 
                className="language-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {language}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="language-dropdown">
                  <a href="#" onClick={() => handleLanguageChange('en', 'EN')}>English</a>
                  <a href="#" onClick={() => handleLanguageChange('ru', 'РУ')}>Русский</a>
                  <a href="#" onClick={() => handleLanguageChange('uz', 'UZ')}>O'zbek</a>
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