import React from 'react';
import { Grid, Typography, } from '@material-ui/core';

const layoutTitleText = ({ title, classes, }) => {
  return (
    <Grid item xs={12} className={classes}>
      <Typography variant="h4" component="h5" children={title} />
    </Grid>
  );
};

export default layoutTitleText;
