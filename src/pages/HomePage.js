import React, { useEffect, useState } from 'react';
import Home from '../components/home/Home';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

const HomePage = () => {

  // 데이터는 페이지가 가지고있는 것이 좋다.
  // 컴포넌트가 가지고있다면 재사용시 데이터가 다른 페이지에 오염될 수 있음
  // 상태 데이터인 이유 : 그냥 데이터면 페이지 로드가 더 빨라 빈데이터가 넘어가고 재로딩이 되지 않기때문
  const[boards, setBoards] = useState([]);
  const[user, setUser] = useState({});

  // 빈 배열에는 한번만 실행함
  useEffect(() => {
    //다운로드
    let data = [
      {id:1, title:"제목1", content:"내용1"},
      {id:2, title:"제목2", content:"내용2"},
      {id:3, title:"제목3", content:"내용3"},
      {id:4, title:"제목4", content:"내용4"},
    ];

    setBoards([...data]);
    setUser({id:1, username:'hihi'});
  }, [])

    return (
        <div>
          <Header />
          <Home boards={boards} setBoards={setBoards} user={user}/>
          <Footer />
        </div>
    );
};

export default HomePage;