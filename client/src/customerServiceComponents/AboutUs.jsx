import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    
    
    console.log('Newsletter subscription:', email);
    
    alert('Thank you for subscribing to our newsletter!');
    e.target.reset();
  };

  return (
    <>
   
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">About Glow Beauty</h1>
          <p className="hero-subtitle">Discover our story, mission, and the passionate team behind your favorite beauty products</p>
        </div>
      </section>

      
      <section className="story-section" id="our-story">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <p className="section-subtitle">How Glow Beauty came to life and our journey to redefine beauty standards</p>
          
          <div className="story-container">
            <div className="story-image">
              <img src="/images/founder.png" alt="Glow Beauty Founder" />
            </div>
            <div className="story-content">
              <h3>From Passion to Purpose</h3>
              <p>Glow Beauty was founded in 2018 by Emma Chen, a former dermatologist with a passion for creating skincare and makeup products that celebrate diversity and promote skin health. After years of seeing patients struggle to find products that truly worked for their unique skin types and tones, Emma decided to create a beauty brand that would prioritize inclusivity, quality ingredients, and real results.</p>
              
              <p>Starting with just five products developed in her home kitchen, Emma's formulations quickly gained popularity through word of mouth. What began as a small passion project soon blossomed into a full range of skincare and cosmetics that garnered attention for their effectiveness and commitment to clean beauty.</p>
              
              <p className="highlight">"I wanted to create products that make people feel confident in their own skin, not products that make them feel like they need to hide or change who they are." - Emma Chen, Founder</p>
              
              <p>Today, Glow Beauty offers over 200 products across skincare, makeup, fragrance, and haircare categories. We remain committed to our founding principles: creating high-quality, inclusive beauty products that enhance your natural beauty rather than masking it.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">The core principles that guide everything we do at Glow Beauty</p>
          
          <div className="values-grid">
            
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="value-title">Inclusivity</h3>
              <p className="value-desc">We believe beauty comes in all shapes, sizes, colors, and ages. Our products are designed and tested on diverse skin types and tones to ensure they work for everyone, not just a select few.</p>
            </div>
            
            
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="value-title">Safety First</h3>
              <p className="value-desc">We rigorously test all our formulations and maintain a strict "no-harm" ingredient policy. We're committed to creating products that are safe for both people and the planet.</p>
            </div>
            
            
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="value-title">Sustainability</h3>
              <p className="value-desc">We're committed to reducing our environmental footprint through sustainable sourcing, eco-friendly packaging, and carbon-neutral shipping practices.</p>
            </div>
            
            
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="value-title">Transparency</h3>
              <p className="value-desc">We believe in being honest about what goes into our products, how they're made, and what results you can realistically expect. No exaggerated claims, just authentic beauty.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">The passionate individuals behind Glow Beauty</p>
          
          <div className="team-grid">
            
            <div className="team-card">
              <div className="team-image">
                <img src="/images/Emmachen.png" alt="Emma Chen" />
              </div>
              <h3 className="team-name">Emma Chen</h3>
              <p className="team-role">Founder & CEO</p>
              <p className="team-bio">Former dermatologist with a passion for inclusive beauty and skin health. Emma oversees product development and the company's overall vision.</p>
              <div className="team-social">
                <a href="#" className="social-link" aria-label="Instagram">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Facebook">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
            
           
            <div className="team-card">
              <div className="team-image">
                <img src="/images/davidkim.png" alt="David Kim" />
              </div>
              <h3 className="team-name">David Kim</h3>
              <p className="team-role">Chief Product Officer</p>
              <p className="team-bio">With 15+ years in cosmetic chemistry, David leads our product innovation team and ensures all formulations meet our high standards.</p>
              <div className="team-social">
                <a href="#" className="social-link" aria-label="Instagram">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            
            <div className="team-card">
              <div className="team-image">
                <img src="/images/mayapoter.png" alt="Maya Patel" />
              </div>
              <h3 className="team-name">Maya Patel</h3>
              <p className="team-role">Chief Marketing Officer</p>
              <p className="team-bio">A digital marketing expert with a background in beauty and fashion, Maya leads our brand strategy and customer experience initiatives.</p>
              <div className="team-social">
                <a href="#" className="social-link" aria-label="Instagram">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
            
            
            <div className="team-card">
              <div className="team-image">
                <img src="/images/jameswilson.png" alt="James Wilson" />
              </div>
              <h3 className="team-name">James Wilson</h3>
              <p className="team-role">Chief Sustainability Officer</p>
              <p className="team-bio">An environmental scientist by training, James ensures our operations and supply chain meet the highest sustainability standards.</p>
              <div className="team-social">
                <a href="#" className="social-link" aria-label="Instagram">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="careers-section" id="careers">
        <div className="container">
          <h2 className="section-title">Join Our Team</h2>
          <p className="section-subtitle">Discover career opportunities at Glow Beauty</p>
          
          <div className="careers-content">
            <div className="careers-text">
              <h3>Grow With Us</h3>
              <p>At Glow Beauty, we're always looking for passionate, creative individuals who share our vision for inclusive, sustainable beauty. Our team members come from diverse backgrounds but share a common goal: to help people feel confident and beautiful in their own skin.</p>
              
              <p>We offer a collaborative, innovative work environment where your ideas are valued and your growth is prioritized. Whether you're interested in product development, marketing, retail, or operations, there might be a perfect role for you at Glow Beauty.</p>
              
              <div className="careers-benefits">
                <div className="benefit-item">
                  <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Competitive salary and benefits</span>
                </div>
                <div className="benefit-item">
                  <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Flexible work arrangements</span>
                </div>
                <div className="benefit-item">
                  <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Professional development opportunities</span>
                </div>
                <div className="benefit-item">
                  <svg className="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Generous product allowance</span>
                </div>
              </div>
              
              <Link to="/careers" className="cta-button">View Open Positions</Link>
            </div>
            
            <div className="careers-image">
              <img src="/images/team.png" alt="Glow Beauty Team" />
            </div>
          </div>
        </div>
      </section>

      
      <section className="sustainability-section" id="sustainability">
        <div className="container">
          <h2 className="section-title">Our Sustainability Commitment</h2>
          <p className="section-subtitle">How we're working to minimize our environmental impact</p>
          
          <div className="sustainability-grid">
            
            <div className="sustainability-card">
              <div className="sustainability-image">
                <img src="/images/aboutus.png" alt="Sustainable Packaging" />
              </div>
              <div className="sustainability-content">
                <h3 className="sustainability-title">Sustainable Packaging</h3>
                <p className="sustainability-desc">We're committed to reducing plastic waste by using recycled, recyclable, or biodegradable packaging materials. By 2026, we aim to make 100% of our packaging sustainable.</p>
              </div>
            </div>
            
            
            <div className="sustainability-card">
              <div className="sustainability-image">
                <img src="/images/ethicalsourc.png" alt="Ethical Sourcing" />
              </div>
              <div className="sustainability-content">
                <h3 className="sustainability-title">Ethical Sourcing</h3>
                <p className="sustainability-desc">We carefully select suppliers who share our commitment to ethical practices, fair labor standards, and sustainable farming methods for our natural ingredients.</p>
              </div>
            </div>
            
            
            <div className="sustainability-card">
              <div className="sustainability-image">
                <img src="/images/aboutus2.png" alt="Carbon Neutral" />
              </div>
              <div className="sustainability-content">
                <h3 className="sustainability-title">Carbon Neutral</h3>
                <p className="sustainability-desc">We offset our carbon emissions through investments in renewable energy and reforestation projects. Our headquarters runs on 100% renewable energy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="press-section" id="press">
        <div className="container">
          <h2 className="section-title">Press & Media</h2>
          <p className="section-subtitle">What the beauty world is saying about Glow Beauty</p>
          
          <div className="press-logos">
            <img src="/images/vogue.png" alt="Vogue" className="press-logo" />
            <img src="/images/ellelogo.png" alt="Elle" className="press-logo" />
            <img src="/images/allure.logo.png" alt="Allure" className="press-logo" />
            <img src="/images/glamour.png" alt="Glamour" className="press-logo" />
            <img src="/images/forbes.png" alt="Forbes" className="press-logo" />
          </div>
          
          <div className="press-quotes">
            
            <div className="press-quote">
              <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="quote-text">Glow Beauty has revolutionized the industry with their commitment to inclusive shade ranges and clean formulations. Their products perform as well as luxury brands at a fraction of the price.</p>
              <div className="quote-source">Beauty Editor</div>
              <div className="quote-publication">Vogue Beauty</div>
            </div>
            
            
            <div className="press-quote">
              <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="quote-text">In an industry often criticized for its environmental impact, Glow Beauty stands out with their genuine commitment to sustainability. They're proving that beauty doesn't have to come at the planet's expense.</p>
              <div className="quote-source">Environmental Correspondent</div>
              <div className="quote-publication">Forbes</div>
            </div>
            
            
            <div className="press-quote">
              <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="quote-text">The Hydra-Glow Serum is nothing short of miraculous. After two weeks of use, my skin was visibly plumper, more radiant, and my fine lines were significantly reduced. This is a holy grail product.</p>
              <div className="quote-source">Senior Beauty Editor</div>
              <div className="quote-publication">Allure Magazine</div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="newsletter">
        <div className="container">
          <h2 className="newsletter-title">Stay Updated</h2>
          <p className="newsletter-subtitle">Subscribe to our newsletter to be the first to know about new arrivals, exclusive offers, and beauty tips.</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input 
              type="email" 
              name="email" 
              className="newsletter-input" 
              placeholder="Enter your email address" 
              required 
            />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
        </div>
      </section>

      
    </>
  );
};

export default AboutUs;