import { alpha, Box, useTheme } from "@mui/material";
import { PageSubtitles } from "../../components";
import { CardComponent } from "./ui/components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AppButton } from "@/ui/modules/components/AppButton";
import React, { useState } from "react";
import { ArrowForward, ArrowBack } from '@mui/icons-material';

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
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const ButtonGroup: React.FC<CustomButtonGroupProps> = ({ next, previous, ...rest }) => {
    const theme = useTheme();
const { carouselState: { currentSlide } } = rest;
return (
    <Box className="carousel-button-group"
     sx={{
        position: "absolute",
        top: 0,
        right: "10%",
        height: "100px",
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        gap: 4
     }}
    >
        <AppButton
         sx={{
            background: (theme) => theme.general.btnBg,
            width: ".5rem",
            height: "4rem",
            borderRadius: "50%",
            color: (theme) => theme.palette.background.default,
            "&:hover": {
                background: alpha(theme.general.btnBg, .4),
            },
         }} 
         className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()}>
            <ArrowBack sx={{ width: "16px", height: "16px" }} />
        </AppButton>
        <AppButton 
         sx={{
            background: (theme) => theme.general.btnBg,
            width: ".5rem",
            height: "4rem",
            borderRadius: "50%",
            color: (theme) => theme.palette.background.default,
            "&:hover": {
                background: alpha(theme.general.btnBg, .4),
            },
         }} 
         onClick={() => next()}>
            <ArrowForward sx={{ width: "16px", height: "16px" }} />
        </AppButton>
    </Box>
);
};

export function Projects() {
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
            padding: "20px 80px",
            marginBottom: "96px",
            position: "relative"
         }}
        >
            <PageSubtitles subtitle="Projects" />
            <Carousel responsive={responsive} 
             ssr={true} infinite={true}
             autoPlay={true}
             autoPlaySpeed={4000}
             keyBoardControl={true}
             transitionDuration={500}
             removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
             customButtonGroup={<ButtonGroup next={handleNext} previous={handlePrevious} goToSlide={handleGoToSlide} carouselState={carouselState}  />}
             renderButtonGroupOutside={true}
            >
                {Array.from({ length: 5}).map((_, index) => (
                    <CardComponent key={index} />
                ))}
            </Carousel>
        </Box>
    )
}