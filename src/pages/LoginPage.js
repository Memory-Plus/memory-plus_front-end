import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Login from '../components/login/Login';

const LoginPage = () => {
  return (
    <div>
      <Header/>
      <Login/>
      <Footer/>
    </div>
  );
};

export default LoginPage;