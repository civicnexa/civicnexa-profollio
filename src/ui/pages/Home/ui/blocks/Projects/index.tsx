import { Box } from "@mui/material";
import { PageSubtitles } from "../../components";
import { CardComponent } from "./ui/components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";
import { ButtonGroup } from "@/ui/modules/components/CarouselCustomComponent";
import { responsive } from "@/common/utils";


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