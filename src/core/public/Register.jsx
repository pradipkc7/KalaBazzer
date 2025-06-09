import React from 'react';
import { useForm } from 'react-hook-form';
import "../../Styles/Register.css";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    const existingUser = JSON.parse(localStorage.getItem("kalaBazzerUser"));

    if (existingUser && existingUser.email === data.email) {
      alert("A user with this email already exists.");
      return;
    }

    localStorage.setItem("kalaBazzerUser", JSON.stringify(data));
    alert("Registration successful!");
    // Optional: redirect to login page or clear form
  };

  return (
    <div className="register-container">
      <div className="decorative-element"></div>
      <div className="decorative-element"></div>

      <div className="container">
        <div className="left-section">
          <div className="craft-icon">🏺</div>
          <div className="welcome-text">
            <h1 className="welcome-title">KalaBazzer</h1>
            <p className="welcome-subtitle">Where Tradition Meets Creativity</p>
            <ul className="craft-features">
              <li>Showcase your handmade masterpieces</li>
              <li>Connect with craft enthusiasts worldwide</li>
              <li>Learn from master artisans</li>
              <li>Preserve traditional art forms</li>
              <li>Build your crafting community</li>
            </ul>
          </div>
        </div>

        <div className="right-section">
          <div className="form-header">
            <h2 className="form-title">Join KalaBazzer</h2>
            <p className="form-subtitle">Begin your artisan journey with us</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="craftName">Full Name</label>
              <input
                type="text"
                id="craftName"
                placeholder="Enter your full name"
                {...register("craftName", { required: "Full name is required" })}
              />
              {errors.craftName && <p className="error">{errors.craftName.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Create Password</label>
              <input
                type="password"
                id="password"
                placeholder="Choose a strong password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "At least 8 characters",
                  },
                  validate: {
                    hasUpper: (val) =>
                      /[A-Z]/.test(val) || "Must include an uppercase letter",
                    hasLower: (val) =>
                      /[a-z]/.test(val) || "Must include a lowercase letter",
                    hasNumber: (val) =>
                      /[0-9]/.test(val) || "Must include a number",
                  },
                })}
              />
              <div className="password-requirements">
                <div className="requirement">At least 8 characters</div>
                <div className="requirement">One uppercase letter</div>
                <div className="requirement">One lowercase letter</div>
                <div className="requirement">One number</div>
              </div>
              {errors.password && <p className="error">{errors.password.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword.message}</p>
              )}
            </div>

            <button type="submit" className="signup-button">
              Create My Account
            </button>

            <div className="login-link">
              Already part of KalaBazzer? <a href="/login">Sign In Here</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
