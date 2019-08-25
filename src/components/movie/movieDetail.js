import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from '@material-ui/core';
import MovieDescription from './movieDescription';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MovieDetail = ({ control, movie, }) => {
  return (
    <Dialog
      open={control.booleanValue}
      TransitionComponent={Transition}
      onClose={control.onBooleanChange}
      maxWidth="xl"
      fullWidth
    >
      <DialogTitle>{movie.title}</DialogTitle>
      <DialogContent>
        <MovieDescription {...movie} />
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={control.onBooleanChange}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MovieDetail;
