import React from "react";
import { useParams } from "react-router-dom";
import movieListData from "../data/movieListData.json";
import "./MovieDetail.css";

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movieListData.results.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <p>영화를 찾을 수 없습니다.</p>;
  }

  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie-detail-container">
      <div className="movie-detail-header">
        <img
          src={`${baseUrl}${movie.poster_path}`}
          alt={movie.title}
          className="movie-detail-poster"
        />
        <div className="movie-detail-info">
          <h1 className="movie-detail-title">{movie.title}</h1>
          <p className="movie-detail-rating">평점: ⭐ {movie.vote_average.toFixed(2)} / 10</p>
          <p className="movie-detail-genres">
            장르: {movie.genre_ids.join(", ")}
          </p>
        </div>
      </div>
      <div className="movie-detail-overview">
        <h2>줄거리</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
