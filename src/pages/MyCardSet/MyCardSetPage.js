import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardSetCom from '../../components/cardSet/CardSetCom';

const MyCardSet = () => {
  
  const[cardSet, setCardSet] = useState([]); //카드셋의 데이터
  const[isVisible, setIsVisible] = useState(false); // 입력창 보이기 여부
  
  useEffect(() => {
    let data = [
      {id:1, cardSetTitle:"과일 단어 이름1", cardSetCategories:"프로그래밍"},
      {id:2, cardSetTitle:"과일 단어 이름2", cardSetCategories:"프로그래밍"},
      {id:3, cardSetTitle:"과일 단어 이름3", cardSetCategories:"프로그래밍"},
      {id:4, cardSetTitle:"과일 단어 이름4", cardSetCategories:"프로그래밍"},
      {id:5, cardSetTitle:"과일 단어 이름5", cardSetCategories:"프로그래밍"},
    ];

    setCardSet([...data]);

    // fetch('http://localhost:3000/mylist')
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setBooks(res);
    //  TODO 백단에서 cors 처리 해줘야함 @CrossOrigin => 시큐리티 있으면 cors정책을 가지고있음
  }, [])


  const toggleVisible = () => {
    setIsVisible(isVisible => !isVisible); //on off boolean
  };

  return (
      <div>
        <h1>나의 카드셋 페이지입니다.</h1>
        <button>추가하기</button>
        <Link to="/cardset">테스트</Link>
        {cardSet.map((cardSet)=>(
          <div key={cardSet.id}>
            <CardSetCom cardSet={cardSet} setCardSet={setCardSet} />
            <button>수정하기</button>
            <button>삭제하기</button>
          </div>
        ))}
      </div>
    );
};

export default MyCardSet;