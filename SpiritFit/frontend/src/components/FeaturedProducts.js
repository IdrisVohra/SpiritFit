import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (productId, optionType, value) => {
    setSelectedOptions(prev => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [optionType]: value
      }
    }));
  };

  // Sample product data with variants
  const products = [
    {
      id: 1,
      name: 'Premium T-Shirt',
      basePrice: 29.99,
      images: {
        red: 'https://via.placeholder.com/300x400/ff0000/ffffff',
        blue: 'https://via.placeholder.com/300x400/0000ff/ffffff',
        black: 'https://via.placeholder.com/300x400/000000/ffffff'
      },
      colors: ['red', 'blue', 'black'],
      sizes: ['S', 'M', 'L', 'XL'],
      category: 'T-Shirts',
      discount: 15 // percentage
    },
    {
      id: 2,
      name: 'Designer Jeans',
      basePrice: 59.99,
      images: {
        blue: 'https://via.placeholder.com/300x400/1e90ff/ffffff',
        black: 'https://via.placeholder.com/300x400/333333/ffffff'
      },
      colors: ['blue', 'black'],
      sizes: ['28', '30', '32', '34'],
      category: 'Jeans'
    },
    // Add other products similarly
  ];

  const calculatePrice = (product) => {
    if (product.discount) {
      return (product.basePrice * (1 - product.discount / 100)).toFixed(2);
    }
    return product.basePrice.toFixed(2);
  };

  return (
    <section className="featured-products">
      <div className="container">
        <div className="section-header">
          <h2>Featured Products</h2>
          <div className="sort-options">
            <span>Sort by:</span>
            <select>
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>
        
        <div className="promo-banner">
          <p>New Collection Cut Now — Trendy Men's T-Shirt! ▲ Free Shipping on Orders Above $999 ▶ Buy 2 Get 1 Free - Limited Period!</p>
        </div>

        <div className="products-grid">
          {products.map((product) => {
            const currentSelection = selectedOptions[product.id] || {};
            const selectedColor = currentSelection.color || product.colors[0];
            const selectedSize = currentSelection.size || product.sizes[0];
            const displayPrice = calculatePrice(product);

            return (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img 
                    src={product.images[selectedColor]} 
                    alt={product.name} 
                    className="product-image"
                  />
                  {product.discount && (
                    <span className="discount-badge">-{product.discount}%</span>
                  )}
                </div>
                
                <div className="product-details">
                  <h3 className="product-title">{product.name}</h3>
                  
                  <div className="price-container">
                    {product.discount ? (
                      <>
                        <span className="original-price">${product.basePrice.toFixed(2)}</span>
                        <span className="sale-price">${displayPrice}</span>
                      </>
                    ) : (
                      <span className="price">${displayPrice}</span>
                    )}
                  </div>
                  
                  <div className="color-options">
                    {product.colors.map(color => (
                      <button
                        key={color}
                        className={`color-swatch ${selectedColor === color ? 'active' : ''}`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleOptionChange(product.id, 'color', color)}
                        aria-label={`Select ${color} color`}
                      />
                    ))}
                  </div>
                  
                  <select
                    className="size-selector"
                    value={selectedSize}
                    onChange={(e) => handleOptionChange(product.id, 'size', e.target.value)}
                  >
                    {product.sizes.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                  
                  <div className="product-actions">
                    <button className="add-to-cart">Add to Cart</button>
                    <button className="quick-view">Quick View</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;