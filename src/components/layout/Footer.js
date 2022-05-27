import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooterDiv = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Footer = () => {
  return (
    <StyledFooterDiv>
      <h1>푸터입니다.</h1>
    </StyledFooterDiv>
    // <StyledFooterDiv>
    //   <Navbar bg="dark" variant="dark">
    //     <Link to="/" className="navbar-brand">
    //       홈
    //     </Link>
    //     <Nav className="mr-auto">
    //       <Link to="/joinForm" className="nav-link">
    //         회원가입
    //       </Link>
    //       <Link to="/loginForm" className="nav-link">
    //         로그인
    //       </Link>
    //       <Link to="/saveForm" className="nav-link">
    //         글쓰기
    //       </Link>
    //     </Nav>
    //     <Form inline>
    //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    //       <Button variant="outline-info">Search</Button>
    //     </Form>
    //   </Navbar>
    //   <br />
    // </StyledFooterDiv>
  );
};

export default Footer;