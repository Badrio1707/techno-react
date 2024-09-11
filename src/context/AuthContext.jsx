import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const login = async (email, password) => {
    try {
      const response = await axios.post('https://soal.staging.id/oauth/token', {
        grant_type: 'password',
        client_secret: '0a40f69db4e5fd2f4ac65a090f31b823',
        client_id: 'e78869f77986684a',
        username: email,
        password,
      });

      const { access_token } = response.data;
      setToken(access_token);
      localStorage.setItem('token', access_token);

      return { success: true };
    } catch (error) {
      console.error('Login failed', error);
      return { success: false, error: error.response?.data || 'Login failed' };
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
