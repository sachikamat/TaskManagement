import React from "react";
import { Table, Paper, Typography, TextField } from "@material-ui/core";
import { TableContainer, TableCell, TableRow } from "@mui/material";
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import SubmitButton from '../Layout/SubmitButton'
import "./Pages.css";

export const EditUserInfo = ({ name, email, phone,mobile, status }) => {
  return (
    <div>
      <TableContainer
        component={Paper}
        className="paperStyle"
        sx={{ maxWidth: 700 }}
      >
        {/* <Typography className="formHeading" variant="h5">
          USER DETAIL
        </Typography> */}
        <Table>
          <TableRow>
            <TableCell variant="head">
              <Typography 
              variant="header" 
              className="tableHead">
                NAME
              </Typography>
            </TableCell>
            <TableCell>
              <TextField 
              variant="outlined" 
              size="small" 
              value={name} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                EMAIL
              </Typography>
            </TableCell>
            <TableCell>
              <TextField variant="outlined" size="small" value={email} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                PHONE
              </Typography>
            </TableCell>
            <TableCell>
              <TextField variant="outlined" size="small" value={phone} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                MOBILE
              </Typography>
            </TableCell>
            <TableCell>
              <TextField variant="outlined" size="small" value={mobile} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                STATUS
              </Typography>
            </TableCell>
            <TableCell>
              <TextField variant="outlined" size="small" value={status} />
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </div>
  );
};
