import React, { useState, Fragment, } from 'react';
import MoviesList from './moviesList';
import MovieDetail from './movieDetail';
import { useBooleanValue, } from '../../hooks/useBooleanValue';

const MoviesContainer = ({ movies, }) => {

  const showMovie = useBooleanValue(false);
  const [detail, setDetail] = useState();

  const handleShowMovie = (movie) => {
    showMovie.onBooleanChange();
    setDetail(movie);
  }

  return (
    <Fragment>
      <MoviesList movies={movies} handleShowMovie={handleShowMovie} />
      { detail && <MovieDetail control={showMovie} movie={detail} /> }
    </Fragment>
  );
};

export default MoviesContainer;
