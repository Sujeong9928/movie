import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { fetchPopularMovies } from "../api/api";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPopularMovies();
        setMovies(data);
      } catch (error) {
        console.error("영화 데이터를 가져오는 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center text-xl mt-10">로딩 중...</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-5">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          voteAverage={movie.vote_average}
        />
      ))}
    </div>
  );
};

export default Home;
