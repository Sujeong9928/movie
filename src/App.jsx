// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import MovieCard from '/components/MovieCard';
import movieListData from './data/movieListData.json';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieListData);
  }, []);

  return (
    <div className="App">
      <h1>영화 목록</h1>
      <div className="movie-list">
        {movies.slice(0, 6).map((movie) => (
          <MovieCard 
            key={movie.id} 
            title={movie.title} 
            posterPath={movie.poster_path}
            rating={movie.rating} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
