// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [language, setLanguage] = useState("en");
  
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
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
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  };
  
  const signUp = (userData) => {
    
    const user = {
      email: userData.email,
      firstName: userData.first_name,
      lastName: userData.last_name,
      isAuthenticated: true
    };
    
    setCurrentUser(user);
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  };
  
  const updateProfile = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };
  
  const signOut = () => {
    setCurrentUser(null);
    
    localStorage.removeItem('user');
  };
  const changeLanguage = (lang) => {
    setLanguage(lang);

    // localStorage.removeItem('user');
  };
  
  return (
    <AuthContext.Provider value={{ currentUser, language, signIn, signUp, signOut, updateProfile, changeLanguage }}>
      {children}
    </AuthContext.Provider>
  );
};