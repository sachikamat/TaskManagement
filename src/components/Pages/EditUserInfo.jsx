import React from 'react'
import {  Table,Paper, Typography,TextField} from '@material-ui/core'
import { TableContainer, TableCell, TableRow,   } from '@mui/material'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import SubmitButton from '../Layout/SubmitButton'
import "./Pages.css";

export const EditUserInfo = ({ uname, email, phone, statusOf }) => {
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
              <Typography variant="header" className="tableHead">
                NAME
              </Typography>
            </TableCell>
            <TableCell>
              <TextField variant="outlined" size="small" value={uname} />
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
                STATUS
              </Typography>
            </TableCell>
            <TableCell>
              <TextField variant="outlined" size="small" value={statusOf} />
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </div>
  );
};
