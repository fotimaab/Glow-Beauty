import React from 'react';
import './ProductSection.css';

function ProductSection() {
  return (
    <section className="featured">
      <h2 className="section-title">Best-Selling Foundations</h2>
      <div className="product-grid">
        <div className="product-card">
          <img src="/images/product1.jpg" alt="Luminous Silk Foundation" className="product-img" />
          <div className="product-info">
            <h3 className="product-name">Luminous Silk Foundation</h3>
            <p className="product-brand">Giorgio Armani</p>
            <p className="product-price">$64.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
        
        <div className="product-card">
          <img src="/images/product2.jpg" alt="Double Wear Foundation" className="product-img" />
          <div className="product-info">
            <h3 className="product-name">Double Wear Stay-in-Place</h3>
            <p className="product-brand">Estée Lauder</p>
            <p className="product-price">$46.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
        
        <div className="product-card">
          <img src="/images/product3.jpg" alt="Born This Way Foundation" className="product-img" />
          <div className="product-info">
            <h3 className="product-name">Born This Way Foundation</h3>
            <p className="product-brand">Too Faced</p>
            <p className="product-price">$40.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
        
        <div className="product-card">
          <img src="/images/product4.jpg" alt="Soft Matte Foundation" className="product-img" />
          <div className="product-info">
            <h3 className="product-name">Soft Matte Foundation</h3>
            <p className="product-brand">NARS</p>
            <p className="product-price">$42.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;