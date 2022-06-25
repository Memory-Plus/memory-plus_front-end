import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardCom from '../components/cardSet/CardCom';

import dummy from "../db/data.json";

const CardSetDetailPage = () => {

  const {cardSetId} = useParams();
  const[cardSet, setCardSet] = useState([]); 
  const [cardDetail, setCardDetail] = useState([]);
  const FilteredCardSet = dummy.cardSet.filter(card => card.id === Number(cardSetId));
  // cardSetId는 string으로 받아옴
  const FilteredCardList = dummy.cardList.filter(card => card.cardSetId === Number(cardSetId));

  useEffect(()=> {
    setCardSet([...FilteredCardSet]);
    setCardDetail([...FilteredCardList]);
  }, [])

  return (
      <div>
        <h1> 카드셋 상세페이지 입니다.</h1>
        {cardSet.map((cardSet)=>(
          <div key={cardSet.id}>
            <h2>카드셋 아이디는 {cardSet.id} 입니다.</h2>
            <h2>카드셋 이름은 {cardSet.cardSetTitle} 입니다.</h2>
            <h2>카드셋 카테고리는 {cardSet.cardSetCategories} 입니다.</h2>
          </div>
        ))}
        <form>
          <div>
            <label>cardTitle</label>
            <input type="text" placeholder='카드타이틀' />
          </div>
        </form>
          
        <button>추가하기</button>

        {cardDetail.map((cardList)=>(
          <div key={cardList.cardId}>
            <CardCom cardList={cardList} />
            <button>수정하기</button>
            <button>삭제하기</button>
          </div>
        ))}
      </div>
  );
};

export default CardSetDetailPage;