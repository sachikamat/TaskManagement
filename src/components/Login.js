import React from 'react'
import './Login.css'
import {Paper, Button, TextField, Grid, FormControlLabel} from '@material-ui/core';
import { CheckBox } from '@material-ui/icons';

export default function Login() {

  const paperStyle={padding:20, width:280, margin:'20px auto',bgcolor:'#00d563'}
  const login_btn={backgroundColor: "#00d563", color:'white',fontWeight:400,marginTop:20,marginBottom:30}
  return (
    
    <Grid>
      <Paper elevation={10} style={paperStyle}>
          <Grid>
            <h1>LOG IN</h1>
          </Grid>
          <TextField name='username' id='username' label='Username' type='email' placeholder='Enter username' fullWidth required style={{my:20}} ></TextField>
          <TextField name='password' id='password' label='Password' type='password' placeholder='Enter password' fullWidth required style={{marginBottom:20}}></TextField>
          <FormControlLabel
            control={
              <CheckBox
              name='checked'
              color='primary'
              />
            }
              label='Remember me' 
          />
          <Button variant="contained" type='submit' style={login_btn} fullWidth required>Login</Button>
      </Paper>
    </Grid>  
  )
}
