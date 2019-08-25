import {
  GET_MOVIES_PENDING,
  GET_MOVIES_FULFILLED,
  GET_MOVIES_REJECTED,
  PATCH_MOVIES_ERROR,
} from '../actions/types';

const initialState = {
  movies: [],
  loading: false,
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_PENDING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_MOVIES_FULFILLED:
      return {
        ...state,
        movies: action.payload.results,
        loading: false,
        error: false,
      };
    case GET_MOVIES_REJECTED:
      return {
        ...state,
        movies: [],
        loading: false,
        error: true,
      };
    case PATCH_MOVIES_ERROR:
      return {
        ...state,
        error: false,
      };
    default:
      return state;
  }
}
