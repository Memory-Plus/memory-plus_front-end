import "./App.css";
import MyCardSet from "./components/MyCardSetComponent";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";

function App() {
    return (
    <BrowserRouter>
      <div className="App">
        <MyCardSet />
      </div>);
    </BrowserRouter>
}

export default App;