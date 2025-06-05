import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom"
function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h4>Customer Service</h4>
            <ul>
              <li><a href="/customer-service#">Contact Us</a></li>
              <li><a href="/customer-service#">FAQ</a></li>
              <li><a href="/customer-service#">Shipping & Returns</a></li>
              <li><a href="/customer-service#">Order Tracking</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>About Us</h4>
            <ul>
              <li><a href="/aboutUs#">Our Story</a></li>
              <li><a href="/aboutUs#">Careers</a></li>
              <li><a href="/aboutUs#">Press</a></li>
              <li><a href="/aboutUs#">Sustainability</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="/resources#">Beauty Blog</a></li>
              <li><a href="/resources#">Makeup Tutorials</a></li>
              <li><a href="/resources#">Foundation Guide</a></li>
              <li><a href="/resources#">Skincare Routine</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Connect With Us</h4>
            <ul>
              <li><a href="https://instagram.com/glowbeauty" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://facebook.com/glowbeauty" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com/glowbeauty" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://youtube.com/glowbeauty" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {currentYear} Glow Beauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;