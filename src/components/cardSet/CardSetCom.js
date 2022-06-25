import React from 'react';
import { Link } from 'react-router-dom';

const CardSetCom = (props) => {
    
  const {cardSet} = props;
  
  return (
      <div>
        <div>
          <Link to={`/cardset/${cardSet.id}`}>
            <h3>
              제목:{cardSet.cardSetTitle} // 카테고리:{cardSet.cardSetCategories}
            </h3>
          </Link>
        </div>
        <button>
          <Link to={`/class/${cardSet.id}`}>학습하기</Link>
        </button>
      </div>
  );
};

export default CardSetCom;