import React from 'react';
import './Categories.css';

const Categories = () => {
  const categories = [
    { name: 'Men', image: 'https://via.placeholder.com/300x200' },
    { name: 'Women', image: 'https://via.placeholder.com/300x200' },
    { name: 'Kids', image: 'https://via.placeholder.com/300x200' },
    { name: 'Accessories', image: 'https://via.placeholder.com/300x200' }
  ];

  return (
    <section className="categories">
      <div className="container">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;