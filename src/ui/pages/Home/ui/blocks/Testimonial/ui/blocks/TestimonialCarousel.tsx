
import React, { useRef, useState } from 'react'
import { CardComponent } from '../components/CardComponent'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AppButton } from "@/ui/modules/components/AppButton";
import { Box, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
// export function TestimonialCarousel() {
//     interface CustomButtonGroupProps {
//         next: () => void;
//         previous: () => void;
//         goToSlide: (slide: number) => void;
//         carouselState: {
//             currentSlide: number;
//             totalItems: number;
//         };
//     }
    
//     const responsive = {
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 1,
//           slidesToSlide: 1 // optional, default to 1.
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 1,
//           slidesToSlide: 1 // optional, default to 1.
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1,
//           slidesToSlide: 1 // optional, default to 1.
//         }
//       };
    
//     const ButtonGroup: React.FC<CustomButtonGroupProps> = ({ next, previous, ...rest }) => {
//     const { carouselState: { currentSlide } } = rest;
//     return (
//         <div className="carousel-button-group">
//             <AppButton className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
//             <AppButton onClick={() => next()} />
//             {/* <AppButton onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </AppButton> */}
//         </div>
//     );
//     };



// return (
//   <Box sx={{ position: 'relative', width:'100%'}}>
//      <Carousel responsive={responsive} 
//              ssr={true} infinite={true}
//              autoPlay={true}
//              autoPlaySpeed={1000}
//              keyBoardControl={true}
//              swipeable={true}
//              draggable={true}
//             //  arrows={true}
         
//             //  renderDotsOutside={true}
//             //  customTransition="all .5"
//              transitionDuration={500}
//              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
//             //  customButtonGroup={<ButtonGroup />}
//             //  renderButtonGroupOutside={true}
//             >
//               {Array.from({ length: 3 }).map((_, index) => (
//               <Box
//                   key={index}
//                   sx={{
//                     width: '100%', // Make the card occupy full width
//                     display: 'flex',
//                     justifyContent: 'start', // Center content inside the card
                 
//                     position: 'relative',
//                     margin: '0 auto'
//                   }}
//               >
//                   <CardComponent />
//               </Box>
//           ))}
               
//             </Carousel>
//              {/* Custom arrows positioned at the center */}
//       {/* <Box sx={{
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         display: 'flex',
//         justifyContent: 'flex-start',
//         width: '30%', // Ensure it covers the full width for arrow positioning
//         zIndex: 1, // Ensure arrows are above other content
//         pointerEvents: 'none', // Prevent mouse events on the wrapper
//       }}>
//         <Box sx={{ pointerEvents: 'all' }}> 
//           <ArrowBack />
//         </Box>
//         <Box sx={{ pointerEvents: 'all' }}> 
//           <ArrowForward />
//         </Box>
//       </Box> */}
      
//   </Box>
// );
// }


export function TestimonialCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    }
  };

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Carousel 
        responsive={responsive} 
        ssr={true} 
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        swipeable={true}
        draggable={true}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <Box
            key={index}
            sx={{
              width: '100%', // Make the card occupy full width
              height:'100%',
              display: 'flex',
              justifyContent: 'center', // Center the card
              padding: 2, // Add padding around the card
            }}
          >
            <CardComponent />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
