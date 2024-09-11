import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from '../../pages/home/Home';  // Jika Anda menggunakan Home sebagai halaman utama
import MenuPage from '../../pages/menu/Menu';  // Jika Anda menambahkan halaman Menu
import './bottomTabs.scss';  // Styling untuk tab navigasi
import home1 from '../../assets/home1.png';
import home2 from '../../assets/home2.png';
import menu1 from '../../assets/menu1.png';
import menu2 from '../../assets/menu2.png';

const BottomTabs = () => {
  return (
    <div className="bottom-tabs">
      <div className="tab-content">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </div>

      <nav className="tab-nav">
        <NavLink
          to="/home"
          className="tab-link"
          activeclassname="active"
        >
          {({ isActive }) => (
            <>
              <img src={isActive ? home1 : home2} alt="Home Icon" />
              <p>Home</p>
            </>
          )}
        </NavLink>
        <NavLink
          to="/menu"
          className="tab-link"
          activeclassname="active"
        >
          {({ isActive }) => (
            <>
              <img src={isActive ? menu1 : menu2} alt="Menu Icon" />
              <p>Menu</p>
            </>
          )}
        </NavLink>
      </nav>
    </div>
  );
};

export default BottomTabs;
