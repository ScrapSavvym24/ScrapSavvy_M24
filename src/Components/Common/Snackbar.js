import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Toast = ({ open, close, message, severity }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    close(); // Call the close function to update the state
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
