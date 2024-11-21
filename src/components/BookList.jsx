import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books, searchTerm }) => {
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
        
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
};

export default BookList;
