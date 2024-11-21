import React from "react";
import { useParams } from "react-router-dom";
import books from "../data.json";

const BookDetail = () => {
  const { bookId } = useParams();
  const selectedBook = books.find((book) => book.id == bookId);

  if (!selectedBook) {
    return <div>Book not found</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex">
          <div className="w-1/3 p-6 bg-gray-100">
            <img
              src={`https://via.placeholder.com/150?text=${selectedBook.title}`}
              alt={selectedBook.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-2/3 p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {selectedBook.title}
            </h1>
            <p className="text-lg text-gray-600 mb-2">Author: {selectedBook.author}</p>
            <p className="text-sm text-gray-500 mb-2">Genre: {selectedBook.genre}</p>
            <p className="text-sm text-gray-500 mb-4">
              Published on: {selectedBook.day_publish}
            </p>
            <p className="text-lg text-gray-700">{selectedBook.description}</p>
            <div className="mt-4">
              <span className="text-xl font-bold text-gray-900">
                ${selectedBook.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
