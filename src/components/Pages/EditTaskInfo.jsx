import React from "react";
import { Table, Paper, Typography, TextField } from "@material-ui/core";
import { TableContainer, TableCell, TableRow } from "@mui/material";

export const EditTaskInfo = ({title,description,priority,task_status,user}) => {
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
                Title
              </Typography>
            </TableCell>
            <TableCell>
              <TextField 
              variant="outlined" 
              size="small" 
              value={title} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                DESCRIPTION
              </Typography>
            </TableCell>
            <TableCell>
              <TextField variant="outlined" size="small" value={description} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                PRIORITY
              </Typography>
            </TableCell>
            <TableCell>
              <TextField variant="outlined" size="small" value={priority} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                STATUS
              </Typography>
            </TableCell>
            <TableCell>
              <TextField variant="outlined" size="small" value={task_status} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                USER
              </Typography>
            </TableCell>
            <TableCell>
              <TextField variant="outlined" size="small" value={user} />
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </>
  )
}
