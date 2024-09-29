import { Box, TextField } from '@mui/material'
import React from 'react'

export default function InputUsage() {
  return (
    <div> <Box
    component="form"
    sx={{ '& > :not(style)': { m: 1, display:'flex',flexDirection:'column',width:'100%'} }}
    noValidate
    autoComplete="off"
  >

<TextField
  id="standard-basic"
  label="Name"
  variant="standard"

/>
<TextField
  id="standard-basic"
  label="Email"
  variant="standard"

/>
<TextField
  id="standard-basic"
  label="Message"
  variant="standard"

/>
  

  </Box></div>
  )
}
