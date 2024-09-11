// src/components/category/CategoryList.js
import React from 'react';
import './CategoryList.scss';

const CategoryList = ({ categories, onCategoryClick, selectedCategory }) => {
  return (
    <div className="category-list">
      {categories.map(category => (
        <div
          key={category.id}
          className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
          onClick={() => onCategoryClick(category.id)}
        >
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
