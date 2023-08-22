import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from "./Components/Blogs";
import Navbar from "./Components/Navbar";
import useFetch from "./Hooks/useFetch";
import Home from "./Components/Home";
import Create from "./Components/Create";
import BlogDetails from "./Components/BlogDetails";
import NotFound from "./Components/NotFound";
import './index.css'

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/blogs/:id" element={<BlogDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
