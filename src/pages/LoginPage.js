import React from 'react';
import Login from '../components/login/LoginCom';

const LoginPage = (props) => {
  console.log('LoginPage'.props);
  return (
    <div>
      <button onClick={()=>props.history.push("/")}>뒤로가기</button>
      <Login/>
    </div>
  );
};

export default LoginPage;