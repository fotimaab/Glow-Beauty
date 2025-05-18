import React, { useState, useRef, useContext, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Account.css';

const Account = () => {
  const { currentUser, signOut, updateProfile } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  
  const [userProfile, setUserProfile] = useState({
    firstName: currentUser?.firstName || '',
    lastName: currentUser?.lastName || '',
    email: currentUser?.email || '',
    phone: '',
    birthDate: '',
    bio: ''
  });
  
  
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);
  
  
  const [passwordData, setPasswordData] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  
  
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState({
    name: '',
    line1: '',
    line2: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
    isDefault: false
  });
  const [isEditingAddress, setIsEditingAddress] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(false);
  
  
  const [orders] = useState([
    {
      id: 'ORDER-5623',
      date: '2023-11-15',
      status: 'Delivered',
      total: 125.97,
      items: [
        { id: 1, name: 'Foundation', price: 45.99, quantity: 1, image: 'https://via.placeholder.com/80' },
        { id: 2, name: 'Lipstick', price: 29.99, quantity: 2, image: 'https://via.placeholder.com/80' }
      ]
    },
    {
      id: 'ORDER-5489',
      date: '2023-11-02',
      status: 'Processing',
      total: 76.50,
      items: [
        { id: 3, name: 'Eye Cream', price: 38.50, quantity: 1, image: 'https://via.placeholder.com/80' },
        { id: 4, name: 'Mascara', price: 19.00, quantity: 2, image: 'https://via.placeholder.com/80' }
      ]
    }
  ]);
  
  
  const [reviews] = useState([
    {
      id: 1,
      productName: 'Moisture Surge Face Cream',
      productImage: 'https://via.placeholder.com/80',
      rating: 5,
      comment: 'Amazing product! Really helped with my dry skin during winter months.',
      date: '2023-10-28'
    },
    {
      id: 2,
      productName: 'Double Wear Foundation',
      productImage: 'https://via.placeholder.com/80',
      rating: 4,
      comment: 'Great coverage and lasts all day. Shade matching was perfect.',
      date: '2023-09-15'
    }
  ]);

  
  const [formSuccess, setFormSuccess] = useState(null);
  const [formError, setFormError] = useState(null);

  
  useEffect(() => {
    
    const savedImage = localStorage.getItem(`profileImage_${currentUser?.email}`);
    if (savedImage) {
      setProfileImage(savedImage);
    }
    
    
    const savedProfile = localStorage.getItem(`userProfile_${currentUser?.email}`);
    if (savedProfile) {
      setUserProfile({...userProfile, ...JSON.parse(savedProfile)});
    }
    
    
    const savedAddresses = localStorage.getItem(`addresses_${currentUser?.email}`);
    if (savedAddresses) {
      setAddresses(JSON.parse(savedAddresses));
    }
  }, [currentUser]);

  
  if (!currentUser) {
    return <Navigate to="/" />;
  }

  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    
    if (file.size > 5 * 1024 * 1024) {
      setFormError("Image too large. Please select an image under 5MB.");
      return;
    }
    
    const reader = new FileReader();
    reader.onload = () => {
      const imageData = reader.result;
      setProfileImage(imageData);
      localStorage.setItem(`profileImage_${currentUser.email}`, imageData);
      setFormSuccess("Profile picture updated successfully!");
      
      
      setTimeout(() => setFormSuccess(null), 3000);
    };
    
    reader.readAsDataURL(file);
  };

  
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    
    
    localStorage.setItem(`userProfile_${currentUser.email}`, JSON.stringify(userProfile));
    
    
    updateProfile({
      ...currentUser,
      firstName: userProfile.firstName,
      lastName: userProfile.lastName
    });
    
    setFormSuccess("Profile information updated successfully!");
    
    
    setTimeout(() => setFormSuccess(null), 3000);
  };

  
  const handlePasswordChange = (e) => {
    e.preventDefault();
    
    
    if (passwordData.new.length < 8) {
      setFormError("Password must be at least 8 characters long.");
      return;
    }
    
    if (passwordData.new !== passwordData.confirm) {
      setFormError("Passwords do not match.");
      return;
    }
    
    
    setFormSuccess("Password changed successfully!");
    setPasswordData({
      current: '',
      new: '',
      confirm: ''
    });
    
    
    setTimeout(() => setFormSuccess(null), 3000);
  };

  
  const handleSaveAddress = (e) => {
    e.preventDefault();
    
    
    if (!newAddress.name || !newAddress.line1 || !newAddress.city || !newAddress.state || !newAddress.zip) {
      setFormError("Please fill in all required fields");
      return;
    }
    
    let updatedAddresses;
    
    if (isEditingAddress !== null) {
      
      updatedAddresses = addresses.map(addr => 
        addr.id === isEditingAddress 
          ? { ...newAddress, id: isEditingAddress } 
          : newAddress.isDefault ? { ...addr, isDefault: false } : addr
      );
    } else {
      
      const newId = Date.now();
      const addressToAdd = { ...newAddress, id: newId };
      
      
      if (newAddress.isDefault) {
        updatedAddresses = addresses.map(addr => ({...addr, isDefault: false}));
        updatedAddresses.push(addressToAdd);
      } else {
        
        if (addresses.length === 0) {
          addressToAdd.isDefault = true;
        }
        updatedAddresses = [...addresses, addressToAdd];
      }
    }
    
    
    localStorage.setItem(`addresses_${currentUser.email}`, JSON.stringify(updatedAddresses));
    setAddresses(updatedAddresses);
    
    
    setNewAddress({
      name: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
      country: 'United States',
      isDefault: false
    });
    
    setIsEditingAddress(null);
    setShowAddressForm(false);
    setFormSuccess("Address saved successfully!");
    
    
    setTimeout(() => setFormSuccess(null), 3000);
  };

  
  const handleEditAddress = (id) => {
    const addressToEdit = addresses.find(addr => addr.id === id);
    if (addressToEdit) {
      setNewAddress({ ...addressToEdit });
      setIsEditingAddress(id);
      setShowAddressForm(true);
      
      
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  
  const handleDeleteAddress = (id) => {
    if (!window.confirm("Are you sure you want to delete this address?")) {
      return;
    }
    
    const updatedAddresses = addresses.filter(addr => addr.id !== id);
    
    
    const deletedAddress = addresses.find(addr => addr.id === id);
    if (deletedAddress && deletedAddress.isDefault && updatedAddresses.length > 0) {
      updatedAddresses[0].isDefault = true;
    }
    
    localStorage.setItem(`addresses_${currentUser.email}`, JSON.stringify(updatedAddresses));
    setAddresses(updatedAddresses);
    setFormSuccess("Address deleted successfully!");
    
    setTimeout(() => setFormSuccess(null), 3000);
  };

  
  const handleSetDefaultAddress = (id) => {
    const updatedAddresses = addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    }));
    
    localStorage.setItem(`addresses_${currentUser.email}`, JSON.stringify(updatedAddresses));
    setAddresses(updatedAddresses);
    setFormSuccess("Default address updated!");
    
    setTimeout(() => setFormSuccess(null), 3000);
  };

  
  const renderTabContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return (
          <div className="dashboard-content">
            <h2 className="section-title">Dashboard</h2>
            
            <div className="welcome-message">
              <h3>Welcome back, {userProfile.firstName}!</h3>
              <p>From your account dashboard you can view your recent orders, manage your shipping addresses, and edit your account details or password.</p>
            </div>
            
            <div className="dashboard-cards">
              <div className="dashboard-card">
                <h3>Orders</h3>
                <p>{orders.length} recent orders</p>
                <button 
                  className="account-link-btn"
                  onClick={() => setActiveTab('orders')}
                >
                  View All Orders
                </button>
              </div>
              
              <div className="dashboard-card">
                <h3>Addresses</h3>
                <p>{addresses.length} saved addresses</p>
                <button 
                  className="account-link-btn"
                  onClick={() => setActiveTab('addresses')}
                >
                  Manage Addresses
                </button>
              </div>
              
              <div className="dashboard-card">
                <h3>Wishlist</h3>
                <p>See your saved items</p>
                <Link to="/wishlist" className="account-link-btn">
                  View Wishlist
                </Link>
              </div>
              
              <div className="dashboard-card">
                <h3>Basket</h3>
                <p>Items ready for checkout</p>
                <Link to="/basket" className="account-link-btn">
                  View Basket
                </Link>
              </div>
            </div>
            
            <div className="recent-activity">
              <h3>Recent Activity</h3>
              
              <div className="activity-section">
                <h4>Recent Orders</h4>
                {orders.length > 0 ? (
                  <div className="recent-orders">
                    {orders.slice(0, 2).map(order => (
                      <div key={order.id} className="activity-item order-item">
                        <div className="activity-details">
                          <p className="activity-title">Order #{order.id}</p>
                          <p className="activity-subtitle">{order.date} - ${order.total.toFixed(2)}</p>
                        </div>
                        <span className={`order-status ${order.status.toLowerCase()}`}>
                          {order.status}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>You haven't placed any orders yet.</p>
                )}
                
                {orders.length > 0 && (
                  <button 
                    className="view-all-link" 
                    onClick={() => setActiveTab('orders')}
                  >
                    View all orders
                  </button>
                )}
              </div>
              
              <div className="activity-section">
                <h4>Recent Reviews</h4>
                {reviews.length > 0 ? (
                  <div className="recent-reviews">
                    {reviews.slice(0, 2).map(review => (
                      <div key={review.id} className="activity-item review-item">
                        <div className="review-product-img">
                          <img src={review.productImage} alt={review.productName} />
                        </div>
                        <div className="activity-details">
                          <p className="activity-title">{review.productName}</p>
                          <div className="review-rating">
                            {'★'.repeat(review.rating)}
                            {'☆'.repeat(5 - review.rating)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>You haven't written any reviews yet.</p>
                )}
                
                {reviews.length > 0 && (
                  <button 
                    className="view-all-link" 
                    onClick={() => setActiveTab('reviews')}
                  >
                    View all reviews
                  </button>
                )}
              </div>
            </div>
          </div>
        );
        
      case 'profile':
        return (
          <div className="profile-content">
            <h2 className="section-title">My Profile</h2>
            
            <div className="account-profile">
              <div className="profile-picture-section">
                <div className="profile-picture">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" />
                  ) : (
                    <div className="profile-initial">
                      {userProfile.firstName ? userProfile.firstName[0].toUpperCase() : 'U'}
                    </div>
                  )}
                </div>
                
                <input 
                  type="file" 
                  id="profile-photo" 
                  ref={fileInputRef}
                  accept="image/*" 
                  onChange={handleImageUpload} 
                  style={{display: 'none'}} 
                />
                
                <button 
                  className="change-photo-btn" 
                  onClick={() => fileInputRef.current.click()}
                >
                  Change Photo
                </button>
                
                <button 
                  className="remove-photo-btn" 
                  onClick={() => {
                    setProfileImage(null);
                    localStorage.removeItem(`profileImage_${currentUser.email}`);
                    setFormSuccess("Profile picture removed");
                    setTimeout(() => setFormSuccess(null), 3000);
                  }}
                  disabled={!profileImage}
                >
                  Remove Photo
                </button>
              </div>
              
              <div className="profile-form">
                <form onSubmit={handleProfileUpdate}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input 
                        type="text" 
                        id="firstName"
                        value={userProfile.firstName} 
                        onChange={(e) => setUserProfile({...userProfile, firstName: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName"
                        value={userProfile.lastName} 
                        onChange={(e) => setUserProfile({...userProfile, lastName: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      value={userProfile.email} 
                      disabled
                    />
                    <small>Email cannot be changed</small>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      value={userProfile.phone} 
                      onChange={(e) => setUserProfile({...userProfile, phone: e.target.value})}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="birthDate">Birth Date</label>
                    <input 
                      type="date" 
                      id="birthDate"
                      value={userProfile.birthDate} 
                      onChange={(e) => setUserProfile({...userProfile, birthDate: e.target.value})}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="bio">About Me</label>
                    <textarea 
                      id="bio"
                      value={userProfile.bio} 
                      onChange={(e) => setUserProfile({...userProfile, bio: e.target.value})}
                      placeholder="Tell us a little about yourself..."
                      rows={3}
                    ></textarea>
                  </div>
                  
                  <div className="form-actions">
                    <button type="submit" className="primary-btn">
                      Save Changes
                    </button>
                    <button 
                      type="button" 
                      className="secondary-btn" 
                      onClick={() => setActiveTab('dashboard')}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
        
      case 'security':
        return (
          <div className="security-content">
            <h2 className="section-title">Password & Security</h2>
            
            <div className="password-section">
              <h3>Change Password</h3>
              <form onSubmit={handlePasswordChange}>
                <div className="form-group">
                  <label htmlFor="currentPassword">Current Password</label>
                  <input 
                    type="password" 
                    id="currentPassword"
                    value={passwordData.current}
                    onChange={(e) => setPasswordData({...passwordData, current: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="newPassword">New Password</label>
                  <input 
                    type="password" 
                    id="newPassword"
                    value={passwordData.new}
                    onChange={(e) => setPasswordData({...passwordData, new: e.target.value})}
                    required
                  />
                  <small>Password must be at least 8 characters long</small>
                </div>
                
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm New Password</label>
                  <input 
                    type="password" 
                    id="confirmPassword"
                    value={passwordData.confirm}
                    onChange={(e) => setPasswordData({...passwordData, confirm: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="primary-btn">
                    Change Password
                  </button>
                </div>
              </form>
            </div>
            
            <div className="account-security">
              <h3>Account Security</h3>
              
              <div className="security-option">
                <div className="security-option-info">
                  <h4>Two-Factor Authentication</h4>
                  <p>Add an extra layer of security to your account</p>
                </div>
                <button className="security-btn">Enable</button>
              </div>
              
              <div className="security-option">
                <div className="security-option-info">
                  <h4>Recent Devices</h4>
                  <p>See devices that have logged into your account</p>
                </div>
                <button className="security-btn">View Devices</button>
              </div>
              
              <div className="security-option danger">
                <div className="security-option-info">
                  <h4>Delete Account</h4>
                  <p>Permanently delete your account and all data</p>
                </div>
                <button 
                  className="delete-btn"
                  onClick={() => {
                    if (window.confirm("Are you absolutely sure you want to delete your account? This action cannot be undone.")) {
                      alert("Account deletion request submitted. Your account will be deleted in 14 days.");
                    }
                  }}
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        );
        
      case 'addresses':
        return (
          <div className="addresses-content">
            <h2 className="section-title">My Addresses</h2>
            
            {showAddressForm && (
              <div className="address-form-container">
                <h3>{isEditingAddress !== null ? 'Edit Address' : 'Add New Address'}</h3>
                
                <form onSubmit={handleSaveAddress}>
                  <div className="form-group">
                    <label htmlFor="addressName">Address Name</label>
                    <input 
                      type="text" 
                      id="addressName"
                      placeholder="Home, Work, etc."
                      value={newAddress.name}
                      onChange={(e) => setNewAddress({...newAddress, name: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="addressLine1">Address Line 1</label>
                    <input 
                      type="text" 
                      id="addressLine1"
                      placeholder="Street address, P.O. box, company name"
                      value={newAddress.line1}
                      onChange={(e) => setNewAddress({...newAddress, line1: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="addressLine2">Address Line 2 (Optional)</label>
                    <input 
                      type="text" 
                      id="addressLine2"
                      placeholder="Apartment, suite, unit, building, floor, etc."
                      value={newAddress.line2}
                      onChange={(e) => setNewAddress({...newAddress, line2: e.target.value})}
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="addressCity">City</label>
                      <input 
                        type="text" 
                        id="addressCity"
                        value={newAddress.city}
                        onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="addressState">State / Province</label>
                      <input 
                        type="text" 
                        id="addressState"
                        value={newAddress.state}
                        onChange={(e) => setNewAddress({...newAddress, state: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="addressZip">Zip / Postal Code</label>
                      <input 
                        type="text" 
                        id="addressZip"
                        value={newAddress.zip}
                        onChange={(e) => setNewAddress({...newAddress, zip: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="addressCountry">Country</label>
                      <select 
                        id="addressCountry"
                        value={newAddress.country}
                        onChange={(e) => setNewAddress({...newAddress, country: e.target.value})}
                      >
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        {/* Add more countries as needed */}
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-checkbox">
                    <input 
                      type="checkbox" 
                      id="defaultAddress"
                      checked={newAddress.isDefault}
                      onChange={(e) => setNewAddress({...newAddress, isDefault: e.target.checked})}
                    />
                    <label htmlFor="defaultAddress">Set as default address</label>
                  </div>
                  
                  <div className="form-actions">
                    <button type="submit" className="primary-btn">
                      {isEditingAddress !== null ? 'Update Address' : 'Save Address'}
                    </button>
                    <button 
                      type="button" 
                      className="secondary-btn" 
                      onClick={() => {
                        setShowAddressForm(false);
                        setIsEditingAddress(null);
                        setNewAddress({
                          name: '',
                          line1: '',
                          line2: '',
                          city: '',
                          state: '',
                          zip: '',
                          country: 'United States',
                          isDefault: false
                        });
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {!showAddressForm && (
              <button 
                className="add-address-btn"
                onClick={() => setShowAddressForm(true)}
              >
                + Add New Address
              </button>
            )}
            
            <div className="addresses-list">
              {addresses.length === 0 ? (
                <div className="no-addresses">
                  <p>You don't have any saved addresses yet.</p>
                </div>
              ) : (
                addresses.map(address => (
                  <div 
                    key={address.id} 
                    className={`address-card ${address.isDefault ? 'default' : ''}`}
                  >
                    {address.isDefault && (
                      <span className="default-badge">Default</span>
                    )}
                    
                    <h3>{address.name}</h3>
                    <p>{address.line1}</p>
                    {address.line2 && <p>{address.line2}</p>}
                    <p>{address.city}, {address.state} {address.zip}</p>
                    <p>{address.country}</p>
                    
                    <div className="address-actions">
                      <button 
                        className="edit-btn"
                        onClick={() => handleEditAddress(address.id)}
                      >
                        Edit
                      </button>
                      
                      <button 
                        className="delete-btn"
                        onClick={() => handleDeleteAddress(address.id)}
                      >
                        Delete
                      </button>
                      
                      {!address.isDefault && (
                        <button 
                          className="default-btn"
                          onClick={() => handleSetDefaultAddress(address.id)}
                        >
                          Set as Default
                        </button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        );
        
      case 'orders':
        return (
          <div className="orders-content">
            <h2 className="section-title">My Orders</h2>
            
            {orders.length === 0 ? (
              <div className="no-orders">
                <p>You haven't placed any orders yet.</p>
                <Link to="/" className="shop-now-btn">Shop Now</Link>
              </div>
            ) : (
              <div className="orders-list">
                {orders.map(order => (
                  <div key={order.id} className="order-card">
                    <div className="order-header">
                      <div>
                        <h3>Order #{order.id}</h3>
                        <p className="order-date">Placed on {order.date}</p>
                      </div>
                      
                      <div className="order-status-total">
                        <span className={`status-badge ${order.status.toLowerCase()}`}>{order.status}</span>
                        <p className="order-total">${order.total.toFixed(2)}</p>
                      </div>
                    </div>
                    
                    <div className="order-items">
                      {order.items.map(item => (
                        <div key={item.id} className="order-item">
                          <div className="item-image">
                            <img src={item.image} alt={item.name} />
                          </div>
                          
                          <div className="item-details">
                            <h4>{item.name}</h4>
                            <p className="item-price">${item.price.toFixed(2)} × {item.quantity}</p>
                          </div>
                          
                          <div className="item-buttons">
                            <button className="review-item">Write a Review</button>
                            <button className="buy-again">Buy Again</button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="order-actions">
                      <button className="track-order-btn">Track Order</button>
                      <button className="view-details-btn">View Order Details</button>
                      
                      {order.status === 'Processing' && (
                        <button className="cancel-order-btn">Cancel Order</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
        
      case 'reviews':
        return (
          <div className="reviews-content">
            <h2 className="section-title">My Reviews</h2>
            
            {reviews.length === 0 ? (
              <div className="no-reviews">
                <p>You haven't written any reviews yet.</p>
              </div>
            ) : (
              <div className="reviews-list">
                {reviews.map(review => (
                  <div key={review.id} className="review-card">
                    <div className="review-product">
                      <img src={review.productImage} alt={review.productName} />
                      <h3>{review.productName}</h3>
                    </div>
                    
                    <div className="review-content">
                      <div className="review-rating">
                        {'★'.repeat(review.rating)}
                        {'☆'.repeat(5 - review.rating)}
                      </div>
                      
                      <p className="review-date">Written on {review.date}</p>
                      <p className="review-text">{review.comment}</p>
                      
                      <div className="review-actions">
                        <button className="edit-review-btn">Edit Review</button>
                        <button className="delete-review-btn">Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
        
      default:
        return <div>Select a section from the sidebar.</div>;
    }
  };

  return (
    <div className="account-page">
      
      {formSuccess && (
        <div className="status-message success">
          {formSuccess}
        </div>
      )}
      
      {formError && (
        <div className="status-message error">
          {formError}
          <button 
            className="close-message" 
            onClick={() => setFormError(null)}
          >
            ×
          </button>
        </div>
      )}
      
      <div className="container">
        <div className="account-header">
          <h1>My Account</h1>
          <button className="sign-out-btn" onClick={signOut}>
            Sign Out
          </button>
          
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? 'Close Menu' : 'Menu'}
          </button>
        </div>
        
        <div className={`account-layout ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <div className="account-sidebar">
            <div className="user-info">
              <div className="user-avatar">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" />
                ) : (
                  <div className="avatar-placeholder">
                    {userProfile.firstName ? userProfile.firstName[0].toUpperCase() : 'U'}
                  </div>
                )}
              </div>
              <h3>{`${userProfile.firstName} ${userProfile.lastName}`}</h3>
            </div>
            
            <nav className="account-nav">
              <button 
                className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('dashboard');
                  setIsMobileMenuOpen(false);
                }}
              >
                Dashboard
              </button>
              
              <button 
                className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('profile');
                  setIsMobileMenuOpen(false);
                }}
              >
                Profile Information
              </button>
              
              <button 
                className={`nav-item ${activeTab === 'security' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('security');
                  setIsMobileMenuOpen(false);
                }}
              >
                Password & Security
              </button>
              
              <button 
                className={`nav-item ${activeTab === 'addresses' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('addresses');
                  setIsMobileMenuOpen(false);
                }}
              >
                My Addresses
              </button>
              
              <button 
                className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('orders');
                  setIsMobileMenuOpen(false);
                }}
              >
                My Orders
              </button>
              
              <button 
                className={`nav-item ${activeTab === 'reviews' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('reviews');
                  setIsMobileMenuOpen(false);
                }}
              >
                My Reviews
              </button>
              
              <Link to="/wishlist" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
                My Wishlist
              </Link>
              
              <Link to="/basket" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
                My Basket
              </Link>
            </nav>
          </div>
          
          <main className="account-main">
            {renderTabContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Account;