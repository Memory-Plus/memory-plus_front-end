import React from 'react';

const CardSetCom = (props) => {
    
  const {cardSet, setCardSet} = props;
  
  return (
      <div>
        <h3>
          제목:{cardSet.cardSetTitle} // 카테고리:{cardSet.cardSetCategories}
        </h3>
      </div>
  );
};

export default CardSetCom;