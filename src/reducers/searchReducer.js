import {
  GET_SEARCHES_PENDING,
  GET_SEARCHES_FULFILLED,
  GET_SEARCHES_REJECTED,
  PATCH_SEARCHES_ERROR,
  PATCH_SEARCHES,
} from '../actions/types';

const initialState = {
  searches: [],
  loading: false,
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SEARCHES_PENDING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_SEARCHES_FULFILLED:
      return {
        ...state,
        searches: action.payload.results,
        loading: false,
        error: false,
      };
    case GET_SEARCHES_REJECTED:
      return {
        ...state,
        searches: [],
        loading: false,
        error: true,
      };
    case PATCH_SEARCHES_ERROR:
      return {
        ...state,
        error: false,
      };
    case PATCH_SEARCHES:
      return {
        ...state,
        searches: [],
      };
    default:
      return state;
  }
}
