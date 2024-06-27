import React from 'react';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="border rounded p-4 m-2">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
      <img src={posterURL} alt={title} className="w-32 h-48" />
      <p><strong>Note :</strong> {rating}</p>
    </div>
  );
};

export default MovieCard;
