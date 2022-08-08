// import {useNavigate} from 'react-router-dom';
import {Paper,  TextField, FormControlLabel,makeStyles} from '@material-ui/core';
import { Checkbox} from '@mui/material';
import Wrapper from '../Layout/Wrapper';
import SubmitButton from '../Layout/SubmitButton';
import React, {  useContext, useEffect, useRef, useState } from "react";
// import { useDispatch } from 'react-redux';
import AuthContext  from '../context/AuthProvider';
import axios from '../api/axios'
const useStyles = makeStyles((theme) => ({
  paperStyle: {
    width: 450,
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

const LOGIN_URL = '/user/login'

export default function Login() {
  const { setAuth } = useContext(AuthContext)
  const userRef = useRef()
  const errRef = useRef()
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg,setErrMsg] = useState("")
  const [success,setSuccess]=useState(false)
  
  useEffect(()=>{
    userRef.current.focus()
  },[])
  
  useEffect(()=>{
    setErrMsg('')
  },[email,password])
  
  //navigation to dashboard after clicking on login button
  // const navigate = useNavigate();

  // const path = "/admin/dashboard";
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({email,password}),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials:true
        }
        )
        console.log(JSON.stringify(response?.data))
        const token = response?.data?.token
        const roles = response?.data?.role
        setAuth({email, password, roles, token})
        console.log(email, password);
        setSuccess(true)
        setEmail('')
        setPassword('')
    }
    catch(err){
      if(!err?.response){
        setErrMsg('No server response')
      }
      else if (err.response?.status === 400){
        setErrMsg('Missing username or password')
      }

      else if(err.response?.status===401){
        setErrMsg('Unauthorized')
      }
      else{
        setErrMsg('Login Failed')
      }
      errRef.current.focus()
    }
    // navigate(path);
  };
  //
  return (
    <>
    {success ? (
      <section>
        <h1>You are logged in!</h1>
      </section>
    ):(
      <section className="login_page">
        <p ref={errRef} className={errMsg ? "errmsg": "offscreen"} aria-live = "assertive">{errMsg}</p>
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
                  label="Username"
                  type="email"
                  placeholder="Enter username"
                  autoComplete="off"
                  fullWidth
                  required
                  ref={userRef}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  style={{ marginBottom: 20 }}
                />
                <TextField
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                  fullWidth
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  style={{ marginBottom: 20 }}
                />
                <div className={classes.checkboxStyle}>
                  <FormControlLabel
                    control={<Checkbox name="checked" defaultChecked />}
                    label="Remember me"
                  />
                </div>
                <SubmitButton
                  handleChange={(e)=>handleSubmit(e)}
                  button_name="Login"
                  fullWidth
                />
              </div>
            </Paper>
          </div>
        </Wrapper>
      </section>
    )}
    </>
  );
}
