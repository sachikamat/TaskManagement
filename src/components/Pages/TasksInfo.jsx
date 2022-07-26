import { Grid,makeStyles,Paper, Typography,FormControl, Select, MenuItem} from '@material-ui/core'
import { useState } from 'react'
import Buttons from '../Button'
import './Pages.css'
// import {Divider} from '@mui/material';

const useStyles = makeStyles(theme=>({
  paperStyle:{
    padding:20, 
    margin:'auto',
  },
}))



const statusAll=[
  'Pending  ',
  'Ongoing  ',
  'Completed'
]


const TasksInfo = () => {
  const classes= useStyles();

  const [status, setStatus] = useState('Select status')

  const handleChangeStatus  = (event) => {
    setStatus(event.target.value);
  };
  return (
    <>
      <div className='mainDiv'>
        <Paper className={classes.paperStyle}>
        <Typography className='formHeading' variant='h4' >TASK</Typography>
          <Grid container spacing={2} className='gridContainer'>
            <Grid item xs={12} md={6} className='gridLine'>
              <Typography>Task:</Typography>
            </Grid>   
            <Grid item xs={12} md={6} className='gridLine'>
              <Typography>Task1</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>Priority:</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>Urgent</Typography>
            </Grid>   
            <Grid item xs={12} md={6} className='gridLine'>
              <Typography>Description:</Typography>
            </Grid>   
            <Grid item xs={12} md={6} className='gridLine'>
              <Typography>Please work on this task</Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography>Status:</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
            <FormControl >
                <Select
                  id='selectedStatus'
                  variant='outlined'
                  value={status}
                  onChange={handleChangeStatus}
                  defaultValue={status}
                  style={{height:40, width:150}}
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
            <Grid item xs={12} md={6}>
              <Buttons button_name='Update Status' button_id='updateStatus_btn'/>
              {/* <Typography>Update Status</Typography> */}
            </Grid>        
          </Grid>
        </Paper>
      </div>
    </>
    
  )
}

export default TasksInfo
