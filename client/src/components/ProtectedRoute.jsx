// src/components/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  
  if (!currentUser) {
    
    return <Navigate to="/signin" />;
  }
  
  return children;
};

export default ProtectedRoute;