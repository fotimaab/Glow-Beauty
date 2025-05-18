// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  
  
  useEffect(() => {
    const savedUser = localStorage.getItem('glowBeautyUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);
  
  const signIn = (userData) => {
    // In a real app, this would verify credentials with an API
    // Here we just save the user data
    const user = {
      email: userData.email,
      firstName: userData.firstName || 'User',
      lastName: userData.lastName || '',
      isAuthenticated: true
    };
    
    setCurrentUser(user);
    localStorage.setItem('glowBeautyUser', JSON.stringify(user));
    return user;
  };
  
  const signUp = (userData) => {
    
    const user = {
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      isAuthenticated: true
    };
    
    setCurrentUser(user);
    localStorage.setItem('glowBeautyUser', JSON.stringify(user));
    return user;
  };
  
  const updateProfile = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem('glowBeautyUser', JSON.stringify(userData));
  };
  
  const signOut = () => {
    setCurrentUser(null);
    
    localStorage.removeItem('glowBeautyUser');
  };
  
  return (
    <AuthContext.Provider value={{ currentUser, signIn, signUp, signOut, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};