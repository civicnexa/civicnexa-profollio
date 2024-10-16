import React from 'react'
import { PageSubtitles, SectionTitle } from '@/ui/pages/Home/ui/components'
import { Box, Typography, useTheme } from '@mui/material'
import { pxToRem } from '@/common/utils'
import Grid from '@mui/material/Grid2';
import {TeamCarousel} from './ui/components'

export  function TeamSection() {
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
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'start',
        color: (theme) => theme.palette.background.default,
        fontSize: {
          xs: pxToRem(12),
          sm: pxToRem(14),
          md: pxToRem(16),
      },
    
      }}
    >
      <Grid container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          gap: '4px',
        }}
      >
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '30%',
            },
            // Add responsive adjustments if needed
          }}
        >
          <SectionTitle title="Our Team" />
          <PageSubtitles subtitle='Meet Our Experienced Team Members'/>
        </Box>
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '50%',
            },
            marginBottom:{
              xxs:'30px',
              md:'0'
            },
            fontSize: {
              xs: pxToRem(12),
              sm: pxToRem(14),
              md: pxToRem(16),
          },
            // Add responsive adjustments if needed
          }}
        >
          <SectionTitle title="Discover the talented individuals behind our success, each bringing unique expertise and passion to drive innovation in every project." />
        </Box>
      </Grid>
     
      <Box
        sx={{
          position: "relative",
          marginTop: {
            xs: "30px",
            sm: "50px",
            md: "100px",
          },
          width: '100%', // Ensure this spans the full width of the parent container
    
        }}
      >
       <TeamCarousel/>
      </Box>
    </Grid>
  );
}
