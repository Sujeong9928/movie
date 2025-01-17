import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css"; // Swiper 기본 스타일
import "swiper/css/navigation"; // Navigation 모듈 스타일
import "swiper/css/pagination"; // Pagination 모듈 스타일

const TopRatedSwiper = ({ movies }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  // 평점 8점 이상인 영화 필터링
  const topRatedMovies = movies.filter((movie) => movie.vote_average >= 7.5);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="shadow-lg"
    >
      {topRatedMovies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div className="relative w-full h-80">
            <img
              src={`${baseUrl}${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-lg font-bold">{movie.title}</h3>
              <p className="text-sm">평점: ⭐ {movie.vote_average.toFixed(2)}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TopRatedSwiper;