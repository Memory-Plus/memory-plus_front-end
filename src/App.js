import "./App.css";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
    return (
      <div className="App">
        <HomePage/>
      </div>
    );
  }

export default App;