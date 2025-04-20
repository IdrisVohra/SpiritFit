// pages/Home/Home.js
import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Newsletter from '../components/Newsletter';
import './Home.css';

const Home = () => {
  const newArrivals = [
    {
      id: 1,
      name: 'Graphic Print T-Shirt',
      brand: 'Urban Monkey',
      price: 34.99,
      originalPrice: 49.99,
      image: '/images/products/tshirt-1.jpg',
      sale: true
    },
    // Add more products...
  ];

  const bestSellers = [
    {
      id: 5,
      name: 'Cargo Joggers',
      brand: 'Street King',
      price: 59.99,
      image: '/images/products/joggers-1.jpg'
    },
    // Add more products...
  ];

  return (
    <div className="home-page">
      <Hero />
      <ProductGrid products={newArrivals} title="New Arrivals" />
      <ProductGrid products={bestSellers} title="Best Sellers" />
      <Newsletter />
    </div>
  );
};

export default Home;