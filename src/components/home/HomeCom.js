
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
        <Link to={"/mylist"}>추가하기</Link>
        <Link to={"/list"}>퀴즈보기</Link>
      </div>
  );
};

export default Home;