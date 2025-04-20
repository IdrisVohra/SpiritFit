import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch product details based on the ID
  const product = {
    id: id,
    name: `Product ${id}`,
    price: 49.99,
    description: 'This is a detailed description of the product.',
    image: 'https://via.placeholder.com/600x800'
  };

  return (
    <div className="product-detail">
      <div className="product-images">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="description">{product.description}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;