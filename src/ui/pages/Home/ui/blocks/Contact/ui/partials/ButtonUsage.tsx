import { AppButton } from '@/ui/modules/components/AppButton'
import { Box } from '@mui/material'
import React from 'react'

export default function ButtonUsage() {
  return (
    
    <Box  sx={{
      display: 'grid',
      gap: '15px',
      gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(3, [100,100,100])'], // 2 columns on mobile, 3 on desktop
      marginTop:'25px',
      width:'100%'
   
    }}>  <AppButton sx={{border:'1px solid #A1A4B2', borderRadius:'25px',cursor:'pointer',   backgroundColor: 'transparent', // Initial background color
        transition: 'background-color 0.3s', 
        '&:hover': {
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.background.default,
        },}}>Web & Mobile Development</AppButton>
           <AppButton sx={{border:'1px solid #A1A4B2', borderRadius:'25px', cursor:'pointer',   backgroundColor: 'transparent', // Initial background color
        transition: 'background-color 0.3s',
        '&:hover': {
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.background.default,
        },}}>Software Maintainence</AppButton>
           <AppButton sx={{border:'1px solid #A1A4B2', borderRadius:'25px', cursor:'pointer',
          backgroundColor: 'transparent', 
        transition: 'background-color 0.3s', 
        '&:hover': {
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.background.default,
        },}}>Graphic Design</AppButton>
           <AppButton sx={{border:'1px solid #A1A4B2', borderRadius:'25px', cursor:'pointer',  backgroundColor: 'transparent', 
        transition: 'background-color 0.3s',
        
        '&:hover': {
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.background.default,
        },}}>UI/UX Design</AppButton>
           <AppButton sx={{border:'1px solid #A1A4B2', borderRadius:'25px', cursor:'pointer',   backgroundColor: 'transparent', 
        transition: 'background-color 0.3s', 
        '&:hover': {
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.background.default,
        },}}>Software Consultancy</AppButton>
           <AppButton sx={{border:'1px solid #A1A4B2', borderRadius:'25px', cursor:'pointer',   backgroundColor: 'transparent', // Initial background color
        transition: 'background-color 0.3s', // Optional: smooth transition
        '&:hover': {
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.background.default,
        },}}>Third party contacts</AppButton></Box>
  )
}
