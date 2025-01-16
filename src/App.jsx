import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./components/MovieDetail";
import movieListData from "./data/movieListData.json";

const App = () => {
  const movies = movieListData.results;

  return (
    <Router>
      <div className="p-5">
        <Routes>
          {/* Layout을 기본 레이아웃으로 설정 */}
          < Route path="/" element={<Layout />}>
            {/* 영화 목록 페이지 */}
            <Route
              path="/"
              element={
                <div className="flex justify-center">
                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {movies.map((movie) => (
                      <MovieCard
                        key={movie.id}
                        id={movie.id} // 영화 ID 전달
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
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Route>
        </Routes>

      </div>
    </Router>
  );
};

export default App;
