import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardSetCom from '../components/cardSet/CardSetCom';
import CreatCardSet from '../components/cardSet/CreatCardSet';
import useFetch from '../hooks/useFetch';

const MyCardSet = () => {
  
  const[isVisible, setIsVisible] = useState(false); // 입력창 보이기 여부
  const toggleVisible = () => {
    setIsVisible(isVisible => !isVisible); //on off boolean
  };

  const cardSet = useFetch(`http://localhost:3001/cardSet`); //카드셋을 받아옴

  return (
      <div>
        <h1>나의 카드셋 페이지입니다.</h1>
        <button onClick={()=>toggleVisible()}>추가하기</button>
        {cardSet.map((cardSet)=>(
          <div key={cardSet.id}>
              <CardSetCom cardSet={cardSet}/>
            <button>수정하기</button>
            <button>삭제하기</button>
          </div>
        ))}
        <div>
          { isVisible && <> 
            <CreatCardSet />
            <button onClick={()=>toggleVisible()}>취소</button>
          </>}
        </div>
      </div> 
    );
};

export default MyCardSet;