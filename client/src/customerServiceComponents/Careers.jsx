import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Careers.css';

import careersBgImage from '../images/user avatar.jpg';

// SVG Icon Components
const CameraIcon = () => (
  <svg className="camera-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path>
    <circle cx="12" cy="13" r="4"></circle>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const CoffeeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
    <line x1="6" y1="1" x2="6" y2="4"></line>
    <line x1="10" y1="1" x2="10" y2="4"></line>
    <line x1="14" y1="1" x2="14" y2="4"></line>
  </svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const DepartmentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const ActivityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const MonitorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const Careers = () => {
  const [activeFilter, setActiveFilter] = useState('All Departments');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const handleLanguageChange = (lang, langText) => {
    console.log('Language changed to:', langText);
    
    setShowLanguageDropdown(false);
  };

  const handleApply = (jobTitle) => {
    alert(`Thank you for your interest in the ${jobTitle} position. In a real application, this would take you to an application form.`);
  };

  return (
    <div className="careers-page">

      
      <section className="page-header" style={{backgroundImage: `linear-gradient(rgba(248, 215, 218, 0.9), rgba(248, 215, 218, 0.9)), url(${careersBgImage})`}}>
        <div className="container">
          <h1 className="page-title">Join Our Team</h1>
          <p className="page-subtitle">Discover exciting career opportunities at Glow Beauty</p>
        </div>
      </section>

      
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Why Work With Us?</h2>
          <p className="section-subtitle">At Glow Beauty, we're passionate about helping people look and feel their best. Join our team of beauty enthusiasts and innovators.</p>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <HeartIcon />
              </div>
              <h3 className="value-title">Passion for Beauty</h3>
              <p className="value-desc">We're driven by our love for beauty and helping people feel confident in their own skin.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <GlobeIcon />
              </div>
              <h3 className="value-title">Diversity & Inclusion</h3>
              <p className="value-desc">We celebrate diversity and create products for people of all backgrounds and skin tones.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <CoffeeIcon />
              </div>
              <h3 className="value-title">Sustainability</h3>
              <p className="value-desc">We're committed to ethical practices and minimizing our environmental impact.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <SunIcon />
              </div>
              <h3 className="value-title">Innovation</h3>
              <p className="value-desc">We constantly push boundaries to create revolutionary beauty solutions.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Current Openings</h2>
          <p className="section-subtitle">Explore our available positions and find your perfect role</p>
          
          <div className="jobs-section">
            <div className="jobs-filter">
              {['All Departments', 'Marketing', 'Product Development', 'Customer Service', 'Technology', 'Retail'].map(filter => (
                <button 
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`} 
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            <div className="jobs-grid">
              <div className="job-card">
                <div className="job-info">
                  <h3 className="job-title">Senior Product Developer</h3>
                  <div className="job-meta">
                    <div className="job-meta-item">
                      <LocationIcon />
                      New York, NY
                    </div>
                    <div className="job-meta-item">
                      <DepartmentIcon />
                      Product Development
                    </div>
                    <div className="job-meta-item">
                      <ClockIcon />
                      Full-time
                    </div>
                  </div>
                  <p className="job-desc">Lead the development of innovative skincare and makeup products from concept to launch, working closely with our R&D team.</p>
                </div>
                <button className="apply-btn" onClick={() => handleApply('Senior Product Developer')}>Apply Now</button>
              </div>
              
              <div className="job-card">
                <div className="job-info">
                  <h3 className="job-title">Digital Marketing Manager</h3>
                  <div className="job-meta">
                    <div className="job-meta-item">
                      <LocationIcon />
                      Los Angeles, CA
                    </div>
                    <div className="job-meta-item">
                      <DepartmentIcon />
                      Marketing
                    </div>
                    <div className="job-meta-item">
                      <ClockIcon />
                      Full-time
                    </div>
                  </div>
                  <p className="job-desc">Develop and execute digital marketing strategies to drive brand awareness, engagement, and conversion across all digital channels.</p>
                </div>
                <button className="apply-btn" onClick={() => handleApply('Digital Marketing Manager')}>Apply Now</button>
              </div>
              
              <div className="job-card">
                <div className="job-info">
                  <h3 className="job-title">Customer Experience Specialist</h3>
                  <div className="job-meta">
                    <div className="job-meta-item">
                      <LocationIcon />
                      Remote
                    </div>
                    <div className="job-meta-item">
                      <DepartmentIcon />
                      Customer Service
                    </div>
                    <div className="job-meta-item">
                      <ClockIcon />
                      Full-time
                    </div>
                  </div>
                  <p className="job-desc">Provide exceptional customer support through multiple channels, helping customers find their perfect beauty products.</p>
                </div>
                <button className="apply-btn" onClick={() => handleApply('Customer Experience Specialist')}>Apply Now</button>
              </div>
              
              <div className="job-card">
                <div className="job-info">
                  <h3 className="job-title">Frontend Developer</h3>
                  <div className="job-meta">
                    <div className="job-meta-item">
                      <LocationIcon />
                      San Francisco, CA
                    </div>
                    <div className="job-meta-item">
                      <DepartmentIcon />
                      Technology
                    </div>
                    <div className="job-meta-item">
                      <ClockIcon />
                      Full-time
                    </div>
                  </div>
                  <p className="job-desc">Build and maintain our e-commerce platform and foundation shade finder tool, ensuring a seamless user experience.</p>
                </div>
                <button className="apply-btn" onClick={() => handleApply('Frontend Developer')}>Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Employee Benefits</h2>
          <p className="section-subtitle">We offer competitive benefits to support our team members' wellbeing and growth</p>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                <ActivityIcon />
              </div>
              <div className="benefit-content">
                <h4>Comprehensive Healthcare</h4>
                <p>Medical, dental, and vision insurance for you and your dependents.</p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">
                <UserIcon />
              </div>
              <div className="benefit-content">
                <h4>Employee Discount</h4>
                <p>Generous discounts on all Glow Beauty products.</p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">
                <MonitorIcon />
              </div>
              <div className="benefit-content">
                <h4>Flexible Work Environment</h4>
                <p>Remote work options and flexible scheduling for work-life balance.</p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">
                <DepartmentIcon />
              </div>
              <div className="benefit-content">
                <h4>Professional Development</h4>
                <p>Learning stipends, workshops, and career growth opportunities.</p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">
                <ShieldIcon />
              </div>
              <div className="benefit-content">
                <h4>401(k) with Company Match</h4>
                <p>Retirement savings plan with generous company matching.</p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">
                <CalendarIcon />
              </div>
              <div className="benefit-content">
                <h4>Paid Time Off</h4>
                <p>Generous vacation, sick leave, and paid holidays.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Our Application Process</h2>
          <p className="section-subtitle">What to expect when you apply for a position at Glow Beauty</p>
          
          <div className="process-steps">
            {[
              {number: "1", title: "Apply Online", desc: "Submit your application and resume through our careers portal."},
              {number: "2", title: "Initial Screening", desc: "Our HR team will review your application and reach out if there's a match."},
              {number: "3", title: "Interviews", desc: "Meet with team members and hiring managers to discuss the role."},
              {number: "4", title: "Assessment", desc: "Complete a skills assessment relevant to the position."},
              {number: "5", title: "Offer", desc: "Receive and review your job offer and welcome package."}
            ].map(step => (
              <div className="process-step" key={step.number}>
                <div className="step-number">{step.number}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Join Our Team?</h2>
          <p className="cta-text">Explore our current openings and take the first step toward a rewarding career in beauty.</p>
          <Link to="/careers/positions" className="cta-btn">View All Positions</Link>
        </div>
      </section>
    </div>
  );
};

export default Careers;