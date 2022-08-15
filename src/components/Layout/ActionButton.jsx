import {Button, Dialog,DialogTitle,DialogContent,DialogActions} from '@mui/material'
import { useState } from 'react';
import React from "react";
import { IconButton } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';

export const ActionButton = ({
  dialogTitle,
  dialogContent,
  actionButton,
  dialogAction,
  actionButton_color,
  // dialogActionContainer,
  handleClose
}) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
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
        <div className='dialog_header'>

        <DialogTitle id="alert-dialog-title">{dialogTitle} </DialogTitle>
        <IconButton variant='contained' onClick={handleCancel}><Cancel style={{color:'#d32f2f'}}/> </IconButton>
        </div>
        
        <DialogContent>
          
            {dialogContent}
          
        </DialogContent>
        {dialogAction &&
        <DialogActions>
          
          
          <Button variant="contained" color={actionButton_color} onClick={handleClose} autoFocus>
            {dialogAction}
          </Button>
          
        </DialogActions>
}
      </Dialog>
    </>
  );
};
