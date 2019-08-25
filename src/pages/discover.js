import React, { Fragment, useEffect, useCallback, } from 'react';
import { connect, } from 'react-redux';
import { getMovies, patchMoviesError, } from '../actions/movieActions';
import SeoHead from '../components/seo/seoHead';
import LayoutTitle from '../components/layout/layoutTitle';
import LayoutTitleText from '../components/layout/layoutTitleText';
import MoviesContainer from '../components/movie/moviesContainer';
import ErrorConetion from '../components/error/errorConetion';

const Discover = ({ getMovies, patchMoviesError, movies, }) => {

  const getMoviesCallback = useCallback(() => {
    getMovies();
  }, [getMovies]);

  const errorMoviesCallback = useCallback(() => {
      patchMoviesError();
  }, [patchMoviesError]);

  useEffect(() => {
    getMoviesCallback();
    errorMoviesCallback();
  }, [getMoviesCallback, errorMoviesCallback]);


  return (
    <Fragment>
      <SeoHead titleMeta="Discover Movies" descMeta="Discover recent movies in order of popularity." />
      <LayoutTitle>
        <LayoutTitleText title="Discover Movies" classes="Title-Main" />
      </LayoutTitle>
      <MoviesContainer movies={movies.movies} />
      { movies.error && <ErrorConetion /> }
      { movies.movies.length < 1 && <LayoutTitleText title="There are no movies in this moment." /> }
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = {
  getMovies,
  patchMoviesError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
