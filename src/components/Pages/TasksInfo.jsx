import { Paper, Typography,FormControl, Select, MenuItem} from '@material-ui/core'
import { Table, TableContainer, TableCell, TableRow, createTheme, ThemeProvider  } from '@mui/material'
import {React, useState, useEffect } from 'react'
import axios from 'axios'
import SubmitButton from '../Layout/SubmitButton'
import './Pages.css'
import { useParams } from 'react-router-dom'
import Wrapper from '../Layout/Wrapper'
import {API} from '../config'

// import {Divider} from '@mui/material';

const theme = createTheme({
  typography: {
    header: {
      fontFamily: "Josefin Sans",
      fontWeight: 700,
    },
  },
});

const statusAll = ["Pending", "Ongoing", "Completed"];


const TasksInfo = () => {
  let {id} = useParams()
  const [status, setStatus] = useState("Select status");
  const [taskInfo,setTaskInfo]=useState({})

  useEffect(() => {
    axios
      .get(`${API}/task/${id}`)
      .then((res) => {
        console.log(res);
        setTaskInfo(res.data.task);
        setStatus(res.data.task.task_status)
      })
      .catch((err) => {
        console.log(err);
      });
  },[id]);
  // useEffect(()=>{
  //   axios
  //   .put(`${API}/task/update/${id}`,status)
  //   .then((res)=>{
  //     console.log(res.data.task.task_status)
  //   })
  // })
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  // const handleUpdate = async (taskInfo) => {
  //   await axios.put(`${API}/task/update/${id}`)
  //   const taskInfoClone = [...taskInfo]
  //   const index = taskInfoClone.indexOf(task_status)
  //   taskInfoClone[index]=status
  //   setTaskInfo(taskInfoClone)
  // }
  return (
    <>
    <Wrapper userSideBar navHeader>
      <ThemeProvider theme={theme}>
            <TableContainer
              component={Paper}
              className="paperStyle"
              sx={{ maxWidth: 700 }}
            >
              <Typography className="formHeading" variant="h5">
                TASK DETAIL
              </Typography>
              <Table>
                <TableRow>
                  <TableCell variant="head">
                    <Typography variant="header" className="tableHead">
                      TASK
                    </Typography>
                  </TableCell>
                  <TableCell>{taskInfo.title}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head">
                    <Typography variant="header" className="tableHead">
                      PRIORITY
                    </Typography>
                  </TableCell>
                  <TableCell>{taskInfo.priority}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head">
                    <Typography variant="header" className="tableHead">
                      DESCRIPTION
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {taskInfo.description}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head">
                    <Typography variant="header" className="tableHead">
                      STATUS
                    </Typography>
                    <FormControl>
                      <Select
                        id="selectedStatus"
                        variant="outlined"
                        value={status}
                        onChange={handleChangeStatus}
                        className="selectStyle"
                      >
                        <MenuItem value="Select status">
                          <em style={{ fontStyle: "normal", color: "gray" }}>
                            Select status
                          </em>
                        </MenuItem>
                        {statusAll.map((status) => {
                          return (
                            <MenuItem key={status} value={status}>
                              {status}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <SubmitButton
                      button_name="Update Status"
                      button_id="updateStatus_btn"
                      // handleChange={()=> handleUpdate(taskInfo.task_status)}
                    />
                  </TableCell>
                </TableRow>
              </Table>
            </TableContainer>
          
      </ThemeProvider>
      </Wrapper>
    </>
  );
};

export default TasksInfo