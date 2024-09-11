import React from 'react';
import './CategoryContent.scss';
import MenuCard from '../menu/MenuCard';

const CategoryContent = React.forwardRef(({ category, menu, index, selectedCategory }, ref) => {
  return (
    <div
      ref={ref}
      className={`category-section ${selectedCategory === index ? 'active' : ''}`}
    >
      <h2>{category}</h2>
      <div className="menu-items">
        {menu.map((item, itemIndex) => (
          <MenuCard key={itemIndex} item={item} />
        ))}
      </div>
    </div>
  );
});

export default CategoryContent;
