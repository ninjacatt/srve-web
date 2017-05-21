import React from 'react';
import '../../styles/Style.css';
import movies from '../../data/movies.json';
import FeaturedMovie from './FeaturedMovie';

const HomeView = () => {
  const topFour = movies.slice(0, 4);
  return (
    <div>
      <h2 className="featured-movies-header">
        Featured Movies
      </h2>

      <hr />

      <div className="featured-movies-list">
        {topFour.map((movie) => (
          <FeaturedMovie
            movie={movie}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeView;