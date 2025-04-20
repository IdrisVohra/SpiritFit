// pages/Product/Product.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';

const Product = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  // In a real app, you would fetch this data based on the ID
  const product = {
    id: 1,
    name: 'Graphic Print T-Shirt',
    brand: 'Urban Monkey',
    price: 34.99,
    originalPrice: 49.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    details: '100% Cotton. Machine wash cold. Imported.',
    images: [
      '/images/products/tshirt-1.jpg',
      '/images/products/tshirt-2.jpg',
      '/images/products/tshirt-3.jpg'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Red'],
    category: 'clothing'
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    // Add to cart logic
    console.log(`Added ${quantity} ${product.name} (Size: ${selectedSize}) to cart`);
  };

  return (
    <div className="product-page section-padding">
      <div className="container">
        <div className="product-container">
          <div className="product-gallery">
            <div className="main-image">
              <img src={product.images[0]} alt={product.name} />
            </div>
            <div className="thumbnail-images">
              {product.images.map((image, index) => (
                <div key={index} className="thumbnail">
                  <img src={image} alt={`${product.name} ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="product-details">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-brand">{product.brand}</p>
            
            <div className="product-price">
              {product.originalPrice && (
                <span className="original-price">£{product.originalPrice}</span>
              )}
              <span className="current-price">£{product.price}</span>
              {product.originalPrice && (
                <span className="discount">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>

            <div className="product-options">
              <div className="size-selector">
                <h3>Size</h3>
                <div className="size-options">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="quantity-selector">
                <h3>Quantity</h3>
                <div className="quantity-controls">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
            </div>

            <button 
              className="btn btn-primary add-to-cart-btn"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            <div className="product-meta">
              <h3>Details</h3>
              <p>{product.details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;