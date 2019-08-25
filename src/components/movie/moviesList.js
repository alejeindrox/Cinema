import React from 'react';
import withWidth, { isWidthUp, } from '@material-ui/core/withWidth';
import { GridList, GridListTile, GridListTileBar, } from '@material-ui/core';
import { urlImages, } from '../../utils/utils';

const MoviesList = ({ movies, handleShowMovie, width, }) => {

  const getGridListCols = () => {
    if (isWidthUp('lg', width)) {
      return 8;
    }
    if (isWidthUp('md', width)) {
      return 6;
    }
    return 4;
  }

  return (
    <GridList cellHeight={230} spacing={4} cols={getGridListCols()}>
      {
        movies.map((movie, index) => (
          <GridListTile key={index} cols={1} onClick={() => handleShowMovie(movie)}>
            <img src={`${urlImages}w154/${movie.poster_path}`} alt={movie.title} />
            <GridListTileBar
              title={movie.title}
              subtitle={<span>Rating: {movie.vote_average}</span>}
            />
          </GridListTile>
        ))
      }
    </GridList>
  );
};

export default withWidth()(React.memo(MoviesList));
