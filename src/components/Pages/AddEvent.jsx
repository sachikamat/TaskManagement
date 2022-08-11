import React from "react";
import { Table, Paper, Typography, TextField } from "@material-ui/core";
import { TableContainer, TableCell, TableRow } from "@mui/material";

export const AddEvent = () => {
  return (
    <>
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
                Event Title
              </Typography>
            </TableCell>
            <TableCell>
              <TextField 
              variant="outlined" 
              size="small" 
               />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                Event Date
              </Typography>
            </TableCell>
            <TableCell>
              <TextField variant="outlined" size="small"  />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                Event Details
              </Typography>
            </TableCell>
            <TableCell>
              <TextField variant="outlined" size="small" multiline minRows={3} fullWidth/>
            </TableCell>
          </TableRow>

        </Table>
      </TableContainer>
    </>
  )
}
