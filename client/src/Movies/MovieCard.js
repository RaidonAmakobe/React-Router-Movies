import React from 'react';

const MovieCard = ({ movie }) => {
  const { title, director, metascore, stars, id} = movie;
  return(
    <div className = "movide-card">
      <h2>{title}</h2>
      <div className = "movie-director">
        BigBoss: <strong>{director}</strong>
      </div>
      <div className = "movie-metascore">
        Meta: <em>{metascore}</em>
      </div>
    </div>
    <h3>Celebs</h3>
    {stars.map(star => (
      <div key = {star} className = "movie-star">
        {star}
      </div>
    ))}
  );
};

export default MovieCard;
