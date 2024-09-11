import React from 'react';
import './MenuCard.scss';

const MenuCard = ({ item }) => {
  return (
    <div className="menu-item">
      <img src={item.photo} alt={item.name} className="menu-item-photo" />
      <div className="menu-item-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
      <p className="menu-item-price">
        {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price)}
      </p>
    </div>
  );
};

export default MenuCard;
