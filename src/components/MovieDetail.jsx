import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
            },
            params: {
              language: "ko-KR",
            },
          }
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  // 장르 목록을 문자열로 변환
  const genres = movie.genres.map((genre) => genre.name).join(", ");

  // 평점별로 별을 렌더링하는 함수
  const renderStars = (vote) => {
    const fullStars = Math.floor(vote / 2); // 가득 찬 별 개수
    const halfStars = vote % 2 >= 0.5 ? 1 : 0; // 반별 개수 (평점이 0.5 이상일 경우 반별 추가)
    const emptyStars = 5 - fullStars - halfStars; // 빈 별 개수

    return (
      <div className="flex flex-row space-x-1">
        {/* 가득 찬 별 */}
        {Array.from({ length: fullStars }).map((_, index) => (
          <FaStar key={`full-${index}`} className="text-yellow-400" />
        ))}
        {/* 반별 */}
        {Array.from({ length: halfStars }).map((_, index) => (
          <FaStarHalfAlt key={`half-${index}`} className="text-yellow-400" />
        ))}
        {/* 빈 별 */}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <FaRegStar key={`empty-${index}`} className="text-yellow-400" />
        ))}
      </div>
    );
  };

  return (
    <div className="p-5">
      <div className="flex flex-col md:flex-row">
        {/* 영화 이미지 */}
        <div className="w-full md:w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full shadow-md"
          />
        </div>

        {/* 영화 정보 */}
        <div className="md:ml-8 mt-4 md:mt-0 w-full md:w-2/3 space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">🎦{movie.title}</h1>
          <br />
          <p className="text-lg text-gray-700">
            <strong>줄거리: </strong>
            {movie.overview}
          </p>
          <div className="flex flex-col space-y-2">
            <p className="text-lg">
              <strong className="font-semibold">장르:</strong> {genres}
            </p>
            <p className="text-lg">
              <strong className="font-semibold">개봉일:</strong>{" "}
              {movie.release_date}
            </p>
            <p className="text-lg">
              <strong className="font-semibold">평점:</strong>{" "}
              {renderStars(movie.vote_average)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
