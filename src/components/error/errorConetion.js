import React from 'react';
import { Snackbar, Slide, } from '@material-ui/core';
import { useBooleanValue, } from '../../hooks/useBooleanValue';

const SlideTransition = (props) => {
  return <Slide {...props} direction="up" />;
}

const ErrorConetion = () => {

  const error = useBooleanValue(true);

  const handleClose = () => {
    error.onBooleanChange();
  }

  return (
    <Snackbar
      open={error.booleanValue}
      onClose={handleClose}
      TransitionComponent={SlideTransition}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}
      autoHideDuration={3000}
      message={<span>An error has occurred in the connection!</span>}
    />
  );
};

export default ErrorConetion;
