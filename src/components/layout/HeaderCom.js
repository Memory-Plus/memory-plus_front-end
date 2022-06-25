import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeaderDiv = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const StyledHeaderLink = styled.link`
  color: red;
`;

const HeaderCom = () => {
  return (
    <StyledHeaderDiv>
      <h1>헤더입니다.</h1>
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/user/login">로그인</Link></li>
        <li><Link to="/user/profile">프로필</Link></li>
        <li><Link to="/list">카테고리</Link></li>
        <li><Link to="/mylist">내 카드셋</Link></li>
      </ul>
    </StyledHeaderDiv>
  );
};

export default HeaderCom;