import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const ConfirmDialog = ({open, handleClose, handleAgree}) => {


  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Eliminar paciente
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Está seguro de eliminar el paciente seleccionado?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained" color="secondary">
          Cancelar
        </Button>
        <Button onClick={handleAgree} variant="contained" color="primary" autoFocus>
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
