import React from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';

const Book = ({ sData }) => {
  const { bookName, image, rating, author, tags, totalPages, bookId } = sData;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card border-2 border-gray-200 w-[374px] mx-auto shadow-sm hover:shadow-md transition">
        <figure>
          <img
            className="h-[166px] my-10"
            src={image}
            alt={bookName}
          />
        </figure>

        <div className="card-body">
          <p className="flex flex-wrap gap-2 text-green-600 font-bold justify-between">
            {tags.map((tag, index) => (
              <span key={index} className="text-sm">#{tag}</span>
            ))}
          </p>

          <h1 className="font-bold text-[30px]">{bookName}</h1>
          <p className="text-[12px] text-gray-500">{totalPages} Pages</p>
          <p className="mt-1">By <span className="font-medium">{author}</span></p>

          <div className="mt-3 card-actions justify-between items-center">
            <div className="text-gray-600 font-bold">Fiction</div>
            <div className="flex items-center gap-1">
              <span>{rating}</span>
              <FaRegStarHalfStroke />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
