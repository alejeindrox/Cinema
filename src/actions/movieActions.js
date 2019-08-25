import { getMoviesAPI, getSearchesAPI, } from '../services/movieService';

export const getMovies = () => (dispatch) => {
  dispatch(getMoviesAPI());
};

export const getSearches = (search) => (dispatch) => {
  dispatch(getSearchesAPI(search));
};

export const patchMoviesError = () => (dispatch) => {
  dispatch({ type: 'PATCH_MOVIES_ERROR' });
};

export const patchSearchError = () => (dispatch) => {
  dispatch({ type: 'PATCH_SEARCHES_ERROR' });
};

export const patchSearch = () => (dispatch) => {
  dispatch({ type: 'PATCH_SEARCHES' });
};
