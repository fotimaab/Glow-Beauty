import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Resources.css';

const Resources = () => {
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeRoutine, setActiveRoutine] = useState('morning');
  
  
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    
    if (category !== 'all') {
      const sectionId = 
        category === 'blog' ? 'beauty-blog' : 
        category === 'tutorials' ? 'makeup-tutorials' : 
        category === 'foundation' ? 'foundation-guide' : 
        category === 'skincare' ? 'skincare-routine' : null;
        
      if (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handleRoutineTabClick = (routine) => {
    setActiveRoutine(routine);
  };

  
  const handlePlayButtonClick = (videoId) => {
    setCurrentVideoId(videoId);
    setIsVideoModalOpen(true);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    
    console.log('Newsletter subscription:', email);
    
    alert('Thank you for subscribing to our beauty resources newsletter!');
    e.target.reset();
  };

  
  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setCurrentVideoId('');
  };

  
  const videoTutorials = [
    {
      id: 'x3ng1jtSE9g',
      title: 'Perfect Smokey Eye for Beginners',
      thumbnailUrl: '../images/smokey-eye-thumbnail.jpg',
      duration: '12 minutes',
      level: 'beginner'
    },
    {
      id: '8Z7JeSNT_B0',
      title: 'Flawless Foundation Application Techniques',
      thumbnailUrl: '../images/foundation-thumbnail.jpg',
      duration: '15 minutes',
      level: 'intermediate'
    },
    {
      id: 'LMbX26CPHwM',
      title: 'Advanced Contouring and Highlighting',
      thumbnailUrl: '../images/contouring-thumbnail.jpg',
      duration: '20 minutes',
      level: 'advanced'
    },
    {
      id: '0Ygiw_i59IA',
      title: 'Perfect Lip Application Techniques',
      thumbnailUrl: '../images/lipstick-thumbnail.jpg',
      duration: '8 minutes',
      level: 'beginner'
    }
  ];

  return (
    <>
      
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Beauty Resources</h1>
          <p className="hero-subtitle">Expert tips, tutorials, and guides to help you make the most of your beauty routine</p>
        </div>
      </section>

      
      <section className="categories-section">
        <div className="container">
          <div className="categories-container">
            <button 
              className={`category-button ${activeCategory === 'all' ? 'active' : ''}`} 
              onClick={() => handleCategoryClick('all')}
            >
              All Resources
            </button>
            <button 
              className={`category-button ${activeCategory === 'blog' ? 'active' : ''}`} 
              onClick={() => handleCategoryClick('blog')}
            >
              Beauty Blog
            </button>
            <button 
              className={`category-button ${activeCategory === 'tutorials' ? 'active' : ''}`} 
              onClick={() => handleCategoryClick('tutorials')}
            >
              Makeup Tutorials
            </button>
            <button 
              className={`category-button ${activeCategory === 'foundation' ? 'active' : ''}`} 
              onClick={() => handleCategoryClick('foundation')}
            >
              Foundation Guide
            </button>
            <button 
              className={`category-button ${activeCategory === 'skincare' ? 'active' : ''}`} 
              onClick={() => handleCategoryClick('skincare')}
            >
              Skincare Routine
            </button>
          </div>
        </div>
      </section>

      
      {isVideoModalOpen && (
        <div className="video-modal-overlay">
          <div className="video-modal">
            <button className="close-modal" onClick={closeVideoModal}>
              &times;
            </button>
            <div className="video-container">
              <iframe 
                src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      
      <section className="blog-section" id="beauty-blog">
        <div className="container">
          <h2 className="section-title">Beauty Blog</h2>
          <p className="section-subtitle">The latest beauty trends, tips, and product reviews from our experts</p>
          
          <div className="blog-grid">
            
            <div className="blog-card">
              <div className="blog-image">
                <img src="/images/10winter.png" alt="Skincare Tips" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Skincare</span>
                <h3 className="blog-title">10 Winter Skincare Tips for Glowing Skin</h3>
                <p className="blog-excerpt">Cold weather can wreak havoc on your skin. Learn how to keep your complexion hydrated, protected, and radiant during the harsh winter months with these expert tips.</p>
                <div className="blog-meta">
                  <div className="blog-author">
                    <div className="author-image">
                      <img src="/images/Emmachen.png" alt="Emma Chen" />
                    </div>
                    <span>Emma Chen</span>
                  </div>
                  <span>5 days ago</span>
                </div>
                <Link to="/blog/winter-skincare-tips" className="read-more">Read More</Link>
              </div>
            </div>
            
            
            <div className="blog-card">
              <div className="blog-image">
                <img src="/images/spring.png" alt="Makeup Trends" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Makeup</span>
                <h3 className="blog-title">Spring 2025 Makeup Trends You Need to Try</h3>
                <p className="blog-excerpt">From vibrant eyeshadows to dewy skin, discover the hottest makeup trends for the upcoming season and learn how to incorporate them into your everyday look.</p>
                <div className="blog-meta">
                  <div className="blog-author">
                    <div className="author-image">
                      <img src="../images/mayapoter.png" alt="Maya Patel" />
                    </div>
                    <span>Maya Patel</span>
                  </div>
                  <span>1 week ago</span>
                </div>
                <Link to="/blog/spring-makeup-trends" className="read-more">Read More</Link>
              </div>
            </div>
            
            
            <div className="blog-card">
              <div className="blog-image">
                <img src="/images/howtorepair.png" alt="Hair Care" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Hair</span>
                <h3 className="blog-title">How to Repair Damaged Hair: A Complete Guide</h3>
                <p className="blog-excerpt">From heat styling to chemical treatments, our hair goes through a lot. Learn effective strategies to restore your locks to their former glory with our comprehensive guide.</p>
                <div className="blog-meta">
                  <div className="blog-author">
                    <div className="author-image">
                      <img src="../images/jameswilson.png" alt="James Wilson" />
                    </div>
                    <span>James Wilson</span>
                  </div>
                  <span>2 weeks ago</span>
                </div>
                <Link to="/blog/repair-damaged-hair" className="read-more">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="tutorials-section" id="makeup-tutorials">
        <div className="container">
          <h2 className="section-title">Makeup Tutorials</h2>
          <p className="section-subtitle">Step-by-step video guides to help you master different makeup techniques</p>
          
          <div className="tutorials-grid">
            {videoTutorials.map((tutorial) => (
              <div className="tutorial-card" key={tutorial.id}>
                <div className="tutorial-image">
                  
                  <img 
                    src={tutorial.thumbnailUrl || `https://img.youtube.com/vi/${tutorial.id}/maxresdefault.jpg`} 
                    alt={tutorial.title} 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://img.youtube.com/vi/${tutorial.id}/hqdefault.jpg`;
                    }}
                  />
                  <div className="play-button" onClick={() => handlePlayButtonClick(tutorial.id)}>
                    <svg className="play-icon" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
                <div className="tutorial-content">
                  <h3 className="tutorial-title">{tutorial.title}</h3>
                  <div className="tutorial-info">
                    <div className="tutorial-duration">
                      <svg className="duration-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>{tutorial.duration}</span>
                    </div>
                    <span className={`tutorial-level level-${tutorial.level}`}>{tutorial.level.charAt(0).toUpperCase() + tutorial.level.slice(1)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="foundation-section" id="foundation-guide">
        <div className="container">
          <h2 className="section-title">Foundation Guide</h2>
          <p className="section-subtitle">Find your perfect foundation match with our comprehensive guide</p>
          
          <div className="foundation-container">
            <div className="foundation-image">
              <img src="/images/howtofindyour.png" alt="Foundation Guide" />
            </div>
            
            <div className="foundation-content">
              <h3>How to Find Your Perfect Foundation Match</h3>
              <p>Finding the right foundation can be challenging, but with our step-by-step guide, you'll discover your perfect match. The key is understanding your skin type, undertone, and coverage preferences.</p>
              
              <div className="foundation-steps">
                <div className="step-item">
                  <div className="step-number">1</div>
                  <div className="step-text">
                    <strong>Determine your skin type</strong> - Is your skin dry, oily, combination, or normal? This will help you choose the right formula (matte, dewy, satin) for your needs.
                  </div>
                </div>
                
                <div className="step-item">
                  <div className="step-number">2</div>
                  <div className="step-text">
                    <strong>Identify your undertone</strong> - Look at the veins on your wrist. Blue veins indicate cool undertones, green veins suggest warm undertones, and a mix means neutral undertones.
                  </div>
                </div>
                
                <div className="step-item">
                  <div className="step-number">3</div>
                  <div className="step-text">
                    <strong>Test in natural light</strong> - Always swatch foundation on your jawline and check the color match in natural daylight for the most accurate results.
                  </div>
                </div>
                
                <div className="step-item">
                  <div className="step-number">4</div>
                  <div className="step-text">
                    <strong>Consider coverage needs</strong> - Think about whether you prefer sheer, medium, or full coverage based on your skin concerns and personal preference.
                  </div>
                </div>
              </div>
              
              <p>Still not sure? Try our Virtual Shade Finder tool or book a free consultation with one of our beauty experts for personalized recommendations.</p>
              
              <Link to="/foundation-guide" className="cta-button">View Complete Guide</Link>
            </div>
          </div>
        </div>
      </section>

      
      <section className="skincare-section" id="skincare-routine">
        <div className="container">
          <h2 className="section-title">Skincare Routine Guide</h2>
          <p className="section-subtitle">Customize your skincare routine based on your skin type and concerns</p>
          
          <div className="routine-tabs">
            <button 
              className={`routine-tab ${activeRoutine === 'morning' ? 'active' : ''}`}
              onClick={() => handleRoutineTabClick('morning')}
            >
              Morning Routine
            </button>
            <button 
              className={`routine-tab ${activeRoutine === 'evening' ? 'active' : ''}`}
              onClick={() => handleRoutineTabClick('evening')}
            >
              Evening Routine
            </button>
            <button 
              className={`routine-tab ${activeRoutine === 'weekly' ? 'active' : ''}`}
              onClick={() => handleRoutineTabClick('weekly')}
            >
              Weekly Treatments
            </button>
          </div>
          
          <div className="routine-content">
            
            <div className={`routine-panel ${activeRoutine === 'morning' ? 'active' : ''}`} id="morning-routine">
              <div className="routine-steps">
                <div className="routine-step">
                  <div className="step-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                    </svg>
                  </div>
                  <div className="step-content">
                    <h4>1. Cleanse</h4>
                    <p>Start your day with a gentle cleanser to remove any oils that built up overnight without stripping your skin's natural moisture.</p>
                    <div className="product-recommendation">
                      Try: Glow Beauty Gentle Morning Cleanser
                    </div>
                  </div>
                </div>
                
                <div className="routine-step">
                  <div className="step-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z"></path>
                    </svg>
                  </div>
                  <div className="step-content">
                    <h4>2. Tone</h4>
                    <p>Apply toner to balance your skin's pH and prepare it to better absorb the following products in your routine.</p>
                    <div className="product-recommendation">
                      Try: Glow Beauty Balancing Toner
                    </div>
                  </div>
                </div>
                
                <div className="routine-step">
                  <div className="step-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z"></path>
                      <path d="M12 9v4"></path>
                      <path d="M10 11h4"></path>
                    </svg>
                  </div>
                  <div className="step-content">
                    <h4>3. Serum</h4>
                    <p>Apply a vitamin C serum to brighten skin and provide antioxidant protection against environmental damage throughout the day.</p>
                    <div className="product-recommendation">
                      Try: Glow Beauty Vitamin C Brightening Serum
                    </div>
                  </div>
                </div>
                
                <div className="routine-step">
                  <div className="step-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 8v8"></path>
                      <path d="M8 12h8"></path>
                    </svg>
                  </div>
                  <div className="step-content">
                    <h4>4. Moisturize</h4>
                    <p>Lock in hydration with a lightweight moisturizer appropriate for your skin type to keep skin balanced throughout the day.</p>
                    <div className="product-recommendation">
                      Try: Glow Beauty Daily Hydration Moisturizer
                    </div>
                  </div>
                </div>
                
                <div className="routine-step">
                  <div className="step-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="5"></circle>
                      <path d="M12 1v2"></path>
                      <path d="M12 21v2"></path>
                      <path d="M4.22 4.22l1.42 1.42"></path>
                      <path d="M18.36 18.36l1.42 1.42"></path>
                      <path d="M1 12h2"></path>
                      <path d="M21 12h2"></path>
                      <path d="M4.22 19.78l1.42-1.42"></path>
                      <path d="M18.36 5.64l1.42-1.42"></path>
                    </svg>
                  </div>
                  <div className="step-content">
                    <h4>5. Sunscreen</h4>
                    <p>Apply a broad-spectrum SPF 30+ sunscreen as the final step to protect your skin from harmful UV rays, even on cloudy days.</p>
                    <div className="product-recommendation">
                      Try: Glow Beauty Invisible Shield SPF 50
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="routine-note">
                <strong>Note:</strong> For dry skin, consider adding a hydrating face mist between toner and serum. For oily skin, you might prefer a gel-based moisturizer.
              </div>
            </div>
            
            
            <div className={`routine-panel ${activeRoutine === 'evening' ? 'active' : ''}`} id="evening-routine">
              <div className="routine-steps">
                <div className="routine-step">
                  <div className="step-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 14.66V20a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h5.34"></path>
                      <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                    </svg>
                  </div>
                  <div className="step-content">
                    <h4>1. Double Cleanse</h4>
                    <p>Start with an oil-based cleanser to remove makeup and sunscreen, then follow with a water-based cleanser to purify the skin.</p>
                    <div className="product-recommendation">
                      Try: Glow Beauty Cleansing Oil + Purifying Gel Cleanser
                    </div>
                  </div>
                </div>
                
                <div className="routine-step">
                  <div className="step-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z"></path>
                    </svg>
                  </div>
                  <div className="step-content">
                    <h4>2. Tone</h4>
                    <p>Use a hydrating or exfoliating toner to further cleanse and prepare your skin for nighttime treatments.</p>
                    <div className="product-recommendation">
                      Try: Glow Beauty Exfoliating Toner
                    </div>
                  </div>
                </div>
                
                <div className="routine-step">
                  <div className="step-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z"></path>
                      <path d="M12 9v4"></path>
                      <path d="M10 11h4"></path>
                    </svg>
                  </div>
                  <div className="step-content">
                    <h4>3. Treatment Serum</h4>
                    <p>Apply targeted treatment serums such as retinol for anti-aging, niacinamide for pore refinement, or hyaluronic acid for hydration.</p>
                    <div className="product-recommendation">
                      Try: Glow Beauty Retinol Night Serum
                    </div>
                  </div>
                </div>
                
                <div className="routine-step">
                  <div className="step-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 8v8"></path>
                      <path d="M8 12h8"></path>
                    </svg>
                  </div>
                  <div className="step-content">
                    <h4>4. Eye Cream</h4>
                    <p>Gently apply eye cream using your ring finger to the orbital bone area to target fine lines, dark circles, and puffiness.</p>
                    <div className="product-recommendation">
                      Try: Glow Beauty Rejuvenating Eye Cream
                    </div>
                  </div>
                </div>
                
                <div className="routine-step">
                  <div className="step-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v6l3 3-3 3v6" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <div className="step-content">
                    <h4>5. Night Moisturizer</h4>
                    <p>Finish with a rich night cream to seal in treatments and provide intensive overnight hydration and repair.</p>
                    <div className="product-recommendation">
                      Try: Glow Beauty Overnight Recovery Cream
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="routine-note">
                <strong>Note:</strong> If using retinol, start with once or twice a week and gradually increase frequency as your skin builds tolerance. Always wear sunscreen the following day.
              </div>
            </div>
            
            
            <div className={`routine-panel ${activeRoutine === 'weekly' ? 'active' : ''}`} id="weekly-routine">
              <div className="routine-steps">
                <div className="routine-step">
                  <div className="step-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 6h10a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h2z"></path>
                      <path d="M6 2v4"></path>
                      <path d="M18 2v4"></path>
                      <path d="M2 10h20"></path>
                    </svg>
                  </div>
                  <div className="step-content">
                    <h4>1. Exfoliate (1-2x per week)</h4>
                    <p>Use a physical or chemical exfoliant to remove dead skin cells, unclog pores, and improve skin texture and tone.</p>
                    <div className="product-recommendation">
                      Try: Glow Beauty Gentle Enzyme Exfoliator
                    </div>
                  </div>
                </div>
                
                <div className="routine-step">
                  <div className="step-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"></path>
                      <path d="M3.6 8.5c1.94-1.93 4.88-3.5 8.4-3.5s6.46 1.57 8.4 3.5"></path>
                      <path d="M3.6 15.5c1.94 1.93 4.88 3.5 8.4 3.5s6.46-1.57 8.4-3.5"></path>
                      <line x1="12" y1="4" x2="12" y2="20"></line>
                    </svg>
                  </div>
                  <div className="step-content">
                    <h4>2. Face Mask (1-2x per week)</h4>
                    <p>Apply a mask tailored to your skin concerns - clay for oily skin, hydrating for dry skin, or brightening for dull complexion.</p>
                    <div className="product-recommendation">
                      Try: Glow Beauty Multi-Mask Collection
                    </div>
                  </div>
                </div>
                
                <div className="routine-step">
                  <div className="step-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14"></path>
                      <path d="M5 12h14"></path>
                    </svg>
                  </div>
                  <div className="step-content">
                    <h4>3. Intensive Treatment (1x per week)</h4>
                    <p>Use a more potent treatment such as a chemical peel, concentrated serum, or overnight mask for targeted results.</p>
                    <div className="product-recommendation">
                      Try: Glow Beauty 10% Glycolic Acid Treatment
                    </div>
                  </div>
                </div>
                
                <div className="routine-step">
                  <div className="step-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 7.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7.5"></path>
                      <path d="M16 2v4"></path>
                      <path d="M8 2v4"></path>
                      <path d="M3 10h18"></path>
                    </svg>
                  </div>
                  <div className="step-content">
                    <h4>4. Facial Massage (1x per week)</h4>
                    <p>Spend 5-10 minutes massaging your face using facial oil to boost circulation, reduce puffiness, and promote relaxation.</p>
                    <div className="product-recommendation">
                      Try: Glow Beauty Facial Massage Oil + Gua Sha Tool
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="routine-note">
                <strong>Tip:</strong> Space out your weekly treatments throughout the week rather than doing them all on the same day to avoid overwhelming your skin.
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="newsletter">
        <div className="container">
          <h2 className="newsletter-title">Stay Updated</h2>
          <p className="newsletter-subtitle">Subscribe to our newsletter to be the first to know about new beauty tips, tutorials, and product recommendations.</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input type="email" className="newsletter-input" placeholder="Enter your email address" required />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Resources;