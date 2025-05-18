import React, { useState } from 'react';
import { Camera, X, Plus, Check } from 'lucide-react';
import './Wishlist.css';
import Header from '../components/Header/Header';

const Wishlist = () => {
  
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Luminous Silk Foundation",
      brand: "Giorgio Armani",
      price: "$64.00",
      image: "..//images/luminous.png",
      stockStatus: "IN STOCK",
      stockClass: "in-stock"
    },
    {
      id: 2,
      name: "Double Wear Stay-in-Place",
      brand: "Estée Lauder",
      price: "$46.00",
      image: "..//images/double.png",
      stockStatus: "LOW STOCK",
      stockClass: "low-stock"
    },
    {
      id: 3,
      name: "Born This Way Foundation",
      brand: "Too Faced",
      price: "$40.00",
      image: "../images/born.png",
      stockStatus: "OUT OF STOCK",
      stockClass: "out-of-stock",
      outOfStock: true
    },
    {
      id: 4,
      name: "Soft Matte Foundation",
      brand: "NARS",
      price: "$42.00",
      image: "../images/wishlistnars.png",
      stockStatus: "IN STOCK",
      stockClass: "in-stock"
    },
    {
      id: 5,
      name: "Matte Lipstick",
      brand: "MAC",
      price: "$19.00",
      image: "../images/maclipstik.png",
      stockStatus: "IN STOCK",
      stockClass: "in-stock"
    },
    {
      id: 6,
      name: "Hydrating Serum",
      brand: "Glow Beauty",
      price: "$35.00",
      image: "../images/Watermelon Glow Niacinamide Dew Dropspng.jpg",
      stockStatus: "IN STOCK",
      stockClass: "in-stock"
    }
  ]);

  // Recommended items
  const [recommendedItems, setRecommendedItems] = useState([
    {
      id: 7,
      name: "Nude Eyeshadow Palette",
      brand: "Urban Decay",
      price: "$54.00",
      image: "../images/nude eyeshadow.png",
      added: false
    },
    {
      id: 8,
      name: "Sheer Glow Foundation",
      brand: "NARS",
      price: "$47.00",
      image: "../images/sheer Glow.png",
      added: false
    },
    {
      id: 9,
      name: "Vitamin C Serum",
      brand: "The Ordinary",
      price: "$28.00",
      image: "../images/ordinary.png",
      added: false
    }
  ]);

  
  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  
  const addToCart = (productName) => {
    alert(`${productName} added to your cart!`);
  };

  
  const addToWishlist = (id) => {
    setRecommendedItems(
      recommendedItems.map(item => 
        item.id === id ? { ...item, added: true } : item
      )
    );
    alert(`${recommendedItems.find(item => item.id === id).name} added to your wishlist!`);
  };


  const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);
    
    const handleOpenCameraModal = () => {
      setIsCameraModalOpen(true);
    };
    
    const handleCloseCameraModal = () => {
      setIsCameraModalOpen(false);
    };
    
  return (
    <>
      <section className="wishlist-section">
        <div className="container">
          <h1 className="section-title">Your Wishlist</h1>
          
          <div className="wishlist-grid">
            {wishlistItems.length > 0 ? (
              wishlistItems.map(item => (
                <div className="wishlist-item" key={item.id}>
                  <div className={`stock-status ${item.stockClass}`}>{item.stockStatus}</div>
                  <img src={item.image} alt={item.name} className="wishlist-img" />
                  <div className="wishlist-info">
                    <h3 className="wishlist-name">{item.name}</h3>
                    <p className="wishlist-brand">{item.brand}</p>
                    <p className="wishlist-price">{item.price}</p>
                    <div className="wishlist-actions">
                      {item.outOfStock ? (
                        <button className="add-to-cart" disabled style={{backgroundColor: '#ccc', cursor: 'not-allowed'}}>
                          Out of Stock
                        </button>
                      ) : (
                        <button className="add-to-cart" onClick={() => addToCart(item.name)}>
                          Add to Cart
                        </button>
                      )}
                      <button className="remove-btn" onClick={() => removeFromWishlist(item.id)}>
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-wishlist" style={{gridColumn: '1 / -1'}}>
                <div className="empty-wishlist-icon">❤️</div>
                <h3 className="empty-wishlist-message">Your wishlist is empty</h3>
                <p>Looks like you haven't added any products to your wishlist yet.</p>
                <a href="/" className="continue-shopping">Continue Shopping</a>
              </div>
            )}
          </div>
          
          
          <section className="recommendations">
            <h2 className="section-title">You May Also Like</h2>
            <div className="wishlist-grid">
              {recommendedItems.map(item => (
                <div className="wishlist-item" key={item.id}>
                  <img src={item.image} alt={item.name} className="wishlist-img" />
                  <div className="wishlist-info">
                    <h3 className="wishlist-name">{item.name}</h3>
                    <p className="wishlist-brand">{item.brand}</p>
                    <p className="wishlist-price">{item.price}</p>
                    <div className="wishlist-actions">
                      <button className="add-to-cart" onClick={() => addToCart(item.name)}>Add to Cart</button>
                      <button 
                        className="remove-btn" 
                        style={{
                          backgroundColor: item.added ? '#4caf50' : 'var(--accent-color)', 
                          color: 'white'
                        }}
                        onClick={() => addToWishlist(item.id)}
                      >
                        {item.added ? <Check size={16} /> : <Plus size={16} />}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Wishlist;