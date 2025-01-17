import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ id, title, posterPath, voteAverage }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <Link
      to={`/details/${id}`}
      className="flex flex-col items-center bg-white shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
    >
      <img
        src={`${baseUrl}${posterPath}`}
        alt={title}
        className="w-full h-80 object-cover"
      />
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-700 opacity-75">평점: ⭐ {voteAverage.toFixed(2)}</p>
    </Link>
  );
};

export default MovieCard;
