import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Style.css';
import movies from '../../data/movies.json';

const MovieView = ({ match }) => {
  const movie = movies.find(
    m => m.id === parseInt(match.params.movieId, 10)
  );

  return (
    <div>
      <div className="movie-title">
        <h2>{movie.name}</h2>
        <hr />
      </div>

      <div className="movie-container">
        <div className="movie-image">
          <img src={movie.image} />
        </div>

        <div className="movie-information">
          <p><b>Director:</b> {movie.director}</p>
          <p><b>Release Date:</b> {movie.released}</p>
          <p><b>Description:</b> {movie.description} </p>
        </div>
      </div>
    </div>
  );
};

MovieView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieView;