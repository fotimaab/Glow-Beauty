import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Adjust path as needed
import './LogIn.css';

function LogIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [forgotPasswordSubmitted, setForgotPasswordSubmitted] = useState(false);
  
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleForgotPasswordChange = (e) => {
    setForgotPasswordEmail(e.target.value);
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    return newErrors;
  };

  const validateForgotPasswordEmail = () => {
    if (!forgotPasswordEmail.trim()) {
      return 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(forgotPasswordEmail)) {
      return 'Email address is invalid';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    setErrors({});
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await fetch("http://localhost:8000/api/account/login/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        const userData = {
          email: formData.email,
          ...data, // Include any additional user data from the response
          isAuthenticated: true
        };
        
        // Use AuthContext to sign in the user
        signIn(userData);
        
        // Store remember me preference
        if (formData.rememberMe) {
          localStorage.setItem('rememberMe', 'true');
        }
        
        // Navigate to account page or dashboard
        navigate('/account');
      } else {
        // Handle different error responses
        if (response.status === 400) {
          setLoginError('Invalid email or password. Please try again.');
        } else if (response.status === 401) {
          setLoginError('Invalid credentials. Please check your email and password.');
        } else if (response.status === 404) {
          setLoginError('Account not found. Please check your email or sign up.');
        } else if (response.status >= 500) {
          setLoginError('Server error. Please try again later.');
        } else {
          setLoginError(data.message || 'Login failed. Please try again.');
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        setLoginError('Unable to connect to server. Please check your internet connection.');
      } else {
        setLoginError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    
    const emailError = validateForgotPasswordEmail();
    if (emailError) {
      setErrors({ forgotPasswordEmail: emailError });
      return;
    }
    
    // Here you would typically make an API call to send reset email
    setForgotPasswordSubmitted(true);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {!showForgotPassword ? (
          <>
            <h2>Welcome Back!</h2>
            <p className="login-subtitle">Log in to your Glow Beauty account</p>
            
            {loginError && <div className="login-error-message">{loginError}</div>}
            
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="Enter your email"
                  disabled={isLoading}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? 'error' : ''}
                  placeholder="Enter your password"
                  disabled={isLoading}
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
              
              <div className="login-options">
                <div className="remember-me">
                  <input 
                    type="checkbox" 
                    id="rememberMe" 
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <button 
                  type="button" 
                  className="forgot-link"
                  onClick={() => setShowForgotPassword(true)}
                  disabled={isLoading}
                >
                  Forgot password?
                </button>
              </div>
              
              <button 
                type="submit" 
                className="login-btn"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Log In'}
              </button>
            </form>
            
            <div className="social-login">
              <p>Or continue with</p>
              <div className="social-buttons">
                <button className="social-btn google" disabled={isLoading}>
                  <i className="fab fa-google"></i> Google
                </button>
                <button className="social-btn facebook" disabled={isLoading}>
                  <i className="fab fa-facebook-f"></i> Facebook
                </button>
              </div>
            </div>
            
            <div className="signin-link">
              Don't have an account? <Link to="/signin">Sign Up</Link>
            </div>
          </>
        ) : (
          <>
            <button 
              className="back-to-login-btn"
              onClick={() => {
                setShowForgotPassword(false);
                setForgotPasswordSubmitted(false);
                setErrors({});
              }}
            >
              &larr; Back to Login
            </button>
            
            <h2>Forgot Password</h2>
            
            {!forgotPasswordSubmitted ? (
              <>
                <p className="forgot-subtitle">
                  Enter your email address and we'll send you instructions to reset your password.
                </p>
                
                <form onSubmit={handleForgotPasswordSubmit} className="forgot-form">
                  <div className="form-group">
                    <label htmlFor="forgotPasswordEmail">Email Address</label>
                    <input
                      type="email"
                      id="forgotPasswordEmail"
                      value={forgotPasswordEmail}
                      onChange={handleForgotPasswordChange}
                      className={errors.forgotPasswordEmail ? 'error' : ''}
                      placeholder="Enter your email"
                    />
                    {errors.forgotPasswordEmail && (
                      <span className="error-message">{errors.forgotPasswordEmail}</span>
                    )}
                  </div>
                  
                  <button type="submit" className="login-btn">Send Reset Link</button>
                </form>
              </>
            ) : (
              <div className="password-reset-instructions">
                <div className="success-icon">✓</div>
                <h3>Check Your Email</h3>
                <p>We've sent password reset instructions to:</p>
                <p className="reset-email">{forgotPasswordEmail}</p>
                
                <div className="reset-steps">
                  <h4>How to reset your password:</h4>
                  <ol>
                    <li>Check your email inbox for a message from Glow Beauty.</li>
                    <li>Click the password reset link in the email.</li>
                    <li>Create a new password when prompted.</li>
                    <li>Use your new password to log in.</li>
                  </ol>
                </div>
                
                <p className="note">If you don't see the email in your inbox, please check your spam folder.</p>
                
                <button 
                  className="login-btn retry-btn"
                  onClick={() => {
                    setForgotPasswordSubmitted(false);
                    setForgotPasswordEmail('');
                  }}
                >
                  Send Again
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default LogIn;