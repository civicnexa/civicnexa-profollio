import React, { useState } from 'react'
import { CardComponent } from "../CardComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from '@mui/material';
import { ButtonGroup } from '@/ui/modules/components/CarouselCustomComponent';

const data = [
  {
    name: "Balogun Micheal",
    position: "Team Lead",
    link: "https://www.linkedin.com/in/balogun-micheal-7599141a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Oladunjoye Abiola",
    position: "Lead Engineer",
    link: "https://www.linkedin.com/in/abiola-oladunjoye-8b61351a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    name: "Akinsemoyin Abdul Gafar",
    position: "FrontEnd Engineer",
    link: "https://www.linkedin.com/in/abdul-gafar-akinsemoyin-64450a235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Ajibade Yakub",
    position: "BackEnd Engineer",
    link: "https://www.linkedin.com/in/yakub-ajibade-3954451b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Hakeem Saka",
    position: "Product Designer",
    link: "https://www.linkedin.com/in/harqheem?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Bamgbelu Adeola",
    position: "Business Support Officer",
    link: "https://www.linkedin.com/in/adeola-bamgbelu-558349279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Owolabani Ayobami",
    position: "FrontEnd Developer Intern",
    link: "https://www.linkedin.com/in/owolabani-ayobami-17753b1a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
]

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
  <Box sx={{ position: "relative" }}>
     <Carousel responsive={responsive} 
      ssr={true} 
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
     renderDotsOutside={true}
    //  customTransition="all .5"
      transitionDuration={500}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      customButtonGroup={<ButtonGroup next={handleNext} previous={handlePrevious} sx={{  position: "absolute",
        top: {
          xxs:'0',
          md:'-30%'
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
    {data.map((item, index) => (
      <Box
          key={index}
          sx={{ margin: {md:'0 10px',xxs:'100px 0'}, position: 'relative' }}
      >
          <CardComponent name={item.name} position={item.position} href={item.link} />
      </Box>
    ))}
        
  </Carousel>
      
  </Box>
);
}


