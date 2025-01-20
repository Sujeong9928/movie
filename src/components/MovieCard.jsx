import { useNavigate } from "react-router-dom";

const MovieCard = ({ id, title, posterPath, voteAverage }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div
      className="cursor-pointer hover:scale-105 transition-transform"
      onClick={handleClick}
    >
      <div className="relative group">
        {/* 이미지 */}
        <img
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          className="w-full h-80 object-cover group-hover:filter-none filter grayscale transition-all duration-300"
        />
        {/* 제목과 평점 */}
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm">Rating: ⭐ {voteAverage}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
