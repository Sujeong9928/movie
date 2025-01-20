import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../api/api"; // 정확히 가져오기

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.error("영화 상세 정보를 가져오는 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p className="text-center text-xl mt-10">로딩 중...</p>;
  }

  if (!movie) {
    return <p className="text-center text-xl mt-10">영화를 찾을 수 없습니다.</p>;
  }

  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="flex flex-col lg:flex-row items-start p-6 max-w-5xl mx-auto gap-8">
      <div className="flex-shrink-0">
        <img
          src={`${baseUrl}${movie.poster_path}`}
          alt={movie.title}
          className="w-64 rounded-lg shadow-lg"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <h1 className="text-4xl font-bold mb-5">🎦 {movie.title}</h1>
        <p className="text-lg mb-2">
          <span className="font-semibold">평점:</span> ⭐ {movie.vote_average.toFixed(2)} / 10
        </p>
        <p className="text-lg mb-4">
          <span className="font-semibold">줄거리:</span> {movie.overview}
        </p>
        <p className="text-lg mb-4">
          <span className="font-semibold">개봉일:</span> {movie.release_date}
        </p>
      </div>
    </div>
  );
};

export default MovieDetailPage;
