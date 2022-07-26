import { Grid, Paper, TextField, Typography,makeStyles, createTheme, ThemeProvider,Button,InputAdornment} from '@material-ui/core'
import {useState} from 'react'
import Buttons from '../Button';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import './Pages.css'

const theme = createTheme({
    typography: {
      allVariants:{
        fontFamily: 'Josefin Sans',
      }
    },
  });

const useStyles = makeStyles(theme=>({
    paperStyle:{
        padding:20, 
        width:'50%', 
        margin:'auto',
    }
}))

export const ChangePassword = () => {

  const classes=useStyles()
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle=(e)=>{
    setShowPassword(!showPassword)
  }
  const [showCPassword, setCShowPassword] = useState(false);

  const handlePasswordConfirmToggle=(e)=>{
    setCShowPassword(!showCPassword)
  }

  return (

    <>
        <ThemeProvider theme={theme} >
            <div className='mainDiv'>
                <Paper className={classes.paperStyle}>
                    <Typography className='formHeading' variant='h5' >CHANGE PASSWORD</Typography>
                        <Grid container className='gridContainer'>
                            <Grid item xs={4}>
                                <Typography>Username:</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField size='small'  variant='outlined' fullWidth></TextField>
                            </Grid>
                        </Grid>

                        <Grid container className='gridContainer'>
                            <Grid item xs={4}>
                                <Typography >New Password:</Typography>
                            </Grid>
                            <Grid item xs={8}>
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
                                    fullWidth/>
                            </Grid>
                        </Grid>

                        <Grid container className='gridContainer'>
                            <Grid item xs={4}>
                                <Typography>Confirm Password:</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField 
                                size='small' 
                                type={showCPassword ? "text" : "password"} 
                                variant='outlined'
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="end">
                                         <Button onClick={handlePasswordConfirmToggle}>{!showCPassword? <VisibilityOff/>:<Visibility/> }</Button>
    
                                      </InputAdornment>
                                    ),
                                  }} 
                                  fullWidth/>
                            </Grid>
                        </Grid> 
                        <Grid container xs={12} md={12} className='gridButton' >
                            <Buttons button_name='Submit' button_id='changePassword_btn'/>
                        </Grid>   
                </Paper>
            </div>
        </ThemeProvider>
    </>
    )
}
