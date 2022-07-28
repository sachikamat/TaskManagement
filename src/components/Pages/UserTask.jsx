import { Button,  } from '@material-ui/core';
import { Visibility } from '@material-ui/icons'
import { Table, TableContainer,Paper, TableBody,TableCell, TableHead, TableRow, Typography, createTheme, ThemeProvider  } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './Pages.css'
import SideBar from '../Navbar/SideBar'

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
    <Button onClick={handleAction} >View  {<Visibility/>} </Button>
  </>
)

export const UserTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/tasks")
      .then((res) => {
        console.log(res);
        setTasks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });


  let navigate = useNavigate();
  const routeChange = (id) => {
    let path = `/task/taskInfo/${id}`;
    navigate(path);
  };
  return (
    <>
    <SideBar>
      <div className="mainDiv">
        <TableContainer
          component={Paper}
          className="paperStyle"
          sx={{ maxWidth: 700, maxHeight: 500 }}
        >
          <Typography className="formHeading" variant="h5">
            YOUR TASKS
          </Typography>
          <Table>
            <TableHead className="gridLine">
              <TableRow>
                <ThemeProvider theme={theme}>
                  <TableCell>
                    <Typography>ID</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>TASK</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>DESCRIPTION</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>STATUS</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>ACTION</Typography>
                  </TableCell>
                </ThemeProvider>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task) => (
                <TableRow
                  key={task.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {task.id}
                  </TableCell>
                  <TableCell>{task.task}</TableCell>
                  <TableCell>{task.description}</TableCell>
                  <TableCell>{task.status}</TableCell>
                  <TableCell>
                    <Action handleAction={()=>routeChange(task.id)} />{" "}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      </SideBar>
    </>
  );
};
