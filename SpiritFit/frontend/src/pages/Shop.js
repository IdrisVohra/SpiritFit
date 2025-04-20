// pages/Shop/Shop.js
import React, { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import './Shop.css';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'footwear', name: 'Footwear' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const allProducts = [
    // Array of all products
  ];

  const filteredProducts = activeCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeCategory);

  return (
    <div className="shop-page section-padding">
      <div className="container">
        <h1 className="page-title">Shop</h1>
        
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-filter ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
};

export default Shop;