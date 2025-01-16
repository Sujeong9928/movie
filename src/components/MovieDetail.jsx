import { useParams } from "react-router-dom";
import movieListData from "../data/movieListData.json";

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movieListData.results.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <p className="text-center text-xl mt-10">영화를 찾을 수 없습니다.</p>;
  }

  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="flex flex-col lg:flex-row items-start p-6 max-w-5xl mx-auto gap-8">
      {/* 왼쪽 영화 포스터 */}
      <div className="flex-shrink-0">
        <img
          src={`${baseUrl}${movie.poster_path}`}
          alt={movie.title}
          className="w-64 rounded-lg shadow-lg"
        />
      </div>

      {/* 오른쪽 영화 정보 */}
      <div className="flex flex-col flex-grow">
        <h1 className="text-4xl font-bold mb-5">🎦{movie.title}</h1>
        <p className="text-lg mb-2">
          <span className="font-semibold">평점:</span> ⭐ {movie.vote_average.toFixed(2)} / 10
        </p>
        <p className="text-lg mb-4">
          <span className="font-semibold">장르:</span>{" "}
          {movie.genre_ids.join(", ")}
        </p>
        <div>
          <h2 className="text-2xl font-semibold mb-2">줄거리</h2>
          <p className="text-base leading-relaxed">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
