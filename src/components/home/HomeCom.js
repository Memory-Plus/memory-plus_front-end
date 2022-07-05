
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = (props) => {
  
  // 같은 변수명을 줘서 구조분할 할당
  // const StyledDeleteButton = styled.button`
  //   color: ${(v) => (v.user.username === 'hihi'?'blue':'red')};
  // `;
  // const StyeldAddButton = styled(StyledDeleteButton)`
  //   background-color: green;
  // `;

  return (
      <div>
        <h1>홈입니다.</h1>
      </div>
  );
};

export default Home;