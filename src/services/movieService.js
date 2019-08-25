import { createAsyncAction, } from 'redux-promise-middleware-actions';

const urlBase = 'https://api.themoviedb.org/3/';
const parameters = 'sort_by=popularity.desc&api_key=%3C%3Capi_key%3E%3E';

export const getMoviesAPI = createAsyncAction(
  'GET_MOVIES',
  async () => {
    const res = await fetch(`${urlBase}discover/movie?${parameters}`)
                        .then((response) => validateResponse(response))
                        .catch((error) => { throw exeptionCodeResponse(error); });
    return res;
  }
);

export const getSearchesAPI = createAsyncAction(
  'GET_SEARCHES',
  async (search) => {
    const res = await fetch(`${urlBase}search/movie?query=${search}&${parameters}`)
                        .then((response) => validateResponse(response))
                        .catch((error) => { throw exeptionCodeResponse(error); });
    return res;
  }
);

const validateResponse = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw exeptionCodeResponse();
  }
};

const exeptionCodeResponse = (error = 'error') => {
  return error;
};
