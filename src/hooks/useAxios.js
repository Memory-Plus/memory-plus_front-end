import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useAxios = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(url)
    .then(function(response){
      
      console.log("성공");
    }).catch(function(error) {
      console.log("실패");
    }).then(function(){

    });

  },[url]);
  
  return (
    <div>
      
    </div>
  );
};

export default useAxios;