// components/ProductGrid/ProductGrid.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products, title }) => {
  return (
    <section className="product-grid section-padding">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;