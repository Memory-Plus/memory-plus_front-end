
import React from 'react';
import styled from 'styled-components';

const Home = (props) => {
  
  // 같은 변수명을 줘서 구조분할 할당
  const {boards, setBoards, user} = props;
  const StyledDeleteButton = styled.button`
    color: ${(v) => (v.user.username === 'hihi'?'blue':'red')};
  `;
  const StyeldAddButton = styled(StyledDeleteButton)`
    background-color: green;
  `;
  return (
      <div>
        <h1>홈페이지입니다.</h1>
        <StyeldAddButton user={user} >더하기</StyeldAddButton>
        <StyledDeleteButton user={user} onClick={()=>setBoards([])}>전체삭제</StyledDeleteButton>
        {boards.map((board) => (
          <h3>
            제목:{board.title} 내용:{board.content}
          </h3>
        ))}
      </div>
  );
};

export default Home;