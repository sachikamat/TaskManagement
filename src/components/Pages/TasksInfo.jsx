import { Paper, Typography,FormControl, Select, MenuItem} from '@material-ui/core'
import { Table, TableContainer, TableCell, TableRow, createTheme, ThemeProvider  } from '@mui/material'
import { useState } from 'react'
import Buttons from '../Button'
import './Pages.css'
// import {Divider} from '@mui/material';

const theme = createTheme({
  typography: {
    header:{
      fontFamily: 'Josefin Sans',
      fontWeight:700
    }
  },
})



const statusAll=[
  'Pending  ',
  'Ongoing  ',
  'Completed'
]


const TasksInfo = () => {

  const [status, setStatus] = useState('Select status')

  const handleChangeStatus  = (event) => {
    setStatus(event.target.value);
  };
  return (
    <>
    <ThemeProvider theme={theme}>
    <div className='mainDiv'>
    <TableContainer component={Paper} className='paperStyle'sx={{maxWidth:700}}>
    <Typography className='formHeading' variant='h5' >TASK DETAIL</Typography>
      <Table  >      
          <TableRow >
              <TableCell variant="head"><Typography variant='header' className='tableHead'>TASK</Typography></TableCell>
              <TableCell>Login Form</TableCell>
          </TableRow>     
          <TableRow >
              <TableCell variant="head"><Typography variant='header' className='tableHead'>PRIORITY</Typography></TableCell>
              <TableCell>Urgent</TableCell>
          </TableRow>  
          <TableRow >
              <TableCell variant="head"><Typography variant='header' className='tableHead'>DESCRIPTION</Typography></TableCell>
              <TableCell>Please work on creating a login form today.</TableCell>
          </TableRow> 
          <TableRow >
              <TableCell variant="head">
                <Typography variant='header' className='tableHead'>STATUS</Typography>
                <FormControl >
                <Select
                  id='selectedStatus'
                  variant='outlined'
                  value={status}
                  onChange={handleChangeStatus}
                  defaultValue={status}
                  className='selectStyle'
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
                </TableCell>
              <TableCell> <Buttons button_name='Update Status' button_id='updateStatus_btn'/></TableCell>
          </TableRow>      
      </Table>
      </TableContainer>
      </div>
      </ThemeProvider>
      
    </>
    
  )
}

export default TasksInfo
