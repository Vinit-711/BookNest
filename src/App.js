import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Video from "./components/Video";

import Cursor from "./components/Cursor";
import HomePage from "./HomePage";
import NavBar from "./components/NavBar";
import LoginPage from "./Pages/LoginPage";
import AboutUs from "./Pages/AboutUs";
import ExploreAuthors from "./components/ExploreAuthors";
import ExploreBooks from "./components/ExploreBooks";
import BookDetailPage from "./Pages/BookDetailPage";
import AuthorDetailPage from "./Pages/AuthorDetailPage";
import Dashboard from "./components/DashBoard";
import LoginOnlyPage from "./Pages/LoginOnlyPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Cursor />
      <Video />
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginOnlyPage />} />
        <Route path="/signup" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />  
        <Route path="/About" element={<AboutUs />} />
        <Route path="/explore-authors" element={<ExploreAuthors />} />
        <Route path="/explore-books" element={<ExploreBooks />} />
        <Route path="/book/:bookId" element={<BookDetailPage />} />
        <Route path="/author/:id" element={<AuthorDetailPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
