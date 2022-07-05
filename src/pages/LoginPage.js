import React from 'react';
import Login from '../components/login/LoginCom';

const LoginPage = (props) => {
  console.log('LoginPage'.props);
  return (
    <div>
      <button>뒤로가기</button>
      <Login/>
    </div>
  );
};

export default LoginPage;