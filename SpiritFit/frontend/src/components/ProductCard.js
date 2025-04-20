// components/ProductCard/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-image">
        <img src={product.image} alt={product.name} />
        {product.sale && <span className="sale-badge">Sale</span>}
      </Link>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-brand">{product.brand}</p>
        <div className="product-price">
          {product.originalPrice && (
            <span className="original-price">£{product.originalPrice}</span>
          )}
          <span className="current-price">£{product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;