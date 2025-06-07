import React from 'react'; 
import "../../Styles/Login.css"
 
function Login() { 
  return ( 
    <div className="login-main-container">

    <div class="login-container">
        <div class="craft-pattern top-left">🎨</div>
        <div class="craft-pattern bottom-right">✨</div>
        
        <div class="logo-section">
            <div class="logo"></div>
            <div class="brand-name">Kalabazzer</div>
            <div class="tagline">Handcrafted Treasures & Artisan Creations</div>
        </div>

        <form id="loginForm">
            <div class="form-group">
                <label for="email">Email Address</label>
                <div class="input-wrapper">
                    <div class="input-icon">📧</div>
                    <input type="email" id="email" placeholder="Enter your email" required/>
                </div>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <div class="input-wrapper">
                    <div class="input-icon">🔐</div>
                    <input type="password" id="password" placeholder="Enter your password" required/>
                </div>
            </div>

            <button type="submit" class="login-btn">
                Sign In to Marketplace
            </button>
        </form>
        <div class="footer-links">
            <a href="#" onclick="showMessage('Forgot Password clicked')">Forgot Password?</a>
            <a href="#" onclick="showMessage('Create Account clicked')">Create Account</a>
        </div>
    </div>

    </div>
  ); 
} 
 
export default Login;