import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../Styles/dashboard.css";
import { useNavigate } from "react-router-dom";

const dashboard = () => {
  const { register, handleSubmit, reset } = useForm();
  const [products, setProducts] = useState([]);

  const onSubmit = (data) => {
    setProducts([...products, data]);
    reset();
  };

  return (
    <div className="admin-container">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Products</li>
          <li>Categories</li>
          <li>Orders</li>
          <li>Users</li>
        </ul>
      </aside>

      <main className="main-content">
        <h1>Dashboard Overview</h1>

        <div className="dashboard-stats">
          <div className="stat-card">Products: {products.length}</div>
          <div className="stat-card">Orders: 0</div>
          <div className="stat-card">Users: 0</div>
        </div>

        <div className="form-section">
          <h2>Add New craft</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="product-form">
            <input
              type="text"
              placeholder="Product Name"
              {...register("name", { required: true })}
            />
            <input
              type="text"
              placeholder="Image URL"
              {...register("image", { required: true })}
            />
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
            />
            <input
              type="text"
              placeholder="Category"
              {...register("category", { required: true })}
            />
            <textarea placeholder="Description" {...register("description")} />
            <button type="submit">Add Product</button>
          </form>
        </div>

        <div className="product-list">
          <h2>Product List</h2>
          {products.length === 0 ? (
            <p>No products added yet.</p>
          ) : (
            <div className="product-grid">
              {products.map((prod, index) => (
                <div className="product-card" key={index}>
                  <img src={prod.image} alt={prod.name} />
                  <h3>{prod.name}</h3>
                  <p>Price: ${prod.price}</p>
                  <p>Category: {prod.category}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default dashboard;
