// import { createTheme, ThemeProvider } from '@material-ui/core';
import {Button} from '@mui/material';
import React from 'react'

const Buttons = ({button_id,button_name}) => {
  return (
    <>
    {/* <ThemeProvider theme={theme}> */}
        <Button id={button_id}  type='submit' variant="contained" style={{backgroundColor:'#00d563'}} >{button_name}</Button>
      {/* </ThemeProvider> */}
    </>
  )
}

export default Buttons
