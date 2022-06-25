import "./App.css";
import {BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Header from "./components/layout/HeaderCom";
import Footer from "./components/layout/FooterCom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import CardSetListPage from "./pages/CardSetListPage";
import MyCardSetPage from "./pages/MyCardSetPage";
import { Container } from "react-bootstrap";
import CardSetDetailPage from "./pages/CardSetDetailPage";
import MemorizePage from "./pages/MemorizePage";
import EmptyPage from "./pages/EmptyPage";

function App() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Routes>
             {/*react router dom 5버전에선 switch (현재는 6버젼)  */}
            <Route path="/" exact={true} element={<HomePage/>} />
            <Route path="/user/login" exact={true} element={<LoginPage/>} />
            <Route path="/user/profile" exact={true} element={<ProfilePage/>} />
            <Route path="/list" exact={true} element={<CardSetListPage/>} />
            <Route path="/mylist" exact={true} element={<MyCardSetPage/>} />
            <Route path="/cardset/:cardSetId" exact={true} element={<CardSetDetailPage/>} />
            <Route path="/class/:cardSetId" exact={true} element={<MemorizePage/>} />
            <Route path="*" element={<EmptyPage/>} />
          </Routes>
        </Container>
        <Footer />
      </div>
    );
  }

export default App;