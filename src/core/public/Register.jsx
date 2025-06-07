import React from 'react'; 
 import "../../Styles/Register.css"
function Register() { 
  return ( <div>

    <div class="decorative-element"></div>
    <div class="decorative-element"></div>
    
    <div class="container">
        <div class="left-section">
            <div class="craft-icon">🏺</div>
            <div class="welcome-text">
                <h1 class="welcome-title">KalaBazzer</h1>
                <p class="welcome-subtitle">Where Tradition Meets Creativity</p>
                <ul class="craft-features">
                    <li>Showcase your handmade masterpieces</li>
                    <li>Connect with craft enthusiasts worldwide</li>
                    <li>Learn from master artisans</li>
                    <li>Preserve traditional art forms</li>
                    <li>Build your crafting community</li>
                </ul>
            </div>
        </div>
        
        <div class="right-section">
            <div class="form-header">
                <h2 class="form-title">Join KalaBazzer</h2>
                <p class="form-subtitle">Begin your artisan journey with us</p>
            </div>



            <form id="signupForm">
                <div class="form-group">
                    <label for="craftName">Full Name</label>
                    <input type="text" id="craftName" name="craftName" required placeholder="Enter your full name"/>
                </div>

                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="your@email.com"/>
                </div>



                <div class="form-group">
                    <label for="password">Create Password</label>
                    <input type="password" id="password" name="password" required placeholder="Choose a strong password"/>
                    <div class="password-requirements" id="passwordReqs">
                        <div class="requirement" id="length">At least 8 characters</div>
                        <div class="requirement" id="uppercase">One uppercase letter</div>
                        <div class="requirement" id="lowercase">One lowercase letter</div>
                        <div class="requirement" id="number">One number</div>
                    </div>
                </div>

                <div class="form-group">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="Confirm your password"/>
                </div>

                <button type="submit" class="signup-button">
                    Create My Account
                </button>

                <div class="login-link">
                    Already part of KalaBazzer? <a href="#login">Sign In Here</a>
                </div>
            </form>
        </div>
    </div>
  </div>
  ); 
} 
 
export default Register; 
 