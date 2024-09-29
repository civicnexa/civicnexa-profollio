import { Box } from '@mui/material'
import React from 'react'
import { WhatButton } from './component'

const data = [
  {
    text: "Web & Mobile Development"
  },
  {
    text: "Software Maintainence"
  },
  {
    text: "Graphic Design"
  },
  {
    text: "UI/UX Design"
  },
  {
    text: "Software Consultancy"
  },
  {
    text: "Third party contacts"
  },
];

export default function ButtonUsage() {
  return (
    
    <Box  sx={{
      display: 'grid',
      gap: '15px',
      gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(3, [100,100,100])'],
      marginTop:'25px',
      width:'100%'
   
    }}>  
    {
      data.map((item, index) => (
        <WhatButton text={item.text} key={index} />
      ))
    }
    </Box>
  )
}
