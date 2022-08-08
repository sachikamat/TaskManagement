import React, { useState } from 'react';
import {Paper, Grid, Typography,  FormControl, Select, MenuItem, createTheme, ThemeProvider, TextField} from '@mui/material';
import './Pages.css'
import SubmitButton from '../Layout/SubmitButton';
import Wrapper from '../Layout/Wrapper';
//defining theme to overRide the default topography fontFamily
const theme = createTheme({
  typography: {
    allVariants:{
      fontFamily: 'Josefin Sans',
    }
  },
});


//defining an array of roles for the dropdown menu
const users=[
  'Abhaya Mani Paudel',
  'Jeevika Shakya',
  'Kamal Pandit',
  'Sachi Kamat'
]

const priorities=[
  'Low',
  'Medium',
  'High',
  'Urgent'
]

const statusAll=[
  'Pending',
  'Ongoing',
  'Completed'
]

export default function AddTask() {
  //select bhako role ko value chaiyema use this---
  const [user, setUser] = useState("Select user");
  const [priority, setPriority] = useState("Select priority");
  const [status, setStatus] = useState("Select status");

  const handleChange = (event) => {
    setUser(event.target.value);
  };
  //---//
  const handleChangePriority = (event) => {
    setPriority(event.target.value);
  };

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  return (
    <>
      <Wrapper adminSidebar navHeader>
        <ThemeProvider theme={theme}>
          {/* <div className='mainDiv'> */}
          <Paper className="paperStyle">
            <Typography className="formHeading" variant="h4">
              ADD TASK
            </Typography>

            <Grid container>
              <Grid container className="gridContainer">
                <Grid item xs={12} md={3}>
                  <Typography>User</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <FormControl fullWidth>
                    <Select
                      id="selectedUser"
                      value={user}
                      variant="outlined"
                      onChange={handleChange}
                      defaultValue={user}
                      style={{ height: 40 }}
                    >
                      <MenuItem value="Select user">
                        <em style={{ fontStyle: "normal", color: "gray" }}>
                          Select user
                        </em>
                      </MenuItem>
                      {users.map((user) => {
                        return (
                          <MenuItem key={user} value={user}>
                            {user}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container className="gridContainer">
                <Grid item xs={12} md={3}>
                  <Typography>Task</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <TextField
                    id="taskSubject"
                    size="small"
                    variant="outlined"
                    fullWidth
                  ></TextField>
                </Grid>
              </Grid>

              <Grid container className="gridContainer">
                <Grid item xs={12} md={3}>
                  <Typography>Priority</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <FormControl fullWidth>
                    <Select
                      id="selectedPriority"
                      variant="outlined"
                      value={priority}
                      onChange={handleChangePriority}
                      defaultValue={priority}
                      style={{ height: 40 }}
                    >
                      <MenuItem value="Select priority">
                        <em style={{ fontStyle: "normal", color: "gray" }}>
                          Select priority
                        </em>
                      </MenuItem>
                      {priorities.map((priority) => {
                        return (
                          <MenuItem key={priority} value={priority}>
                            {priority}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container className="gridContainer">
                <Grid item xs={12} md={3}>
                  <Typography>Description</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <TextField
                    id="taskDescription"
                    multiline
                    minRows={3}
                    variant="outlined"
                    fullWidth
                  ></TextField>
                </Grid>
              </Grid>

              <Grid container className="gridContainer">
                <Grid item xs={12} md={3}>
                  <Typography>Status</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <FormControl fullWidth>
                    <Select
                      id="selectedStatus"
                      variant="outlined"
                      value={status}
                      onChange={handleChangeStatus}
                      defaultValue={status}
                      style={{ height: 40 }}
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
                </Grid>
              </Grid>
            </Grid>
            <Grid container xs={12} md={12} className="gridButton">
              <SubmitButton button_name="ADD" button_id="addTask_btn" />
            </Grid>
          </Paper>
          {/* </div> */}
        </ThemeProvider>
      </Wrapper>
    </>
  );
}

