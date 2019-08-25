import React from 'react';
import { TextField, } from '@material-ui/core';

const TextInput = ({ label, placeholder, classes, hooks, }) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      className={classes}
      margin="normal"
      variant="outlined"
      fullWidth
      {...hooks}
    />
  );
};

export default TextInput;
