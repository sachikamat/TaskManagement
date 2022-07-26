import React, { useState } from 'react';
import {Paper,  TextField, Grid, Typography, makeStyles, FormControl, Select, MenuItem,IconButton, createTheme, ThemeProvider,Button,InputAdornment} from '@material-ui/core';
import {AccountCircleRounded,PhotoCamera,Visibility, VisibilityOff} from '@material-ui/icons';
import './Pages.css'
import Buttons from '../Button';
//defining theme to overRide the default topography fontFamily
const theme = createTheme({
  typography: {
    allVariants:{
      fontFamily: 'Josefin Sans',
      textAlign:'left'
    }
  },
});

//defining styles for various components
const useStyles=makeStyles(theme=>({
  paperStyle:{
    padding:20, 
    width:'50%', 
    margin:'auto',
  },
  gridContainer:{
    paddingRight:40,
    paddingLeft:40,
    paddingBottom:30,
  },
  
  userImage:{
    height:50,
    borderRadius:50,
    marginLeft:30
  },
  userIcon:
  {
    marginBottom:20,
    padding:0, 
    paddingLeft:15
  },
  userIconCircle:{
    fontSize:50,
    marginLeft:30},

}))

//defining an array of roles for the dropdown menu
const roles=[
  'Frontend Developer',
  'Backend Developer',
  'Designer',
  'QA'
]

export default function AddUser() {

  const classes=useStyles()     //allows you to use styles as objects. You can use classes.anyStyle

  const [image,setImage] = useState()
  const handleImageUpload= (e) =>{
    setImage(URL.createObjectURL(e.target.files[0]));

  }

  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle=(e)=>{
    setShowPassword(!showPassword)
  }

  
  //select bhako role ko value chaiyema use this---
  const [role, setRole] = useState("Select a role")

  const handleChange = (event) => {
    setRole(event.target.value);
  };
  //---//

  return (
    <>
    <ThemeProvider theme={theme} >
      <div className='mainDiv'>
      <Paper className={classes.paperStyle}>
      <Typography className='formHeading' style={{textAlign:'center'}} variant='h4' >ADD USER</Typography>
        <Grid container spacing={3} className={classes.gridContainer} >
          
            <Grid item xs={6} md={8} >
              <Typography >Name</Typography>
              <TextField id='userName' size='small' variant='outlined' fullWidth></TextField>
            </Grid>
            <Grid item xs={6} md={4}  >     
              {// if image chaina bhane icon dekhaucha natra image nai dekhaucha. if else use garya cha tala 
              }
              {!image? <AccountCircleRounded className={classes.userIconCircle}/>:   <img className={classes.userImage} src={image} alt=''/>}  
              <IconButton className={classes.userIcon} color="primary" aria-label="upload picture" component="label">
                <input hidden id='userImage' accept="image/*" type="file" onChange={handleImageUpload} />
                <PhotoCamera />
              </IconButton>
              
              </Grid>
            <Grid item xs={6} md={6} >
              <Typography >Phone</Typography>
              <TextField id='userPhone' size='small' type='number' variant='outlined' fullWidth></TextField>
            </Grid>
            <Grid item xs={6} md={6}>
              <Typography >Mobile No.</Typography>
              <TextField id='userMobile' size='small' type='number' variant='outlined' fullWidth></TextField>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography >Email</Typography>
              <TextField id='userEmail' size='small' type='email' variant='outlined' fullWidth></TextField>
            </Grid>
            <Grid item xs={12} md={6}>
            <Typography >Role</Typography>  
            <FormControl fullWidth>
              <Select
                value={role}
                onChange={handleChange}
                style={{height:40}}
                variant='outlined'
                defaultValue={role}            
              >
                <MenuItem value="Select a role">
                  <em style={{fontStyle:'normal',color:'gray' }}>Select a role</em>
                </MenuItem>
                {roles.map(role=>{
                  return(
                    <MenuItem
                    key={role}
                    value={role}
                    >
                      {role}
                    </MenuItem>
                  )
                })
              }
              </Select>
          
        </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
            <Typography >Password</Typography>
            <TextField 
            size='small' 
            type={showPassword ? "text" : "password"}
            variant='outlined'
            InputProps={{
                endAdornment: (
                <InputAdornment position="end">
                    <Button onClick={handlePasswordToggle}>{!showPassword? <VisibilityOff/>:<Visibility/> }</Button>
                </InputAdornment>
                ),
            }} 
            fullWidth></TextField>
          </Grid>
            
      </Grid>
      <Grid container xs={12} md={12} className='gridButton'>
          <Buttons button_name='ADD' button_id='addTask_btn' />
        </Grid>
        
      </Paper>
      </div>
    </ThemeProvider>
    </>
  )
}
