import React from 'react'; 
import "../../Styles/Login.css";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = (data) => {
    const storedUser = JSON.parse(localStorage.getItem("kalaBazzerUser"));

    if (!storedUser) {
      setError("email", {
        type: "manual",
        message: "No user found. Please register first.",
      });
      return;
    }

    if (
      data.email !== storedUser.email ||
      data.password !== storedUser.password
    ) {
      setError("password", {
        type: "manual",
        message: "Invalid email or password.",
      });
      return;
    }

    // Optional: set login state or token here
    alert("Login successful!");
    navigate("/dashboard"); // Change path as per your app
  };

  return (
    <div className="login-main-container">
      <div className="login-container">
        <div className="craft-pattern top-left">🎨</div>
        <div className="craft-pattern bottom-right">✨</div>

        <div className="logo-section">
          <div className="logo"></div>
          <div className="brand-name">Kalabazzer</div>
          <div className="tagline">Handcrafted Treasures & Artisan Creations</div>
        </div>

        <form id="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <div className="input-icon">📧</div>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <div className="input-icon">🔐</div>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
            </div>
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          <button type="submit" className="login-btn">
            LogIn to Marketplace
          </button>
        </form>

        <div className="footer-links">
          <button
            type="button"
            className="link-button"
            onClick={() => alert("Forgot Password clicked")}
          >
            Forgot Password?
          </button>
          <button
            type="button"
            className="link-button"
            onClick={() => navigate("/register")}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
