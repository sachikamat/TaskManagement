// import { createTheme, ThemeProvider } from '@mui/material';
import {Button} from '@mui/material';
import React from 'react'

const Buttons = ({button_id,button_name,handleChange}) => {
  return (
    <>
    {/* <ThemeProvider theme={theme}> */}
        <Button id={button_id} onClick={handleChange}  type='submit' variant="contained" style={{backgroundColor:'#00d563'}} >{button_name}</Button>
      {/* </ThemeProvider> */}
    </>
  )
}

export default Buttons
