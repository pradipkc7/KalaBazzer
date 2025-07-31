import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <aside className="sidebar">
      <h2 className="logo">CraftAdmin</h2>
      <nav>
        <ul>
          <li
            className="active"
            onClick={() => {
              window.location.href = "/dashboard";
            }}
          >
            Dashboard
          </li>

          <li
            onClick={() => {
              window.location.href = "/product";
            }}
          >
            Products
          </li>
          <li
            onClick={() => {
              window.location.href = "/Orders";
            }}
          >
            Orders
          </li>
          <li
            onClick={() => {
              window.location.href = "/Inventory";
            }}
          >
            Inventory
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
