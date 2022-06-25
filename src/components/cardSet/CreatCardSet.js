import useFetch from '../../hooks/useFetch';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const CreatCardSet = () => {
  useEffect(() => {
    axios.post(`http://localhost:3001/cardSet`, {
      cardSetTitle: cardSetTitleRef.current.value,
      cardSetCategories: cardSetCategoriesRef.current.value,
      cardSetCreator: cardSetCreatorRef.current.value
    });
  }, []);

  function onSubmit(e) {
    e.preventDefault();
  }

  const cardSetTitleRef = useRef(null);
  const cardSetCreatorRef = useRef(null);
  const cardSetCategoriesRef = useRef(null);

  return (
    <div>
      <form>
        <div>
          <label>cardSetTitle</label>
          <input type="text" placeholder='카드셋 타이틀' ref={cardSetTitleRef} />
        </div>
        <div>
          <label>cardSetCreator</label>
          <input type="text" placeholder='카드 제작자' ref={cardSetCreatorRef} />
        </div>
        <div>
          <label>cardSetCategories</label>
          <input type="text" placeholder='카드카테고리' ref={cardSetCategoriesRef} />
        </div>
        <button type='submit'>확인</button>
      </form>
    </div>
  );
};

export default CreatCardSet;