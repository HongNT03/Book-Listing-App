import HomePage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookDetail from "./pages/BookDetails";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:bookId" element={<BookDetail />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
