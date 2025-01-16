import React from "react";
import { Link } from "react-router-dom";
const MovieCard = ({ id, title, posterPath, voteAverage }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <Link to={`/movie/${id}`} className="movie-card">
      <img
        src={`${baseUrl}${posterPath}`}
        alt={title}
        className="w-full h-80 object-cover"
      />
      <h3 className="movie-card-title">{title}</h3>
      <p className="movie-card-rating">평점: ⭐ {voteAverage}</p>
    </Link> 
  );
};

export default MovieCard;
