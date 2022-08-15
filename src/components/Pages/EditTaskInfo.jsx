import React from "react";
import { Table, Paper, Typography, TextField } from "@material-ui/core";
import { TableContainer, TableCell, TableRow,Button } from "@mui/material";
import { useState } from "react";
import axios from 'axios'
import { API } from "../config";


export const EditTaskInfo = ({prevTitle,prevDescription,prevPriority,prevTask_status,prevUser,task_id}) => {
  const[title,setTitle]=useState(prevTitle)
  const[description,setDescription]=useState(prevDescription)
  const[priority,setPriority]=useState(prevPriority)
  const[task_status,setTask_status]=useState(prevTask_status)
  const[user,setUser]=useState(prevUser)
  const taskID=task_id

  const updateUser = () =>
    axios
      .put(`${API}/task/update/${taskID}`, {
        title: title,
        description:description,
        priority:priority,
        task_status:task_status,
        user:user
      })
      .then(window.location.reload());

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
              value={title}
              onChange={(e)=>setTitle(e.target.value)} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                DESCRIPTION
              </Typography>
            </TableCell>
            <TableCell>
              <TextField variant="outlined" size="small" value={description} onChange={(e)=>setDescription(e.target.value)} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                PRIORITY
              </Typography>
            </TableCell>
            <TableCell>
              <TextField variant="outlined" size="small" value={priority} onChange={(e)=>setPriority(e.target.value)} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                STATUS
              </Typography>
            </TableCell>
            <TableCell>
              <TextField variant="outlined" size="small" value={task_status} onChange={(e)=>setTask_status(e.target.value)} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="header" className="tableHead">
                USER
              </Typography>
            </TableCell>
            <TableCell>
              <TextField variant="outlined" size="small" value={user} onChange={(e)=>setUser(e.target.value)}/>
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
      <div className='edit_btn'>
        <Button variant="contained" onClick={()=>updateUser()}  autoFocus>
          Save Changes
        </Button>
        </div>
    </>
  )
}
