import React from 'react'
import { PageSubtitles, SectionTitle } from '../../components'
import { Box, Typography, useTheme } from '@mui/material'
import { pxToRem } from '@/common/utils'
import Grid from '@mui/material/Grid2';
import AccordionUsage from './ui/blocks/AccordionUsage';

export function ServiceSection() {
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
        background: (theme) => theme.palette.primary.main,
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
          <SectionTitle title="WHAT WE DO" />
          <PageSubtitles subtitle='Delivering Tailored Digital Services with Precision'color='white'/>
        </Box>
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '50%',
            },
            // Add responsive adjustments if needed
          }}
        >
          <SectionTitle title="We deliver customized digital solutions, blending innovations and expertise to help businesses thrive in today’s competitive technology landscape" />
        </Box>
      </Grid>
     
      <Box
        sx={{
          marginTop: {
            xs: "30px",
            sm: "50px",
            md: "100px",
          },
          width: '100%', // Ensure this spans the full width of the parent container
    
        }}
      >
        <AccordionUsage />
      </Box>
    </Grid>
  );
}