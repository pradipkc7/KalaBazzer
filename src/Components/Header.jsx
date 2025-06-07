import React, { useState } from 'react'
import { Search, Heart, ShoppingCart, Star, User, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

    const handleSearch = () => {
        // Search functionality would be implemented here
        console.log('Searching for:', searchQuery);
      };
  return (
    <header className="header-container">
          <div className="header-inner-container">
            {/* Logo */}
            <div className="dashboard-logo">
              <h1 >KalaBazzer</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-amber-800 transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-amber-800 transition-colors">Categories</a>
              <a href="#" className="text-gray-700 hover:text-amber-800 transition-colors">Artisans</a>
              <a href="#" className="text-gray-700 hover:text-amber-800 transition-colors">About</a>
            </nav>

            {/* Search Bar */}
            <div className="search-conatiner">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search crafts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                <button 
                  onClick={handleSearch}
                  className="search-button"
                >
                  <Search size={20} />
                </button>
              </div>
            </div>
            {/* login and signiup button */}
            <div className="btns-container">
                <button onClick={()=>{navigate("/login")}}>Login</button>
                <button onClick={()=>{navigate("/register")}}>Sign up</button>
            </div>
            </div>
      </header>

  )
}
