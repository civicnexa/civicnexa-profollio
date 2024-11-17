import { Box } from "@mui/material";
import { PageSubtitles } from "../../components";
import { CardComponent } from "./ui/components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";
import { ButtonGroup } from "@/ui/modules/components/CarouselCustomComponent";
import xkartImg from './ui/assets/images/xkart.png';
import sparkImg from './ui/assets/images/spark.png';

const data = [
  {
    name: "X-Kart Racing Series",
    link: "http://www.xkartrace.com/",
    img: xkartImg
  },
  {
    name: "Spark by Civicnexa Digital Solutions",
    link: "#",
    img: sparkImg,
  },
]

export function Projects() {
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

    return(
        <Box
         sx={{
            padding: {
              xxs: "20px 16px",
              sm: "20px 80px"
            },
            marginBottom: "96px",
            position: "relative",
       
         }}
        >
            <PageSubtitles subtitle="Projects" />
            <Carousel responsive={responsive} 
             ssr={true} 
            //  infinite={true}
            //  autoPlay={true}
             autoPlaySpeed={4000}
             keyBoardControl={true}
             transitionDuration={500}
             removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
             customButtonGroup={<ButtonGroup next={handleNext} previous={handlePrevious} sx={{  position: "absolute",
                top: {
                     xxs:'0%',
                md:'10%'
                },
                right: {
                    md:'10%',
                    xxs:'10%'
                },
                height: "100px",
                width: "fit-content",
                display: "flex",
                alignItems: "center",
                gap: 4,
                marginTop:'30px'
              }} goToSlide={handleGoToSlide} carouselState={carouselState}  />}
             renderButtonGroupOutside={true}
            >
                {data.map((item, index) => (
                    <Box
                    key={index}
                    sx={{
                      width: '100%', // Make the card occupy full width
                      height:'100%',
                      marginTop: '80px', // Add padding around the card
                    }}
                  >
                    <CardComponent img={item.img} link={item.link} name={item.name} />
                  </Box>
                ))}
            </Carousel>
        </Box>
    )
}