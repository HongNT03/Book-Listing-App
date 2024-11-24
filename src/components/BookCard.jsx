import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="p-4 h-auto hover:bg-gray-300 border border-gray-300 rounded shadow">
      <Link
        to={{
          pathname: `/book/${book.id}`,
        }}
      >
        <h3 className="font-bold text-lg">{book.title}</h3>
        <p className="text-sm text-gray-600">Author: {book.author}</p>{" "}
      </Link>
    </div>
  );
};

export default BookCard;
