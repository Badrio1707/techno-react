import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import PullToRefresh from 'react-pull-to-refresh';
import './home.scss';
import Toolbar from '../../components/toolbar/Toolbar';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Modal from 'react-modal';

const Home = () => {
  const { token } = useAuth();
  const [user, setUser] = useState(null);
  const [greeting, setGreeting] = useState('');
  const [qrCodeData, setQrCodeData] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const fetchUserData = async () => {
    if (!token) {
      window.location.href = '/login';
      return;
    }

    try {
      const response = await axios.get('https://soal.staging.id/api/home', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      const userData = response.data.result;
      setUser(userData);

      const qrCodeUrl = userData.qrcode;
      const urlParams = new URLSearchParams(qrCodeUrl.split('?')[1]);
      const chlValue = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${urlParams.get('chl')}`;
      setQrCodeData(chlValue);

    } catch (error) {
      console.error('Failed to fetch user data', error);
    }
  };

  useEffect(() => {
    fetchUserData();
    
    // Determine the current time and set greeting
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, [token]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <Toolbar type='home'/>
      <PullToRefresh onRefresh={fetchUserData}>
        <div className="home">
          {!user ? (
            <div>Loading...</div>
          ) : (
            <>
              <div className='card-background'>
                <div className="card-container">
                  <div className='card-user-detail'>
                    <p>{greeting},</p>
                    <h4>{user.name}</h4>
                  </div>
                  
                  <div className="card-other-details">
                    <div className="qr-code" onClick={openModal}>
                      <img src={qrCodeData} alt="User QR Code" />
                    </div>
                    <div className='saperate'></div>
                    <div className="saldo-detail">
                      <div>
                        <p>Saldo</p>
                        <h4>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(user.saldo)}</h4>
                      </div>
                      <div>
                        <p>Points</p>
                        <h4 className='point'>{new Intl.NumberFormat('id-ID').format(user.point)}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Slider {...sliderSettings} className="banner-slider">
                {user.banner.map((bannerUrl, index) => (
                  <div key={index}>
                    <img src={bannerUrl} alt={`Banner ${index + 1}`} />
                  </div>
                ))}
              </Slider>
            </>
          )}
        </div>
      </PullToRefresh>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="QR Code Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <button onClick={closeModal} className="close-modal">Close</button>
        <div className="modal-content">
          <p className="qr-description">Show the QR Code below to the cashier</p>
          <img src={qrCodeData} alt="User QR Code" />
        </div>
      </Modal>
    </>
  );
};

export default Home;
