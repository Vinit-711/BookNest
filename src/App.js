// import logo from './logo.svg';
import "./App.css";
// import Home from "./components/Home";
import NavBar from "./components/NavBar";
import {  BrowserRouter as Router } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
// import Authors from "./components/Authors";
// import AboutAuthors from './components/AboutAuthors';
// import Login from './components/Login'
import Video from "./components/Video";
// import Page1 from "./Pages/Page1";
import Main from "./components/Main";
import Cursor from "./components/Cursor";

function App() {
  return (
    <Router>
      <NavBar />
      <Cursor />
      <Video />
      <Main />
    </Router>
  );
}

export default App;
