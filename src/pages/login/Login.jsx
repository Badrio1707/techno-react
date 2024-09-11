import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import logo from '../../assets/logo.png';
import FormInput from '../../components/formInput/FormInput';
import CustomButton from '../../components/customButton/CustomButton';
import './login.scss'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, token } = useAuth(); // Menambahkan token dari AuthContext
  const navigate = useNavigate(); // Hook untuk melakukan navigasi

  useEffect(() => {
    if (token) {
      navigate('/home'); // Redirect ke home jika sudah login
    }
  }, [token, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async () => {
    const result = await login(email, password);
    if (result.success) {
      navigate('/home');
    } else {
      alert('Login failed: ' + result.error);
    }
  };

  return (
    <div className='login'>
      <div className="login-card">
        <img src={logo} alt="" />
        <FormInput text='Email' type='text' name='email' value={email} onChange={handleInputChange} />
        <FormInput text='Password' type='password' name='password' value={password} onChange={handleInputChange} />
        <CustomButton text='Login' onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Login;
