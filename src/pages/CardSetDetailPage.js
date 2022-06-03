import React, { useEffect, useState } from 'react';
import CardCom from '../components/cardSet/CardCom';

const CardSetDetailPage = () => {
  // const cardSetId = props.match.param.cardSetId;
  const[cardSet, setCardSet] = useState([]); 
  const [cardDetail, setCardDetail] = useState([]);

  useEffect(()=> {
    let data = [{
      id:1,
      cardSetTitle:"영어단어이름",
      cardSetCreator:"모리",
      cardSetCategories:"영어",
      cardList:[
        {cardId:1, cardTitle:"apple", cardContent:"사과"},
        {cardId:2, cardTitle:"Orange", cardContent:"오렌지"},
        {cardId:3, cardTitle:"Grape", cardContent:"포도"},
        {cardId:4, cardTitle:"Eggplant", cardContent:"가지"},
      ]
    }];
    
    setCardSet([...data]);
    setCardDetail([...data[0].cardList]);
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