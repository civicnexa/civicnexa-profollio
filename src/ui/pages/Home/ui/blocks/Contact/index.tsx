import React from 'react'
import { PageSubtitles, SectionTitle } from '../../components'
import { Box, useTheme } from '@mui/material'
import { pxToRem } from '@/common/utils'
import Grid from '@mui/material/Grid2';
import { AppButton } from '@/ui/modules/components/AppButton';
import TextField from '@mui/material/TextField';
import InputUsage from './ui/partials/InputUsage';
import ButtonUsage from './ui/partials/ButtonUsage';


export function ContactSection() {
  const theme = useTheme();

  return (
    <Grid container
      sx={{
        padding: {
          xxs: "40px 20px",
          xs: "50px 70px",
          sm: "70px 100px",
          md: "96px 130px",
          lg: "96px 160px",
        },
        display: 'flex',
        flexDirection: {
            xs: 'column', 
            sm:'column',
            md: 'row',
        },
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width:'100%',
  
        color: (theme) => theme.palette.background.default,
        fontSize: {
          xs: pxToRem(12),
          sm: pxToRem(14),
          md: pxToRem(16),
      },
    
      }}
    >
     
      <Box
        sx={{
        
          width: {
            xs:'100%',
            sm:'100%',
            md:'60%'
          } 
         
    
        }}
      >
        
        <PageSubtitles subtitle='Contact us!'/>
        <SectionTitle title="What can we do for you" />
      <ButtonUsage/>
      <InputUsage/>
   <Box sx={{width:'100%', display:'flex', alignItems:'flex-end',justifyContent:'flex-end'}}>
   <AppButton sx={{border:'1px solid #A1A4B2', borderRadius:'25px', marginTop:'24px', cursor:'pointer', marginLeft:'15px',  backgroundColor: (theme) => theme.contact.contactBtn, color: (theme) => theme.palette.background.default,
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: 'transparent ',
      color:  (theme) => theme.contact.contactBtn,
    },}}>SEND</AppButton>
   </Box>
   
     </Box>
      <Box
        sx={{
          marginTop: {
            xs: "30px",
            sm: "60px",
            md: "100px",
          },
          width: {
            xs:'100%',
            sm:'100%',
            md:'20%',
          },
          display:'flex',
          flexDirection:'column',
         
    
 
        }}
      >
        <Box sx={{marginBottom:'20px'}}>
        <SectionTitle title="Phone" />
        <PageSubtitles subtitle='+234 (0) 7016650549'/>
        </Box>
       <Box>
       <SectionTitle title="Email" />
       <PageSubtitles subtitle='info@civicnexa.com'/>
       </Box>
       
      </Box>
    </Grid>
  );
}