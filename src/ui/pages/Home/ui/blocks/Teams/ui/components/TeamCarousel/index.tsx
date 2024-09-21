import React, { useRef, useState } from 'react'
import { CardComponent } from "../CardComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AppButton } from "@/ui/modules/components/AppButton";
import { Box, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
export function TeamCarousel() {
    interface CustomButtonGroupProps {
        next: () => void;
        previous: () => void;
        goToSlide: (slide: number) => void;
        carouselState: {
            currentSlide: number;
            totalItems: number;
        };
    }
    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    
    const ButtonGroup: React.FC<CustomButtonGroupProps> = ({ next, previous, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="carousel-button-group">
            <AppButton className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
            <AppButton onClick={() => next()} />
            {/* <AppButton onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </AppButton> */}
        </div>
    );
    };



return (
  <Box sx={{ position: 'relative' }}>
     <Carousel responsive={responsive} 
             ssr={true} infinite={true}
             autoPlay={true}
             autoPlaySpeed={1000}
             keyBoardControl={true}
            //  renderDotsOutside={true}
            //  customTransition="all .5"
             transitionDuration={500}
             removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            //  customButtonGroup={<ButtonGroup />}
            //  renderButtonGroupOutside={true}
            >
              {Array.from({ length: 3 }).map((_, index) => (
              <Box
                  key={index}
                  sx={{ margin: '0 10px', position: 'relative' }}
              >
                  <CardComponent />
              </Box>
          ))}
               
            </Carousel>
      
  </Box>
);
}


