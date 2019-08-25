import React from 'react'
import { Grid, } from '@material-ui/core';

const LayoutTitle = (props) => {
  return (
    <Grid container direction="row" justify="center" alignItems="center" className="Layout-Title">
      {props.children}
    </Grid>
  );
};

export default LayoutTitle;
