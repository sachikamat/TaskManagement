import {useNavigate} from 'react-router-dom';
import {Paper, Button, TextField, Grid, FormControlLabel,makeStyles} from '@material-ui/core';
import { Checkbox } from '@mui/material';
import Wrapper from '../Layout/Wrapper';



const useStyles = makeStyles((theme) => ({
  paperStyle: {
    padding: 30,
    maxWidth: 300,
    textAlign: "center",
    margin: " auto",
  },
  login_btn: {
    backgroundColor: "#00d563",
    color: "white",
    fontWeight: 400,
    marginTop: 20,
    marginBottom: 30,
  },
  logoStyle: { height: 60, width: 60, margin: 20 },
  heading: {
    fontSize: 20,
  },
  checkboxStyle: {
    display: "flex",
    marginLeft: 5,
  },
}));

export default function Login() {
  const classes = useStyles();

  //navigation to dashboard after clicking on login button
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/admin/dashboard";
    navigate(path);
  };
  //
  return (
    <>
      <Wrapper navBar/>
        <Paper elevation={10} className={classes.paperStyle}>
          <Grid item>
            <img
              src={process.env.PUBLIC_URL + "/asterLogo.png"}
              alt=""
              className={classes.logoStyle}
            />
            <h1 className={classes.heading}>LOG IN</h1>
          </Grid>
          <TextField
            name="username"
            id="username"
            label="Username"
            type="email"
            placeholder="Enter username"
            fullWidth
            required
            style={{ marginBottom: 20 }}
          ></TextField>
          <TextField
            name="password"
            id="password"
            label="Password"
            type="password"
            placeholder="Enter password"
            fullWidth
            required
            style={{ marginBottom: 20 }}
          ></TextField>
          <div className={classes.checkboxStyle}>
            <FormControlLabel
              sx={{ left: 0 }}
              control={<Checkbox name="checked" defaultChecked />}
              label="Remember me"
            />
          </div>
          <Button
            variant="contained"
            type="submit"
            className={classes.login_btn}
            onClick={routeChange}
            fullWidth
            required
          >
            Login
          </Button>
        </Paper>
      {/* </Layout> */}
    </>
  );
}
