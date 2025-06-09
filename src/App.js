// import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Authors from "./components/Authors";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Authors" element={<Authors />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
