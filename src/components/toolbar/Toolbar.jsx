import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import logout from '../../assets/logout.png';
import './toolbar.scss';
import LogoutModal from './LogoutModal';  // Import modal component
import { useAuth } from '../../context/AuthContext';

const Toolbar = ({ type, text }) => {
  const [showModal, setShowModal] = useState(false);  // State untuk modal
  const { logout: handleLogout } = useAuth();

  const handleLogoutClick = () => {
    setShowModal(true);
  };

  const confirmLogout = () => {
    handleLogout();
    setShowModal(false);
  };

  const cancelLogout = () => {
    setShowModal(false);
  };

  return (
    <>
      {type === 'home' ? (
        <div className='toolbar'>
          <img src={logo} alt="Logo" />
          <img 
            src={logout} 
            alt="Logout" 
            className='logout-button' 
            onClick={handleLogoutClick} // Show modal on click
          />
        </div>
      ) : (
        <div className="all-toolbar">
          <h3>{text}</h3>
        </div>
      )}
      
      {/* Tambahkan Logout Modal */}
      <LogoutModal 
        show={showModal} 
        onConfirm={confirmLogout} 
        onCancel={cancelLogout} 
      />
    </>
  );
};

export default Toolbar;
