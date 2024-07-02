import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterUrl} alt={movie.title} style={{ width: '100%', height: 'auto' }} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieCard;
