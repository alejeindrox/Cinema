import React from 'react';
import { Grid, Typography, } from '@material-ui/core';

const MovieValues = ({ field, value, wrapper, gridField, gridValue, }) => {
  return (
    <Grid container item md={wrapper}>
      <Grid item md={gridField}>
        <Typography variant="body1" className="Title-Movie-Description" children={field} />
      </Grid>
      <Grid item md={gridValue}>
        <Typography variant="body1" children={value} />
      </Grid>
    </Grid>
  );
};

export default MovieValues;
