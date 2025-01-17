import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./components/MovieDetail";
import TopRatedSwiper from "./components/TopRatedSwiper";
import movieListData from "./data/movieListData.json";

const App = () => {
  const movies = movieListData.results;

  return (
    <Router>
      <div className="p-5">
        <Routes>
          {/* Layout을 기본 레이아웃으로 설정 */}
          <Route path="/" element={<Layout />}>
            {/* 영화 목록 페이지 */}
            <Route
              index
              element={
                <div>
                  {/* 상단 Swiper */}
                  <TopRatedSwiper movies={movies} />
                  {/* 영화 목록 */}
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
            {/* 상세 페이지 */}
            <Route path="/details/:id" element={<MovieDetail />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

