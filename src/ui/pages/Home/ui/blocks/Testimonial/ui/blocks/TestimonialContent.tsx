import { Box } from '@mui/material'
import React from 'react'
import { PageSubtitles, SectionTitle } from '@/ui/pages/Home/ui/components'
import { TestimonialCarousel } from './TestimonialCarousel'
// export default function TestimonialContent() {
//   return (
//     <Box sx={{width:'100%', border:'1px solid #F9FAFC', background: '#F9FAFC'
//         ,position:'relative',height:'50vh',marginTop:'30px'
//     }}>
//         <Box sx={{paddingLeft:'24px',paddingTop:'24px', width:'25%',height:'50vh',background: (theme) => theme.palette.primary.main, }} > <SectionTitle title='TESTIMONIAL'/>  </Box>
//         <Box sx={{position:'absolute', top:0,}}> <TestimonialCarousel/></Box>
//     </Box>
//   )
// }
export default function TestimonialContent() {
    return (
      <Box sx={{
        width: '100%',
        border: '1px solid #F9FAFC',
        background: '#F9FAFC',
        position: 'relative',
        height: '100vh',
        marginTop: '30px',
      }}>
        <Box sx={{
          paddingLeft: '24px',
          paddingTop: '24px',
          width: {
            md:'25%',
            sm:'30%'
          },
          height: '100vh',
          background: (theme) => theme.palette.primary.main,
          position: 'relative', // Ensure this box has relative positioning
          zIndex: 0, // Bring this box above the carousel
        }}>
          <SectionTitle title='TESTIMONIAL' />
        </Box>
        <Box sx={{
        position: 'absolute',
        top: '50%', // Center vertically
        left: '50%', // Center horizontally
        transform: 'translate(-50%, -50%)', // Adjust positioning to center
        width: '75%', // Ensure it covers the full width
        height: '100%', // Ensure it covers the full height of the outer box
        zIndex: 1, // Place the carousel below the title box
       display:'flex',
       flexDirection:{
        sm:'column',
        md:'row'
       },
       justifyContent:'center',
       alignItems:'center',
      //  marginLeft:'200px'
      }}>
        <TestimonialCarousel />
      </Box>
      </Box>
    );
  }