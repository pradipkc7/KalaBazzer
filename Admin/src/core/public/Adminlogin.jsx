import React from "react";
import { useForm } from "react-hook-form";
import "../../Styles/Adminlogin.css";

const AdminLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Placeholder for backend login validation
    console.log("Admin Credentials:", data);
    alert("Login successful (mock)");
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2> KalaBazzer Admin Login</h2>
        <form className="admin-login-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Admin Email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="form-error">{errors.password.message}</p>
          )}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
