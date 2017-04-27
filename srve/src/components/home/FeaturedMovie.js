import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../styles/Style.css';

const FeaturedMovie = ({ movie }) => (
  <div className="featured-movie">
    <div className="featured-movie-image">
      <Link to={`/movies/${movie.id}`}> {/*Could link directly to netflix site*/}
        <img alt={movie.name} src={movie.image} />
      </Link>
    </div>
    <div>
      <p>Name: {movie.name} </p>
      <p>Director: {movie.director}</p>
      <p style={{ fontSize: 14 }}>Year: {movie.released}</p>
    </div>
  </div>
);

FeaturedMovie.propTypes = {
  movie: PropTypes.shape({
    director: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    released: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedMovie;
