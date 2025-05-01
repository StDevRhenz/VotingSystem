import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Tabs */}
        <div className="tab-container">
          <button
            className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Log In
          </button>
          <button
            className={`tab-button ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>

        <div className="form-container">
          {/* Login Form */}
          {activeTab === 'login' && (
            <form className="form">
              <div className="form-group">
                <label htmlFor="email">Email or Username</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email or username"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>

              <div className="form-row">
                <div className="checkbox-group">
                  <input id="remember-me" type="checkbox" />
                  <label htmlFor="remember-me">Remember me</label>
                </div>
                <a href="#" className="forgot-link">Forgot password?</a>
              </div>

              <button type="submit" className="submit-button">
                Sign In
              </button>

              <div className="form-footer">
                Not a member?{' '}
                <button
                  type="button"
                  className="text-link"
                  onClick={() => setActiveTab('register')}
                >
                  Register now
                </button>
              </div>
            </form>
          )}

          {/* Register Form */}
          {activeTab === 'register' && (
            <form className="form">
              <div className="form-group">
                <label htmlFor="register-name">Full Name</label>
                <input
                  id="register-name"
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="register-username">Username</label>
                <input
                  id="register-username"
                  type="text"
                  placeholder="Choose a username"
                />
              </div>

              <div className="form-group">
                <label htmlFor="register-email">Email</label>
                <input
                  id="register-email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="register-password">Password</label>
                <input
                  id="register-password"
                  type="password"
                  placeholder="Create a password"
                />
              </div>

              <div className="form-group">
                <label htmlFor="register-confirm-password">Confirm Password</label>
                <input
                  id="register-confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                />
              </div>

              <div className="checkbox-group terms-checkbox">
                <input id="terms" type="checkbox" />
                <label htmlFor="terms">
                  I agree to the{' '}
                  <a href="#" className="inline-link">Terms of Service</a>{' '}
                  and{' '}
                  <a href="#" className="inline-link">Privacy Policy</a>
                </label>
              </div>

              <button type="submit" className="submit-button">
                Create Account
              </button>

              <div className="form-footer">
                Already have an account?{' '}
                <button
                  type="button"
                  className="text-link"
                  onClick={() => setActiveTab('login')}
                >
                  Log in
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;