import {useNavigate} from 'react-router-dom';
import {Paper, Button, TextField, Grid, FormControlLabel,makeStyles} from '@material-ui/core';
import { CheckBox } from '@material-ui/icons';
import Navbar from "./Navbar/Navbar";
import '../App.css';

const useStyles=makeStyles(theme=>({
  paperStyle:{padding:30, width:280, margin:'20px auto'},
  login_btn:{backgroundColor: "#00d563", color:'white',fontWeight:400,marginTop:30,marginBottom:30},
  logoStyle:{height:60,width:60,margin:20}
})
)

export default function Login() {
  const classes=useStyles() 

  //navigation to dashboard after clicking on login button  
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/dashboard'; 
    navigate(path);
  }
  //
  return (
    <>
    <header className="App-header">
        <Navbar/>
    </header>
    <Grid className='login_container'>
      <Paper elevation={10} className={classes.paperStyle}>
          <Grid>
            
            <img src="asterLogo.png" alt="" className={classes.logoStyle} />
            <h1 style={{fontSize:20}}>LOG IN</h1>
          </Grid>
          <TextField name='username' id='username' label='Username' type='email' placeholder='Enter username' fullWidth required style={{marginBottom:20}} ></TextField>
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
          <Button variant="contained" type='submit' className={classes.login_btn} onClick={routeChange} fullWidth required>Login</Button>
      </Paper>
    </Grid>  
    </>
  )
}
