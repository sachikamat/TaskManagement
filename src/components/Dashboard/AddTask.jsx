import React, { useState } from 'react';
import {Paper,Button, Grid, Typography, makeStyles, FormControl, Select, MenuItem, createTheme, ThemeProvider, TextField} from '@material-ui/core';
import './Dashboard.css'

//defining theme to overRide the default topography fontFamily
const theme = createTheme({
  typography: {
    allVariants:{
      fontFamily: 'Josefin Sans',
      // textAlign:'center'
    }
  },
});

//defining styles for various components
const useStyles=makeStyles(theme=>({
  paperStyle:{
    padding:20, maxWidth:600, margin:'5px auto',fontFamily:'Josefin Sans'
  },
  gridContainer:{
    paddingRight:40,
    paddingLeft:40,
    paddingBottom:25

  },
  login_btn:{
    backgroundColor: "#00d563", 
    color:'white',
    fontWeight:400,
  },
  formHeading:{
    padding:20,
    textAlign:'center'
  }
}))

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
  'High'
]

const statusAll=[
  'Pending',
  'Ongoing',
  'Completed'
]

export default function AddTask() {

  const classes=useStyles()     //allows you to use styles as objects. You can use classes.anyStyle


  //select bhako role ko value chaiyema use this---
  const [user, setUser] = useState('Select user')
  const [priority, setPriority] = useState('Select priority')
  const [status, setStatus] = useState('Select status')


  const handleChange = (event) => {
    setUser(event.target.value);
  };
  //---//
  const handleChangePriority  = (event) => {
    setPriority(event.target.value);
  };

  const handleChangeStatus  = (event) => {
    setStatus(event.target.value);
  };

  return (
    <>
    <ThemeProvider theme={theme} >
    <Paper className={classes.paperStyle}>
      <Typography className={classes.formHeading } variant='h4' >ADD TASK</Typography>

      <Grid container>
        <Grid container className={classes.gridContainer}  >
          <Grid item xs={4} md={2} >
            <Typography >User</Typography>
          </Grid>
          <Grid item xs={8} md={10} >
            <FormControl fullWidth>
                <Select
                  id='selectedUser'
                  value={user}
                  variant='outlined'
                  onChange={handleChange}
                  defaultValue={user}
                  style={{height:40}}
                >
                  <MenuItem value="Select user">
                    <em style={{fontStyle:'normal',color:'gray' }}>Select user</em>
                  </MenuItem>
                  {users.map(user=>{
                    return(
                      <MenuItem
                      key={user}
                      value={user}
                      >
                        {user}
                      </MenuItem>
                    )
                  })
                }
                </Select>
              </FormControl>
          </Grid>
        </Grid>

        <Grid container  className={classes.gridContainer}  >
          <Grid item xs={4} md={2} >
            <Typography >Subject</Typography>
          </Grid> 
          <Grid item xs={8} md={10}>
            <TextField id='taskSubject' size='small' variant='outlined' fullWidth></TextField>
          </Grid>   
        </Grid>

        <Grid container className={classes.gridContainer}  >
          <Grid item xs={4} md={2} >
            <Typography >Priority</Typography>
          </Grid>
          <Grid item xs={8} md={10} >
            <FormControl fullWidth>
                <Select
                  id='selectedPriority'
                  variant='outlined'
                  value={priority}
                  onChange={handleChangePriority}
                  defaultValue={priority}
                  style={{height:40}}
                >
                  <MenuItem value="Select priority">
                    <em style={{fontStyle:'normal',color:'gray' }}>Select priority</em>
                  </MenuItem>
                  {priorities.map(priority=>{
                    return(
                      <MenuItem
                      key={priority}
                      value={priority}
                      >
                        {priority}
                      </MenuItem>
                    )
                  })
                }
                </Select>
              </FormControl>
          </Grid>
        </Grid>

        <Grid container  className={classes.gridContainer}  >
          <Grid item xs={4} md={2} >
            <Typography >Description</Typography>
          </Grid> 
          <Grid item xs={8} md={10}>
            <TextField id='taskDescription' multiline minRows={3} variant='outlined' fullWidth></TextField>
          </Grid>   
        </Grid>
        
        <Grid container className={classes.gridContainer}  >
          <Grid item xs={4} md={2} >
            <Typography >Status</Typography>
          </Grid>
          <Grid item xs={8} md={10} >
            <FormControl fullWidth>
                <Select
                  id='selectedStatus'
                  variant='outlined'
                  value={status}
                  onChange={handleChangeStatus}
                  defaultValue={status}
                  style={{height:40}}
                >
                  <MenuItem value="Select status">
                    <em style={{fontStyle:'normal',color:'gray' }}>Select status</em>
                  </MenuItem>
                  {statusAll.map(status=>{
                    return(
                      <MenuItem
                      key={status}
                      value={status}
                      >
                        {status}
                      </MenuItem>
                    )
                  })
                }
                </Select>
              </FormControl>
          </Grid>
        </Grid>

        <Grid item xs={12} md={12} className={classes.gridContainer}>
          <Button id='addTask_btn' variant="contained" type='submit' className={classes.login_btn} required>Add</Button>
        </Grid>

      </Grid>
    </Paper>
    </ThemeProvider>
    </>
  )
}

