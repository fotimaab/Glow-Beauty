import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CategorySection from './components/CategorySection/CategorySection';
import ProductSection from './components/ProductSection/ProductSection';
import FoundationFinder from './components/FoundationFinder/FoundationFinder';
import Footer from './components/Footer/Footer';
import CameraModal from './components/CameraModal/CameraModal';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './accounts/SignIn';
import LogIn from './accounts/LogIn';
import Careers from './customerServiceComponents/Careers';
import AboutUs from './customerServiceComponents/AboutUs';
import Resources from './customerServiceComponents/Resources';
import Account from './accounts/Account';
import './App.css';
import { CartProvider } from './context/CartContext';

// import { AuthProvider } from './context/AuthContext';

// Pages
import Home from './pages/Home';
import MakeupProduct from './pages/MakeupProduct';
import SkincareProduct from './pages/SkincareProduct';
import FragranceProducts from './pages/FragranceProducts';
import HairProducts from './pages/HairProducts';
import ToolsProducts from './pages/ToolsProducts';
import NewProduct from './pages/NewProduct';
import Wishlist from './pages/Wishlist';
import Basket from './pages/Basket';

// // Auth pages
// import Login from './pages/auth/Login';
// import Register from './pages/auth/Register';

// Customer service pages
import CustomerService from "./customerServiceComponents/CustomerServices";
// import AboutUs from './pages/customerService/AboutUs';
// import Resources from './pages/customerService/Resources'

function App() {
  const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);
  
  const handleOpenCameraModal = () => {
    setIsCameraModalOpen(true);
  };
  
  const handleCloseCameraModal = () => {
    setIsCameraModalOpen(false);
  };
  
  return (
    <AuthProvider>
      <CartProvider>
       <Router>
    <div className="App">
      <Header onOpenCameraModal={handleOpenCameraModal} />
      
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/makeup" element={<MakeupProduct />} />
        <Route path="/customer" element={<MakeupProduct />} />
        <Route path="/skincare" element={<SkincareProduct />} />
        <Route path="/fragrance" element={<FragranceProducts />} />
        <Route path="/hair" element={<HairProducts />} />
        <Route path="/tools" element={<ToolsProducts />} />
        <Route path="/new" element={<NewProduct />} />
        
        {/* User Account Pages */}
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<LogIn />} />
        {/* <Route path="/dashboard" element={<Account />} /> */}
        
        {/* Auth Pages */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        
        {/* Customer Service Pages */}
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/careers" element={<Careers />} />

        {/* <Route path="/about-us" element={<AboutUs />} />
        <Route path="/resources" element={<Resources />} /> */}
        
        {/* Redirect for any undefined routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
      {isCameraModalOpen && <CameraModal onClose={handleCloseCameraModal} />}
      {/* <CameraModal /> */}
      <Footer />
    </div>
  </Router>
  </CartProvider>
    </AuthProvider>
   
  );
}

export default App;