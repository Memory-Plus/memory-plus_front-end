import React from 'react';

const CardCom = (props) => {

  const {cardList} = props;
  return (
    <div>
      <h3>
        제목: {cardList.cardTitle} // 본문: {cardList.cardContent}
      </h3>
    </div>
  );
};

export default CardCom;