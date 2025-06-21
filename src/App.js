import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Video from "./components/Video";

import Cursor from "./components/Cursor";
import HomePage from "./HomePage";
import NavBar from "./components/NavBar";
import LoginPage from "./Pages/LoginPage";
import AboutUs from "./Pages/AboutUs";
import ExploreAuthors from "./components/ExploreAuthors";
import ExploreBooks from "./components/ExploreBooks";

function App() {
  return (
    <Router>
      <NavBar />
      <Cursor />
      <Video />
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/explore-authors" element={<ExploreAuthors />} />
        <Route path="/explore-books" element={<ExploreBooks />} />

      </Routes>
    </Router>
  );
}

export default App;
