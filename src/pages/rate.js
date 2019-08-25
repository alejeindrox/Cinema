import React, { Fragment, } from 'react';
import { connect, } from 'react-redux';
import { getMovies, } from '../actions/movieActions';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import SeoHead from '../components/seo/seoHead';
import LayoutTitle from '../components/layout/layoutTitle';
import LayoutTitleText from '../components/layout/layoutTitleText';
import MoviesContainer from '../components/movie/moviesContainer';
import { useRatingValue, } from '../hooks/useRatingValue';

const Rate = ({ movies, }) => {

  const rateValue = useRatingValue(0);

  const moviesRate = rateValue.value === 0 ?
    movies.movies :
    movies.movies.filter((movie) => {
      return movie.vote_average <= rateValue.value * 2 && movie.vote_average >= rateValue.value * 2 - 2;
    }).sort((a, b) => b.vote_average - a.vote_average);

  return (
    <Fragment>
      <SeoHead titleMeta="Movies by Rating" descMeta="Find movies that match with your rating" />
      <LayoutTitle>
        <LayoutTitleText title="Movies by Rating" classes="Title-Main" />
        <Typography component="legend" className="Title-Rating" children="Rating:"/>
        <Rating size="large" {...rateValue} />
      </LayoutTitle>
      <MoviesContainer movies={moviesRate} />
      { moviesRate.length < 1 && <LayoutTitleText title="There are no movies with that rating." /> }
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = {
  getMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Rate);
