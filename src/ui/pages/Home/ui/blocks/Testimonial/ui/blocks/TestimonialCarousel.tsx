
import React, { useState } from 'react'
import { CardComponent } from '../components/CardComponent'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from '@mui/material';
import { ButtonGroup } from '@/ui/modules/components';


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
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Carousel 
        responsive={responsive} 
        ssr={true} 
        infinite={true}
        // autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        customButtonGroup={<ButtonGroup next={handleNext} previous={handlePrevious} sx={{  position: "absolute",
           top: {
                xxs:'-20%',
           md:'35%'
           },
           right: {
               md:'8%',
               xxs:'-25%'
           },
           height: "100px",
           display: "flex",
           alignItems: "center",
           justifyContent:{md:'space-between',xxs:'center'},
           gap: 4,
           width:'100%',
         
         }} goToSlide={handleGoToSlide} carouselState={carouselState}  />}
        renderButtonGroupOutside={true}
      >
        {Array.from({ length: 1 }).map((_, index) => (
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
