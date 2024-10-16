import React, { useState } from 'react'
import { CardComponent } from "../CardComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from '@mui/material';
import { ButtonGroup } from '@/ui/modules/components/CarouselCustomComponent';
import { responsive } from '@/common/utils';

export function TeamCarousel() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1,
        }
      };
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
             customButtonGroup={<ButtonGroup next={handleNext} previous={handlePrevious} sx={{  position: "absolute",
                top: {
                     xxs:'0',
                md:'-40%'
                },
                right: "0",
                height: "100px",
                width: "fit-content",
                display: "flex",
                alignItems: "center",
                gap: 4
              }} goToSlide={handleGoToSlide} carouselState={carouselState} />}
             renderButtonGroupOutside={true}
            >
              {Array.from({ length: 3 }).map((_, index) => (
              <Box
                  key={index}
                  sx={{ margin: {md:'0 10px',xxs:'100px 0'}, position: 'relative' }}
              >
                  <CardComponent />
              </Box>
          ))}
               
            </Carousel>
      
  </Box>
);
}


