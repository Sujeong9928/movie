import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./components/MovieDetail";
import TopRatedSwiper from "./components/TopRatedSwiper";
import axios from "axios";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              api_key: "e510cbdd16451aaa11bd9613abf5e9a8",
              language: "en-US",
              page: 1,
            },
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
            },
          }
        );

        // `adult` 속성이 false인 영화만 필터링
        const filteredMovies = response.data.results.filter(
          (movie) => !movie.adult
        );
        setMovies(filteredMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Router>
      <div className="p-5">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <div>
                  <TopRatedSwiper movies={movies} />
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
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
                </div>
              }
            />
            <Route path="/details/:id" element={<MovieDetail />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
