import React, { Fragment, useEffect, useCallback, } from 'react';
import { connect, } from 'react-redux';
import { getSearches, patchSearch, patchSearchError, } from '../actions/movieActions';
import SeoHead from '../components/seo/seoHead';
import LayoutTitle from '../components/layout/layoutTitle';
import LayoutTitleText from '../components/layout/layoutTitleText';
import MoviesContainer from '../components/movie/moviesContainer';
import TextInput from '../components/form/textInput';
import ErrorConetion from '../components/error/errorConetion';
import { useInputValue, } from '../hooks/useInputValue';

const Search = ({ movies, searches, getSearches, patchSearch, patchSearchError, }) => {

  const searchInput = useInputValue('');

  const getSearchesCallback = useCallback(() => {
    if (searchInput.value) {
      getSearches(encodeURI(searchInput.value));
    }
  }, [getSearches, searchInput.value]);

  const patchSearchCallback = useCallback(() => {
    if (searchInput.value === '') {
      patchSearch();
    }
  }, [patchSearch, searchInput.value]);

  const errorSearchesCallback = useCallback(() => {
    patchSearchError();
  }, [patchSearchError]);

  useEffect(() => {
    getSearchesCallback();
    patchSearchCallback();
    errorSearchesCallback();
  }, [searchInput.value, getSearchesCallback, patchSearchCallback, errorSearchesCallback]);


  return (
    <Fragment>
      <SeoHead titleMeta="Movies by Search" descMeta="Find movies that match with your search." />
      <LayoutTitle>
        <LayoutTitleText title="Movies by Search" classes="Title-Main" />
        <TextInput label="Search" placeholder="Movie" classes="Search-Input" hooks={searchInput} fullWidth />
      </LayoutTitle>
      {
        searchInput.value === '' ?
          <MoviesContainer movies={movies.movies} /> :
          <MoviesContainer movies={searches.searches} />
      }
      { searches.error && <ErrorConetion /> }
      { searchInput.value !== '' && searches.searches.length < 1 && !searches.loading &&
      <LayoutTitleText title="There are no movies that match the search." /> }
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  searches: state.searches,
  movies: state.movies,
});

const mapDispatchToProps = {
  getSearches,
  patchSearch,
  patchSearchError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
