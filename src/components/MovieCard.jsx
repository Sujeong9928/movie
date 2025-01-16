import React from "react";

const baseUrl = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({poster_path, title, vote_average}) => {
    const imageUrl = '${baseUrl}${posterPath}';

    return (
        <div className="movie-card">
            <img src={imageUrl} alt={title} className="movie-image" />
            <h3 className="movie-title">{title}</h3>
            <p className="movie-rating">평점: {rating}</p>
        </div>
    );
};

export default MovieCard;