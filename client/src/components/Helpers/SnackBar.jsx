import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const SnackBar = ({openSnackBar, handleCloseSnackBar, message}) => {
  return (
    <Snackbar
      open={openSnackBar}
      autoHideDuration={3000}
      onClose={handleCloseSnackBar}
    >
      <Alert onClose={handleCloseSnackBar} severity="success">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
