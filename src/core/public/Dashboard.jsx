import React, { useState } from 'react';
import { Header } from '../../Components/Header';
import "../../Styles/Dashboard.css"
import { Hero } from '../../Components/Hero';
import { FeaturedItem } from '../../Components/FeaturedItem';
import Newsletter from '../../Components/Newsletter';
import Footer from '../../Components/Footer';

const Dashboard = () => {
  
  const [favorites, setFavorites] = useState(new Set());

 

  const toggleFavorite = (itemId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(itemId)) {
      newFavorites.delete(itemId);
    } else {
      newFavorites.add(itemId);
    }
    setFavorites(newFavorites);
  };

  

  return (
    <div className="min-h-screen bg-stone-50 dashboard-main-container">
      {/* Header */}
      <Header/>
      {/* Hero Section */}
     <Hero/>

      {/* Featured Items Section */}
      <FeaturedItem/>

      {/* Newsletter Section */}
     <Newsletter/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Dashboard;