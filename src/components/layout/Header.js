import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeaderDiv = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Header = () => {
  return (
    <StyledHeaderDiv>
      <h1>헤더입니다.</h1>
      <ul>
        <li>홈</li>
        <li>메뉴1</li>
        <li>메뉴2</li>
      </ul>
    </StyledHeaderDiv>
    // <>
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
    // </>
  );
};

export default Header;