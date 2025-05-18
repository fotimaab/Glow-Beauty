import React from 'react';
import './CategorySection.css';

function CategorySection() {
  return (
    <section className="categories">
      <h2 className="section-title">Shop By Category</h2>
      <div className="category-grid">
        <div className="category-card">
          <img src="/images/foundation.jpg" alt="Foundation" className="category-img" />
          <div className="category-name">Foundation</div>
        </div>
        <div className="category-card">
          <img src="/images/lipstick.jpg" alt="Lipstick" className="category-img" />
          <div className="category-name">Lipstick</div>
        </div>
        <div className="category-card">
          <img src="/images/eye-makeup.jpg" alt="Eye Makeup" className="category-img" />
          <div className="category-name">Eye Makeup</div>
        </div>
        <div className="category-card">
          <img src="/images/skincare.jpg" alt="Skincare" className="category-img" />
          <div className="category-name">Skincare</div>
        </div>
      </div>
    </section>
  );
}

export default CategorySection;