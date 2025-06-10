// import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Authors from "./components/Authors";
import Footer from "./components/Footer";
import AboutAuthors from './components/AboutAuthors';
import Login from './components/Login'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Authors" element={<Authors />} />
        <Route path="/Authors/:id" element={<AboutAuthors />} />
        <Route path="/AboutAuthors" element={<AboutAuthors />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
