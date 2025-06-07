import React from 'react'
import { Search, Heart, ShoppingCart, Star, User, Menu, X } from 'lucide-react';

export const FeaturedItem = () => {

    const craftItems = [
        {
          id: 1,
          title: "Craft Item 1",
          description: "Handmade with love and tradition.",
          price: "$45.00",
          rating: 4.8,
          reviews: 24,
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
        },
        {
          id: 2,
          title: "Craft Item 2", 
          description: "Handmade with love and tradition.",
          price: "$32.50",
          rating: 4.9,
          reviews: 18,
          image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=300&fit=crop"
        },
        {
          id: 3,
          title: "Craft Item 3",
          description: "Handmade with love and tradition.", 
          price: "$28.75",
          rating: 4.7,
          reviews: 31,
          image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=300&fit=crop"
        },
        {
          id: 4,
          title: "Craft Item 4",
          description: "Handmade with love and tradition.",
          price: "$52.00",
          rating: 5.0,
          reviews: 12,
          image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop"
        }
      ];
  return (
  <div>
      <h3 className="text-3xl font-bold text-amber-900 mb-12">Featured Items</h3>
      
      <div className="product-grid">
        {craftItems.map((item) => (
            <div key={item.id} className="card">
            <div className="relative overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              
              
            </div>
            
            <div className="card-content">
              <h4 className="card-title">{item.title}</h4>
              <p className="card-desc">{item.description}</p>
              
              <div className="card-rating">
                <div >
                  {[...Array(5)].map((_, i) => (
                      <Star 
                      key={i}
                      size={16}
                      className={i < Math.floor(item.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
                      />
                      ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {item.rating} ({item.reviews} reviews)
                </span>
              </div>
              
              <div className="card-actions">
                <span className="card-price">{item.price}</span>
                <button className="card-button">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      

 </div>
 </div>
  )
}
