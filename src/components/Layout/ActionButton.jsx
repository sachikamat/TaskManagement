import {Button, Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions} from '@mui/material'
import { useState } from 'react';
import './layout.css'

export const ActionButton = ({
  dialogTitle,
  dialogContent,
  actionButton,
  dialogAction,
  actionButton_color,
  alternateActionButton
}) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="text" onClick={handleClickOpen}
      color={actionButton_color}
      >
        {actionButton}
      </Button>
      <Dialog
        className='dialog_box'
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClose}>Cancel</Button>
          {alternateActionButton &&
          <Button variant="contained" color={actionButton_color} onClick={handleClose} autoFocus>
            {dialogAction}
          </Button>
          }
        </DialogActions>
      </Dialog>
    </>
  );
};