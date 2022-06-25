import useFetch from '../hooks/useFetch';
import React, { useEffect, useState } from 'react';
import CardSetCom from '../components/cardSet/CardSetCom';

const CardSetList = () => {

  const cardSet = useFetch(`http://localhost:3001/cardSet`);

  return (
      <div>
        <h1>전체 카드셋 페이지입니다.</h1>
        {cardSet.map((cardSet)=>(
          <div key={cardSet.id}>
              <CardSetCom cardSet={cardSet}/> 
          </div>
        ))}
      </div> 
    );
};

export default CardSetList;