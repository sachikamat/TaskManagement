import { Visibility } from '@material-ui/icons'
import { Table, TableContainer,Paper, TableBody,TableCell, TableHead, TableRow, Typography, createTheme, ThemeProvider  } from '@mui/material'
import React from 'react'
import {useNavigate} from 'react-router-dom';
import './Pages.css'

function createData(taskID,taskTitle,taskDescription,taskStatus,taskAction){
    return {taskID,taskTitle,taskDescription,taskStatus,taskAction}
}

const theme = createTheme({
  typography: {
    allVariants:{
      fontFamily: 'Josefin Sans',
      fontWeight:700
    }
  },
})

const Action = ({handleAction})=>(
  <>
    <button onClick={handleAction} >Action {<Visibility/>} </button>
  </>
)
const rows=[
    createData(1,'Login Form','Please work on creating a login form today.','Pending','action'),
    createData(2,'Find bugs','Please work on making the code bug free','On-going','action')
]

export const UserTask = () => {
  let navigate = useNavigate()
  const routeChange = () =>{
    let path='/task/taskInfo/:id'
    navigate(path)
  }
  return (
    <>
      <div className='mainDiv'>
        
        <TableContainer component={Paper} className='paperStyle' sx={{maxWidth:700}} >
        <Typography className='formHeading' variant='h5' >YOUR TASKS</Typography>
            <Table>
            <TableHead className='gridLine'>
              <TableRow>
                <ThemeProvider theme={theme}>
                  <TableCell><Typography>ID</Typography></TableCell>
                  <TableCell><Typography>TASK</Typography></TableCell>
                  <TableCell><Typography>DESCRIPTION</Typography></TableCell>
                  <TableCell><Typography>STATUS</Typography></TableCell>
                  <TableCell><Typography>ACTION</Typography></TableCell>
                </ThemeProvider>
              </TableRow>
            </TableHead>
            <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.taskID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.taskID}
              </TableCell>
              <TableCell>{row.taskTitle}</TableCell>
              <TableCell>{row.taskDescription}</TableCell>
              <TableCell>{row.taskStatus}</TableCell>
              <TableCell><Action handleAction={routeChange} /> </TableCell>
            </TableRow>
          ))}
        </TableBody>
            </Table>
        </TableContainer>
      </div>
    </>
  )
}
