// src/pages/menu/Menu.js
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Toolbar from '../../components/toolbar/Toolbar';
import CategoryList from '../../components/category/CategoryList';
import './menu.scss';
import { useAuth } from '../../context/AuthContext';
import CategoryContent from '../../components/category/CategoryContent';

const Menu = () => {
  const { token } = useAuth();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categoryRefs = useRef({});

  const fetchMenuData = async () => {
    if (!token) {
      window.location.href = '/login';
      return;
    }

    try {
      const response = await axios.post(
        'https://soal.staging.id/api/menu',
        { show_all: 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.status === 'success') {
        setCategories(response.data.result.categories);
      } else {
        console.error('Failed to fetch menu data:', response.data.message);
      }
    } catch (error) {
      console.error('Failed to fetch menu data', error);
    }
  };

  useEffect(() => {
    fetchMenuData();
  }, [token]);

  const handleCategoryClick = (id) => {
    setSelectedCategory(id);
    if (categoryRefs.current[id]) {
      categoryRefs.current[id].scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      <Toolbar text="Menu" />
      <div className="menu">
        <div className="sticky-category-list">
          <CategoryList
            categories={categories.map((cat, index) => ({ id: index, name: cat.category_name }))}
            onCategoryClick={handleCategoryClick}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="category-content">
          {categories.map((category, index) => (
            <CategoryContent
              key={index}
              ref={el => categoryRefs.current[index] = el}
              category={category.category_name}
              menu={category.menu}
              index={index}
              selectedCategory={selectedCategory}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
