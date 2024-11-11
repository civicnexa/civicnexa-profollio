import React from 'react'
import { PageSubtitles, SectionTitle } from '../../components'
import { Box, useTheme } from '@mui/material'
import { pxToRem } from '@/common/utils'
import Grid from '@mui/material/Grid2';
import InputUsage from './ui/partials/InputUsage';


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
      <InputUsage/>
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
        <PageSubtitles subtitle='+234 7016650549'/>
        </Box>
       <Box>
       <SectionTitle title="Email" />
       <PageSubtitles subtitle='info@civicnexa.com'/>
       </Box>
       
      </Box>
    </Grid>
  );
}