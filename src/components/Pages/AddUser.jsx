import React, { useContext, useRef, useState } from 'react';
import {Paper,  TextField, Grid, Typography, makeStyles, FormControl, Select, MenuItem,IconButton, createTheme, ThemeProvider,Button,InputAdornment} from '@material-ui/core';
import {AccountCircleRounded,PhotoCamera,Visibility, VisibilityOff} from '@material-ui/icons';
import './Pages.css'
import SubmitButton from '../Layout/SubmitButton';
import Wrapper from '../Layout/Wrapper';
import axios from '../api/axios'
import AuthContext from '../context/AuthProvider';

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


const ADDUSER_URL = '/user/register'

//defining an array of roles for the dropdown menu
const roles=[
  'Frontend Developer',
  'Backend Developer',
  'Designer',
  'QA'
]

export default function AddUser() {
  const { setAuth } = useContext(AuthContext)
  const userRef = useRef()
  const errRef = useRef()

  const [user,setUser]=useState(
    {
      email:"",
      password:"",
      name:"",
      mobile:"",
      phone:"",
      role:"Select a role",
      success:false
    }
  )

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName] = useState("")
  const [mobile,setMobile] = useState("")
  const [phone,setPhone] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("Select a role");
  const [success,setSuccess]=useState(false)
  const [errMsg,setErrMsg] = useState("")

  const classes = useStyles(); //allows you to use styles as objects. You can use classes.anyStyle

  const [image, setImage] = useState();
  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  

  const handlePasswordToggle = (e) => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async(e)=> {
    e.preventDefault();
    

  }

  //select bhako role ko value chaiyema use this---
  

  // const handleChange = (event) => {
  //   setRole(event.target.value);
  // };
  //---//

  return (
    <>
      <ThemeProvider theme={theme}>
        <Wrapper adminSidebar navHeader>
          <Paper className="paperStyle">
            <Typography
              className="formHeading"
              style={{ textAlign: "center" }}
              variant="h4"
            >
              ADD USER
            </Typography>
            <Grid container spacing={3} className={classes.gridContainer}>
              <Grid item xs={6} md={8}>
                <Typography>Name</Typography>
                <TextField
                  value={name}
                  ref={userRef}
                  size="small"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setName(e.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={6} md={4}>
                {
                  // if image chaina bhane icon dekhaucha natra image nai dekhaucha. if else use garya cha tala
                }
                {!image ? (
                  <AccountCircleRounded className={classes.userIconCircle} />
                ) : (
                  <img className={classes.userImage} src={image} alt="" />
                )}
                <IconButton
                  className={classes.userIcon}
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <input
                    hidden
                    id="userImage"
                    accept="image/*"
                    type="file"
                    onChange={handleImageUpload}
                  />
                  <PhotoCamera />
                </IconButton>
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography>Phone</Typography>
                <TextField
                  value={phone}
                  size="small"
                  type="number"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setPhone(e.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography>Mobile No.</Typography>
                <TextField
                  value={mobile}
                  size="small"
                  type="number"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setMobile(e.target.value)}
                ></TextField>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography>Email</Typography>
                <TextField
                  value={email}
                  size="small"
                  type="email"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography>Role</Typography>
                <FormControl fullWidth>
                  <Select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    style={{ height: 40 }}
                    variant="outlined"
                    defaultValue={role}
                  >
                    <MenuItem value="Select a role">
                      <em style={{ fontStyle: "normal", color: "gray" }}>
                        Select a role
                      </em>
                    </MenuItem>
                    {roles.map((role) => {
                      return (
                        <MenuItem key={role} value={role}>
                          {role}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography>Password</Typography>
                <TextField
                  size="small"
                  value={password}
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
                  onChange={(e) => setPassword(e.target.value)}
                ></TextField>
              </Grid>
            </Grid>
            <Grid container xs={12} md={12} className="gridButton">
              <SubmitButton
                button_name="ADD"
                handleChange={(e) => handleSubmit(e)}
              />
            </Grid>
          </Paper>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}