import React from 'react';
import Grid from '@material-ui/core/Grid';
import MovieValues from './movieValues';
import { urlImages, } from '../../utils/utils';

const MovieDescription = ({ title, poster_path, backdrop_path, original_title, release_date, popularity,
                            vote_count, vote_average, overview, }) => {
  return (
    <Grid container spacing={3}>
      <Grid item sm={6} md={3}>
        <img src={`${urlImages}w185_and_h278_bestv2/${poster_path}`} alt={title} />
      </Grid>
      <Grid item sm={6} md={3}>
        <img src={`${urlImages}w185_and_h278_bestv2/${backdrop_path}`} alt={title} />
      </Grid>
      <Grid container item sm={12} md={6}>
        <MovieValues field="Original Title: " value={original_title} wrapper={7} gridField={4} gridValue={8} />
        <MovieValues field="Release Date: " value={release_date} wrapper={5} gridField={7} gridValue={5} />
        <MovieValues field="Popularity: " value={popularity} wrapper={5} gridField={6} gridValue={6} />
        <MovieValues field="Votes: " value={vote_count} wrapper={3} gridField={6} gridValue={6} />
        <MovieValues field="Rating: " value={vote_average} wrapper={4} gridField={6} gridValue={6} />
        <MovieValues field="Description: " value={overview} wrapper={12} gridField={12} gridValue={12} />
      </Grid>
    </Grid>
  );
};

export default MovieDescription;
