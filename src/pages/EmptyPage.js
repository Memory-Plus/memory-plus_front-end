import React from 'react';
import { Link } from 'react-router-dom';

const EmptyPage = () => {
  return (
    <div>
      <h1>여기엔 아무것도 없습니다 ㅠ</h1>
      <Link to={"/"}>돌아가기</Link>
    </div>
  );
};

export default EmptyPage;