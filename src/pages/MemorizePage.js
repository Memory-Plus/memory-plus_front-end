import React from 'react';
import { useParams } from 'react-router-dom';

const MemorizePage = () => {
  
  const {cardSetId} = useParams();
  
  return (
    <div>
      <h1>학습페이지입니다.</h1>
    </div>
  );
};

export default MemorizePage;