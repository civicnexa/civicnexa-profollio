import React, { useState } from 'react'
import { CardComponent } from "../CardComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from '@mui/material';
import { ButtonGroup } from '@/ui/modules/components/CarouselCustomComponent';
import { responsive } from '@/common/utils';

export function TeamCarousel() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalItems = 5;

  const handleNext = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalItems);
  };

  const handlePrevious = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + totalItems) % totalItems);
  };

  const handleGoToSlide = (slide: number) => {
      setCurrentSlide(slide);
  };

  const carouselState = {
      currentSlide,
      totalItems,
  };

return (
  <Box>
     <Carousel responsive={responsive} 
             ssr={true} infinite={true}
             autoPlay={true}
             autoPlaySpeed={1000}
             keyBoardControl={true}
            //  renderDotsOutside={true}
            //  customTransition="all .5"
             transitionDuration={500}
             removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
             customButtonGroup={<ButtonGroup next={handleNext} previous={handlePrevious} goToSlide={handleGoToSlide} carouselState={carouselState} />}
             renderButtonGroupOutside={true}
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


