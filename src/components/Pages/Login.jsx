import {useNavigate} from 'react-router-dom';
import {Paper,  TextField, FormControlLabel,makeStyles} from '@material-ui/core';
import { Checkbox} from '@mui/material';
import Wrapper from '../Layout/Wrapper';
import SubmitButton from '../Layout/SubmitButton';
import React from "react";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    width: 380,
    textAlign: "center",
    display: "flex"
  },
  
  logoStyle: { height: 60, width: 60, margin: 20 },
  heading: {
    fontSize: 20,
  },
  checkboxStyle: {
    display: "flex",
    marginLeft: 10,
    marginBottom: 10,
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
    <div className="login_page">
      <Wrapper navBar>
        <div className="login_container">
          <div className="login_banner">
            <h1>WELCOME BACK!</h1>
            <p>You can sign in to access with your existing account.</p>
          </div>
          <Paper elevation={20} className={classes.paperStyle}>
            <div className="login_form">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/asterLogo.png"}
                  alt=""
                  className={classes.logoStyle}
                />
                <h1 className={classes.heading}>LOG IN</h1>
              </div>
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
                  control={<Checkbox name="checked" defaultChecked />}
                  label="Remember me"
                />
              </div>
                <SubmitButton handleChange={routeChange} button_name="Login" fullWidth/>
            </div>
          </Paper>
        </div>
      </Wrapper>
      </div>
    </>
  );
}
