// src/pages/QRCodePage.js

import React from 'react';
import { useLocation } from 'react-router-dom';

const QRCodePage = () => {
  const location = useLocation();
  const qrCodeData = new URLSearchParams(location.search).get('data');

  return (
    <div className="qr-code-page">
      <button onClick={() => window.history.back()} className="back-button">Back</button>
      <img src={qrCodeData} alt="QR Code" />
    </div>
  );
};

export default QRCodePage;
