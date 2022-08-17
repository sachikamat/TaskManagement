import { Grid, Paper, TextField, Typography,makeStyles, createTheme, ThemeProvider,Button,InputAdornment} from '@material-ui/core'
import {useState,React} from 'react'
import SubmitButton from '../Layout/SubmitButton';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import './Pages.css'
import Wrapper from '../Layout/Wrapper';
import { useParams } from 'react-router-dom';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Josefin Sans",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    padding: 20,
    // width: "50%",
    margin: "auto",
  },
}));

export const ChangePassword = () => {
  const {currentUser} = useParams()
  // const id = useParams()
  console.log(currentUser,'cUser')

  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = (e) => {
    setShowPassword(!showPassword);
  };
  const [showCPassword, setCShowPassword] = useState(false);

  const handlePasswordConfirmToggle = (e) => {
    setCShowPassword(!showCPassword);
  };

  const findUser = ()=>{
    return (currentUser==='admin')? true:false
  }

  return (
    <>
      <Wrapper adminSidebar={findUser()} userSideBar={!findUser()} navHeader>
        
        <ThemeProvider theme={theme}>
          <div className="password_container">
            <Paper className={classes.paperStyle}>
              <Typography className="formHeading" variant="h5">
                CHANGE PASSWORD
              </Typography>
              <Grid container className="gridContainer">
                <Grid item xs={12} md={4}>
                  <Typography>Email:</Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <TextField
                    name="uname"
                    size="small"
                    variant="outlined"
                    fullWidth
                  ></TextField>
                </Grid>
              </Grid>

              <Grid container className="gridContainer">
                <Grid item xs={12} md={4}>
                  <Typography>New Password:</Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <TextField
                    size="small"
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button onClick={handlePasswordToggle}>
                            {!showPassword ? <VisibilityOff /> : <Visibility />}
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid container className="gridContainer">
                <Grid item xs={12} md={4}>
                  <Typography>Confirm Password:</Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <TextField
                    size="small"
                    type={showCPassword ? "text" : "password"}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button onClick={handlePasswordConfirmToggle}>
                            {!showCPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container xs={12} md={12} className="gridButton">
                <SubmitButton button_name="Submit" button_id="changePassword_btn" />
              </Grid>
            </Paper>
          </div>
        </ThemeProvider>
      </Wrapper>
    </>
  );
};