import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CustomerServices.css';

const CustomerServices = () => {
    
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const subject = e.target.elements.subject.value;
        
        console.log('Form submitted:', { name, email, subject });
        
        alert('Thank you for your message! Our team will get back to you soon.');
        e.target.reset();
    };

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        
        console.log('Newsletter subscription:', email);
        
        alert('Thank you for subscribing to our newsletter!');
        e.target.reset();
    };

    useEffect(() => {
        const handleAnchorClick = (e) => {
            // Only handle # links, not React Router Links
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

    const faqData = [
        {
            question: "How long does shipping take?",
            answer: "Standard shipping typically takes 3-5 business days within the continental US. Express shipping is available for 1-2 business day delivery. International shipping varies by location but generally takes 7-14 business days. You'll receive a tracking number via email once your order ships."
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for most items. Products must be unused, in their original packaging, and in resalable condition. Some items like opened cosmetics may not be eligible for return due to hygiene reasons. To initiate a return, please visit your order history in your account or contact our customer service team."
        },
        {
            question: "Do you offer samples with purchases?",
            answer: "Yes! We include 2-3 complimentary samples with every order. For orders over $50, you can select up to 3 specific samples at checkout. Beauty Insider members at VIP level and above can select additional samples based on their membership tier."
        },
        {
            question: "Are your products cruelty-free?",
            answer: "Yes, all Glow Beauty branded products are 100% cruelty-free and we do not test on animals. We are certified by Leaping Bunny and PETA. We also carefully select third-party brands that align with our ethical standards, and clearly mark all cruelty-free products on our website."
        },
        {
            question: "How do I track my order?",
            answer: "You can track your order by clicking the \"Track Order\" link in your shipping confirmation email or by logging into your account and viewing your order history. You can also use our Order Tracking page by entering your order number and the email address used for the purchase."
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. Please note that customers are responsible for any customs fees, import duties, or taxes that may be imposed by their country. These fees are not included in our shipping charges."
        },
        {
            question: "How do I find the right foundation shade?",
            answer: "You can use our Virtual Shade Finder tool on our website or mobile app. Simply upload a clear photo of your face in natural lighting, and our AI technology will recommend your perfect shade match across all our foundation brands. You can also schedule a free virtual consultation with one of our beauty advisors for personalized recommendations."
        },
        {
            question: "What is the Beauty Insider rewards program?",
            answer: "Beauty Insider is our free loyalty program that rewards you for shopping with us. You earn 1 point for every $1 spent, which can be redeemed for discounts on future purchases. Members also receive exclusive offers, early access to new products, birthday gifts, and special event invitations. Higher tiers (VIP and Elite) offer additional benefits like free shipping and annual gift cards."
        }
    ];

    return (
        <>
            <header>
                <div className="container">
                  

                   
                </div>
            </header>

            <section className="hero">
                <div className="container">
                    <h1 className="hero-title">Customer Service</h1>
                    <p className="hero-subtitle">We're here to help you with any questions or concerns about your Glow Beauty experience</p>
                </div>
            </section>

            <section className="service-section">
                <div className="container">
                    <h2 className="section-title">How Can We Help You?</h2>
                    <p className="section-subtitle">Choose from our customer service options below or contact us directly with your questions</p>
                    
                    <div className="service-grid" >

                        <div className="service-card">
                            <div className="service-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                                </svg>
                            </div>
                            <h3 className="service-title">Contact Us</h3>
                            <p className="service-desc">Have questions? Our beauty experts are ready to help you with product recommendations, order issues, or any other inquiries.</p>
                            <a href="#contact-form" className="service-link">Get in Touch</a>
                        </div>
                        
        
                        <div className="service-card">
                            <div className="service-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"></path>
                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                </svg>
                            </div>
                            <h3 className="service-title">FAQ</h3>
                            <p className="service-desc">Find answers to our most frequently asked questions about orders, shipping, returns, and product information.</p>
                            <a href="#faq-section" className="service-link">View FAQs</a>
                        </div>
                        
                        
                        <div className="service-card">
                            <div className="service-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="1" y="3" width="15" height="13"></rect>
                                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                                </svg>
                            </div>
                            <h3 className="service-title">Shipping & Returns</h3>
                            <p className="service-desc">Learn about our shipping policies, delivery times, return process, and exchange options for your orders.</p>
                            <Link to="/shipping-returns" className="service-link">View Policy</Link>
                        </div>
                        
                        
                        <div className="service-card">
                            <div className="service-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                            </div>
                            <h3 className="service-title">Order Tracking</h3>
                            <p className="service-desc">Track your Glow Beauty order in real-time to see its current status and estimated delivery date.</p>
                            <Link to="/order-tracking" className="service-link">Track Order</Link>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="contact-section" id="contact-form">
                <div className="container">
                    <div className="contact-container">
                        <div className="contact-info">
                            <h2 className="contact-title">Get in Touch</h2>
                            <p className="contact-desc">Have questions or need assistance? Fill out the form and our beauty experts will get back to you as soon as possible. We're here to help make your beauty experience perfect.</p>
                            
                            <div className="contact-method">
                                <div className="contact-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                                    </svg>
                                </div>
                                <div className="contact-text">
                                    <h4>Phone</h4>
                                    <p>1-800-GLOW-BTY (1-800-456-9289)</p>
                                </div>
                            </div>
                            
                            <div className="contact-method">
                                <div className="contact-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div className="contact-text">
                                    <h4>Email</h4>
                                    <p>support@glowbeauty.com</p>
                                </div>
                            </div>
                            
                            <div className="contact-method">
                                <div className="contact-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <div className="contact-text">
                                    <h4>Address</h4>
                                    <p>123 Beauty Blvd, Suite 500<br />Los Angeles, CA 90001</p>
                                </div>
                            </div>
                            
                            <div className="contact-method">
                                <div className="contact-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                </div>
                                <div className="contact-text">
                                    <h4>Hours</h4>
                                    <p>Monday-Friday: 9am-6pm PST<br />Saturday: 10am-4pm PST</p>
                                </div>
                            </div>
                        </div>
                        
                        <form className="contact-form" onSubmit={handleContactSubmit}>
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input type="text" id="name" className="form-control" placeholder="Enter your full name" required />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input type="email" id="email" className="form-control" placeholder="Enter your email address" required />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="order" className="form-label">Order Number (Optional)</label>
                                <input type="text" id="order" className="form-control" placeholder="If applicable" />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="subject" className="form-label">Subject</label>
                                <select id="subject" className="form-control" required>
                                    <option value="">Select a subject</option>
                                    <option value="order-status">Order Status</option>
                                    <option value="return">Return/Exchange</option>
                                    <option value="product">Product Information</option>
                                    <option value="account">Account Issues</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea id="message" className="form-control" placeholder="How can we help you?" required></textarea>
                            </div>
                            
                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            
            <section className="faq-section" id="faq-section">
                <div className="container">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <p className="section-subtitle">Find answers to our most commonly asked questions</p>
                    
                    <div className="faq-container">
                        {faqData.map((faq, index) => (
                            <div 
                                key={index}
                                className={`accordion ${activeAccordion === index ? 'active' : ''}`}
                            >
                                <div 
                                    className="accordion-header" 
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <h3 className="accordion-title">{faq.question}</h3>
                                    <svg className="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                                <div className="accordion-content">
                                    <p className="accordion-text">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            
            <section className="newsletter">
                <div className="container">
                    <h2 className="newsletter-title">Stay Updated</h2>
                    <p className="newsletter-subtitle">Subscribe to our newsletter to be the first to know about new arrivals, exclusive offers, and beauty tips.</p>
                    <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                        <input type="email" name="email" className="newsletter-input" placeholder="Enter your email address" required />
                        <button type="submit" className="newsletter-btn">Subscribe</button>
                    </form>
                </div>
            </section> 
        </>
    );
};

export default CustomerServices;