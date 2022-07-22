import React, { useState } from 'react';
import {Paper, Button, TextField, Grid, Typography, makeStyles, FormControl, Select, MenuItem,IconButton, createTheme, ThemeProvider} from '@material-ui/core';
import {AccountCircleRounded,PhotoCamera} from '@material-ui/icons';
import './Dashboard.css'

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
    maxWidth:600, 
    margin:'5px auto',
    fontFamily:'Josefin Sans'
  },
  gridContainer:{
    paddingRight:40,
    paddingLeft:40,
    paddingBottom:30,
  },
  login_btn:{
    backgroundColor: "#00d563",
    color:'white',
    fontWeight:400,
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
  formHeading:{
    padding:20,
    textAlign:'center'
  }
}))

//defining an array of roles for the dropdown menu
const roles=[
  'Frontend',
  'Backend',
  'Designer',
  'QA'
]

export default function AddUser() {

  const classes=useStyles()     //allows you to use styles as objects. You can use classes.anyStyle

  const [image,setImage] = useState()

  const handleImageUpload= (e) =>{
    setImage(URL.createObjectURL(e.target.files[0]));

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
      <Paper className={classes.paperStyle}>
        <Typography className={classes.formHeading } variant='h4' >ADD USER</Typography>
        <Grid container spacing={3} className={classes.gridContainer} >
          
            <Grid item xs={6} md={8} >
              <Typography >Name</Typography>
              <TextField id='userName' size='small' variant='outlined' fullWidth></TextField>
            </Grid>
            <Grid item xs={6} md={4}  >     
              {// if image chaina bhane icon dekhaucha natra image nai dekhaucha. if else use garya cha tala 
              }
              {!image? <AccountCircleRounded style={{fontSize:50,marginLeft:30}}/>:   <img className={classes.userImage} src={image} alt=''/>}  
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
            
            <Grid item xs={12} md={8}>
              <Typography >Email</Typography>
              <TextField id='userEmail' size='small' type='email' variant='outlined' fullWidth></TextField>
            </Grid>
            <Grid item xs={12} md={4}>
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
        <Grid item xs={12} md={8}>
          <Typography >Password</Typography>
          <TextField id='userPassword' size='small' type='password' variant='outlined' fullWidth></TextField>
        </Grid>

        <Grid item xs={12} md={12}>
          <Button id='addUser_btn' variant="contained" type='submit' className={classes.login_btn} required>Add</Button>
        </Grid>
            
      </Grid>
        
      </Paper>
    </ThemeProvider>
    </>
  )
}
