import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import books from "../data.json"

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

 

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BookList books={books} searchTerm={searchTerm} />
    </div>
  );
};

export default HomePage;
