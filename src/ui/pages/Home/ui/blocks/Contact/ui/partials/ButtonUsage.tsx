import { AppButton } from '@/ui/modules/components/AppButton'
import React from 'react'

export default function ButtonUsage() {
  return (
    
    <div>  <AppButton sx={{border:'1px solid #A1A4B2', borderRadius:'25px', marginTop:'24px', cursor:'pointer',   backgroundColor: 'transparent', // Initial background color
        transition: 'background-color 0.3s', 
        '&:hover': {
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.background.default,
        },}}>Web & Mobile Development</AppButton>
           <AppButton sx={{border:'1px solid #A1A4B2', borderRadius:'25px', marginTop:'24px', marginLeft:{
            md:'15px',
            sm:'0'
           }, cursor:'pointer',   backgroundColor: 'transparent', // Initial background color
        transition: 'background-color 0.3s',
        '&:hover': {
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.background.default,
        },}}>Software Maintainence</AppButton>
           <AppButton sx={{border:'1px solid #A1A4B2', borderRadius:'25px', marginTop:'24px', cursor:'pointer',marginLeft:{
            md:'15px',
            sm:'15px'
           },
          backgroundColor: 'transparent', 
        transition: 'background-color 0.3s', 
        '&:hover': {
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.background.default,
        },}}>Graphic Design</AppButton>
           <AppButton sx={{border:'1px solid #A1A4B2', borderRadius:'25px', marginTop:'24px', cursor:'pointer',  backgroundColor: 'transparent', 
        transition: 'background-color 0.3s',
        
        '&:hover': {
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.background.default,
        },}}>UI/UX Design</AppButton>
           <AppButton sx={{border:'1px solid #A1A4B2', borderRadius:'25px', marginTop:'24px', cursor:'pointer', marginLeft:{
            md:'15px',
            sm:'0'
           },   backgroundColor: 'transparent', 
        transition: 'background-color 0.3s', 
        '&:hover': {
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.background.default,
        },}}>Software Consultancy</AppButton>
           <AppButton sx={{border:'1px solid #A1A4B2', borderRadius:'25px', marginTop:'24px', cursor:'pointer', marginLeft:{
            md:'15px',
            sm:'0'
           },   backgroundColor: 'transparent', // Initial background color
        transition: 'background-color 0.3s', // Optional: smooth transition
        '&:hover': {
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.background.default,
        },}}>Third party contacts</AppButton></div>
  )
}
